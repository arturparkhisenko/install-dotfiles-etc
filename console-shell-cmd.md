# commands

- `nginx 80: netstat -tulpn | grep :80 by ssh`
- `source ~/.bash_profile` or `source ~/.zshrc`
- `env`
- `pwd`
- `cp`
- `mv`
- `cd`
- `clear`
- `htop`
- `touch filename.ext`

# ssh
- `chmod 600 id_rsa`
- `ssh -T -p 443 git@ssh.github.com`
- `ssh -T git@ssh.github.com`

# gpg
- install *without mail - `Mac GPG Installer, from the gpgtools project` on [gnupg.org](https://www.gnupg.org/download/)
- copy `.gpg` folder
- check it with `gpg --list-secret-keys --keyid-format LONG`

## folder sizes

- `du --si --max-depth=1`
- `du -h filename`

## catalogs full view

- `ls -la`

## read last strings

- `tail filename`

## windows cmd config
- opacity 90%
- colors: bg(0 43 54), text(147 161 161)

# some shell scripts
#!/bin/sh

# outer ip
`curl ifconfig.co`

# script name and rights from bin
`chmod +x ~/bin/anyscript.sh`

# webserver
`while ( nc -l 80 < file.html > : ) ; do : ; done`

# radio
`mpv --volume=50 -playlist ~/16bit.fm_128.m3u`
