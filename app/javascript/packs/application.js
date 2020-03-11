require("@rails/ujs").start()
require('turbolinks').start()
require("@rails/activestorage").start()
require("channels")

require('aframe');
// require('aframe-event-set-component');
require('aframe-mouse-dragndrop-component');
require('@editvr/aframe-dialog-popup-component');
require('aframe-look-at-component');


import "bootstrap";
import { scaleControl } from '../components/a_frame_components';
import { rotationControl } from '../components/a_frame_components';
import { showPanel } from '../components/a_frame_components';
import { addClass } from './new_gallery.js'


document.addEventListener('turbolinks:load', () => {

  scaleControl();
  rotationControl();
  showPanel();
  addClass();

});


