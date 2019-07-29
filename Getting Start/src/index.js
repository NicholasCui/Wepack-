function component() {
    const element = document.createElement('div');

    element.innerHTML = ['hello', 'world'].join(' ');
    return element;
}

document.body.appendChild(component());