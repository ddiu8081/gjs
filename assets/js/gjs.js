var initPage = function (date) {
    $(".hide").hide("slow");

    if (date.length == 0) {
        date = getDay(0);
    }

    $("body").css("background-color", '#E16B8C');
    $('#message_text').hide("slow");
    $('#message_pic').hide("slow");
    $('#hide_div').hide("slow");
    $('#meta').text("不存在的");

    $.getJSON("api.php?f=getMessege&date=" + date, function (data) {
        console.log(data);
        $('#hide_div').show("slow");

        if (data.color.length != 0) {
            $("body").css("background-color", data.color);
        }

        if (data.date) {
            $('#meta').text(data.date);
        }

        if (data.prev) {
            $('#prev').show();
            $('#prev').attr("href", '#!/' + data.prev);
        }
        else {
            $('#prev').hide();
        }

        if (data.next) {
            $('#next').show();
            $('#next').attr("href", '#!/' + data.next);
        }
        else {
            $('#next').hide();
        }

        if (data.message_text) {
            $('#message_text').show("slow");
            $('#message_text').text(data.message_text);
        } else {
            $('#message_text').hide("slow");
        }

        if (data.message_pic) {
            $('#message_pic').show("slow");
            $('#message_pic').attr('src', data.message_pic);
        } else {
            $('#message_pic').hide("slow");
        }

        if (data.hidden_text) {
            $('#hidden_text').show("slow");
            $('#hidden_text').text(data.hidden_text);
        } else {
            $('#hidden_text').hide("slow");
        }

        if (data.hidden_pic) {
            $('#hidden_pic').show("slow");
            $('#hidden_pic').attr('src', data.hidden_pic);
        } else {
            $('#hidden_pic').hide("slow");
        }

        if (data.like == '0') {
            $('#like_icon').attr('class', 'fa fa-heart-o');
        } else {
            $('#like_icon').attr('class', 'fa fa-heart');
        }

    });
}
var likeMessege = function (date) {
    $.getJSON("api.php?f=like&date=" + date, function (data) {
        console.log(data);
        if (data.like == '0') {
            $('#like_icon').attr('class', 'fa fa-heart-o');
        } else {
            $('#like_icon').attr('class', 'fa fa-heart');
        }

    });
}
