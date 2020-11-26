const controller = {};


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT nombre, mensaje FROM mensaje', (err, mensajes) => {
            if (err) {
                res.json(err);
            }
            console.log(mensajes);
            res.render('mensajes', {
                data: mensajes,


            })

        })
    })
};
controller.add = (req, res) => {

    res.render('add')

};

controller.agregar = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO mensaje set ?', [data], (err, mensajes) => {
            console.log(mensajes);
            res.render('mensajes', {
                data: mensajes
            })
        })
    })

}

module.exports = controller;