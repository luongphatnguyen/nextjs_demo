const path = require('path');

module.exports = {
    images: {
      domains: ['randomuser.me'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
  }