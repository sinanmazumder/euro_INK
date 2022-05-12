// nav fixed 
jQuery("document").ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 4) {
            jQuery('.main-menu').addClass('fixed-top');
        } else {
            jQuery('.main-menu').removeClass('fixed-top');
        }
    });
});

// preloader 
jQuery(window).on('load', function () {
    jQuery('.preloader').fadeOut();
    jQuery('.preloader').delay(1350).fadeOut('slow');
    jQuery('body').delay(1350).css({
        'overflow': 'visible'
    });
})

jQuery(document).ready(function () {
    jQuery("#fileuploader").uploadFile({
        url: "http://hayageek.com/examples/jquery/ajax-multiple-file-upload/upload.php",
        fileName: "myfile"
    });
    jQuery(".discount-code #accordion").accordion({
        classes: {
            "ui-accordion-header": "ui-accordion-custom-header",
            "ui-accordion-header-active": "ui-accordion-custom-header-active",
            "ui-accordion-header-collapsed": "ui-accordion-custom-header-collapsed",
            "ui-accordion-content": "ui-accordion-custom-content",
            "ui-accordion-header-icon": "ui-accordion-custom-header-icon"
        },
        animate: 200,
        active: false,
        collapsible: true,
        heightStyle: "content",
        icons: {
            header: "fas fa-chevron-down",
            activeHeader: "fas fa-chevron-up"
        }
    });
    jQuery(".check-out #accordion").accordion({
        heightStyle: "content",
        icons: {
            header: "fas fa-chevron-down",
            activeHeader: "fas fa-chevron-up"
        }
    });
});

/* video popup */
jQuery(function () {
    jQuery("#video").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
            rel: 0,
            end: 120
        }
    });
});



var numberSpinner = (function () {
    jQuery('.number-spinner>.ns-btn>a').click(function () {
        var btn = jQuery(this),
            oldValue = btn.closest('.number-spinner').find('input').val().trim(),
            newVal = 0;

        if (btn.attr('data-dir') === 'up') {
            newVal = parseInt(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        btn.closest('.number-spinner').find('input').val(newVal);
    });
    jQuery('.number-spinner>input').keypress(function (evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    });
})();


  $( function() {
    $( ".upload-box #tabs" ).tabs();
  } );
