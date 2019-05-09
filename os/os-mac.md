# MacOS

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [System](#system)
  - [Other config](#other-config)
  - [Resets](#resets)
  - [Hotkeys](#hotkeys)
- [Links](#links)
- [Hardware](#hardware)
- [Finder](#finder)
- [Soft](#soft)
  - [term](#term)
  - [iterm2](#iterm2)
  - [brew](#brew)
    - [brew install](#brew-install)
  - [Spectacle](#spectacle)
- [Sindre Sorhus Keybinds](#sindre-sorhus-keybinds)
- [Markdown Service Tools](#markdown-service-tools)
- [Folders that contains app's files (to cleanup)](#folders-that-contains-apps-files-to-cleanup)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## System

1. Set up iCloud Keychain: Enable: Firewall (+stealth mode), Encryption, Find my mac
2. Remove unneeded icons
3. Install Updates
4. Add Input Sources
5. Set up Shortcuts
6. Change computer's name and localhost name to 'mbpap' in Sharing
7. Turn off screen saver: Never
8. Disable guest user + login options (buttons, hints)
9. Safari - set UTF8 default encoding
10. Remove: iMovies, Garage Band, iPages
11. apply [GPG/PGP](https://github.com/drduh/macOS-Security-and-Privacy-Guide#pgpgpg) and [Passwords](https://github.com/drduh/macOS-Security-and-Privacy-Guide#passwords)
12. Thin local Time Machine snapshots `tmutil thinLocalSnapshots / 10000000000 4`

### Other config

- [x] Show All File Extensions (can be enabled in a Finder) `defaults write NSGlobalDomain AppleShowAllExtensions -bool true`
- [x] Show Hidden Files (hotkey: `cmd+shift+.`) `defaults write com.apple.finder AppleShowAllFiles true`
- [x] Show Path Bar `defaults write com.apple.finder ShowPathbar -bool true`
- [ ] Save screenshots in PNG format (other options: BMP, GIF, JPG, PDF, TIFF)
  - `defaults write com.apple.screencapture type -string "png"`
- [set-environment-variables](https://github.com/sindresorhus/guides/blob/master/set-environment-variables.md)
- [awesome-osx](https://github.com/iCHAIT/awesome-osx)
- [macOS-Security-and-Privacy-Guide](https://github.com/drduh/macOS-Security-and-Privacy-Guide)
- [about file share smb](https://apple.stackexchange.com/questions/238813/why-is-my-hard-drive-and-user-folder-shared-when-i-turn-on-osx-file-sharing)

### Resets

- [NVRAM](https://support.apple.com/en-us/HT204063)
- [SMC](https://support.apple.com/en-us/HT201295)

### Hotkeys

- `cmd+R` - bootcamp (recovery and etc.)
- `cmd+alt(option)+R` - bootcamp with Ethernet (recovery and etc.)
- `cmd+ctrl+space` - emoji picker

## Links

- [iCloud](https://www.icloud.com/)
- [AppleId](https://appleid.apple.com)
- [Check coverage](https://checkcoverage.apple.com/)

## Hardware

- [External monitor fix](http://www.mathewinkson.com/2013/03/force-rgb-mode-in-mac-os-x-to-fix-the-picture-quality-of-an-external-monitor)

## Finder

1. Hide and sort sidebar icons
2. Show Tab, Path, Status; remove toolbar icons
3. Remove Remote Disc's, hide tags
4. New windows show ~/
5. Search the current folder
6. Icons View:
  - Grid Max
  - Label Right
  - Use as Default
7. Desktop view
  - Size 64
  - Grid Min
  - Sort Name
8. Hide Public folder: `chflags hidden ~/Public/`

## Soft

> [open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps)

- [x] [1Password](https://1password.com/)
- [x] [backup and sync](https://www.google.com/drive/download/backup-and-sync/)
- [x] [filezilla](https://filezilla-project.org/)
- [x] [gfxCardStatus](https://gfx.io/)
- [x] [GrandPerspective](http://grandperspectiv.sourceforge.net/)
- [x] [Homebrew](https://brew.sh/)
- [x] [ImageOptim](https://imageoptim.com/)
- [x] [LibreOffice](https://www.libreoffice.org/)
- [x] [Skype](https://www.skype.com/)
- [x] [Spectacle](https://www.spectacleapp.com/)
- [x] [TeamSpeak](https://www.teamspeak.com/)
- [x] [TeamViewer](https://www.teamviewer.com/)
- [x] [the unarchiver](https://theunarchiver.com/)
- [x] [time out, dejal, eye breaks](http://www.dejal.com/)
- [x] [trash-cli](https://github.com/sindresorhus/trash-cli)
- [x] [VLC](https://www.videolan.org/vlc/index.html)
- [x] [CCleaner](https://www.ccleaner.com/ccleaner-mac)
- [x] [Keynote](https://www.apple.com/keynote/)
- [x] [Sketch app](https://www.sketchapp.com/)
- [x] [Slack](https://slack.com/)

- [ ] [Airmail 3](https://itunes.apple.com/us/app/airmail-3/id918858936?mt=12&app=apps&ign-mpt=uo%3D4)
- [ ] [alcatraz](##Soft)
- [ ] [alfredapp](https://www.alfredapp.com/) and [alfred workflows](https://github.com/willfarrell/alfred-pkgman-workflow)
- [ ] [appcleaner](https://freemacsoft.net/appcleaner/)
- [ ] [arqbackup](https://www.arqbackup.com/) - $ 
- [ ] [batteryguardian](https://www.dssw.co.uk/batteryguardian/)
- [ ] [bettersnaptool](https://www.boastr.net/bettersnaptool/) - $
- [ ] [BetterZip 3](https://macitbetter.com/) zip
- [ ] [BitTorrent Sync](https://www.getsync.com/platforms/desktop)
- [ ] [cakebrew](https://www.cakebrew.com/)
- [ ] [carthage](##Soft)
- [ ] [charles](https://www.charlesproxy.com/)
- [ ] [choosyosx](https://www.choosyosx.com/)
- [ ] [cleanmymac](https://macpaw.com/cleanmymac)
- [ ] [cocoapods](##Soft)
- [ ] [Coinverter](##Soft)
- [ ] [ColorSnapper](https://colorsnapper.com/)
- [ ] [CrossOver](https://www.codeweavers.com/products/) and [Parallels](https://www.parallels.com/) for win apps
- [ ] [Cut and Slice me](http://www.cutandslice.me/) assets from PS CS
- [ ] [Dash](https://kapeli.com/dash) offline access to 150+ API documentation sets
- [ ] [Desktopr](https://itunes.apple.com/us/app/desktopr/id452693880?mt=12&ref=producthunt) site as a wallpaper
- [ ] [dlite](https://github.com/nlf/dlite)
- [ ] [DM1](##Soft)
- [ ] [Elmedia](##Soft)
- [ ] [EnvPane](https://github.com/hschmidt/EnvPane)
- [ ] [F.lux](https://justgetflux.com/) screen color change
- [ ] [fabric.io](##Soft)
- [ ] [Fantastical 2](##Soft)
- [ ] [fastlane](##Soft)
- [ ] [Final Cut Pro](##Soft)
- [ ] [fix-macosx](https://fix-macosx.com/)
- [ ] [functionflip](http://kevingessner.com/software/functionflip/)
- [ ] [gasmask](https://github.com/2ndalpha/gasmask)
- [ ] [gemini](https://macpaw.com/gemini) - $ anti duplicates
- [ ] [getkap](https://getkap.co/) - capture screen
- [ ] [GitUp](http://gitup.co/)
- [ ] [Hazel](##Soft)
- [ ] [helium](http://heliumfloats.com/)
- [ ] [hyper](https://hyper.is/)
- [ ] [iA Writer Pro](##Soft)
- [ ] [Icon Slate](http://www.kodlian.com/apps/icon-slate) exporting icons
- [ ] [iExplorer](https://macroplant.com/iexplorer) transfering files between ios devices
- [ ] [ImageAlpha](https://pngmini.com/)
- [ ] [iterm2](https://www.iterm2.com/)
- [ ] [Kaleidoscope](https://www.kaleidoscopeapp.com/)
- [ ] [karabiner](https://pqrs.org/osx/karabiner/)
- [ ] [Keyshape](https://www.pixofield.com/) - svg animations editor
- [ ] [licecap](https://www.cockos.com/licecap/)
- [ ] [lulu](https://objective-see.com/products/lulu.html) - firewall
- [ ] [macbartender](https://www.macbartender.com/)
- [ ] [macdownload](http://macdownload.informer.com/landing/) - free
- [ ] [macupdate](https://www.macupdate.com/desktop) - $
- [ ] [malwarebytes](https://www.malwarebytes.com)
- [ ] [Memory Clean - Monitor and Free Up Memory](https://itunes.apple.com/ru/app/memory-clean-monitor-free/id451444120?mt=12)
- [ ] [MindNode 2](##Soft)
- [ ] [mogenerator](##Soft)
- [ ] [Monolingual](https://ingmarstein.github.io/Monolingual/) remove unneeded lang's
- [ ] [Moom](https://manytricks.com/moom/) Managing app windows
- [ ] [noodlesoft, cleaner](https://www.noodlesoft.com/) - $
- [ ] [Numbers](##Soft)
- [ ] [NVM](https://github.com/creationix/nvm)
- [ ] [OmniDiskSweeper](https://www.omnigroup.com/more) - cleanup
- [ ] [onyx](https://www.titanium-software.fr/en/onyx.html) - utility
- [ ] [Pages](##Soft)
- [ ] [Paragon NTFS on Mac](https://www.paragon-software.com/ufsdhome/ntfs-mac/)
- [ ] [Parallels Desktop](https://www.parallels.com/products/desktop/download/)
- [ ] [patterns](https://krillapps.com/patterns/)
- [ ] [Pttrns.com](##Soft)
- [ ] [Reflector](http://www.airsquirrels.com/reflector/) like LiveView
- [ ] [Renamer](https://renamer.com/)
- [ ] [Safari technology-preview](https://developer.apple.com/safari/technology-preview/)
- [ ] [ScreenFlow](https://www.telestream.net/screenflow/) for recording
- [ ] [ShiftIt](https://github.com/fikovnik/ShiftIt)
- [ ] [Slicy](http://macrabbit.com/slicy/) assets from PS
- [ ] [sourcetree](https://www.sourcetreeapp.com/)
- [ ] [SpotMenu](https://kmikiy.github.io/SpotMenu/) - for music
- [ ] [svgs](http://www.svgs.us/)
- [ ] [synergy](https://symless.com/synergy/)
- [ ] [TermHere](https://itunes.apple.com/us/app/termhere/id1114363220?mt=12)
- [ ] [Things](https://culturedcode.com/things/)
- [ ] [timemachineeditor](https://tclementdev.com/timemachineeditor/)
- [ ] [totalterminal](https://totalterminal.binaryage.com/)
- [ ] [Tower](https://www.git-tower.com)
- [ ] [Transmission](https://transmissionbt.com/)
- [ ] [TunnelBear](https://www.tunnelbear.com/download/)
- [ ] [vanilla](http://matthewpalmer.net/vanilla/)
- [ ] [Wineskin](http://wineskin.urgesoftware.com)
- [ ] [xScope 4](##Soft)

### term

- install [solarized theme](http://ethanschoonover.com/solarized)

### iterm2

- `defaults write com.googlecode.iterm2 PromptOnQuit -bool false` Don’t display the annoying prompt when quitting iTerm
- [iterm2-solarized.md](https://gist.github.com/arturparkhisenko/41631f295bf927cc4fc82fea8fc6b044)
- `open "${HOME}/init/Solarized Dark.itermcolors"` Install the Solarized Dark theme for iTerm

### [brew](https://brew.sh/)

- `brew update`
- `brew outdated`
- `brew upgrade`
- `brew cleanup`
- `brew doctor`
- `brew update&&brew outdated&&brew upgrade&&brew cleanup`

#### brew install

- `xcode-select --install` - for gcc
- `brew install node wget git gcc clang-format cmake fd cppcheck gcc shellcheck wget yarn`
- `brew install neovim`

### Spectacle

1. A11y in System Preferences
2. Launch at login
3. Run as a background application
4. Shortcuts with Ctr Option Cmd
  - Center M
  - Full F
  - Left ?
  - Right ?
  - Top ?
  - Bottom ?
  - UL 1
  - LL 3
  - UR 2
  - LR 4
  - Larger =
  - Smaller -

## Sindre Sorhus Keybinds

- `Ctrl `\` to toggle TotalTerminal.
- `Alt `\` to toggle TotalFinder.
- `Alt Space` to toggle Dash.
- `Cmd Space` to toggle Alfred.
- `Cmd Tab` to switch between apps.
- `Ctrl Tab` to switch between Chrome/TotalFinder/Sublime tabs.s

## Markdown Service Tools

1. [Download](http://brettterpstra.com/projects/markdown-service-tools/)
2. md - Convert - HTML to Clipboard
3. md - Convert - HTML to Markdown
4. Show package content, Info.plist
  - Markdown to HTML
  - HTML to Markdown
5. Copy to ~/Library/Services

## Folders that contains app's files (to cleanup)

- `~/Library/Caches` and `./`
- `~/Library/LaunchAgents` and `./`
- `~/Library/LaunchDaemons` and `./`
- `~/Library/Application Support` and `./`
- `~/Library/Application Scripts`
- `~/Library/Containers`
- `~/Library/PreferencePanes`
- `~/Library/Preferences`
- `~/Library/Saved Application State`
- `~/Library/Saved`
- `~/Library/StartupItems`
- `~/Library/Developer/Xcode`
