module.exports = ({ env }) => ({
  url: env("NF_HOSTS_CUSTOM", ""),
});
