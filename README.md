<h1>Image Search Abstraction Layer</h1>

<h2>RESTful API</h2>

<p>This is one of the API projects needed to attain the Back End Certificate at Free Code Camp.</p>

<h3>Users stories</h3>
  <ol>I) Can get the image URLs, alt text and page urls for a set of images relating to a given search string.</ol>
  <ol>II) I can paginate through the responses by adding a ?offset=2 parameter to the URL. (only if you modify to the bing       api) </ol>
  <ol>III) I can get a list of the most recently submitted search strings.</ol>

## Installing and Running

1. Make sure that you have `node` and `npm` installed on your computer.
2. Fork and clone this repo on your computer.
3. `cd` into the root directory and run ` npm install`.
4. Run `npm start` and point your browser to `localhost:3000`.

<h2>The Final Product! </h2>

This web application has been deployed to Heroku, and you can see it live here! 

https://aldair47x-imagesearch.herokuapp.com/api/imagesearch/cats

The latest submitted search you can see it at 

https://aldair47x-imagesearch.herokuapp.com/api/recentsearchs

<br>

<h1>Tips</h1>
<h2>Restarting the server</h2>

<br>

<p>When you make changes to any JavaScript files, you have to restart the server. Just press `ctrl + c` in the terminal to stop the server and `npm start` or `node ./bin/www` to start it up again. This process can get very tedious, so I highly recommend that you install Nodemon. This package will automatically restart your server every time you make changes to your JS files. All you have to do is run `sudo npm install -g nodemon` to install the package globally and then run `nodemon ./bin/www`. The package takes care of the rest!</p>
