var device = "null"
var darkmode = false
const webname = "Imeanbusiness"
const ua = navigator.userAgent
if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
  device = "phone"
} else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
  device = "tablet"
} else {
  device = "dektop"

}
if (device == "phone") {
  document.getElementById("main").style.paddingLeft = "3px";
  document.getElementById("main").style.paddingRight = "3px";
  let headings = document.getElementsByTagName("h1");
  for (let heading of headings) {
      heading.style.fontSize = "50px";
  }
  let headings1 = document.getElementsByTagName("h2");
  for (let heading of headings1) {
      heading.style.fontSize = "30px";
  }
  let headings2 = document.getElementsByTagName("p");
  for (let heading of headings2) {
      heading.style.fontSize = "312x";
  }
  let headings3 = document.getElementsByTagName("a");
  for (let heading of headings3) {
      heading.style.fontSize = "12px";
  }
}

function startup() {
  try {
    darkmode = JSON.parse(localStorage.getItem(webname+"/darkmode"))
    darkmode = !darkmode
    console.log(darkmode)
    godark()
    console.log("done")
  } catch {
    darkmode = false
  }
  
  
  if (darkmode) {
    var element = document.body;
    element.style.backgroundImage
  }

}


function godisc() {
  open("http://discord.com/users/697700328346353695");
  return;
}
function goinsta() {
  open("https://www.instagram.com/_scrafty/");
  return;
}
function gogit() {
  open("https://github.com/Imeanbusiness");
  return;
}

function godark() {
  console.log(darkmode)
  console.log("Change");
  var element = document.body;
  darkmode = !darkmode
  if (darkmode) {
    document.getElementById("daylight").style.backgroundImage = "url('photos/Moon.png')";
    document.getElementById("discord").style.backgroundImage = "url('photos/discordicon.png')";
    document.getElementById("insta").style.backgroundImage = "url('photos/insta.png')";
    document.getElementById("github").style.backgroundImage = "url('photos/github.png')";
    element.style.backgroundImage = "url('photos/DarkMountains.jpg')";
    element.style.color = "white";
    document.getElementById("links").style.color = "#FFA500";
    document.getElementById("links2").style.color = "#FFA500";
    document.getElementById("links3").style.color = "#FFA500";
    document.getElementById("links4").style.color = "#FFA500";
  } else {
    document.getElementById("daylight").style.backgroundImage = "url('photos/Sun.png')";
    document.getElementById("discord").style.backgroundImage = "url('photos/discorddark.png')";
    document.getElementById("insta").style.backgroundImage = "url('photos/instadark.png')";
    document.getElementById("github").style.backgroundImage = "url('photos/githubdark.png')";
    element.style.backgroundImage = "url('photos/LightMountains.jpg')";
    element.style.color = "black";
    document.getElementById("links").style.color = "#1783a1";
    document.getElementById("links2").style.color = "#1783a1";
    document.getElementById("links3").style.color = "#1783a1";
    document.getElementById("links4").style.color = "#1783a1";

  } 
  localStorage.setItem(webname+"/darkmode", JSON.stringify(darkmode))
}