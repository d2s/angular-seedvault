# Purpose

This repository is supposed to be composable seed store for Express + Gulp + Angular projects.
The master branch contains only bare-bones application, and branches add modules like .jade templates, Amazon web services file uploading or New relic monitoring. 

###Current features include
* master branch includes Angular, Express, Gulp build system, bower, and it picks bower main files automatically to the build.
* **nodemon** - restarts server on server or gulp file changes
* **heroku** - [add support heroku hosting and instructions](https://github.com/jkarttunen/angular-seedvault/blob/master/README/heroku.md)

### Upcoming features
1. Check that bower main files load css files too, and won't break
1. Add 'angular-route'
1. Add 'ui-router'
1. Add `Livereload`
1. Add `Jade`
1. Add `Stylus`
1. Add `AngularFire`
1. Add `Browserify` 
1. Improve base error handling
1. Add Amazon Web Services Simple Email Service
1. Add Amazon Web Services File upload

### Someday/Maybe features
1. Interactive configuration and self-checking 
2. Scaffolding with `Slush`  http://joakimbeng.eu01.aws.af.cm/slush-replacing-yeoman-with-gulp/

# Usage
For example to get angular-express-gulp-nodemon seed:

### 1. Clone angular-seedvault
- `git clone https://github.com/jkarttunen/angular-seedvault`

### 2. Merge feature branches
- `git branch -a` // list branches
- `git merge origin/nodemon`  // add nodemon
- `git merge origin/jade`     // add jade (TBD)
- `git merge origin/heroku`   // add heroku 

### 3. Detach from angular-seedvault 
- `git remote remove origin`  // Detach from angular-seedvault
- `git remote add origin https://github.com/user/repo.git`  //Add to my repo

### 4. Add bower or NPM modules
- e.g. `bower install angular-ui-router --save` 

You should be able to merge the feature branches without conflicts.

# Contributions are welcome
Anyone can help make this project better. 

# Related links
Following links / projects have influenced this project
* https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/mobilebasic?pli=1
* https://github.com/pilwon/ultimate-seed
* https://github.com/angular/angular-seed
* https://github.com/henyojess/generator-gulp-ng
* https://github.com/h5bp/html5-boilerplate/

# Installing dependencies
- install [Node.js](http://nodejs.org/)
- install [npm](https://www.npmjs.org/doc/README.html)
- install [Bower](https://github.com/bower/bower) `npm install -g bower`
- install other npm packages `npm install`
  - [Express.js](http://expressjs.com/) 
  - [gulp](http://gulpjs.com/) 
- install Bower packages such as [Angular](https://angularjs.org/)
  - bower install`
