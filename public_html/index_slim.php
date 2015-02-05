<?php

require_once '../slim/vendor/autoload.php';

/*
* Prepare application
*/

$app = new \Slim\Slim(array(
	'templates.path' => realpath('../slim/templates'),
	'mode' => 'debug',
	'debug' => true
));

/*
* Prepare view
*/

$app->view(new \Slim\Views\Twig());
$app->view->parserOptions = array(
	'charset' => 'utf-8',
	'cache' => realpath('../slim/templates/__cache'),
	'auto_reload' => true,
	'strict_variables' => false,
	'autoescape' => true
);
$app->view->parserExtensions = array(new \Slim\Views\TwigExtension());

/*
* Hooks
*/

$app->hook('slim.before', function() use ($app) {
	$request = $app->request;
	$app->view()->appendData(array(
		'siteName' => 'Ten4 Framework',
		'assetsUrl' => $request->getUrl() . $request->getScriptName() . '/assets/',
		'segments' => explode('/', $request->getResourceUri())
	));
});

/*
* Routes
*/

$app->get('/', function() use ($app) {
	$app->render('index.twig', array(
		'title' => 'Home'
	));
});

$app->notFound(function() use($app) {
	$app->render('404.twig');
});

$app->error(function() use ($app) {
	$app->render('50x.twig');
});

$app->run();
