#!/bin/bash
if [ $# -lt 2 ]
then
echo 'syntax: ./cc.sh [command] [name] [pass] (example: ./cc.sh create test1 test1)'
exit
fi

cc_command=$1
login=$2

if [ $# -lt 3 ]
then
    pass=$login
else
    pass=$3
fi

error() {
    echo -e '\e[31m'$1'\e[m';
}

ok() {
    echo -e '\e[32m'$1'\e[m';
}

createUser() {
    usr_pass=$(perl -e 'print crypt($ARGV[0],"password")' $2)
    udir=/var/www/html/$1

    useradd -d $udir -g www-data -M -N -s /bin/bash -p $usr_pass $1

    if [ $? -eq 0 ]
    then
        chown -R $1 $udir
        chgrp www-data $udir
        chmod -R 775 $udir

        if [ $? -ne 0 ]
        then
            error "Failed to change folder user and set permissions!"
        else
            echo -e "Host: $1.yourdomain.com\nFTP Login: $1\nFTP password: $2"
        fi
    else
        error "Failed to add a user!"
    fi
}

createDB() {
    Q1="CREATE DATABASE IF NOT EXISTS $1;"
    Q2="GRANT ALL ON $1.* TO '$1'@'localhost' IDENTIFIED BY '$2';"
    Q3="FLUSH PRIVILEGES"
    SQL="${Q1}${Q2}${Q3}"
    mysql -uroot -p{PASS} -e "$SQL"

    echo -e "Database: $1\nDB Username: $1\nDB password: $2"
}

case $cc_command in
create)
    echo "create"
    if [[ -d "/var/www/html/$login" && ! -L "/var/www/html/$login" ]] ; then
        error "Directory \"$login\" already exists!"
    else
        mkdir /var/www/html/$2
        createUser $login $pass
        createDB $login $pass
    fi
;;
clear)
    echo "clear"
    cdir="/var/www/html/$login"
    if [[ ! -d $cdir || -L $cdir ]] ; then
        error "Directory \"$cdir\" doesn't exists!"
    elif [ $cdir == "/var/www/html/" ] ; then
        error "GO AWAY!!"
    else
        cd $cdir
        ok `pwd`
    fi
;;
drop)
    echo "drop"
;;
esac
