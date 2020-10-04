module.exports = app => {

    // Base URLS
    app.use('/api', require('./products.routes.js'))
}