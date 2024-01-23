module.exports.uploadFile = async (req, res, next) => {
    try {
        console.log("harshit");
        // if (!req.file) throw new Error(constants.MESSAGES.UPLOADING_ERROR);
        if (!req.file) throw new Error("NOt found");
        // console.log(err);
        res.status(200);
        return res.json({ status: "success" }); // res.send
    } catch (error) {
        next(error);
    }
};