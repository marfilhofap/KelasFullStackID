function fetchData(callback) {
    // Simulating asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
        const data = "Some data fetched from the server";
        // Once the data is fetched, the callback function is invoked
        callback(data);
    }, 2000); // Simulating a 2-second delay
}

function processData(data) {
    console.log("Processing data:", data);
}

// Calling fetchData and passing processData as a callback
// fetchData(processData);
