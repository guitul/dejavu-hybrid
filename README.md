# Déjà Vu - Hybrid Client
## Your Bookmarks in the Cloud

Déjà Vu is a Bookmark Manager. It aims to be dead simple for you to use. Once logged in, you will be able to:
* Easily browse your own bookmarks;
* Add a new bookmark by copy/pasting a given URL;
* Edit/Tag/Describe/Remove an existing bookmark;
* Organize your bookmarks by tags/categories/folders;
* Quickly search your own bookmarks;
* Share a bookmark with friends;
* Discover new interesting bookmarks;
* Import/Export bookmarks with standard browsers.

Check out the [live demo](http://guitul.github.io/dejavu-web/) for the web version!
You must follow the installation steps below if you want to check out the hybrid version.

## Projects
Déjà Vu consists of 3 different projects:
* [Déjà Vu - Web Client](https://github.com/guitul/dejavu-web)
* [Déjà Vu - Hybrid Client](https://github.com/guitul/dejavu-hybrid)
* [Déjà Vu - REST Server](https://github.com/guitul/dejavu-server)

## Usage
### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)
* [Ionic](http://ionicframework.com/)
* [Cordova](https://cordova.apache.org/)

### Installation
1. Clone the repository: `git clone https://github.com/guitul/dejavu-hybrid.git`
2. Install the NodeJS dependencies: `npm install`.
3. Install the Bower dependencies: `bower install`.
4. Install the Cordova platforms & plugins: `ionic state reset`.
5. Start a local development server for app dev and testing: `ionic serve --lab`. As soon as you save a file, the browser is refreshed automatically on [http://localhost:8100/ionic-lab](http://localhost:8100/ionic-lab).

Ensure your preferred web server points towards the `dist` directory.

### Development
Please keep in mind that for the time being lots of features are not yet implemented:
* User authentication
* Link target parsing
* Custom categories management
* Tags management
* Sharing capability
* Import/Export with standard browsers
