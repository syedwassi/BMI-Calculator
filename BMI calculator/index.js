function calculateBmi(){
    // get input values
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    // convert Height in meters
    let heightInMeters = height / 100; 
    let bmi = weight / (heightInMeters * heightInMeters);
    document.getElementById('result').innerText = bmi.toFixed(2);

    // checking BMI categories 



if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById('result').innerText = bmi.toFixed(2) + ' (Healthy Range)';
    
} else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById('result').innerText = bmi.toFixed(2) + ' (Overweight)';
    

} else if (bmi >= 30 && bmi <= 39.9) {
    document.getElementById('result').innerText = bmi.toFixed(2) + ' (Obesity)';
   

} else if (bmi >= 40) {
    document.getElementById('result').innerText = bmi.toFixed(2) + ' (Severe Obesity)';
   

} else if(bmi <= 18.5){
    document.getElementById('result').innerText = bmi.toFixed(2) + ' (UnderWeight)';
   
}else{
    document.getElementById('result').innerText = bmi.toFixed(2) + ' (Fields cannot be empty)';

}

};

// clear input Fieldss
function clearFields(){

    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerText = '';
}
  


