const command = {
  name: 'menj',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to MENJ CLI')
  }
}

module.exports = command
