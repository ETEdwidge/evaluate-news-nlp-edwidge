### About
We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral. This project is used with external API called Aylien.

### Let's go 
The required plugins for this project are:
```
cd<project directory>
npm install
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
npm i -D workbox-webpack-plugin
```
### Aylien
I used Aylien as external API for this project. Sign up at this address https://aylien.com/product/news-api and create your account. Then, you will get credentials (ID and Key) to put in the project.
Install the dotenv using npm and create the `.env` file. You should fill in the `.env` file with your own credentials created at Aylien website.
```
API_ID="your credentials"
API_KEY="your credentials"
```
Note that to refer ennvironmental variable I used `process.enc`.
Create your `.gitignore` and put `.env`, `node_modules`, and `dist` inside.

### Testing the code with Jest
- Install Jest ```npm install --save-dev jest```
- To test the project you can run `npm run test`

### Service Workers
Service workers are installed in order for the project to be available when server is stopped.

### How to run the project
# Build and start the webpack dev server at port 8080
```
npm run build-dev
```

# generate a `dist` folder for prod
```
npm run build-prod
```
# Run the Express server on port 8081
```
npm start 
```

