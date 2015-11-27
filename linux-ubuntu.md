# linux-ubuntu

## shell

- `sudo apt-get clean` - clean clears out the local repository of retrieved package files. It removes everything but the lock file from /var/cache/apt/archives/ and /var/cache/apt/archives/partial/. When APT is used as a dselect(1) method, clean is run automatically. Those who do not use dselect will likely want to run apt-get clean from time to time to free up disk space.

- `sudo apt-get autoclean` - Like clean, autoclean clears out the local repository of retrieved package files. The difference is that it only removes package files that can no longer be downloaded, and are largely useless. This allows a cache to be maintained over a long period without it growing out of control. The configuration option APT::Clean-Installed will prevent installed packages from being erased if it is set to off.

- `sudo apt-get autoremove` - is used to remove packages that were automatically installed to satisfy dependencies for some package and that are no more needed.

## ssd/hdd

1. `/` - 25gb
2. `swap` - same as RAM
3. `/home` - all space
4. ~15% reserved space for ssd

http://help.ubuntu.ru/wiki/ssd

## Ubuntu greeter

run: `sudo gedit /etc/lightdm/lightdm.conf`

add:
```
[SeatDefaults]
greeter-session=unity-greeter
allow-guest=false
play-ready-sound=false
```

## tweaks

- http://ubuntu-tweak.com/ - cleaner here
- CompizConfig Settings Manager - install in app store

## fonts

place new and local fonts to user /home/.fonts/
- for global ttf fonts `sudo mkdir /usr/share/fonts/truetype/newfonts`
- `sudo apt-get install ttf-mscorefonts-installer`
- `cd && wget http://webupd8.googlecode.com/files/install-google-fonts`
- `chmod +x install-google-fonts`
- `./install-google-fonts`
- `sudo fc-cache -fv`
- `sudo dpkg-reconfigure fontconfig`
- `fc-list`

# fonts list

- Consolas
- Ubuntu Mono
- [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) from adobe
- [Hack](https://github.com/chrissimpkins/Hack)
- Menlo
- Monaco
- Inconsolata
