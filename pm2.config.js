module.exports = {
  apps: [
    {
      name: 'bridge',
      script: 'build/app.js',
      exec_mode: 'fork',
      instances: 1,
      node_args: '',
    },
  ],
};
