# MacOS

## System

1. Set up iCloud Keychain
2. Remove icons
3. Install Updates
4. Add Ru Input Sources
5. Set up Shortcuts
6. Change computer's name to 'mbpap' in Sharing
7. Turn off screen saver: Never
8. Disable guest user
  - Open System Preferences.
  - Go to “Users & Groups” and click the unlock icon.
  - Click on “Guest User”
  - Uncheck the box for 'Allow guests to log in to this computer'
9. Login options
  - Hide buttons
  - Name and password
10. Safari - set UTF8 default encoding
11. Enable: Firewall, Encryption, Find my mac, [icloud](https://www.apple.com/ru/icloud/setup/mac.html), Keychain 
12. Remove: iMovies, Garage Band, iBooks, iPages

# Mac tune:
## Show All File Extensions
defaults write NSGlobalDomain AppleShowAllExtensions -bool true
##Show Hidden Files
defaults write com.apple.finder AppleShowAllFiles true
##Show Path Bar 
defaults write com.apple.finder ShowPathbar -bool true
## Save screenshots in PNG format (other options: BMP, GIF, JPG, PDF, TIFF)
defaults write com.apple.screencapture type -string "png"

### other config
- Show All File Extensions `defaults write NSGlobalDomain AppleShowAllExtensions -bool true`
- Show Hidden Files `defaults write com.apple.finder AppleShowAllFiles true`
- Show Path Bar `defaults write com.apple.finder ShowPathbar -bool true`
- Save screenshots in PNG format (other options: BMP, GIF, JPG, PDF, TIFF)
  - `defaults write com.apple.screencapture type -string "png"`
- [npm-global-without-sudo](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)
- [set-environment-variables](https://github.com/sindresorhus/guides/blob/master/set-environment-variables.md)
- [awesome-osx](https://github.com/iCHAIT/awesome-osx)
- [zchee's mac-secret-settings](https://github.com/zchee/scripts/blob/master/mac/mac-secret-settings.sh)
- [macOS-Security-and-Privacy-Guide](https://github.com/drduh/macOS-Security-and-Privacy-Guide)

### hotkeys
- `command+R` - bootcamp (recovery and etc.)

### links
- [icloud](https://www.icloud.com/)
- [checkcoverage](https://checkcoverage.apple.com/)

## Hardware

- [External monitor fix](http://www.ireckon.net/2013/03/force-rgb-mode-in-mac-os-x-to-fix-the-picture-quality-of-an-external-monitor)

## Finder

1. Hide and sort sidebar icons
2. Show Tab, Path, Status; remove toolbar icons
3. Remove Remote Dics, hide tags
4. New windows show ~/
5. Search the current folder
6. Icons View:
  - Sort Name
  - Size 16
  - Grid Max
  - Label Right
  - Use as Default
7. Desktop view
  - Size 64
  - Grid Min
  - Sort Name
8. Hide Public folder: chflags hidden ~/Public/

## macOS Soft

- [x] [cleanmymac](http://macpaw.com/cleanmymac)
- [x] [unarchiver](http://unarchiver.c3.cx/unarchiver)
- [x] [dejal, eye breaks](http://www.dejal.com/)
- [x] [iterm2](https://www.iterm2.com/)
- [x] [Homebrew](http://brew.sh/)
- [x] Keynote
- [x] Sketch 3
- [x] [sourcetree](https://www.sourcetreeapp.com/)
- [ ] [alfredapp](https://www.alfredapp.com/) and [alfred workflows](https://github.com/willfarrell/alfred-pkgman-workflow)
- [ ] [appcleaner](https://freemacsoft.net/appcleaner/)
- [ ] [appfresh](http://metaquark.de/appfresh/mac) - $
- [ ] [arqbackup](https://www.arqbackup.com/) - $ 
- [ ] [arthur, settings](http://arthur-osx.com/)
- [ ] [batteryguardian](http://www.dssw.co.uk/batteryguardian/)
- [ ] [bettersnaptool](https://www.boastr.net/bettersnaptool/) - $
- [ ] [BetterZip 3](https://macitbetter.com/) zip
- [ ] [BitTorrent Sync](https://www.getsync.com/platforms/desktop)
- [ ] [cakebrew](https://www.cakebrew.com/)
- [ ] [choosyosx](https://www.choosyosx.com/)
- [ ] [ColorSnapper](http://colorsnapper.com/)
- [ ] [CrossOver](http://www.codeweavers.com/products/) and [Parallels](http://www.parallels.com/) for win apps
- [ ] [Cut and Slice me](http://www.cutandslice.me/) assets from PS CS
- [ ] [daisydiskapp](https://daisydiskapp.com/) - $ disk stats
- [ ] [Dash](https://kapeli.com/dash) offline access to 150+ API documentation sets
- [ ] [dlite](https://github.com/nlf/dlite)
- [ ] [EnvPane](https://github.com/hschmidt/EnvPane)
- [ ] [F.lux](https://justgetflux.com/) screen color change
- [ ] [fix-macosx](https://fix-macosx.com/)
- [ ] [functionflip](http://kevingessner.com/software/functionflip/)
- [ ] [gasmask](https://github.com/2ndalpha/gasmask)
- [ ] [gemini](http://macpaw.com/gemini) - $ anti duplicates
- [ ] [getkap](https://getkap.co/) - capture screen
- [ ] [GitUp](http://gitup.co/)
- [ ] [hyper](https://hyper.is/)
- [ ] [Icon Slate](http://www.kodlian.com/apps/icon-slate) exporting icons
- [ ] [iExplorer](http://www.macroplant.com/iexplorer/) transfering files between ios devices
- [ ] [ImageAlpha](http://pngmini.com/)
- [ ] [ImageOptim](https://imageoptim.com/)
- [ ] [Induction](http://inductionapp.com/) db
- [ ] [Kaleidoscope](http://www.kaleidoscopeapp.com/)
- [ ] [karabiner](https://pqrs.org/osx/karabiner/)
- [ ] [licecap](http://www.cockos.com/licecap/)
- [ ] [LiveView](http://www.zambetti.com/)
- [ ] [macbartender](https://www.macbartender.com/)
- [ ] [macdownload](http://macdownload.informer.com/landing/) - free
- [ ] [macupdate](https://www.macupdate.com/desktop) - $
- [ ] [marathono](http://www.marathono.com/)
- [ ] [Memory Clean - Monitor and Free Up Memory](https://itunes.apple.com/ru/app/memory-clean-monitor-free/id451444120?mt=12)
- [ ] [mixture](http://mixture.io/)
- [ ] [Monolingual](http://monolingual.sourceforge.net/) remove unnened langs
- [ ] [Moom](http://manytricks.com/moom/) Managing app windows
- [ ] [noodlesoft, cleaner](https://www.noodlesoft.com/) - $
- [ ] [onyx](http://www.titanium.free.fr/onyx.html) - utility
- [ ] [Paragon NTFS on Mac](http://www.paragon-software.com/home/ntfs-mac/)
- [ ] [Parallels Desktop](http://www.parallels.com/products/desktop/download/)
- [ ] [patterns](http://krillapps.com/patterns/)
- [ ] [Reflector](http://www.airsquirrels.com/reflector/) like LiveView
- [ ] [Renamer](http://renamer.com/)
- [ ] [Safari technology-preview](https://developer.apple.com/safari/technology-preview/)
- [ ] [ScreenFlow](http://www.telestream.net/screenflow/) for recording
- [ ] [ShiftIt](https://github.com/fikovnik/ShiftIt)
- [ ] [Slicy](http://macrabbit.com/slicy/) assets from PS
- [ ] [Spectacle](http://spectacleapp.com/)
- [ ] [svgs](http://www.svgs.us/)
- [ ] [synergy](https://symless.com/synergy/)
- [ ] [TermHere](https://itunes.apple.com/us/app/termhere/id1114363220?mt=12)
- [ ] [Things](https://culturedcode.com/things/)
- [ ] [totalterminal](http://totalterminal.binaryage.com/)
- [ ] [Tower](http://www.git-tower.com/)
- [ ] [Transmission](http://www.transmissionbt.com/download/)
- [ ] [TunnelBear](https://www.tunnelbear.com/download/)
- [ ] [vlc](https://www.videolan.org/vlc/index.html)
- [ ] 1Password
- [ ] alcatraz
- [ ] carthage
- [ ] charles
- [ ] cocoapods
- [ ] Coinverter
- [ ] DM1
- [ ] Elmedia
- [ ] fabric.io
- [ ] Fantastical 2
- [ ] fastlane
- [ ] Final Cut Pro
- [ ] Hazel
- [ ] iA Writer Pro
- [ ] MindNode 2
- [ ] mogenerator
- [ ] Numbers
- [ ] Pages
- [ ] Pttrns.com
- [ ] Slack
- [ ] xScope 4

### iterm2

- `defaults write com.googlecode.iterm2 PromptOnQuit -bool false` Don’t display the annoying prompt when quitting iTerm
- [iterm2-solarized.md](https://gist.github.com/arturparkhisenko/41631f295bf927cc4fc82fea8fc6b044)
- `open "${HOME}/init/Solarized Dark.itermcolors"` Install the Solarized Dark theme for iTerm

### brew

- `brew update`
- `brew outdated`
- `brew upgrade`
- `brew cleanup`
- `brew doctor`
- `brew update && brew outdated && brew upgrade && brew cleanup`

#### brew install

- `brew install node`
- `brew install neovim/neovim/neovim`
- `brew install wget`
- `brew install git`

#### brew install apps

- `brew cask install vlc`
- `brew cask install atom`

# sindresorhus Mac Keybinds:
- `Ctrl `\` to toggle TotalTerminal.
- `Alt `\` to toggle TotalFinder.
- `Alt Space` to toggle Dash.
- `Cmd Space` to toggle Alfred.
- `Cmd Tab` to switch between apps.
- `Ctrl Tab` to switch between Chrome/TotalFinder/Sublime tabs.s

## Clean My Mac

1. Play sounds: Off
2. Scheduler: Never
3. Menu, offer: Off

## Spectacle

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

## Sketch

1. Grid

  - Dark 20% red
  - Light 10% red

2. Layout

  - Stroke outline
  - Dark, Light #4affff

3. Canvas guides #4affff

4. Toolbar dropdowns

  - Insert
  - Tools
  - Combine
  - View

5. Rename duplicated layers: Off

## Markdown Service Tools

1. [Download](http://brettterpstra.com/projects/markdown-service-tools/)
2. md - Convert - HTML to Clipboard
3. md - Convert - HTML to Markdown
4. Show package content, Info.plist

  - Markdown to HTML
  - HTML to Markdown

5. Copy to ~/Library/Services

## Tower

1. Diff, Merge tool: Kaleidoscope
2. Service accounts: GitHub
3. Git binary: /usr/local/bin/git
4. Integration: Install
