/// 1 var name = "Assemgul";
if (name == "Assemgul") {
    console.log(Assemgul);
    }
    
//// 2
    var name = "Asim";
    if (name == "Assemgul") {
    console.log(yes);
    }
    else {
        console.log(no);
    }

//// 3
    for (
        var i = 0; 
        i < 11;  
        i++
    ) {
        console.log(i);
    }
    
//// 4
    function sum(p1, p2, p3) {
        var result = p1 + p2 + p3;
        return result;
    }
    
    var result = sum(222, 333, 111);
    
    console.log(result);
    
    var one = 10;
    var two = 20;
    
    function sum(a, b) {
        var result = a + b + one + two;
        return result;
    }
    
    var result = sum(2,2)
    console.log(result);
    
//// 5
    var array = ['Hello', 'loftschool'];
    console.log(array);
    array.push('I learn', 'Javascript');
    console.log(array.length);
    for (var i = 0; i< array.length; i++) {
    console.log(i);
    }
    
//// 6
    var array = [10, 20, 30, 55, 105, 120, 140, 99, 33, 180];
    
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 100){
            console.log(array[i]);
        }
    }
    
//// 7
    
    var obj = {
        name: 'Assemgul',
        lastname: 'Koishina',
        age: 24
    };
    console.log(obj.lastname);
    console.log(obj.name);
    console.log(obj['age']);
    
    obj.name = 'Asim';
    console.log(obj.name);
    
    obj.work = 'frontend developer';
    
    console.log(obj.work);
    

//// 8

function hello(human) {
    var result = 'My name is ' + human.name + ' My lastName is ' + human.lastName + ' I am ' + human.age;

    return result;
}

var obj = {
    name: 'Assemgul',
    lastName: 'Koishina',
    age: 25
}

// console.log(hello(obj))

console.log(result);

























