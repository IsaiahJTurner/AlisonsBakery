# Alison's Bakery
An open source bakery site you'll loaf to death.

[![Build Status](https://travis-ci.org/IsaiahJTurner/AlisonsBakery.svg?branch=master)](https://travis-ci.org/IsaiahJTurner/AlisonsBakery) [![Dependency Status](https://david-dm.org/IsaiahJTurner/AlisonsBakery.svg)](https://david-dm.org/IsaiahJTurner/AlisonsBakery) [![Code Climate](https://codeclimate.com/github/IsaiahJTurner/AlisonsBakery/badges/gpa.svg)](https://codeclimate.com/github/IsaiahJTurner/AlisonsBakery) [![GitHub version](https://badge.fury.io/gh/IsaiahJTurner%2FAlisonsBakery.svg)](https://badge.fury.io/gh/IsaiahJTurner%2FAlisonsBakery)

## Backend vs Frontend
The guidelines for this project included mocking a "3rd party backend" but in an effort to keep the project within one repository (and to use GitHub Pages), the code had to be partially combined. Apart from the index.html file, all the frontend code is isolated to the frontend folder.

## Backend Notes
Since the content is static, a database was not used. Records can be added in the CSV file and edited in Excel or Numbers.

## Demo
[isaiahjturner.github.io/AlisonsBakery](https://isaiahjturner.github.io/AlisonsBakery)

To see a demo of the site visit the link above. If a connection can not be established to the backend (you're looking at this repo months after I built it), you'll be prompted to set up your own. Click the button below to deploy to GitHub pages. Visit your heroku deployment to see the demo.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


## Development
### Running
1. `git clone AlisonsBakery`
2. `cd AlisonsBakery`
3. `npm install`
4. `npm start` or, even better, `nodemon` if you have it.

### Contributing

#### Instructions
1. `npm test`
2. Submit a pull request
3. Resolve conflicts

#### Guidelines
- Write tests for any added functionality.
- Browser support for Opera Mini and IE 8 is not required.

## Security Concerns
- CORS is wide open
- The frontend accepts any API base URL as a query parameter
- No rate limiting

## DMCA / Copyright
All of the images displayed on this site are covered by their own individual copyrights. If you own the rights to any image displayed on this site simply email me at copyright.alisonsbakery@isaiahjturner.com to have it removed.

## License
Copyright (c) 2016 Isaiah Turner. All rights reserved.
Alison's Bakery has not been released under any open source license. If you are interested in using any part of this application, please email me.
