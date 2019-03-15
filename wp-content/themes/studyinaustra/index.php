<?php get_header(); ?>



     <?php while(have_posts()) : the_post() ?>  
   
  <div class="intros">         
    <h1><?php the_title(); ?></h1>
    <?php the_content(); ?>
  

     <?php endwhile; ?>   

   </div>  
   
<?php get_footer(); ?>
