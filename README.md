# Angular2.2.3
Angular 2 Project folder structure setup

- Angular 2.2.3
- Gulp
- SASS
- Typescript


## Features
- Inline external HTML templates into typescript component files (optional)
- Inline and autoprefix external SCSS files into typescript component files (optional)
- Inject styles into `index.html` (optional)
- Inject script tags into `index.html`
- Bundle and minify release builds


## Getting Started
### Prerequisites
- `node >=5.2`

### Installing Global Dependencies
##### Gulp v4 (optional)
```shell
$ npm install -g gulpjs/gulp-cli#4.0
```
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp under `./node_modules/.bin` — for example:
```shell
$ ./node_modules/.bin/gulp
```


### Installing Project-local Dependencies
```shell
$ npm install
$ npm run typings
```


## Commands
#### Develop
```shell
$ gulp
```

#### Lint (tslint)
```shell
$ gulp lint
```

#### Build
```shell
$ gulp build
```

#### Dist build
```shell
$ gulp dist
```
Executes the following:
- `gulp lint`
- `gulp test`
- `gulp build`