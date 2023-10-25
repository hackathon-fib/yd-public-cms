module.exports = () => ({
  // https://www.npmjs.com/package/strapi-plugin-transformer
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms: {
        wrapBodyWithDataKey: true,
      },
      contentTypeFilter: {
        mode: "allow",
      },
    },
  },
  "users-permissions": {
    config: {
      jwtSecret: env("ADMIN_JWT_SECRET")
    },
  }
});
