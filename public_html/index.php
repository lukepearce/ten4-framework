<?php

require_once '../app/vendor/autoload.php';

/*
* Prepare application
*/

$app = new \Slim\Slim(array(
	'templates.path' => realpath('../app/templates'),
	'mode' => 'debug',
	'debug' => true
));

/*
* Prepare view
*/

$app->view(new \Slim\Views\Twig());
$app->view->parserOptions = array(
	'charset' => 'utf-8',
	'cache' => realpath('../app/cache'),
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
* Twig Extensions
*/

$assetsUrl = new Twig_SimpleFunction('assetsUrl', function ($path) use ($app) {
    return $app->view()->get('assetsUrl') . $path;
});
$twig = $app->view->getInstance();
$twig->addFunction($assetsUrl);

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
