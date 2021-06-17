import scrapy
from studl.models import JobPost


class JobSpyder(scrapy.Spider):
    name = "jobspyder"
    FEED_EXPORT_ENCODING = 'utf-8'

    start_urls = [
        'https://www.studentski-servis.com/studenti/prosta-dela/',
    ]
    page_num = 1
    def parse(self, response, **kwargs):
        if self.page_num > 73:
            return
        for job_post in response.css('article.job-item'):

            title = job_post.css('h3::text')[0].get()


            description = job_post.css('p.description::text')[0].get()


            payment_a = job_post.css('a strong::text')[0].get()
          

            payment_b = ''
            duration = ''
            schedule = ''
            free_positions = ''
            id = job_post.css('span.job-code.mb-0 strong::text').get()

            try:
                if job_post.css('a::text')[0].get():
                    payment_b = job_post.css('a::text')[0].get()
            except:
                pass

            try:
                if job_post.css('div.row div.col-md ul.job-attributes li strong::text')[1].get():
                    duration = job_post.css('div.row div.col-md ul.job-attributes li strong::text')[1].get()
            except:
                pass
            try:
                if job_post.css('div.row div.col-md ul.job-attributes li strong::text')[2].get():
                    schedule = job_post.css('div.row div.col-md ul.job-attributes li strong::text')[2].get()
            except:
                pass
            try:
                if job_post.css('div.row div.col-md ul.job-attributes li strong::text')[0].get():
                    free_positions = job_post.css('div.row div.col-md ul.job-attributes li strong::text')[0].get()
            except:
                pass

            payment = payment_a
            if payment_b != '' and payment_b != ' ' and payment_b != None:
                payment += "/" + payment_b

            qs = JobPost.objects.filter(id=id)
            if qs:
                pass
            else:
                JobPost(
                    id=id,
                    title=title,
                    description=description,
                    payment=payment,
                    duration=duration,
                    schedule=schedule,
                    free_positions=free_positions
                ).save()

        page_number = response.css('a.page-link.page-nav::attr(data-page)').get()
        if page_number is not None:
            next_url = f'?page={self.page_num}'
            next_page = f'{self.start_urls[0]}{next_url}'
            print(f'\n PAGE URL: {next_page} \n')
            yield scrapy.Request(next_page, self.parse)

            self.page_num += 1