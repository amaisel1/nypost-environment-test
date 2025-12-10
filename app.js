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

      // Function to populate table
      function runEnter() {
          d3.select("tbody").html(""); 

          var inputValue = d3.select("#user-input").property("value").toLowerCase().trim();

          // Show all if input empty
          var filtered = inputValue ? 
              data.filter(d => d.headline && d.headline.toLowerCase().includes(inputValue)) 
              : data;

          for (var i = 0; i < filtered.length; i++) {
              d3.select("tbody").append("tr").html(
                  "<td>" + (i+1) + "</td>" +
                  "<td>" + filtered[i]['headline'] + "</td>" +
                  "<td>" + filtered[i]['excerpt'] + "</td>" +
                  "<td>" + filtered[i]['display date'] + "</td>"
              );
          }
      }

      // Optional: populate table immediately on page load
      runEnter();

  })
  .catch(function(error) {
      console.log("Error loading CSV:", error);
  });