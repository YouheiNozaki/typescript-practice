import { User } from './models/User';

const user = new User({ name: 'newname', age: 20 });

user.on('change', () => {});
user.on('change', () => {});
user.on('gafgadf', () => {});

console.log(user);
