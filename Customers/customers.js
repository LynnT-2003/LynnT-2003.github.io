var customers=[]

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