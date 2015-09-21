# dualboot
### 3 volumes on /sda with MBR:
- sda1 ntfs 200gb for win
- sda2 ext4 / 20gb
- sda2 swap 4gb 
- sda3 ext4 /home all space

### in bios, disable:
- Secure Boot
- Legacy Boot
- QuickBoot / FastBoot
- Intel Smart Response Technology (SRT)

### boot fix, run from liveCD
- `sudo add-apt-repository ppa:yannubuntu/boot-repair`
- `sudo apt-get update`
- `sudo apt-get install -y boot-repair`
- run boot-repair, also u can install grub-customizer

## time problem on dualboot:
Switch to windows way and use «UTC», we need edit **/etc/default/rcS** like that:
- `sudo gedit /etc/default/rcS` - or nano or etc.
Set:
- `UTC=no`
Also add sync:
- `sudo apt-get update`
- `sudo apt-get install ntp`
