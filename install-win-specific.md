
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
