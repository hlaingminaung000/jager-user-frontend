const arr = {name: "hlaingminaung",age: "20"}
const newArr = {name: "aungzar",age: "21",style: "not cool"}

const new2Arr = {...arr,...newArr}
console.log(new2Arr)