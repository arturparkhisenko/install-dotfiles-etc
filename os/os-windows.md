# OS Windows

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [CLI commands](#cli-commands)
- [Intel Drivers](#intel-drivers)
- [Updates](#updates)
- [Problems solving](#problems-solving)
  - [How to remove long name folders/files](#how-to-remove-long-name-foldersfiles)
- [Soft](#soft)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## CLI commands

- Get windows key cmd command: `wmic path SoftwareLicensingService get OA3xOriginalProductKey`

## Intel Drivers

- [By CPU generations](https://www.intel.com/content/www/us/en/support/products/80939/graphics-drivers.html)
- [Download center](https://downloadcenter.intel.com/)

## Updates

1. Stop service Windows Update
2. Clean `C:\Windows\SoftwareDistribution\`
3. [CleanUnwantedUpdates](https://github.com/KOLANICH/CleanUnwantedUpdates)
4. [WinsxsLite](https://sites.google.com/site/winsxslite/)
5. [DisableWinTracking](https://github.com/10se1ucgo/DisableWinTracking) or [BlockWindows aka Anti-Spy](https://github.com/WindowsLies/BlockWindows)

## Problems solving

- [blue_screen_view](http://www.nirsoft.net/utils/blue_screen_view.html#DownloadLinks)
- cmd command: `sfc /scannow` check and replace
- cmd command: `bootrec /FixMbr`
- cmd command: `bootrec /FixBoot`
- cmd command: `bootrec /RebuildBcd`

### How to remove long name folders/files

1. Start a commandprompt (no admin privileges needed)
2. Use `cd` to navigate to the folder you want to go (you can use `tab` to autocomplete names
3. type `subst j: .` to create the driveletter association. (instead of the . you can also type the entire path)
4. Now in explorer you have a new letter. Go to it and do whatever you need to do to the .cache files.
5. Go back to your cmd window and type `subst /d j:` to remove the drive or alternatively, restart your pc.

## Soft

- [x] [Ccleaner](https://www.ccleaner.com/ccleaner/download)
- [x] [Github Desktop](https://desktop.github.com/)
- [x] [KLite Full](http://www.codecguide.com/download_k-lite_codec_pack_full.htm)
- [x] [GeForce Experience](https://www.nvidia.com/en-us/geforce/geforce-experience/)
- [x] [Notepad++](https://notepad-plus-plus.org/download/)

- [adwCleaner](https://toolslib.net/downloads/viewdownload/1-adwcleaner/)
- [alldup](http://www.alldup.info/en_download_alldup.php)
- [ASCON KOMPAS](http://edu.ascon.ru/main/download/freeware/)
- [Babun](https://babun.github.io/)
- [blindscanner](http://www.blindscanner.com/ru/download.html)
- [Chocolatey](https://chocolatey.org/)
- [clink](https://mridgers.github.io/clink/)
- [Cmder](http://cmder.net/)
- [DeepRemove](https://github.com/juanpablojofre/deepremove)
- [Defraggler](https://www.ccleaner.com/defraggler/download)
- [eyeleo](http://eyeleo.com/)
- [FileOptimizer](https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer)
- [handbrake](https://handbrake.fr/) (video conv)
- [hwinfo](https://www.hwinfo.com/)
- [macomfort](https://leonardo.re/macomfort/)
- [posh-git](https://github.com/dahlbyk/posh-git)
- [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
- [svg explorer extension](https://archive.codeplex.com/?p=svgextension)
- [syncback free](https://www.2brightsparks.com/freeware/index.html)
- [wox](http://www.wox.one/)

- Audacity
- avc-free
- avz4
- CCEnhancer
- CD burner xp cdbxp
- ClassicShell
- Composer
- Corel Draw / Corel Painter
- Curl
- DarkComet RAT Legacy
- DevID_agent
- DjVuSolo
- DoNotSpy10
- DoPDF
- dxWebSetup
- FreeCommander
- freeFTPd
- freeSSHd
- HDDLLF
- HijackThis
- i.Disk
- IpScan
- JPEGmini
- Kompas
- mp3tag
- MySQLWorkbench
- Novicorp WinToFlash
- Open Server
- procexp
- Rufus
- SOCRAT (translator)
- Solid Works
- Sony PC Companion_Web
- Speccy
- sqlyog
- Tnod
- Tweak-Me
- UNetBootin-windows
- Universal-USB-Installer
- USBVaccineSetup
- USBWriter
- UwAmp web server
- Win-to-usb-DirectGRUB
- WinDjView
- WinSCP
- WinSetupFromUSB
- winsxslite
