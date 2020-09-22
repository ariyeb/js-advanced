const formAddNumber = document.getElementById('form-add-number')
const inputName = formAddNumber.children[0]
const inputPhone = formAddNumber.children[1]
const buttonSubmitPhone = formAddNumber.children[2]
const warning = formAddNumber.children[3]
const inputSearch = document.getElementById('serach-number')
const selectOrder = document.getElementById('select-order')
const divPhoneBook = document.getElementById('div-phone-book')

const phoneBookData = new Map()
let isAToZOrder = true
let searchValue = ""

const createPhoneDiv = (name, phone) => {
    const divContainer = document.createElement('div')
    const divNameAndPhone = document.createElement('div')
    divNameAndPhone.innerHTML = `${name}: ${phone} `
    divNameAndPhone.classList.add('inline_block')
    const buttonRemove = document.createElement('button')
    buttonRemove.classList.add('inline_block')
    buttonRemove.innerHTML = "Remove"
    buttonRemove.addEventListener('click', () => {
        phoneBookData.delete(name)
        renderPhoneBookDiv()
    })
    divContainer.appendChild(divNameAndPhone)
    divContainer.appendChild(buttonRemove)
    return divContainer
}

const renderPhoneBookDiv = () => {
    while (divPhoneBook.children.length > 0) {
        divPhoneBook.removeChild(divPhoneBook.lastChild)
    }

    let phonesArray = [...phoneBookData].filter(([key]) => {
        return key.includes(searchValue)
    })

    phonesArray.sort(([a], [b]) => {
        if (isAToZOrder) {
            if (a > b) return 1
            if (a < b) return -1
            return 0
        } else {
            if (a > b) return -1
            if (a < b) return 1
            return 0
        }
    })

    for (let [name, phone] of phonesArray) {
        divPhoneBook.appendChild(createPhoneDiv(name, phone))
    }
}

formAddNumber.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = inputName.value.trim().toLowerCase()
    let phone = inputPhone.value.trim()

    if (phone.includes(' ')) {
        warning.className = "block"
        return
    }

    while (phone.includes('-')) {
        phone = phone.replace('-', "")
    }

    phoneBookData.set(name, phone)
    renderPhoneBookDiv()
    inputName.value = ""
    inputPhone.value = ""
    warning.className = "none"
})

selectOrder.addEventListener('change', () => {
    isAToZOrder = selectOrder.value === 'a..z' ? true : false
    renderPhoneBookDiv()
})

inputSearch.addEventListener('input', () => {
    searchValue = inputSearch.value.trim().toLowerCase()
    renderPhoneBookDiv()
})