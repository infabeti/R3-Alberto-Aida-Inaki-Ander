var map2;
var latitud1 = 43.283326820716916;
var longitud1 = -2.9636293451518063;
$(document).ready(function(){
  var map = new GMaps({
    el: '#map2',
    lat: latitud1,
    lng: longitud1
  });

  map.addMarker({
    lat: latitud1,
    lng: longitud1,
    title: 'Nombre Bar/Cafeteria/Restaurante',
    infoWindow: {
      content: '<p>La Traviata</p>'
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
      path = [[latitud1, longitud1],
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
