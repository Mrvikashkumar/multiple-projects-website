// add note items
let inputText = document.querySelector('[type="text"]')
let addBtn = document.querySelector('#addBtn')
let itemContainer = document.querySelector('.items-container');
showItems()
function addItems() {
  let itemValue = inputText.value.trim();
  let items = JSON.parse(localStorage.getItem('itemKey'));
  if (!items) {
    items = []
  }
  let itemInfo = { name: itemValue, status: "pending" };
  items.push(itemInfo);
  localStorage.setItem('itemKey', JSON.stringify(items))
  inputText.value = ''
  showItems()
}
// show item in list
function showItems() {
  let items = JSON.parse(localStorage.getItem('itemKey'));
  if (!items) {
    items = []
  }
  let html = ''
  items.forEach((element, index) => {
    html += `<li class="item" id="${index}" ondblclick="editOnDblTap(this)">
    <span class="item-name">${element.name}</span>
    <div class="item-ctrl-btn">
      <button type="button" title="edit" onclick="editItem(this)">
        <i class="fa-solid fa-pen"></i>
      </button>
      <button type="button" title="delete" onclick="deleteItem(this)">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </li>`
  })
  if (items.length > 0) {
    itemContainer.innerHTML = html;
  } else {
    itemContainer.innerHTML = `Nothing to see here!`
  }
}

inputText.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    addItems()
  }
})
addBtn.addEventListener('click', addItems)

// delete item
function deleteItem(e) {
  e.parentElement.parentElement.remove();
  let id = e.parentElement.parentElement.id;
  let items = JSON.parse(localStorage.getItem('itemKey'));
  if (!items) {
    items = []
  }
  items.splice(id, 1)
  localStorage.setItem('itemKey', JSON.stringify(items))
  showItems()
}

// delete all
let deleteAll = document.querySelector('.clear-all');
deleteAll.addEventListener('click', () => {
  localStorage.clear();
  showItems()
})

// edit item name
function editItem(e) {
  if (e.children[0].classList.contains('fa-pen')) {
    let itemName = e.parentElement.previousElementSibling.textContent;
    e.parentElement.previousElementSibling.remove()
    let tempInput = document.createElement('input');
    tempInput.setAttribute('onblur', 'tempFunc(this)')
    tempInput.value = itemName;
    e.parentElement.parentElement.prepend(tempInput);
    e.innerHTML = `<i class="fa-solid fa-bars"></i>`
    tempInput.focus()
  } else {
    updateItem(e);
  }
}

function updateItem(e) {
  let id = e.parentElement.parentElement.id;
  let items = JSON.parse(localStorage.getItem('itemKey'));
  if (!items) {
    items = []
  }
  for (let i = 0; i < items.length; i++) {
    if (i == id) {
      let itemValue = e.parentElement.previousElementSibling.value;
      items[i].name = itemValue;
      e.parentElement.previousElementSibling.remove();
      let span = document.createElement('span');
      span.textContent = itemValue;
      e.parentElement.parentElement.prepend(span);
      e.innerHTML = `<i class="fa-solid fa-pen"></i>`
    }
  }
  localStorage.setItem('itemKey', JSON.stringify(items));
}

function tempFunc(e) {
  updateItem(e.nextElementSibling.children[0])
}

function editOnDblTap(e) {
  let targetElement = e.lastElementChild.children[0];
  editItem(targetElement)
}