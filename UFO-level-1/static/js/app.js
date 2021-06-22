
// Starter Code
var tableData = data;


// Preiewing the data from the data.js file to see available columns
console.log(tableData);


// Creating variables to reference HTML
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]




// Importing the data into the HTML Page
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Creating an Event Listener for the Button
// Setting up the Filter Button for Date and City
button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();
    console.log(inputDate)
    
    

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // Top will only work for filtering the date and no other columns
    
        else {
            $tbody.append("tr").append("td").text("There Are No Recorded Sightings Here");
        }
})
