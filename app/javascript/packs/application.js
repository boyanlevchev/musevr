require("@rails/ujs").start()
require('turbolinks').start()
require("@rails/activestorage").start()
require("channels")
require('aframe');
require('aframe-event-set-component');
require('aframe-mouse-dragndrop-component');
import "bootstrap";


import { addClass } from './new_gallery.js'
import { menuOpen } from './aframe.js'

document.addEventListener('turbolinks:load', () => {
  console.log("turbolinks loaded!")
  addClass();
  menuOpen();
});
