const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//add a p tag with red text that says "Hey I'm red!"
//Note to self or others, append must happen before getId can be fetched
const para = document.createElement("p");
para.textContent = "Hey I'm red!";
container.append(para);
para.id = "redText";
document.getElementById("redText").style.color = "red";


//add h3 tag with blue text that says "I'm a blue h3!"
const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
container.append(blueH3);
blueH3.id = "blueText";
document.getElementById("blueText").style.color = "blue";

/*
add a div with black border and pink background color with the following inside of it
another h1 tag that says "I'm in a div", a p tag that says "ME TOO";
Hint: after creating the div with create element, append the h1 and p to it before adding it to the container
*/
//will have element and child element, div is parent, h1 and p are siblings and child to div
const content1 = document.createElement("div");
container.append(content1);
content1.id = "childDiv";
//need border 1px, solid, black
document.getElementById("childDiv").style.border = "1px solid black";
document.getElementById("childDiv").style.background = "pink";

//h1 inside new div
const childHead = document.createElement("h1");
content1.append(childHead);
childHead.textContent = "I'm in a div";

//p inside new div
const childPara = document.createElement("p");
content1.append(childPara);
childPara.textContent = "ME TOO";
