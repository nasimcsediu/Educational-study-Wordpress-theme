<?php 
if (function_exists('vc_map')) {
	
vc_map(array(
     'name'      => 'About Content',
     'base'      => 'about_shortcode',
     'params'    => array(
       array(
           'param_name' => 'title',
           'type'       => 'textfield',
           'heading'    => 'Please Add Title',
       ),

       array(
           'param_name' => 'contents',
           'type'       => 'textarea',
           'heading'    => 'Please add Description',
       ),

     )

));

vc_map(array(
  'name'         => 'Student Stories',
  'base'         => 'student_stories',
  'params'       => array(
       array(
  'param_name'   => 'title',
  'type'         => 'textfield'
       ),

  )     

  ));

 vc_map(array(
   'name' => 'shipperslider',
   'base' => 'shipper-slider'

 ));

}


?>