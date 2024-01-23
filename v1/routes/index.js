const router = require("express").Router();
const UsersRoutes = require("./user");
// const AdminRoutes = require("./Admin");
const uploadRoutes=require("./upload");

// router.use("/Admin", AdminRoutes);
router.use("/User", UsersRoutes);
router.use("/upload",uploadRoutes);

module.exports = router;