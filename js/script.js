const elementsDOM = firstLetter => {
    const arrElements = [...document.querySelectorAll(`[class^=${firstLetter}]`)];
    const arrDirectionExtension = arrElements.map(classElement => {
        const boxModelProp = paddingOrMargin(classElement.className[0]);
        const direction = cssDirections(classElement.className[1]);
        const pixels = classElement.className.substr(3);
        const propAndDirection = `${boxModelProp}${direction}`;
        return classElement.style.setProperty(propAndDirection, `${pixels}px`)
    });
    
    function paddingOrMargin (prop) {
        const props = {
            'm' : 'margin',
            'p' : 'padding',
        }
        return props[prop];
    }
    
    function cssDirections (direction) {
        const directions = {
            't' : '-top',
            'b' : '-bottom',
            'l' : '-left',
            'r' : '-right',
            'a' : '' 
        }
        return directions[direction];
    }
    return arrDirectionExtension;
}

elementsDOM('p');
elementsDOM('m');