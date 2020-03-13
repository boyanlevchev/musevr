export const saveArtwork = () => {
  const button = document.getElementById('saveArtworkButton');
  const form = document.getElementById('saveArtworkForm');
  button.addEventListener('click', (event) => {
    // console.log("button clicked")
    // console.log(input.innerText)
    form.submit;
  });

  }



//   // Rails.ajax({
//   //   url: "/books",
//   //   type: "put",
//   //   data: "",
//   //   success: function(data) {},
//   //   error: function(data) {}
//   // })

//   // $.ajax({
//   //     url: "/space",
//   //     type: "PUT",
//   //     data: {a hash of the data retrieved from the inputs},
//   //     dataType: "json",
//   //     success: function(data) {
//   //         //replace data of div you want here using String(data["html"], html being the attribute passed back via json from the controller.
//   //     }
//   // });
