/*
 * @type {import('@relative-ci/cli').Config}
 */
module.exports = {
  payloadFilepath: './artifacts/relative-ci-agent.json',
  includeCommitMessage: true,
  compress: true,
  webpack: {
    // Path to Webpack stats JSON file
    stats: './artifacts/webpack-stats.json',
  },
};
