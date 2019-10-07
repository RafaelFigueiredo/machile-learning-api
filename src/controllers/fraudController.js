const database = require("../database")

// POST (CREATE)
exports.predict = (req, res, next) => {
    database.exec("SELECT * FROM Beneficio1", res)
    //res.status(201).send('Requisição recebida com sucesso!');
};

// PUT (UPDATE)
exports.fit = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
