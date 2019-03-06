var leftValue = undefined;
var operator = undefined;
var rightValue = undefined;
var output = undefined;

var leftValueDigits = []
var leftValueString = undefined
var finalLeftValue = undefined

var rightValueDigits = []
var rightValueString = undefined
var finalRightValue = undefined

var numbers = document.getElementsByClassName("number")
for (i=0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    if (leftValue == undefined && operator == undefined)
      {leftValue = Number(this.innerText)
        leftValueDigits.push(leftValue)
        finalLeftValue = leftValue
      document.getElementById("left_value").innerHTML = leftValue}
    
      else if  (leftValue !=undefined && operator ==undefined)
    if this.innnerTest {leftValue = Number(this.innerText)
      leftValueDigits.push(leftValue);
      leftValueString = leftValueDigits.join('')
      finalLeftValue = Number(leftValueString)
      document.getElementById("left_value").innerHTML = finalLeftValue
    }


    else if (leftValue != undefined && operator != undefined && rightValue == undefined)
      {rightValue = Number(this.innerText)
        rightValueDigits.push(rightValue)
        finalRightValue = rightValue
        document.getElementById("right_value").innerHTML = rightValue}
    

      else if (rightValue != undefined)
      {rightValue = Number(this.innerText)
        rightValueDigits.push(rightValue);
        rightValueString = rightValueDigits.join('')
        finalRightValue = Number(rightValueString)
        document.getElementById("right_value").innerHTML = finalRightValue}
  })
}

var operators = document.getElementsByClassName("operator")
for (i=0; i < operators.length; i++) {
operators[i].addEventListener("click", function() {
  operator = this.innerText
  document.getElementById("operator").innerHTML = operator
})
}

var equals = document.getElementById("equals")
equals.addEventListener("click", function() {
if (operator == "/")
{output = FinalLeftValue / finalRightValue
  document.getElementById("output").innerHTML = "= " + output}
  else if (operator == "*")
  {output = finalLeftValue * finalRightValue
    document.getElementById("output").innerHTML = "= " + output}
    else if (operator == "+")
    {output = finalLeftValue + finalRightValue
      document.getElementById("output").innerHTML = "= " + output}
      else if (operator == "-")
      {output = finalLeftValue - finalRightValue
        document.getElementById("output").innerHTML = "= " + output}
});

var clear = document.getElementById("clear")
clear.addEventListener("click", function() {
  leftValue = undefined;
  operator = undefined;
  rightValue = undefined;
  output = undefined;
  finalLeftValue = undefined;
  finalRightValue = undefined;
  leftValueDigits = []
  leftValueString = undefined
  rightValueDigits = []
  rightValueString = undefined
  document.getElementById("right_value").innerHTML = " "
  document.getElementById("output").innerHTML =" "
  document.getElementById("left_value").innerHTML =" "
  document.getElementById("operator").innerHTML =" " 
});