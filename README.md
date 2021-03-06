# Login server

login-server is a backend for login system made in ExpressJS.

## Installation

Use a node package manager [npm](https://www.npmjs.com/) to install login-server. Navigate to login server
```bash
cd login-server
```
Install dependencies
```bash
npm install
```
Install typeORM as a global dependency
```bash
npm install -g typeorm
```
## Usage
Install [MySQL](apachefriends.org/index.html). Change the MySQL credentials ormconfig.json to your MySQL username and password

run the following command in cd login-server to jump  into login server

```bash
npm run
```

To create user with migration please run following command in login-server directory:
```bash
typeorm migration:create -n CreateUser
```
## Endpoints

User must be logged in. To log in insert JSON
```bash
http://localhost:3000/auth/login
```
```json
{
	"username": "andreas",
	"password": "plado"
}
```
Retrieve a token from response with JSON Web Token. More info in [JWT](https://jwt.io/)

To view already authenticated endpoint you must first specify the header content. Key is 'token' and value is retrieved token
```bash
http://localhost:3000/user/
```

* I used reflect-metadata for annotations in TypeORM.
* I used jsonwebtoken for handling authentication.
* I used bcryptjs to hash the password.
* I used ts-node-dev to automatically restart the server if changes in file detected.
* I used cass-validator to easily validate user input.

# Login client

login-client is a frontend for login system made in React.

## Installation

Use a node package manager [npm](https://www.npmjs.com/) to install login-client. Navigate to login client
```bash
cd login-client
```
Install dependencies
```bash
npm install
```

## Usage

```bash
npm run
```

* I used Formik for easy form in React.
* I used axios as a very popular requesthandler.
