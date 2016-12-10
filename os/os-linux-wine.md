# wine-staging

- I'd prefer to use 32bit wine now
- install [wine-staging](https://wine-staging.com/) from [wine-compholio](https://github.com/wine-compholio/wine-staging/wiki/Installation#-ubuntulinux-mint)
- install(maybe you need only `build-essentials`) [this packages](https://github.com/arturparkhisenko/install-dotfiles-etc/blob/master/apt-npm-gem-git.md#build-tools)
- install WineTricks and [this libs](https://github.com/arturparkhisenko/install-dotfiles-etc/blob/master/os/os-linux-wine.md#required-libs)
- that's all!
- if you have issues with textures you can fix it by installing [this packages](https://github.com/arturparkhisenko/install-dotfiles-etc/blob/master/apt-npm-gem-git.md#fix-textures-in-opengl)
- better if you run bnet client, but if you wont you can make a direct link:

  - link example: `setarch i386 -3 /usr/share/playonlinux/playonlinux --run "Diablo III"`

- ~~run `winecfg` and **disable** the `d3d11` dll in library tab.~~

## game tests and guides

- [WOW - gold, on appdb.winehq.org](https://appdb.winehq.org/objectManager.php?sClass=application&iId=1922)

  - [WOW guide on webupd8](http://www.webupd8.org/2014/09/how-to-install-world-of-warcraft-in.html)

- [Diablo3 - gold, on appdb.winehq.org](https://appdb.winehq.org/objectManager.php?sClass=application&iId=13484)

# etc stuff, not important

```sh
#!/bin/bash
scriptdir=`dirname $BASH_SOURCE[0]`
cd $scriptdir"/d3_hs_prefix/drive_c/Program Files (x86)/Battle.net/"
WINEPREFIX=$scriptdir"/d3_hs_prefix" setarch i386 -3 wine "Battle.net Launcher.exe"
```

**To use winecfg to automatically enable/disable dbhelp.dll:**

1. Run winecfg. (If you have multiple prefixes, make sure it is the correct prefix.)
2. In the 'Libraries' tab type dbghelp into the 'New override for library' box.
3. Click 'Add', then 'Yes'.
4. Click on 'dbghelp' in the 'Existing_overrides' list.
5. Click 'Edit'.
6. Set to 'disabled'.
7. Click 'OK'
8. (You have now disabled dbg help to get the Battle.net Client to work. Now we need to re-enable it for 'Diablo III.exe'.)
9. Go to the 'Applications' tab.
10. Click 'Add Application'.
11. Select your 'Diablo III.exe' and click 'Open'.
12. Make sure 'Diablo III.exe' is selected in the list.
13. Switch to the 'Libraries' tab.
14. Type dbghelp into the 'New override for library' box.
15. Click 'Add', then 'Yes'.
16. Click on 'dbghelp' in the 'Existing_overrides' list.
17. Click 'Edit'.
18. Set to 'builtin'.
19. Click 'OK', then 'OK'.
20. (You have now re-enabled dbghelp.dll for 'Diablo III.exe' only)

**Note:** The above steps will disable dbghelp for _all_ programs other than Diablo III. It is suggested that you use a separate prefix for Diablo III if you are going to do this. It is hard to tell what application(s) need dbghelp disabled, so it is easier to just enable it for 'Diablo III.exe'.

# required libs

- `sudo apt-get install winetricks`
- everything beginning with `d3dx`, `dx9`, `dinput`, `direct` or `d3d`:
- install also this winetricks libs:

  ```
  winetricks d3dx9 d3dx10 winxp sound=alsa dotnet20 ie6 corefonts physx
  winetricks quartz vcrun2005 vcrun2008 vcrun2010 wininet xact xact_jun2010 xinput
  winetricks glsl-disable ddr=opengl allfonts orm=fbo coresounds
  winetricks mfc40 mfc42 wmp10
  winetricks msxml3 msxml4 msxml6
  winetricks vb6run vcrun2003 vcrun6sp6 vcrun6 wsh56vb wsh57
  ```

- old winetricks libs:

  ```
  winetricks droid volnum
  ```

# reinstall wine

```sh
sudo rm -r ~/.wine
WINEARCH='win32' WINEPREFIX=$HOME/wineprefix32 winecfg wine 'wineboot'
WINEARCH='win32' WINEPREFIX=~/.wine winecfg
```

# other configurations from guides, a little bit old

Fix it by launching "Configure Wine" from the menu / Dash (or press ALT + F2 and enter: winecfg) and on the Libraries tab, under "New override for library", enter "dbghelp" (without the quotes), then click "Add". Next, select "dbghelp" under "Existing overrides" and click "Edit" and in the new pop-up, set it to "Disable"

```sh
#!/bin/sh
WINEDEBUG=-all __GL_THREADED_OPTIMIZATIONS=1 wine "/home/YOURUSERNAME/.wine/drive_c/Program Files (x86)/World of Warcraft/WoW.exe" -opengl
--make script executable
```

- for intel videocards: `sudo apt-get install driconf`

That's not all. To boost the WoW FPS, also perform the following tweak: press ALT + F2, enter "regedit" (without the quotes) and: navigate to HKEY_CURRENT_USER -> Software -> Wine, select the Wine folder and right click it, then select New -> Key and rename the newly created key to "OpenGL" (without the quotes); select the "OpenGL" key, right click it and select New -> String Value; rename "New Value #1" to "DisabledExtensions" (without the quotes); double click on the newly created "DisabledExtensions" and enter "GL_ARB_vertex_buffer_object" (without the quotes) into the "value" field.

Fix it by launching "Configure Wine" from the menu / Dash (or press ALT + F2 and enter: winecfg) and on the Libraries tab, under "New override for library", enter "dbghelp" (without the quotes), then click "Add". Next, select "dbghelp" under "Existing overrides" and click "Edit" and in the new pop-up, set it to "Disable"

wine regedit go to:

```
hkey current user / software / Wine / direct3D ->
Now open new REG_SZ strings and enter this configuration :
“DirectDrawRenderer”=”opengl”
“Nonpower2Mode”=”repack”
“OffscreenRenderingMode”=”fbo”
“RenderTargetLockMode”=”auto”
“UseGLSL”=”readtex”
“VertexShaderMode”=”hardware”
“VideoDescription”=”NVIDIA GeForce 8400 GS”   (Change this to your current Graphics card setting)
“VideoDriver”=”nv4_disp.dll”
“VideoMemorySize”=”500″   (Use your current video memory size)
```

```
wtf.config
SET M2UseShaders "0"
SET UseVertexShaders "0"
SET useWeatherShaders "0"
SET ffxGlow "0"
SET ffxDeath "0"
SET ffxSpecial "0"
SET weatherDensity "0"
SET reflectionMode "0"
SET maxFPS "60"
SET ffx "0"
SET maxFPSbk "5"
SET mapShadows "0"
```
