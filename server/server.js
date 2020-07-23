const path = require('path');
const express = require('express');
const app = express();
const public_path = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(public_path));

app.get('*', (req, res) => {
	res.sendFile(path.join(public_path, 'index.html'));
});


app.listen(port, () => {
	console.log('Server is up');
});