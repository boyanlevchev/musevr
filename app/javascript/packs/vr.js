export const saveArtwork = () => {
  const button = document.getElementById('saveArtworkButton');
  const form = document.getElementById('saveArtworkForm');
  button.addEventListener('click', (event) => {
    // console.log("button clicked")
    // console.log(input.innerText)
    form.submit;
  });

}

const counterReached = (counter, assets, loader) => {
  if (counter === (assets.childNodes.length)){
    const scene = document.querySelector('a-scene');
    scene.addEventListener('loaded', function (e) {
      setTimeout(function(){ loader.style.display = "none"; }, 3000);
      console.log("this shit loaded")
    });
  }
}


export const loadingBar = () => {
  const loader = document.querySelector('#loader')
  const assets = document.querySelector('a-assets')
  console.log("loading bar JS is set")
  // assets.addEventListener('timeout', function(e) {
  //   console.log("assets timed out!")
  //   loader.style.display = "none";
  // })
  // assets.addEventListener('loaded', function(e) {
  //   console.log("assets loaded!")
  //   loader.style.display = "none";
  // })
  console.log(assets.childNodes)
  let counter = 0;

  assets.childNodes.forEach( function(asset) {
    if (asset.nodeName === 'IMG'){
      asset.addEventListener('load', function(event){
        console.log("loaded image");
        counter += 1;
        counterReached(counter, assets, loader)
      })
    } else if (asset.nodeName === 'A-ASSET-ITEM') {
      asset.addEventListener('loaded', function(event){
        console.log("loaded 3d model");
        counter += 1;
        counterReached(counter, assets, loader)
      })
    } else {
      counter += 1;
      counterReached(counter, assets, loader)
    }
  })
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
