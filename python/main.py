import os
import subprocess


def flac2wav(flac_path):
    flacs = os.listdir(flac_path)


    for flac in flacs:
        flac = flac.split('.')[0]
        print(flac)

        subprocess.run('ffmpeg -i {0}/{1}.flac {0}/{1}.ogg'.format(flac_path, flac))

if __name__ == "__main__":
    path = os.path.dirname('./../src/components/flac/')
    flac2wav(path)
