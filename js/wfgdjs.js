window.onload=function(){
var oul=document.getElementsByTagName('ul')[0];
var oli=document.getElementsByTagName('li');
var div1=document.getElementsByTagName('div')[0];
oul.innerHTML=oul.innerHTML+oul.innerHTML;
oul.style.width=oli[0].offsetWidth*oli.length+"px";
var time=setInterval(function(){
oul.style.left=(oul.offsetLeft-2)+"px";
if(oul.offsetLeft<=-oul.offsetWidth/2){
oul.style.left=0+"px";
}
},30);
}