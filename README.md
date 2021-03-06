# Purpose

This repository is supposed to be composable seed store for Express + Gulp + Angular projects.
The master branch contains only bare-bones application, and branches add modules like .jade templates, Amazon Web Services file uploading or New Relic monitoring. 


### Current features include
* master branch includes Angular, Express, Gulp build system, Bower, and it picks Bower main files automatically to the build.
* Fast develpment environment. Restart server on server file change, reload browser on asset change
* Heroku deployment with 'git push heroku'


### Upcoming features
1. Check that Bower main files load CSS files too, and won't break.
1. Add 'angular-route'
1. Add 'ui-router'
1. Add `AngularFire`
1. Add `Browserify` 
1. Improve base error handling
1. Add Amazon Web Services Simple Email Service
1. Add Amazon Web Services File upload


### Someday/Maybe features
1. Interactive configuration and self-checking 
2. Scaffolding with `Slush` ([Slush - replacing Yeoman with Gulp](http://joakimbeng.eu01.aws.af.cm/slush-replacing-yeoman-with-gulp/))


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
* [Angular Best Practice for App Structure (Public)](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/mobilebasic?pli=1)
* [pilwon/ultimate-seed](https://github.com/pilwon/ultimate-seed)
* [angular/angular-seed](https://github.com/angular/angular-seed)
* [henyojess/generator-gulp-ng](https://github.com/henyojess/generator-gulp-ng)
* [h5bp/html5-boilerplate](https://github.com/h5bp/html5-boilerplate)


# Installing dependencies
- install [Node.js](http://nodejs.org/)
- install [npm](https://www.npmjs.org/doc/README.html)
- install [Bower](https://github.com/bower/bower) `npm install -g bower`
- install other npm packages `npm install`
  - [Express.js](http://expressjs.com/) 
  - [gulp](http://gulpjs.com/) 
- install Bower packages such as [Angular](https://angularjs.org/)
  - `bower install`
