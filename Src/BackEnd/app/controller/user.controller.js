const userDto = require("../model/dto/user.dto");

/**
 * Obtendrá todos los usuarios registrados en bd
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @author AlejoFlorez0
 */
exports.getAll = (req, res, next) => {

    userDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    "error": err
                });
        }


        notificationHelper.sendSms(std.phone);
        res.status(200).json(
            {
                info: data
            }
        );

    });
}

/**
 * Creará un nuevo usuario
 * @param {Object} req Cuerpo de la petición 
 * @param {Object} res Respuesta
 * @param {*} next 
 */
exports.createUser = (req, res, next) => {

    let std = {
        nroDoc: req.body.nroDoc,
        name: req.body.name,
        firstLastname: req.body.firstLastname,
        secondLastname: req.body.secondLastname,
        email: req.body.email,
        phone: req.body.phone
    };

    userDto.create(std, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    "error": err
                });
        }

        res.status(201).json(
            {
                info: data
            }
        );
    });
}