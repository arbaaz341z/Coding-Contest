let url="https://kontests.net/api/v1/all"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    
    ihtml=""
    for(item in contest){
        
        function imagefun(){
         if(contest[item].site==="HackerRank"){
          return "images/hackerrank.png"
         }else if(contest[item].site==="HackerEarth"){
          return "images/hackerearth.png"
         }else if(contest[item].site==="CodeForces"){
          return "images/codeforces.png"
         }else if(contest[item].site==="CodeForces::Gym"){
          return "images/codeforces.png"
         }else if(contest[item].site==="TopCoder"){
          return "images/topcoder.png"
         }else if(contest[item].site==="AtCoder"){
          return "images/atcoder.png"
         }else if(contest[item].site==="CodeChef"){
          return "images/codechef.png"
         }else if(contest[item].site==="CS Academy"){
          return "images/csacademy.png"
         }else if(contest[item].site==="Kick Start"){
          return "images/kickstart.png"
         }else if(contest[item].site==="LeetCode"){
          return "images/leetcode.png"
         }else{
          return "images/images.jpg"
         }

        }
        ihtml+=`
      
      <div class="card mx-2 my-2" style="width: 22rem;">
          <img src="${imagefun()}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${contest[item].name}</h5>
            <p class="card-text">This contest is ${contest[item].status==="BEFORE"?"<b>Not Yet Started</b>":"<b>Started</b>"}</br><b>Contest Site:</b> ${contest[item].site}</p>
            <p class="card-text"><b>In 24 Hours?</b> ${contest[item].in_24_hours} </p> 
            <p class="card-text"><b>Duration:</b> ${Math.floor(contest[item].duration/60/60)} Hours</p> 
            <p><b>Starts at:</b> ${contest[item].start_time}</p>
            <p><b>Ends at:</b> ${contest[item].end_time}</p>
            <a href="${contest[item].url}"" class="btn btn-success">Visit Contest</a>
          </div>
        </div>
      `
    }
    cardContainer.innerHTML = ihtml
})




function codeforcesfun(){

  let url="https://kontests.net/api/v1/codeforces"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    
    ihtml=""
    for(item in contest){
      ihtml+=`
      
      <div class="card mx-2 my-2" style="width: 22rem;">
          <img src="images/codeforces.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${contest[item].name}</h5>
            <p class="card-text">This contest is ${contest[item].status==="BEFORE"?"<b>Not Yet Started</b>":"<b>Started</b>"}</br><b>Contest Site:</b> CodeForces</p>
            <p class="card-text"><b>In 24 Hours?</b> ${contest[item].in_24_hours} </p> 
            <p class="card-text"><b>Duration:</b> ${Math.floor(contest[item].duration/60/60)} Hours</p> 
            <p><b>Starts at:</b> ${contest[item].start_time}</p>
            <p><b>Ends at:</b> ${contest[item].end_time}</p>
            <a href="${contest[item].url}"" class="btn btn-success">Visit Contest</a>
          </div>
        </div>
      `
  }
  cardContainer.innerHTML = ihtml
})}


function codeforcesgym(){

  let url="https://kontests.net/api/v1/codeforces_gym"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    ihtml=""
    for(item in contest){
      ihtml+=`
      
      <div class="card mx-2 my-2" style="width: 22rem;">
          <img src="images/codeforce.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${contest[item].name}</h5>
            <p class="card-text">This contest is ${contest[item].status==="BEFORE"?"<b>Not Yet Started</b>":"<b>Started</b>"}</br><b>Contest Site:</b> CodeForces::Gym</p>
            <p class="card-text"><b>In 24 Hours?</b> ${contest[item].in_24_hours} </p> 
            <p class="card-text"><b>Duration:</b> ${Math.floor(contest[item].duration/60/60)} Hours</p> 
            <p><b>Starts at:</b> ${contest[item].start_time}</p>
            <p><b>Ends at:</b> ${contest[item].end_time}</p>
            <a href="${contest[item].url}"" class="btn btn-success">Visit Contest</a>
          </div>
        </div>
      `
  }
  cardContainer.innerHTML = ihtml
})}


function atcoderfun(){

  let url="https://kontests.net/api/v1/at_coder"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    ihtml=""
    for(item in contest){
      ihtml+=`
      
      <div class="card mx-2 my-2" style="width: 22rem;">
          <img src="images/atcoder.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${contest[item].name}</h5>
            <p class="card-text">This contest is ${contest[item].status==="BEFORE"?"<b>Not Yet Started</b>":"<b>Started</b>"}</br><b>Contest Site:</b> At Coder</p>
            <p class="card-text"><b>In 24 Hours?</b> ${contest[item].in_24_hours} </p> 
            <p class="card-text"><b>Duration:</b> ${Math.floor(contest[item].duration/60/60)} Hours</p> 
            <p><b>Starts at:</b> ${contest[item].start_time}</p>
            <p><b>Ends at:</b> ${contest[item].end_time}</p>
            <a href="${contest[item].url}"" class="btn btn-success">Visit Contest</a>
          </div>
        </div>
      `
  }
  cardContainer.innerHTML = ihtml
})}

function codecheffun(){

  let url="https://kontests.net/api/v1/code_chef"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    ihtml=""
    for(item in contest){
      ihtml+=`
      
      <div class="card mx-2 my-2" style="width: 22rem;">
          <img src="images/codechef.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${contest[item].name}</h5>
            <p class="card-text">This contest is ${contest[item].status==="BEFORE"?"<b>Not Yet Started</b>":"<b>Started</b>"}</br><b>Contest Site:</b> Code Chef</p>
            <p class="card-text"><b>In 24 Hours?</b> ${contest[item].in_24_hours} </p> 
            <p class="card-text"><b>Duration:</b> ${Math.floor(contest[item].duration/60/60)} Hours</p> 
            <p><b>Starts at:</b> ${contest[item].start_time}</p>
            <p><b>Ends at:</b> ${contest[item].end_time}</p>
            <a href="${contest[item].url}"" class="btn btn-success">Visit Contest</a>
          </div>
        </div>
      `
  }
  cardContainer.innerHTML = ihtml
})}

function hackerrankfun(){

  let url="https://kontests.net/api/v1/hacker_rank"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    ihtml=""
    for(item in contest){
      ihtml+=`
      
      <div class="card mx-2 my-2" style="width: 22rem;">
      <img src="images/hackerrank.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${contest[item].name}</h5>
        <p class="card-text">This contest is ${contest[item].status==="BEFORE"?"<b>Not Yet Started</b>":"<b>Started</b>"}</br><b>Contest Site:</b> Hacker Rank</p>
        <p class="card-text"><b>In 24 Hours?</b> ${contest[item].in_24_hours} </p> 
        <p class="card-text"><b>Duration:</b> ${Math.floor(contest[item].duration/60/60)} Hours</p> 
        <p><b>Starts at:</b> ${contest[item].start_time}</p>
        <p><b>Ends at:</b> ${contest[item].end_time}</p>
        <a href="${contest[item].url}"" class="btn btn-success">Visit Contest</a>
      </div>
    </div>
      `
  }
  cardContainer.innerHTML = ihtml
})}

function hackerearthfun(){

  let url="https://kontests.net/api/v1/hacker_earth"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    ihtml=""
    for(item in contest){
      ihtml+=`
      
      <div class="card mx-2 my-2" style="width: 22rem;">
          <img src="images/hackerearth.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${contest[item].name}</h5>
            <p class="card-text">This contest is ${contest[item].status==="BEFORE"?"<b>Not Yet Started</b>":"<b>Started</b>"}</br><b>Contest Site:</b> Hacker Earth</p>
            <p class="card-text"><b>In 24 Hours?</b> ${contest[item].in_24_hours} </p> 
            <p class="card-text"><b>Duration:</b> ${Math.floor(contest[item].duration/60/60)} Hours</p> 
            <p><b>Starts at:</b> ${contest[item].start_time}</p>
            <p><b>Ends at:</b> ${contest[item].end_time}</p>
            <a href="${contest[item].url}"" class="btn btn-success">Visit Contest</a>
          </div>
        </div>
      `
  }
  cardContainer.innerHTML = ihtml
})}

function leetcodefun(){

  let url="https://kontests.net/api/v1/leet_code"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    ihtml=""
    for(item in contest){
      ihtml+=`
      
      <div class="card mx-2 my-2" style="width: 22rem;">
      <img src="images/leetcode.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${contest[item].name}</h5>
        <p class="card-text">This contest is ${contest[item].status==="BEFORE"?"<b>Not Yet Started</b>":"<b>Started</b>"}</br><b>Contest Site:</b> Leet Code</p>
        <p class="card-text"><b>In 24 Hours?</b> ${contest[item].in_24_hours} </p> 
        <p class="card-text"><b>Duration:</b> ${Math.floor(contest[item].duration/60/60)} Hours</p> 
        <p><b>Starts at:</b> ${contest[item].start_time}</p>
        <p><b>Ends at:</b> ${contest[item].end_time}</p>
        <a href="${contest[item].url}"" class="btn btn-success">Visit Contest</a>
      </div>
    </div>
      `
  }
  cardContainer.innerHTML = ihtml
})}

function kickstartfun(){

  let url="https://kontests.net/api/v1/kick_start"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    ihtml=""
    for(item in contest){
      ihtml+=`
      
      <div class="card mx-2 my-2" style="width: 22rem;">
      <img src="images/kickstart.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${contest[item].name}</h5>
        <p class="card-text">This contest is ${contest[item].status==="BEFORE"?"<b>Not Yet Started</b>":"<b>Started</b>"}</br><b>Contest Site:</b> Kick Start</p>
        <p class="card-text"><b>In 24 Hours?</b> ${contest[item].in_24_hours} </p> 
        <p class="card-text"><b>Duration:</b> ${Math.floor(contest[item].duration/60/60)} Hours</p> 
        <p><b>Starts at:</b> ${contest[item].start_time}</p>
        <p><b>Ends at:</b> ${contest[item].end_time}</p>
        <a href="${contest[item].url}"" class="btn btn-success">Visit Contest</a>
      </div>
    </div>
      `
  }
  cardContainer.innerHTML = ihtml
})}

function csacademyfun(){

  let url="https://kontests.net/api/v1/cs_academy"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    ihtml=""
    for(item in contest){
      ihtml+=`
      
      <div class="card mx-2 my-2" style="width: 22rem;">
          <img src="images/csacademy.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${contest[item].name}</h5>
            <p class="card-text">This contest is ${contest[item].status==="BEFORE"?"<b>Not Yet Started</b>":"<b>Started</b>"}</br><b>Contest Site:</b> CS Academy</p>
            <p class="card-text"><b>In 24 Hours?</b> ${contest[item].in_24_hours} </p> 
            <p class="card-text"><b>Duration:</b> ${Math.floor(contest[item].duration/60/60)} Hours</p> 
            <p><b>Starts at:</b> ${contest[item].start_time}</p>
            <p><b>Ends at:</b> ${contest[item].end_time}</p>
            <a href="${contest[item].url}"" class="btn btn-success">Visit Contest</a>
          </div>
        </div>
      `
  }
  cardContainer.innerHTML = ihtml
})}

function topcoderfun(){

  let url="https://kontests.net/api/v1/top_coder"
let response=fetch(url)
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    ihtml=""
    for(item in contest){
      ihtml+=`
      
      <div class="card mx-2 my-2" style="width: 22rem;">
          <img src="images/topcoder.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${contest[item].name}</h5>
            <p class="card-text">This contest is ${contest[item].status==="BEFORE"?"<b>Not Yet Started</b>":"<b>Started</b>"}</br><b>Contest Site:</b> TopCoder</p>
            <p class="card-text"><b>In 24 Hours?</b> ${contest[item].in_24_hours} </p> 
            <p class="card-text"><b>Duration:</b> ${Math.floor(contest[item].duration/60/60)} Hours</p> 
            <p><b>Starts at:</b> ${contest[item].start_time}</p>
            <p><b>Ends at:</b> ${contest[item].end_time}</p>
            <a href="${contest[item].url}"" class="btn btn-success">Visit Contest</a>
          </div>
        </div>
      `
  }
  cardContainer.innerHTML = ihtml
})}