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

### JSX Transform
```
npm install --save-dev @babel/core@7 @babel/cli@7
node_modules/.bin/babel --version
npx babel --version
npm install --save-dev @babel/preset-react@7
npx babel src --presets @babel/react --out-dir public
```

### Automate
```
npm install nodemon@1
```

### Mulitple Environments
```
cd ui
npm install dotenv@6
```

### Front-end Modules and Webpack
```
cd ui
npm install --save-dev webpack@4 webpack-cli@3
npx webpack public/App.js --output public/app.bundle.js
npx webpack public/App.js --output public/app.bundle.js --mode development
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

### Installation
```
cd ui
npm install react-bootstrap@0
npm install bootstrap@3
ln -s ../node_modules/bootstrap/dist public/bootstrap
```

### Google Map API Installation
```
npm install google-maps-react
```

# Compile Command
```
npx webpack --mode production
```
