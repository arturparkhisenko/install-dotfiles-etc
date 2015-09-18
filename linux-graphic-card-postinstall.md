# nvidia
- `sudo add-apt-repoistory ppa:xorg-edgers/ppa`
- `sudo apt-get update`
- `sudo apt-get install nvidia-XXX (355)` - check latest [here](https://launchpad.net/~xorg-edgers/+archive/ubuntu/ppa)

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
