<div id="footer">
                    <h2 class="accessible-heading">Site Information</h2>
                    <div id="deep-footer">
                        <div class="holder">
<div class="container">   
    <div class="carousel news">
        

        <h2>Latest News</h2>

        
    

        

    <ul class="controls">
    <li class="left">Previous</li>
    <li class="right">Next</li>
</ul>


<div id="sliderNews" style="overflow: hidden;">
<ul class="widget-items" style="list-style: none; margin: 0px; width: 5200px; transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">


<?php 

$newpost = new Wp_Query(array(
  'post_type' => 'post'
));


while($newpost->have_posts()):$newpost->the_post(); ?>
<li style="width: 520px; display: table-cell; vertical-align: top;"><a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?> <strong><?php the_title(); ?></strong> <em><?php the_content(); ?></em> <span>Read more</span></a></li>

<?php endwhile; ?>






</ul>
</div>


<p><em><a href="post.php">Read more news</a></em></p>
        
    </div>
</div>
<div class="promoHome">
    

        <div class="promo"><a href="http://www.studyinaustralia.gov.au/explore-australia/explore-australia"><img alt="Outlined image of map of Australia" src="<?php echo get_template_directory_uri(); ?>/images/promo-where-will-you-go3.jpg"></a> <a href="http://www.studyinaustralia.gov.au/explore-australia/explore-australia"><strong>Discover study locations across Australia</strong></a></div>
        
    

</div>
                        </div>
                    </div>
 <div id="footer-top">
                        <div class="holder">
                            <div class="left">
                                

        <img src="images/logo-aus-gov.png" alt="Australian Goverment Logo">
        
    


        <ul class="social">
    <li class="yt"><a href="#" target="_blank" class="external">Youtube<span class="accessible"> (opens in a new window)</span></a></li>

    <li class="fb"><a href="#">Facebook</a></li>
    <li class="tw"><a href="#">Twitter</a></li>
</ul>
        
    

                            </div>
                            <div class="right">
                                
<!--Widget two area-->
<?php dynamic_sidebar('left2');?>


<!--Widget Three area-->
<?php dynamic_sidebar('left3');?>
        
    
<!--Widget Four area-->
<?php dynamic_sidebar('left4');?>
        
    

                            </div>
                        </div>        
                    </div>
                    <div id="footer-bottom">
                        <div class="holder">
                            
<?php wp_nav_menu(array(
    'theme_location'  => 'footer_menu',
    'menu_class'     => '',
    'fallback_cb'    =>  '',
    'depth'          =>   '3',
    'walker'         => new shipper_Navwalker()

  )); ?>


        
    

                        </div>
                    </div>
                </div>
            </div>
        <div> <!-- Required elements which were missing (Added by CM to ensure masterpage integrity) -->
    
    
    
    
</div>
<script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ctl00$rsm', 'aspnetForm', [], [], [], 90, 'ctl00');
//]]>
</script>


<script type="text/javascript">
//<![CDATA[
;(function() {
                        function loadHandler() {
                            var hf = $get('ctl00_ctl09_TSSM');
                            if (!hf._RSSM_init) { hf._RSSM_init = true; hf.value = ''; }
                            hf.value += ';CMDotNet:en-AU:6818c547-14d2-41a6-baed-6e135277fb2b:3f20b406;CMDotNet.Skins:en-AU:6a518422-b4d9-423b-82a2-7aa8ec11bb68:b5dc755c:301aceb2';
                            Sys.Application.remove_load(loadHandler);
                        };
                        Sys.Application.add_load(loadHandler);
                    })();//]]>
</script>
</form>

<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/jquery-1.7.2.min.js"></script>

<script type="text/javascript">$(document).ready(function() {
    if( $('#alternate').length){
        $('#alternate').closest('.wallpaper').addClass('alternate');
        $('.wallpaper.alternate > p').attr('id','alternateImage');
   }
});
$(document).ready(function() {
  $("#nav1 li").hover(
    function() {
      $(this).find('ul').slideDown();
    },
    function() {
      $(this).find('ul').slideUp();
    });
});
</script>

        <script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/jquery.tweet.js"></script> 
        <script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/helpers.js"></script>
        <script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/jquery.cycle.all.min.js"></script>

        <script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/postcustomjavascript.js"></script>    

<?php wp_footer(); ?>
</body>   
</html>