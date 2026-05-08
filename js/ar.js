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
        if (typeof onCareerFound === 'function') {
          onCareerFound(CAREERS[index]);
        }
      });

      // Toy left camera view — keep everything visible, do nothing
      // target.addEventListener('targetLost', () => {
      //   if (typeof onCareerLost === 'function') {
      //     onCareerLost();
      //   }
      // });
    });
  });
});