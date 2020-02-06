const arr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const currentHr = moment().hour();

$("#currentDay").html(moment().format('MMMM Do YYYY'));

function displayHr() {
    // $(".workPlanner").empty();

    for (let i = 0; i < arr.length; i++) {

        let row = $("<div class='row'>");

        let col1 = $("<div class='col-sm-2'>");

        let p = $("<p class='text-right'>");
        let midDay = ":00 AM";
        let hr = arr[i];
        if (arr[i] >= 12) {
            midDay = ":00 PM";
            if (hr >= 13) {
                hr = hr - 12;
            }
        }
        p.text(hr + midDay);
        col1.html(p);


        let col2 = $("<div class='col-sm-8'>");

        let textArea = $("<textarea class='form-control'>");
        if ( currentHr === arr[i]){
            textArea.addClass("bg-danger");
        } 
        else if ( currentHr > arr[i] ){
            textArea.addClass("bg-secondary");
        }
        else {
            textArea.addClass("bg-success");
        }
        textArea.attr("id", "textarea" + i);
        let value = localStorage.getItem("textarea"+i);
        textArea.val(value);
        col2.append(textArea);


        let col3 = $("<div class='col-sm-2'>");

        let saveBtn = $("<button class='btn-lg btn btn-primary saveBtn'>");
        let saveIcon = $("<i class='fas fa-save'>");

        const clearBtn = $("<button class='clearBtn btn btn-danger btn-lg'>");
        const clearIcon = $("<i class='fa fa-trash'>");
        clearBtn.attr("id", i);

        clearBtn.html(clearIcon);
        saveBtn.html(saveIcon);

        col3.append(saveBtn);
        col3.append(clearBtn);


        row.append(col1, col2, col3);

        $(".workPlanner").append(row);
    }
}

displayHr();

$(".saveBtn").on('click', function() {
    for ( let i=0; i < arr.length; i++){
        let value = $("#textarea" + i).val()
        localStorage.setItem("textarea"+i, value);
    }
    
})

$(".clearBtn").on('click', function() {
    let currentId = $(this).attr("id");
    $("#textarea" + currentId).val("");
    localStorage.setItem("textarea" + currentId, "");
})