document.addEventListener("DOMContentLoaded",function(){function e(){s.computerArray=[];for(var e=0;e<20;e++)s.computerArray.push(s.colors[Math.floor(4*Math.random())]);console.log(s.computerArray)}function t(e){switch(console.log("lightSound called "+e),e){case u:console.log("lightSound red"),u.classList.add("active"),s.sound.red.play(),setTimeout(function(){u.classList.remove("active")},400);break;case a:console.log("lightSound blue"),a.classList.add("active"),s.sound.blue.play(),setTimeout(function(){a.classList.remove("active")},400);break;case i:console.log("lightSound green"),i.classList.add("active"),s.sound.green.play(),setTimeout(function(){i.classList.remove("active")},400);break;case l:console.log("lightSound yellow"),l.classList.add("active"),s.sound.yellow.play(),setTimeout(function(){l.classList.remove("active")},400)}}function o(){t(u),setTimeout(function(){t(a)},400),setTimeout(function(){t(l)},800),setTimeout(function(){t(i)},1200),setTimeout(function(){t(u)},1600),setTimeout(function(){t(a)},2e3),setTimeout(function(){t(l)},2400),setTimeout(function(){t(i)},2800),setTimeout(function(){c()},3200)}function n(){s.running=!0,o(),e()}function c(){s.count++;var e=0,o=setInterval(function(){var n=s.computerArray[e];t(n),console.log(n),++e>=s.count&&clearInterval(o)},700)}var s={running:!1,strict:!1,count:0,colors:["red","blue","green","yellow"],computerArray:[],playerArray:[],sound:{red:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),blue:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),green:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),yellow:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")}},u=(document.getElementsByClassName("btn"),document.getElementById("red")),a=document.getElementById("blue"),i=document.getElementById("green"),l=document.getElementById("yellow"),d=(document.getElementById("display"),document.getElementById("start"));document.getElementById("led"),document.getElementById("strict"),document.getElementById("reset");d.addEventListener("click",function(){n()})});