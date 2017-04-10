# Intel Drivers

- [link, by processors, ru](http://www.intel.ru/content/www/ru/ru/support/graphics-drivers.html)
- [link, en](https://downloadcenter.intel.com/)
- get windows key cmd command: `wmic path SoftwareLicensingService get OA3xOriginalProductKey`

# Secure or fast boot

1. Disable Windows 8 Fast Boot. To do this, go to the Control Panel
2. (in Windows 8 hold X while hitting the Windows key and select "Control Panel")
3. and select Power Options -> Choose What the power buttons do. Then select the link
4. that says "Change settings that are currently unavailable". This will give you access
5. to the checkbox "Turn on fast startup (recommended)". Turn it off.
6. Then disable secure boot in the bios. You get to the bios on the Lenovo Z580
7. by holding down F2 while powering on. The secure boot option is inaccessible
8. until you create an admin password. Then you can turn secure boot off.

# Win updates

1. stop service Windows Update
2. clean c:\Windows\SoftwareDistribution\
3. [CleanUnwantedUpdates](https://github.com/KOLANICH/CleanUnwantedUpdates)
4. [WinsxsLite](https://sites.google.com/site/winsxslite/)
5. [DisableWinTracking](https://github.com/10se1ucgo/DisableWinTracking) or [BlockWindows aka Anti-Spy](https://github.com/WindowsLies/BlockWindows)

# Win, how to remove long name folders/files

1. Start a commandprompt (no admin privileges needed)
2. Use `cd` to navigate to the folder you want to go (you can use `tab` to autocomplete names
3. type `subst j: .` to create the driveletter association. (instead of the . you can also type the entire path)
4. Now in explorer you have a new letter. Go to it and do whatever you need to do to the .cache files.
5. Go back to your cmd window and type `subst /d j:` to remove the drive or alternatively, restart your pc.

# Win problems solving

- [blue_screen_view](http://www.nirsoft.net/utils/blue_screen_view.html#DownloadLinks)
- cmd command: `sfc /scannow` check and replace
- cmd command: `bootrec /FixMbr`
- cmd command: `bootrec /FixBoot`
- cmd command: `bootrec /RebuildBcd`

## Win Soft

- [adwCleaner](https://toolslib.net/downloads/viewdownload/1-adwcleaner/)
- [ASCON KOMPAS](http://edu.ascon.ru/main/download/freeware/)
- [alldup](http://www.alldup.info/en_download_alldup.php)
- [Babun](https://babun.github.io/)
- [blindscanner](http://www.blindscanner.com/ru/download.html)
- [blue-screen]([http://www.nirsoft.net/utils/blue_screen_view.html#DownloadLinks)
- [Ccleaner](https://www.piriform.com/ccleaner/download)
- [Chocolatey](https://chocolatey.org/)
- [Cmder](http://cmder.net/)
- [Curse](https://www.curse.com)
- [Defraggler](https://www.piriform.com/defraggler/download)
- [DeepRemove](https://deepremove.codeplex.com/)
- [FileOptimizer](http://nikkhokkho.sourceforge.net/static.php?page=FileOptimizer)
- [Github Desktop](https://desktop.github.com/)
- [handbrake](https://handbrake.fr/) (video conv)
- [hwinfo](https://www.hwinfo.com/)
- [InternetCensor](http://icensor.ru/)
- [KLite Full](http://www.codecguide.com/download_k-lite_codec_pack_full.htm)
- [posh-git](https://github.com/dahlbyk/posh-git)
- [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)
- [svg explorer extension](https://svgextension.codeplex.com/)
- [syncback free](http://www.2brightsparks.com/freeware/index.html)
- [wox](http://www.getwox.com/)
- <https://irzyxa.wordpress.com/2015/08/10/volume1-1-4-347/>
- Audacity
- avc-free
- avz4
- CCEnhancer
- CD burner xp cdbxp
- ClassicShell
- Cmder
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
- GeForce Experience
- HDDLLF
- HijackThis
- i.Disk
- IpScan
- JPEGmini
- Kompas
- mp3tag
- MySQLWorkbench
- Notepad++
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
- [x] [eyeleo](http://eyeleo.com/)
- [ ] [macomfort](https://leonardo.re/macomfort/)
- [ ] [clink](https://mridgers.github.io/clink/)
