import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const StarsOverlay = () => {
  const options = {
    preset: "stars",
    particles: {
      move: {
        speed: 5, // Increase the speed of the particles
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: false, // Disable hover effects to keep performance high
        },
      },
    },
  };

  const initialize = (instance) => {
    loadStarsPreset(instance);
  };

  return <Particles options={options} init={initialize} />;
};

export default StarsOverlay;
