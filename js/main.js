document.addEventListener("DOMContentLoaded",function(){function e(){m.computerArray=[];for(var e=0;e<20;e++)m.computerArray.push(m.colors[Math.floor(4*Math.random())])}function n(e){switch(e){case"red":f.classList.add("active"),m.sound.red.play(),setTimeout(function(){f.classList.remove("active")},400);break;case"blue":p.classList.add("active"),m.sound.blue.play(),setTimeout(function(){p.classList.remove("active")},400);break;case"green":L.classList.add("active"),m.sound.green.play(),setTimeout(function(){L.classList.remove("active")},400);break;case"yellow":b.classList.add("active"),m.sound.yellow.play(),setTimeout(function(){b.classList.remove("active")},400)}}function t(e){switch(e){case"red":m.sound.red.play();break;case"blue":m.sound.blue.play();break;case"green":m.sound.green.play();break;case"yellow":m.sound.yellow.play();break;default:console.log("error")}}function o(){n("red"),w.classList.add("unclickable"),setTimeout(function(){n("blue")},400),setTimeout(function(){n("yellow")},800),setTimeout(function(){n("green")},1200),setTimeout(function(){n("red")},1600),setTimeout(function(){n("blue")},2e3),setTimeout(function(){n("yellow")},2400),setTimeout(function(){n("green")},2800),setTimeout(function(){w.classList.remove("unclickable"),a()},3800)}function c(){n("green"),setTimeout(function(){n("yellow")},400),setTimeout(function(){n("blue")},800),setTimeout(function(){n("red")},1200),setTimeout(function(){n("green")},1600),setTimeout(function(){n("yellow")},2e3),setTimeout(function(){n("blue")},2400),setTimeout(function(){n("red")},2800)}function s(){v.innerHTML="--",m.running=!0,m.count=0,o(),e(),g.classList.add("unclickable")}function a(){m.count++,v.innerHTML=m.count,l()}function l(){v.innerHTML=m.count,m.playerArray=[];var e=0,t=setInterval(function(){f.classList.add("unclickable"),p.classList.add("unclickable"),L.classList.add("unclickable"),b.classList.add("unclickable"),n(m.computerArray[e]),++e>=m.count&&(clearInterval(t),i())},700)}function i(){f.classList.remove("unclickable"),p.classList.remove("unclickable"),L.classList.remove("unclickable"),b.classList.remove("unclickable"),m.move="";for(var e=0;e<y.length;e++)y[e].addEventListener("click",u,!1)}function u(){m.move=this.id,t(m.move),m.playerArray.push(m.move),r()}function r(){m.playerArray[m.playerArray.length-1]!==m.computerArray[m.playerArray.length-1]?!0===m.strict?(v.innerHTML="!!!",m.sound.red.play(),m.sound.blue.play(),m.sound.green.play(),m.sound.yellow.play(),setTimeout(function(){s()},2e3)):(v.innerHTML="!!!",setTimeout(function(){v.innerHTML=m.count},2e3),m.sound.red.play(),m.sound.blue.play(),m.sound.green.play(),m.sound.yellow.play(),setTimeout(function(){l()},2500)):5===m.count&&m.playerArray.length===m.count?(setTimeout(function(){c()},700),v.innerHTML="Win",g.classList.remove("unclickable"),g.classList.add("clickable"),f.classList.add("unclickable"),p.classList.add("unclickable"),L.classList.add("unclickable"),b.classList.add("unclickable")):m.playerArray.length<m.count?i():a()}function d(){m.strict=!m.strict,T.classList.toggle("on")}var m={running:!1,strict:!1,count:0,colors:["red","blue","green","yellow"],computerArray:[],playerArray:[],move:"",sound:{red:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),blue:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),green:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),yellow:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")}},y=document.getElementsByClassName("btn"),f=document.getElementById("red"),p=document.getElementById("blue"),L=document.getElementById("green"),b=document.getElementById("yellow"),v=document.getElementById("display"),g=document.getElementById("start"),T=document.getElementById("led"),k=document.getElementById("strict"),w=document.getElementById("reset");g.addEventListener("click",function(){s()}),k.addEventListener("click",function(){d()}),w.addEventListener("click",function(){s()})});