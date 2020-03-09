require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require('aframe');
// require('aframe-event-set-component');
require('aframe-mouse-dragndrop-component');

import "bootstrap";

document.addEventListener('turbolinks:load', () => {
  //add all JS functions here!!

//   AFRAME.registerComponent('cursor-listener', {
//     init: function () {
//            this.el.addEventListener('click', function (evt) {
//             console.log('I was clicked');
//         });
//   }
// });
//   AFRAME.registerComponent('raycaster-autorefresh', {
//   init: function () {
//     var el = this.el;
//     this.el.addEventListener('model-loaded', function () {
//       var cursorEl = el.querySelector('[raycaster]');
//       cursorEl.components.raycaster.refreshObjects();
//     });
//   }
// });
//   });

});
