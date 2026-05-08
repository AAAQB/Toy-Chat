// ar.js — AR recognition module

const CAREERS = {
  0: { id: 'programmer', name: 'Programmer'    },
  1: { id: 'police',     name: 'Police Officer' },
  2: { id: 'teacher',    name: 'Teacher'        },
  3: { id: 'farmer',     name: 'Farmer'         },
  4: { id: 'doctor',     name: 'Doctor'         },
  5: { id: 'astronaut',  name: 'Astronaut'      },
};

document.addEventListener('DOMContentLoaded', () => {
  const scene = document.querySelector('a-scene');

  scene.addEventListener('loaded', () => {
    Object.keys(CAREERS).forEach(index => {
      const target = document.querySelector(`#ar-target-${index}`);
      if (!target) return;

      // Toy recognised — trigger chat
      target.addEventListener('targetFound', () => {
        // Hide old AR character's image & shadow, keep new one visible
        Object.keys(CAREERS).forEach(otherIdx => {
          if (otherIdx !== index) {
            const oldEnt = document.querySelector(`#ar-target-${otherIdx}`);
            if (oldEnt) {
              const img = oldEnt.querySelector('a-image');
              if (img) img.setAttribute('visible', false);
              const shadow = oldEnt.querySelector('a-circle');
              if (shadow) shadow.setAttribute('visible', false);
            }
          }
        });
        const newImg = target.querySelector('a-image');
        if (newImg) newImg.setAttribute('visible', true);
        const newShadow = target.querySelector('a-circle');
        if (newShadow) newShadow.setAttribute('visible', true);

        if (typeof onCareerFound === 'function') {
          onCareerFound(CAREERS[index]);
        }
      });

      // Toy left camera view — keep everything visible, do nothing

      // Toy left camera view — keep everything visible, do nothing
      // target.addEventListener('targetLost', () => {
      //   if (typeof onCareerLost === 'function') {
      //     onCareerLost();
      //   }
      // });
    });
  });
});