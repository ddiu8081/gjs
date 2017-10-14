function getMessage(date) {
    if (date.length == 0) {
        date = getDay(0);
    }
    $.getJSON("api.php?date=" + date, function (data) {
        console.log('loggggggggg: ' + data.message_text);

        if (data.color.length != 0) {
            $("body").css("background-color", data.color);
        }

        if (data.date != 0) {
            $('#meta').text(data.date);

            console.log('today:' + getDay(0));
            console.log('meta:' + $('#meta').text());
            if (getDay(0) == $('#meta').text()) {
                $('#next').hide();
            } else {
                $('#next').show();
            }
        }

        if (data.message_text) {
            $('#message_text').show();
            $('#message_text').text(data.message_text);
        } else {
            $('#message_text').hide();
        }

        if (data.message_pic) {
            $('#message_pic').show();
            $('#message_pic').attr('src', data.message_pic);
        } else {
            $('#message_pic').hide();
        }

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
    });
}

var initPage = function (date) {
    getMessage(date);

    $('#prev').attr("href", '#!/' + getDay(-1));
    $('#next').attr("href", '#!/' + getDay(1));
}
