from __future__ import absolute_import, unicode_literals

import os

from celery import Celery
from celery import shared_task

"""
REQUIREMENTS:
installed django-celery-beat (pip, conda, etc...)
installed RabbitMQ (+erlang)
ran RabbitMQ service
implemented task (@shared_task, @periodic_task, ...)
registered task in "setup_periodic_tasks" (below)
ran celery-beat: "celery -A studlApp beat"
ran worker: "celery -A studlApp worker -l INFO"
"""

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'studlApp.settings')

app = Celery('studlApp')

@app.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    sender.add_periodic_task(30.0, ess_crawl, name='spyder_test')

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
app.config_from_object('django.conf:settings', namespace='CELERY')

app.conf.timezone = 'Europe/London'
# Load task modules from all registered Django app configs.
app.autodiscover_tasks()

@shared_task
def ess_crawl():
    import django
    django.setup()
    import scrapy
    from scrapy.crawler import CrawlerProcess
    import JobSpyder

    c = CrawlerProcess({
        'USER_AGENT': 'Mozilla/5.0',
        'FEED_FORMAT': 'csv',
        'FEED_URI': 'output.csv',
    })

    c.crawl(JobSpyder.JobSpyder)
    c.start()

    return 'Works'
@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')