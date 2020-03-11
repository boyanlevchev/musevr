require('aframe');
require('aframe-event-set-component');
require('aframe-mouse-dragndrop-component');


// var camera = document.getElementById('camera')

// AFRAME.registerComponent('rotation-reader', {
//   tick: function () {
//     // `this.el` is the element.
//     // `object3D` is the three.js object.

//     // `rotation` is a three.js Euler using radians. `quaternion` also available.
//     // console.log(this.el.object3D.rotation);
//     this.el.addEventListener('click', function() {
//       camera.

//     })

//     // `position` is a three.js Vector3.
//     console.log(this.el.object3D.position);
//   }
// });
// var el = document.querySelector('#object1');
// var cam = document.querySelector('#camera')
// // el.addEventListener('click', function() {
// //   console.log("clicked!!")
// // });

// AFRAME.registerComponent('rotateCamera', {
//     // Could use a schem to preserve the color! then simply change it on update
//     // if clicked?
//     init: function () {
//     this.el.addEventListener('click', function (evt) {
//       console.log('I was clicked at: ');
//     });
//     }
//     });



document.addEventListener('turbolinks:load', () => {
  console.log("tubolinks loaded!")
  //add all JS functions here!!
// AFRAME.registerComponent('rotateCamera', {
//     // Could use a schem to preserve the color! then simply change it on update
//     // if clicked?
//     init: function () {
//     this.el.addEventListener('click', function (evt) {
//       console.log('I was clicked at: ');
//     });
//     }
//     });



//   AFRAME.registerComponent('rotation-reader', {
//   tick: function () {
//     // `this.el` is the element.
//     // `object3D` is the three.js object.

//     // `rotation` is a three.js Euler using radians. `quaternion` also available.
//     console.log(this.el.object3D.rotation);

//     // `position` is a three.js Vector3.
//     console.log(this.el.object3D.position);
//   }
// });

  // var el = document.querySelector('#object1');
  // var cam = document.querySelector('#camera')
  // el.addEventListener('click', function() {

  // });




  // AFRAME.registerComponent('change-color-on-hover', {
  //   schema: {
  //     color: {default: 'red'}
  //   },

  //   init: function () {
  //     var data = this.data;
  //     var el = this.el;  // <a-box>
  //     var defaultColor = el.getAttribute('material').color;

  //     el.addEventListener('mouseenter', function () {
  //       el.setAttribute('color', data.color);
  //     });

  //     el.addEventListener('mouseleave', function () {
  //       el.setAttribute('color', defaultColor);
  //     });
  //   }
  // });

});
