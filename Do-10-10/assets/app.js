window.addEventListener('load', init)

function init() {
    // Initialiseer eventListeners
    const button = document.getElementById('submit-btn');
    button.addEventListener('click', clickEventHandler);

    //    const plaatje1 = document.getElementById('plaatje1');
    //    plaatje1.addEventListener('click', plaatjes);
    //
    //    const plaatje2 = document.getElementById('plaatje2');
    //    plaatje2.addEventListener('click', plaatjes);
    //    
    //    const plaatje3 = document.getElementById('plaatje3');
    //    plaatje3.addEventListener('click', plaatjes);
    //
    //    const plaatje4 = document.getElementById('plaatje4');
    //    plaatje4.addEventListener('click', plaatjes);

    const plaatjes = document.getElementById('plaatjes');
    plaatjes.addEventListener('click', eventPlaatjes)

    const forms = document.getElementById('submit-btn');
    forms.addEventListener('click', clickFormHandler)
}

function clickEventHandler(event) {
    event.preventDefault();
    console.log(event);
}

function eventPlaatjes(event) {
    event.preventDefault();
    console.log(event.target.id);
    const targetId = event.target.id;
    target = document.getElementById(targetId);
    //    target = 10px solid red;
}

function clickFormHandler(event) {
    event.preventDefault();
    let shoppingInput = document.getElementById('shopping-input').value;
    console.log(shoppingInput);
    const ulList = document.getElementById('list'); // placeholder
    const li = document.createElement('li'); // wat
    li.innerText = shoppingInput; // waarde
    ulList.append(li); //append to placeholder
}