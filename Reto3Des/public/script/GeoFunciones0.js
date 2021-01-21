var map2;
var latitud0 = 43.282839515554585;
var longitud0 = -2.9648044448610995;
$(document).ready(function(){
  var map = new GMaps({
    el: '#map2',
    lat: latitud0,
    lng: longitud0
  });

  map.addMarker({
    lat: latitud0,
    lng: longitud0,
    title: 'Nombre Bar/Cafeteria/Restaurante',
    infoWindow: {
      content: '<p>SIDRERÍA - CERVECERA ANDER</p>'
    }
  });

  GMaps.geolocate({
    success: function(position){
      map.setCenter(position.coords.latitude, position.coords.longitude);
      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        title: 'Posicion actual',
        infoWindow: {
          content: '<p>Tu posicion actual</p>'
        }
      });
      path = [[latitud0, longitud0],
      [position.coords.latitude, position.coords.longitude]];

      map.drawPolyline({
        path: path,
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6
      });
    },
    error: function(error){
      alert('Geolocation failed: '+error.message);
    },
    not_supported: function(){
      alert("Tu buscador no es compatible con la Geolocalización");
    },
    always: function(){

    }
  });

});
