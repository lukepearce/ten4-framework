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
		'errorTemplatePrefix' => '_errors/',
		'defaultImageQuality' => 85,
		'cacheDuration' => 'P1W',
		'sendPoweredByHeader' => false,
		'convertFilenamesToAscii' => true
	),

	'.dev' => array(
		'siteUrl' => 'http://project.craft.dev/',
		'devMode' => true,
		'enableTemplateCaching' => true,
		'environmentVariables' => array(
			'siteUrl' => 'http://project.craft.dev/',
			'fileSystemPath' => realpath( NULL ).'/',
			'assetsUrl' => 'http://project.craft.dev/assets/',
			'uploadsUrl' => 'http://project.craft.dev/uploads/'
		)
	),

	'.com' => array(
		'siteUrl' => 'http://www.project.com/new/',
		'environmentVariables' => array(
			'siteUrl' => 'http://www.project.com/new/',
			'fileSystemPath' => realpath( NULL ).'/',
			'assetsUrl' => 'http://www.project.com/new/assets/',
			'uploadsUrl' => 'http://www.project.com/new/uploads/'
		)
	)

);
