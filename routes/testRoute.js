const router = require('express').Router();

router.get('/', (req, res) => {
const err = new Error('Database connection failed');
err.severity = 'critical';
throw err;
});

module.exports = router;