let myBody = document.getElementById('bodyId');

displayModal('Cookie_container');

function displayModal(elementId){

    console.log('clicked: ' +elementId);

    let myModalElement = document.getElementById(elementId);

    myModalElement.style.display = 'block';
    myBody.classList.toggle('noScroll');
}

function closeModal(elementId){

    console.log('clicked: ' +elementId);

    let myModalElement = document.getElementById(elementId);

    myModalElement.style.display = 'none';
    myBody.classList.toggle('noScroll');
}