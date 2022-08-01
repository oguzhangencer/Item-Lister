//EXAMINE THE DOCUMENT OBJECT //

/*
console.dir(document)
console.log(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
document.title = 123
console.log(document.doctype)
console.log(document.head)
console.log(document.scripts)
console.log(document.all[10])
document.all[10].textContent = 'HI'
console.log(document.forms)
console.log(document.links)
*/

// GET ELEMENT ID //
/*
console.log(document.getElementById('header-title'))
var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')
console.log(headerTitle)

headerTitle.textContent = 'Hello'
headerTitle.innerHTML = 'Goodbye'
console.log(headerTitle.textContent)
headerTitle.innerHTML = '<h3>Hello</h3>'

headerTitle.style.borderBottom = 'solid 4px #098'
*/

// GET ELEMENT CLASS NAME //
/*
var items = document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[0])
items[0].textContent = 'Hola'
items[0].style.fontWeight = 'bold'
items[1].style.backgroundColor = 'lightgreen'
items[0].style.backgroundColor = 'lightyellow'

Gives error
items.style.backgroundColor = '#f4f4f4'

for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4'
}
*/

// GET ELEMENT BY TAG NAME //
/*
var li = document.getElementsByTagName('li')
console.log(li)
console.log(li[0])
li[0].textContent = 'Hola 2'
li[0].style.fontWeight = 'bold'
li[1].style.backgroundColor = 'green'
li[0].style.backgroundColor = 'yellow'

for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4'
}
*/

//QUERY SELECTOR //
/* 
var header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px #ccc'

var input = document.querySelector('input')
input.value = ('Input a value')

var submit = document.querySelector('input[type = "submit"]')
submit.value = 'SEND'

var item = document.querySelector('.list-group-item')
item.style.color = 'red'

var lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'blue'

var secondItem = document.querySelector('.list-group-item:nth-child(2')
secondItem.style.color = 'coral'
*/
// QUERY SELECTOR ALL //
/*  
var titles = document.querySelectorAll('.title')

console.log(titles)
titles[0].textContent = 'Hello'

var odd = document.querySelectorAll('li:nth-child(odd)')
var even = document.querySelectorAll('li:nth-child(even)')

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4'
    even[i].style.backgroundColor = '#ccc'
}
*/