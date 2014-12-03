<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(

	'*' => array(
		'omitScriptNameInUrls' => true,
	//	'errorTemplatePrefix' => '_errors/',
		'defaultImageQuality' => 85,
		'cacheDuration' => 'P1W'
	),

	'.dev' => array(
		'siteUrl' => 'http://project.craft.dev',
		'devMode' => true,
		'environmentVariables' => array(
			'siteUrl' => 'http://project.craft.dev/',
			'fileSystemPath' => '/Users/username/Sites/Project/public_html/',
			'assetsUrl' => 'http://project.craft.dev/assets/'
		)
	),

	'.com' => array(
		'siteUrl' => 'http://www.project.com/new',
		'environmentVariables' => array(
			'siteUrl' => 'http://www.project.com/new/',
			'fileSystemPath' => '/home/project/public_html/',
			'assetsUrl' => 'http://www.project.com/new/assets/'
		)
	)

);
