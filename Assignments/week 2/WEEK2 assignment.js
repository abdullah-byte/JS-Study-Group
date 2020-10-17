var score= prompt("what is your score");
if(score >= 70 && score<=100){
    alert("Your score is A");
}else if(score >= 60 && score<=69){
    alert("Your score is B");
}else if(score >= 50 && score<=59){
    alert("Your score is C");
}else if(score >= 45 && score<=49){
    alert("Your score is D");
}else if(score >= 40 && score<=44){
    alert("Your score is E");
}else if( score<=40){
    alert("Your score is F");
}    
else(){
    alert("invalid");
}


var phValue =prompt("Please enter a phValue");
if (phValue >7 && phValue <=14){
    alert("It is Alkaline");
}
else if(phValue >= 0 && phValue <7){
    alert(" It is Acid");
}
else if(phValue == 7){
    alert("It is Neutral");
}
 else if (phValue > 14){
     alert("invalid");
 }