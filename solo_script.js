// ! ! !
// Three Bugs

//added [i] to focus on one item at a time to line 22
//added math.round to round the decimal to the closest number to line 50
//got rid of -1 on line 80


var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);//added [i] to focus on one item at a time
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  

  var newArray = [];
//console.log(newArray);
  newArray[0] = array[0];
  //newArray.push(array[0]);
  //console.log(newArray);
  var employeeNumber = array[1];
  var baseSalary = array[2];
  var reviewScore = array[3];
  console.log(baseSalary);

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }
//not working(returned as NaN): console.log(bonus);
  newArray[1] = bonus;
  //console.log(newArray[1]);

  newArray[2] = Math.round(baseSalary * (1.0 + bonus));//added math.round to round the decimal to the closest number
  //console.log(newArray[2]);

  newArray[3] = baseSalary * bonus;
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;

}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;//got rid of -1
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}
//console.log(getYearAdjustment("6510"));
//this function works
function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;

} 

