export const isEmptyValidator = (value) => {
    if(value) return undefined;
    else return 'Поле не должно быть пустым';
}

export const lengthValidator = (value) => {
    if(value.length < 50) return undefined;
    else return 'Длина не более 50 символов';
}