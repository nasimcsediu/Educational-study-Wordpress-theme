

<?php get_header(); ?>

<?php

/* 
Template name: blog Template

*/
   $query = new Wp_Query(array(
        'post_type' => 'post',


   ));


      while($query->have_posts()) :$query->the_post() ?>  
   <div class="intros">
  <div class="content-area general container">       
    <div class="widget newsArchive" id="Widget613">	<div class="mainItem">

<div class="allsubItems">
  

  <div class="subItem">
<dl>
<dt><span class="subItemDate"><span class="subItemDateDay"></span><span class="subItemDateMonth"><?php the_time('d M Y'); ?></span></span>&nbsp;<a href="<?php the_permalink(); ?>"><span class="subItemHeading"><?php the_title(); ?></span></a><br><span class="subItemTaxonBelowHeading">
</dt>
<dd class="description"><?php the_content(); ?>
  <br><a href="https://www.studyinaustralia.gov.au/news/think-you-know-australia"><span class="subItemMore">Read more</span></a>
</dd>
</dl>
</div>
 
  </div>
</div>
  
 
  </div>
</div>
</div>
     <?php endwhile; ?>   

     
<?php get_footer(); ?>