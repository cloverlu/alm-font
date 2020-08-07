export function px2rem(px) {
  const ratio = 375 / 10
  return px / ratio
}

export function realPx(px) {
  const maxWidth = window.innerWidth > 500 ? 500 : window.innerWidth
  return px * (maxWidth / 375)
}

export function addCss(href) {
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', href)
  document.getElementsByTagName('head')[0].appendChild(link)
}

export function removeCss(href) {
  const link = document.getElementsByTagName('link')
  for (var i = link.length; i >= 0; i--) {
    if (
      link[i] &&
      link[i].getAttribute('href') != null &&
      link[i].getAttribute('href').indexOf(href) !== -1
    ) {
      link[i].parentNode.removeChild(link[i])
    }
  }
}

export function removeAllCss() {
  removeCss(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
  removeCss(`${process.env.VUE_APP_RES_URL}/theme/theme_eye.css`)
  removeCss(`${process.env.VUE_APP_RES_URL}/theme/theme_gold.css`)
  removeCss(`${process.env.VUE_APP_RES_URL}/theme/theme_night.css`)
}

export function os() {
  const ua = navigator.userAgent
  const isWindowsPhone = /(?:Windows Phone)/.test(ua)
  const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone
  const isAndroid = /(?:Android)/.test(ua)
  const isFireFox = /(?:Firefox)/.test(ua)
  // isChrome = /(?:Chrome|CriOS)/.test(ua)
  const isTablet =
    /(?:iPad|PlayBook)/.test(ua) ||
    (isAndroid && !/(?:Mobile)/.test(ua)) ||
    (isFireFox && /(?:Tablet)/.test(ua))
  const isPhone = /(?:iPhone)/.test(ua) && !isTablet
  const isPc = !isPhone && !isAndroid && !isSymbian
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc,
  }
}

export const formatDate = (date, format) => {
  if (!date) return ''

  // format = format || "yyyy-MM-dd hh:mm:ss";
  format = format || 'yyyy-MM-dd'
  date = new Date(date)
  var map = {
    M: date.getMonth() + 1, // 月份
    d: date.getDate(), // 日
    h: date.getHours(), // 小时
    m: date.getMinutes(), // 分
    s: date.getSeconds(), // 秒
    q: Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  }

  format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
    var v = map[t]
    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v
        v = v.substr(v.length - 2)
      }
      return v
    } else if (t === 'y') {
      return (date.getFullYear() + '').substr(4 - all.length)
    }
    return all
  })
  return format
}

export function nowData() {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return year + '-' + month + '-' + day
}

export function formatDate2(secs, type = 0) {
  //type是可选参数，因为json中时间的格式是year-month-date,不能识别XX年XX月XX日
  var t = new Date(secs)
  var year = t.getFullYear()
  var month = t.getMonth() + 1
  if (month < 10) {
    month = '0' + month
  }
  var date = t.getDate()
  if (date < 10) {
    date = '0' + date
  }
  var hour = t.getHours()
  if (hour < 10) {
    hour = '0' + hour
  }
  var minute = t.getMinutes()
  if (minute < 10) {
    minute = '0' + minute
  }
  var second = t.getSeconds()
  if (second < 10) {
    second = '0' + second
  }
  if (type == 0) {
    return year + '年' + month + '月' + date + '日'
  } else {
    return year + '-' + month + '-' + date
  }
}

//数组去重
export function unique(arr, key) {
  var obj = {}
  return arr.filter(function(item) {
    return Object.prototype.hasOwnProperty.call(
      obj,
      typeof item[key] + item[key]
    )
      ? false
      : (obj[typeof item[key] + item[key]] = true)
  })
}

// 获取当前日期的去年的前一天
export function getLastYearYestdy(date) {
  var strYear = date.getFullYear() - 1
  var strDay = date.getDate()
  var strMonth = date.getMonth() + 1
  if (strMonth < 10) {
    strMonth = '0' + strMonth
  }
  if (strDay < 10) {
    strDay = '0' + strDay
  }
  const datastr = strYear + '-' + strMonth + '-' + strDay
  return datastr
}

// 接受app的路由
export function GetQueryValue(queryName) {
  var query = decodeURI(window.location.search.substring(1))
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] == queryName) {
      return pair[1]
    }
  }
}

// 判断是否为整数
export function isInteger(obj) {
  return typeof obj === 'number' && obj % 1 === 0
}
