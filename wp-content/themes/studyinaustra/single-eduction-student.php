<?php get_header(); ?>

<div class="intros">
<?php while(have_posts()): the_post(); ?>
        <h2><?php the_title(); ?></h2>
        <?php the_post_thumbnail(); ?>
        <?php the_content(); ?>

 <?php endwhile; ?>
</div>
        
<?php get_footer(); ?>