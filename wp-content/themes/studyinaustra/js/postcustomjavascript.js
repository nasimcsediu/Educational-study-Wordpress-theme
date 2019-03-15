if (jQuery) {
    jQuery(document).ready(function() {
    
          if(jQuery('div').is(".SearchTabs")) {
            jQuery('body').addClass("search-results");
        }  
    
    jQuery(document).click(function(event) { 
    if(!jQuery(event.target).closest('.countrySelector div.clicked').length) {
        if(jQuery('.countrySelector div.clicked').is(":visible")) {
            jQuery('.countrySelector div.clicked').removeClass("clicked");
        }
    }        
})
    
 jQuery(".countrySelector div").click(function () { 
   jQuery(this).toggleClass("clicked");
});
   
   
   
   
      $('.countrySelector ol li').one("click", function(e) {
        e.preventDefault();
         var thisCountry = $(this).find("a").text();
         
           var thisLink = $(this).find("a").attr("href");
$(".countrySelector strong a").text(thisCountry);
$(".countrySelector strong span").text("Country:");
           $(".countrySelector > a").attr("href", thisLink);
      });
   
   
  //$(".headerRight .regionWrap select").attr("size","0");  
  //$(".headerRight .regionWrap select option").wrapInner("<li>");
  //$("<option disabled='disabled'>Select your language</span>").prependTo(".headerRight .regionWrap select"); 
   
     if ($(window).width() < 768) { 
       var searchField = $('.headerRight input[type="text"]');
  searchField.val('Search');
  searchField.focus(function() {
    if (searchField.val() == 'Search') {
      searchField.val('');
    }
    else {}
  });
  searchField.blur(function() {
    if (searchField.val() == '') {
      searchField.val('Search');
    }
    else {}
  });
     
     
     }
    else {
  var searchField = $('.headerRight input[type="text"]');
  searchField.val('Search for courses, institutions or content');
  searchField.focus(function() {
    if (searchField.val() == 'Search for courses, institutions or content') {
      searchField.val('');
    }
    else {}
  });
  searchField.blur(function() {
    if (searchField.val() == '') {
      searchField.val('Search for courses, institutions or content');
    }
    else {}
  });
  } 
    
     jQuery("ul.utilities li a").focus(function () {
        $(this).parent().addClass('hover');
    });
    
       //When two search boxes on page, submit correct one when using enter key    
	$('#SearchContainer input[type=text]').keypress(function (event) {
           if (event.keyCode == '13') {
              event.preventDefault(); 
              $(this).parent().find('.clsButtonContainer input[type=submit]').trigger('click');
           }
        }); 
        
        $('#page-content #info-window .login-input input, .login-button input[type=submit]').keypress(function (event) {
           if (event.keyCode == '13') {
              event.preventDefault(); 
              $(this).parents(".inner-login-box").find('.login-button input[type=submit]').trigger('click');
           }
        });    
        
    jQuery(window).load(function() {
	$(".validatoralert").each(function(){
	    $(this).appendTo($(this).siblings("label"));
	 });
	});  
	
	jQuery("#wrapper a[target$='blank']").each(function() {
	   if(!$(this).children(".accessible").length) {
	       $(this).addClass("external");
	       $("<span class='accessible'> (opens in a new window)</span>").appendTo(this);
	   }
	});	
	
	
	jQuery('#wrapper #page-content .container.general').each(function() {
	         if ($(this).html() == "") {
	             $(this).hide();
	         }
	});
    
    jQuery("p.alternateImage").parents(".wallpaper").addClass('alternate').children("p").addClass("alternateImage");
    
    
    if (jQuery('div').is('.clsFormCreator')) {
        $('.clsFormCreator .clsMandatory').insertAfter('.clsFormCreator p.clsGeneralText');
    }
    
        if (jQuery('.exploreTop').length > 0) {
            var leftHeight = jQuery('.exploreTop .left').height();
            var rightHeight = jQuery('.exploreTop .right').height();
            if (leftHeight > rightHeight) {
                jQuery('.exploreTop .right').css('height',leftHeight+'px');
            }
            else if (leftHeight < rightHeight) {
                jQuery('.exploreTop .left').css('height',rightHeight+'px');
            }
        }
    
    

if (jQuery('h1 #icon').length > 0) {
           var thumbURL = $("#icon img").attr('src');
           thumbURL = thumbURL.replace(/\//g, '');
           if(thumbURL.indexOf('UserUploadedImages') >= 0) { 
             } else {
             $('#icon').parents('h1').addClass('hide');
           }
        }
     

       if (jQuery('div').is('.SearchResults')) {
            jQuery(".SearchResults").parents(".content-right").addClass("results");
            jQuery(".content-right .searchPanel").appendTo(".content-right");
            jQuery(".SearchLeft").prependTo(".content-left:first-child");
            jQuery(".SearchResults ol li:even").addClass("even");
            jQuery(".SearchResults ol li:odd").addClass("odd");
        }

        if (jQuery('div').is('.home')) {
            controlsCarousel(); 
            home(); 
            student();
            latestNews();            
         }
         
        if (jQuery('ul').is('.controls')) {
       		 controlsCarousel(); 
         }
         
        if ($('#background').prev().is('.skip-link')) {
	    homeSlider();
        }
                    
        if (jQuery('div').is('.wallpaperCarousel')) {
            wallpaperCarousel();        
        }

        if (jQuery('div').is('#sidebar')) {
            sidebar();
        }
        
        if (jQuery('div').is('.newsArticle')) {            
        $("#breadcrumb-panel #breadcrumbs ol li:last-child").replaceWith('<li itemtype="http://data-vocabulary.org/Breadcrumb" itemscope=""><a href="/news" class="clsAltNormalOneSmaller" target="_top"><span itemprop="title">News</span></a></li>' );
        var newsTitle = $(".content-area h1 span:last-child").text();
        $( '<li itemtype="http://data-vocabulary.org/Breadcrumb" itemscope=""><span itemprop="title" class="clsBreadCrumbsHighlighted">' + newsTitle + '</span></li>' ).insertAfter( "#breadcrumb-panel #breadcrumbs ol li:last-child" );
        }

        if (jQuery('div').is('#tweet')) {
            //tweet();
        }
        
        if (jQuery('div').is('#tweetSingle')) {
            //tweetSingle();
        }
        
        if (jQuery('ul').is('#controlSlide')) {
            controls();
        }

        if (jQuery('div').is('.comments-container')) {
            jQuery(".content-right .sidebar").appendTo("#page-content");
        }

        if (jQuery('div').is('.MyAccountMenu')) {
            jQuery("h1.topTitle").appendTo(".MyAccountSubMenu");
        }

        if (jQuery('div').is('.downloads')) {
            refineDropdown();
            refineTags();
            refineTitle();
            
	  jQuery("#wrapper #page-content .container.downloads .refinewidget > a").click(function(){
	        if (jQuery(this).parents(".refineBox").hasClass('active')) {
	            jQuery(this).removeClass("active");
	        }
	        else {
	            jQuery(".refineBox").removeClass("active");
	            jQuery(this).parents(".refineBox").addClass('active');
	        }
	    });
	    
	    jQuery("#wrapper #page-content .container.downloads .refinewidget > a").keypress(function(){
	        if (jQuery(this).parents(".refineBox").hasClass('active')) {
	            jQuery(this).removeClass("active");
	        }
	        else {
	            jQuery(".refineBox").removeClass("active");
	            jQuery(this).parents(".refineBox").addClass('active');
	        }
	    });
    
	$(document).mouseup(function (e){
	var container = $(".refinewidget");
	if (!container.is(e.target) // if the target of the click isn't the container...
	&& container.has(e.target).length === 0) // ... nor a descendant of the container
	{
	//hide here
	$('.refineBox').removeClass("active");
	}
	});
	$(document).keyup(function (e){
	var container = $(".refinewidget");
	if (!container.is(e.target) // if the target of the click isn't the container...
	&& container.has(e.target).length === 0) // ... nor a descendant of the container
	{
	//hide here
	$('.refineBox').removeClass("active");
	}
	});
	            
        }
        
        if (jQuery('div').is('.newsRefine')) {
            refineDropdownNews();
            refineTitle();
        }

        if (jQuery('div').is('.glossary')) {
	    glossary();
	}

        if (jQuery('div').is('.eventsLanding')) {
              refineDropdown();
            eventsLanding();
            eventsPrevLanding();
            jQuery(".eventsUpcoming .subItem:even").addClass("alt");  
            jQuery(".widgetHeader").insertBefore(".eventsUpcoming .mainItem");
            jQuery('#newFilter a').live('click', function(e){
               e.preventDefault();
               var taxSelected = $(this).attr('id');
               eventsFilter(taxSelected);
            });
        }

        if (jQuery('div').is('.newsLanding')) {
            refineDropdown();
            refineTags();
        }
		
        if (jQuery('div').is('.module-area.events')) {
            jQuery(".event-view-training-details #btnRegister").insertBefore(".longDesc").wrap("<div class='register'>Please note this event requires registration</div>");
            jQuery('div[idjQuery="pnlEventRegStageBreadcrumb"] span').each(function(){
                var str = jQuery(this).text();
                var substr = str.split('-');
                var myhtml="<span class='number'>"+substr[0]+"</span> <span class='name'>"+substr[1]+"</span>";
                jQuery(this).html(myhtml);
            });
            if(jQuery('.event-view-training-details .details tr td').is(':empty')){
                 jQuery(this).parent().hide();
            }
            
            $(".event-view-training-details .details tr").each(function() {
                 if(jQuery('td', this).is(':empty')){
                 jQuery(this).hide();
              }
            });
            
        }

        if (jQuery('ul').is('.hmenu')) {
            jQuery(".hmenu li.selected").parents("li").addClass("selected");
            jQuery(".hmenu li.selected").children("ul").show();
            jQuery(".hmenu li ul li:has(ul)").toggleClass("hasSub");
        }
        
        if (jQuery('input').is('#LoginButton')) {
            loginFix();
        }
        
        jQuery('.intro a').click(function(e){
             e.preventDefault();
             jQuery('.global').prev().trigger('click');       
        });
        
        if (document.getElementById('Widget2782')) {
            var filterSelected = jQuery('.sia-view-controls a.selected').html();
            if (filterSelected != null) {
                jQuery('.sia-view-controls').append("<p>"+filterSelected+" View</p>");
            }
        }
        
        responsiveTable();
	jQuery(window).resize(function () {
    		window.clearTimeout(resize_timer);
    		resize_timer = window.setTimeout(function () { responsiveTable(); }, 200);
	});

    });
} 

// font resize
function fontResize() {
    var maxResize = 3;
    var currentResize = 0;
    jQuery('.fontChange').click(function(){
        var ourText = jQuery('#page-content');
        var currFontSize = ourText.css('fontSize');
        var finalNum = parseFloat(currFontSize, 10);
        var stringEnding = currFontSize.slice(-2);
        if (this.id == 'large' && currentResize < maxResize) {
            finalNum *= 1.1;
            currentResize = currentResize+1;
        }
        else if (this.id == 'small' && currentResize > 0) {
            finalNum /=1.1;
            currentResize = currentResize-1;
        }
        ourText.css('fontSize', finalNum + stringEnding);
    });
}


// refer a friend popup
if (document.getElementById('refer-friend')) {
    jQuery('#refer-friend').jqm({modal: true});
}
function ReferFriendOpen(strURL, intArticleID, strPage) {
    var referFriend = strPage + '?Article=' + intArticleID + '&' + strURL;
    jQuery('#refer-friend iframe').attr('src',referFriend);
    jQuery('#refer-friend').jqmShow();
}

// close modal popup
function closeModal() {
    jQuery('#refer-friend iframe').attr('src','');
    jQuery('#refer-friend').jqmHide();
}


jQuery(window).load(function() {
          if ($('.exploreTop .right img:nth-child(2)').is(".responsive-image")) {
            $('.exploreTop .right').addClass("slideshow")
            .cycle({ 
            fx: 'fade', 
            speed: 1200,
            delay: 7,
            next: '#next', 
            prev: '#prev', 
            pager: '#pager',
            mpause:  4
            });
        }        
  });

function controlsCarousel() {

jQuery('li.left').click(function() {
 jQuery(this).parents("ul").siblings("div").find('li:first').appendTo(jQuery(this).parents("ul").siblings("div").children("ul")).show('slow');
 });

jQuery('li.right').click(function() {
 jQuery(this).parents("ul").siblings("div").find('li:last').prependTo(jQuery(this).parents("ul").siblings("div").children("ul")).show('slow');
 });

}


// home

function home() {

jQuery('div.intro h1').click(function() { 
    jQuery(this).parents("div.intro").toggleClass("expanded");
});

}

// tweet carousel
function tweet() {
   jQuery("#tweet").tweet({
            username: "futureunlimited",
            join_text: "auto",
            avatar_size: 50,
            count: 5,
            auto_join_text_default: "",
            auto_join_text_ed: "",
            auto_join_text_ing: "",
            auto_join_text_reply: "",
            auto_join_text_url: "",
            loading_text: "loading tweets..."
        });

jQuery(window).load(function() {
  window.mySwipe = new Swipe(document.getElementById('tweet'));
  });
  
  $('.tweet_text a').attr('target', '_blank');
}  

// tweet carousel
function tweetSingle() {
   jQuery("#tweetSingle").tweet({
            username: "futureunlimited",
            join_text: "auto",
            avatar_size: 50,
            count: 1,
            auto_join_text_default: "",
            auto_join_text_ed: "",
            auto_join_text_ing: "",
            auto_join_text_reply: "",
            auto_join_text_url: "",
            loading_text: "loading tweets..."
        });
        
        $('.tweet_text a').attr('target', '_blank');
}


// sidebar accordion
function sidebar() {
    jQuery('#wrapper #page-content #sidebar .global select').prepend('<option value="#">Select your country</option>');
    jQuery("#sidebar .login-element").unwrap();
    jQuery("a.register").appendTo("#sidebar .login-element").show();
    jQuery("a.forgotPass").appendTo("#sidebar .login-element .lgn-btn").show();
    jQuery("#sidebar .oauth-social-logins").appendTo("#sidebar .login-element");
    jQuery("#sidebar div.searchPanel").show();
       
    jQuery("#sidebar h2").click(function(){
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass("active");
            jQuery(this).next("div").hide();
        }
        else {
            jQuery("#sidebar h2").removeClass("active");
            jQuery(this).addClass("active");
            jQuery(this).siblings("div").hide();
            jQuery(this).next("div").slideDown(200);
        }
    });

    jQuery("#sidebar h2").keypress(function(){
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass("active");
            jQuery(this).next("div").hide();
        }
        else {
            jQuery("#sidebar h2").removeClass("active");
            jQuery(this).addClass("active");
            jQuery(this).siblings("div").hide();
            jQuery(this).next("div").slideDown(200);
        }
    });
    
      jQuery("#sidebar h3").click(function(){
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass("active");
            jQuery(this).next("div").hide();
        }
        else {
            jQuery("#sidebar h3").removeClass("active");
            jQuery(this).addClass("active");
            jQuery(this).siblings("div").hide();
            jQuery(this).next("div").slideDown(200);
        }
    });

    jQuery("#sidebar h3").keypress(function(){
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass("active");
            jQuery(this).next("div").hide();
        }
        else {
            jQuery("#sidebar h3").removeClass("active");
            jQuery(this).addClass("active");
            jQuery(this).siblings("div").hide();
            jQuery(this).next("div").slideDown(200);
        }
    });

    jQuery("div.mainMenu").click(function(){ 
    jQuery(this).toggleClass("active");
    jQuery(this).parents("#wrapper").toggleClass("expanded");
    jQuery(this).siblings(".hmenu").slideToggle(200); });
}

// student stories carousel
function student() {
    var articleId = jQuery("body").attr("class");
    var idDigits = articleId.substring(10);
    var result;
    var widget;
    var storyCountry;

    function showError(msg) {
        fetchDynamicWidget(541, showError, showResults, 1, 13);
        //jQuery('.student .widget-items').append('Unable to load Student Stories at this time.');        
    }
    function showResults(results) {
        result = results;
        for (var i=0; i<result.length; i++) {
            storyCountry = result[i].TaxonomyTagAboveHeading;
            storyCountry = storyCountry.replace(/(<([^>]+)>)/ig, "");
            
            jQuery('.student .widget-items').append('<li><a href="/'+result[i].UserFriendlyUrl+'"><span class="image"><img alt="" src="/images/'+result[i].WidgetThumbnailUrl+'" /></span> <strong>'+result[i].Heading+'</strong> <em>'+storyCountry+'</em></a></li>');
        }
        window.mySwipe = new Swipe(document.getElementById('sliderStudent'));
    }
    fetchDynamicWidgetASMX(541, showError, showResults, 1, idDigits);
}

// latest news carousel
function latestNews() {
    var articleId = jQuery("body").attr("class");
    var idDigits = articleId.substring(10);
    var result;
    var widget;
    function showError(msg) {
        fetchDynamicWidget(542, showError, showResults, 1, 13); //Defaults to global news (13) if local returns error/no items
        
    }
    function showResults(results) {
        result = results;
        for (var i=0; i<result.length; i++) {
            jQuery('.news .widget-items').append('<li><a href="/'+result[i].UserFriendlyUrl+'"><img alt="" src="/images/'+result[i].WidgetThumbnailUrl+'" /> <strong>'+result[i].Heading+'</strong> <em>'+result[i].BriefDescription+'</em> <span>Read more</span></a></li>');
        }
        window.mySwipe = new Swipe(document.getElementById('sliderNews'));
       
    }
    fetchDynamicWidgetASMX(542, showError, showResults, 1, idDigits); //Defaults to global news (13) for launch, change car after launch
}

// background slider
function homeSlider() {
    jQuery('#background').cycle({ 
        fx: 'fade', 
        speed: 1200,
        timeout: 4000,
        next: '#next', 
        prev: '#prev', 
        pager: '#pager',
        mpause:  4,
        after: function(el, next_el) {
           jQuery(next_el).addClass('active');         
        },
        before: function(el) {
           jQuery(el).removeClass('active');         
        }
    }).cycle('pause');
}

// wallpaper carousel
function wallpaperCarousel () {
var titles = $('.wallpaper .blurb').find("h2").map(function() { return $(this).text(); });
    jQuery('#background').cycle({ 
        fx: 'fade', 
        speed: 1200,
        timeout: 5000,
        delay:   3000,
        next: '#next', 
        prev: '#prev', 
        pager: '#pager',
       pagerAnchorBuilder: function (index) {               
      return '<li>' + titles[index] + ' <a href="#">View slide</a></li>';
}, 
        mpause:  4,
        after: function(el, next_el) {
           jQuery(next_el).addClass('active');         
        },
        before: function(el) {
           jQuery(el).removeClass('active');         
        }
    })
}


function controls() {
jQuery('#pause').click(function() { 
    jQuery(this).parent("li").siblings("li").find("a").removeClass("active");
    jQuery(this).toggleClass("active");
    jQuery('#background').cycle('pause'); 
});

jQuery('#resume').click(function() { 
     jQuery(this).parent("li").siblings("li").find("a").removeClass("active");
     jQuery(this).toggleClass("active");
    jQuery('#background').cycle('resume'); 
});
}

function glossary() {
	jQuery("#KeywordSearch").appendTo(".glossary #NominatedArticleTop");		
	jQuery('.glossary div[idjQuery="DictionaryTerms"] dl').each(function(){
		var listItems = jQuery(this).children("dt, dd");
		for(var i = 0; i < listItems.length; i+=2) {
			listItems.slice(i, i+2).wrapAll("<div class='row'>");
		}
	});
	jQuery('.glossary div[idjQuery="DictionaryTerms"] dl .row:odd').addClass("alt");
        var pathArray = location.search.split( '=' );
        var letter = "";
            for ( i = 1; i < pathArray.length; i++ ) {
                 letter += "";
                 letter += pathArray[i];
            }
        jQuery(".glossary #NavigationButtons ul li:contains('" + letter + "')").addClass("on");    
        jQuery(".glossary dl").before("<h3>" + letter + "</h3>");
}

function refineDropdown() {
    jQuery("#RefineWidget599, #RefineWidget614, #RefineWidget3727").appendTo(".content-right .dropdownCountry, .content-right .eventsLanding .dropdown");
    jQuery("#RefineWidget1487, #RefineWidget615").appendTo(".content-right .dropdownLang");
    jQuery(".content-right .dropdown .refinewidget").prepend('<a href="#" onclick="return false;"><strong>Choose</strong></a>');
    jQuery("#wrapper #page-content .container.downloads .refinewidget ol.widgetRefineLevel1").append('<li><a href="/downloads"><span class="RefineWidgetLinkText">See all</span></a></li>');
}

function refineTags() {
    jQuery('.subItemTaxonAboveHeading, .mainItemTaxonAboveHeading').each(function() {
        jQuery(this).appendTo(jQuery(this).parents(".widget dt")); 
    });
}
function refineTitle() {
    var selectedCountry = jQuery('.dropdownCountry .RefineSelected').text();
    var selectedLanguage = jQuery('.dropdownLang .RefineSelected').text();
    if(selectedCountry){
      jQuery('.dropdownCountry p a strong').text(selectedCountry);
    }
    if(selectedLanguage){
      jQuery('.dropdownLang p a strong').text(selectedLanguage);
    }
}

function refineDropdownNews() {
    jQuery("#RefineWidget5761").appendTo(".content-right .dropdownCountry");
    jQuery("#RefineWidget5762").appendTo(".content-right .dropdownLang");
    jQuery(".content-right .dropdown .refinewidget").prepend('<p><a href="#" onclick="return false;"><strong>Choose</strong></a></p>');
    jQuery("#wrapper #page-content .container .refineBox.newsRefine .refinewidget ol.widgetRefineLevel1").append('<li><a href="/news"><span class="RefineWidgetLinkText">See all</span></a></li>');

}

//IE8 login button fix. Press enter key to submit
function loginFix() {
    jQuery('#UserNameText, #PasswordText').focus(function () {
        jQuery(this).addClass('focused');
    }).blur(function(){
        jQuery(this).removeClass('focused');
    });
    jQuery("form").keypress(function(event) {
        if (event.which == 13) {
	    //event.preventDefault(); //disabled, preventing Page Ratings on keypress
            if (jQuery("#UserNameText, #PasswordText").hasClass('focused')) {
	        jQuery('#LoginButton').trigger('click');
	    }      
        }
    });
}

jQuery(document).ready(function() {

jQuery('#RegistrationMainContent .clsFormRow input').blur(function() {
    if (jQuery(this).val() == "") {
        jQuery(this).next('span').css('display','block');
        jQuery(this).css('border-color','#E15426');
    }
    else {
        jQuery(this).css('border-color','#1D779F');
    }
});

var currentRegion = regionController.getUserSiteRegion();
var setRegion = jQuery('#cboRegion option:selected');
if (currentRegion != "") {
    jQuery('.regionWrap').parent().prev().children().html(currentRegion);
    if (jQuery(setRegion).text() != currentRegion) {
    	jQuery(setRegion).removeAttr('selected');
    	jQuery('#cboRegion option:contains(' + currentRegion + ')').attr('selected', 'selected');
    }
}
else {
    jQuery('.regionWrap').parent().prev().children().html('English');
    jQuery('#cboRegion option:contains(English)').attr('selected', 'selected');
}

var currentURL = document.location;
jQuery('#share-facebook').attr('href', 'http://api.addthis.com/oexchange/0.8/forward/facebook/offer?url='+currentURL+'&pubid=ra-5199b119132a2283');
jQuery('#share-twitter').attr('href', 'http://api.addthis.com/oexchange/0.8/forward/twitter/offer?url='+currentURL+'&pubid=ra-5199b119132a2283');

});

//Social logging functions
function LogUserSocialActivity2(_sourceURL, _sourceTitle, _activity) {
    var serviceURL = '/WebServices/LoggingServices.asmx/LogUserSocialActivity';
    var getOrPost = 'POST';
    var resultData;
    
    jQuery.ajax({
        cache: false,
        url: serviceURL,
        type: getOrPost,
        async: false,
        dataType: "json",
        data: '{ "sourceURL": "' + _sourceURL + '", "sourceTitle": "' + _sourceTitle + '", "activity": "' + _activity + '" }',
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            if (result && result.d && result.d.IsSuccessful) {
                var data = result.d.Data;
                resultData = data;
            }
            else {
                alert('An error occured while contacting the server. - 2');
            }
        },
        error: function (msg) {
            alert(msg);
        }
    });
}

function LogUserSocialActivity(_activity) {
    LogUserSocialActivity2(document.URL, document.title, _activity);
}

function LogFacebookShareActivity() {
    LogUserSocialActivity2(document.URL, document.title, "Facebook Share");
}

function LogTwitterShareActivity() {
    LogUserSocialActivity2(document.URL, document.title, "Twitter Share");
}

// add to study guide
function addToSIAFavourites(ItemID, ItemTypeID) {
 jQuery.ajax({
        type: "GET",
        url: "/MyAccount/SIAAddToFavouritesHandler.ashx",
        data: { itemID: ItemID, typeID: ItemTypeID },
        cache: false,
        dataType: "json",
        success: function (result) {
            setAddToStudyGuideStyle(result.AddToFavInfo);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Error: " + XMLHttpRequest.responseText);
        }
    });
}

function setAddToStudyGuideStyle(addToFavInfo) {
    if (addToFavInfo == "Error") {
        alert('An error has occured while adding this page to your study guide.');
        return;
    }
    if (addToFavInfo != "False") {
        var addToFav = jQuery('.SIAAddToFavouritesContainer');
        if (addToFav != null) {
            addToFav.addClass("SIAAddedToFav");
        }
        alert('This page has been added to your study guide.');
    }
    else {
        alert('This page already exists in your study guide.');
    }
}

function GetArticleContent(articleID) {
    jQuery.ajax({
        type: "POST",
        url: "/SIAGetArticleContent.aspx",
        data: { articleID: articleID },
        cache: false,
        dataType: "text",
        success: function (result) {
            jQuery('.sia-gridview').hide();
            jQuery('.sia-listview').hide();
            jQuery('#SIAArticleContent').html(result);
            jQuery('#SIAArticleContent').show();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Error: " + XMLHttpRequest.responseText);
        }
    });
}

function ArticleClose() {
    var displayType = jQuery('.sia-hd-display-type').val();  //0 - GridView 1 - ListView
    jQuery('#SIAArticleContent').hide();
    if (displayType == "0") {
        jQuery('.sia-listview').hide();
        jQuery('.sia-gridview').show();        
    }
    else {
        jQuery('.sia-gridview').hide();
        jQuery('.sia-listview').show();
    }
    return false;
}

function newsRotate() {
    jQuery('.field-type-image .field-item').cycle({ 
        fx: 'fade', 
        speed: 1200,
        timeout: 4000
    });
}

function responsiveTable() {
        var newWidth = $(window).width();
        if (newWidth <= "960" && jQuery('.table-container').length < 1) {
            jQuery('.content-area table').wrap('<div class="table-container"></div>');
            jQuery('.module-area table').wrap('<div class="table-container"></div>');
        }
}

//Events Landing. Populating events table AND filter dropdown
function eventsLanding() {
     function showError(msg) {
       //No events, hide table, show error text
       $('#eventsTable_wrapper').hide();
       $('p.eventsError').show();
     }
		 function showResults(results) {
			var eventStartDate, eventEndDate, eventDates, eventStartShort, eventStartDisp, eventStartFull, eventEndFull, taxMain, taxArray, eventImage;
			var countNum = "";
			var fullTaxArray = [];
			var taxArrayUnique = [];
			var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ]; //Define short hand months
			var alphabet = [ "A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L" ];
			var regionUK = [ "England", "Isle of Man", "Northern Ireland", "Scotland", "Wales", "Guernsey","Jersey", "UK" ];
			var regionMiddleEast = [ "Bahrain", "GazaStrip and West Bank", "Iran", "Israel", "Jordan", "Kuwait","Lebanon", "Oman", "Qatar", "Saudi Arabia", "Syria", "Turkey", "United Arab Emirates", "Yemen" ];
			var setRegionName = regionController.getUserSiteRegion();
			var thisRegion = "false";
            result = results;

			for (var h=0; h < result.length; h++) {
//Get event taxonomy list. Split multiple list into array. Strip html from list so left with just taxonmony word string
			    taxMain = result[h].TaxonomyTagAboveHeading;
			    taxArray = taxMain.split("|");
				for (var j = 0; j < taxArray.length; j++) {
				  taxArray[j] = $.trim(taxArray[j].replace(/(<([^>]+)>)/ig, ""));
				  if($.inArray(taxArray[j], regionUK) > -1){
			            taxArray[j] = "United Kingdom";				
			      }
				  if($.inArray(taxArray[j], regionMiddleEast) > -1){
			            taxArray[j] = "Middle East";				
			      }				  
				}
				
//Then add the taxonomy of this event, to an overall list, delete repeated countries, so as to populate the filter dropdown with unique countries
			    fullTaxArray = fullTaxArray.concat(taxArray);				
				$.each(fullTaxArray, function(i, el){
					if($.inArray(el, taxArrayUnique) === -1) taxArrayUnique.push(el);
				});
			 
			}

			if($.inArray(setRegionName, fullTaxArray) > -1){
			   thisRegion = "true";				
			}

//For each event...
            for (i=0; i < result.length; i++) {
			    
				//Get event taxonomy list. Split multiple list into array. Strip html from list so left with just taxonmony word string
			    taxMain = result[i].TaxonomyTagAboveHeading;
			    taxArray = taxMain.split("|");
				for (j = 0; j < taxArray.length; j++) {
				  taxArray[j] = $.trim(taxArray[j].replace(/(<([^>]+)>)/ig, ""));
				   if($.inArray(taxArray[j], regionUK) > -1){
			            taxArray[j] = "United Kingdom";				
			       }
				   if($.inArray(taxArray[j], regionMiddleEast) > -1){
			            taxArray[j] = "Middle East";				
			       }			  
				}
				
//Then add the taxonomy of this event, to an overall list, delete repeated countries, so as to populate the filter dropdown with unique countries
			    fullTaxArray = fullTaxArray.concat(taxArray);				
				$.each(fullTaxArray, function(i, el){
					if($.inArray(el, taxArrayUnique) === -1) taxArrayUnique.push(el);
				});
				
//Get event image. If event image is blank, add default image
			    eventImage = '<a href="/'+result[i].UserFriendlyUrl+'"><img src="/Images/'+result[i].WidgetThumbnailUrl+'" alt="'+result[i].Heading+'" /></a>';
				if(result[i].WidgetThumbnailUrl == ""){
				  eventImage = '<a href="/'+result[i].UserFriendlyUrl+'"><img src="/Images/UserUploadedImages/11/logo-news-rss-import.jpg" alt="'+result[i].Heading+'"></a>';
				}
			
		
//Each event date needs to be formatted to particular style. Full system UTC datetime is returned, so alot of string manipulation needed
				eventStartDate = moment(result[i].StartDate).utcOffset(moment.parseZone(result[i].StartDate).utcOffset());//convert the local time back to UTC
				eventEndDate = moment(result[i].EndDate).utcOffset(moment.parseZone(result[i].EndDate).utcOffset());				
				eventStartShort = eventStartDate._i.getDate();//-_d will contain the sydney time zone date
				if(eventStartDate._i.getMonth() == eventEndDate._i.getMonth()){ //If start or end are same month, only display Month once
				 eventStartDisp = eventStartDate._i.getDate() 
				} else {
				 eventStartDisp = eventStartDate._i.getDate() + ' ' + monthNames[eventStartDate._i.getMonth()];
				}
				eventStartFull = eventStartDate._i.getDate() + ' ' + monthNames[eventStartDate._i.getMonth()];
				eventEndFull = eventEndDate._i.getDate() + ' ' + monthNames[eventEndDate._i.getMonth()];			
				if(eventStartFull == eventEndFull){ //If start or end are same date, only display that single day
					   eventDates = eventStartDisp + ' ' + monthNames[eventEndDate._i.getMonth()] + ' ' + eventEndDate._i.getFullYear();
				} else {
					   eventDates = eventStartDisp + ' - ' + eventEndFull + ' ' + eventEndDate._i.getFullYear();		 
				}
//Hack to fix date sort order
countNum = i;				
if (i > 9 && i < 20){
countNum = 'a' + i;
} else if(i > 20 && i < 30){
countNum = 'b' + i;
} else if(i > 30 && i < 40){
countNum = 'c' + i;
} else if(i > 40 && i < 50){
countNum = 'd' + i;
} else if(i > 50 && i < 60){
countNum = 'e' + i;
} else if(i > 60 && i < 70){
countNum = 'f' + i;
}				

if(thisRegion == "true"){
//Using jQuery table plugin to populate table, can then sort each column alphabetically by the column headers.
if($.inArray(setRegionName, taxArray) > -1){
				 $('#eventsTable').dataTable().fnAddData( [
		             eventImage,
		             '<a href="/EventViewTrainingDetails.aspx?Bck=Y&EventID='+ result[i].ArticleId +'&DisplayType=C">'+result[i].Heading+'</a><span class="hiddenTitle">Event Name</span>',
		             result[i].EventLocationSuburb + '<span class="hiddenTitle">City</span>',
		             result[i].EventLocationCountry + '<span class="hiddenTitle">Country</span>',
				'<span style="display: none;">'+ countNum +'</span><span class="hiddenTitle">Date</span>' + eventDates] );
			  
}
} else {
$('#eventsTable').dataTable().fnAddData( [
		             eventImage,
		             '<a href="/EventViewTrainingDetails.aspx?Bck=Y&EventID='+ result[i].ArticleId +'&DisplayType=C">'+result[i].Heading+'</a><span class="hiddenTitle">Event Name</span>',
		             result[i].EventLocationSuburb + '<span class="hiddenTitle">City</span>',
		             result[i].EventLocationCountry + '<span class="hiddenTitle">Country</span>',
				'<span style="display: none;">'+ countNum +'</span><span class="hiddenTitle">Date</span>' + eventDates] );

}			}
             
//IE8 fix, as it does not support array filter function below 
			if (!Array.prototype.filter)
			{
			  Array.prototype.filter = function(fun /*, thisp*/)
			  {
				"use strict";

				if (this == null)
				  throw new TypeError();

				var t = Object(this);
				var len = t.length >>> 0;
				if (typeof fun != "function")
				  throw new TypeError();

				var res = [];
				var thisp = arguments[1];
				for (var i = 0; i < len; i++)
				{
				  if (i in t)
				  {
					var val = t[i]; // in case fun mutates this
					if (fun.call(thisp, val, i, t))
					  res.push(val);
				  }
				}

				return res;
			  };
			}
			
//List of unique taxonomies attached is then sorted alphabetically, and then appended to the filter list
			taxArrayUnique = taxArrayUnique.filter(function(v){return v!==''});
			taxArrayUnique.sort();		
			for (var k = 0; k < taxArrayUnique.length; k++) {
				  $('#newFilter').append('<li><a href="#" id="' + taxArrayUnique[k] + '">' + taxArrayUnique[k] + '</a></li>')			  
			}
        }
        fetchDynamicWidgetASMX('5998', showError, showResults, '1', '4042');

}




//Events Filter
//When link in filter list is clicked, the id/country is passed and only the events matching that taxonomy are populated
function eventsFilter(taxSelected) {
     var taxNew = taxSelected;
     function showError(msg) {}
     function showResults(results) {
        var eventStartDate, eventEndDate, eventDates, eventStartShort, eventStartDisp, eventStartFull, eventEndFull, taxMain, taxArray, eventImage;
        var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
		var regionUK = [ "England", "Isle of Man", "Northern Ireland", "Scotland", "Wales", "Guernsey","Jersey", "UK" ];
		var regionMiddleEast = [ "Bahrain", "GazaStrip and West Bank", "Iran", "Israel", "Jordan", "Kuwait","Lebanon", "Oman", "Qatar", "Saudi Arabia", "Syria", "Turkey", "United Arab Emirates", "Yemen" ];

            result = results;
			
//Hide table body and show loading image
			$('#dynWidgetEvents table#eventsTable tbody').hide();
			$('#eventsTable').dataTable().fnClearTable();			
			$('#dynWidgetEvents p.loading').show();
			
            for (var i=0; i<result.length; i++) {
			
			    eventImage = '<a href="/'+result[i].UserFriendlyUrl+'"><img src="/Images/'+result[i].WidgetThumbnailUrl+'" alt="'+result[i].Heading+'" /></a>'
				if(result[i].WidgetThumbnailUrl == ""){
				  eventImage = '<a href="/'+result[i].UserFriendlyUrl+'"><img src="/Images/UserUploadedImages/11/logo-news-rss-import.jpg" alt="'+result[i].Heading+'"></a>';
				}
			    taxMain = result[i].TaxonomyTagAboveHeading;
			    taxArray = taxMain.split("|");
				for (var j = 0; j < taxArray.length; j++) {
				  taxArray[j] = $.trim(taxArray[j].replace(/(<([^>]+)>)/ig, ""));
				  if($.inArray(taxArray[j], regionUK) > -1){
			            taxArray[j] = "United Kingdom";				
			      }
				  if($.inArray(taxArray[j], regionMiddleEast) > -1){
			            taxArray[j] = "Middle East";				
			      }					  
				}

				eventStartDate = new Date(result[i].StartDate);
				eventEndDate = new Date(result[i].EndDate);
				eventStartShort = eventStartDate.getDate();
				if(eventStartDate.getMonth() == eventEndDate.getMonth()){ //If start or end are same month, only display Month once
				 eventStartDisp = eventStartDate.getDate() 
				} else {
				 eventStartDisp = eventStartDate.getDate() + ' ' + monthNames[eventStartDate.getMonth()];
				}
				eventStartFull = eventStartDate.getDate() + ' ' + monthNames[eventStartDate.getMonth()];
				eventEndFull = eventEndDate.getDate() + ' ' + monthNames[eventEndDate.getMonth()];			
				if(eventStartFull == eventEndFull){ //If start or end are same date, only display that single day
					   eventDates = eventStartDisp + ' ' + monthNames[eventEndDate.getMonth()] + ' ' + eventEndDate.getFullYear();
				} else {
					   eventDates = eventStartDisp + ' - ' + eventEndFull + ' ' + eventEndDate.getFullYear();		 
				}

				if($.inArray(taxNew, regionUK) > -1){
			            taxNew = "United Kingdom";				
			      }
				  if($.inArray(taxNew, regionMiddleEast) > -1){
			            taxNew = "Middle East";				
			      }	
//If the taxonomy of this event is equal to the taxonomy of the filter link	insert into table.
		    if($.inArray(taxNew, taxArray) > -1){

			  $('#eventsTable').dataTable().fnAddData( [
		             eventImage,
		             '<a href="/EventViewTrainingDetails.aspx?Bck=Y&EventID='+ result[i].ArticleId +'&DisplayType=C">'+result[i].Heading+'</a><span class="hiddenTitle">Event Name</span>',
		             result[i].EventLocationSuburb + '<span class="hiddenTitle">City</span>',
		             result[i].EventLocationCountry + '<span class="hiddenTitle">Country</span>',
				'<span style="display: none;">'+ i +'</span><span class="hiddenTitle">Date</span>' + eventDates] );
			  
}
			}
//Hide loading. Show body.
			setTimeout(function(){
			$('#dynWidgetEvents p.loading').hide();
			$('#dynWidgetEvents table#eventsTable tbody').show();
			}, 1000 ); 
			

        }
        fetchDynamicWidgetASMX('5998', showError, showResults, '1', '4042');
}


//Events Previous Landing. Populate passed events table.
function eventsPrevLanding() {
     function showError(msg) {}
     function showResults(results) {
var eventStartDate, eventEndDate, eventDates, eventStartShort, eventStartDisp, eventStartFull, eventEndFull, taxMain, taxArray, eventImage;
			var countNum = "";
			var fullTaxArray = [];
			var taxArrayUnique = [];
			var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ]; //Define short hand months
			var alphabet = [ "A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L" ];
			var setRegionName = regionController.getUserSiteRegion();
			var thisRegion = "false";
            result = results;

			for (var h=0; h < result.length; h++) {
//Get event taxonomy list. Split multiple list into array. Strip html from list so left with just taxonmony word string
			    taxMain = result[h].TaxonomyTagAboveHeading;
			    taxArray = taxMain.split("|");
				for (var j = 0; j < taxArray.length; j++) {
				  taxArray[j] = $.trim(taxArray[j].replace(/(<([^>]+)>)/ig, ""));
				  
				}
				
//Then add the taxonomy of this event, to an overall list, delete repeated countries, so as to populate the filter dropdown with unique countries
			    fullTaxArray = fullTaxArray.concat(taxArray);				
				$.each(fullTaxArray, function(i, el){
					if($.inArray(el, taxArrayUnique) === -1) taxArrayUnique.push(el);
				});
			 
			}
			
			if($.inArray(setRegionName, fullTaxArray) > -1){
			   thisRegion = "true";				
			}

//For each event...
            for (i=0; i < result.length; i++) {
			    
				//Get event taxonomy list. Split multiple list into array. Strip html from list so left with just taxonmony word string
			    taxMain = result[i].TaxonomyTagAboveHeading;
			    taxArray = taxMain.split("|");
				for (j = 0; j < taxArray.length; j++) {
				  taxArray[j] = $.trim(taxArray[j].replace(/(<([^>]+)>)/ig, ""));
				  
				}
				
//Then add the taxonomy of this event, to an overall list, delete repeated countries, so as to populate the filter dropdown with unique countries
			    fullTaxArray = fullTaxArray.concat(taxArray);				
				$.each(fullTaxArray, function(i, el){
					if($.inArray(el, taxArrayUnique) === -1) taxArrayUnique.push(el);
				});
				
//Get event image. If event image is blank, add default image
			    eventImage = '<a href="/'+result[i].UserFriendlyUrl+'"><img src="/Images/'+result[i].WidgetThumbnailUrl+'" alt="'+result[i].Heading+'" /></a>';
				if(result[i].WidgetThumbnailUrl == ""){
				  eventImage = '<a href="/'+result[i].UserFriendlyUrl+'"><img src="/Images/UserUploadedImages/11/logo-news-rss-import.jpg" alt="'+result[i].Heading+'"></a>';
				}
				
		
//Each event date needs to be formatted to particular style. Full system UTC datetime is returned, so alot of string manipulation needed
				eventStartDate = moment(result[i].StartDate).utcOffset(moment.parseZone(result[i].StartDate).utcOffset());//convert the local time back to UTC
				eventEndDate = moment(result[i].EndDate).utcOffset(moment.parseZone(result[i].EndDate).utcOffset());				
				eventStartShort = eventStartDate._i.getDate();//-_d will contain the sydney time zone date
				if(eventStartDate._i.getMonth() == eventEndDate._i.getMonth()){ //If start or end are same month, only display Month once
				 eventStartDisp = eventStartDate._i.getDate() 
				} else {
				 eventStartDisp = eventStartDate._i.getDate() + ' ' + monthNames[eventStartDate._i.getMonth()];
				}
				eventStartFull = eventStartDate._i.getDate() + ' ' + monthNames[eventStartDate._i.getMonth()];
				eventEndFull = eventEndDate._i.getDate() + ' ' + monthNames[eventEndDate._i.getMonth()];			
				if(eventStartFull == eventEndFull){ //If start or end are same date, only display that single day
					   eventDates = eventStartDisp + ' ' + monthNames[eventEndDate._i.getMonth()] + ' ' + eventEndDate._i.getFullYear();
				} else {
					   eventDates = eventStartDisp + ' - ' + eventEndFull + ' ' + eventEndDate._i.getFullYear();		 
				}
//Hack to fix date sort order
countNum = i;				
if (i > 9 && i < 20){
countNum = 'a' + i;
} else if(i > 20 && i < 30){
countNum = 'b' + i;
} else if(i > 30 && i < 40){
countNum = 'c' + i;
} else if(i > 40 && i < 50){
countNum = 'd' + i;
} else if(i > 50 && i < 60){
countNum = 'e' + i;
} else if(i > 60 && i < 70){
countNum = 'f' + i;
}				

if(thisRegion == "true"){
//Using jQuery table plugin to populate table, can then sort each column alphabetically by the column headers.
if($.inArray(setRegionName, taxArray) > -1){
				 $('#prevEventsTable').dataTable().fnAddData( [
		             eventImage,
		             '<a href="/EventViewTrainingDetails.aspx?Bck=Y&EventID='+ result[i].ArticleId +'&DisplayType=C">'+result[i].Heading+'</a><span class="hiddenTitle">Event Name</span>',
		             result[i].EventLocationSuburb + '<span class="hiddenTitle">City</span>',
		             result[i].EventLocationCountry + '<span class="hiddenTitle">Country</span>',
				'<span style="display: none;">'+ countNum +'</span><span class="hiddenTitle">Date</span>' + eventDates] );
			  
}
} else {
$('#prevEventsTable').dataTable().fnAddData( [
		             eventImage,
		             '<a href="/EventViewTrainingDetails.aspx?Bck=Y&EventID='+ result[i].ArticleId +'&DisplayType=C">'+result[i].Heading+'</a><span class="hiddenTitle">Event Name</span>',
		             result[i].EventLocationSuburb + '<span class="hiddenTitle">City</span>',
		             result[i].EventLocationCountry + '<span class="hiddenTitle">Country</span>',
				'<span style="display: none;">'+ countNum +'</span><span class="hiddenTitle">Date</span>' + eventDates] );

}			}
		
        }
        fetchDynamicWidgetASMX('6005', showError, showResults, '1', '4048');

}

 function addEventToCalendar(curEventID) {
        $.ajax({
            type: "GET",
            url: "/MyAccount/SIAAddEventToCalendarHandler.ashx",
            data: { eventID: curEventID},
            cache: false,
            dataType: "json",
            success: function (result) {
                showAddToEventOutcome(result.AddToCalInfo);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Error: " + XMLHttpRequest.responseText);
            }
        });
    }

    function showAddToEventOutcome(AddToCalInfo) {
        if (AddToCalInfo == "Error") {
            alert('An error has occured while adding this event to your calendar.');
            return;
        } else {
            alert('This event has been added to your calendar. Please remember to register for the event if you wish to attend.');
        }
    }