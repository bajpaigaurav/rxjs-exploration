# rxjs-exploration

- What is observable ?
  - follows producer consumer model
- What is Lazy vs Eager Execution of Observable ?
  - Lazy execution means - execution/evaluation only happens when there is need for it ie there is any subscriber for it else it will not be computed.
  - Eager Execution means - weather there is any consumer or any need for the data or not, still computation will be done on top of it.
- Setting Data pipeline with observable
  - [Usage of tap, filter, map](./setting-data-pipeline.js)
  - Demostrate effects of datapipeline over the native observable.
- Synchronous vs Asynchronous Data Sources 
  - [Synchronous Data Source](./synchronous-data-source.js) - Where cause and effect are at the same time 
  - [Asynchronous Data Source](./asynchronous-data-source.js) - Where consumers need to wait for to happen to happen
- [Making Sync Data Source to act like Async](./making-sync-to-async.js)