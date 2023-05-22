let obj={fname:"abc",age:30,dob:{
                                    day:26,month:08,year:1993}
                              }

//console.log(obj)

let obj1=obj
obj1.age=60
//console.log(obj1)

let obj2={...obj}
obj2.age=80
console.log(obj2)
console.log(obj)

