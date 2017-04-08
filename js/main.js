document.addEventListener("DOMContentLoaded",function(){function e(){i.computerArray=[];for(var e=0;e<20;e++)i.computerArray.push(i.colors[Math.floor(4*Math.random())]);console.log(i.computerArray)}function n(e){switch(e){case"red":m.classList.add("active"),i.sound.red.play(),setTimeout(function(){m.classList.remove("active")},400);break;case"blue":y.classList.add("active"),i.sound.blue.play(),setTimeout(function(){y.classList.remove("active")},400);break;case"green":p.classList.add("active"),i.sound.green.play(),setTimeout(function(){p.classList.remove("active")},400);break;case"yellow":g.classList.add("active"),i.sound.yellow.play(),setTimeout(function(){g.classList.remove("active")},400);break;default:console.log("error")}}function o(e){switch(e){case"red":i.sound.red.play();break;case"blue":i.sound.blue.play();break;case"green":i.sound.green.play();break;case"yellow":i.sound.yellow.play();break;default:console.log("error")}}function t(){n("red"),setTimeout(function(){n("blue")},400),setTimeout(function(){n("yellow")},800),setTimeout(function(){n("green")},1200),setTimeout(function(){n("red")},1600),setTimeout(function(){n("blue")},2e3),setTimeout(function(){n("yellow")},2400),setTimeout(function(){n("green")},2800),setTimeout(function(){c()},3800)}function l(){f.innerHTML="--",i.running=!0,i.count=0,t(),e(),v.classList.add("unclickable")}function c(){console.log("computerPlay called"),i.count++,console.log("game.count "+i.count),f.innerHTML=i.count,a()}function a(){f.innerHTML=i.count,i.playerArray=[];var e=0,o=setInterval(function(){var t=i.computerArray[e];n(t),console.log(t),++e>=i.count&&clearInterval(o)},700);s()}function s(){console.log("playerPlay called"),m.classList.remove("unclickable"),y.classList.remove("unclickable"),p.classList.remove("unclickable"),g.classList.remove("unclickable"),i.move="";for(var e=0;e<d.length;e++)d[e].addEventListener("click",r,!1)}function r(){console.log("getPlay called"),i.move=this.id,console.log("game.move "+i.move),o(i.move),i.playerArray.push(i.move),console.log(i.playerArray),u()}function u(){i.playerArray[i.playerArray.length-1]!==i.computerArray[i.playerArray.length-1]?!0===i.strict?l():(i.sound.red.play(),i.sound.blue.play(),i.sound.green.play(),i.sound.yellow.play(),a()):5===i.count&&i.playerArray.length===i.count?(f.innerHTML="Win",v.classList.remove("unclickable"),v.classList.add("clickable"),m.classList.add("unclickable"),y.classList.add("unclickable"),p.classList.add("unclickable"),g.classList.add("unclickable")):i.playerArray.length<i.count?s():c()}var i={running:!1,strict:!1,count:0,colors:["red","blue","green","yellow"],computerArray:[],playerArray:[],move:"",sound:{red:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),blue:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),green:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),yellow:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")}},d=document.getElementsByClassName("btn"),m=document.getElementById("red"),y=document.getElementById("blue"),p=document.getElementById("green"),g=document.getElementById("yellow"),f=document.getElementById("display"),v=document.getElementById("start");document.getElementById("led"),document.getElementById("strict"),document.getElementById("reset");v.addEventListener("click",function(){l()})});