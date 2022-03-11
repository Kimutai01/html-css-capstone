const speakersData = [
  {
    id: 1,
    name: 'Kiprotich Kimutai',
    photo: 'images/speakers/me.jpeg',
    description: 'Co-founder and CEO of kimtech',
    about: 'Kimutai is a kenyan software developer and also a data engineer',
  },
  {
    id: 2,
    name: 'Jameson kui',
    photo: 'images/speakers/person3.jpg',
    description: 'Mechatronic engineer',
    about: 'He is a robotics engineer at tesla',
  },
  {
    id: 3,
    name: 'Mathew King',
    photo: 'images/speakers/me.jpeg',
    description: 'CEO of Netflix',
    about: 'He has 20 years of software development experience. He also came up with netflix which is among the top movie sites',
  },
  {
    id: 4,
    name: 'Kibet amos',
    photo: 'images/speakers/person3.jpg',
    description: 'MD at safaricom',
    about: 'Kibet is the MD of software development at safaricom kenya',
  },
  {
    id: 5,
    name: 'Edwin kun',
    photo: 'images/speakers/person5.jpeg',
    description: 'CEO PWC',
    about: 'Edwin is a business man and also the founder of pwc',
  },
  {
    id: 6,
    name: 'Elsie Munene',
    photo: 'images/speakers/person2.jpg',
    description: 'Embedded programing expert',
    about: 'Elsie is among the leading embedded programming developer in kenya',
  },
];

const speakersBody = document.querySelector('.speaker-list');
const seeMoreButton = document.querySelector('.see-more');
// add speakers dynamically to page
speakersData.forEach((speaker) => {
  speakersBody.innerHTML
  += `
    <div id = "${speaker.id}" class="speaker">
      <span class="speaker-img">
        <img src=${speaker.photo} alt="Paystack, CEO">
      </span>
      <div class="speaker-details">
        <h5 class="color-2 font-2">${speaker.name}</h5>
        <p class="color-1 font-1 description">${speaker.description}</p>
        <div class="dash"></div>
        <p class="about font-2 color-2">
          ${speaker.about}
        </p>
      </div>
    </div> `;
});

const seeLess = (hidespeaker) => {
  if (Number(hidespeaker.id) > 2) {
    hidespeaker.classList.add('see-less');
  }
};

const removeSeeMore = (openSpeaker) => {
  seeMoreButton.addEventListener('click', () => {
    openSpeaker.style.display = 'grid';
    seeMoreButton.style.display = 'none';
  });
};

const seeMore = () => {
  const speakerList = document.querySelectorAll('.speaker');
  speakerList.forEach((speaker) => {
    seeLess(speaker);
    removeSeeMore(speaker);
  });
};
seeMore();
