
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['wSjK7uS6eEhgVPfy9vmZY2'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  