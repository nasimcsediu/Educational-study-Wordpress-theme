<?php 
 /*
 Template Name: Home page 
 */
get_header();  ?>
<div id="wrapper-inner">   
<div id="page-content">
<div id="container-full" class="content-area home">

        <div class="intro">
          
<?php 
   $about = new Wp_Query(array(
   'post_type' => 'ediction-about',

   ));

while($about->have_posts()):$about->the_post(); ?>
        <h1><?php the_title(); ?></h1>
<p><?php the_content(); ?></p>
        
    <?php endwhile; ?>

        </div>

    <div id="sidebar">
        <h2 class="accessible-heading">Sidebar Content</h2>
        
        
        
        <?php 
         dynamic_sidebar('page-sidebar')
         ?>

    </div>

    <div class="container">
        

        <div class="carousel student">
            

    <h2>Student Stories</h2>
	<ul class="controls">
		<li class="left">Previous</li>
		<li class="right">Next</li>
	</ul>
	<div id="sliderStudent" style="overflow: hidden;">
	<ul class="widget-items" style="list-style: none; margin: 0px; width: 5200px; transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">


		<div id="sliderStudent" style="overflow: hidden;">
			<ul class="widget-items" style="list-style: none; margin: 0px; width: 5200px; transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          
 <?php
    $newstories = new Wp_Query(array(
       'post_type' => 'eduction-student', 

    ));

  while($newstories->have_posts()):$newstories->the_post() ?>

		<li style="width: 520px; display: table-cell; vertical-align: top;">
			<a href="<?php the_permalink(); ?>"><span class="image"><?php the_post_thumbnail(); ?></span> <strong><?php the_title(); ?> </strong> <em><?php the_content(); ?></em></a>

		</li>
<?php endwhile; ?>


			</ul>
		</div>
	</div>
	<p><em><a href="http://localhost/eduction1/stories/">See more student stories</a></em></p>


</div>
<div class="carousel social">
            

<h2>Social Feed</h2>

<ul class="controls">
	<li class="left">Previous</li>
	<li class="right">Next</li>
</ul>
	<div id="sliderSocial">  
		<ul id="socialFeed" class="widget-items">

  <?php 
  $socialstu = new Wp_Query(array(
           'post_type' => 'eduction-social',

  ));

  while($socialstu->have_posts()):$socialstu->the_post() ?>

			<li class="post">
				<div class="profimg">
					<a href="<?php the_permalink(); ?>" target="_blank">
					<?php the_post_thumbnail(); ?></a>
				</div>
				<div class="post-detail">
					<div class="post-date"><?php the_time('F j, Y'); ?></div>
						<div class="name">
							<a href="<?php the_permalink(); ?>" target="_blank"><?php the_title(); ?></a>
						</div>
					<div class="msg"><?php the_content(); ?>.
						<a href="<?php the_permalink(); ?>" target="_blank"><?php the_content() ?></a>
					</div>
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
        html += "<li class='post'><div class='profimg'><a href='http://www.facebook.com/" + post.fromID + "' target='_blank'><img src='" + post.profileImageUrl + "'/></a></div><div class='post-detail'><div class='post-date'>" + formatDate(post.createDate) + "</div><div class='name'><a href='http://www.facebook.com/" + post.postID + "'' target='_blank'>" + post.fromName + "</a></div><div class='msg'>" + setLinks(post.message) + "</div></div></li>";
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
    </div>                            
</div>
                    </div>
                </div>

    <div class="wallpaperCarousel">
           
        
    <div id="ctl00_ctl40_divCarouselContents" class="carousel-contents">
	<div id="background" class="large">
			<?php  
				global $eduction;
				$slider = $eduction['slider-area'];
				foreach($slider as $slideimage){ 
						
                echo '
	<div class="wallpaper">
		<div class="blurb">
			<h2>
				<a href="'.$slideimage['url'].'">'.$slideimage['title'].'</a> 
			</h2>
			<p>'.$slideimage['desc'].'<br>
				<span>
					<a href="'.$slideimage['url'].'">Go</a>
				</span>
			</p>
		</div>
		<p>
		<img alt="" src="'.$slideimage['image'].'"></p>
	</div>';
		}?>

</div>
<div class="holder large">
<ol id="pager">
</ol>
<ul id="controlSlide">
    <li><a href="#" id="resume">Play</a></li>
    <li><a href="#" id="pause">Pause</a> </li>
</ul>
</div>
</div>
    

     </div>      

<?php get_footer(); ?>