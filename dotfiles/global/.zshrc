#!/bin/bash

# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
export ZSH_THEME="ys"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
export UPDATE_ZSH_DAYS=5

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
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
export plugins=(git npm zsh-syntax-highlighting)
# zsh-autosuggestions
# ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=247"

# shellcheck source=~/.oh-my-zsh
source $ZSH/oh-my-zsh.sh

# User configuration
# export MANPATH="/usr/local/man:$MANPATH"
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

## NODE NPM
NPM_PACKAGES="${HOME}/.npm-packages"
PATH="$NPM_PACKAGES/bin:$PATH"
# Unset manpath so we can inherit from /etc/manpath via the `manpath` command
unset MANPATH # delete if you already modified MANPATH elsewhere in your config
MANPATH="$NPM_PACKAGES/share/man:$(manpath)"
export MANPATH
## NODE NPM END

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

# ssh
export SSH_KEY_PATH="$HOME/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

alias ..='cd ..'
alias ll='ls -lhG'
alias la='ls -A'
alias rm='rm -i'
alias whereami='pwd'
alias rename='mv'
alias move='mv'
alias copy='cp'
alias zipp='zip -e'
alias zippf='zip -er'
alias encodingof='file -I'
# alias toutf8='iconv -f iso-8859-1 -t utf-8 < file > file.new'
alias npmigtools='npm i -g lock-cli trash-cli np nsp npm-check-updates'

alias bcu='brew update && brew doctor && brew outdated && brew upgrade && brew cleanup'
alias zcu='upgrade_oh_my_zsh'
alias acu='bcu&&zcu&&ncu -g'

alias e='atom .'
alias atom='atom .'
alias serve='python -m SimpleHTTPServer 8000'

alias n_i='npm install'
alias n_ig='npm install -g'
alias n_is='npm install --save'
alias n_id='npm install --save-dev'
alias n_lg='npm list -g --depth=0'
alias n_cu='npm outdated -g'
alias n_cc='npm cache clean --force'

alias get='curl -O -L -#'
alias myip='curl -s https://4.ifcfg.me'
alias mylocalip='ifconfig | sed -En "s/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p"'

# emsdk
# shellcheck source=~
source $HOME/Documents/GitHub/emsdk/emsdk_env.sh
