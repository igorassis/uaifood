module.exports = function(source) {
    this.cacheable();
    return `@import './src/resources/styles/config.scss';
      ${source}`;
};
