module.exports = (sequelize, Sequelize) => {
  const Mov = sequelize.define("vip_movcli", {
    idmov: {
      type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_cliente: {
      type: Sequelize.STRING
    },
    local: {
      type: Sequelize.STRING
    },
    dthrent: {
      type: Sequelize.STRING
    },
    dthrsai: {
      type: Sequelize.STRING
    },
    idstatus: {
      type: Sequelize.STRING
    },
    motbloqueio: {
      type: Sequelize.STRING
    },
    obsacesso: {
      type: Sequelize.STRING
    },
  });

  return Mov;
};