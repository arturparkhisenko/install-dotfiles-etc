# nvidia
- Add [this](https://launchpad.net/~xorg-edgers/+archive/ubuntu/ppa) ppa
- `sudo add-apt-repository ppa:xorg-edgers/ppa -y`
- `sudo apt-get update`
- `sudo apt-get install nvidia-XXX (352, only major)` - check latest [here](http://www.nvidia.com/page/home.html)
- or `sudo apt-get install nvidia-current` - for latest

### after install:
- add panel widget, or go to nvidia settings
- save a x-server profile to home folder
- reboot

# ati
- download their latest .run file
- `sudo apt-get install build-essential`
- `sudo apt-get install linux-headers-$(uname -r)`
- `sudo apt-get install linux-source`
- `sudo sh ati-driver-installer-9-3-x86.x86_64.run`
