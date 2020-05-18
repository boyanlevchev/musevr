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

export const setAboutModal = () => {
  $('#about-modal-trigger').click(function () {
      console.log("clicked");
      $( "#aboutModal" ).attr( "style", "display: block;");
      $( "#aboutModal" ).attr( 'style', 'opacity: 100;');
  });
};
