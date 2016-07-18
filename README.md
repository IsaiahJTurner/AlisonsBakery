# Alison's Bakery
An open source bakery site you'll loaf to death.

## Backend vs Frontend
The guidelines for this project included mocking a "3rd party backend." I did not want to have two repositories for this so I placed the frontend on gh-pages and the backend on master.

## Backend Notes
Since the content is static, a database was not used. Records can be added in the CSV file and edited in Excel or Numbers.

## Demo
To see a demo of the site visit [isaiahjturner.github.io/AlisonsBakery](https://isaiahjturner.github.io/AlisonsBakery]). If a connection can not be established to the backend (you're looking at this repo months after I built it), you'll be prompted to set up your own. Click the button below to deploy to GitHub pages. Visit your heroku deployment to see the demo.

## Development
1. `git clone AlisonsBakery`
2. `cd AlisonsBakery`
3. `npm install`
4. `npm start` or, even better, `nodemon` if you have it.

## Security Concerns
- CORS is wide open
- The frontend accepts any API base URL as a query parameter
- No rate limiting

## DMCA / Copyright
All of the images displayed on this site are covered by their own individual copyrights. If you own the rights to any image displayed on this site simply email me at copyright.alisonsbakery@isaiahjturner.com to have it removed.

## License
Copyright (c) 2016 Isaiah Turner. All rights reserved.
Alison's Bakery has not been released under any open source license. If you are interested in using any part of this application, please email me.
