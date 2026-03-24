const techDisplayNames = {
  vue: "Vue.js",
  node: "Node.js",
  express: "Express",
  postgresql: "PostgreSQL",
  docker: "Docker",
  react: "React",
  nuxt: "Nuxt",
  typescript: "TypeScript",
  strapi: "Strapi",
  redis: "Redis",
  jest: "Jest",
  cypress: "Cypress",
  gitlab: "GitLab",
  fastify: "Fastify",
  sequelize: "Sequelize",
  bitbucket: "Bitbucket",
  c: "C",
  "c++": "C++",
  java: "Java",
  python: "Python",
};

export function formatTechDisplay(techKey) {
  const key = typeof techKey === "string" ? techKey.trim().toLowerCase() : "";
  return techDisplayNames[key] || (key.charAt(0).toUpperCase() + key.slice(1));
}
