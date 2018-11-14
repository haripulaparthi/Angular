var path = require('path');
 module.exports = {
     entry:{
         MainModule: "./src/main.ts",
         HomeModule: "./src/app/Home/Home.module.ts",
         SupplierModule: "./src/app/Supplier/Supplier.module.ts"
     },
     output: {
         path: path.join(__dirname, "dist"),
         publicPath: "/dist/",
         filename: "[name].bundle.js"
     },
     resolve:{
         extensions: ['.ts','.js']
     },
     module:{
         rules:[
             {
                 test: /\.ts$/,
                 loader:['awesome-typescript-loader',
                'angular-router-loader']
             }
         ]
     }
 }