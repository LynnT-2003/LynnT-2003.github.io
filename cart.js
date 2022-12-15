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
        Quantity: $('#qty').val(),
        PPU: $('#ppu').val(),
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
    var e = document.getElementById("myName");
    e.innerHTML = "Lynn Thit Nyi Nyi"
    
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

    $("#grossID").html(gross)

    let vat = gross * 0.07
    let net = gross + vat
    $("#vatID").html(vat.toFixed(2))
    $("#netID").html(net.toFixed(2))

}

// TODO Should use product ID instead of name
function deleteProduct(index) {
    console.log("DELETE",index)
    delete products[index]  // delete the element from array
    $('#productBody').html("")
    loadData()
}
