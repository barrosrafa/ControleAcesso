module.exports = app => {
  const mov = require("../controllers/vip_movcli.controller.js");

  var router = require("express").Router();


  router.post("/", mov.create);


  router.get("/", mov.findAll);


  router.get("/cpf/:cpf", mov.findAllCpf);


  router.get("/:id", mov.findOne);


  router.put("/:id", mov.update);


  router.delete("/:id", mov.delete);


  router.delete("/", mov.deleteAll);

  app.use('/api/mov', router);
};
