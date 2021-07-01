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
import {publicOrCustomToggle} from '../components/template_picker';

import { switchToLogin, switchToSignup, closeLoginModal, setLoginModal, setSignUpModal, switchToPasswordReset, backToLogin } from './signup_login.js'

// import { animateDropdown } from './navbar.js'
import {initSwiper} from '../plugins/swiper';

import JQuery from 'jquery';
window.$ = window.JQuery = JQuery;

document.addEventListener('turbolinks:load', () => {

  //Login/Signup
  switchToLogin();
  switchToSignup();
  closeLoginModal();
  setLoginModal();
  switchToPasswordReset();
  backToLogin();
  setSignUpModal();

  //New gallery
  if (document.querySelector('.swiper-container')) {
    initSwiper();
    addClass();
    publicOrCustomToggle();
  }

  //Navbar
  // animateDropdown();
  const homePage = document.getElementById('landing-flex-box');

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
