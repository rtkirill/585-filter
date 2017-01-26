<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/reset.css");
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/grid.css");
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/buttons.css");
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/main.css");
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/jquery.tooltipsy.css");
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/carusel.css");
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/jquery.select2.css");
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/prettyPhoto.css");
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/jquery.uniform.css");

$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/jquery.min.js");
$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/jquery.modernizr.min.js");
$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/jquery.touchwipe.min.js");
$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/jquery.tooltipsy.min.js");
$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/jquery.jcarousel.min.js");
$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/jquery.select2.min.js");
$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/jquery.prettyPhoto.js");
$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/jquery.uniform.min.js");
$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/main.js");

?><!DOCTYPE html>
<html lang="ru">
<head>
<title><?$APPLICATION->ShowTitle()?></title>
<meta charset="<?=SITE_CHARSET?>" />
<?$APPLICATION->ShowMeta("keywords")?>
<?$APPLICATION->ShowMeta("description")?>
<?$APPLICATION->ShowMeta("robots")?>
<?$APPLICATION->ShowCSS()?>
<?$APPLICATION->ShowHeadStrings()?>
<?$APPLICATION->ShowHeadScripts()?>
</head>
    
<body><div id="panel"><?$APPLICATION->ShowPanel();?></div>

<div id="main_wrapper">
	<div class="wrapper">
		<div class="container">
			<div class="column span-12 zol_logo">
				<a href="/"><img src="<?=SITE_TEMPLATE_PATH?>/images/logo.png" alt="" /></a>
			</div>
		</div>
		<div class="container">
