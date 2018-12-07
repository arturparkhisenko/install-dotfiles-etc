<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [commands bash and cdm](#commands-bash-and-cdm)
  - [hotkeys](#hotkeys)
  - [commands](#commands)
  - [MANual (docs)](#manual-docs)
  - [in out (std)](#in-out-std)
  - [pipeline |](#pipeline-)
  - [.bash_history](#bash_history)
  - [aliases](#aliases)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# commands bash and cdm

- [windows2unix](http://www.lemoda.net/windows/windows2unix/windows2unix.html)
- [bash-handbook](https://github.com/denysdovhan/bash-handbook)
- [learnyoubash](https://github.com/denysdovhan/learnyoubash)

## hotkeys

- `ctrl+c` - break command
- `ctrl+z` (background, `fg` - resume, `bg` - resume all)

## commands

> command description | command | os

- `pwd` (home catalog, linux&mac)
- `ls` (show folders, linux&mac), dir (win)
- `cd` (change directory, all)
- `cd ..` - go up
- `cd` without args - go to pwd
- `cd ~/` - home dir (shortcut), (win) we can use %HOMEPATH% and %~%\
- `mkdir` (create directory, all), `mkdir -p test1/test2`
- `touch` - create an empty file, or upd timestamp (linux&mac), `echo.>filename.ext` (win)
- `mv oldname newname` - rename something (linux&mac), rename something (win)
- mv also for moving, `mv test2/* test1` - move all from test2 to test1, move - (win)
- `rm` - remove file, `rm -r` (for folder) (linux&mac), `del` - clean folder, `rmdir` - remove folder (win) or with (/s)
- `rm -rf * - clean dir inside, rm -rf name/*` - clean dir outside (f - force)
- `cat filename.ext` - print file (linux&mac), type - win
- `head filename.ext` - first 10 lines of file (linux&mac)
- `tail filename.ext` - last 10 lines of file (-f will show up to date) (linux&mac)
- `grep 'what' filename.ext` - find string in file (linux&mac), find/findstr (win)
- `find ./src -name "*.d.ts" | xargs echo rm | sh`  remove all d.ts files from the project
- `type command_name`  (shows description)
- `ls -l` as list
- `less system.log` - open paginated big file in vim mode, q-quit h-help (linux&mac)

## MANual (docs)

- man - show docs of some programm, man mkdir (linux&mac), help (win)
- env - create/show environment variable (linux&mac) set (win)
- export MYWAR=10 - save variable in env
- unset MYWAR - remove
- echo $MYWAR

## in out (std)

- sort < filename.ext > sort

## pipeline |

- cat unsorted | sort | uniq
- ls | grep filename | wc (word count - word line letter)

## .bash_history

- history - show all history, use like !numberofcommand
  - !! - latest command
  - !cat - latest in history
  - ctrl_r - and type something, it'll show you items from history

## aliases

- alias - shows all of them
- alias gl='git log' - example
- unalias gl - remove example
- type gl - will show full alias value
