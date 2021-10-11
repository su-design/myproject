var regexp=/hello/gi
var greeting="Hello world.Hello hello"

console.log(regexp.test(greeting))
console.log(regexp.exec(greeting))
//regexp=/morning/
console.log(regexp.test(greeting))

console.log(greeting.replace(regexp,'su'))

//phonenumber=+95-9-404060377
//visa card=4687 8520 0088 1698
var reg=/ /gi
var greet="phonenumber=+95 9 404060377"
console.log(greet.replace(reg,'-'))

var dateexp=/\./g
console.log("12.01.2021".replace(dateexp,'-'))

var visa=/ /gi
var gret="visa card=4687 8520 0088 1698"
console.log(gret.replace(visa,'-'))

//case sensitive
//
var exp1=/^Hello$/i
console.log(exp1.test("Hello su hello"))

// var date1=23/01/2021
// var date2=23.01.2021
//metacharacter=>\. \$ \@
var dateexp1=/^\d\d(\.|\/)\d\d(\.|\/)\d\d\d\d$/
console.log(dateexp1.test("23/01.2021"))

//09-404060399
//09404060399

var phexp=/^(\d\d\-\d\d\d\d\d\d\d\d\d)|(\d\d\d\d\d\d\d\d\d\d\d)$/
console.log(phexp.test("09-404060399"))

var phone1=/^([0-9]{8})|([0-9]{2}\-[0-9]{6})$/
console.log(phone1.test("09-203099"))

var phone2=/^0[1-9]{1,2}\-[0-9]{6,9}$/
console.log(phone2.test("02-45668988"))


//095-9429306291
//+95-429306291
//+95-9429306291

var phone3=/^(0[1-9]{1,2})|([+][1-9]{1,2})\-[0-9]{6,10}$/
console.log(phone3.test("+95-9429306291"))

//visa card - 4876-8520-0044-1789
var emails=/^[a-z]+[.+]*[0-9]*\@$/
console.log(emails.test("pu.234@"))

//kyaw_123tun@
//ttun234.20@
//34.khaing@
var email1=/^[a-z]+[_.]*[0-9]*[a-z]+\@|[a-z]+[0-9]*[_.]*[0-9]*\@|[0-9]*[_.]*[a-z]+\@$/
console.log(email1.test("34.khaing@"))