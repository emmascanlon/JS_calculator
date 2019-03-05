var leftValue = undefined;
var operator = undefined;
var rightValue = undefined;
var output = undefined;

var numbers = document.getElementsByClassName("number")
for (i=0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    if (leftValue == undefined)
      {leftValue = Number(this.innerText)
      document.getElementById("left_value").innerHTML = leftValue}
    else 
      {rightValue = Number(this.innerText)
        document.getElementById("right_value").innerHTML = rightValue}
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
{output = leftValue / rightValue
  document.getElementById("output").innerHTML = "= " + output}
  else if (operator == "*")
  {output = leftValue * rightValue
    document.getElementById("output").innerHTML = "= " + output}
    else if (operator == "+")
    {output = leftValue + rightValue
      document.getElementById("output").innerHTML = "= " + output}
      else if (operator == "-")
      {output = leftValue - rightValue
        document.getElementById("output").innerHTML = "= " + output}
});