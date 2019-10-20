window.addEventListener('load', init);

function init() {
    const click = document.getElementById('pupper');;
    click.addEventListener('click', rotate);

    console.log('init loaded');
}

let upDown = 'up'; // decides if the image is up or down
let clickyCounter = 0; // amount of clicks
let div = document.getElementById('bork'); // div in html
let create = document.createElement('p');
function rotate() {
    console.warn('don\'t touch me >:C')
    if (upDown == 'up') {
        console.log('hihi');

        create.innerText = 'bork';

        document.getElementById('pupper').setAttribute('class', 'rotate');
        upDown = 'down'; // changes image to upside down
    } else if (upDown == 'down') {
        console.log('huhu');

        create.innerText = 'bark';

        document.getElementById('pupper').setAttribute('class', 'up');
        upDown = 'up'; // changes image back to normal
        clickyCounter +=1
    }
    div.append(create);
    if (clickyCounter >= 10) {
        alert('FECC OFF >:C');
    }
}