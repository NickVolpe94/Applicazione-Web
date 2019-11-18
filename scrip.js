	  var config = {
    apiKey: "AIzaSyA5h5LlehDTbB49JUlv6JOYJtCDRQqKbbg",
    authDomain: "tesi-779f2.firebaseapp.com",
    databaseURL: "https://tesi-779f2.firebaseio.com",
    projectId: "tesi-779f2",
    storageBucket: "tesi-779f2.appspot.com",
    messagingSenderId: "462118804003"
  };
  firebase.initializeApp(config);
    var dbRef= firebase.database().ref('Segnalazioni');
	  var markersArray = [];
  

	$(document).ready(function(){
     $.fn.datepicker.defaults.language = 'it';
    });
 
    $(document).ready(function(){
    $('.datepicker').datepicker({
        autoclose: true
    });
    });

	
	function FunzioneData(){
     var date = $('#uno').datepicker("getDate");
	 var date2 = $('#due').datepicker("getDate");
	 var dat1 = new Date(date.getYear(),date.getMonth(),date.getDate());
	 var dat2 = new Date(date2.getYear(),date2.getMonth(),date2.getDate());
	 var element_selected = document.getElementById('myDatalist-input').value;
	 clearOverlays();
	 if(date != "Invalid Date" && date2 != "Invalid Date"){
	 if(element_selected != ""){
	 dbRef.on('value', function(snapshot) {
	  snapshot.forEach(function(child) {
      var childs=child.val();
	   var dataSegn = new Date(childs.data2.year,childs.data2.month,childs.data2.date);
	   var contentString = 'Segnalazione del: '+childs.data+'<br>Per: '+childs.motivo+'<br><img src="'+childs.urlimmagine+'" alt="Foto" style="width:200px;height:300px;">';
	   
	   var infowindow = new google.maps.InfoWindow({
           content: contentString
           });
	   
	  if(childs.motivo =='ESCREMENTI'&& element_selected=='ESCREMENTI'||childs.motivo =='ESCREMENTI'&& element_selected=='TUTTI') {
		  if(dataSegn>=dat1 && dataSegn<=dat2){
      var marker = new google.maps.Marker({
          position: {lat: childs.lat, lng: childs.lon},
          map: map,
		  title: childs.motivo,
		  icon : 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
		  markersArray.push(marker);
		  marker.addListener('click', function() {
          map.setZoom(16);
          map.setCenter(marker.getPosition());
          infowindow.open(map, marker);
        });
		}
	  }
	  if(childs.motivo =='MALTRATTATI'&& element_selected=='MALTRATTATI'||childs.motivo =='MALTRATTATI'&& element_selected=='TUTTI'){
		  if(dataSegn>=dat1&&dataSegn<=dat2){
      var marker = new google.maps.Marker({
          position: {lat: childs.lat, lng: childs.lon},
          map: map,
		  title: childs.motivo,
		  icon : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          });
		  markersArray.push(marker);
		  marker.addListener('click', function() {
          map.setZoom(16);
          map.setCenter(marker.getPosition());
          infowindow.open(map, marker);
        });
		}
	  }
	  if(childs.motivo =='RANDAGIO'&& element_selected=='RANDAGIO'||childs.motivo =='RANDAGIO'&& element_selected=='TUTTI'){
		  if(dataSegn>=dat1&&dataSegn<=dat2){
      var marker = new google.maps.Marker({
          position: {lat: childs.lat, lng: childs.lon},
          map: map,
		  title: childs.motivo,
		  icon : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
		  markersArray.push(marker);
		  marker.addListener('click', function() {
          map.setZoom(16);
          map.setCenter(marker.getPosition());
          infowindow.open(map, marker);
        });
		 }
	  }
	  if(childs.motivo =='PERICOLOSI'&& element_selected=='PERICOLOSI'||childs.motivo =='PERICOLOSI'&& element_selected=='TUTTI'){
		  if(dataSegn>=dat1&&dataSegn<=dat2){
      var marker = new google.maps.Marker({
          position: {lat: childs.lat, lng: childs.lon},
          map: map,
		  title: childs.motivo,
		  icon : 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
          });
		  markersArray.push(marker);
		  marker.addListener('click', function() {
          map.setZoom(16);
          map.setCenter(marker.getPosition());
          infowindow.open(map, marker);
        });
		 }
	  }
        });
		});
		 }else{
			  alert("Inserisci il motivo della segnalazione")
			}
		}else{
		 alert("Inserisci la data mancante")
		}
}	

	  var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 45.6140747, lng: 8.8427703},
          zoom:14
        });
	
		var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

      }
	  
	  function clearOverlays() {
		for (var i = 0; i < markersArray.length; i++ ) {
			markersArray[i].setMap(null);
		}
		markersArray.length = 0;
		}
		
		
		
		
		
		$( document ).ready(function() {
	dbRef.on('value', function(snapshot) {
	  snapshot.forEach(function(child) {
      var childs=child.val();
	   //var dataSegn = new Date(childs.data2.year,childs.data2.month,childs.data2.date);
	   var contentString = 'Segnalazione del: '+childs.data+'<br>Per: '+childs.motivo+'<br><img src="'+childs.urlimmagine+'" alt="Foto" style="width:200px;height:300px;">';
	   
	   var infowindow = new google.maps.InfoWindow({
           content: contentString
           });
		   
	  if(childs.motivo =='ESCREMENTI') {
      var marker = new google.maps.Marker({
          position: {lat: childs.lat, lng: childs.lon},
          map: map,
		  title: childs.motivo,
		  icon : 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
		  markersArray.push(marker);
		  marker.addListener('click', function() {
          map.setZoom(16);
          map.setCenter(marker.getPosition());
          infowindow.open(map, marker);
        });
	  }
	  if(childs.motivo =='PERICOLOSI'){
      var marker = new google.maps.Marker({
          position: {lat: childs.lat, lng: childs.lon},
          map: map,
		  title: childs.motivo,
		  icon : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          });
		  markersArray.push(marker);
		  marker.addListener('click', function() {
          map.setZoom(16);
          map.setCenter(marker.getPosition());
          infowindow.open(map, marker);
        });
	  }
	  if(childs.motivo =='RANDAGIO'){
      var marker = new google.maps.Marker({
          position: {lat: childs.lat, lng: childs.lon},
          map: map,
		  title: childs.motivo,
		  icon : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
		  markersArray.push(marker);
		  marker.addListener('click', function() {
          map.setZoom(16);
          map.setCenter(marker.getPosition());
          infowindow.open(map, marker);
        });
	  }
	  if(childs.motivo =='MALTRATTATI'){
      var marker = new google.maps.Marker({
          position: {lat: childs.lat, lng: childs.lon},
          map: map,
		  title: childs.motivo,
		  icon : 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
          });
		  markersArray.push(marker);
		  marker.addListener('click', function() {
          map.setZoom(16);
          map.setCenter(marker.getPosition());
          infowindow.open(map, marker);
        });
	  }
        });
		});
		
		var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
								
});
	  
	


	
	

		
	  
	  

