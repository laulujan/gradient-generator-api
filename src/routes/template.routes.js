const router = require('express-promise-router')();
const templateController = require('../controllers/template.controller');


// ==> Create NEW template route : (POST): localhost:3000/api/templates
router.post('/templates', templateController.createTemplate);

// ==> List all templates: (GET): localhost:3000/api/templates
router.get('/templates', templateController.listAllTemplates);

// ==> Find Template by name: (GET): localhost:3000/api/templates/name/:name
router.get('/templates/name/:name', templateController.findTemplateByName);

// ==> Find Template by id: (GET): localhost:3000/api/templates/:id
router.get('/templates/:id', templateController.findTemplateById);


module.exports = router;