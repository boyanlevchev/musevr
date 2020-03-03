// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

$("#modal-window").find(".modal-content").html("<%= j (render 'add_artwork') %>");
$("#modal-window").modal();
