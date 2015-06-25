# honeybadger-service
Services, Workers and Orchestration for Node based ETL Streams

## Usage
The components of this package can be used directly as libraries in your own project or run as a service.

When running as a service, configurations for sources, extractors, transformers, loaders and tasks are stored and managed via CouchDB. Package installation verifies that CouchDB is installed locally and that the required database and views are setup.

The Data Manager can be used directly as a library to handle interactions with CouchDB for fetching and saving configurations.

### Data Manager
```
var DataManager = require('honeybadger-service/lib/data-manager');

var id = '2a08bfad35f1ffb1b92e10961500619a'; // Couch doc id
DataManager.getSource(id, function(error, body) {
  // Do something
});
DataManager.saveSource({...}, function(error, body) {
  // Do something
});

DataManager.getExtractor(id, function(error, body) {
  // Do something
});
DataManager.saveExtractor({...}, function(error, body) {
  // Do something
});

DataManager.getTransform(id, function(error, body) {
  // Do something
});
DataManager.saveTransform({...}, function(error, body) {
  // Do something
});

DataManager.getLoader(id, function(error, body) {
  // Do something
});
DataManager.saveLoader({...}, function(error, body) {
  // Do something
});

DataManager.getTask(id, function(error, body) {
  // Do something
});
DataManager.saveTask({...}, function(error, body) {
  // Do something
});


```

### Scheduled Tasks

```
var Scheduler = require('honeybadger-service/lib/scheduler');
var cron = new Scheduler();
cron.addTask({
  "name": "Daily Task",
  "description": "Daily feed of ...",
  "runDate": "2015-01-26",
  "runTime": "08:00",
  "repeat": "daily",
  "extractor": "2a08bfad35f1ffb1b92e10961500619a",
  "status": "active"
});
```

### Using Workers Directly

```
var Worker = require('honeybadger-service/lib/worker');
var worker = new Worker();
worker.runTask({
    "name": "Daily Task",
    "description": "Daily feed of ...",
    "runDate": "2015-01-26",
    "runTime": "08:00",
    "repeat": "daily",
    "extractor": "2a08bfad35f1ffb1b92e10961500619a",
    "status": "active"
  },function() {
  // Done
});
```

### Task Configuration

```
{
   "_id": "2a08bfad35f1ffb1b92e109615007b25",
   "_rev": "1-eae23ea14ad6ce21640fd383bee40f8b",
   "name": "Daily Task",
   "description": "Daily feed of ...",
   "runDate": "2015-01-26",
   "runTime": "08:00",
   "repeat": "daily",
   "extractor": "2a08bfad35f1ffb1b92e10961500619a",
   "status": "active",
   "type": "task",
   "activatedOn": 1423249077002
}
```
