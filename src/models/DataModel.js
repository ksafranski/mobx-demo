const { keys } = Object

/**
 * Sample base DataModel class for abstracting common methods
 */

export default class DataModel {
  // Helper method for initializing base props on data models
  initData = (data) => {
    // Note: hacky for demo purposes, don't use in prod...
    keys(data).forEach(k => { this[k] = data[k] })
  }
}