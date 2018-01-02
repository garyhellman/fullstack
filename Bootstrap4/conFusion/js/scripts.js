window.jQuery(function () {
    // detect browser scroll bar width
    var scrollDiv = $('<div class="scrollbar-measure"></div>')
            .appendTo(document.body)[0],
        scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    $(document)
        .on('hidden.bs.modal', '.modal', function (evt) {
            // use margin-right 0 for IE8
            $(document.body).css('margin-right', '');
        })
        .on('show.bs.modal', '.modal', function () {
            // When modal is shown, scrollbar on body disappears.  In order not
            // to experience a "shifting" effect, replace the scrollbar width
            // with a right-margin on the body.
            if ($(window).height() < $(document).height()) {
                $(document.body).css('margin-right', scrollBarWidth + 'px');
            }
        });
});

$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    // $("#carousel-pause").click(function(){
    //     $("#mycarousel").carousel('pause');
    // });
    // $("#carousel-play").click(function(){
    //     $("#mycarousel").carousel('cycle');
    // });

    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');
        }
    });
});
