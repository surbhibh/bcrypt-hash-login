const bcrypt = require('./custom-bcrypt')
const newPassword = 'password'

console.log(bcrypt.hash(newPassword));

console.log(bcrypt.compare('password','1584384917138$10$3a3df49c1d7e05bd36b84145c90c1202'));

console.log(bcrypt.hash(newPassword,{salt: 'someRandomString', rounds: 20}))

console.log(bcrypt.compare('password','someRandomString$20$199d9de71859a87cdd22e52d93f4522a'))