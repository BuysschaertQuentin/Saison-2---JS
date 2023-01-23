console.log("Coucou les starship")

//alert('Bienvenue dans l\'univers JS')   =   Pop up bloquant//

//la fonction prompt affiche une boite de dialogue bloquante On peut récupérer la réponse avec const response//

//prompt('Est ce que ça va ?')//

/*const lastname = prompt('Quel est ton nom ?');
console.log(lastname); 

const firstname = prompt('Quel est ton prénom ?');
console.log(firstname);

const âge = prompt('Quel est ton âge ?');
console.log(âge);

const message = ('Bonjour ' + lastname + ' ' + firstname + ', vous avez ' + âge + ' ans');
const message2 = `Bonjour ${lastname} ${firstname}, vous avez ${âge} ans`;

console.log(message, message2);*/

/*let response = confirm('ça va')
if (response == true) {
    message = 'Super';
  } else {
    message = 'répond stp';
  }
  alert message;

console.log(response)*/

/*const response = confirm('ça va')
if (response) {
    result = 'Super';
  } else {
    result = 'répond stp';
  }
  console.log(result);*/

const play = confirm(`Voulez-vous jouer à un jeu ?`)
if (play === true)    
    {result = `let's go`;
}
else 
    {result = `Dommage`;
}
alert(result);

