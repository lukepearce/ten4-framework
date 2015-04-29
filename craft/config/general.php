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
		'cacheDuration' => 'P1W'
	),

	'.dev' => array(
		'siteUrl' => 'http://project.craft.dev',
		'devMode' => true,
		'environmentVariables' => array(
			'siteUrl' => 'http://project.craft.dev/',
			'fileSystemPath' => realpath( NULL ).'/',
			'assetsUrl' => 'http://project.craft.dev/assets/'
		)
	),

	'.co.uk' => array(
		'siteUrl' => 'http://www.project.co.uk/new',
		'environmentVariables' => array(
			'siteUrl' => 'http://www.project.co.uk/new/',
			'fileSystemPath' => realpath( NULL ).'/',
			'assetsUrl' => 'http://www.project.co.uk/new/assets/'
		)
	)

);
