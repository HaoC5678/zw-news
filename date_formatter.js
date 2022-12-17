const verboseDate = (dateTime) => {
    DateTime now = DateTime.now();
    DateTime justNow = now.subtract(Duration(minutes: 1));
    DateTime localDateTime = dateTime.toLocal();

    if (!localDateTime.difference(justNow).isNegative) {
      return '刚刚';
    }

    String roughTimeString = DateFormat('HH:mm').format(dateTime);

    if (localDateTime.day == now.day &&
        localDateTime.month == now.month &&
        localDateTime.year == now.year) {
      return roughTimeString;
    }

    DateTime yesterday = now.subtract(Duration(days: 1));

    if (localDateTime.day == yesterday.day &&
        localDateTime.month == yesterday.month &&
        localDateTime.year == yesterday.year) {
      return '昨天 ' + roughTimeString;
    }

    if (now.difference(localDateTime).inDays < 4) {
      String weekday = mWeekdays(DateFormat('EEE').format(localDateTime));

      return '$weekday ' + roughTimeString;
    }

    if ([12, 1, 2].contains(now.month)) {
      return '${DateFormat('yyyy-MM-dd').format(dateTime)} ' + roughTimeString;
    } else {
      return '${DateFormat('MM-dd').format(dateTime)} ' + roughTimeString;
    }
  }

  String mWeekdays(String wdEn) {
    const wds = [
      'Sun',
      '星期日',
      'Mon',
      '星期一',
      'Tue',
      '星期二',
      'Wed',
      '星期三',
      'Thu',
      '星期四',
      'Fri',
      '星期五',
      'Sat',
      '星期六'
    ];
    return wds[wds.indexOf(wdEn) + 1];
  }

  /*String sunTime(String st) {
    return ampm(st.substring(st.length-2)) + ' ' + st.substring(0,st.length-2).trim();
  }

  String ampm(String apm) {
    if (apm == 'AM') {
      return '上午';
    } else {
      return '下午';
    }
  }*/

