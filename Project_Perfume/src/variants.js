// export const fadeIn = (direction, delay)=>{
//     return{
//         hidden: {
//             y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
//             x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
//         },
//         show: {
//             y:0,
//             x:0,
//             opacity:1,
//             transition:{
//                 type: 'tween',
//                 duration: 1.2,
//                 delay: delay,
//                 ease: [0.25, 0.25, 0.25, 0.75],
//             }
//         }
//     }
// }


// variants.js
export const fadeIn = (direction = "up", delay = 0) => {
  let x = 0;
  let y = 0;

  if (direction === "up") y = 60;
  if (direction === "down") y = -60;
  if (direction === "left") x = 60;
  if (direction === "right") x = -60;

  return {
    hidden: {
      opacity: 0,
      x,
      y,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 1.2,
        delay,
      },
    },
  };
};

