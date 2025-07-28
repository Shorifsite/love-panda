document.addEventListener('DOMContentLoaded', () => {
  const loveRing = document.getElementById('loveRing');
  const touchText = document.getElementById('touchText');
  const messageBoard = document.getElementById('messageBoard');
  const pandaBody = document.getElementById('pandaBody');
  const swipeBtn = document.getElementById('swipeBtn');
  const finalStep = document.getElementById('finalStep');
  const bubbleContainer = document.getElementById('bubbleContainer');

  const messages = [
    "Hey Meghu,,💖",
    "hope you are well🌹",
    "Today is your very special day 🐼",
    "Prayers and love to you❤️",
    "And Happy Birthday ✨",
    "Sorry for late wishes you💓",
    "Once again Happy Birthday To You Motu🥰"
  ];
  let msgIndex = 0;

  // First click on ring: hide ring, show message board
  loveRing.addEventListener('click', () => {
    loveRing.style.display = 'none';
    touchText.style.display = 'none';
    messageBoard.style.display = 'block';
    pandaBody.textContent = messages[msgIndex];
  });

  // Swipe button click: next message or show final step
  swipeBtn.addEventListener('click', () => {
    msgIndex++;
    if (msgIndex < messages.length) {
      pandaBody.textContent = messages[msgIndex];
      // Panda animation: briefly "hide" in body
      const panda = document.getElementById('panda');
      panda.style.animation = 'none';
      void panda.offsetWidth; // trigger reflow
      panda.style.animation = null;
    } else {
      messageBoard.style.display = 'none';
      finalStep.style.display = 'block';
      createBubbles();
    }
  });

  // Create floating love bubbles in background
  function createBubbles() {
    const emojis = ['💖','❤️','💕','💘','💞','❣️'];
    for(let i=0; i<60; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.left = Math.random()*100 + 'vw';
      bubble.style.animationDuration = (4 + Math.random()*3) + 's';
      bubble.style.fontSize = (18 + Math.random()*12) + 'px';
      bubble.style.color = emojis[Math.floor(Math.random()*emojis.length)] === '💖' ? '#ff69b4' : '#e40046';
      bubble.innerText = emojis[Math.floor(Math.random()*emojis.length)];
      bubbleContainer.appendChild(bubble);
      // Remove bubble after animation
      setTimeout(() => bubble.remove(), 8000);
    }
  }
});
