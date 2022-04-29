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
mongo chargingdoor scripts/init.mongo.js
```

### Mulitple Environments
```
cd api
npm install dotenv@6
cd ..
cd ui
npm install dotenv@6
```

### Proxy Based Architecture
```
cd ui
npm install http-proxy-middleware@0
```

### ESLint
```
cd api
npm install --save-dev eslint@5 eslint-plugin-import@2
npm install --save-dev eslint-config-airbnb-base@13
npx eslint .
```

### ESLint for Front-end
```
cd ui
npm install --save-dev eslint@5 eslint-plugin-import@2
npm install --save-dev eslint-plugin-jsx-a11y@6 eslint-plugin-react@7
npm install --save-dev eslint-config-airbnb@17
npx eslint . --ignore-pattern public
npx eslint . --ext js,jsx --ignore-pattern public
```

### Front-end Modules and Webpack
```
cd ui
npm install --save-dev webpack@4 webpack-cli@3
```


### Transform and Bundle
```
cd ui
npm install --save-dev babel-loader@8
npx webpack
```

### Libraries Bundle
```
cd ui
npm install react@16 react-dom@16
npm install prop-types@15
npm install whatwg-fetch@3
npm install babel-polyfill@6
```

### Hot Module Replacement
```
cd ui
npm install --save-dev webpack-dev-middleware@3
npm install --save-dev webpack-hot-middleware@2
```

### Simple Routing
```
cd ui
npm install react-router-dom@5.2.0
```

### Bootstrap Installation
```
cd ui
npm install react-bootstrap@0
npm install bootstrap@3
ln -s ../node_modules/bootstrap/dist public/bootstrap
```

### Google Map API Installation
```
npm install google-maps-react
npm install react-google-maps
npm install react-geocode
npm install react-google-autocomplete
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

