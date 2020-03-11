const scaleControl = () =>  { AFRAME.registerComponent('scale-control', {
    init: function () {
      this.el.object3D.scale.set(1, 1, 1)
    },
    update: function () {
      const size = document.querySelector("#size")
      size.addEventListener('input', (event) => {
        this.el.object3D.scale.set(size.value, size.value, size.value);
      })
    }
  });
}

const rotationControl = () => { AFRAME.registerComponent('rotation-control', {
    // init: function () {
    //   const pic = document.querySelector("#pic")
    //   const pos = pic.getAttribute('rotation');
    //   console.log(Object.values(pos)[0])

    //   this.el.object3D.rotation.set(
    //     THREE.Math.degToRad(Object.values(pos)[0]),
    //     THREE.Math.degToRad(Object.values(pos)[1]),
    //     THREE.Math.degToRad(Object.values(pos)[2])
    //   );
    //   this.el.object3D.rotation.x += Math.PI;
    // },

    update: function () {
      const rx = document.querySelector("#rx");
      const ry = document.querySelector("#ry");
      const rz = document.querySelector("#rz");
      const values = [rx, ry, rz]

      values.forEach(value => {
        value.addEventListener('input', (event) => {
        this.el.object3D.rotation.set(
          THREE.Math.degToRad(rx.value),
          THREE.Math.degToRad(ry.value),
          THREE.Math.degToRad(rz.value)
        );
        this.el.object3D.rotation.x += Math.PI;
      });
      })
    }
  });
}

const showPanel = () => { AFRAME.registerComponent('toggle-side-panel', {
    init: function () {
      const el = this.el;
      el.addEventListener('click', function () {
        document.querySelector(".sidePanel").classList.toggle("hidden")
      });
    }
  });
}

export { scaleControl };
export { rotationControl };
export { showPanel };

