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

        if (data.color.length != 0) {
            $("body").css("background-color", data.color);
        }

        if (data.date) {
            $('#meta').text(data.date);
        }

        if (data.prev) {
            $('#prev').show();
            $('#prev').attr("href", '#!/' + data.prev);
        } else {
            $('#prev').hide();
            $('')
        }

        if (data.next) {
            $('#next').show();
            $('#next').attr("href", '#!/' + data.next);
        } else {
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

        if (data.video_aid) {
            $('#video').attr('src', "//www.bilibili.com/blackboard/player.html?aid=" + data.video_aid);
            $('#video').show("slow");
        } else {
            $('#video').hide("slow");
        }

        if (data.hidden_text || data.hidden_pic || data.hidden_a_href) {
            console.log('show!');
            $('#hide_div').show("slow");
            if (data.hidden_text) {
                $('#hidden_text').show();
                $('#hidden_text').text(data.hidden_text);
            } else {
                $('#hidden_text').hide();
            }

            if (data.hidden_pic) {
                $('#hidden_pic').show();
                $('#hidden_pic').attr('src', data.hidden_pic);
            } else {
                $('#hidden_pic').hide();
            }

            if (data.hidden_a_href) {
                $('#hidden_a').show();
                $('#hidden_a').text(data.hidden_a_text);
                $('#hidden_a').attr('href', data.hidden_a_href);
            } else {
                $('#hidden_a').hide();
            }
        }
        else {
            $('#hidden_text').hide();
            $('#hidden_pic').hide();
            $('#hidden_a').hide();
            $('#hide_div').hide();
            console.log('hide!');
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

var playMusic = function (musicID) {
    var music = new Audio();
}

