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

## Disable update to 10 notification

- [GWX Control Panel](http://ultimateoutsider.com/downloads/)

### Registry Tweak 1

1. open `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows`
2. Create a new key under Windows key and set its name as GWX
3. So the final key path would be: `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\GWX`
4. Now select GWX key and in right-side pane create a new DWORD DisableGWX and set its value to 1

### Registry Tweak 2

1. open `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows`
2. Create a new key under Windows key and set its name as WindowsUpdate like `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate`
3. Now select WindowsUpdate key and in right-side pane create a new DWORD DisableOSUpgrade and set its value to 1

### Registry Tweak 3

1. open `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\OSUpgrade`
2. In right-side pane, look for two DWORDs AllowOSUpgrade and ReservationsAllowed and change their values to 0

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
