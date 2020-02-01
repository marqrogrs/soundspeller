import os, shutil, subprocess


def flac2wav(flac_path):
    flacs = os.listdir(flac_path)

    for flac in flacs:
        flac = flac.split('.')[0]
        print(flac)

        subprocess.run('ffmpeg -i {0}/{1}.aiff {0}/{1}.mp3 -n'.format(flac_path, flac))


if __name__ == "__main__":
    path = os.path.dirname('./../src/components/audio/')
    flac2wav(path)
