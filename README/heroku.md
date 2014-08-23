# Heroku

## Configuration
1. Install **Heroku toolbelt** https://toolbelt.herokuapp.com/
1. Configure heroku app
    * Create new one with `heroku create my-herokuapp-name --buildpack https://github.com/timdp/heroku-buildpack-nodejs-gulp` 
    * *OR* configure existing one
       * `heroku git:remote -a my-herokuapp-name`
       * `heroku config:set BUILDPACK_URL=https://github.com/timdp/heroku-buildpack-nodejs-gulp`
1. Set heroku environment variable `heroku config:set NODE_ENV=production`

## Deploying to heroku
1. 'git push heroku'

You can also have multiple heroku apps, for Development, production and staging, but you might need to add related gulp tasks

### Simulating heroku deployment
You can use Foreman to test heroku build and server process
- See http://blog.daviddollar.org/2011/05/06/introducing-foreman.html

### Related links
- [Getting started with Heroku](https://devcenter.heroku.com/articles/quickstart)
- [Heroku buildbacks](https://devcenter.heroku.com/articles/buildpacks)
- [Deploying with git](https://devcenter.heroku.com/articles/git)
- [Heroku buildback for Node.js and gulp.js](https://github.com/timdp/heroku-buildpack-nodejs-gulp)
