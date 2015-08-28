# ZSH
- http://www.rebelcode.ru/linux/ustanovka-oh-zsh-v-ubuntu/
- http://habrahabr.ru/post/162339/

###install
- sudo apt-get install zsh
- curl -L http://install.ohmyz.sh | sh
- chsh -s /bin/zsh or chsh -s `which zsh`
- sudo shutdown -r 0

# APT

###all
- `sudo apt-get autoclean`
- `sudo apt-get autoremove`
- `sudo apt-get update`

###nodejs & npm & build tools
- `sudo apt-get install git git-core curl nodejs npm yui-compressor`
- `sudo apt-get install zlib1g-dev build-essential sqlite3 libsqlite3-dev python-software-properties`
- `sudo apt-get install libyaml-dev libssl-dev libreadline-dev libxml2-dev libxslt1-dev libcurl4-openssl-dev libffi-dev`

###ruby
- `sudo apt-get install ruby-full rubygems-integration`

###java
- `sudo apt-get install default-jre default-jdk`

###fonts
- `sudo apt-get install fonts-droid fonts-noto ttf-mscorefonts-installer`

###fix textures in openGL
- `sudo apt-get install lib32-mesa-libgl`
- `sudo apt-get install libtxc-dxtn-s2tc0 libtxc-dxtn-s2tc0:i386`
- `sudo apt-get install program:i386 gcc-multilib`

Your steam apps try to use the steam supplied libstdc++.so.6 version and  that's to old for most arch pacakges (in this case the lib32-llvm-libs package ).
try rm /home/jonas/.local/share/Steam/ubuntu12_32/steam-runtime/i386/usr/lib/i386-linux-gnu/libstdc++.so.6

###PHP & APACHE
- lamp or xampp

- `sudo apt-get install php5 php5-cli php5-common php-apc php-pear php5-xdebug php5-curl php5-dev php5-xsl php5-intl`
- `sudo apt-get install apache2`
- `sudo a2enmod rewrite`
- `sudo apt-get install libapache2-mod-php5`
- `sudo apt-get install mysql-server mysql-client`
- `sudo apt-get install php5-mysql`
- `sudo apt-get install phpmyadmin`
sudo nano /etc/apache2/apache2.conf add-this-at-the-end -> Include /etc/phpmyadmin/apache.conf

- ubuntu 14.0+ sudo systemctl restart apache2
- ubuntu 15.0+ sudo service apache2 restart

###PHP FIXERS
- `sudo pear channel-update PEAR`
- `sudo pear upgrade PEAR`
- `sudo pear channel-discover pear.phing.info`
- `sudo pear install phing/phing`
- `sudo pear install PHP_CodeSniffer`
necessary if you already have installed phpunit via apt-get
- `sudo apt-get remove phpunit`
https://phpunit.de/getting-started.html
install newest version of phpunit
- `sudo pear channel-discover pear.phpunit.de`
- `sudo pear channel-discover pear.symfony-project.com`
- `sudo pear channel-discover components.ez.no`
- `sudo pear update-channels`
- `sudo pear upgrade-all`
- `sudo pear install --alldeps phpunit/PHPUnit`
- `sudo pear install --force --alldeps phpunit/PHPUnit`
- `sudo wget http://cs.sensiolabs.org/get/php-cs-fixer.phar -O /usr/local/bin/php-cs-fixer`
- `sudo chmod a+x /usr/local/bin/php-cs-fixer`

#NPM

- `npm update -g`
- `npm install NAME -g (globall) or -D (dependency)`

- `sudo npm i -g uglify-js sass eslint jshint jscs babel babel-eslint csslint gulp gulp-babel bower webpack prettydiff`

- `npm i -D webpack bower-webpack-plugin`
- `npm i -D style-loader css-loader url-loader babel-loader babel-runtime eslint-loader cssnext-loader`
- `npm i -g npm-check-updates bower-check-updates trash`

- `bower install jquery#1.8.1 --save --force-latest`
- `bower cache clean`

###nvm
- `nvm ls-remote`
- `nvm install 0.11.13`
- `nvm use 0.11.13`
- `node -v`
- `nvm ls`
- `nvm alias default 0.11.13`

###gulp
- `npm adduser name`
- `npm publish - to update`
https://www.npmjs.org/package/gulp-gold
http://habrahabr.ru/post/177465/
http://habrahabr.ru/post/208890/
http://browsenpm.org/package.json

###ionic
- `npm install -g cordova ionic`
- `ionic start myApp sidemenu`
http://ionicframework.com/docs/guide/starting.html
https://github.com/driftyco/ionic-contrib-frosted-glass
- `cordova platform update ios`
- `cordova platform update android`

# GEM

https://rubygems.org/pages/download
- `ruby setup.rb`
- `sudo gem install sass scss_lint sass-globbing bundler autoprefixer-rails bourbon`

# GIT

- `git config --global color.ui true`
- `git config --global user.name "YOUR NAME"`
- `git config --global user.email "YOUR@EMAIL.com"`
- `ssh-keygen -t rsa -C "YOUR@EMAIL.com"`
- `cat ~/.ssh/id_rsa.pub`
- `ssh -T git@github.com`

# phpStorm

- for PHPUnit Code Completion add PHPUnit path under file->settings->directories
- Usually it’s stored in
/usr/share/php/PHPUnit
- for PHPUnit Skeleton Generator add phpunit-skelgen under file->settings->ProjectSettings->PHP->PHPUnit->SkeletonGenerator
- Usually it's stored in
/usr/bin/phpunit-skelgen

# PHP CONFIG

Change this settings in /etc/php5/cli/php.ini for for all webservers
Change this settings in /etc/php5/apache2/php.ini if you have installed apache2
Change this settings in /etc/php5/fpm/php.ini if you have installed nginx and fpm
- memory_limit = 512m
- display_errors = On
- html_errors = On
- post_max_size = 32m
- upload_max_filesize = 32m
- default_charset = utf8

Debugging with XDebug on Browser and Command line
The example is made for PHPStorm IDE with Apache2 webserver. But other IDE's or webservers should work in a similar way.

Ubuntu 12.04
Edit /etc/php5/cli/conf.d/xdebug.ini
Ubuntu 14.04
with php-fpm -> sudo ln -s /etc/php5/mods-available/xdebug.ini /etc/php5/fpm/conf.d/20-xdebug.ini
with apache2 -> sudo ln -s /etc/php5/mods-available/xdebug.ini /etc/php5/apache2/conf.d/20-xdebug.ini
with cli -> sudo ln -s /etc/php5/mods-available/xdebug.ini /etc/php5/cli/conf.d/20-xdebug.ini
Edit /etc/php5/mods-available/xdebug.ini
Configuration

# xdebug.ini

- xdebug.remote_enable=On
- xdebug.remote_host=localhost
- xdebug.remote_port=9002
- xdebug.remote_handler=dbgp
- xdebug.profiler_append=Off
- xdebug.profiler_enable=Off
- xdebug.profiler_enable_trigger=Off
- xdebug.profiler_output_dir="/tmp/kcachegrind"
- xdebug.max_nesting_level = 1000

- `sudo service apache2 restart`

-Add to /home/<your_username>/.bashrc
export XDEBUG_CONFIG="PHPSTORM";

-reload bash settings
source ~/.bashrc
Edit Settings in PHPStorm
Go to File->Settings->PHP->Debug
Change XDebug Debug Port to 9002
Install Easy XDebug Plugin for Firefox
https://addons.mozilla.org/de/firefox/addon/easy-xdebug/

# SERVER

if phpmyadmin not found:
sudo ln -s /usr/share/phpmyadmin /var/www/html/
Include /etc/phpmyadmin/apache.conf

-dontuse:
-vsftpd
-http://ubuntuforums.org/showthread.php?t=518293
-https://www.digitalocean.com/community/tutorials/how-to-configure-vsftpd-to-use-ssl-tls-on-an-ubuntu-vps

    <VirtualHost dropbox.local:80>
        DocumentRoot "E:/Documenten/Dropbox/Dropbox/dummy-htdocs"
        ServerName dropbox.local
        ErrorLog "logs/dropbox.local-error.log"
        CustomLog "logs/dropbox.local-access.log" combined
        <Directory "E:/Documenten/Dropbox/Dropbox/dummy-htdocs">
            Require all granted
        </Directory>
    </VirtualHost>

    As you start working with multiple projects, you will surely, at some point, want to host multiple websites on your local server. This post discusses how you can configure Xampp so that you can work on different projects, each with different DOC_ROOT, simultaneously.

    Change the httpd-vhosts.conf

    Open the httpd-vhosts.conf file in your favourite text-editor.

    The httpd-vhosts.conf file is located in

    XAMPP_INSTALLATION_DIR\apache\conf\extra\httpd-vhosts.conf for windows
    XAMPP_INSTALLATION_DIR/etc/extra/httpd-vhosts.conf for Linux
    Uncomment the following line.

    NameVirtualHost *:80
    Now paste the following lines at the end of the file

    <VirtualHost *:80>
      ServerAdmin webmaster@localhost
      ServerName localhost
      DocumentRoot XAMPP_INSTALALTION_DIR/htdocs
      <Directory XAMPP_INSTALLATION_DIR/htdocs >
        Options Indexes FollowSymLinks Includes ExecCGI
        AllowOverride All
        Order allow,deny
        Allow from all
      </Directory>
    </VirtualHost>

    <VirtualHost *:80>
      ServerAdmin webmaster@localhost
      ServerName localhost.samplewebsite
      DocumentRoot PROJECT_ROOT_DIRECTORY
      <Directory PROJECT_ROOT_DIRECTORY >
        Options Indexes FollowSymLinks Includes ExecCGI
        AllowOverride All
        Order allow,deny
        Allow from all
      </Directory>
    </VirtualHost>
    Just change the PROJECT_ROOT_DIRECTORY and XAMPP_INSTALLATION_DIR appropriately. The above lines creates a new virtual host which can be accessed by http://localhost.samplewebsite.

    Check if httpd-vhosts.conf is actually read by apache

    On some systems (notably ubuntu), just changing the httpd-vhosts.conf doesn’t do the trick. Because the apache, by default, doesn’t even read the file. So open httpd.conf file and uncomment the following line if it is commented

    Include BLAH/BLAH/httpd-vhosts.conf
    You can find httpd.conf file in

    XAMPP_INSTALLATION_DIR\apache\conf\ for Windows
    XAMPP_INSTALATION_DIR/etc/ for Linux
    Change the hosts file

    Now we need to tell the OS to route requests for http://localhost.samplewebsite to local server. To do that, edit the hosts file so that it contains the following lines in it

    127.0.0.1 localhost
    127.0.0.1 localhost.samplewebsite
    The hosts file is located in

    C:/Windows/System32/drivers/etc/hosts for windows
    /etc/hosts for Linux
    Restart the server

    All the things are in place now. Restart the server and open http://localhost.samplewebsite. You should see your website…
