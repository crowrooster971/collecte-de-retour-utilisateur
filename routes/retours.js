const express = require('express');
const router = express.Router();

// Modèle de retour d'utilisateur (temporaire)
let retours = [];

// Route pour soumettre un retour
router.post('/', (req, res) => {
    const retour = req.body;
    retours.push(retour);
    res.status(201).json({ message: 'Retour ajouté avec succès', retour });
});

// Route pour récupérer tous les retours
router.get('/', (req, res) => {
    res.json(retours);
});

module.exports = router;
