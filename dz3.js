// var userInfo = (a, b) => {
//     return a;
// };

// var info = userInfo(20, 50)

// console.log(info);



// var userFunc = (str = prompt("")) => {
//     if (str.trim()) return alert("Hello!!!");

//     if (str.length < 7) return alert("Min lenght 7")

//     console.log(str);
// };

// userFunc();




function add (a, b, operator) { 
    if (isNaN(num1) || isNaN(num2)) {
           result = "Please, enter both numbers"
} else {
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-"){
        result = num1 - num2;
    } else if (operation === "*"){
        result = num1 * num2;
    } else if (operation === "/"){
        result = num2 !== 0 ? num1 / num2 : "Error! Division by zero";
    } else {
        result = "Unknown operation"
    }
}

document.getElementById('result').innerText = "Result: " + result;
}