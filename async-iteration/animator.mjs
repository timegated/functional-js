/**
 * animator
 *
 * Used to animate MappedIn camera using keyframes data.
 *
 * interface keyframes {
 *   x: number,
 *   y: number,
 *   zoom: number,
 *   rotation: number,
 *   tilt: number,
 *   duration: number,
 *   pause: number,
 *   easing: string,
 * }
 */

 function animator(keyframesData, mapView) {
  const keyframes = Array.isArray(keyframesData) ? keyframesData : [keyframesData];
  const animationState = {
    keyframe: 0,
    playing: false,
    paused: false,
  };

  // Start animation
  animationState.playing = true;

  // Play first keyframe:
  console.log('Launching animation');
  setTimeout(async () => {
    const keyframe = keyframes[animationState.keyframe]; // Shortcut
    console.log(`Using animation keyframe ${animationState.keyframe}`, keyframe);
    if (animationState.playing) {
      try {
        const params = {
          animationOptions: {
            duration: keyframes[animationState.keyframe].duration,
            easing: keyframes[animationState.keyframe].easing || 'linear',
          },
          cameraOptions: {
            changeZoom: keyframes[animationState.keyframe].changeZoom || true,
            minZoom: keyframes[animationState.keyframe].zoom,
            rotation: keyframes[animationState.keyframe].rotation,
            tilt: keyframes[animationState.keyframe].tilt,
          },
          targets: {
            // These have to correspond to polygons on the mapobject
            coordinates: [{
              x: keyframes[animationState.keyframe].x,
              y: keyframes[animationState.keyframe].y,
            }],
          },
        };
        console.log(params);
        // Probably want to use animate method with a series of polygonal coords
        // const result = await mapView.Camera.focusOn(params);
        // console.log('complete', result);
      } catch (e) {
        console.log('error', e);
      }
    }
    // setTimout loop to pause, then fire next animation, etc
  }, keyframes[animationState.keyframe].pause);
};

export {
  animator
};
