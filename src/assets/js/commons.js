export default {
  // 自定义事件戳转义格式
  myDate (value, type = 0) {
    var time = new Date(value * 1000)
    var year = time.getFullYear()
    var month = time.getMonth() + 1
    var date = time.getDate()
    var hour = time.getHours()
    var minute = time.getMinutes()
    var second = time.getSeconds()
    month = month < 10 ? '0' + month : month
    date = date < 10 ? '0' + date : date
    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second
    var arr = [
      year + '-' + month + '-' + date,
      year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second,
      year + '年' + month + '月' + date,
      year + '年' + month + '月' + date + ' ' + hour + ':' + minute + ':' + second,
      hour + ':' + minute + ':' + second,
      year + '年' + month + '月' + date + ' ' + hour + ':' + minute
    ]
    return arr[type]
  }
}
