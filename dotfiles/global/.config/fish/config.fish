#!/bin/bash

# ## URL's
# - https://fishshell.com/ - `brew install fish`
# - https://fishshell.com/docs/current/tutorial.html
# - https://hospodarets.com/fish-shell-the-missing-config - About bash aliases
# - https://medium.com/almoullim/from-bash-to-zsh-to-fish-e432f1e1b9f8
# - https://github.com/oh-my-fish/oh-my-fish
# - https://github.com/junegunn/fzf

# ## Install
# 1. `brew install fish`
# 2. `/usr/local/bin/fish` must be listed in `/etc/shells` file
# 3. `chsh -s /usr/local/bin/fish` set as default shell, value: `which fish`

# ## Syntax differences

# ### Set a variable
#  export PATH=~/bin:${PATH} # bash
#  set -gx PATH ~/bin $PATH  # fish

# ### Short circuit
# foo && bar      # bash
# foo; and bar    # fish

# ### Redirect stderr
# ./foo 2>outfile # bash
# ./foo ^outfile  # fish

# ### Command substitution
# file `which ls` # bash
# file (which ls) # fish

# ## Config

# Create the Fish config directory:
#   mkdir -p ~/.config/fish
# Create initial config file:
#   vim ~/.config/fish/config.fish

# ## Theme
# - solarized dark - for colors
# - RobyRussel - for prompt

# Initial config file contents, which adds /usr/local/bin to the PATHenvironment variable:
# set -g -x PATH /usr/local/bin $PATH

# To open the web configurating you can isse this command:
#   fish_config # and then visit http://localhost:8000/
# Fish can parse your installed man pages and automatically generate completion files for your command-line tools.
# You should periodically run the following command to update those completions, which are stored in ~/.config/fish/completions by default:
#   fish_update_completions

# NOT USED:
# Install omf (Oh-My-Fish): github/oh-my-fish
# Oh My Fish provides core infrastructure to allow you to install packages which extend or modify the look of your shell. It’s fast, extensible and easy to use.
# curl -L http://get.oh-my.fish | fish

# # User configuration
set fish_greeting ""

## NODE NPM
set --global --export NPM_PACKAGES $NPM_PACKAGES "$HOME/.npm-packages"
set --global --export PATH $PATH "$NPM_PACKAGES/bin"
set --global --export MANPATH $MANPATH "$NPM_PACKAGES/share/man"
# CAN BE RUN ONCE: set -g fish_user_paths $fish_user_paths "/usr/local/opt/node@8/bin"
## NODE NPM END

# # SSH
# export SSH_KEY_PATH="$HOME/.ssh/rsa_id"
set --global --export SSH_KEY_PATH "$HOME/.ssh/rsa_id" $SSH_KEY_PATH

# Personal aliases

alias ..='cd ..'
alias ll='ls -lhG' # long + sizes + color
alias la='ls -a' # with hidden
alias rm='rm -i'
#alias whereami='pwd'
alias rename='mv'
alias move='mv'
alias copy='cp'
# https://linux.die.net/man/1/zip
alias zap='zip --encrypt --recurse-paths'

# alias g_aa='git add --all'
# alias g_ad='git add .' # same as --all
# alias g_c='git commit --gpg-sign'
# alias g_ca='git commit --gpg-sign --all'
# alias g_cm='git commit --gpg-sign -m' # message
# alias g_cl='git clone'
# alias g_clean='git prune&&git remote prune origin&&git remote update --prune' # bash
alias g_clean='git prune; and git remote prune origin; and git remote update --prune' # fish
alias g_cleanup='git clean -xdf'
# alias g_co='git checkout'
# alias g_df='git diff --color --color-words --abbrev'
alias g_l='git log --graph --oneline --decorate --all --date-order'
# alias g_ps='git push --set-upstream'
# alias g_pu='git pull'
# alias g_s='git status --short --branch'

# # https://curl.haxx.se/docs/manpage.html
alias get='curl --location --progress-bar --verbose'
# alias myip='curl -silent https://4.ifcfg.me'
# alias mylocalip='ifconfig | sed -En "s/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p"'
# alias weather='curl -4 http://wttr.in'

# alias mem='ps aux | sort -nk 4' # processes sorted by memory
# alias cpu='ps aux | sort -nk 3' # processes sorted by cpu

alias encodingof='file -I'
# alias toutf8='iconv -f iso-8859-1 -t utf-8 < file > file.new'
alias npmigtools='npm i -g lock-cli trash-cli np npm-check-updates'
alias fixmacostools='xcode-select --install'

alias serve='python -m SimpleHTTPServer 8000'

# alias bcu='brew update&&brew outdated&&brew upgrade&&brew cleanup' # bash
alias bcu='brew update; and brew outdated; and brew upgrade; and brew cleanup' # fish
# alias zcu='upgrade_oh_my_zsh'
alias scu='fish_update_completions'
# alias acu='bcu&&zcu&&ncu -g' # bash
alias acu='bcu; and scu; and ncu -g' # fish

alias n_lg='npm list -g --depth=0'
# alias n_og='npm outdated -g'
# alias n_in='npm install npm@latest -g'
alias n_cc='npm cache clean --force'
alias y_cc='yarn cache clean'
alias find_nm='find ./ -type d -name "node_modules"'

# emsdk
# shellcheck source=~
# source $HOME/Documents/GitHub/emsdk/emsdk_env.sh

# python from brew
# alias python='python3'
# alias python-config='python3-config'
# alias pip='pip3'
