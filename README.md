# 5007-project


## Project Link: https://github.com/GoodKlaus/5007-project.git

### Set Up

```
nvm install 10
nvm alias default 10
npm install -g npm@6
npm init
npm install express@4
```

### Automate
```
npm install nodemon@1
```

### Express GraphQL APIs
```
npm install graphql@0 apollo-server-express@2
curl "http://localhost:3000/graphql?query=query+\{+about+\}"
```

### MongoDB
```
npm install mongodb@3
```

### Schema Initialization
```
mongod
mongo chargingdoor scripts/init.mongo.js
```

### api Folder Setup
```
cd api
npm install
```

### ui Folder Setup
```
cd ui
npm install
```

# Compile Command
```
cd ui
npx webpack --mode production
```

# Run Command
```
cd ui
node uiserver.js
cd api
node server.js
```

