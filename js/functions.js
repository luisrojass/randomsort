function getById(id) {
    return document.getElementById(id)
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function showBox(elem) {
    elem.style.display = 'flex'
    setTimeout(() => {
        elem.style.opacity = 1
    }, 200);
}

function hideBox(elem) {
    elem.style.opacity = 0
    setTimeout(() => {
        elem.style.display = 'none'
    }, 200);
}

function showAlert(elem) {
    showBox(elem)
    setTimeout(() => {
        hideBox(elem)
    }, 2000);
}