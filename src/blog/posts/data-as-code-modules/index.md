# Data as code modules

What would happen if you begin treating data and other assets like you treat the code? It would allow you to consume the data and without the mess of parsing, fetching and other annoyances. You would be able to use common programming features to filter and create new views. Data and code deserve equal treatment! 

## ES6 imports and exports

Instead of loading files with file system APIs or fetching them over HTTP you can store your data in the repository as code modules. Appropriate loaders for the build system will ensure the data is properly parsed and expose the simple interface.

## Loading common file formats with Webpack

With the help of Webpack loaders you can import raw files and the loaders will take care of parsing and provide data. The code will be then bundled and available for consumption.

### Enabling [file-loader](https://github.com/webpack-contrib/file-loader)

You can install the file loader by:

```
npm install file-loader --save-dev
```

Then add following configuration to your `webpack.config.js` file in the `module.rules` section:

```javascript
{
  test: /\.(jpg|png|svg)$/,
  loader: 'file-loader',
  options: {
    name: '[path][name].[hash].[ext]'
  }
},
```

You can specify here what file types will be loaded and how the output files will be named. When using hashing you should consider setting the HTTP Expires header for very long time in the future so the content can be cached well.

After configuring the bundler, you can proceed to import files and data in the code just like regular modules.


### JSON files

```javascript
import data from './data.json'

console.log(data)
```


### Text files

```javascript
import data from './data.txt'

console.log(data)
```

### Tabular data (csv, xls)

```javascript
import customers from './customers.csv'

console.log(customers)
```

### Image files

```javascript
import image from './image.jpg'

<img src={image} />
```

## Asynchronous loading

By using `System.import` you can load modules on the go and don't worry about the bundle size. However, the consumer has to fight with the burden of the asynchrony, but data modules can be created as before.

```javascript
console.log('Loading data...')

System.import('./data').then((data)=>{
    console.log(data)
}).catch(error => {
    console.log('Could not load the data')
    console.error(error)
})
```

## Sharing the code on npm

With the proposed solution it is easy to share data modules and distribute them with package managers. The consumer can install the module with `npm install package` and import it as a regular library.

Just imagine you could `import Wikipedia from 'wikipedia.org/en/articles'` and display a view of an article like this:

```javascript
<article>
    {Wikipedia.Code_as_data}
</article>
```