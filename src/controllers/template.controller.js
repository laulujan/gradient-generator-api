const db = require("../config/database");

// ==> Create new 'Template' method:

exports.createTemplate = async (req, res) => {
  const { name, author, gradient_type, direction, first_color, second_color } = req.body;

  const { rows } = await db.query(
    "INSERT INTO templates ( name, author, gradient_type, direction, first_color, second_color) VALUES ($1, $2, $3, $4, $5, $6)",
    [ name, author, gradient_type, direction, first_color, second_color]
  );

  res.status(201).send({
    message: "Template successfully created!",
    body: {
      template: { name, author, gradient_type, direction, first_color, second_color }
    },
  });
};

// ==> List all 'Templates':
exports.listAllTemplates = async (req, res) => {
    const response = await db.query('SELECT * FROM templates ORDER BY name ASC');
    res.status(200).send(response.rows);
};

// ==> Find 'Template' by ID:
exports.findTemplateById = async (req, res) => {
    const templateId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM templates WHERE id = $1', [templateId]);
    res.status(200).send(response.rows);
};

// ==> Find 'Template' by name:
exports.findTemplateByName = async (req, res) => {
    const templateName = req.params.name;
    const response = await db.query('SELECT * FROM templates WHERE name ILIKE $1', [templateName+"%"]);
    res.status(200).send(response.rows);
};