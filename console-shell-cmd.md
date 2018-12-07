<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Console, shell, cmd](#console-shell-cmd)
  - [commands](#commands)
  - [.bash_history](#bash_history)
  - [ssh](#ssh)
  - [gpg](#gpg)
  - [urls](#urls)
  - [windows cmd config](#windows-cmd-config)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Console, shell, cmd

## commands

- `source ~/.bash_profile` or `source ~/.zshrc`
- `env`
- `pwd`
- `cp`
- `mv`
- `cd`
- `clear`
- `htop`
- `touch filename.ext`
- `du --si --max-depth=1` folder sizes
- `du -h filename` file size
- `curl ifconfig.co` outer ip
- `chmod +x ~/bin/anyscript.sh` script name and rights from bin
- `while ( nc -l 80 < file.html > : ) ; do : ; done` webserver
- `python -m SimpleHTTPServer 8000` webserver
- `man ascii` ascii table
- `mpv --volume=50 -playlist ~/16bit.fm_128.m3u` radio
- `nginx 80: netstat -tulpn | grep :80 by ssh` whats using 80 port
- `cat` or `less` or `tail` or `head -n10 {file}`
- `grep -inr {string}` find a string in the any file and dir
- `tree -LhaC 3` show a structure with a 3 levels down
- `du -ha` show a size
- `scp <user@remote_host> <local_path>` copy file from remote to local and vise versa
- `less system.log` open paginated big file in vim mode

## .bash_history

- `history` show all history, use like !numberofcommand
- `!!` latest command
- `!cat` latest in history

## ssh

- `chmod 600 id_rsa`
- `ssh -T -p 443 git@ssh.github.com`
- `ssh -T git@ssh.github.com`

## gpg

- install without mail - `Mac GPG Installer, from the gpgtools project` on [gnupg.org](https://www.gnupg.org/download/)
- copy `.gpg` folder
- check it with `gpg --list-secret-keys --keyid-format LONG`

## urls

- [bash-handbook](https://github.com/denysdovhan/bash-handbook)
- [learnyoubash](https://github.com/denysdovhan/learnyoubash)
- [commandlinefu](https://www.commandlinefu.com/commands/browse/sort-by-votes)
- [hexlet basic-linux-productivity](https://ru.hexlet.io/blog/posts/basic-linux-productivity)
- [some bash tips](https://alexpetralia.com/posts/2017/6/26/learning-linux-bash-to-get-things-done)
- [windows2unix](http://www.lemoda.net/windows/windows2unix/windows2unix.html)

## windows cmd config

- opacity 90%
- colors: bg(0 43 54), text(147 161 161)
