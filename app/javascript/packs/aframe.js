
export const menuOpen = () => {
AFRAME.registerComponent('infoopen', {
    init: function () {
      const el = this.el;
      if (el != null ) {
        el.addEventListener('click', function () {
          const id = el.id.replace("selected", "");
          const info = document.getElementById(`${id}info`);
          if (info != null ) {
            info.setAttribute('visible', !info.getAttribute('visible'))
          }
        });
      }
    }
  });
};

export const selected = () => {
  AFRAME.registerComponent('selected', {
  init: function () {
    const el = this.el;

    el.addEventListener('mouseup', function () {

      const others = document.querySelectorAll("[id$='selected']")
      if (others != null) {
        others.forEach(other =>
          other.id = other.id.replace("selected", "")
        );
      }
      const innerEl = document.getElementById(`${el.id}inner`)
      const rotator = document.getElementById(`${el.id}inforotator`)

      el.id = el.id.concat("selected");

      if (innerEl != null) {
        innerEl.id = innerEl.id.concat("selected");
      }
      if (rotator != null) {
        rotator.id = rotator.id.concat("selected");
      }
    });
  }
});
};

export const updateDimensions = () => {
  AFRAME.registerComponent('updatedimensions', {
    init: function () {
      const el = this.el;
      const painting = document.getElementById(`${el.id}painting`)

      const aImage = document.getElementById(`${el.id}innerimage`)
      const aImageBack = document.getElementById(`${el.id}innerimageback`)
      const imageFrame = document.getElementById(`${el.id}innerimageframe`)

      // el.attributes.geometry.value = `primitive: box; width: 0.15; height: ${painting.height/1000}; depth: ${painting.width/1000}`
      // if ( rotator != null ) {
      //   rotator.attributes.geometry.value = `primitive: box; width: 0.15; height: ${painting.height/1000}; depth: ${painting.width/1000}`
      // }
      el.setAttribute('geometry', `height: ${(painting.height/1000)}`)
      el.setAttribute('geometry', `width: ${(painting.width/1000)}`)

      aImage.setAttribute('height', painting.height/1000);
      aImage.setAttribute('width', painting.width/1000);

      aImageBack.setAttribute('height', painting.height/1000);
      aImageBack.setAttribute('width', painting.width/1000);

      // imageFrame.setAttribute('scale', { x: 1, y: (painting.height/1000)*0.675, z: (painting.width/1000)*0.85 }); //For uglier frame
      imageFrame.setAttribute('scale', { x: 1, y: (painting.height/1000)*1.2, z: (painting.width/1000)*1.2});
    }
  });
}
