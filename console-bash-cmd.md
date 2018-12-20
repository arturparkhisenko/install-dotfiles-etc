# Console commands, bash, cmd

> commands, hotkeys and docs

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [URLs](#urls)
- [Commands](#commands)
  - [MANual (docs)](#manual-docs)
  - [Aliases manipulations](#aliases-manipulations)
  - [Bash history](#bash-history)
  - [In-Out (std)](#in-out-std)
  - [Pipeline |](#pipeline-)
  - [SSH](#ssh)
- [GPG](#gpg)
- [Windows cmd config](#windows-cmd-config)
- [Hotkeys](#hotkeys)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## URLs

- [bash-handbook](https://github.com/denysdovhan/bash-handbook)
- [commandlinefu](https://www.commandlinefu.com/commands/browse/sort-by-votes)
- [hexlet basic-linux-productivity](https://ru.hexlet.io/blog/posts/basic-linux-productivity)
- [learnyoubash](https://github.com/denysdovhan/learnyoubash)
- [some bash tips](https://alexpetralia.com/posts/2017/6/26/learning-linux-bash-to-get-things-done)
- [windows2unix](http://www.lemoda.net/windows/windows2unix/windows2unix.html)

## Commands

> command, command description, supported os

- `cat filename.ext` print file (linux&mac), `type` win
- `cat` or `less` or `tail` or `head -n10 {file}`
- `cd ~/` home dir (shortcut), (win) we can use `%HOMEPATH%` and `%~%\`
- `cd` change directory, any os. `cd ..` go up, without args go to `$pwd`
- `chmod +x ~/bin/anyscript.sh` script name and rights from bin
- `clear`
- `cp` copy
- `curl ifconfig.co` outer ip
- `du --si --max-depth=1` folder sizes
- `du -h filename` file size, `du -ha`
- `echo $MYWAR` output a variable value
- `env` create/show environment variable (linux&mac), `set` (win)
- `export MYWAR=10` save variable in env
- `find ./src -name "*.d.ts" | xargs echo rm | sh`  remove all d.ts files from the project
- `grep -inr {string}` find a string in the any file and dir
- `grep 'what' filename.ext` find string in file (linux&mac), `find/findstr` (win)
- `head filename.ext` first 10 lines of file (linux&mac)
- `htop`
- `less system.log` open paginated big file in vim mode, q-quit h-help (linux&mac)
- `ls` show folders, `ls -l` as list (linux&mac), `dir` (win)
- `man ascii` ascii table
- `mkdir` create directory, any os, `mkdir -p test1/test2`
- `mpv --volume=50 -playlist ~/16bit.fm_128.m3u` radio
- `mv oldname newname` rename something (linux&mac), rename something (win)
- `mv test2/* test1` move all from test2 to test1, `move` (win)
- `nginx 80: netstat -tulpn | grep :80 by ssh` whats using 80 port
- `pwd` home catalog, linux&mac
- `python -m SimpleHTTPServer 8000` webserver
- `rm -rf * - clean dir inside, rm -rf name/*` clean dir outside (f - force)
- `rm` remove file, `rm -r` (for folder) (linux&mac), `del` clean folder, `rmdir` remove folder (win) or with (/s)
- `scp <user@remote_host> <local_path>` copy file from remote to local and vise versa
- `source ~/.bash_profile` or `source ~/.zshrc`
- `tail filename.ext` last 10 lines of file (-f will show up to date) (linux&mac)
- `touch filename.ext`
- `touch` create an empty file, or upd timestamp (linux&mac), `echo.>filename.ext` (win)
- `tree -LhaC 3` show a structure with a 3 levels down
- `type command_name`  (shows description)
- `unset MYWAR` remove a variable
- `while ( nc -l 80 < file.html > : ) ; do : ; done` webserver

### MANual (docs)

- `man` show docs of some programm, `man mkdir` (linux&mac), `help` (win)

### Aliases manipulations

- `alias` shows all of them
- `alias gl='git log'` example
- `unalias gl` remove example
- `type gl` will show full alias value

### Bash history

- `history` show all history, use like !numberofcommand
- `!!` latest command
- `!cat` latest in history

### In-Out (std)

- `sort < filename.ext > sort`

### Pipeline |

- `cat unsorted | sort | uniq`
- `ls | grep filename | wc` word count - word line letter

### SSH

- `chmod 600 id_rsa`
- `ssh -T -p 443 git@ssh.github.com`
- `ssh -T git@ssh.github.com`

## GPG

- install without mail - `Mac GPG Installer, from the gpgtools project` on [gnupg.org](https://www.gnupg.org/download/)
- copy `.gpg` folder
- check it with `gpg --list-secret-keys --keyid-format LONG`

## Windows cmd config

- opacity 90%
- colors: bg(0 43 54), text(147 161 161)

## Hotkeys

- `ctrl+c` - break command
- `ctrl+z` (background, `fg` - resume, `bg` - resume all)
