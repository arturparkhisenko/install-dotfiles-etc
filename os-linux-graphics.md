# Nvidia

### After install

- `sudo nvidia-settings` add panel widget, or go to nvidia settings
- save a x-server profile to home folder
- reboot

## Nvidia for Ubuntu only

- nvidia on ubuntu [link](https://help.ubuntu.com/community/BinaryDriverHowto/Nvidia)
- optimus with (nvidia-prime](http://help.ubuntu.com/wiki/nvidia-prime)
- `sudo apt-get install nvidia-prime`
- `sudo add-apt-repository ppa:nilarimogard/webupd8`
- `sudo apt-get update`
- `sudo apt-get install prime-indicator` - [prime-indicator](https://github.com/beidl/prime-indicator)
- fix for black screen on [ubuntu+nvidia](http://askubuntu.com/questions/691946/how-to-solve-black-screen-problem-after-installing-nvidia-drivers-on-ubuntu-15-1)
- `sudo add-apt-repository ppa:graphics-drivers/ppa`
- `sudo add-apt-repository ppa:xorg-edgers/ppa -y` [xorg-edgers ppa](https://launchpad.net/~xorg-edgers/+archive/ubuntu/ppa)
- `sudo apt-get update`
- `sudo apt-get install nvidia-XXX (352, only major)` - check latest [here](http://www.nvidia.com/page/home.html)
- or `sudo apt-get install nvidia-current` - for latest (352)

# ATI

- download their latest .run file
- `sudo apt-get install build-essential`
- `sudo apt-get install linux-headers-$(uname -r)`
- `sudo apt-get install linux-source`
- `sudo sh ati-driver-installer-9-3-x86.x86_64.run`
