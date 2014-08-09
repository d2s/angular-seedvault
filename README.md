# Purpose

This repository is supposed to be composable seed store for Express + Gulp + Angular projects.
The master branch contains only bare-bones application, and branches add modules like .jade templates, Amazon web services file uploading or New relic monitoring. 

###Current features include

* **nodemon** - restarts server on server or gulp file changes
* **heroku** - add hosting, building and instructions for heroku

### Upcoming features
1. Add Angular to base
1. Add '''Livereload'''
1. Add '''Jade'''
1. Add '''Stylus'''
1. Add '''AngularFire'''
1. Add '''bower''''
1. Add '''Browserify''' 
1. Improve base error handling
1. Add Amazon Web Services Simple Email Service
1. Add Amazon Web Services File upload

### Someday/Maybe features
1. Interactive configuration and self-checking 
2. Scaffolding with Slush  http://joakimbeng.eu01.aws.af.cm/slush-replacing-yeoman-with-gulp/

# Usage
For example to get angular-express-gulp-nodemon seed:

## 1. Clone angular-seedvault
- '''git clone https://github.com/jkarttunen/angular-seedvault'''

## 2. Add features
- '''git branch -a''' // list branches
- '''git merge origin/nodemon'''  // add nodemon
- '''git merge origin/jade'''     // add jade (TBD)
- '''git merge origin/heroku'''   // add heroku (TBD)

## 3. Detach from angular-seedvault 
- '''git remote remove origin'''  // Detach from angular-seedvault
- '''git remote add origin https://github.com/user/repo.git'''  //Add to my repo

You should be able to merge the feature branches without conflicts.


# Contributions are welcome
Anyone can help make this project better. 

