module.exports = app => {
  const clientes = require("../controllers/vip_clientes.controller.js");

  var router = require("express").Router();


  router.post("/", clientes.create);


  router.get("/", clientes.findAll);


  router.get("/cpf/:cpf", clientes.findAllCpf);


  router.get("/:id", clientes.findOne);


  router.put("/:id", clientes.update);


  router.delete("/:id", clientes.delete);


  router.delete("/", clientes.deleteAll);

  app.use('/api/clientes', router);
};
