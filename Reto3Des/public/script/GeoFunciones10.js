var map;
var latitud = 43.284809771944936;
var longitud =  -2.965438457751274;
$(document).ready(function(){
  var map = new GMaps({
    el: '#map',
    lat: latitud,
    lng: longitud
  });

  map.addMarker({
    lat: latitud,
    lng: longitud,
    title: 'Nombre Bar/Cafeteria/Restaurante',
    infoWindow: {
      content: '<p>CAFE BAR ARGUI</p>'
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
      path = [[latitud, longitud],
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
