// 禁止右键
document.addEventListener("contextmenu", function () {
  return false
})
document.oncontextmenu = function () {
  return false
}

// 禁止打开控制台与查看源代码
document.onkeydown = function (e) {
  // if (event.keyCode == 123) {
  //   return false;
  // }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false
  }
}