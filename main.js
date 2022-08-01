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


// TRAVERSING THE DOM //
/*
var itemList = document.querySelector('#items')

// parentNode
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = '#f4f4f4'
console.log(itemList.parentNode.parentNode.parentNode)

// parentElement
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = '#f4f4f4'
console.log(itemList.parentElement.parentElement.parentElement)


// childNodes
console.log(itemList.childNodes)


console.log(itemList.children)
console.log(itemList.children[1])
itemList.children[1].style.backgroundColor = 'yellow'

// firstChild
console.log(itemList.firstChild)
// firstElementChild
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = 'Hi Guys!'

// lastChild
console.log(itemList.lastChild)
// lastElementChild
console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent = 'Hey Guys!'


// nextSibling
console.log(itemList.nextSibling)
// nextElementSibling
console.log(itemList.nextElementSibling)


// previousSibling
console.log(itemList.previousSibling)
// previousElementSibling
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color = 'green'


// createElement

// Create a div
var newDiv = document.createElement('div')

// add class
newDiv.className ='Hello'

// add id
newDiv.id ='Hello 1'

// add attribute
newDiv.setAttribute('title', 'Hello Div')

// Create text node
var newDivText = document.createTextNode('Hello World')

// add text to div
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')

console.log(newDiv)

newDiv.style.fontSize = '30px'

container.insertBefore(newDiv, h1)
*/


// EVENTS
/*
var button = document.getElementById('button').addEventListener('click', buttonClick)

function buttonClick(e){
    
    console.log('Button clicked')
    document.getElementById('header-title').textContent = 'Changed'
    document.querySelector('#main').style.backgroundColor = '#f4f4f4'
    console.log(e)
    console.log(e.target)
    console.log(e.target.id)
    console.log(e.target.className)
    console.log(e.target.classList)
    var output = document.getElementById('output')
    output.innerHTML = '<h3>' + e.target.id + '</h3>'
    
    console.log(e.type)
    console.log(e.clientX)
    console.log(e.clientY)
    
    console.log(e.offsetX)
    console.log(e.offsetY)

    console.log(e.altKey)
    console.log(e.ctrlKey)
    console.log(e.shiftKey)
    
}



var button = document.getElementById('button')
var box = document.getElementById('box')

button.addEventListener('click', runEvent)
button.addEventListener('dbclick', runEvent)

button.addEventListener('mousedown', runEvent)
button.addEventListener('mouseup', runEvent)

box.addEventListener('mouseenter', runEvent)
box.addEventListener('mouseleave', runEvent)

box.addEventListener('mouseover', runEvent)
box.addEventListener('mouseout', runEvent)

box.addEventListener('mousemove', runEvent)

itemInput.addEventListener('keydown', runEvent)
itemInput.addEventListener('keyup', runEvent)

itemInput.addEventListener('keypress', runEvent)

itemInput.addEventListener('focus', runEvent)
itemInput.addEventListener('blur', runEvent)

itemInput.addEventListener('cut', runEvent)
itemInput.addEventListener('paste', runEvent)

itemInput.addEventListener('input', runEvent)

select.addEventListener('change', runEvent)
select.addEventListener('input', runEvent)

form.addEventListener('submit', runEvent)



function runEvent(e){
    console.log('EVENT TYPE: ' + e.type)
    output.innerHTML = '<h3>MouseX: '+e.offsetX+ '</h3><h3>MouseY: '+e.offsetY+ '</h3>'

    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"

    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"

    console.log(e.target.value)
    document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>'

    e.preventDefault()
}
*/

var itemInput = document.querySelector('input[type="text"]')
var form = document.querySelector('form')
var select = document.querySelector('select')




function runEvent(e){

    console.log('EVENT TYPE: ' + e.type)




}