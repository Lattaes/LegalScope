import { validationResult } from "express-validator";

const Validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let errorObj = {};
        errors.array().forEach((err) => {
            errorObj[err.param] = err.msg;
        });
        return res.status(422).json({ 
            status: 'failed',
            errors: errorObj
        });
    }
    next();
};
export default Validate;