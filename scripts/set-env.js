const { writeFileSync , mkdirSync} = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environments.ts';

const envFileContent = `
export const environment = {
token_authorization:"${ process.env['TOKEN_AUTHORIZATION']}"
};`;

mkdirSync('./src/environments', {recursive:true} );
writeFileSync(targetPath,envFileContent);
