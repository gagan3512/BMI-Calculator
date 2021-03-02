function bmiCalculator (weight, height) {
 var value=weight/(height*height);
    if(value<18.5)
     return ("Your BMI is "+value+ ", so you are underweight.");
     if(value>=18.5 && value<24.9)
     return ("Your BMI is "+value+ ", so you have a normal weight.");
     else
     return ("Your BMI is "+value+ ", so you are overweight.");
}
