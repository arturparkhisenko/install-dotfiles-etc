# command description | command | os

http://www.lemoda.net/windows/windows2unix/windows2unix.html

https://github.com/denysdovhan/bash-handbook

https://github.com/denysdovhan/learnyoubash

ctrl+c - break command

## commands

pwd (home catalog, linux&mac)

ls (show folders, linux&mac), dir (win)

cd (change directory, all), `cd ..` - go up, cd without args - go to pwd, cd ~/ - home dir (shortcut), (win) we can use %HOMEPATH% and %~%\

mkdir (create directory, all), mkdir -p test1/test2

touch - create an empty file, or upd timestamp (linux&mac), echo.>filename.ext (win)

mv oldname newname - rename something (linux&mac), rename something (win)

mv also for moving, mv test2/* test1 - move all from test2 to test1, move - (win)

rm - remove file, rm -r (for folder) (linux&mac), del - clean folder, rmdir - remove folder (win) or with (/s)

rm -rf * - clean dir inside, rm -rf name/* - clean dir outside (f - force)

cat filename.ext - print file (linux&mac), type - win
head filename.ext - first 10 lines of file (linux&mac)
tail filename.ext - last 10 lines of file (-f will show up to date) (linux&mac)

grep 'what' filename.ext - find string in file (linux&mac), find/findstr (win)

- ctrl+z (background, fg -resume, bg- resume all)
- type command (shows description)
- ls -l (as list)

#pager for big files (less, more)
less system.log - open paginated big file in vim mode, q-quit h-help (linux&mac),

#MANual (docs)
man - show docs of some programm, man mkdir (linux&mac), help (win)

env - create/show environment variable (linux&mac) set (win)
export MYWAR=10 - save variable in env
unset MYWAR - remove
echo $MYWAR

#in out (std, ввод вывод)
sort < filename.ext > sort

#pipeline | (конвеер)
cat unsorted | sort | uniq
ls | grep filename | wc (word count - word line letter)

# .bash_history
history - show all history, use like !numberofcommand
  !! - latest command
  !cat - latest in history
  ctrl_r - and type something, it'll show you items from history

# aliases
alias - shows all of them
alias gl='git log' - example
unalias gl - remove example
type gl - will show full alias value
