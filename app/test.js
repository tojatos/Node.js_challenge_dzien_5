const express = require('express');
const app = express();

app.get('/', (req, res) => { //Strona główna
    res.send(`<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`);
});

// app.get('/css/style.css', (req, res) => { //Odnośnik do CSSa
//     res.setHeader('content-type', 'text/css'); //Trzeba ręcznie ustawić typ zawartości, żeby przeglądarka faktycznie ziterpretowała nasz tekst jako CSS
//     res.send(`h1{
//     color : green;
// }`);
// });

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
