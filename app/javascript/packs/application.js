
import 'jquery/dist/jquery.slim'
import 'popper.js/dist/esm/popper'

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()

require("bootstrap/dist/js/bootstrap")




// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
