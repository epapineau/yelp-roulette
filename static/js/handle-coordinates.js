// Function to handle coordinates
function geoFindMe() {
    var output = document.getElementById("out");
    
    // Error
    if (!navigator.geolocation){
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
        // Define coordinates
        var location = {'latitude': position.coords.latitude,
                        'longitude': position.coords.longitude};
        console.log(location);

        // $.post( "/postcoords", {
        //     canvas_data: JSON.stringify(outputData)
        //   }, function(err, req, resp){
        //     window.location.href = "/results/"+resp["responseJSON"]["uuid"];  
        //   });
    }

    function error() {
        // Output error
        output.innerHTML = "Unable to retrieve your location";
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

geoFindMe()