// from fullstack course forum
window.jQuery(function () {
    // detect browser scroll bar width
    var scrollDiv = $('<div class="scrollbar-measure"></div>')
            .appendTo(document.body)[0],
        scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    $(document)
        .on('hidden.bs.modal', '.modal', function (evt) {
            console.log("on hidden.bs.modal");
            // use margin-right 0 for IE8
            $(document.body).css('margin-right', '');
        })
        .on('show.bs.modal', '.modal', function () {
            console.log("on show.bs.modal");
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

    // not working ... yet
    $(".close").click(function(){
        console.log(" class close clicked");
        // $('#reserveModal').modal('toggle');
        $(this).modal("hide");
    });

    $("#reserve-button").click(function(){
        console.log("clicked");
        // $('#reserveModal').modal('toggle');
        $('#reserveModal').modal({
            keyboard: true,
            backdrop: 'static',
            focus: true,
            show: true
        });
    });

    $('#reserveModal').on('hidden.bs.modal', function (e) {
        console.log("on hidden");
    })

    $("#login-button").click(function(){
        console.log(" login-button clicked");
//        $('#loginModal').modal('toggle');
        $('#loginModal').modal({
            keyboard: true,
            backdrop: 'static',
            focus: true,
            show: true
        });

    });

    $("#resvClose-button").click(function(){
        console.log(" resvClose-button clicked");
        $('#reserveModal').modal('toggle');
    });

    $("#resv-cancel-button").click(function(){
        console.log(" resv-cancel-button clicked");
        $('#reserveModal').modal('toggle');
    });

    $("#loginClose-button").click(function(){
        console.log(" loginClose-button clicked");
        $('#loginModal').modal('toggle');
    });

    $("#login-cancel-button").click(function(){
        console.log(" login-cancel-button clicked");
        $('#loginModal').modal('toggle');
    });


    // please do not grade
    // just for fun - https://stackoverflow.com/questions/1960240/jquery-ajax-submit-form and others
    $('#resvForm').on('submit', function(ev) {
        console.log(" submit-button clicked");
        $('#reserveModal').modal('toggle');
        // $('#reserveModal').modal({
        //     show: false
        // });
        var data = $(this).serialize();
        json_data = JSON.stringify(data);
        //
        console.log(json_data);
//        $("#results").text(json_data);
//        $(".modal-body").text(json_data);
        // $("#results").text(data);
        // this prevents the submit
        // if commented out will redirect with query parameters
        ev.preventDefault();
    });

    $('#loginForm').on('submit', function(ev) {
        console.log(" login submit-button clicked");
        $('#loginModal').modal('toggle');
        // $('#reserveModal').modal({
        //     show: false
        // });
        var login_data = $(this).serialize();
        var json_login = JSON.stringify(login_data);
        console.log(json_login);
//        $("#results").text(json_data);
//        $(".modal-body").text(json_data);
        // $("#results").text(data);
        // this prevents the submit
        // if commented out will redirect with query parameters
//        ev.preventDefault();
    });

});
