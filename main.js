let items = []

function additem() {
    const itemName = document.querySelector("#item").value

    if (itemName === "") {
        alert("Digite um item valido!")
      return
    }

 const item = {
    name: itemName ,
    checked : false
 }

    items.push(item)

    document.querySelector("#item").value = ""

    showitemsList()

}

function showitemsList() {
    const sectionList = document.querySelector(".list")
    sectionList.textContent = "nada" 


    items.map ((item, index ) => ){
        sectionList.innerHTML +=
        <div class="item">
            <div>
                <input type="checkbox" name="list" id="item-1" ${item.checked && "checked"}>
            <div class="custom-checkbox" onclick="checkItem('${item.name}')">
                    <img src="./assets/checked.svg" alt="checked">
                    <label for="item-${index}" onclick=">${item.name}">${item.name}</label>
                </div>

                <button-onclick="removeitem("">
                    <img src="./assets/trash-icon.svg" alt="trash-icon">
                </button-onclick=>
            </div>
          .
 }) 

     localStorag.setItem("items", JSON.stringify(items))
           
function checkItem(itemName) {
    const item = items.find((item) => item.name === itemName)
    if (item.checked === false){
    item.checked = true
    } else {
        item.checked = false
    } 

}


           function removeitem(itemname) {
            const itemindex = items.findindex((item) => item.name === itemName)
            const divWarning = document.querySelector(".warning")
             
            divWarning.classList.remove("-hide-warning")

             setTimeout(() => {
                divWarning.classList.add("hide-warning")
             }, 4000)

            if(itemIndex !== -1) {
                items.splice(itemIndex, 1)
            }
            

            snowitemsList() 
 }
  

  function addHideWarningclass() {
    document.querySelector(".warning").classList.add("hide-warning")
  }

  function verifyLocalStorageItems() {
    const localStorageItems = localStorage.getItem("items")

    if (localstorageItems) {
        items = JSON.parse(localStorageItems)
        showitemsList()
    }
  }

  verifyLocalStorageItems()


        

    



