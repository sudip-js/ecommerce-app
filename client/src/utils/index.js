export const shortenText = (text = '', maxLength = 30) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
}