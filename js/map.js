function initMap() {
    var pos = { lat: 59.936708,   lng: 30.321078 };
    var opt = {
        center: pos,
        zoom: 15,
    };

    var Mymap = new google.maps.Map(document.getElementById('map'), opt);

    var marker = new google.maps.Marker({
        position: pos,
        map: Mymap,
        icon: "./img/map-marker.png"
    });
    var marker = new google.maps.Marker({
        position: { lat: 59.933742,   lng: 30.320005 },
        map: Mymap,
        icon: "./img/map-marker.png"
    });
    var marker = new google.maps.Marker({
        position: { lat: 59.926211,   lng: 30.342219 },
        map: Mymap,
        icon: "./img/map-marker.png"
    });
    var marker = new google.maps.Marker({
        position: { lat: 59.933070,   lng: 30.352004 },
        map: Mymap,
        icon: "./img/map-marker.png"
    });
}