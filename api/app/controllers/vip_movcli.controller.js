const db = require("../models");
const Mov = db.mov;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const mov = {
    idmov: req.body.idmov,
    id_cliente: req.body.id_cliente,
    local: req.body.local,
    dthrent: req.body.dthrent,
    dthrsai: req.body.dthrsai,
    idstatus: req.body.idstatus,
    motbloqueio: req.body.motbloqueio,
    obsacesso: req.body.obsacesso
  };

  Mov.create(mov)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Clientes"
      });
    });
};

exports.findAll = (req, res) => {

  Mov.findAll({ })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Clientes."
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  Mov.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: 'Cannot find Clientes with id=${id}.'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Clientes with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Mov.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Clientes was updated successfully."
        });
      } else {
        res.send({
          message: 'Cannot update Clientes with id=${id}. Maybe Clientes was not found or req.body is empty!'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Clientes with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Mov.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Clientes was deleted successfully!"
        });
      } else {
        res.send({
          message: 'Cannot delete Clientes with id=${id}. Maybe Clientes was not found!'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Clientes with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Mov.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: '${nums} Clientes were deleted successfully!' });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Clientes."
      });
    });
};

exports.findAllCpf = (req, res) => {
  Mov.findAll({ where: { cpf: req.params.cpf } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Clientes."
      });
    });
};
