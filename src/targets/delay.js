async function run({ target }) {
  target.inputs = Object.assign({}, default_inputs, target.inputs);
  await new Promise(resolve => setTimeout(resolve, target.inputs.seconds * 1000));
}

const default_options = {
  condition: 'passOrFail'
}

const default_inputs = {
  seconds: 5
}

module.exports = {
  run,
  default_options
}