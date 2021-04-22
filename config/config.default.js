'use strict';

module.exports = appInfo => {
  const config = exports = {}
  // console.log(appInfo);
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "2468260248"
  config.security = {
    csrf: false,
  }
  // add your config here
  config.middleware = []

  config.view = {
    mapping: {
      ".nj": "nunjucks",
    },
  }

  config.jwt = {
    secret: "2468260248",
    enable: false,
  }

  config.multipart = {
    // will append to whilelist
    fileExtensions: [
      '.lrc'
    ],
  };

  // config.security = {
  //   csrf: {
  //     enable: false,
  //     ignoreJSON: true,
  //   },
  //   domainWhiteList: ["http://49.235.188.111"],
  // }
  // config.cors = {
  //   allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
  // }

  return config
}

