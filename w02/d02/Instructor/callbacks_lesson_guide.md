#Callbacks: Passing Procedures as Arguments

##Function Review
- Functions are procedures/subprograms/subroutines/methods. They allow programmers to to define well-defined modules of code.
- Functions allow a programmer to use a well-defined routine multiple times
- Functions use arguments as **"input"**
- If required, functions use a ```return``` statement as **"output"** (not the *see it on the screen* type of output). Data that should be returned to the location that invoked the method should be sent via a ```return``` statment


##Review Problem
- Write a Mean function that expects an array of numbers as an argument.
- Add an array of grades to each student in the Classroom object you created this morning. 
- Use the Mean function to output the average grade for each student. You should use descriptive output, i.e. "Student name in soandso class has an average grade of XXX"



##Functions are First-Class Objects
In JavaScript, functions are first-class objects. That means that you can treat them as other objects:
```var procedure = function outputPoem(){
        alert("Mary Had a Little Lamb");
        }

    console.log("data type of the procedure variable:", typeof(procedure));
    console.log("contents of the procedure variable:", procedure);
    console.log("name of the procedure referenced by the procedure variable:", procedure.name);```

Importantly, you can pass a function as an argument to another function. Check out callback_demo.js

##Write a Mean Method
Finding the mean of the 




##Arrays and ```for``` loops
A ```for``` loop is an excellent tool for repeating code. Arrays are excellent tools for organizing lists of related data. The two often go hand-in-hand. 

Some array operations are so common that JavaScript provides built-in ways of expressing them succinctly:

##The ```foreach``` Array Method

- You can apply an operation to every element in an  array by using the **```foreach```** method. 
- The ```foreach``` method takes an *operation* as an argument.
- In other words, the ```foreach``` method requires a *function* as an argument. That function gets applied to every element in the array.



##Other Array Methods that take Callback Functions
These methods are more specific than the ```foreach``` method. Each of the following methods modify data from the original array and return a new array with transformed data . 

1) **```filter```**
- The ```filter``` method returns an array filled only with elements from the original array that pass a specific test


2) **```map```**
- The ```map``` method returns an array with the *transformed* results of the original array, according to the operation specified as an argument


