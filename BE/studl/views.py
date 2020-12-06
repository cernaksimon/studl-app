from django.shortcuts import render

sluzba = [
    {
        'delodajalec': 'Microsoft',
        'naziv': 'Python programer',
        'opis': 'Junior python programer.',
        'date_posted': 'August 27, 2018'
    },
    {
        'delodajalec': 'Facebook',
        'naziv': 'React programer',
        'opis': 'Senior python programer.',
        'date_posted': 'August 13, 2018'
    },
    {
        'delodajalec': 'Google',
        'naziv': 'Server admin',
        'opis': 'Server admin z 8+ let izkušenj.',
        'date_posted': 'July 12, 2020'
    },
    {
        'delodajalec': 'IBM',
        'naziv': 'Hardware mojster',
        'opis': 'Majster na podrocju hardwara.',
        'date_posted': 'January 14, 2013'
    },
    {
        'delodajalec': 'Simon cernak d.o.o.',
        'naziv': 'Scum master',
        'opis': 'Izkušenj scum master k ne popizdi prehitro in simonu smrdi iz ust.',
        'date_posted': 'Februar 30, 1000'
    },
]


def home(request):
    context = {
        'dela': sluzba
    }
    return render(request, 'studl/home.html', context)


def about(request):
    return render(request, 'studl/about.html', {'title': 'Informacijska točka'})
