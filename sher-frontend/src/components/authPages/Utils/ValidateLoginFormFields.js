export const validateLoginFormFields = ({mail, password}) => {
    return  validateMail(mail) && validatePassword(password);
};

const validateMail = (mail) => {
    return String(mail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePassword = (password) => {
    return password.length > 6 && password.length <= 12;
};