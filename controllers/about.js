'use strict';

const logger = require('../utils/logger');

const about = {
  index(request, response) {
    logger.info('about rendering test');
    const viewData = {
      title: 'About Playlist 4',
    };
    response.render('about', viewData);
  },
};

module.exports = about;
