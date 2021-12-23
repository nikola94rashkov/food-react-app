export const validateEmail = (inputText) => {
    if (/(^\w.*@\w+\.\w)/.test(inputText)) {
        return true;
    } else {
        return false;
    }
}