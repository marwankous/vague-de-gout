const repository = process.env.GITHUB_REPOSITORY || "marwankous/vague-de-gout";
const [owner, repo] = repository.split("/");
const pathPrefix = `/${repo}/`;
const url = `https://${owner}.github.io${pathPrefix}`;

module.exports = {
  owner,
  repo,
  pathPrefix,
  url,
  image: `${url}logo.svg`
};
