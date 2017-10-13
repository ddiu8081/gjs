var getDay = function (dayCount) {
    // 获取当前日期
    var date = new Date();

    date.setDate(date.getDate()+dayCount);//获取DayCount天后的日期

    var newMonth = date.getMonth() + 1;
    var newDate = date.getDate();

    var seperator = "-";

    // 对月份进行处理，1-9月在前面添加一个“0”
    if (newMonth >= 1 && newMonth <= 9) {
        newMonth = "0" + newMonth;
    }

    // 对月份进行处理，1-9号在前面添加一个“0”
    if (newDate >= 0 && newDate <= 9) {
        newDate = "0" + newDate;
    }

    // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
    var thisDate = date.getFullYear() + seperator + newMonth + seperator + newDate;

    return thisDate;
}
