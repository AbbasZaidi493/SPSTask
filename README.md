
# ng-app for SPS interview

The angular fetches a list of comments from a public API and uses [ag-grid](https://www.ag-grid.com/best-angularjs-data-grid/) for the tabular representation.

Furthermore, it allows you to navigate to a different route that pops out the individual details for the selected comment.

## Required Dependencies

- node >= v4

## Getting Started

```
git clone
```

```
npm install
```

#### Note: You need to have bower installed globally. 
For installing bower globally:

```
npm install -g bower
```

and then:

```
bower install
```

#### Note: You need to have grunt installed globally. 
For installing grunt globally:

```
npm install -g grunt-cli
```

### Firing up the server:

```
grunt serve
```

It would automatically open a browser window with `localhost:9000`. In case it doesn't, you can visit the url manually.


## Development Cycle (Steps I followed):
- The entry point is `app/scripts/app.js` where all the angular controllers and routing configuration is implemented.
- The main controller for handling the business logic of the main page resides in `app/scripts/controllers/main.js`.
- The comments page controller resides in `app/scripts/controllers/comment.js`
- Although I could have made an API call for fetching comment by id, but I went with a shared service.
- All the template views, resides in `app/views/`.


### In case of any queries: 

`abbasshah493@gmail.com`
