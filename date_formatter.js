const verboseDate = (dateTime) => {
    const now = new Date();
    const justNow = now.setMinutes(now.getMinutes()-1);
    //DateTime localDateTime = dateTime.toLocal();

    if (dateTime > justNow) {
      return '刚刚';
    }

    const roughTimeString = (dateTime.getMinutes()<10)
      ? dateTime.getHours().toString() + ':0' + dateTime.getMinutes()
      : dateTime.getHours().toString() + ':' + dateTime.getMinutes();

    if (dateTime.getDate() == now.getDate() &&
        dateTime.getMonth() == now.getMonth() &&
        dateTime.getFullYear() == now.getFullYear()) {
      return roughTimeString;
    }

    const yesterday = now.setDate(now.getDate()-1);

    if (dateTime.getDate() == yesterday.getDate() &&
        dateTime.getMonth() == yesterday.getMonth() &&
        dateTime.getFullYear() == yesterday.getFullYear()) {
      return '昨天 ' + roughTimeString;
    }

    if (now.getDate()-dateTime.getDate() < 4) {
      return '${weekdays[dateTime.getDay()]} ' + roughTimeString;
    }

    if ([11, 0, 1].includes(now.getMonth())) {
      const month = (dateTime.getMonth()<9) ? '0' + (dateTime.getMonth()+1).toString() : (dateTime.getMonth()+1).toString();
      const date = (dateTime.getDate()<10) ? '0' + dateTime.getDate().toString() : dateTime.getDate().toString();

      return dateTime.getFullYear().toString() + '-' + month + '-' + date + ' ' + roughTimeString;
    } else {
      return month + '-' + date + ' ' + roughTimeString;
    }
  }

  const weekdays  = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

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

