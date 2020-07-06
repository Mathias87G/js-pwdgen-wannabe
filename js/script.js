var nome = prompt("Inserisci il tuo nome")
console.log(nome)

var cognome = prompt("Inserisci il tuo cognome")
console.log(cognome)

var colore = prompt("Qual è il tuo colore preferito?")
console.log(colore)

document.getElementById("password").innerHTML = "Password: " + nome + cognome + colore + "19"
