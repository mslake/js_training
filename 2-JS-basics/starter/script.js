/*
var johnTeam = [89,120,103];
var mikeTeam = [116,94,123];
var maryTeam = [97,134,105];
var reducer = (accumulator, currentValue) => accumulator + currentValue;
var johnAve = johnTeam.reduce(reducer) / johnTeam.length;
var mikeAve = mikeTeam.reduce(reducer) / mikeTeam.length;
var maryAve = maryTeam.reduce(reducer) / maryTeam.length;


if(johnAve > mikeAve && johnAve > maryAve) {
    console.log("John's team won")
} else if (mikeAve > johnAve && mikeAve > maryAve){
    console.log("Mike's team won")
} else {
    console.log("Mary's team won")
}

//mikeAve > johnAve ? console.log("Mike's team won") : console.log("John's team won")
//console.log(johnAve);
//console.log(mikeAve);



function tipCalculator(bill){
    var percentage;
    if (bill<50){
        percentage = .2;
    } else if (bill >= 50 && bill < 200){
        percentage = .15;
    } else {
        percentage = .1
    }
    return percentage * bill;
}

var bills = [124,48,268]
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var totalBill = [bills[0]+tips[0], bills[1] + tips[1], bills[2] + tips[2]]            
console.log(tips);
console.log(totalBill);


var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 56,
    height: 1.25,
    calcBMI: function() {
        return this.mass / (this.height * this.height)
    }
};

var mark = {
    firstName: 'Mark',
    lastName: 'Johnson',
    mass: 56,
    height: 1.25,
    calcBMI: function() {
        return this.mass / (this.height * this.height)
    }
};

john.bmi = john.calcBMI()
mark.bmi = mark.calcBMI()

if (john.bmi > mark.bmi) {
    console.log(john.firstName + " " + john.lastName + " has the highest BMI with a value of " + john.bmi)
} else if (mark.bmi > john.bmi) {
    console.log(mark.firstName + " " + mark.lastName + " has the highest BMI with a value of " + mark.bmi)
} else {
    console.log("Both John and Mark have the same BMI.")
}
*/

var john = {
    bills: [124,48,268,180,42],
    tipCalculator: function(bills) {
        tips = []
        total = []
        for (var i=0; i < bills.length; i++){
                if (bills[i] < 50) {
            tips[i] = bills[i]*.2; 
            total[i] = tips[i] + bills[i];   
            } else if (bills[i] >= 50 && bills[i] < 200) {
                tips[i] = bills[i]*.15;  
                total[i] = tips[i] + bills[i];  
            } else {
                tips[i] = bills[i]*.1;
                total[i] = tips[i] + bills[i]; 
            }
        }

    }
};


var mark = {
    bills: [77,375,110,45],
    tipCalculator: function(bills) {
        tips = []
        total = []
        for (var i=0; i < bills.length; i++){
                if (bills[i] < 100) {
            tips[i] = bills[i]*.2; 
            total[i] = tips[i] + bills[i];   
            } else if (bills[i] >= 100 && bills[i] < 300) {
                tips[i] = bills[i]*.1;  
                total[i] = tips[i] + bills[i];  
            } else {
                tips[i] = bills[i]*.25;
                total[i] = tips[i] + bills[i]; 
            }
        }

    }
};

function billAverage (tips){
    var holder = 0;
    for (var i=0; i < tips.length; i++){
        holder = holder + tips[i];
    }
    var average = holder / tips.length;
    return average;
}
john.tipCalculator(john.bills);
john.tips = tips;


mark.tipCalculator(mark.bills);
mark.tips = tips;

console.log(john.tips);
console.log(billAverage(john.tips));
console.log(mark.tips);
console.log(billAverage(mark.tips));

billAverage(john.tips) > billAverage(mark.tips) ? console.log("John's family spent more") : console.log("Mark's Family spent more")