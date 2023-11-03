const arr= []

console.log(arr)

     
const elem= ['object', 'array', 'conditionals', 'functions', 'elements', 'strings']
console.log(elem)

console.log(elem.length)

console.log(elem[0], elem[2], elem[5])


const mixedDataTypes=[
    {Name:'sharfu bhai',
     rollNo: 1,
     class: 1,
},
    {Name:'jabbar',
     rollNo: 2,
     class: 7,
},
    {Name:'faqrUddin',
     rollNo: 3,
     class: 6,
},
    {Name:'QamrUddin',
     rollNo: 4,
     class: 8,
},
    {Name:'jamal',
     rollNo: 5,
     class: 5,
},
    {Name:'khan',
     rollNo: 6,
     class: 10,
}
]

console.log(mixedDataTypes.length)

const  itCompanies=['Facebook', 'Google', 'Microsoft',
    'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies);
console.log(itCompanies.length);

console.log(itCompanies[0]);

console.log(itCompanies[Math.ceil(itCompanies.length/2)]);

console.log(itCompanies[6]);


console.log('facebook'.toUpperCase());
console.log('Google'.toUpperCase());
console.log('Microsoft'.toUpperCase());
console.log('Ibm'.toUpperCase());
console.log('Oracle'.toUpperCase());
console.log('Amazon'.toUpperCase());


let joinsentence= ['Facebook','Google', 'Microsoft', 'Apple', 'IBM','Oracle', 'and', 'Amazon','are', 'big', 'IT', 'companies']
console.log(joinsentence.join())

if (joinsentence.includes('Microsoft')) {
    console.log(true)
}
else {
    console.log('not found')
}


var shoppingCart = ['Milk','Coffee','Tea','Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)


var shoppingCart = ['Milk','Coffee','Tea','Honey']
shoppingCart.push('Sugar')
console.log(shoppingCart)



var shoppingCart = ['Milk','Coffee','Tea','Honey']
shoppingCart.splice(3, 1)
console.log(shoppingCart)


var shoppingCart = ['Milk','Coffee','Tea','Honey']
// shoppingCart.replace
console.log(shoppingCart.replace('Tea', 'GreenTea'))

