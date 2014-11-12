Insorum Website
===============

Website for the Insorum server.

Features:

- Whitelist served that show latest from the server files
- Map rendered by overviewer
- A place to download map backups
- List of youtubers and their channels

Requirements
------------

- NodeJS + NPM
- PHP + Composer
- Ruby with Compass installed (`gem install compass`?)

Grunt CLI needs to be installed with `npm install -g grunt-cli`

Install
-------

Run the usual install commands:

`npm install`
`composer install`
`bower install`
`grunt build`

Links need to be made to the external content:

`/public_html/external/whitelist.json` needs a link to the server's whitelist.json
`/public_html/external/backups` needs to point to the server backups (currently on external FTP via curlftpfs)
`/public_html/external/render` needs to point to the overviewer map files
