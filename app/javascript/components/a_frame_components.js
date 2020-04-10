const updatePosition = () =>  { AFRAME.registerComponent('update-position', {
    tick: function () {
      const el = this.el

      if (el.id.includes("selected")){
        const id = el.id.replace("selected", "");
        const infoRotator = document.getElementById(`${id}inforotatorselected`)

        infoRotator.object3D.position.set(
          el.object3D.position.x,
          el.object3D.position.y,
          el.object3D.position.z
        );
      }
    }
  });
}

const scaleControl = () =>  { AFRAME.registerComponent('scale-control', {
    update: function () {
      const size = document.querySelector("#size")
      const el = this.el

      // console.log("I WORK!!")

      const scale = document.getElementById("savescale")
      size.addEventListener('input', (event) => {
        if (el.id.includes("selected")) {
          // const selectedEl = document.querySelector()
          el.object3D.scale.set(size.value, size.value, size.value);
          scale.value = size.value
        }
      })
    }
  });
}

const rotationControl = () => { AFRAME.registerComponent('rotation-control', {
    update: function () {
      const rx = document.querySelector("#rx");
      const ry = document.querySelector("#ry");
      const rz = document.querySelector("#rz");
      const el = this.el


        const values = [rx, ry, rz]
        values.forEach(value => {
          value.addEventListener('input', (event) => {
            if (el.id.includes("selected")) {
              const rotx = document.getElementById("saverotx")
              const roty = document.getElementById("saveroty")
              const rotz = document.getElementById("saverotz")
              const id = el.id.replace("selected", "");

              const currentEl = document.querySelector(`#${id}selected`);
              const info = document.querySelector(`#${id}inforotatorselected`);

              rotx.value = rx.value;
              roty.value = ry.value;
              rotz.value = rz.value;

              currentEl.object3D.rotation.set(
                THREE.Math.degToRad(rx.value),
                THREE.Math.degToRad(ry.value),
                THREE.Math.degToRad(rz.value)
              );
              if (info != null ) {
                info.object3D.rotation.set(
                  THREE.Math.degToRad(0),
                  THREE.Math.degToRad(ry.value),
                  THREE.Math.degToRad(0)
                );
              }
            }
          });
        })
    }
  });
}

const showPanel = () => { AFRAME.registerComponent('toggle-side-panel', {
    init: function () {
      const el = this.el;
      const panel = document.querySelector(".sidePanel")
      const pic = document.querySelector(`#${el.id.replace("selected", "")}painting`)
      let start = 0
      let end = 0

      el.addEventListener('mousedown', function() {
        start = +new Date();
      })

      el.addEventListener('mouseup', function (event) {
        end = +new Date();
        const diff = end - start;
        console.log(`${diff} is the amount of time`)

        // const innerEl = document.getElementById(el.id);

        const rx = document.querySelector("#rx");
        const ry = document.querySelector("#ry");
        const rz = document.querySelector("#rz");
        const size = document.querySelector("#size")

        const posx = document.getElementById("saveposx")
        const posy = document.getElementById("saveposy")
        const posz = document.getElementById("saveposz")
        const rotx = document.getElementById("saverotx")
        const roty = document.getElementById("saveroty")
        const rotz = document.getElementById("saverotz")
        const scale = document.getElementById("savescale")
        const form = document.getElementById('saveArtworkForm')

        const spaceID = document.getElementById('space-id').value
        const artworkID = el.id.replace("entity", "").replace("selected", "")

        // const button = document.getElementById('saveArtworkButton');
        // const form = document.getElementById('saveArtworkForm');
        if (diff < 170) {
          if (panel.children[0].innerText !== pic.alt) {
            panel.children[0].innerText = pic.alt;
            panel.classList.remove("hidden");

            rx.value = el.getAttribute('rotation').x;
            ry.value = el.getAttribute('rotation').y;
            rz.value = el.getAttribute('rotation').z;
            size.value = el.getAttribute('scale').x;

            form.action = `/spaces/${spaceID}/artworks/${artworkID}`
            // form.action = space_artwork_path(spaceID,artworkID)


            posx.value = el.getAttribute('position').x
            posy.value = el.getAttribute('position').y
            posz.value = el.getAttribute('position').z
            rotx.value = el.getAttribute('rotation').x
            roty.value = el.getAttribute('rotation').y
            rotz.value = el.getAttribute('rotation').z
            scale.value = el.getAttribute('scale').x

          } else if (panel.classList.contains("hidden")) {
            panel.children[0].innerText = pic.alt;
            panel.classList.remove("hidden");
            rx.value = el.getAttribute('rotation').x;
            ry.value = el.getAttribute('rotation').y;
            rz.value = el.getAttribute('rotation').z;
            size.value = el.getAttribute('scale').x;

            form.action = `/spaces/${spaceID}/artworks/${artworkID}`
            // form.action = space_artwork_path(spaceID,artworkID)

            posx.value = el.getAttribute('position').x
            posy.value = el.getAttribute('position').y
            posz.value = el.getAttribute('position').z
            rotx.value = el.getAttribute('rotation').x
            roty.value = el.getAttribute('rotation').y
            rotz.value = el.getAttribute('rotation').z
            scale.value = el.getAttribute('scale').x
          } else {
            panel.children[0].innerText = "";
            panel.classList.add("hidden");
          }
        }
      });
    }
  });
}

export { scaleControl };
export { rotationControl };
export { showPanel };
export { updatePosition };
