require("@rails/ujs").start()

require('turbolinks').start()
require("@rails/activestorage").start()
require("channels")
require('aframe');
require('aframe-event-set-component');

require('aframe-mouse-dragndrop-component');
require('@editvr/aframe-dialog-popup-component');
require('aframe-look-at-component');
//= require jquery3
//= require jquery_ujs
//= require jquery-ui
//= require_tree .

import "bootstrap";
import { scaleControl } from '../components/a_frame_components';
import { rotationControl } from '../components/a_frame_components';
import { showPanel } from '../components/a_frame_components';
import { updatePosition } from '../components/a_frame_components';
import { addClass } from './new_gallery.js'
import { menuOpen, updateDimensions, selected, playVideo, setVideoDimensions } from './aframe.js'
import { saveArtwork, loadingBar, toggleSidePandel } from './vr.js'

import { switchToLogin, switchToSignup, closeLoginModal, setLoginModal, setSignUpModal, switchToPasswordReset, backToLogin } from './signup_login.js'

// import { animateDropdown } from './navbar.js'
import { closeAboutModal, setAboutModal } from './about'

import JQuery from 'jquery';
window.$ = window.JQuery = JQuery;

document.addEventListener('turbolinks:load', () => {

  //Create gallery page - visually removes the modal checkbox from the gallery selector carousel

  addClass();

  //Login/Signup
  switchToLogin();
  switchToSignup();
  closeLoginModal();
  setLoginModal();
  switchToPasswordReset();
  backToLogin();
  setSignUpModal();

  //Navbar
  // animateDropdown();
  const homePage = document.getElementById('landing-flex-box');

  if (homePage) {
    closeAboutModal();
    setAboutModal();
  }

  //VR stuff
  const vr = document.getElementById('embeddedScene');
  if (vr) {
    selected();
    saveArtwork();
    playVideo();
    setVideoDimensions();
    loadingBar();
    updateDimensions();
    scaleControl();
    rotationControl();
    showPanel();
    menuOpen();
    updatePosition();

  }

});

// document.querySelector(".submitButton").addEventListener("click", (e)=>{
// e.preventDefault();
// document.querySelector("form").submit()
// })
