d3.csv("Environment_Wildlife_Stories_Cleaned.csv")
  .then(function(data) {
    console.log("CSV loaded:", data.length + " rows");

    // Select elements
    var button = d3.select("#button");
    var form = d3.select("#form");

    // Event handlers
    button.on("click", event => {
      event.preventDefault();
      runEnter();
    });

    form.on("submit", event => {
      event.preventDefault();
      runEnter();
    });

    // Function to update table
    function runEnter() {
      d3.select("tbody").html(""); 

      var inputValue = d3.select("#user-input").property("value").toLowerCase().trim();

      // Filter data
      var filtered = data.filter(d => d.headline && d.headline.toLowerCase().includes(inputValue));

      // If input is empty, show all rows
      if(inputValue === "") filtered = data;

      // Populate table
      for (var i = 0; i < filtered.length; i++) {
        d3.select("tbody").append("tr").html(
          "<td>" + (i+1) + "</td>" +
          "<td>" + filtered[i]['headline'] + "</td>" + 
          "<td>" + filtered[i]['excerpt'] + "</td>" +
          "<td>" + filtered[i]['display date'] + "</td>"
        );
      }
    }

  })
  .catch(function(error){
      console.log("Error loading CSV:", error);
  });