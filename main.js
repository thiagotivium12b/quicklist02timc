// array (vetor)
// objetos
const items = []

function additem() {
    const itemName = document.querySelector("#item").value

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
                <input type="checkbox" name="list" id="item-1">
                <div class="custom-checkbox">
                    <img src="./assets/checked.svg" alt="checked">
                    <label for="item-${index}>${item.name}</label>
                </div>

                <button>
                    <img src="./assets/trash-icon.svg" alt="trash-icon">
                </button>
            </div>
           
        

    }



