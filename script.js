var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Isi data terlebih dahulu!`;

  }else{
    countBmi();
  }
}

function countBmi(){
  var p = [age.value, height.value, weight.value];

  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

  var result = '';
  if(bmi<18.5){
    result = 'Kekurangan berat badan';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Ideal';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Kelebihan berat badan';
     }else if(30<=bmi){
    result = 'Kegemukan (Obesitas)';
    }
  var result2 = ''
  if(bmi<18.5){
    result2 = 'Cara Terbaik untuk menaikkan berat badan adalah dengan mengatur kalori yang dikonsumsi dan rajin-rajin berolah raga <br>';
     }else if(18.5<=bmi&&bmi<=24.9){
    result2 = 'Berat badan anda sudah ideal, terus jaga pola makan dan tetap beraktivitas agar berat badan anda tetap terjaga';
     }else if(25<=bmi&&bmi<=29.9){
    result2 = 'Cara Terbaik untuk menurunkan berat badan adalah dengan mengatur kalori yang dikonsumsi dan rajin-rajin berolah raga <br> jika berat badan anda di kondisi ini maka dianjurkan untuk menurunkan berat badan pada batas ideal';
     }else if(30<=bmi){
    result2 = 'Cara Terbaik untuk menurunkan berat badan adalah dengan mengatur kalori yang dikonsumsi dan rajin-rajin berolah raga <br> jika berat badan anda di kondisi ini maka dianjurkan untuk menurunkan berat badan pada batas ideal';
    }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `<div id="comment">${result}</div> <br>
<span id="result-bmi">Anda Berada dalam Kategori ${result} <br> ${result2}</span>`;

document.querySelector("#result").innerHTML = bmi.toFixed(2);

}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
