from django.shortcuts import render
from django_react.settings import BASE_DIR
# from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from rest_framework.response import Response
from rest_framework.decorators import api_view

import song_creator

# Create your views here.


@api_view(['GET'])
def getData(request):
    person = {'name': 'Cebra', 'age': 24}
    return Response(person)

@api_view(['GET'])
def getSong(request):
    song = open('test.mid', 'r')
    return Response(song)

@api_view(['POST'])
@never_cache
def postData(request):
    
    if request.data['firstName'] == 'juan':
        var1 = song_creator.mel_2
        var2 = song_creator.chord_2
        created_song = song_creator.create_song(var1, var2)
        return Response(created_song)
    
    var1 = song_creator.mel_1
    var2 = song_creator.bass_1
    created_song = song_creator.create_song(var1, var2)
    
    return Response(created_song)

        

        

    