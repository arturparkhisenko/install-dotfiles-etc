# Np++,Brackets,Chrome,WP ext

## Chrome:
- github-notifier
- github-highlight-selected
- github-awesome-autocomple
- uBlock / AdBlock
- BuiltWith technology profiler
- Disconnect
- Yslow
- JetBrains IDE Support
- WhatFont / Fontface Ninja
- PerfectPixel by WellDoneCode
- Motivation
- Https Everywhere
- [stop-autoplay-for-youtube](https://chrome.google.com/webstore/detail/stop-autoplay-for-youtube/figkapeodjhdgnpiamleongcmecfjccb/)
- DHC / Postman Interceptor / Postman
- Meta seo inspector
- SEO Site Tools, Site Analysis
- SEOquake
- perfectpixel-by-welldonec
- Dimensions Legacy
- Visual Event
- Kingsquare HTML Validator
- PageSpeed Insights (by Google)
- Page Ruler
- JavaScript Error Notifier
- Live Web Development
- Simple Time Track
- Fontface Ninja (позвол¤ет узнать название шрифта на странице и скачать его)
- qSnap (скриншоты страницы + хостинг скриншотов)
- RegExp Tester (тестирование регул¤рных выражений)
- Cacoo (прототипирование и построение диаграмм)
- Ember Inspector
- Proxy [Hola](https://chrome.google.com/webstore/detail/unlimited-free-vpn-hola/gkojfkhlekighikafcpjkiklfbnlmeio)

- [ ] batarang
- [ ] ng-inspector
- [ ] CSS Shapes Editor
- [ ] qSnap
- [ ] Tape
- [ ] Web Developer Checklist

**url to run chrome app list:**
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --show-app-list

## Firefox
- pixel-perfect
- adblock-plus
- builtwith
- disconnect
- yslow
- dust-me-selectors

## Wordpress:
- All in one Favicon
- AntiVirus
- Contact form 7
- EWWW Image Optimizer
- Google Language Translator
- Hide Comments, Disable Comments
- iThemes Security
- Prerender and Prefetch
- Responsive Lightbox
- Redirection
- w3-total-cache / WP Super Cache / WP-HTML-Compression
- RSS Footer
- Use Google Libraries
- Yoast SEO, WordPress SEO Plugin
- Custom login
- Typekit WP
- Crayon syntax
- Menu icons
- Wp-optimize / Autoptimize
- Wp-maintanance
- easy-prism-syntax-highlighter
- BackWPup Free - WordPress Backup Plugin
- BackupWordpress
- ACF  Advanced СustomFields https://github.com/elliotcondon/acf/
- Rus-to-lat - английские слаги автоматом делает. Polylang.
- Slideshow Gallery
- qTranslate
- cache-buddy
- CPT UI https://wordpress.org/plugins/custom-post-type-ui/
- amr shortcode any widget
- https://wordpress.org/plugins/shortcode-widget/
- https://wordpress.org/plugins/list-category-posts/
- Responsive WordPress Slider - Soliloquy Lite
- Master Slider
- Note - A live edit text widget
- Collapsing Categories
- Responsive Lightbox - Всплывающие фото
- WYSIWYG Widgets / Widget Blocks
- tinymce advanced
- Portfolio Magic / nimble portfolio
- Insert Pages
- MouseWheel Smooth Scroll
- clear-session
- Responsive Menu

- responsive theme
- wordpress-theme-smartadapt
- woocommerce:
 - http://www.designswaggs.com/web-design/20-best-free-woocommerce-plugins-for-wordpress/

**engines:**
- Visual composer
- Redux

    User-Agent: *
    Disallow: /cgi-bin
    Disallow: /wp-login.php
    Disallow: /wp-admin/
    Disallow: /wp-includes/
    Disallow: /wp-content/
    Disallow: /wp-content/plugins/
    Disallow: /wp-content/themes/
    Disallow: /?author=*
    Allow: /

- Login LockDown (goo.gl/qIgVaS) — ограничивает
количество неудачных попыток авторизации;
- Revisium WordPress Theme Checker (revisium.com/
rwp/) — ищет типичные вредоносные фрагменты
в темах WordPress;
- Sucuri Security (goo.gl/1ob4iV) — проводит монито-
ринг и обнаружение вредоносного кода;
- BackUpWordPress (goo.gl/mjznAA) — делает ре-
зервное копирование файлов и БД;
- Google Captcha (reCAPTCHA) (goo.gl/lNkjI3) — уста-
навливает капчу при регистрации, авторизации,
восстановлении паролей и в форме комментариев.

    body_class(), is front page(), is_404()
    css класс sub-menu  wp_nav_menu($args)
    Билдер новых типов постов с кастомными полями из админ панели. Мы используем Magic fields 2
    Билдер новых полей для таксономии, использую Tax-Meta-Class
    register_nav_menus()
    add_theme_support ('post-thumbnails')
    resize_image( $attach_id = null, $img_url = null, $width, $height, $crop = false )
    the_breadcrumb()
    wp_corenavi($wp_query)
    emove_shortcode('gallery', 'gallery_shortcode');add_shortcode('gallery', 'my_gallery_shortcode');function my_gallery_shortcode($attr) {}
    wp_corenavi($wp_query)

    Создание virtual host на компьютере
    git clone ...
    Импорт бд, ввод трех SQL команд, для того, чтобы сказать WP, какой у нас сейчас текущий URL (gist)
    Копирования сниппетов со второго монитора и наполнение верстки смыслом.
    Деплой на сервер и чашка кофе


    <?php
    /*
     * Template Name: Шаблон главной
     */
    ?>
    <?php
    /*
     * Выше сниппет для кастомной темы на страницу.
     */
    ?>

    <?php
    /*
     * Инклуд файла header.php
     */
    get_header();
    ?>

    <?php
    /*
     * Вывод контента страницы
     */
    ?>
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>

            <?php
            /*
             * Получение текущей миниатюры в главном цикле и ресайз ее, юрл изображения хранится в $image['url']
             */
            $url = wp_get_attachment_url(get_post_thumbnail_id($post->ID));
            $image = vt_resize(null, $url, 220, 220, true);
            if (!$image['url']) $image['url'] = 'http://placehold.it/220x220&text=NO IMAGE';
            ?>

            <?php the_title(); ?>
            <?php the_content(); ?>
        <?php endwhile; ?>
    <?php else: ?>
        <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
    <?php endif; ?>

    <?php
    /*
     * Пример запроса WP_Query с паджинацией
     */
    ?>
    <?php
    /* Берем текущую страницу и создаем параметры запроса*/
    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
    $args = array(
        'post_type' => 'news',
        'posts_per_page' => '3',
        'paged' => $paged
    );
    /* Делаем инстанс WP_Query */
    $the_query = new WP_Query($args);
    ?>

    <?php if ($the_query->have_posts()) : ?>
        <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>

            <?php
            /*
             * Получение текущей миниатюры в кастомном запросе и ресайз ее, юрл изображения хранится в $image['url']
             */
            $url = wp_get_attachment_url(get_post_thumbnail_id($the_query->post->ID));
            $image = vt_resize(null, $url, 220, 220, true);
            if (!$image['url']) $image['url'] = 'http://placehold.it/220x220&text=NO IMAGE';
            ?>
            <?php echo $image['url']; ?>
            <?php
            /*
             * Вывод заголовка и контента, с читать далее (в визуальном редакторе тег more).
             * Если не работает, то после $the_query->the_post(); выше втыкаем global $more;$more=0;
             * Или с настройками WP шаманим по части вывода анонсов.
             */
            ?>
            <?php the_title(); ?>
            <?php the_content('Читать далее...'); ?>

        <?php endwhile; ?>

        <?php
        /*
         * Показываем паджинацию
         */
        wp_corenavi($the_query);
        ?>
        <?php
        /*
         * Сбрасываем запрос
         */
        wp_reset_postdata();
        ?>
    <?php else: ?>
        <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
    <?php endif; ?>

    <?php
    /*
     * Инклуд файла footer.php
     */
    get_footer();
    ?>

## NP++:
- converter
- dspellcheck
- html tag
- mime tools
- jslint

## Atom
- todo-show
- autoclose-html
- atom-beautify
- atom-css-comb
- autoprefixer
- docblockr
- emmet
- highlight-cov
- highlight-line
- highlight-selected
- language-javascript-better
- linter
- linter-csslint
- linter-htmlhint
- linter-eslint
- javascript-snippets
- turbo-javascript
- minimap
- minimap-git-diff
- seti-ui
- solarized-dark-syntax (default)
- editorconfig (sindresorhus)
- webbox-color
- hyperclick
- js-hyperclick
- git-log
- git-plus
- sync-settings

## Atom temp:
- seti-syntax
- minifier
- polymer-snippets
- linter-scss-lint
- language-javascript-jsx
- fixmyjs
- linter-jscs
- linter-jshint
- linter-xo
- merge-conflicts
- autocomplete-modules
- atom-polymer
- autocomplete-polymer
- project-manager
- react
- script
- clipboard-plus

## Atom (old list):
- jshint by sindresorhus
- angularjs
- atom-fuzzy-grep
- atom-terminal
- atom-x
- color-picker
- comment
- file-icons
- linter-php
- linter-phpcs
- linter-phpmd
- minimap-color-highlight
- minimap-highlight-selected
- myth
- set-syntax
- tool-bar
- tool-bar-main
- livereload
- remote-edit or secure copy

## atom shortcuts
ctrl-shift-d - duplicate line
ctrl+r - symbol lookup
ctrl+alt+w - wrap text inside a html tag

## Brackets:
- Brackets Fonts
- brackets icons
- Bigger Extensions Panel
- CSSfier
- emmet
- editorconfig
- ES6 As JS
- extension highlighter
- Extensions Rating
- markdown preview
- preferences setup ui
- quickdocsphp
- quickdocsjs
- Quick Search
- response for brackets
- FTP-Sync (eqFTP)
- http://www.apptoix.com/#bracketstoix
- Integrated Development
- Indent Guides
- Pop-up Menu Brackets

- monokai theme
- atom light theme

- angularjs code hints
- angularjs for brackets
- php code quality tools
- [PHP-SIG] PHP SmartHints
- php syntax hint
- Strict JavaScript
- FixMyJs

- Beautify
- minifier

- autoprefixer

- More HTML5 Code Hints
- htmlhint better than Brackets htmllint
- csslint
- scsslint
- jshint
- Epic Linter

- jsonlint extension for brackets
- Closure Linter
- phplint for brackets php must installed

## Sublime2:
jsbeautify conf
"space_after_anon_function": true,
"translate_tabs_to_spaces": true,
- [babel-sublime](https://github.com/babel/babel-sublime)

## NetBeans:
http://plugins.netbeans.org/plugin/49666/js-css-minify-compress
http://plugins.netbeans.org/plugin/55859/sublime-monokai-theme-for-netbeans-8
http://plugins.netbeans.org/plugin/40893/jslint
http://plugins.netbeans.org/plugin/15619/explore-from-here
http://plugins.netbeans.org/plugin/39197/ftpsitedeployer
http://plugins.netbeans.org/plugin/49660/netbeans-cheat-sheets
http://plugins.netbeans.org/plugin/43263/jsbeautify
http://plugins.netbeans.org/plugin/52226/jshint
http://plugins.netbeans.org/plugin/51003/html-preview
http://plugins.netbeans.org/plugin/51066/htmltidy
http://plugins.netbeans.org/plugin/41792/zen-coding
http://plugins.netbeans.org/plugin/42000/show-path-in-title

## Php/WebStorm:
- AngularJS
- Markdown
- Spy-js
- code glance
- ignore
- css-x-fire
- phonegap
- scss-lint
- bashsupport

## ADBLOCK:
    ##div[class*="banner-widget1-2"]
    ##div[class*="banner-widget1-1"]
    ##http://gotlinks.co/
    @@|*anistar.ru*
    @@|*gravatar*
    @@|*git*
    @@|*jsfiddle.net*
    @@|*valkyrie-wow*
    @@|*battle.net*
    @@|*sohonycbarbers.com*
    @@|*fiveminutes.gs*
    @@|*codeschool.com*
    @@|*github.io*
    @@|*rotapost.ru*
    @@|*inbox.google.com*
