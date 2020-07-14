
let totalItem = 0;
let totalPrice = 0;


class Shopping {
  constructor(item, quantity, price) {
    this.item = item;
    this.quantity = quantity;
    this.price = price;
  }
}


class UI {

  static displayList() {
    const listItem = [];
    UI.addItemToList(item);
  }

  static addItemToList(i) {
    //get the ids
    const list = document.querySelector("#shopping-list");

    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${i.item}</td>
            <td>${i.quantity}</td>
            <td>${i.price}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

    //append the row to the list
    list.appendChild(row);

    totalItem++;
    totalPrice = +totalPrice + +i.price;
  }


  static deleteItem(i) {
      //check if it has a delete class
      if (i.classList.contains("delete")) {
          i.parentElement.parentElement.remove();
          UI.showAlert('Item deleted', "info");
      }
      
  }

  static clearFields() {
    //get the values and clear it
    document.querySelector("#item").value = "";
    document.querySelector("#quantity").value = "";
    document.querySelector("#price").value = "";
  }

  static showAlert (message, className){
    const div = document.createElement("div");
    div.className = `alert rounded-pill text-center alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const form = document.querySelector("#shopping-form");

    container.insertBefore(div, form);

    //disappear in 3 sec
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}



document.querySelector("#shopping-form").addEventListener("submit", (e) => {
  //Prevent the default submit
  e.preventDefault();
  //Get the form values by targeting their ids
  const item = document.querySelector("#item").value;
  const quantity = document.querySelector("#quantity").value;
  const price = document.querySelector("#price").value;

  if (item === "" || quantity === "" || price === "") {
    UI.showAlert('Fill in all fields', 'danger');
  } else {
    const listItem = new Shopping(item, quantity, price);

    UI.addItemToList(listItem);
    
    UI.showAlert('Item added', "success");

    UI.clearFields();
  }

 
});

document.querySelector("#shopping-list").addEventListener("click", (e) => {
    UI.deleteItem(e.target);
    
});


