// Only change code below this line

function myForLoop1(){

  var evenNumbers = "";
  for (var i = 0; i <= 8; i=i+2){
      if(i == 8){
      evenNumbers = evenNumbers + i;
      }
      else{
          evenNumbers = evenNumbers + i + ", ";
      }
  }  
  return evenNumbers;
}

function myForLoop2(){
    var evenInverseNumber = "";
    for(var i = 8; i >= 0; i=i -2){
        if(i == 0){
            evenInverseNumber += i;
        }
        else {
            evenInverseNumber = evenInverseNumber + i + ", ";
        }
    }
    return evenInverseNumber;
    
}
myForLoop1();
myForLoop2();


// Only change code above this line

module.exports = {
    myForLoop1,
    myForLoop2
};
