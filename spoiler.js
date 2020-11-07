var elements = document.querySelectorAll('.spoiler');

var createSpoilerButton = function(element) {
    
    //Creates span .spoiler-content
    var span = document.createElement('span');
    span.className = 'spoiler-content';
    span.innerHTML = element.innerHTML;

    //Creates the button
    var buttonAction = document.createElement('button');
    buttonAction.textContent = 'Display the spoiler';

    //Appends these elements to the DOM
    element.innerHTML = '';
    element.appendChild(buttonAction);
    element.appendChild(span);

    //Set the EventListener 'click'
    buttonAction.addEventListener('click', function(e) {
        buttonAction.parentNode.removeChild(buttonAction);
        span.classList.add('visible');
    })
};

for(var i = 0; i < elements.length; i++) {
    createSpoilerButton(elements[i]);
}