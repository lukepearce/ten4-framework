
# Ten4 Framework

## Gulp tasks

- `gulp` or `npm run gulp` Run all processing and start livereload.
- `gulp full` or `npm run gulp-full` Run all processing.
- `gulp upload` or `npm run gulp-upload` Upload all processed files via FTP.


## Sass files

- `root.scss` Contains all imports.
- `static/` Framework tools - shouldn't need to edit these, they're all managed with variables.
	- `font-faces.scss` Font-face rule generator.
	- `reset.scss` HTML5 reset.
	- `mixins.scss` Useful Sass mixins, see below.
	- `flex-media.scss` Ye olde `.embed-container`, born again. Responsive image stuff too.
	- `grid.scss` Grid system.
	- `container.scss` Container class.
- `site/` Site-specific styles.
	- `variables.scss` Sass configuration file, where all the cool stuff happens.
	- `typeset.scss` Typographical bits, `.wysiwyg`'s big brother.
	- `site.scss` Nothing at all, yet. The only limit is your imagination.


## NPM Stuff

- `npm install` to install dependencies.
- If you have gulp installed globally you can just `gulp`, otherwise `npm run gulp` and `npm run gulp-full` will do it ([see here](http://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally)).