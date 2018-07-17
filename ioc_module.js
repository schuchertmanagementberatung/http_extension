'use strict';

const HttpExtension = require('./dist/commonjs/index').HttpExtension;
const extensionDiscoveryTag = require('@essential-projects/core_contracts').ExtensionDiscoveryTag;

function registerInContainer(container) {

  container.register('HttpExtension', HttpExtension)
    .dependencies('container')
    .configure('http:http_extension')
    .tags(extensionDiscoveryTag)
    .singleton();
}

module.exports.registerInContainer = registerInContainer;
