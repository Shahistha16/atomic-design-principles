const path = require('path')

module.exports = {
  modules: [path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'node_modules')],
  extensions: ['.jsx', '.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json'],
  alias: {
    _components: path.resolve(__dirname, '..', 'src/components/'),
    _views: path.resolve(__dirname, '..', 'src/views/'),
  },
}
