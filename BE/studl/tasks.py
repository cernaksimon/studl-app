from celery import shared_task
import webbrowser

@shared_task
def ess_spyder():
    webbrowser.open('https://www.youtube.com/watch?v=g-7rfHn4AR8&list=LL&index=4')