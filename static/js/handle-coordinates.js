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
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
    }

    function error() {
        // Output error
        output.innerHTML = "Unable to retrieve your location";
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

geoFindMe()