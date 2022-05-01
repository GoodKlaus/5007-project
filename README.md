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

### Notes:
1. Because we utilized useLocation to pass props between pages, please do not use go back function of browser, or our website would collaspse.
2. Regarding the time table at Detailed Information page, the last timing represents the end time that users provided. Therefore, please do not select the last timing for your booking.
3. At Register page, if you represent a user with charging pile, please key in correct-format address that can be used to extract latitude and longitude information (e.g. Singapore zoo, 31 Jurong East Avenue)
