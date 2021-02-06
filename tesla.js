function myFunction(x) {
    x.classList.toggle("change");
    var ov = document.querySelector('.top-header')
    var drawer = document.querySelector('.drawer');
    var drdis = document.querySelector('.drawer-wrapper')
    drawer.classList.toggle('drawerdisplay');
    drdis.classList.toggle('drawer-wrapperdisplay')
    ov.classList.toggle('top-headerdisplay')
}
var c = document.getElementById("scrool").childNodes;
var ops = document.querySelector('.ops');
var see = document.querySelector('.see');
var op = document.querySelector('.op');
var op3 = document.querySelector('.op3');
var op4 = document.querySelector('.op4');
var op5 = document.querySelector('.op5');
var op6 = document.querySelector('.op6');
var op7 = document.querySelector('.op7');

function overing() {
    ops.classList.add('opsdisplay');
    see.classList.add('seedisplay');
}
function overings() {
    ops.classList.remove('opsdisplay');
    see.classList.remove('seedisplay')
}
function opnon() {
    op.classList.add('opdisplay');
}
function opoff() {
    op.classList.remove('opdisplay');
}
function _3on() {
    op3.classList.add('op3d');
}
function _3of() {
    op3.classList.remove('op3d');
}
function _4on() {
    op4.classList.add('op4d');
}
function _4of() {
    op4.classList.remove('op4d');
}
function _5on() {
    op5.classList.add('op5d');
}
function _5of() {
    op5.classList.remove('op5d');
}
function _6on() {
    op6.classList.add('op6d');
}
function _6of() {
    op6.classList.remove('op6d');
}
function _7on() {
    op7.classList.add('op7d');
}
function _7of() {
    op7.classList.remove('op7d');
}

c[1].addEventListener('mouseover', overing, true);
c[1].addEventListener('mouseout', overing, true);

c[3].addEventListener('mouseover', opnon, true);
c[3].addEventListener('mouseout', opoff, true);

c[5].addEventListener('mouseover', _3on, true);
c[5].addEventListener('mouseout', _3of, true);

c[7].addEventListener('mouseover', _4on, true);
c[7].addEventListener('mouseout', _4of, true);

c[9].addEventListener('mouseover', _5on, true);
c[9].addEventListener('wmouseout', _5of, true);

c[11].addEventListener('mouseover', _6on, true);
c[11].addEventListener('mouseout', _6of, true);

c[13].addEventListener('mouseover', _7on, true);
c[13].addEventListener('mouseout', _7of, true);


/************************************************ */
// var admin = document.getElementById('hahm');
// admin.addEventListener('click', fun);
// function fun() {
//     console.log('tfftftjf');
// }
// console.log(admin);
var logo = document.querySelector('.logo');
var reg = document.querySelector('.reg');
var btn=document.querySelector('.btn');
var back=document.getElementById('back');
var numbers=document.getElementById('numbers');
var h1 = document.getElementsByTagName('h1');
var h6 = document.getElementsByTagName('h6');
var car=document.getElementById('cars');
var about=document.getElementById('about');
var options=document.getElementsByTagName('option');
var bgimg=document.getElementById('backimg');


logo.addEventListener('click', fun);
function fun() {
    reg.classList.add('regdisplay');
    car.value="";
    about.value="";
    // console.log('fufyu');
}

btn.addEventListener('click',remove);
function remove(){

    if(document.getElementById('cars').value==""||document.getElementById('about').value==""){
        alert('not placed car name')
        return false;
    }
   var car=document.getElementById('cars').value;
   var about=document.getElementById('about').value;
   var bgimg=document.getElementById('backimg').value;
    reg.classList.remove('regdisplay');
   
//    var col=  h1[0].innerHTML = car;
//   var about= h6[0].innerHTML=about;


  if(numbers.value==1){
   var col= h1[0].innerHTML=car;
     var about= h6[0].innerHTML=about;
     var bg=c[1].style.backgroundImage=bgimg;
  }
  if(numbers.value==2){
    var col= h1[1].innerHTML=car;
      var about= h6[1].innerHTML=about;
      var bg=c[3].style.backgroundImage=bgimg;
   }
   if(numbers.value==3){
    var col= h1[2].innerHTML=car;
      var about= h6[2].innerHTML=about;
      var bg=c[5].style.backgroundImage=bgimg;
   }
   if(numbers.value==4){
    var col= h1[3].innerHTML=car;
      var about= h6[3].innerHTML=about;
      
      var bg=c[7].style.backgroundImage=bgimg;

   }
   if(numbers.value==5){
    var col= h1[4].innerHTML=car;
      var about= h6[4].innerHTML=about;
      var bg=c[9].style.backgroundImage=bgimg;
   }
   if(numbers.value==6){
    var col= h1[5].innerHTML=car;
      var about= h6[5].innerHTML=about;
      var bg=c[11].style.backgroundImage=bgimg;
   }
   if(numbers.value==7){
    var col= h1[6].innerHTML=car;
    var bg=c[13].style.backgroundImage=bgimg;
   }
  
console.log(col, about)


}

function num(){             // used for select numbers
    var optn=  numbers.value;
  
    //   console.log(optn);
      
  }


back.addEventListener('click',backed);
function backed(){
    reg.classList.remove('regdisplay');
    // localStorage.setItem('cars','tesla');
    // localStorage.setItem('background','uyuui');
    // console.log(localStorage.key(0));
    var car=document.getElementById('cars');
var about=document.getElementById('about');
var options=document.getElementsByTagName('option');
var bgimg=document.getElementById('backimg');
var carsname=car.value;
var aboutus=about.value;
var backimg=bgimg.value;
// console.log(carsname);
// console.log(aboutus);
// console.log(backimg);

if(localStorage.getItem('data')==null && localStorage.getItem('about')==null &&localStorage.getItem('bg')==null ){
    localStorage.setItem('data','[]');
    localStorage.setItem('about','[]');
    localStorage.setItem('bg','[]');
}
var olddata=JSON.parse(localStorage.getItem('data'));
var oldabout=JSON.parse(localStorage.getItem('about'));
var bgold=JSON.parse(localStorage.getItem('bg'));
var inpu=document.getElementById('inp');
olddata.push(carsname);
oldabout.push(aboutus);
bgold.push(backimg);


localStorage.setItem('data',JSON.stringify(olddata));
localStorage.setItem('about',JSON.stringify(oldabout));
localStorage.setItem('bg',JSON.stringify(bgold));

}

var ins=document.getElementById('ans');
ins.addEventListener('click',inpus);



function inpus(){
    if(localStorage.getItem('data')!=null&& localStorage.getItem('about')!==null&&localStorage.getItem('bg')!=null){
        var br=document.getElementById('mybr');
        document.getElementById('inp').innerHTML='carname: '+ JSON.parse(localStorage.getItem('data')).br +'about us '+JSON.parse(localStorage.getItem('about')) ;
        //  'about us '+JSON.parse(localStorage.getItem('about')) 
        //   'backgroundimg '+JSON.parse(localStorage.getItem('bg'));
        // document.getElementById('inpu').innerHTML='about us '+JSON.parse(localStorage.getItem('about'));
    //     document.getElementById('inpu').innerHTML='backgroundimg '+JSON.parse(localStorage.getItem('bg'));
    }
}










// localStorage.setItem('car','{}');
// localStorage.setItem('about','[]');
// localStorage.setItem('bgimg','[]');
// console.log(localStorage.key(0))
// console.log(localStorage.key(1))
// console.log(localStorage.key(2))

// for(var i=0;i<localStorage.length;i++){
//     var car=localStorage.carsname(i);
//     var about=localStorage.getItem(car);
//     var bg=localStorage.getItem(car);
//     // op.innerHTML+=`${key},${value} <br/>`;
//     console.log(car);
//     console.log(about);
//     console.log(bg);
// }

// console.log(c[1].style.backgroundImage ="url('https://e0.365dm.com/20/08/2048x1152/skysports-ronaldo-juve_5061431.jpg')")








// console.log(typeof c);















// var h1 = document.getElementsByTagName('h1');;

// h6[5].innerText = "about our car"

// console.log(h1[3]);


// h1[6].innerText = 'gygyuguk';

// car.innerHTML=h1[1].innerText;
// console.log(car)