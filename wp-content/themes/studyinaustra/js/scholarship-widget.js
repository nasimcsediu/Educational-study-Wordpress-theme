(function($){

  //<script src="http://localhost/geg-skills-test/bower_components/highcharts/highcharts.js"></script>

  $.fn.scholarship_widget = function(options) {

        var defaults = {
            size:'normal',
            localhost:false
        };

        options = $.extend(defaults, options);
        self = $(this)
        var id = $(this).attr('id')

        qs_params  = $.param(options);

        console.log(options)

        if(options.localhost){
          url = 'http://local.geg-sia-public';
        }else{
          url = 'https://studiesinaustralia.com';
        }

        if(options.size == 'small'){
          url += "/scholarships-in-australia/widget/small?"+qs_params
        }else{
          url += "/scholarships-in-australia/widget?"+qs_params
        }

        console.log(url);

        $.ajax({
          type: 'GET',
          url: url,
          dataType: 'html',
          success: function(data) {

            $('#'+id).html(data);

            $('#'+id+' #widget-btn-search, #'+id+' #widget-btn-search-small').click(function(e){
              e.preventDefault();
              data = $('#'+id+' :input').serialize();
              url = 'https://studiesinaustralia.com/scholarships-in-australia/search?utm_source=studyinaustralia&utm_medium=widget&utm_campaign=scholarshipwidget&'+data;
              var win = window.open(url, '_blank');
              win.focus();
            });

          }
        });

        return $(this)  
  }
}(jQuery));