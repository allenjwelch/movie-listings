const fs = require('fs')
const express = require('express')

const { createBundleRenderer } = require('vue-server-renderer')

const bundleRenderer = createBundleRenderer(
    require('./dist/vue-ssr-bundle.json'), {
        template: fs.readFileSync('./index.html', 'utf-8')
    }
)

const app = express()
const PORT = process.env.PORT || 8000;


app.use('/dist', express.static('dist'))

app.get('*', (req, res) => {
    bundleRenderer
        .renderToStream({ url: req.path })
        .pipe(res)
})

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
