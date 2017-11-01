const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isPro ? 'http://yk.pitteryi.top/api/' : 'api/'
}