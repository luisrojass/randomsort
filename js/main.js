btnChange.addEventListener('click', () => {
    hideBox(btnChange)
    hideBox(namesList)
    showBox(inputsContainer)
})

btnAddName.addEventListener('click', createBox)
btnChoose.addEventListener('click', () => {
    if (!state) {
        state = true

        // Restore display & values
        names.splice(0, names.length)
        hideBox(btnChange)
        hideBox(namesList)
        showBox(inputsContainer)
        namesList.innerHTML = ''

        let validNames = true
        // All right
        if (parseInt(nOfNames.value) > 0 && parseInt(nOfNames.value) <= list.length) {
            for (const input of inputName) {
                if (input.value) {
                    names.push(input.value)
                } else {
                    validNames = false
                    alertMsg.innerHTML = 'Please fill all boxes!'
                    showAlert(alertMsg)
                    state = false
                }
            }
            if (validNames) {
                let nCount = 0;
                (function resaltBox() {
                    if (nCount < 16) {
                        if (nCount < list.length) {
                            list[nCount].input.style.background = '#bbb'
                            setTimeout(() => {
                                list[nCount].input.style.background = '#fff'
                                nCount++
                                resaltBox()
                            }, 125);
                        } else {
                            list[nCount % list.length].input.style.background = '#bbb'
                            setTimeout(() => {
                                list[nCount % list.length].input.style.background = '#fff'
                                nCount++
                                resaltBox()
                            }, 125);
                        }
                    } else {
                        hideBox(inputsContainer)
                    }
                })()

                names.sort(() => Math.random() - 0.5)
                setTimeout(() => {
                    for (let i = 0; i < parseInt(nOfNames.value); i++) {
                        namesList.innerHTML += `
                    <div class="col d-inline-block">
                        <div class="alert alert-dark">
                            ${i + 1} - ${names[i]}
                        </div>
                    </div>`
                    }

                    showBox(btnChange)
                    showBox(namesList)
                    state = false
                }, 2000);
            }

            // Invalid number
        } else if (parseInt(nOfNames.value) <= 0) {
            alertMsg.innerHTML = 'Choices must be better than 0!'
            showAlert(alertMsg)
            state = false
        } else if (parseInt(nOfNames.value) > list.length) {
            alertMsg.innerHTML = "Choices can't be better than names!"
            showAlert(alertMsg)
            state = false
        }
    }
})

function createBox() {
    //Create a box
    list.push(new Box(document.createElement('div'), document.createElement('input'), document.createElement('button'), uuidv4()))
    list[list.length - 1].obj.className += 'col d-inline-flex justify-content-center'
    //Input
    list[list.length - 1].input.type = 'text'
    list[list.length - 1].input.placeholder = 'Name...'
    list[list.length - 1].input.className += 'inputName form-control d-inline-block w-75'
    // Btn Delete
    list[list.length - 1].del.innerHTML = '<i class="bi bi-trash-fill"></i>'
    list[list.length - 1].del.className += 'btn btn-danger mx-2'
    addEvtDelete(list[list.length - 1])
    //Add to DOM
    list[list.length - 1].obj.appendChild(list[list.length - 1].input)
    list[list.length - 1].obj.appendChild(list[list.length - 1].del)
    inputsContainer.insertBefore(list[list.length - 1].obj, btnAddName.parentNode)
    list[list.length - 1].input.focus()
}

function addEvtDelete(elem) {
    elem.del.addEventListener('click', () => {
        for (let i = 0; i < list.length; i++) {
            if (elem.id === list[i].id) {
                inputsContainer.removeChild(list[i].obj)
                console.log(list[i].id)
                setTimeout(() => {
                    list.splice(i, 1)
                }, 250);
            }
        }
    })
}

createBox()