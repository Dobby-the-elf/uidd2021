/*get the month into here to decide code of month

var cont=document.getElementById("jan");
console.log('innerText cont= '+ cont.innerText); 
var codeOfMonth = {jan:'6',feb:'2',mar:'2',apr:'5',may:'0',jun:'3',jul:'5',aug:'1',set: '4',oct:'6',nov:'2',dec:'4'};
*/
/*
var cont=document.getElementById("monthCount");
console.log('innerText cont= '+ cont.innerText); 
var month = parseInt(cont.innerText)+1;
console.log('month test: ' + month);
*/
var month = 3;
var codeOfYear = 5;
var codeOfMonth = [6,2,2,5,0,3,5,1,4,6,2,4];
var dayOfMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

var weekDay= (codeOfYear+parseInt(codeOfMonth[month-1])+1)%7;/*每月一號是星期幾*/
if(weekDay===0)weekDay=7;
console.log(weekDay);

var day=0;

for(var i=1;i<weekDay;i++)document.write("<span class='day'></span>");/*填補空白*/

while(day<dayOfMonth[month-1]){
  day++;
  /*國定假日和週末黃色，其餘白色*/
  if(month===1 && day===1)document.write("<span class='day' style='color:#fffdae'>" + day + "</span>");
  else if(month===2 && day>=10 && day<=16)document.write("<span class='day' style='color:#fffdae'>" + day + "</span>");
  else if(month===3 && day===1)document.write("<span class='day' style='color:#fffdae'>" + day + "</span>");
  else if(month===4 && day>=2 && day<=5)document.write("<span class='day' style='color:#fffdae'>" + day + "</span>");
  else if(month===6 && day===14)document.write("<span class='day' style='color:#fffdae'>" + day + "</span>");
  else if(month===9 && day===(20||21) )document.write("<span class='day' style='color:#fffdae'>" + day + "</span>");
  else if(month===10 && day===11)document.write("<span class='day' style='color:#fffdae'>" + day + "</span>");
  else if(weekDay % 7 < 6 && weekDay % 7 !== 0)document.write("<span class='day'>" + day + "</span>");
  else document.write("<span class='day' style='color:#fffdae'>" + day + "</span>");
  weekDay++;
}

weekDay = (weekDay-1) % 7;//因為while迴圈裡面weekDay++會多執行一次
if(weekDay===0)weekDay=7;
for(var i=0;i<7-weekDay;i++)document.write("<span class='day'></span>");

document.getElementById("monthCount").innerHTML = month;/*更新月份*/
/*console.log('innerText cont= '+ cont.innerText); */