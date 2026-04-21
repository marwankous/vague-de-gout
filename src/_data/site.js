const repository = process.env.GITHUB_REPOSITORY || "marwankous/vague-de-gout";
const [owner, repo] = repository.split("/");
const pathPrefix = `/${repo}/`;
const url = `https://${owner}.github.io${pathPrefix}`;
const logoPath = `${url}assets/images/logo.svg`;

module.exports = {
  owner,
  repo,
  pathPrefix,
  url,
  logoPath,
  image: logoPath
};
