var students = [];


const  addStudent = (ev)=>{ 
  ev.preventDefault();
  var arrayPoints=[];


  //alert("hello");
var a = document.getElementById('fname').value;
var b =document.getElementById('matematika').value
var c =document.getElementById('informatika').value
var d =document.getElementById('historia').value
var e =document.getElementById('gjeografia').value
console.log(a);

arrayPoints.push(b);
arrayPoints.push(c);
arrayPoints.push(d);
arrayPoints.push(e);
console.log("Vektori i pikeve qe u shtua: " ,arrayPoints);
var addElement={
name: a,
pike: arrayPoints 
}
students.push(addElement);
console.log("Vektori students  me objektet: ", students);
document.querySelector('form').reset();
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addStudent);
});


// Emrat e studenteve
function afishoNames(){
  console.log("Emrat e studenteve :");
  var names=[]
 for (var i=0; i < students.length; i++ ){
 
 var name = students[i].name;
 names.push(name);
 }
 document.getElementById('studentNames').innerHTML=names;
 console.log(names);
 }

//Nr i provimeve

function examsNumber(){
  for (var i=0;i<students.length;i++){
  var examNum= students[i].pike.length;
  
  }
  console.log (examNum);
  document.getElementById('examsNumber').innerHTML=examNum;
  }


//Vlera maksimale.

function maxPoints(){  //https://stackoverflow.com/questions/51661455/getelementbyid-in-a-for-loop-only-displays-the-first-item
  const contents = [];

  for (var i =0 ;i<students.length;i++){ 
  var maxValue = students[i].pike[0];
  
  for (var j=1;j<students[i].pike.length;j++){
    if (maxValue<students[i].pike[j]){
  
      maxValue=students[i].pike[j];
    }
  

  }
  console.log("Vlera max e studentit :", students[i].name ,"eshte ", maxValue);
  //document.getElementById('maxValueStudent').innerHTML= "Vlera max e studentit :", students[i].name ,"eshte ", maxValue;
  
 contents.push ( `<div>Vlera max e studentit : ${students[i].name} eshte  ${maxValue}</div>` )
 
  }
  const el= document.getElementById('maxValueStudent');
  el.innerHTML=contents.join('\n');
 console.log("The array content is : ",contents);  
  }

//Vlera minimale,

function minPoints(){
const contents = [];

  for (var i =0 ;i<students.length;i++){ 
  
  var minValue = students[i].pike[0];
  for (var j=1;j<students[i].pike.length;j++){
    if (minValue>students[i].pike[j]){
  
      minValue=students[i].pike[j];
    }
  
  }
  console.log("Vlera min e studentit :", students[i].name ,"eshte ", minValue);

  contents.push ( `<div>Vlera min e studentit : ${students[i].name} eshte  ${minValue}</div>` )
  }
  const el= document.getElementById('minValueStudent');
  el.innerHTML=contents.join('\n');
 console.log("The array content is : ",contents);  
  }



function mesatarja(){
    console.log("Hello");
  //var arrayMes=[]
  const contents = [];
  for (var i=0;i<students.length;i++){
  var sum=0;
  for (var j=0;j<students[i].pike.length;j++){
  sum+=students[i].pike[j]/students[i].pike.length;
  }
  console.log("Mesatarja e " ,students[i].name," is ",  sum);
  // document.getElementById('averageStudent').innerHTML=  sum; 
  contents.push ( `<div>Mesatarja e studentit : ${students[i].name} eshte  ${sum}</div>` )

  }
  const el= document.getElementById('average');
  el.innerHTML=contents.join('\n');
 console.log("The array content is : ",contents);  

  }



  

  function avarageGroup(){

    var array=[];
  for (var i=0;i<students.length;i++){
    
  
    var sum=0;
    for (var j=0;j<students[i].pike.length;j++){
    sum+=students[i].pike[j]/students[i].pike.length;
    
    }
    array.push(sum);
    var studentNr =students.length;
  }
  
  
    console.log( "Vektori me 3 mesataret" ,array);
    console.log ("Numri i studenteve eshte : " ,studentNr  )
    var sum1=0;
    for (z=0; z<array.length;z++){
    sum1+= array[z];
  
    }
   var average = sum1/studentNr;
  console.log("Mesatarja eshte " , average);
  document.getElementById('averageStudent').innerHTML=average;
  
  }