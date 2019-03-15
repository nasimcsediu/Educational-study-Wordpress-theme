
<?php get_header(); ?>
<?php 
 /*
   Template name: stories
 */

?>
<div class="intros">

<?php 

 $students = new Wp_Query(array(
    'post_type' => 'eduction-student',

 ));

 while($students->have_posts()) : $students->the_post() ?>
 <div class="allsubItems">
  <div class="subItem" id="divStory4309">
<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
<dl>
<dt><a href="<?php the_permalink(); ?>"></a></dt>
</dl>
</div>
  </div>
<?php endwhile; ?>
</div>

<?php get_footer(); ?>