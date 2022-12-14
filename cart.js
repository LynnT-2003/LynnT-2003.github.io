// define data in JSON array

// var has a universal scope
// let has a block scope
var products = [
    {
        name: "Gaming PC",
        Quantity: 1,
        PPU: 60000,
        Total: 60000
    },
    {
        name: "AOC 27inch Monitor",
        Quantity: 2,
        PPU: 9000,
        Total: 18000
    },
    {
        name: "Steelseries Arctis",
        Quantity: 1,
        PPU: 3000,
        Total: 3000
    },
    {
        name: "Keychron Q1 V2",
        Quantity: 1,
        PPU: 10000,
        Total: 10000
    }

]

function addToCart() {
    let elProdct = document.getElementById("products")
    let pVal = elProdct.value
    console.log(pVal)
    let productObj = {
        name: $('#products').val(),
        quantity: $('#qty').val(),
        ppu: $('#ppu').val(),
    }
    

    // Clear existing items in the table
    // let productList = document.getElementById("productList")
    // for (let x = 0; x < products.length; x++) {
    //     productList.deleteRow(1)
    // }

    $('#productBody').html("")

    products.push(productObj)
    loadData()
}

function loadData() {
    let allRows = ""
    let gross = 0
    for (let p in products) {
        let cellName = `<td><img class='icon' src='icon-delete.png' onclick='deleteProduct("${p}")'> ` + products[p].name + "</td>"
        let cellQuantity = '<td class="text-right">' + products[p].Quantity + "</td>"
        let cellPPU = '<td class="text-right">' + products[p].PPU + "</td>"
        let total = products[p].PPU * products[p].Quantity
        gross += total
        let cellTotal = '<td class="text-right">' + total + "</td>"
        let row = `<tr>${cellName}${cellQuantity}${cellPPU}${cellTotal}</tr>`
        allRows += row
    }
    $('#productBody').html(allRows)

    $("#gross").html(gross)

    let vat = gross * 0.07
    let net = gross + vat
    $("#vat").html(vat.toFixed(2))
    $("#net").html(net.toFixed(2))

}

function loadDataOld() {
    var e = document.getElementById("myName");
    e.innerHTML = "Lynn Thit Nyi Nyi"

    // first get table, productList
    var productList = document.getElementById("productList")


    // inside tr we need td, so we create new var data
    var row = document.createElement("tr")
    var data = document.createElement("td")
    data.innerHTML = "Product 1"
    
    var sum = 0
    for (let p in products) {

        // we need td inside tr
        var row = document.createElement("tr")
        var productName = document.createElement("td")
        productName.innerHTML = products[p].name

        let quantity = document.createElement("td")
        quantity.innerHTML = products[p].Quantity
        quantity.classList.add("text_center")
        
        let ppu = document.createElement("td")
        ppu.innerHTML=products[p].PPU
        ppu.classList.add("text_right")
        
        let total = document.createElement("td")
        total.innerHTML=products[p].Quantity * products[p].PPU
        total.classList.add("text_right")

        sum += products[p].Quantity * products[p].PPU
        vat = 0.07 * sum
        net = sum + vat

        
        // append data to row, append row to productList
        row.appendChild(productName)
        row.appendChild(quantity)
        row.appendChild(ppu)
        row.appendChild(total)
        productList.appendChild(row)
    }

    let grossElem = document.getElementById("grossID")
    grossElem.innerHTML = sum

    let vatElem = document.getElementById("vatID")
    vatElem.innerHTML = Math.ceil(vat)-1

    let netElem = document.getElementById("netID")
    netElem.innerHTML = net
}

// TODO Should use product ID instead of name
function deleteProduct(index) {
    console.log("DELETE",index)
    delete products[index]  // delete the element from array
    $('#productBody').html("")
    loadData()
}
