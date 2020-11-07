//Question 1
let possibleAnswer=["It is certain","As i see it, yes", "Reply Hazy,try again","Don't count on it", "It's decidedly so", "Most likely","Ask again later",
"My reply is no","Without a doubt", "Outlook good","Better not tell you now","My sources say no","Yes-definitely",
"Yes", "Cannot predict now","Outlook not so good", "You may rely on it", "signs point to yes","Concentrate and ask again","very doubtful"]

let QuestionToAsk = (question) => {
    let i = Math.floor((Math.random() * 20));
    return Question: ${question}?
Answer: ${possibleAnswer[i]}.;    
}
console.log(QuestionToAsk("question"));

//End

//Question 2
var x=num;
var y=length;

const arrayofNum = (x , y){
const result =[];
for (let i = 1; i <= y; i++){
    result.push(x * 1);
}

return result;
};

arrayofNum(9, 5);

//End

//Question 3
var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var list = fibonacci_series(n - 1);
    list.push(list[list.length - 1] + list[list.length - 2]);
    return list;
  }
};

 console.log(fibonacci_series(8));

 //End