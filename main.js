
  //----------------
 
  function func1(nn1,nn2){

    return nn1+nn2;
  }
  func1(5,10)
  func1(15,10)
  
  //-------------
  
  function avg(a,b){
    let res = (a + b) /2
    return res;
   
  }
  
  
  function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(let i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  
  
  //---------------------------------
  //اقدر استخدم طريقتين للدوال 1
  function hhu(nu) {
    return nu;
  };
  const roundd = hhu(4.5); 
  //------------------------------------
  // الطريقه الثانيه مختصررره 
  const bb = function(j){
    return(Math.round(j))
  };
  bb(5.6)
  //------------------------------------
  const toThePowerOf = function (base, exponent) {
  return(Math.pow(base,exponent));
  };
  
  toThePowerOf(2, 2); // => 4
  toThePowerOf(2, 3); // => 8
  toThePowerOf(9, 2); // => 81
  //------------------------------
  const randomNumber = function () {
    return Math.random();
  };
  
  randomNumber(); // => 0.5052417714491793
  randomNumber(); // => 0.32678224417562673
  randomNumber(); // => 0.43265697184952523
  //-------------------------------
  const oneOrZero = function (number) {
    
    return Math.round;
   
    }
 
  oneOrZero(Math.random()); // => 1
  
  //----------------------------


  /* End Of Fnction

  */

  const randomRange = function (number) {
    if
  };
  
  // 10 and 0 are included
  randomRange(10); // => 10
  randomRange(10); // => 7
  randomRange(10); // => 1
  randomRange(10); // => 0