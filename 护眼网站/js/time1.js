$(function(){
     //   定时器:
  // 9-11上午好
  // 11-1做个护眼操让眼睛休息一会
  // 1-5下午好
  // 5-7做个护眼操让眼睛休息一会
  // 7-10晚上好
  // 10-6早睡早起，保护眼睛
  var st = document.querySelector(".hello h2");
  var nt = document.querySelector(".hello p");
  function showTime() {
    dt = new Date();
    var hour = extra(dt.getHours());
    var minute = extra(dt.getMinutes());
    var second = extra(dt.getSeconds());
    console.log(hour + ":" + minute + ":" + second);
    nt.innerHTML = hour + ":" + minute + ":" + second;
  }
  function extra(x) {
    if (x < 10) {
      return "0" + x;
    }
    else {
      return x;
    }
  }
  showTime();
  setInterval("showTime()", 1000);
  var hour = new Date().getHours();
  if (hour > 5 && hour <= 9)
    st.innerHTML = "早上好";
  else if (hour > 9 && hour <= 11) {
    st.innerHTML = "上午好";
  } else if (hour > 11 && hour <= 13) {
    st.innerHTML = "做个护眼操让眼睛休息一会";
  } else if (hour > 13 && hour <= 17) {
    st.innerHTML = "下午好";
  } else if (hour > 13 && hour <= 19) {
    st.innerHTML = "做个护眼操让眼睛休息一会";
  } else if (hour > 19 && hour <= 22) {
    st.innerHTML = "晚上好";
  } else if (hour > 22 && hour <= 24) {
    st.innerHTML = "早睡早起，保护眼睛";
  } else if (hour > 0 && hour <= 5) {
    st.innerHTML = "早睡早起，保护眼睛";
  }

});