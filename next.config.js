/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['127.0.0.1']
    },
    i18n: {
        locales: ['en-Us', 'ru', 'ua'],
        defaultLocale: 'ru',
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
}
