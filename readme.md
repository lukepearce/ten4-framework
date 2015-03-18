# Ten4 Framework

## Craft

When building a site using craft:

- discard the `slim/` directory
- replace `index.php` with craft's own `index.php`
- remove the slim portion of the `.htaccess` rewrites

### Files

- `config/` Some configs with useful defaults.
- `templates/` Standard reusable templates.
	- `_macros.twig`
	- `_base.twig` Includes SEO/OpenGraph/Twitter stuff.
	- `_entry.twig` Includes SEO stuff and some examples of macros in use.
	- `404.twig`


## Slim

When building a site using slim:

- discard the `craft/` directory
- remove the craft portion of the `.htaccess` rewrites
- install composer by running:

	`curl -sS https://getcomposer.org/installer | php`

- install slim dependencies by running:

	`php composer.phar install`

- create the `slim/cache/` directory and ensure that it can be written to by php scripts

### Files

Slim template files are very similar to craft template files but have different macros and no entry concept by default.


## Gulp

Ensure that the above steps have been carried out before running gulp. Gulp detects which directory (either craft or slim) is present before watching template files. Before running gulp, install dependencies by running `npm install`

- If you have gulp installed globally you can just `gulp`, otherwise `npm run gulp` will do it ([see here](http://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally)).
- `gulp` or `npm run gulp` Run all processing and start livereload.
- `gulp full` or `npm run gulp-full` Run all processing.
- `gulp upload` or `npm run gulp-upload` Upload all processed files via FTP.


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
	- `cookie-notice.scss` Cookie notice styles.
	- `site.scss` A blank canvas. The only limit is your imagination.
	- `ie8.scss` *vomits*.
- `vendor/` External vendor styles (e.g. fancybox).


## Addons

Useful bits that aren't in every single project. Copy the files across into the appropriate places.

- `social-share/` Social share popup and tweet interaction.
- `video-embed/` Click-to-play video embed.
