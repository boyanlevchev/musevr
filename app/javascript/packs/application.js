require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import fullpage from 'fullpage.js';

new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  scrollHorizontally: true
});
