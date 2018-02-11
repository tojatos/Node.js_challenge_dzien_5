const express = require('express');
const app = express();

app.get('/:l1/:l2', (req, res) => { //Strona główna
	let l1 = req.params.l1;
	let l2 = req.params.l2;
	let result = parseInt(l1)+parseInt(l2);
	console.log(result);
  res.send(result.toString());
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
