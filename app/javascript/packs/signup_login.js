export const switchToLogin = () => {
  $('#switch-to-login').click(function () {
      console.log("clicked");
      $('#login-modal-dialog').animate({ 'margin': '1.75rem auto' }, 200);
      $('#login-modal-dialog').animate({ 'maxWidth': '500px'}, 200);
      $('#signup-modal-view').animate({ 'opacity': '0'}, 200);
      setTimeout(function() {
        $('#signup-modal-view').attr( 'style', 'display: none;');
        $('#login-modal-view').attr( 'style', 'display: block;');
      } , 200);

  });
};

export const switchToPasswordReset = () => {
  $('#switch-to-password-reset').click(function () {
      console.log("clicked");
      $('#login-modal-dialog').animate({ 'margin': '1.75rem auto' }, 200);
      $('#login-modal-dialog').animate({ 'maxWidth': '500px'}, 200);
      $('#login-modal-view').animate({ 'opacity': '0'}, 200);
      setTimeout(function() {
        $('#login-modal-view').attr( 'style', 'display: none;');
        $('#password-modal-view').attr( 'style', 'display: block;');
      } , 200);
  });
};

export const backToLogin = () => {
  $('#back-from-password').click(function () {
      console.log("clicked");
      $('#login-modal-dialog').animate({ 'margin': '1.75rem auto' }, 200);
      $('#login-modal-dialog').animate({ 'maxWidth': '500px'}, 200);
      $('#password-modal-view').animate({ 'opacity': '0'}, 200);
      setTimeout(function() {
        $('#password-modal-view').attr( 'style', 'display: none;');
        $('#login-modal-view').attr( 'style', 'display: block;');
      } , 200);

  });
};

export const switchToSignup = () => {
  $('#switch-to-signup').click(function () {
      console.log("clicked");
      $('#login-modal-dialog').animate({ 'margin': '0 auto' }, 200);
      $('#login-modal-dialog').animate({ 'maxWidth': '100vw'}, 200);
      $('#login-modal-view').animate({ 'opacity': '0'}, 150);
      $('#signup-modal-view').animate({ 'opacity': '100'}, 300);

      setTimeout(function() {
        $('#signup-modal-view').attr( 'style', 'display: block;');
        $('#login-modal-view').attr( 'style', 'display: none;');
      } , 200);
  });
};

export const closeLoginModal = () => {
  $('#close-login-modal').click(function () {
      console.log("clicked");
      $( "#loginModal" ).addClass( "login-modal-backdrop-blurout", 200);
      $( "#loginModal" ).animate({ 'opacity': '0'}, 200);

      setTimeout(function() {
        console.log("timeout worked!!")
        $( "#loginModal" ).removeClass( "login-modal-backdrop-blurout");
        $('#loginModal').modal('hide');
        $( "#loginModal" ).removeClass( "show");
        $( "#loginModal" ).attr( "style", "display: none;");
        $('#signup-modal-view').attr( 'style', 'display: none;');
        $( ".modal-backdrop" ).remove();
      } , 200);

  });
};

export const closeAboutModal = () => {
  $('#close-about-modal').click(function () {
      console.log("clicked");
      $( "#aboutModal" ).addClass( "login-modal-backdrop-blurout", 200);
      $( "#aboutModal" ).animate({ 'opacity': '0'}, 200);
      setTimeout(function() {
        console.log("timeout worked!!")
        $( "#aboutModal" ).removeClass( "login-modal-backdrop-blurout");
        $('#aboutModal').modal('hide');
        $( "#aboutModal" ).removeClass( "show");
        $( "#aboutModal" ).attr( "style", "display: none;");
        $( ".modal-backdrop" ).remove();
      } , 200);

  });
};

export const setLoginModal = () => {
  $('#login-modal-trigger').click(function () {
      console.log("clicked");
      $('#login-modal-dialog').animate({ 'margin': '1.75rem auto' }, 200);
      $('#login-modal-dialog').animate({ 'maxWidth': '500px'}, 200);
      $('#login-modal-view').attr( 'style', 'display: block;');
      $( "#loginModal" ).attr( "style", "display: block;");
      $( "#loginModal" ).attr( 'style', 'opacity: 100;');
  });
};

export const setSignUpModal = () => {
  $('#signup-modal-trigger').click(function () {
      console.log("clicked");
      $('#login-modal-view').attr( 'style', 'display: none;');
      $('#login-modal-dialog').animate({ 'maxWidth': '100vw'}, 200);
      $('#signup-modal-view').animate({ 'opacity': '100'}, 300);
      $('#signup-modal-view').attr( 'style', 'display: block;');
      $( "#loginModal" ).attr( "style", "display: block;");
      $( "#loginModal" ).attr( 'style', 'opacity: 100;');
  });
};



