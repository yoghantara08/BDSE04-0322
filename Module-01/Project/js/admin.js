const sideMenu = document.getElementById("side-menu");
const menuBar = document.getElementById("bar-menu");
const contentTable = document.querySelector(".content-table");
menuBar.addEventListener("click", () => {
  sideMenu.classList.toggle("collapse");
  contentTable.classList.toggle("align-item-center");
});

let json = [];

getLocalStorageData();

function getLocalStorageData() {
  for (let i = 0; i < localStorage.length; i++) {
    const formData = localStorage.getItem(localStorage.key(i));

    json.push(JSON.parse(formData));
  }
}

let table = `<tr>`;
json.map((value, index) => {
  table += `<td style="text-align: center;">${index + 1}</td>
            <td>${value.firstName} ${value.lastName}</td>
            <td>${value.email}</td>
            <td>${value.address}</td>
            <td>${value.phone}</td>
            <td>${value.selectCourse}</td>
            <td>
              <button class="btn btn-edit">Edit</button>
              <button class="btn btn-delete">Delete</button>
            </td>
            </tr>`;
});

document.getElementById("data-table").insertAdjacentHTML("beforeend", table);
