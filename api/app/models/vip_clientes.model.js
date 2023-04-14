module.exports = (sequelize, Sequelize) => {
  const Clientes = sequelize.define("vip_clientes", {
    id_cliente: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING
    },
    dtnasc: {
      type: Sequelize.STRING
    },
    senha: {
      type: Sequelize.STRING
    },
    mae: {
      type: Sequelize.STRING
    },
    foto: {
      type: Sequelize.STRING
    },
    diasacesso: {
      type: Sequelize.STRING
    },
    cpf: {
      type: Sequelize.STRING
    },
    hriniacesso: {
      type: Sequelize.STRING
    },
    hrfimacesso: {
      type: Sequelize.STRING
    },
    livre_int: {
      type: Sequelize.STRING
    },
    livre_text: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true,
});

  return Clientes;
};