<?php 

global $eduction;

?>


<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" class="global" lang="en" xml:lang="en">
    <head id="ctl00_Head1">
<meta http-equiv='content-language' content='en' />

  <link rel="canonical" href="" />

  <meta name="description" content="This is the official Australian Government website for international students. Use this site to search for courses, institutions and scholarships, read about studying and living in Australia, watch stories from other students, and much more" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width" />
  <link rel="shortcut icon" href="<?php echo get_template_directory_uri();?>/images/favicon.ico" type="image/x-icon" />
  <link rel="icon" href="<?php echo get_template_directory_uri();?>'/images/favicon.ico" type="image/x-icon" />
  <link href="<?php echo get_template_directory_uri(); ?>/css/site.theme.css" rel="stylesheet" type="text/css" media="screen" />
  <!-- Weibo Access Code -->
<!--
<meta property="wb:webmaster" content="77ad9d14ab2e8b04" />
<script type = "text/javascript" src = "http://tjs.sjs.sinajs.cn/t3/platform/js/api/wb.js" charset = "utf-8"> 
</script>
-->

<link href="<?php echo get_template_directory_uri(); ?>/css/site.landing.css" rel="stylesheet" type="text/css" media="screen" />

        <!--[if lt IE 8]>
            <link href="/UserUploadedStyles/ie-styles.min.css" rel="stylesheet" type="text/css" media="screen" />
        <![endif]-->
        <link href="<?php echo get_template_directory_uri(); ?>/css/site.print.min.css" rel="stylesheet" type="text/css" media="print,pdf" />
        <link href="<?php echo get_template_directory_uri(); ?>/css/site.landing2014.css" rel="stylesheet" type="text/css" media="screen" />
        <link type="text/css" rel="stylesheet" media="all" href="<?php echo get_template_directory_uri(); ?>/css/jquery-ui-1.8.5.custom.css" />
<link type="text/css" rel="stylesheet" media="all" href="<?php echo get_template_directory_uri(); ?>/css/sia-search.css" />


        

    <?php wp_head(); ?>
</head>

<body id="ctl00_BodyTag" class="cm-article13" data-gr-c-s-loaded="true">

            
                <div class="headerTop">
                    <div class="headerRight">
                     
        
    <div id="SearchContainer" class="clsSearchContainer">
    <form action="" method="post">
    <div class="searchWrap">
       
        <div class="viewAllScholContainer">
            
			<input name="s" type="text" placeholder="search for courses, institutions or site content">
        </div>
    </div>
    <div class="clsButtonContainer">
        <input type="submit" value="Search" id="ctl00_ctl15_SIASearch" class="clsSIAButton clsSearch">
    </div>
	</form>
</div>


        <div class="regionWrap"><select id="cboRegion">
<option selected="selected" value="/english/Home">English</option>
<option selected="selected" value="/english/Home">Bangla</option>

 </select>
</div>
        
    

                    </div>
                </div>
            <div id="wrapper">
                <div id="header">
                    <div class="header-logo">
                        

        <p><a title="<?php bloginfo('title') ?>" href="<?php echo home_url(); ?>"><img alt="" src="<?php echo $eduction['main-logo']['url'] ?>"><strong>English</strong></a></p>
        
    

                    </div>
                    <div class="header-right">
                        

        <p><img src="<?php echo $eduction['sub-logo']['url'] ?>" alt=""></p>
        
    

                    </div>
                    <div class="skip-link">
                        <a href="#page-content">Skip to main content</a>
                    </div>
                </div>
<div class="holder">                     
    

<div class="mainMenu"><a onclick="return false;" href="#">Main Menu</a></div>
        
	<?php 
		wp_nav_menu(array(
		'theme_location' => 'main_menu',
		'items_wrap' => '<ul id="nav1" class="hmenu menu12">%3$s</ul>'
		));
	?>

 



</div>