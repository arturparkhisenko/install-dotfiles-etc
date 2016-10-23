# commands

- nginx 80: netstat -tulpn | grep :80 by ssh
- source ~/.bash_profile
- env
- pwd
- cp
- mv
- cd
- clear
- htop
- `touch filename.ext`

## folder sizes

- du --si --max-depth=1
- du -h filename

## catalogs full view

- ls -la

## read last strings

- tail filename

## windows cmd config
- opacity 90%
- colors: bg(0 43 54), text(147 161 161)

# some shell scripts
#!/bin/sh

# outer ip
curl ifconfig.co

# script name and rights from bin
chmod +x ~/bin/anyscript.sh

# webserver
while ( nc -l 80 < file.html > : ) ; do : ; done

# radio
mpv --volume=50 -playlist ~/16bit.fm_128.m3u
