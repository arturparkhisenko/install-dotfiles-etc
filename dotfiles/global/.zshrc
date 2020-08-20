#!/bin/bash

# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
export ZSH_THEME="muse"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
export UPDATE_ZSH_DAYS=5

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS=true

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
export plugins=(
  brew
  dotenv
  # fzf
  git
  history-substring-search
  node
  npm
  ssh-agent
  yarn
  zsh-autosuggestions # https://github.com/zsh-users/zsh-autosuggestions
  # zsh-nvm             # https://github.com/lukechilds/zsh-nvm
)

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

## NODE NPM
# global npm packages
# npm i -g doctoc eslint expo-cli gatsby-cli np npm-check-updates trash-cli
## NODE NPM END

# FZF
# [ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

# shellcheck source=~/.oh-my-zsh
source $ZSH/oh-my-zsh.sh

# ssh
export SSH_KEY_PATH="$HOME/.ssh/rsa_id"

alias ..='cd ..'
alias ll='ls -lhG' # long + sizes + color
alias la='ls -a'   # with hidden
alias rm='rm -i'
alias whereami='pwd'
alias rename='mv'
alias move='mv'
alias copy='cp'
# https://linux.die.net/man/1/zip
alias zap='zip --encrypt --recurse-paths'

alias g_aa='git add --all'
alias g_ad='git add .' # same as --all
alias g_c='git commit --gpg-sign'
alias g_ca='git commit --gpg-sign --all'
alias g_cm='git commit --gpg-sign -m' # message
alias g_cl='git clone'
alias g_reset='git clean -xdf&&git prune&&git remote prune origin&&git remote update --prune&&git fetch --tags&&git gc'
alias g_cleanup='git clean -xdf'
alias g_co='git checkout'
alias g_df='git diff --color --color-words --abbrev'
alias g_l='git log --graph --oneline --decorate --all --date-order'
alias g_ps='git push --set-upstream'
alias g_pu='git pull'
alias g_s='git status --short --branch'

# https://curl.haxx.se/docs/manpage.html
alias get='curl --location --progress-bar --verbose'
alias myip='curl -silent https://4.ifcfg.me'
alias mylocalip='ifconfig | sed -En "s/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p"'
alias weather='curl -4 http://wttr.in'

alias mem='ps aux | sort -nk 4' # processes sorted by memory
alias cpu='ps aux | sort -nk 3' # processes sorted by cpu

alias encodingof='file -I'
# alias toutf8='iconv -f iso-8859-1 -t utf-8 < file > file.new'
alias fixmacostools='xcode-select --install'
alias node_trace_webpack='node --trace-deprecation ./node_modules/.bin/webpack'

alias serve='python -m SimpleHTTPServer 8080'

alias bcu='brew update&&brew outdated&&brew upgrade&&brew cleanup'
alias zcu='omz update'
alias acu='bcu&&zcu&&ncu -g' # bash

alias n_ig='npm i -g eslint doctoc np npm-check-updates trash-cli'
alias n_lg='npm list -g --depth=0'
# alias n_og='npm outdated -g'
# alias n_in='npm install npm@latest -g'
alias n_cc='npm cache clean --force'
alias y_cc='yarn cache clean'
alias find_nm='find ./ -type d -name "node_modules"'

# emsdk
# shellcheck source=~
source $HOME/Documents/GitHub/emsdk/emsdk_env.sh

# python from brew
# alias python='python3'
# alias python-config='python3-config'
# alias pip='pip3'

### Apple HTTPLiveStreamingTools
alias mediastreamsegmenter='/usr/local/bin/mediastreamsegmenter'
alias mediafilesegmenter='/usr/local/bin/mediafilesegmenter'
alias mediasubtitlesegmenter='/usr/local/bin/mediasubtitlesegmenter'
alias variantplaylistcreator='/usr/local/bin/variantplaylistcreator'
alias mediastreamvalidator='/usr/local/bin/mediastreamvalidator'
alias hlsreport='/usr/local/bin/hlsreport.py'
alias id3taggenerator='/usr/local/bin/id3taggenerator'

## DNS config - /etc/hosts
## 127.0.0.1	local.site.com
## sudo killall -HUP mDNSResponder; sleep 2;
