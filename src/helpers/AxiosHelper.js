import {showMessage} from 'react-native-flash-message';

const toCss = (json) => {
    let str = '';
    Object.keys(json).map((key) => {
        str += `${key}: ${json[key]};`;
    });
    return str;
};

const responseScheme = {
    padding: '5px',
    'font-weight': 'bold',
    'border-radius': '5px',
    background: '#0DC143',
    color: '#222',
};
const errorScheme = {
    ...responseScheme,
    background: '#d60536',
    color: '#fff',
};
const responseColor = toCss(responseScheme);
const errorColor = toCss(errorScheme);

export const logResponse = (response) => {
    console.log('%c Response Log Begins! ', responseColor);
    console.log('Token:', response.config.headers.Authorization);
    console.log('Url:', response.request.responseURL);
    console.log('Config:', response.config);
    console.log('Data:', response.data);
    console.log('%c Response Log Ends! ', responseColor);
};

export const flashError = (error) => {
    if (error.response.status !== 422) {
        const {message, line, file} = error.response.data;
        showMessage({
            autoHide: false,
            titleStyle: {fontWeight: 'bold'},
            type: 'danger',
            message: message,
            description: `${file}:${line}`,
        });
    }
};

export const logError = (error) => {
    flashError(error);
    console.log('%c Error Log Begins! ', errorColor);
    console.log('Url:', error.request.responseURL);
    if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log('status code:', error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log('%c Error Log Ends! ', errorColor);
};
