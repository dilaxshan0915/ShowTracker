//This Script is copied*/
var objPeople = [
  {usname: "user1" , pswd: "user1"},
  {usname: "user2" , pswd: "user2"},
  {usname: "user3" , pswd: "user3"},
  {usname: "user4" , pswd: "user4"},
  {usname: "user5" , pswd: "user5"}
]

function getInformation() {
  var username = document.getElementById('usname').value
  var password = document.getElementById('pswd').value

  for (var i = 0; i < objPeople.length; i++) {
  if(username == objPeople[i].usname){
    if (username == objPeople[i].usname && password == objPeople[i].pswd) {
      alert(username + " " + "Login Successful")
      window.open('index.html')
      return
    }

    else {
      alert("Password not Match")
      return
    }
  }
  else{
      }
  }
  alert("You have not Account")
  return
}
