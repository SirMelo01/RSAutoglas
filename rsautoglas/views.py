from django.shortcuts import render, redirect
from rsautoglas.ycms.models import FAQ, Message, TextContent, fileentry, Galerie, GaleryImage
import datetime
from django.http import HttpResponseRedirect


def load_index(request):
    faq = FAQ.objects.all()

    context = {
        'FAQ': faq,
    }

    # Text Contents
    if TextContent.objects.filter(name="main_hero").exists():
        context["heroText"] = TextContent.objects.get(name='main_hero')

    if TextContent.objects.filter(name="main_responsive").exists():
        context["responsiveText"] = TextContent.objects.get(name='main_responsive')

    if TextContent.objects.filter(name="main_cms1").exists():
        context["cmsText1"] = TextContent.objects.get(name='main_cms1')
    if TextContent.objects.filter(name="main_cms2").exists():
        context["cmsText2"] = TextContent.objects.get(name='main_cms2')
    if TextContent.objects.filter(name="main_cms3").exists():
        context["cmsText3"] = TextContent.objects.get(name='main_cms3')

    if TextContent.objects.filter(name="main_price").exists():
        context["priceText"] = TextContent.objects.get(name='main_price')

    if TextContent.objects.filter(name="main_team").exists():
        context["teamText"] = TextContent.objects.get(name='main_team')

    # Galery
    if Galerie.objects.filter(place='main_hero').exists():
        context["heroImages"] = Galerie.objects.get(place='main_hero').images.all()
        
    if Galerie.objects.filter(place='main_responsive_desktop').exists():
        context['responsiveDesktopImages'] = Galerie.objects.get(place='main_responsive_desktop').images.all()
        
    if Galerie.objects.filter(place='main_responsive_handy').exists():
        context['responsiveHandyImages'] = Galerie.objects.get(place='main_responsive_handy').images.all()

    # Images
    if fileentry.objects.filter(place='main_cms1').exists():
        context["cmsImage1"] = fileentry.objects.get(place='main_cms1')
    if fileentry.objects.filter(place='main_cms2').exists():
        context["cmsImage2"] = fileentry.objects.get(place='main_cms2')
    if fileentry.objects.filter(place='main_cms3').exists():
        context["cmsImage3"] = fileentry.objects.get(place='main_cms3')

    return render(request, 'pages/index.html', context=context)

def kontaktform(request):
    success = False
    current_date_time = datetime.datetime.now()
    if request.method == 'POST':
        Message.objects.create(name = request.POST["name"], email=request.POST['email'], message=request.POST['message'], date=current_date_time, seen=False)

        return render(request, 'pages/kontakt.html', {'success': True})

    return render(request, 'pages/kontakt.html', {'success': success})
