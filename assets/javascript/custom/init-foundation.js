jQuery(document).foundation();

var	isMobile = (/iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(navigator.userAgent.toLowerCase())),
	isTablet = (/ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase())),
    yt_video1 = "XAbckYbm2qw",
    yt_video2 = "XuH1FXNGHyM",
    
    site = {

	init : function() {
        $('#participe').click(function(){
            $('html, body').animate( { scrollTop: $('#don').offset().top}, 300 );
        });
        $('#go-role').click(function(){
            $('html, body').animate( { scrollTop: $('#role').offset().top}, 300 );
        });
        $('#go-temoins').click(function(){
            $('html, body').animate( { scrollTop: $('#temoins').offset().top}, 300 );
        });
        $('#go-video').click(function(){
            $('html, body').animate( { scrollTop: $('#video').offset().top}, 300 );
        });
        $('#go-ambassadeur').click(function(){
            $('html, body').animate( { scrollTop: $('#ambassadeur').offset().top}, 300 );
        });
        $('.more').click(function(){
            $(this).siblings('.full').show();
            $(this).hide();
        });
        
        //
        $(window).resize( site.resize );
        site.resize();
        site.animate.init();
        //
        $('#seeIntro').delay(1200).queue(function(){$(this).addClass('done')});
        //VIDEO
            $('#seeIntro').click(function(){
                BV_i    = $('#video-intro').data('vide');
                BV      = BV_i.getVideoObject();
                BV.pause();
                site.video.show(yt_video1);
            });
            $('#seeMinute').click(function(){
                site.video.show(yt_video2);
            });
            $('#yt-close, #yt--close-btn').click( site.video.hide );
//            site.video.show(yt_video1);
	},
        
    video : {
        show : function(id) {
            $('body').addClass('has-popin');
            $('#popin').show().fadeTo(200, 1);
            $('#yt').attr('src', 'https://www.youtube.com/embed/'+id+'?autoplay=true');
        },
        hide : function() {
            $('#popin').fadeTo(300, 0, site.video.remove);
        },
        remove : function() {
            $('#yt').attr('src', '');
            $('#popin').css('opacity',0).hide();
            $('body').removeClass('has-popin');
        }
    },
    
    resize : function() {
        if (isMobile) return;
        $('#intro').css('height', $(window).height());
    },

    animate : {
        init : function() {
            elToAnimate = $('.animate');
            $window = $(window);
            $window.on('scroll resize', site.animate.update);
            $window.trigger('scroll');
        },

        update : function() {
            var windowHeight            = $window.height(),
                windowTopPosition       = $window.scrollTop(),
                windowBottomPosition    = (windowTopPosition + windowHeight),
                activeDelay             = 0.25;

            $.each(elToAnimate, function() {
                var el                  = $(this),
                    elHeight            = el.outerHeight(),
                    elTopPosition       = el.offset().top,
                    elBottomPosition    = (elTopPosition + elHeight);
                    //if ((elBottomPosition >= windowTopPosition) &&
                if ((elTopPosition <= windowBottomPosition-windowHeight*activeDelay)) el.addClass('done');
//                else el.removeClass('done');
                
            });
        }
    },



};

$(function() {
	site.init();
});
