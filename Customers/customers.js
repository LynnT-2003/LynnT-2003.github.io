var customers=[
    {
        name: "Leon Kennedy",
        email: "leon@racoon.com",
        phone: "098-123-4567"
    },
    {
        name: "Clair Redfield",
        email: "clair@racoon.com",
        phone: "098-123-9999"
    },
    {
        name: "Jill Valentine",
        email: "jill@racoon.com",
        phone: "096-456-9999"
    },
]

function addCustomer() {

    let elName = document.getElementById("inputName")
    let elEmail = document.getElementById("inputEmail")
    let elPhone = document.getElementById("inputPhone")
    let customerObject = {
        addedName: elName.value,
        addedEmail: $('#inputEmail').val(),
        addedPhone: $('#inputPhone').val(),
    }
    
    customers.push(customerObject)
    console.log(customers)
    let cStr = `<tr>
        <td>${customerObject.addedName}</td>
        <td>${customerObject.addedEmail}</td>
        <td>${customerObject.addedPhone}</td>
    <tr>`
    // $('#productBody').html(cStr) // this also works
    $("#data-table tr:last").after(cStr)
}

$(document).ready(function () {
    console.log("ready!");
    // load data
    $.ajax({
        url: "data.json"
    }).done(function (data) {
        //$(this).addClass("done");
        console.log("DONE",data)
        
        for(let d in data){
            let dataStr = `<tr>
                <td>${data[d].name}</td>
                <td>${data[d].email}</td>
                <td>${data[d].phone}</td>
            </tr>`
            $("#data-table tr:last").after(dataStr)
        }
    });
});