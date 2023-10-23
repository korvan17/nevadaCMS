module.exports = {
  documentation: {
    enabled: true,
    config: {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "Nevada",
        description: "",
        termsOfService: false,
        contact: {
          name: "TEAM",
          email: "contact-email@something.io",
          url: "https://nevada-frontend.vercel.app/",
        },
        license: {
          name: "Apache 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0.html",
        },
      },
      "x-strapi-config": {
        plugins: ["users-permissions"],
        path: "/documentation",
      },
      servers: [
        { url: "http://localhost:1337/api", description: "Development server" },
      ],
      security: [{ bearerAuth: [] }],
    },
  },
};
