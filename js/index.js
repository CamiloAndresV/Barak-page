  const items = document.querySelectorAll('.carousel-item');
  let index = 0;

  function showItem(n) {
    items.forEach((item, i) => {
      item.classList.remove('active');
      if (i === n) item.classList.add('active');
    });
  }

  document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % items.length;
    showItem(index);
  });

  document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    showItem(index);
  });

//   Opcional: cambiar automáticamente cada 5 segundos
  setInterval(() => {
    index = (index + 1) % items.length;
    showItem(index);
  }, 5000);