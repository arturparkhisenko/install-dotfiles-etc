<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [dual-boot](#dual-boot)
  - [uefi](#uefi)
  - [3 volumes on /sda with MBR](#3-volumes-on-sda-with-mbr)
  - [in bios, disable](#in-bios-disable)
  - [boot fix, run from liveCD](#boot-fix-run-from-livecd)
  - [time problem on dualboot](#time-problem-on-dualboot)
  - [battery saving on lenovo and linux](#battery-saving-on-lenovo-and-linux)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# dual-boot

## uefi

- [UEFI and GPT, habr, ru](https://habrahabr.ru/post/259283/)
- [UEFI and Secure Boot, habr, ru](https://habrahabr.ru/post/185492/)

## 3 volumes on /sda with MBR

- sda1 ntfs 200gb for win
- sda2 ext4 / 20gb
- sda2 swap 4gb
- sda3 ext4 /home all space

## in bios, disable

- Secure Boot
- Legacy Boot
- QuickBoot / FastBoot
- Intel Smart Response Technology (SRT)

## boot fix, run from liveCD

- [Boot-repair](https://help.ubuntu.com/community/Boot-Repair)
- `sudo add-apt-repository ppa:yannubuntu/boot-repair`
- `sudo apt-get update`
- `sudo apt-get install -y boot-repair`
- run boot-repair, also u can install grub-customizer

## time problem on dualboot

Switch to windows way and use «UTC», we need edit **/etc/default/rcS** like that:

- `sudo gedit /etc/default/rcS` - or nano or etc.
- Set:
- `UTC=no`
- Also add sync:
- `sudo apt-get update`
- `sudo apt-get install ntp`

## battery saving on lenovo and linux

- [source](https://askubuntu.com/questions/34452/how-can-i-limit-battery-charging-to-80-capacity)
- [ThinWiki](http://www.thinkwiki.org/wiki/Tp_smapi)
