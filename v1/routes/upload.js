const router = require("express").Router();
const uploadService = require("../../services/uploadServices");
const Controller = require('../controller');

router.post('/uploadfile', uploadService.upload.single('file'), Controller.UploadController.uploadFile);

module.exports = router;