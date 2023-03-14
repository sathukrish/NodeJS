const sayHello = function (name){
    console.log ('Hello '+ name);
}

const multiply = function (a, b){
    multi = a * b;
    return multi;
}

const sum = function (e, f){
     sumNum = e+f;
    return sumNum;
}

const div = function (a, b){
    divNum = a / b;
    return divNum;
}

module.exports = {sayHello, multiply, sum, div}