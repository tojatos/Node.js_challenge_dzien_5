const express = require('express');
const app = express();

app.use(express.static('./public/zadanieDnia/'));

let votes = {
	yes: {val: 0},
	no: {val: 0},
	maybe: {val: 0}
};
let addVoteHandler = (route, variable) => {
	app.get(route, (req, res) => {
		variable.val++;
	  res.send("Dziękujemy za głos!");
	});
}
addVoteHandler('/vote/yes', votes.yes);
addVoteHandler('/vote/no', votes.no);
addVoteHandler('/vote/maybe', votes.maybe);
// app.get('/vote/yes', (req, res) => {
// 	votes.yes++;
//   res.send("Dziękujemy za głos!");
// });
//
// app.get('/vote/no', (req, res) => {
// 	votes.no++;
//   res.send("Dziękujemy za głos!");
// });

app.get('/votes/check', (req, res) => {
	let results = `
	Yes: ${votes.yes.val}
	No: ${votes.no.val}
	Maybe: ${votes.maybe.val}
	`;
  res.send(results);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
