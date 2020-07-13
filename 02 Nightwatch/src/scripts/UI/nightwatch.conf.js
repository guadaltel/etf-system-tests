module.exports = {
  custom_commands_path: './commands',
  src_folders: ['tests'],
  webdriver: {
    start_process: true,
    server_path: 'node_modules/.bin/geckodriver',
    port: 4444,
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'firefox',
      },
    },
  },
};
