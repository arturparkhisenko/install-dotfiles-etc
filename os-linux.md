# linux-ubuntu
- [Desktop Linux Problems](http://itvision.altervista.org/why.linux.is.not.ready.for.the.desktop.current.html)

## ssd/hdd
1. `/` - 25gb
2. `swap` - same as RAM
3. `/home` - all space
4. ~15% reserved space for ssd

[http://help.ubuntu.ru/wiki/ssd](http://help.ubuntu.ru/wiki/ssd)

## Nvidia
### After install of drivers in driver-manager
- `sudo nvidia-settings` add panel widget, or go to nvidia settings
- save a x-server profile to home folder
- reboot

### Nvidia for Ubuntu only (manually install)
- [Nvidia BinaryDriverHowto ](https://help.ubuntu.com/community/BinaryDriverHowto/Nvidia)

- usual driver install:
  - `sudo add-apt-repository ppa:graphics-drivers/ppa`
  - `sudo add-apt-repository ppa:xorg-edgers/ppa -y` [xorg-edgers ppa](https://launchpad.net/~xorg-edgers/+archive/ubuntu/ppa)
  - `sudo apt-get update`
  - `sudo apt-get install nvidia-XXX (352, only major)` - check latest [here](http://www.nvidia.com/page/home.html)
  - or `sudo apt-get install nvidia-current` - for latest (352)

#### Unnecessary
In the "device" section of your xorg.conf:
- `Option "RegistryDwords" "PowerMizerEnable=0x1; PowerMizerDefaultAC=0x1"`
- [compiz-nvidia-refresh-test](https://launchpad.net/~townsend/+archive/ubuntu/compiz-nvidia-refresh-test)

### ATI
- download their latest .run file
- `sudo apt-get install build-essential`
- `sudo apt-get install linux-headers-$(uname -r)`
- `sudo apt-get install linux-source`
- `sudo sh ati-driver-installer-9-3-x86.x86_64.run`

## shell
- `sudo apt-get clean` - clean clears out the local repository of retrieved package files. It removes everything but the lock file from /var/cache/apt/archives/ and /var/cache/apt/archives/partial/. When APT is used as a dselect(1) method, clean is run automatically. Those who do not use dselect will likely want to run apt-get clean from time to time to free up disk space.
- `sudo apt-get autoclean` - Like clean, autoclean clears out the local repository of retrieved package files. The difference is that it only removes package files that can no longer be downloaded, and are largely useless. This allows a cache to be maintained over a long period without it growing out of control. The configuration option APT::Clean-Installed will prevent installed packages from being erased if it is set to off.
- `sudo apt-get autoremove` - is used to remove packages that were automatically installed to satisfy dependencies for some package and that are no more needed.

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
- [http://ubuntu-tweak.com/](http://ubuntu-tweak.com/) - cleaner here
- CompizConfig Settings Manager - install in app store
- [fix for suspend/hibernate on old ubuntu/videocard](http://chriseiffel.com/everything-linux/how-i-got-suspend-and-hibernate-working-in-linux-ubuntu-11-04-mint-11/)

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
- Inconsolata
- Menlo
- Monaco
- Ubuntu Mono
- [Hack](https://github.com/chrissimpkins/Hack)
- [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) from adobe
