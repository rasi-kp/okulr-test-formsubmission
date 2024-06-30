const express = require('express');
const router = express.Router();
const {submitForm} = require('../controller/formcontroller');
const upload = require('../middlewares/multer');

router.post('/formsubmit', upload.single('pdf'), submitForm);

module.exports = router;
