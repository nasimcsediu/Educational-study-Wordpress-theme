<?php

/* require file  */
if(file_exists(dirname(__FILE__) . "/shipper-navwalker.php") ){
    require_once(dirname(__FILE__) . "/shipper-navwalker.php") ;
   }

if(file_exists(dirname(__FILE__) . "/lic/ReduxCore/framework.php") ){
    require_once(dirname(__FILE__) . "/lic/ReduxCore/framework.php") ;
   }


if(file_exists(dirname(__FILE__) . "/lic/sample/config.php") ){
    require_once(dirname(__FILE__) . "/lic/sample/config.php") ;
   }

    require_once("visual.php") ;
   


  flush_rewrite_rules();

/*Theme Support */
add_theme_support('title-tag');

add_theme_support('post-thumbnails');

function eduction_style(){

  wp_enqueue_style('','');

}
add_action('wp_enqueue_scripts','eduction_style');

register_nav_menus(array(
'main_menu' => 'Main Menu',
'footer_menu' => 'Footer Menu',
'plan_menu' => 'Plan and apply',
'aus_life' => 'Australian Life',
'study_menu' => 'Study in...',


));
//register post type//

register_post_type('eduction-student',array(
  'labels' => array(
  'name'   => 'Student Stories',
  'add_new_item' => __('Add new Student Stories'),

  ),
  'public' => true,
  
  'supports' => array('title','editor','thumbnail'),


));

register_post_type('eduction-social',array(
 'labels'       => array(
 'name'         => 'Student Socaial',
 'add_new_item' => __('Add new Student social Stories'),
 ),
 'public'       => true,
 'supports'     => array('title','editor','thumbnail'),  

));

register_post_type('ediction-about',array(
  'labels'      => array(
  'name'        => 'About Section',
  ),
  'public'      => true,
  'supports'    => array('title','editor',),


));



//sidebar registration //

 add_action('widgets_init','register_sidebar');
     register_sidebar(array(
       'name' => 'Footer wiget part 1',
       'id'   => 'left1',
       'Description' => 'Please add left sidebar',
       'after_widget' => '',
        ));


    register_sidebar(array(
       'name' => 'Footer wiget part 2',
       'id'   => 'left2',
       'Description' => 'Please add left sidebar',
       'before_widget' => '',
		'after_widget'  => '',
		'before_title'  => '<h2 class="widgettitle"><strong>',
		'after_title'   => '</strong></h2>',
        ));



    register_sidebar(array(
       'name' => 'Footer wiget part 3',
       'id'   => 'left3',
       'Description' => 'Please add left sidebar',
       'before_widget' => '',
		   'after_widget'  => '',
		   'before_title'  => '<h2 class="widgettitle"><strong>',
		   'after_title'   => '</strong></h2>',
        ));

    register_sidebar(array(
       'name' => 'Footer wiget part 4',
       'id'   => 'left4',
       'Description' => 'Please add left sidebar',
       'before_widget' => '',
		'after_widget'  => '',
		'before_title'  => '<h2 class="widgettitle"><strong>',
		'after_title'   => '</strong></h2>',
        ));

    register_sidebar(array(
       'name' => 'Page Sidebar',
       'id'   => 'page-sidebar',
       'Description' => 'Please add left sidebar',
       'before_widget' => '<a class="register">',
       'after_widget'  => '</a>',
      
        ));


    register_sidebar(array(
       'name' => 'Front Page Student Stories',
       'id'   => 'section-one',
       'Description' => '',
       'before_widget' => '',
       'after_widget'  => '',
      
        ));

   

   /* shortcode start */
   //about shortcode

   add_shortcode('about_shortcode','about_function');
  function about_function($att,$content){
       $attributes = shortcode_atts(array(
              'title'     => '',
              'contents'  => ''

       ),$att);
     extract($attributes);
     ob_start();
   ?>


      <div class="intro">           
       <h2><?php echo $title; ?></h2>
      <p> <?php echo $contents; ?></p>
        
    

        </div>
    <?php 
    } 

    //student stories shortcode

add_shortcode('student_stories','student_stories_function');
function student_stories_function($att,$content){
$soried = shortcode_atts(array(
          'title' => '', 
                 
  ),$att);

  extract($soried);

 ob_start();
  ?>
     <div class="carousel student">
            

        <h2><?php echo $title ?></h2>
            

        <ul class="controls">
    <li class="left">Previous</li>
    <li class="right">Next</li>
</ul>
<div id="sliderStudent" style="overflow: hidden;">
<ul class="widget-items" style="list-style: none; margin: 0px; width: 5200px; transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">


<div id="sliderStudent" style="overflow: hidden;">
<ul class="widget-items" style="list-style: none; margin: 0px; width: 5200px; transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">

<?php 
 $students = new Wp_Query(array(
    'post_type' => 'eduction-student',

 ));

while($students->have_posts()):$students->the_post(); ?>

<li style="width: 520px; display: table-cell; vertical-align: top;"><a href="<?php the_permalink(); ?>"><span class="image"><?php the_post_thumbnail(); ?></span> <strong><?php the_title(); ?></strong> <em><?php the_content(); ?></em></a></li>

<?php endwhile; ?>

</ul>
</div>
</div>
<p><em><a href="http://localhost/eduction1/stories/">See more student stories</a></em></p>
        
    

        </div>



   
 
  <?php 

  $storie =  ob_get_clean();
  return $storie;
}



add_shortcode('test','student_stories_functions');
function student_stories_functions($att,$content){
$soried = shortcode_atts(array(
          'title' => '', 
                 
  ),$att);

  extract($soried);

 ob_start();
  ?>
     <div class="allsubItems">
  <div class="subItem" id="divStory4309">
<a href="https://www.studyinaustralia.gov.au/Student-Stories/Abhinav/?search=1"><img src="<?php echo get_template_directory_uri();?>/Pietro.jpg" style="float:left" alt="Abhinav Sharma - India - Monash University" title="Abhinav Sharma - India - Monash University"></a>
<dl>
<dt><a href="https://www.studyinaustralia.gov.au/Student-Stories/Abhinav/?search=1"></a></dt>
</dl>
</div>
  

 
  </div>

   
 
  <?php 

  $storie =  ob_get_clean();
  return $storie;
}



//social shortcode
add_shortcode('student_social','social_function');
function social_function($att,$content){
  $socials = shortcode_atts(array(
      'title' => '',


  ),$att);
  extract($socials);

  ob_start();
?>

    <div class="carousel social">
            

        <h2><?php echo $title; ?></h2>

        
    

            

        <ul class="controls">
<li class="left">Previous</li>

<li class="right">Next</li>
</ul>
<div id="sliderSocial">  
<ul id="socialFeed" class="widget-items">

 

<?php 
  $socialss = new Wp_Query(array(
     'post_type' => 'eduction-social',

  ));

while($socialss->have_posts()): $socialss->the_post(); ?>

	<li class="post">
		<div class="profimg">
			<a href="<?php the_permalink(); ?>" target="_blank"><?php the_post_thumbnail(); ?></a>
		</div>
		<div class="post-detail">
			<div class="post-date"><?php the_time('F j, Y'); ?></div>
			<div class="name">
				<a href="<?php the_permalink(); ?>" target="_blank"><?php the_title(); ?></a>
			</div>
			<div class="msg">
			<?php the_content(); ?>
			<a href="" target="_blank"></a></div>
		</div>
	</li>
<?php endwhile; ?>

</ul>
</div>
<script type="text/javascript">
$(function(){
    renderFBFeed(fbFeed, $("#socialFeed"));
})

function renderFBFeed(feed, container){
    var html = "";
    for (var i = 0; i < feed.length; i++) {
        var post = feed[i];
        html += "<li class='post'><div class='profimg'><a href='" + post.fromID + "' target='_blank'><img src='" + post.profileImageUrl + "'/></a></div><div class='post-detail'><div class='post-date'>" + formatDate(post.createDate) + "</div><div class='name'><a href='http://www.facebook.com/" + post.postID + "'' target='_blank'>" + post.fromName + "</a></div><div class='msg'>" + setLinks(post.message) + "</div></div></li>";
    };
    container.html(html);
}

function formatDate(dateStr){
    var da = dateStr.match(/([\d]*?)-([\d]*?)-([\d]*?)T([\d]*?)\:([\d]*?):/);
    var d = new Date(da[1], da[2] - 1, da[3], da[4], da[5]);
    // Need to include GMT/UTC offset...
    var gmtOffset = new Date().getTimezoneOffset() / - 60;
    d.setTime(d.getTime() + (gmtOffset * 60 * 60 * 1000));
    return d.format("dd-MM-yyyy HH:mm");
}

function setLinks(h){
    return h.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, '<a href="$1" target="_blank">$1</a>');
}
</script>
        


        <p><em><a href="/social-feed/social-feed/">See all social feed</a></em></p>
        
    

        </div>

 
<?php 
$social = ob_get_clean();
return $social;
}
?>