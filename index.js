import validator from 'validator';

console.log('isURL: ', validator.isURL('http://localhost/api/hello'));

console.log(new URL('http://localhost/api/hello'));
