// let data = {
//   "Name": "Bethany Priode",
//   "Github URL" :"https://api.github.com/users/bpriode",
//   "Email": "bpriode",
//   "Company": "The Iron Yard",
//   "Story" : "Former middle school teacher who turned a passion for in-depth challenges and creativity into a passion for web development.",
//   "avatar_url": "https://avatars3.githubusercontent.com/u/29993968?v=4"
// }

let profile = document.querySelector(".container");

function reqListener () {
  let data = JSON.parse(this.responseText);
  let info =
  `Name:${data.name}
  <br>
  Github URL:${data.url}
  <br>
  Email: bpriode@gmail.com
  <br>
  Company:${data.company}
  <br>
  <br>
  Story: ${data.bio}
  <img src="${data.avatar_url}">
  <br>`;

  profile.innerHTML= info;
  console.log(info);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/bpriode");
req.addEventListener("load", reqListener);
req.send();
