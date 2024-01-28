// const errorFunction = require("../../common/errorHandler");
// const { validateUser } = require("./userValidationSchema");

// const userValidation = async (req, res, next) => {
// 	const payload = {
// 		username: req.body.username,
// 		email: req.body.email,
// 		password: req.body.password,
// 	};

// 	const { error } = validateUser.validate(payload);
//     if (error) {
// 	    res.status(406);
//     	return res.json(
// 		errorFunction(true, `Error in User Data: ${error.message}`)
// 	);
//     } 
//     else {
// 	    next();
//     }
// }

// module.exports = userValidation;