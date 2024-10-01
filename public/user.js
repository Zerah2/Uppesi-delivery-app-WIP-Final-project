function autoDetectLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.getElementById('pickup-location').value = `Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`;
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

function requestNow() {
    const pickup = document.getElementById('pickup-location').value;
    const drop = document.getElementById('drop-location').value;
    const schedule = document.getElementById('schedule-time').value;

    if (pickup && drop && schedule !== 'default') {
        alert(`Request made for pickup at ${pickup} and drop at ${drop} scheduled for ${schedule}.`);
    } else {
        alert('Please fill out all fields.');
    }
}

function trackOrder() {
    const status = "In Progress"; 
    document.getElementById("order-status").textContent = status;
    alert(`Current order status: ${status}`);
}

function initializeMap() {
    const mapElement = document.getElementById('map');
    const map = new google.maps.Map(mapElement, {
        zoom: 12,
        center: { lat: -1.286389, lng: 36.817223 },
    });

    const markerA = new google.maps.Marker({
        position: { lat: -1.286389, lng: 36.817223 },
        map: map,
        title: "Pickup Location"
    });

    const markerB = new google.maps.Marker({
        position: { lat: -1.2921, lng: 36.8219 }, 
        map: map,
        title: "Dropoff Location"
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    const request = {
        origin: markerA.position,
        destination: markerB.position,
        travelMode: 'DRIVING'
    };

    directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
        }
    });
}
