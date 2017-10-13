var initPage = function (yyyy, mm, dd) {
    console.log('setDate: ' + yyyy + '-' + mm + '-' + dd)
    $('#meta').text(yyyy + '-' + mm + '-' + dd);

    if (getDay(0) == $('#meta').text()) {
        $('#next').hide();
    } else {
        $('#next').show();
    }

    $('#prev').attr("href", '#!/' + getDay(-1));
    $('#next').attr("href", '#!/' + getDay(1));
}
