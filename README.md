# Purpose

This repository is supposed to be composable seed store for Express + Gulp + Angular projects.
The master branch contains only bare-bones application, and branches add modules like .jade templates, Amazon web services file uploading or New relic monitoring. 

## Feature branches include
* 'nodemon' - restarts server on server or gulp file changes

# Usage
For example to get angular-express-gulp-nodemon seed:

## 1. Clone angular-seedvault
'git clone https://github.com/jkarttunen/angular-seedvault'

## 2. Add features
'git branch -a' // list branches
'git merge origin/nodemon'  // add nodemon
'git merge origin/jade'     // add jade (TBD)
'git merge origin/heroku'   // add heroku (TBD)

## 3. Detach from angular-seedvault 
'git remote remove origin'  // Detach from angular-seedvault
'git remote add origin https://github.com/user/repo.git'  //Add to my repo

You should be able to merge the feature branches without conflicts.

# Want to contribute?
Anyone can help make this project better. 

