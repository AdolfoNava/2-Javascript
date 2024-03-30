
function getName(){
    alert("Hello world!");
    const userName = prompt('What is your name?');
    sayHello(userName);
}
function sayHello(userName){
    alert('Hello ' + userName + '!');
}