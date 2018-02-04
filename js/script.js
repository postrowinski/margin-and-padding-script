'use strict';

var setMarginOrPaddingOnElementsDOM = function elementsDOM(firstLetter) {
    var elementsNodeList = document.querySelectorAll('[class^=' + firstLetter);
    var arrElements = Array.prototype.slice.call(elementsNodeList);
    var filterArrElements = arrElements.filter(function (item) {
        return item.className[2] === '-';
    });
    var completeStyleForPaddingAndMargin = filterArrElements.map(function (classElement) {
        var boxModelProp = paddingOrMargin(classElement.className[0]);
        var direction = cssDirections(classElement.className[1]);
        var pixels = classElement.className.substr(3);
        var propAndDirection = '' + boxModelProp + direction;
        return classElement.style.setProperty(propAndDirection, pixels + 'px');
    });

    function paddingOrMargin(prop) {
        var props = {
            'm': 'margin',
            'p': 'padding'
        };
        return props[prop];
    }

    function cssDirections(direction) {
        var directions = {
            't': '-top',
            'b': '-bottom',
            'l': '-left',
            'r': '-right',
            'a': ''
        };
        return directions[direction];
    }
    return completeStyleForPaddingAndMargin;
};

setMarginOrPaddingOnElementsDOM('p');
setMarginOrPaddingOnElementsDOM('m');