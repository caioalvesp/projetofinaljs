const banners = [
  {
    title: 'Elden Ring',
    description:
      'Elden Ring is a fantasy, action and open world game with RPG elements such as stats, weapons and spells. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    image: 'elden-ring.webp'
  },
  {
    title: 'Red Dead Redemption 2',
    description: 'Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.',
    image: 'rdr2.webp'
  },
  {
    title: 'The Witcher 3',
    description: 'Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.',
    image: 'the-witcher3.webp'
  }
];

const mioloCarousel = document.querySelector('#miolo-carousel');

const generateBanner = () => {
  let itensCarousel = '';
  let idx = 0;

  for (const banner of banners) {
    let active = '';
    if (idx === 0) {
      active = 'active';
    }

    itensCarousel += `
    <div class="carousel-item ${active}">
      <img src="./assets/img/imgs-banners/${banner.image}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${banner.title}</h5>
        <p>${banner.description}</p>
      </div>
    </div>
    `;

    idx++;
  }

  mioloCarousel.innerHTML = itensCarousel;
};

document.addEventListener('DOMContentLoaded', function () {
  generateBanner();
});
