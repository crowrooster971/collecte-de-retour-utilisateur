const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const retoursRoutes = require('./routes/retours');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/retours', retoursRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
