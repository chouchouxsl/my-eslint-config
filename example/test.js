const path = require('path')

const indexPath = path.resolve(__dirname, './index.json')

const getName = () => {
    return 'hello world!'
}

getName()

// eslint-disable-next-line no-console
console.log('🤪 indexPathpath >>:', indexPath)
