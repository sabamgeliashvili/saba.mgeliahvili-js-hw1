// TASK1


let  user = {
    firstname: 'ana',
     age: 28,
   };

   let  user2 = {
    firstname: 'levani',
     age: 21,
   };
   let difference = user.age - user2.age  /////// or ///////  let difference = user2.age / 3
   console.log("ana levanze", + difference + "wlit ufrosia");
   let checkUsertype = typeof user;
   console.log(typeof checkUsertype)
   

// // TASK 2

let names = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
let middleElement = names[4]
console.log(middleElement)

// TASK 3

let student = {
firstname:"ann",
lastname:"smith",
age: 22,
subjects: ['math','english','biology','geography','history'],
roommate: {
fullname: 'helen jackson',
age: 19,
},
};
for (let i = 0; i++;); {
    console.log([student.subjects]);
   }

let fullname = {
    roommate1: {
        fullname: 'ann smith'
    },
    roommate2: {
        fullname: 'helen jackson'
    },
};
let result = 'ann is 22 years old student her roommate is helen jackson';
student.information = result;
console.log(student);

let result2 = 'helen is 19 years old student her roommate is ann smith'
student.information = result
console.log(student.roommate, result2)


// // TASK 4

let objects = ["Banana", "Orange", "Apple", "Mango",2,12]
let i = 0;
while (i < 4) {
    console.log(objects[i]);
    i++;
}


// // // // TASK 5


let numbers = [12,23,43,11,9,2,121,90];
if (numbers > 31, numbers % 2 == 0); {
    console.log('Element is greater than provided value and is EVEN');
} if (numbers < 31, numbers % 2 == 1); { 
    console.log('Element is less than provided value and is ODD');
}
