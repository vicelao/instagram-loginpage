window.addEventListener('load', () => {
  let id = 0;
  let isFinished = false;

  setInterval(function () {
    let newImage = document.getElementById(`home_${id}`);
    newImage.id = getNewId(newImage.id);

    if (isFinished === false) {
      newImage.classList.add('fading-out');
    }
  }, 4500);

  const getNewId = (newId) => {
    id = newId.slice(-1);
    id = parseInt(id, 10);
    if (++id === 4) {
      id = 0;
      isFinished = true;
    }
    return `home_${id}`;
  };
});

// =====================================================================================
//
// Essa seleção aqui foi o começo da ideia de implementação de fotos passando
// automaticamente. Senti a necessidade de adicionar um efeito de fading-out e
// por isso comecei a fazer o código acima. Há implementações melhores, mas
// preferi me desafiar e tentar fazer do zero.
//
// window.addEventListener("load", () => {
//   let time = 0;
//   let currentImage = document.querySelector("#home-images");
//
//   currentImage.src = `./img/celular-${time}.png`;
//
//   setInterval(function () {
//     currentImage.src = getNewSrc(currentImage.src);
//   }, 3000);
//
//   const getNewSrc = (src) => {
//     if (++time === 4) {
//       time = 0;
//     }
//     return (src = `./img/celular-${time}.png`);
//   };
// });
// =====================================================================================
