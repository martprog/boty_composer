
from midiutil import MIDIFile
import random
from datetime import datetime

track    = 0
channel  = 0
time     = 0    # In beats
duration = 1    # In beats
tempo    = 72   # In BPM


mel_1 = [70, 72, 73, 75, 77, 79, 81, 82]
bass_1 = [(50, 55, 66),
        (40, 50, 60),
        (53, 60, 74)]

mel_2 = [67, 69, 71, 74, 76, 79, 78]
chord_2 = [
    (55, 62),
    (54, 59, 62),
    (48, 55,64),
    (43, 50, 59),
]


def create_song(melody, bass):
    MyMIDI = MIDIFile(1, adjust_origin=False)

    m_volume = [80, 88, 99, 100, 103]
    b_volume = 76
    m_time = 0
    m_duration = 1
    b_time = 0
    b_duration = 3
    
    for b in bass:
        for i in range(4):
            for n in b:
                time_note = random.uniform(0, 40)
                vol_note = random.choice(m_volume)
                MyMIDI.addNote(track, channel, n, b_time, b_duration, b_volume)
                m_key = random.choice(melody)
                MyMIDI.addNote(track, channel, m_key, time_note, m_time, vol_note)
                m_time += 1
                #print("b_time is %s and m_time is %s in %s" %(b_time, m_time, i)) 
            b_time += 3
             
    today = datetime.now()
    date_string = today.strftime("%Y%m%d%H%M%S")
    # if melody == mel_1 and bass == bass_1:
    file = "song%s.mid" % date_string
        

    with open("media/%s" % file, "wb") as output_file:
        MyMIDI.writeFile(output_file)
    
    del MyMIDI
    return file



