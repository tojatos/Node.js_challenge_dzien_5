const express = require('express');
const app = express();

let imie = "";

app.get('/name/set/:imie', (req, res) => {
	imie = req.params.imie;
	res.send("Pomyślnie ustawiono imię.");
});

app.get('/name/show', (req, res) => {
	res.send(imie)
});

app.get('/name/check', (req, res) => {
	res.send(imie==""?"Imię nie jest jeszcze ustawione":"Imię już jest ustalone!")
});
app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
