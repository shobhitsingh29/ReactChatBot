responseHelper = {
    handleSuccess: function (req, res, next) {
        res.status(200).json(responseHelper.responseObject(200, "ok", req.result, false));
    },
    handleError: function (statusCode, message) {
        return {
            statusCode: statusCode ? statusCode : 500,
            message: message ? message : "error",
            result: {},
            error: true
        }
    },
    responseObject: function (statusCode, message, result, error) {
        return {
            statusCode: statusCode ? statusCode : 200,
            message: message ? message : "ok",
            result: result ? result : {},
            error: error ? error : false
        }
    },
    checkLanguage: function (req, res, next) {
        if (req.params.lang && (req.params.lang.toLowerCase() === 'en' || req.params.lang.toLowerCase() === "hn"))
            next()
        else
            res.status(422).json(responseHelper.handleError(422, 'Invalid language params', null, true));
    }
}
module.exports = responseHelper;
