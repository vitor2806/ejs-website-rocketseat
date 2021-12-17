const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
	const items = [
		{
			title: 'A',
			message: 'rchiteture',
		},
		{
			title: 'W',
			message: 'orldwide',
		},
		{
			title: 'F',
			message: 'unctional',
		},
		{
			title: 'U',
			message: 'nited',
		},
		{
			title: 'L',
			message: 'ogical',
		},
	];

	const subtitle =
		'EJS is a modal languagem to create HTML pages with JavaScript';
	res.render('pages/index', {
		qualities: items,
		subtitle: subtitle,
	});
});

app.get('/about', (req, res) => {
	res.render('pages/about');
});

app.listen(8080); //ouve a porta 8080, o mesmo que dizer ao servidor que ao abrir o app ele deve ser aberto na porta 8080
console.log('Running');
