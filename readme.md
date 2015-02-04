# Ten4 Framework

## Craft vs Slim

If building a site using craft, discard the `slim/` directory and the `index.php` and `.htaccess` file in the `public_html/` directory. If building a site using slim discard the `craft` directory. To install slim dependencies first install composer by running

`curl -sS https://getcomposer.org/installer | php`

followed by

`php composer.phar install`

and then ensure that the `app/templates/__cache` folder in templates can be written to by php scripts.

## Installation

- `npm install` to install dependencies.


## Gulp tasks

- If you have gulp installed globally you can just `gulp`, otherwise `npm run gulp` will do it ([see here](http://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally)).
- `gulp` or `npm run gulp` Run all processing and start livereload.
- `gulp full` or `npm run gulp-full` Run all processing.
- `gulp upload` or `npm run gulp-upload` Upload all processed files via FTP.


## Craft files

- `config/` Some configs with useful defaults.
- `templates/` Standard reusable templates.
	- `_macros.twig`
	- `_frame.twig` Includes SEO/OpenGraph/Twitter stuff.
	- `_entry.twig` Includes SEO stuff and some examples of macros in use.
	- `404.twig`

Slim files are very similar but have different macros and no entry concept by default.


## Sass files

- `root.scss` Contains all imports.
- `static/` Framework tools - shouldn't need to edit these, they're all managed with variables.
	- `font-faces.scss` Font-face rule generator.
	- `reset.scss` HTML5 reset.
	- `mixins.scss` Useful Sass mixins, see below.
	- `helpers.scss` Useful classes.
	- `grid.scss` Grid system.
	- `flex-media.scss` Ye olde `.embed-container`, born again. Responsive image stuff too.
	- `container.scss` Container class.
- `site/` Site-specific styles.
	- `variables.scss` Sass configuration file, where all the cool stuff happens.
	- `typography.scss` Typographical bits, font sizes, etc.
	- `typeset.scss` Essentially `.wysiwyg` v2.0.
	- `headings.scss` Heading styles.
	- `cookie-notice.scss` Cookie notice styles.
	- `site.scss` A blank canvas. The only limit is your imagination.
	- `ie8.scss` *vomits*.
- `vendor/` External vendor styles (e.g. fancybox).


## Addons

Useful bits that aren't in every single project. Copy the files across into the appropriate places.

- `social-share/` Social share popup and tweet interaction.
- `video-embed/` Click-to-play video embed.
