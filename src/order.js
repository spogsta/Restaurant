


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
      
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.79711848433!2d-117.2340910766061!3d32.74964580211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfe28190f4b67%3A0x92fa4bca315a5951!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1601955396977!5m2!1sen!2sus"
      width="600"
      height="450"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>

  </div>`

  
}


export {updateWebpageOrder}