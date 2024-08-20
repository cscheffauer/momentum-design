const config = {
  // run analyze:root on all files in the root of the project, not for changes in packages
  "!(packages/**/*)": "yarn analyze:root"
}

module.exports = config;
