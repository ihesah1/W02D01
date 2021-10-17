const addToArray = function (array, string) {
   array.push(string);
   return array;
   
  };
  addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
  addToArray(["Hello", "John", "i", "am"], "Jane"); // => ["Hello", "John", "i", "am", "Jane"]

//----------------------

const convertToString = function (array) {

    return array.join(" ");
  };
  convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"
  convertToString(["Hello", "John", "i", "am", "Jane"]); // => "Hello John i am Jane"
  
  
  

const updateValue = function (array, index, value) {
    if (array.length <= index) {
      return "there is no element to updated in this index";
      //هنا اذا كان الاندكس اكبر  
    }
    else 
    
    {
      array[index] = value; //هنا بيسوي ابديت اذا الاندكس اصغر
      return array; 
    }
  };
  updateValue([10, 20, 30], 5, 50); // => "there is no element to updated in this index"
  updateValue([1, 2, 3], 0, 10); // => [10, 2, 3]
  updateValue([1, 2, 3], 1, 10); // => [1, 10, 3]
  
  
const onlyString = function (array) {

    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "string") {
        newArray.push(array[i]);
      }
    } 
    return newArray;
  }; 
  onlyString(["one", 12, "hi", true, 88, "12"]); // => ["one","hi","12"]
  onlyString([10, 20, 30, 40, 50, 60, false]); // => []
  
  



const users = [

    ["Jane", "123456"],
  
    ["admin", "abc123"],
  
  ];
  
  
  
  
  const users = [ 
    ["Jane", "123456" ],
    ["admin", "abc123" ],
]; 
const login = function (username, password) {
  if(username == users[0][0] && password == users[0][1])
  {
     console.log("Login Successful");
  }
  else if (username == users[1][0] && password == users[1][1])
  {
      console.log("Login Successful");
  }
  else {
      console.log("Login Faild");
  }
}; 



const maximumNumber = function (numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  };
  maximumNumber([0, 5, 2, 10, 8, 6]); // => 10
  maximumNumber([0, 5, 6]); // => 6

  
function reversString (string) {
    const arr = string.split();
    const rev = arr.reverse(); 
    console.log(rev);
}

reversString("Hello")

  