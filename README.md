# Chingu-Hotel-BT-30 
### Vision statement:
- Provide the best room suggestion to our clients who wish to book accommodation with us :bulb:

### Coding standard 
#### Variable naming tips
- camelCasing: for variables, attributes, methods, functions
```bash
eg: dbConnection, userAdress, ...
```
- PascalCase: for class names, interfaces, namespaces
```bash
eg: User, Category ...
```
- snake_case or SNAKE_CASE: use in scripting languages and constant
```bash
eg: no_inspiration, USER_BIRTHDAY, ...
```

#### Commit tips
> If you modify front repo
```bash
[FRONT] your commit
#eg:
[FRONT] add navbar
```
> If you modify back repo
```bash
[BACK] your commit
# eg:
[BACK] migrate database
```

### How to contribute
- Step 1: Clone this project
```
git clone https://github.com/chingu-voyages/v42-bears-team-30.git
```
- Step 2: Create your own branch 
```
git checkout -b feature/your-branch-name
```
> NB: We push to our development branch not on main branch except for launching app release :smile:
- Step 3: 
#### > For FE dev
```
# Browse to app-front
cd app-front
# install dependecies
npm install
# launch server
npm start
```
#### > For BE dev
```
# Browse to app-back
cd app-back
# install dependecies
npm install
# launch server
node server.js
```