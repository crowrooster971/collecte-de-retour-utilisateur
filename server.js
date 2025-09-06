const express = require('express');
const cors = require('cors');
const retoursRoutes = require('./routes/retours');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/retours', retoursRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});