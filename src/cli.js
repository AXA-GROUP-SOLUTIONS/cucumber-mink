#!/usr/bin/env node

/**
 * Dependencies
 */

import path from 'path';
import meow from 'meow';
import dbg from 'debug';
import cucumber from 'cucumber';
import startMocking from './cli/rewire.js';
import Mink from './mink.js';

/**
 * CLI
 */

const debug = dbg('mink:cli');

const cli = meow(`
  Usage: cucumber-mink [options] -- [CUCUMBER ARGS]

  Options:
    --inject       Mink auto-inject in context           [Boolean] [default: true]
    --browser      Desired browser name              [String] [default: "firefox"]
    --port         Selenium server port                            [default: 4444]
    --host         Selenium server host                            [default: "localhost"]
    --timeout      Cucumber function timeout in ms                 [default: 5000]
    -h, --help     Display help message                                  [Boolean]
    -v, --version  Display package version                               [Boolean]
`, {
  default: {
    inject: true,
    browser: 'chrome',
    port: 4444,
    host: "localhost",
    timeout: 5000,
  },
  boolean: ['inject'],
  alias: {
    v: 'version',
    h: 'help',
  },
});

const injectArgs = (flags) => {
  if (!flags.inject) return [];

  const params = Mink.DEFAULT_PARAMS;
  params.driver.desiredCapabilities.browserName = flags.browser;
  params.driver.port = flags.port;
  params.driver.host = flags.host;
  params.timeout = flags.timeout;

  const inject = require('./cli/support/mink_inject.js');

  const injectPath = path.join(__dirname, '/cli/support/mink_inject.js');
  startMocking(injectPath, inject(params));

  return ['--require', injectPath];
};

const execArgs = [
  'node', 'cucumber-js',
  ...injectArgs(cli.flags),
  ...cli.input,
];

debug(execArgs);

cucumber.Cli(execArgs).run((success) => {
  process.exit(success ? 0 : 1);
});
