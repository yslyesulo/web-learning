window.onload = function () {

  const btn = document.getElementById('btn')
  btn.onclick = function () {
    // 点按钮后弹出一个文字，你可以尝试改变文字内容
    alert("你好啊，欢迎来到百度前端技术学院");
  }
  
  document.getElementById("commitForm").onclick = function() {
    let firstName = document.getElementById("firstName").value
    let middleName = document.getElementById("middleName").value
    let lastName = document.getElementById("lastName").value
    
    let name = []
    name.push(firstName)
    name.push(middleName)
    name.push(middleName)
    alert(`name is ${name.join(' ')}`)
  }
}
