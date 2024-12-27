 function obj_size(obj) {
    var size = 0,key;
    for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) size++;
    }
    return size;
  };


  function timeConverter(UNIX_timestamp,format){
  if(!format) format='yyyy-MM-dd';
    var a = new Date(UNIX_timestamp.replace(/-/g, "/").toString());

  var dict = {
        "yyyy": a.getFullYear(),
        "Y": a.getFullYear(),
        "M": a.getMonth() + 1,
        "D": a.getDate(),
        "d": a.getDate(),
        "H": a.getHours(),
        "m": a.getMinutes(),
        "s": a.getSeconds(),
        "MM": ("" + (a.getMonth() + 101)).substr(1),
        "dd": ("" + (a.getDate() + 100)).substr(1),
        "HH": ("" + (a.getHours() + 100)).substr(1),
        "mm": ("" + (a.getMinutes() + 100)).substr(1),
        "ss": ("" + (a.getSeconds() + 100)).substr(1)
    };
  return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {
        return dict[arguments[0]];
    });

}

  function convertDateFormat(dateTime,format) {
  if(!format) format='Y-M-D';
  if (!dateTime) return '';
  const date = new Date(dateTime);
  if (isNaN(date.getTime())) {
    return dateTime;
  }

  const dict = {
    'Y': date.getFullYear(),
    'M': String(date.getMonth() + 1).padStart(2, '0'),
    'D': String(date.getDate()).padStart(2, '0'),
    'H': String(date.getHours()).padStart(2, '0'),
    'i': String(date.getMinutes()).padStart(2, '0'),
    's': String(date.getSeconds()).padStart(2, '0')
  };

  return format.replace(/(Y|M|D|H|i|s)/g, (match) => dict[match]);



}


 function now_time(d){
  Number.prototype.padLeft = function(base,chr){
  var  len = (String(base || 10).length - String(this).length)+1;
  return len > 0? new Array(len).join(chr || '0')+this : this;
  }
  // eslint-disable-next-line no-redeclare
  var d = (d) ? d : new Date();
  let dformat = [ d.getFullYear(),(d.getMonth()+1).padLeft(),d.getDate().padLeft()].join('-')+' ' +[ d.getHours().padLeft(),d.getMinutes().padLeft(),d.getSeconds().padLeft()].join(':');
  return dformat;
}

//節流
 function throttle2(fn, delay = 500) {
  let timer = null;
  return (...args) => {
      if (timer) return;

      timer = setTimeout(() => {
      fn(...args);
      timer = null;
      }, delay);
  };
}

//防抖
 function debounce2(fn, delay = 500) {
  let timer;
  return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
      fn(...args);
      }, delay);
  };
}


//文字遮掩器
 function maskText(text, showStart = 2, showEnd = 2) {
  if (!text || typeof text !== 'string') {
    return '';
  }

  const textLength = text.length;
  const startText = text.slice(0, showStart);
  const endText = text.slice(-showEnd);
  if (textLength <= showStart + showEnd) {
    return text;
  }

  const maskedLength = textLength - (showStart + showEnd);
  const maskedText = '*'.repeat(maskedLength);

  return `${startText}${maskedText}${endText}`;
}

 function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
 function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
 function deleteCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


 function toggleclass(elem,className){
  let element=elem;
  if (!element.classList.contains(className)) {
    element.classList.add(className); // 添加 "min" 類別
  }else{
    element.classList.remove(className);
  }
}
 function switchClass(elems, { open = 'visible', close = 'invisible' }) {
  if (elems instanceof NodeList || elems instanceof HTMLCollection) {
    elems.forEach((element) => {
      if(close){
        close.split(' ').forEach(className => {
          element.classList.remove(className);
        });
      }
      setTimeout(() => {
        if (open){
          open.split(' ').forEach(className => {
            element.classList.add(className);
           });
        }
      }, 50);
    });
  } else {
    const element = document.querySelector(elems);
    if (element) {
      if(close) {
        close.split(' ').forEach(className => {
         
          element.classList.remove(className);
        });
      }
      setTimeout(() => {
        if (open){
          open.split(' ').forEach(className => {
            element.classList.add(className);
           });
        }
      }, 50);

    }
  }
}


//密碼規則
 function PasswordRule(str) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[a-zA-Z\d!@#$%]{6,15}$/;
  return pattern.test(str);
}

//檢查數字格式
 function checkInt(val){
  //isFinite 避免無窮
  return !isNaN(parseFloat(val)) && isFinite(val)
}