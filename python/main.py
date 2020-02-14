import os, shutil, subprocess, json
from insert import insert

def flac2wav(flac_path):
    flacs = os.listdir(flac_path)

    for flac in flacs:
        flac = flac.split('.')[0]
        print(flac)

        subprocess.run('ffmpeg -i {0}/{1}.aiff {0}/{1}.mp3 -n'.format(flac_path, flac))


with open('test.json') as json_file:
    data = json.load(json_file)


    for word in data['words']:
        insert("ssLexicon", 'word', 'phon', 'grap', 'syll', word=word['word'], phon=word['phon'], grap=word['grap'], syll=word['syll'])
