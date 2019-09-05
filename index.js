const express = require('express');

const app = express();

app.get('/*', (req, res) => res.send('TRAEFIK TEST'));

app.listen(3000);