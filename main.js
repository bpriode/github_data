// let data = {
//   "login": "octocat",
//   "id": 1,
//   "avatar_url": "https://github.com/images/error/octocat_happy.gif",
//   "gravatar_id": "",
//   "url": "  https://api.github.com/users/octocat",
//   "html_url": "https://github.com/octocat",
//   "followers_url": "https://api.github.com/users/octocat/followers",
//   "following_url": "https://api.github.com/users/octocat/following{/other_user}",
//   "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
//   "organizations_url": "https://api.github.com/users/octocat/orgs",
//   "repos_url": "https://api.github.com/users/octocat/repos",
//   "events_url": "https://api.github.com/users/octocat/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/octocat/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "  Monalisa Octocat",
//   "company": "  GitHub",
//   "blog": "https://github.com/blog",
//   "location": "San Francisco",
//   "email": "octocat@github.com",
//   "hireable": false,
//   "bio": "There once was...",
//   "public_repos": 2,
//   "public_gists": 1,
//   "followers": 20,
//   "following": 0,
//   "created_at": "2008-01-14T04:33:35Z",
//   "updated_at": "2008-01-14T04:33:35Z"
// }
let data = {
  "Name": "Bethany Priode",
  "Github URL" :"https://api.github.com/users/bpriode",
  "Email": "bpriode",
  "Company": "The Iron Yard",
  "Story" : "Former middle school teacher who turned a passion for in-depth challenges and creativity into a passion for web development.",
  "avatar_url": "https://avatars3.githubusercontent.com/u/29993968?v=4"
}

let profile = document.querySelector(".container");

function reqListener () {
  let data = JSON.parse(this.responseText);
  let info =
  `Name:${data.name}
  <br>
  Github URL:${data.url}
  <br>
  Email:${data.user_profile_email}
  <br>
  Company:${data.company}
  <br>
  <br>
  Story: ${data.bio}
  <br>
  <br>
  <img src="${data.avatar_url}">`;

  profile.innerHTML= info;
  console.log(info);
}

// function reqListener1 () {
//   let data = JSON.parse(this.responseText);
//   let info = `Name:  ${data.name}
//   <br>
//   Github URL: ${data.url}
//   <br>
//   Email: ${data.user_profile_email}
//   <br>
//   Company: ${data.company}
//   <br>
//   Story: ${data.bio}
//   <br>
//   <img src="${data.avatar_url}">`;
//   profile.innerHTML= info;
//   console.log(info);
// }

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/bpriode");
req.addEventListener("load", reqListener);
req.send();
