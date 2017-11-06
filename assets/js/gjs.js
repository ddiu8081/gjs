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
    var musicUrl = 'http://music.163.com/api/132434.mp3';
}

var c171019 = function () {
    /* 鼠标点击特效 */
    $("body").click(function (e) {
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善", "富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善", "小葛最萌了= v =");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 99999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#fff",
            "font-size": "2rem"
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function () {
                $i.remove();
            });
    });
}

var c171031 = function () {
    /* 万圣节特效 */
    $(".hidden").unbind();
    $(".hidden").click(function() {
        $(".hide").show("fast");
        setTimeout(function() {
            $(".hide").hide("fast");
        }, 600);

    });
    $("body").css(
        "background","url(./001.gif)"
    );
}

var c171717 = function () {
    $("#music").click(function() {

    });
}
