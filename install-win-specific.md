
# secure or fast boot

 1. Disable Windows 8 Fast Boot. To do this, go to the Control Panel
(in Windows 8 hold X while hitting the Windows key and select "Control Panel")
and select Power Options -> Choose What the power buttons do. Then select the link
that says "Change settings that are currently unavailable". This will give you access
to the checkbox "Turn on fast startup (recommended)". Turn it off.
 2. Then disable secure boot in the bios. You get to the bios on the Lenovo Z580
by holding down F2 while powering on. The secure boot option is inaccessible
until you create an admin password. Then you can turn secure boot off.

# win 7-8 updates

 1. stop service Windows Update
 2. clean c:\Windows\SoftwareDistribution\

## disable update to 10 notification
- uninstall KB3035583
- remove `C:\Windows\System32\GWX` or `C:\Windows\SysWOW64\GWX` (in 64-bit systems only)

### Registry Tweak 1:
1. open `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows`
2. Create a new key under Windows key and set its name as GWX
3. So the final key path would be: `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\GWX`
4. Now select GWX key and in right-side pane create a new DWORD DisableGWX and set its value to 1

### Registry Tweak 2:
1. open `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows`
2. Create a new key under Windows key and set its name as WindowsUpdate like `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate`
3. Now select WindowsUpdate key and in right-side pane create a new DWORD DisableOSUpgrade and set its value to 1

### Registry Tweak 3:
1. open `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\OSUpgrade`
2. In right-side pane, look for two DWORDs AllowOSUpgrade and ReservationsAllowed and change their values to 0
