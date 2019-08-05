import _ from 'lodash'
// import Print from './print'

function component() {
    const element = document.createElementZ("div")
    element.innerHTML = _.join(['hello', 'webpack'], ' ')
    // element.onclick = Print.bind(null, 'Hello Webpack!')

    return element
}

document.body.appendChild(component())
