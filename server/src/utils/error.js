export const errorHandler = (statusCode, errMessage, errObj = undefined) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = errMessage;
    error.error = errObj
    return error;
}