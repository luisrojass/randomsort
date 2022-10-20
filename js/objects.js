class Box {
    constructor(obj, input, del, id) {
        this.obj = obj;
        this.input = input;
        this.del = del;
        this.id = id;
    }
}

const inputName = document.getElementsByClassName('inputName')
const inputsContainer = getById('inputsContainer')
const alertMsg = getById('alertMsg')
const namesList = getById('namesList')
const btnAddName = getById('btnAddName')
const btnChoose = getById('btnChoose')
const btnChange = getById('changeNames')
const nOfNames = getById('nOfNames')

const list = []
const names = []
let state = false