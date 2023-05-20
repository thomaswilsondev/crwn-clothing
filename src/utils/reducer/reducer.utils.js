// Export a function that creates an action object with a given type and payload
export const createAction = (type, payload) => ({
  type, // The type of the action, typically a string constant
  payload, // The payload of the action, usually an object with data to be passed to the reducer
});
