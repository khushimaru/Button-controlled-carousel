const track = document.querySelector('.carousel-track');
    const cards = Array.from(document.querySelectorAll('.card'));
    const cardWidth = cards[0].getBoundingClientRect().width + 40; 
    let currentIndex = 0;

    function scrollCarousel(direction) {
      const totalCards = cards.length;

      currentIndex += direction;
      if (currentIndex < 0) {
        currentIndex = totalCards - 1; 
      } else if (currentIndex >= totalCards) {
        currentIndex = 0; 
      }

      updateTrackPosition();
    }

    function updateTrackPosition() {
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      updateActiveCard();
    }

    function updateActiveCard() {
      cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentIndex);
      });
    }

    function searchName() {
      const query = document.getElementById('searchBar').value.toLowerCase();
      const targetCard = cards.find(card =>
        card.dataset.name.toLowerCase().includes(query)
      );

      if (targetCard) {
        currentIndex = cards.indexOf(targetCard);
        updateTrackPosition();
      }
    }

    updateTrackPosition();