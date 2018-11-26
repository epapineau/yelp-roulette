// Function to handle coordinates
function geoFindMe() {
    // Define piece of the page to send feedback to
    var output = document.getElementById("out");
    
    // Error
    if (!navigator.geolocation){
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
        // Define coordinates
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Navigate to endpoint with coordinates
        window.location.href = `/choice/${latitude}/${longitude}`
    }

    function error() {
        // Output error
        output.innerHTML = "Unable to retrieve your location";
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

geoFindMe()