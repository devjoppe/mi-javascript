let firstName = 'Joakim';
let lastName = 'Ottosson';

let manyNames = ['Sven', 'Kalle', 'Bertil'];

console.log(firstName + ' ' + lastName);

let html = `
    <h2>My name is</h2>
    <p>${firstName}</p>
    <p>${lastName}</p>
    <p>${manyNames[0]}</p>
`;

function myFunction() {
    document.getElementById("myname").innerHTML = html;
}

//console.log(firstName);

firstName = firstName.toUpperCase();

//console.log(firstName);
//console.log(html);

/*$("send").onClick(function(){
    console.log('hejsan');
});*/

let email = 'joakim.ottosson@svensson.com';
let lastEmail = email.lastIndexOf('.')+1;
let langResult = email.slice(lastEmail);

console.log(String(lastEmail).length);

//let stringNumber = String.lastEmail;


if (langResult == 'se') {
    console.log('Välkommen')
} else {
    console.log('Welcome')
};

