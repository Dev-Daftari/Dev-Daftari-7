
const name = "Dev Daftari";
const container = document.getElementsByClassName("container")[0];
const heading = document.getElementById("heading");


// Setting h1 tag text according to the person
// const text = "Hello, I'm <span>Dev</span>";
// heading.insertAdjacentHTML(text);
// document.getElementById("heading").innerHTML = "Hello, I'm Dev";

// Creating a div containing the profile picture of the person 

const division = document.createElement("div");
division.setAttribute("id", "imgdiv")
const image = document.createElement("img");
image.setAttribute("src", "./style/0/icon2.png");
division.appendChild(image);
container.appendChild(division);

// Creating description para inside flex container

const descdiv = document.createElement("div");
descdiv.setAttribute("id", "description");
container.insertBefore(descdiv, container.childNodes[0]);
descdiv.appendChild(heading);
// const para = `<h2 id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla facilis veritatis, nobis libero perferendis, obcaecati, beatae ab ipsa sunt ex? Nesciunt veritatis, adipisci dicta, expedita, temporibus aut voluptas quaerat corrupti eveniet tenetur enim similique</h2>`;
const para = `<h2 id="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>`;
descdiv.insertAdjacentHTML("beforeend", para);

// Delay appearing of img and para 

// setTimeout(function(){
//     document.getElementById('para').style.visibility = "visible";
//     },3000);



// About Page


document.querySelector("#about h1").innerHTML = "A B O U T";

// Creating animate on scroll 
// document.getElementsByTagName("script")[0].insertAdjacentHTML("afterend",`<script src="https://unpkg.com/aos@next/dist/aos.js">AOS.init()</script>`);
// document.querySelector("#about h1").setAttribute("data-aos","fade-left");
const div_about = document.createElement("div");
div_about.setAttribute("id", "abt_main");
document.querySelector("#about").appendChild(div_about);
const divs = `<div class="abt_div" id="box1">` +
  `<img src="./style/0/home.png">` +
  `<div class="img_overlay">` +
  `<div class="img_title">From` +
  `</div>` +
  `<p class="img_para">Rajkot, Gujarat</p>` +
  `<p class="img_para">ICSE</p>` +
  `<p class="img_para">27-Nov</p>` +
  `</div>` +
  `</img>` +
  `</div>` +
  `<div class="abt_div" id="box2">` +
  `<img src="./style/0/study.png">` +
  `<div class="img_overlay">` +
  `<div class="img_title">B.Tech '24` +
  `</div>` +
  `<p class="img_para">Electrical Enginnering</p>` +
  `<p class="img_para">from</p>` +
  `<p class="img_para">IIT Indore</p>` +
  `</div>` +
  `</img>` +
  `</div>` +
  `<div class="abt_div" id="box3">` +
  `<img src="./style/0/interests.png">` +
  `<div class="img_overlay">` +
  `<div class="img_title">Interests` +
  `</div>` +
  `<p class="img_para">Web Developement</p>` +
  `<p class="img_para">Designing</p>` +
  `<p class="img_para">Competitive Programming</p>` +
  `</div>` +
  `</img>` +
  `</div>`;
document.querySelector("#about div").insertAdjacentHTML("beforeend", divs);

// Portfolio section  

document.querySelector("#portfolio h1").innerHTML = "P O R T F O L I O";



// Contact section 

document.querySelector("#contact h1").innerHTML = "C O N T A C T";
const div_cont = document.createElement("div");
div_cont.setAttribute("id", "cont_main");
document.querySelector("#contact").appendChild(div_cont);
const contdivs = `<div class="phone">` +
  `<img src="./style/0/phone.png"></img>` +
  `<div class="phone_overlay">` +
  `<a class="app" id="app1" href="https://github.com/Dev-Daftari" target="_blank">` +
  `<img src="./style/0/github.png" class="img1"></img>GitHub` +
  `</a>` +
  `<a class="app" id="app2" href="https://www.instagram.com/devdaftari/" target="_blank">` +
  `<img src="./style/0/instagram.png" class="img2"></img>Instagram` +
  `</a>` +
  `<a class="app" id="app3" href="https://in.linkedin.com/in/dev-daftari-50a358206" target="_blank">` +
  `<img src="./style/0/linkedin.png" class="img3"></img>LinkedIn` +
  `</a>` +
  `<a class="app" id="app4" href="https://mail.google.com" target="_blank">` +
  `<img src="./style/0/mail.png" class="img4"></img>me@gmail` +
  `</a>` +
  `<a class="app" id="app5" href="">` +
  `<img src="./style/0/call.png" class="img5"></img>98765 43210` +
  `</a>` +
  `</div>` +
  `</div>` +
  `<div class="formdiv">` +
  `<img src="./style/0/ipad.png"></img>` +
  `<div class="tab_overlay">` +
  `<div class="formtitle">Reach out to Me` +
  `</div>` +
  `</div>` +
  `</div>`;
document.querySelector("#contact div").insertAdjacentHTML("beforeend", contdivs);
const form_cont = `<form action="" class="contform">` +
  `<div>` +
  `<input type="text" placeholder="First Name" id="first_name" required>` +
  `<input type="text" placeholder="Last Name" id="last_name">` +
  `</div>` +
  `<div>` +
  `<input type="email" placeholder="Enter Your E-mail" id="email" required>` +
  `</div>` +
  `<div>` +
  `<textarea name="text" id="formtxt" placeholder="Enter your thoughts"></textarea>` +
  `</div>` +
  `<div id="lstfrm">` +
  `<button type="submit" id="subbtn">Submit</button>` +
  `<button type="reset" id="resbtn">Reset</button>` +
  `</div>` +
  `</form>`;
document.querySelector(".formtitle").insertAdjacentHTML("beforeend", form_cont);


// Scroll to top button    

const but = `<button id="scrolltotop">` +
  `<i class="material-icons">arrow_upward</i>` +
  `</button>`;
document.querySelector("#home").insertAdjacentHTML("afterbegin", but);

const buttop = document.querySelector("#scrolltotop");
window.addEventListener("scroll", function () {
  buttop.classList.toggle("active", window.scrollY > 200)
})
buttop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behaviour: "smooth"
  })
})

const googlink = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`;
document.getElementById("css_sheet").insertAdjacentHTML("afterend", googlink);




// MAKING COLOR PICKER 


const codeclr = `<div class="colorpick">
<div class="picker">
    <div id="col1" class="cols"></div>
    <div id="col2" class="cols"></div>
    <div id="col3" class="cols"></div>
    <div id="col4" class="cols"></div>
</div>
<div class="clicker"><img src="./style/0/color.png"></img></div>
</div>`;
document.querySelector(".whole").insertAdjacentHTML("afterbegin", codeclr);
const whole = document.querySelector(".whole");
const col = document.querySelector(".clicker");
const pick = document.querySelector(".picker");
col.addEventListener("click", function () {

  if (pick.style.display === "none") {
    pick.style.display = "block";
  }
  else {
    pick.style.display = "none";
  }
})

const blue = document.querySelector("#col1");
blue.addEventListener("click", function () {
  let r = document.querySelector(":root");
  r.style.setProperty("--theme-color", "#0088a9");
})

const red = document.querySelector("#col2");
red.addEventListener("click", function () {
  let r = document.querySelector(":root");
  r.style.setProperty("--theme-color", "#fd3d3d");
})

const green = document.querySelector("#col3");
green.addEventListener("click", function () {
  let r = document.querySelector(":root");
  r.style.setProperty("--theme-color", "#10a502");
})

const purple = document.querySelector("#col4");
purple.addEventListener("click", function () {
  let r = document.querySelector(":root");
  r.style.setProperty("--theme-color", "#a121b8");
})


//   var toggleVisibility = function(element) {
//     if(element.style.display=='visible'){
//         element.style.display='none';
//     } else {
//         element.style.display='visible';
//     }
// };


// Slider
const gal=`<div class="gal">
<div class="galitems" id="galitem1"><img src="./style/0/1.jpg" alt=""></img></div>
<div class="galitems" id="galitem2"><img src="./style/0/2.jpg" alt=""></img></div>
<div class="galitems" id="galitem3"><img src="./style/0/3.jpg" alt=""></img></div>
<div class="galitems" id="galitem4"><img src="./style/0/4.jpg" alt=""></img></div>
</div>`;
const slid = `<!--image slider start-->
  <div class="wrap">
    <div class="slider">
        <div class="slides">
          <!--radio buttons start-->
          <input type="radio" name="radio-btn" id="radio1">
          <input type="radio" name="radio-btn" id="radio2">
          <input type="radio" name="radio-btn" id="radio3">
          <input type="radio" name="radio-btn" id="radio4">
          <!--radio buttons end-->
          <!--slide images start-->
          <div class="slide first">
            <img src="./style/0/1.jpg" alt="">
          </div>
          <div class="slide">
            <img src="./style/0/2.jpg" alt="">
          </div>
          <div class="slide">
            <img src="./style/0/3.jpg" alt="">
          </div>
          <div class="slide">
            <img src="./style/0/4.jpg" alt="">
          </div>
          <!--slide images end-->
          <!--automatic navigation start-->
          <div class="navigation-auto">
            <div class="auto-btn1"></div>
            <div class="auto-btn2"></div>
            <div class="auto-btn3"></div>
            <div class="auto-btn4"></div>
          </div>
          <!--automatic navigation end-->
        </div>
        <!--manual navigation start-->
        <div class="navigation-manual">
          <label for="radio1" class="manual-btn"></label>
          <label for="radio2" class="manual-btn"></label>
          <label for="radio3" class="manual-btn"></label>
          <label for="radio4" class="manual-btn"></label>
        </div>
        <!--manual navigation end-->
      </div>
      </div>
      <!--image slider end-->`;

document.querySelector("#portfolio h1").insertAdjacentHTML("afterend", gal);
document.querySelector("#portfolio h1").insertAdjacentHTML("afterend", slid);

// Gallery
const galdiv=`<div class="galoverlay"></div>`;
document.querySelector("#portfolio h1").insertAdjacentHTML("afterend", galdiv);
const galover=document.querySelector(".galoverlay");

let seeimg1= document.querySelectorAll(".galitems img")[0];
let img1=`<img src="./style/0/1.jpg" alt="">`;
seeimg1.addEventListener("click", function (){
  galover.insertAdjacentHTML("afterbegin",img1);
  galover.style.visibility="visible";
})

let seeimg2= document.querySelectorAll(".galitems img")[1];
let img2=`<img src="./style/0/2.jpg" alt="">`;
seeimg2.addEventListener("click", function (){
  galover.insertAdjacentHTML("afterbegin",img2);
  galover.style.visibility="visible";
})

let seeimg3= document.querySelectorAll(".galitems img")[2];
let img3=`<img src="./style/0/3.jpg" alt="">`;
seeimg3.addEventListener("click", function (){
  galover.insertAdjacentHTML("afterbegin",img3);
  galover.style.visibility="visible";
})

let seeimg4= document.querySelectorAll(".galitems img")[3];
let img4=`<img src="./style/0/4.jpg" alt="">`;
seeimg4.addEventListener("click", function (){
  galover.insertAdjacentHTML("afterbegin",img4);
  galover.style.visibility="visible";
})

galover.addEventListener("click", function (){
    galover.style.visibility="hidden";
    document.querySelector(".galoverlay img").remove();
})


var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);