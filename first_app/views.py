from django.shortcuts import render

# Create your views here.
def firstView(request):
    return render(request, 'index.html', {'test': 'holaaaaaaaaa'})