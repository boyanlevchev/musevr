
export const menuOpen = () => {
AFRAME.registerComponent('infoopen', {
    init: function () {
      const el = this.el;
      el.addEventListener('click', function () {
        const id = el.id.replace("selected", "");
        const info = document.querySelector(`[id^='${id}info']`);
        info.setAttribute('visible', !info.getAttribute('visible'))
      });
    }
  });
};

export const selected = () => {
  AFRAME.registerComponent('selected', {
  init: function () {
    const el = this.el;
    el.addEventListener('click', function () {
      const others = document.querySelectorAll("[id$='selected']")
      if (others != null) {
        others.forEach(other =>
          other.id = other.id.replace("selected", "")
        );
      }
      const innerEl = document.getElementById(`${el.id}inner`)
      const rotator = document.getElementById(`${el.id}innerinforotator`)
      el.id = el.id.concat("selected");
      innerEl.id = innerEl.id.concat("selected");
      rotator.id = rotator.id.concat("selected");
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
      const imageFrame = document.getElementById(`${el.id}innerimageframe`)


      aImage.setAttribute('height', painting.height/1000);
      aImage.setAttribute('width', painting.width/1000);

      imageFrame.setAttribute('scale', { x: 1, y: (painting.height/1000)*0.675, z: (painting.width/1000)*0.85 });

    }
  });
}
