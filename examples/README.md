# PhantomJS

## Prerequisites

* [PhantomJS](http://phantomjs.org/download.html)

The binary `phantomjs` should be ready to use:

``` bash
$ phantomjs -v
1.9.8
```

## Usage

* Enable cucumber-mink with WebDriverIO driver + PhantomJS settings. See [example](phantomjs.js) file.
* Launch Phantomjs in "Remote WebDriver mode": `phantomjs -w`
* Run your tests

## Additional Options
### HTTPS
If your site runs over HTTPS with an untrusted certificate, launch phantomjs using:
``` bash
phantomjs -w --ignore-ssl-errors=yes
```

### Custom Headers
You can pass in custom HTTP Header through phantomjs if needed. Here is an example for a Basic Authentication header:

``` javascript
var parameters = {
  driver: {
    type: 'webdriverio',
    options : {
      desiredCapabilities: {
        'browserName': 'phantomjs',
        'phantomjs.page.customHeaders.Authorization' : 'Basic '+ new Buffer('login:password').toString('base64')
      },
      logLevel: 'silent',
      port: 8910
    }
  }
};
```

# Local Chrome Browser

## Prerequisites

* [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads)

The binary `chromedriver` should be ready to use:

``` bash
$ chromedriver -v
ChromeDriver 2.13.307649 (bf55b442bb6b5c923249dd7870d6a107678bfbb6)
```

## Usage

* Enable cucumber-mink with WebDriverIO driver + Local Chrome settings. See [example](local-chrome.js) file.
* Launch chromedriver service: `chromedriver --url-base=wd/hub`
* Run your tests


# Local Firefox Browser

## Prerequisites

* Java
* [Selenium server standalone](http://selenium-release.storage.googleapis.com/index.html?path=2.44/)

The binary `java` should be ready to use:

``` bash
$ java -version
java version "1.8.0_25"
Java(TM) SE Runtime Environment (build 1.8.0_25-b17)
Java HotSpot(TM) 64-Bit Server VM (build 25.25-b02, mixed mode)
```

## Usage

* Enable cucumber-mink with WebDriverIO driver + Local Firefox settings. See [example](local-firefox.js) file.
* Launch selenium server: `java -jar selenium-server-standalone-2.44.0.jar`
* Run your tests
