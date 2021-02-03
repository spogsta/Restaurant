alert("Order");


function updateWebpageOrder (){
    const content = document.getElementById("content")
    content.innerHTML=`

    <script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAe2HmkFBQtBmVpPNwwvW1-XH1ZvkvzNuY&callback=initMap&libraries=&v=weekly"
    defer
  ></script>
  <h2>Contact Chuck!</h2>


  <div id="addressBox">
      <div id="addressBoxContainer">
          <div id="adress">6969 69th street, last vargas NV, 59123</div>
          <div id="hours"> Open 24 hours</div>
      </div>
      
      <script>function initMap() {
          // The location of Uluru
          const uluru = { lat: 46.48298891287558, lng: -96.09809715679758 };46.48298891287558, -96.09809715679758
          // The map, centered at Uluru
          const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: uluru,
          });
          // The marker, positioned at Uluru
          const marker = new google.maps.Marker({
            position: uluru,
            map: map,
          });
        }

        
        </script>
        <div id="map"></div>

  </div>`
}


export {updateWebpageOrder}