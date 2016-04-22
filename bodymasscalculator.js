// Assign an event to the element submit
var event1 = document.getElementById("submit");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', calculate, false);
// Create arrays to define measure and alert level values
var measure = ["Underweight","Normal","Overweight","Obese"];
var alert_level = ["#ffff00","#00ff00","#ff8000","#ff0000"]

// Create a function which gathers the value of forms height and weight, calculate BMI and display on screen
function calculate() {
    // Create the variables for weight and height, and an array to store the result
    var result = [];
    var weight = parseInt(document.getElementById("weight").value);
    var height = parseInt(document.getElementById("height").value);
    
    // Create a variable to calculate the body mass index from height and weight variables
    var bmi = (weight/Math.pow((height/100),2));
    // Push a text combined with the calculated BMI into the result array
    result.push("Your body index is: " + bmi.toFixed(2));
    // Use a switch to compare the BMI value to different intervals to find the measure and the alert level, then push them into result array
    switch(true) {
        case (bmi > 0 && bmi <= 18.5):
            result.push(measure[0],alert_level[0]);
            break;
        case (bmi > 18.5 && bmi <= 24.9):
            result.push(measure[1],alert_level[1]);
            break;
        case (bmi > 24.9 && bmi < 30):
            result.push(measure[2],alert_level[2]);
            break;
        case (bmi >= 30):
            result.push(measure[3],alert_level[3]);
            break;
    }
    // Add a text before measure variable and add color matching alert level
    result[1] = "You are " + '<span style="color: ' + result[2] + ';">' + result[1] + '</span>';
    // Remove alert_level value from array to prevent displaying onscreen
    result.pop();
    // Display the array onto screen by using the div id results
    document.getElementById("results").innerHTML = result.join("<br />");
}