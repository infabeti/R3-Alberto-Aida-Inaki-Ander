var map;

$(document).ready(function(){
  GeoLocalizacion();
});

function GeoLocalizacion(mapa,latitud,longitud,nombre){
  var map = new GMaps({
    el: mapa,
    lat: latitud,
    lng: longitud
  });

  map.addMarker({
    lat: latitud,
    lng: longitud,
    title: 'Nombre Bar/Cafeteria/Restaurante',
    infoWindow: {
      content: nombre
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
      alert('La Geolocalización ha fallado: '+error.message);
    },
    not_supported: function(){
      alert("Tu buscador no es compatible con la Geolocalización");
    },
    always: function(){
    //  alert("Tenemos tu ubicacion!!");
    }
  });

}
