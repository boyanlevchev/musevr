
export const menuOpen = () => {
AFRAME.registerComponent('infoopen', {
    init: function () {
      const el = this.el;
      if (el != null ) {
        el.addEventListener('click', function () {
          const id = el.id.replace("selected", "").replace("VideoGroup", "");
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
      const cleanEl = el.id.replace("VideoGroup", "");
      const innerEl = document.getElementById(`${el.id}inner`)
      const rotator = document.getElementById(`${cleanEl}inforotator`)
      console.log(rotator.id, "rotator")

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

      // console.log("el", el.object3D.scale.x === 1)

      // el.setAttribute('geometry', `height: ${(painting.height/painting.width)}`)
      // el.setAttribute('geometry', `width: ${(painting.width/painting.width)}`)
      // // if (el.object3D.scale.x === 1 && el.object3D.scale.y === 1 && el.object3D.scale.z === 1) {
      // //   el.object3D.scale.set(1, (painting.height/painting.width), (painting.width/painting.width));
      // // }

      // aImage.setAttribute('height', painting.height/painting.width);
      // aImage.setAttribute('width', painting.width/painting.width);
      // // aImage.object3D.scale.set(1, (painting.height/painting.width), (painting.width/painting.width));

      // aImageBack.setAttribute('height', painting.height/painting.width);
      // aImageBack.setAttribute('width', painting.width/painting.width);
      // // aImageBack.object3D.scale.set(1, (painting.height/painting.width), (painting.width/painting.width));

      // // imageFrame.setAttribute('scale', { x: 1, y: (painting.height/1000)*0.675, z: (painting.width/1000)*0.85 }); //For uglier frame
      // imageFrame.setAttribute('scale', { x: 1, y: (painting.height/painting.width)*1.2, z: (painting.width/painting.width)*1.2});
      // // imageFrame.object3D.scale.set(1, 1.1, 1.1);

      // // el.setAttribute("x", 1)
      // // el.setAttribute("y", (painting.height/painting.width))
      // // el.setAttribute("z", (painting.width/painting.width))

    // ......................

      el.setAttribute('geometry', `height: ${(painting.height/painting.width)}`)
      el.setAttribute('geometry', `width: ${(painting.width/painting.width)}`)

      aImage.setAttribute('height', painting.height/painting.width);
      aImage.setAttribute('width', painting.width/painting.width);

      // aImageBack.setAttribute('height', painting.height/1000);
      // aImageBack.setAttribute('width', painting.width/1000);

      // imageFrame.setAttribute('scale', { x: 1, y: (painting.height/1000)*0.675, z: (painting.width/1000)*0.85 }); //For uglier frame
      imageFrame.setAttribute('scale', { x: 1, y: (painting.height/painting.width)*1.2, z: (painting.width/painting.width)*1.2});
    }
  });
}

export const setVideoDimensions = () => {
AFRAME.registerComponent('set-video-dimensions', {
    init: function () {
      const el = this.el;
      if (el) {
        const id = el.id.replace("selected", "").replace("VideoGroup", "");
        const video = document.getElementById(`${id}painting`);
        const height = video.videoHeight;
        const width = video.videoWidth;
        const renderedVideo = document.getElementById(`${id}`);
        const playButton = document.getElementById(`${id}PlayButton`);
        renderedVideo.setAttribute('width', width/width);
        renderedVideo.setAttribute('height', height/width);
        playButton.setAttribute('width', ((width/width)/2));
        playButton.setAttribute('height', ((width/width)/2));
      }
    }
  });
};

export const playVideo = () => {
AFRAME.registerComponent('playvideo', {
    init: function () {
      const el = this.el;
      if (el != null ) {
        el.addEventListener('click', function () {
          const id = el.id.replace("selected", "").replace("VideoGroup", "");
          const video = document.getElementById(`${id}painting`);
          const playButton = document.getElementById(`${id}PlayButton`);
          if (video) {
            if (video.paused) {
              video.play()
              playButton.setAttribute("visible", "false")
            } else {
              video.pause()
              playButton.setAttribute("visible", "true")
            }
          }
        });
      }
    }
  });
};
