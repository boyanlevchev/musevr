const scaleControl = () =>  { AFRAME.registerComponent('scale-control', {
    init: function () {
      this.el.object3D.scale.set(1, 1, 1)
    },
    update: function () {
      const size = document.querySelector("#size")
      const el = this.el
      size.addEventListener('input', (event) => {
        if (el.id.includes("selected")) {
          // const selectedEl = document.querySelector()
          el.object3D.scale.set(size.value, size.value, size.value);
        }
      })
    }
  });
}

const rotationControl = () => { AFRAME.registerComponent('rotation-control', {

    init: function () {
      const rx = document.querySelector("#rx");
      const ry = document.querySelector("#ry");
      const rz = document.querySelector("#rz");

      rx.value = this.el.getAttribute('rotation').x;
      ry.value = this.el.getAttribute('rotation').y;
      rz.value = this.el.getAttribute('rotation').z;
    },


    update: function () {
      const rx = document.querySelector("#rx");
      const ry = document.querySelector("#ry");
      const rz = document.querySelector("#rz");
      const el = this.el


        const values = [rx, ry, rz]
        values.forEach(value => {
          value.addEventListener('input', (event) => {
            if (el.id.includes("selected")) {
              const id = el.id.replace("selected", "");

              const currentEl = document.querySelector(`#${id}selected`);
              const info = document.querySelector(`#${id}inforotatorselected`);

              currentEl.object3D.rotation.set(
                THREE.Math.degToRad(rx.value),
                THREE.Math.degToRad(ry.value),
                THREE.Math.degToRad(rz.value)
              );
              info.object3D.rotation.set(
                THREE.Math.degToRad(0),
                THREE.Math.degToRad(ry.value-90),
                THREE.Math.degToRad(0)
              );
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

      el.addEventListener('click', function () {

        const innerEl = document.querySelector(`#${el.id.replace("selected", "")}innerselected`);

        const rx = document.querySelector("#rx");
        const ry = document.querySelector("#ry");
        const rz = document.querySelector("#rz");
        const size = document.querySelector("#size")


        if (panel.children[0].innerText !== pic.alt) {
          panel.children[0].innerText = pic.alt;
          panel.classList.remove("hidden");
          rx.value = innerEl.getAttribute('rotation').x;
          ry.value = innerEl.getAttribute('rotation').y;
          rz.value = innerEl.getAttribute('rotation').z;
          size.value = el.getAttribute('scale').x;

        } else if (panel.classList.contains("hidden")) {
          panel.children[0].innerText = pic.alt;
          panel.classList.remove("hidden");
          rx.value = innerEl.getAttribute('rotation').x;
          ry.value = innerEl.getAttribute('rotation').y;
          rz.value = innerEl.getAttribute('rotation').z;
          size.value = el.getAttribute('scale').x;

        } else {
          panel.children[0].innerText = "";
          panel.classList.add("hidden");
        }
      });
    }
  });
}

export { scaleControl };
export { rotationControl };
export { showPanel };

