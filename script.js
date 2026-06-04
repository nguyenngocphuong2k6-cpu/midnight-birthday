const startBtn = document.getElementById("startBtn");

const welcomeScreen = document.getElementById("welcomeScreen");

const sky = document.getElementById("sky");

const moon = document.getElementById("moon");

const popup = document.getElementById("popup");

const popupText = document.getElementById("popupText");

const specialStar = document.getElementById("specialStar");

const birthdayCard = document.getElementById("birthdayCard");

const birthdayMusic = document.getElementById("birthdayMusic");

const imageMusic = document.getElementById("imageMusic");

const friendsBtn = document.getElementById("friendsBtn");
const quotesBtn = document.getElementById("quotesBtn");

const friendsGallery = document.getElementById("friendsGallery");
const quotesGallery = document.getElementById("quotesGallery");

const friendImages = document.querySelectorAll(".friends-image");
const quoteImages = document.querySelectorAll(".quote-image");

/* START WEBSITE */
startBtn.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");

  sky.classList.remove("hidden");

  moon.classList.remove("hidden");
  specialStar.classList.remove("hidden");
  friendsBtn.classList.remove("hidden");
  quotesBtn.classList.remove("hidden");
});

/* POPUP FUNCTION */
function showPopup(message) {
  popup.classList.remove("hidden");
  popupText.innerText = message;
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 2500);
}

/* WISHES */
const wishes = [
  "Mong mày luôn hạnh phúc ✨",
  "Chúc mày luôn cười thật nhiều 💖",
  "Hy vọng mọi điều tốt đẹp sẽ đến với mày 🌸",
  "Cảm ơn vì đã xuất hiện trong cuộc đời này 🌙",
  "Mày xứng đáng với những điều đẹp nhất 💕",
  "Mong mọi điều may mắn sẽ tìm đến mày 🍀",
  "Tuổi mới rồi, phải vui hơn nha 💖",
  "Đêm nay cả vũ trụ đang chúc mừng mày 🌌",
  "Mày thật sự rất đặc biệt 🌙",
  "Mong tương lai của mày sẽ đầy ánh sáng ✨",
  "Chúc cô gái này mãi luôn rực rỡ 🌸",
  "Có lẽ hôm nay bầu trời đẹp hơn vì mày ✨",
  "Mày làm thế giới này dễ thương hơn đó 💕",
  "Mong mọi điều tốt đẹp sẽ đến với mày 🌸",
  "Mỗi ngày đều sẽ là một ngày tuyệt vời ✨",
  "Mong mọi ước mơ của mày đều thành hiện thực ⭐",
  "Mày xứng đáng với những điều đẹp nhất 💕",
  "Chúc mày luôn được yêu thương thật nhiều 💫",
  "Tuổi mới sẽ mang đến những điều kỳ diệu 🌌",
  "Hy vọng mày sẽ luôn bình yên và hạnh phúc ☁️",
  "Có những người xuất hiện như một vì sao ✨",
  "Chúc cho mọi ngày của mày đều ngập tràn ánh sáng 💖",
  "Mong rằng mày sẽ luôn giữ được sự dịu dàng ấy 🌸",
  "Mong những điều buồn sẽ ở lại phía sau ✨",
  "Chúc mày luôn gặp được những người tốt 🌸",
  "Cứ hạnh phúc thôi, còn lại để vũ trụ lo 🌌",
  "Mong nụ cười của mày sẽ luôn tồn tại 💖",
  "Cảm ơn vì đã là chính mày 🌙",
  "Mày làm thế giới này dễ thương hơn đó 💕",
  "Hy vọng tuổi mới sẽ dịu dàng với mày hơn ☁️",
  "Mong những vì sao sẽ luôn bảo vệ mày ⭐",
  "Chúc cho mọi điều mày mong đều sẽ đến 🎁",
  "Mày xứng đáng được yêu thương thật nhiều 💫",
  "Mong tương lai của mày sẽ đầy ánh sáng ✨",
  "Tuổi mới rồi, phải vui hơn nha 💖",
  "Mày thật sự rất đặc biệt 🌙",
  "Mong mọi điều may mắn sẽ tìm đến mày 🍀",
  "Chỉ cần mày hạnh phúc là được 💕",
  "Mong những điều dịu dàng nhất sẽ đến với mày 🌷",
  "Hy vọng mỗi sáng thức dậy mày đều thấy bình yên ☁️",
  "Mong trái tim mày sẽ luôn đầy ắp yêu thương 💕",
  "Mày xứng đáng với một cuộc đời thật đẹp 🌸",
  "Mong mọi hành trình phía trước đều đầy ánh sáng 🌙",
  "Chúc cho những điều tốt đẹp luôn tìm đến mày ⭐",
  "Hy vọng nụ cười của mày sẽ mãi rực rỡ ✨",
  "Mong tuổi mới mang đến thật nhiều yêu thương 🎁",
  "Mày là một điều rất đẹp trong cuộc đời này 💫",
  "Hy vọng thế giới sẽ luôn dịu dàng với mày 🌷",
  "Mong rằng mày sẽ luôn được yêu thương 💖",
  "Chúc cho mọi ngày sau này đều đáng nhớ 🎆",
  "Mong cuộc sống sẽ luôn nhẹ nhàng với mày 🌷",
  "Tuổi mới nhớ yêu bản thân nhiều hơn nha 💕",
  "Mong mỗi ngày của mày đều đầy tiếng cười 🌙",
  "Chúc mọi điều tốt đẹp sẽ luôn ở cạnh mày 🍀",
  "Mong rằng mày sẽ luôn tìm thấy niềm vui trong cuộc sống 🌈",
  "Mong mọi nỗi buồn rồi cũng sẽ qua 🌸",
  "Mong rằng mày sẽ luôn được bao quanh bởi tình yêu thương 💖",

  //English wishes
  "Happy Birthday to the prettiest girl ✨",
  "You are a shining star 🌟",
  "You deserve all the love 💖",
  "May your dreams come true 🌙",
  "Hope happiness always finds you 💫",
  "You make this world softer 🌸",
  "Wishing you endless happiness ✨",
  "You are literally sunshine ☀️",
  "Stay cute forever 💕",
  "May this year become magical 🌌",
  "The stars look prettier tonight ⭐",
  "Hope your smile never fades 🌷",
  "You're one of the best things in this world 💖",
  "May your heart always stay warm 🌸",
  "I hope beautiful things find you 🌙",
  "You deserve gentle days and peaceful nights ☁️",
  "Everything feels brighter with you ✨",
  "May your birthday sparkle like the galaxy 🌌",
  "Your existence is already a gift 🎁",
  "May all sadness disappear tonight 💫",
  "Never forget how loved you are 💖",
  "Wishing you peace, joy and love 🌸",
  "The universe is celebrating you tonight 🌙",
  "Hope every tomorrow treats you kindly ✨",
  "You are someone truly unforgettable 💕",
  "May your life bloom beautifully 🌷",
  "Hope your future shines brighter than stars ⭐",
];

/* RANDOM MESSAGE */
function randomWish() {
  return wishes[Math.floor(Math.random() * wishes.length)];
}

/* STARS */
const allStars = document.querySelectorAll(".star");
const icons = ["⭐", "💖", "🌸", "✨", "🌙", "💕", "☁️"];

/* RANDOM STAR */
allStars.forEach((star) => {
  let valid = false;

  while (!valid) {
    const randomTop = Math.random() * 70 + 10;
    const randomLeft = Math.random() * 80 + 5;

    // Tạm gán vị trí
    star.style.top = randomTop + "%";
    star.style.left = randomLeft + "%";

    const starRect = star.getBoundingClientRect();
    const moonRect = moon.getBoundingClientRect();

    // khoảng đệm thêm quanh mặt trăng
    const padding = 80;

    const overlap = starRect.right > moonRect.left - padding && starRect.left < moonRect.right + padding && starRect.bottom > moonRect.top - padding && starRect.top < moonRect.bottom + padding;

    if (!overlap) {
      valid = true;
    }
  }

  star.style.fontSize = Math.random() * 25 + 25 + "px";

  const randomIcon = icons[Math.floor(Math.random() * icons.length)];

  star.innerHTML = randomIcon;

  star.addEventListener("click", () => {
    showPopup(randomWish());
  });
});

const moonZone = {
  top: 0,
  bottom: 30,
  left: 70,
  right: 100,
};

/* DYNAMIC STARS */
const dynamicStars = document.querySelector(".dynamic-stars");
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("small-star");
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDuration = Math.random() * 3 + 2 + "s";
  dynamicStars.appendChild(star);
}

/* SPECIAL STAR */
specialStar.addEventListener("click", () => {
  birthdayCard.classList.remove("hidden");
  birthdayMusic.currentTime = 0;
  birthdayMusic.play();
});

/* CLOSE BIRTHDAY CARD */
birthdayCard.addEventListener("click", () => {
  birthdayCard.classList.add("hidden");

  birthdayMusic.pause();
  birthdayMusic.currentTime = 0;
});

/* FRIENDS */

friendsBtn.addEventListener("click", () => {
  clearInterval(galleryInterval);

  friendsGallery.classList.remove("hidden");

  imageMusic.pause();
  imageMusic.currentTime = 0;
  imageMusic.play();

  currentImage = 0;

  friendImages.forEach((img) => img.classList.remove("active"));

  friendImages[0].classList.add("active");

  galleryInterval = setInterval(() => {
    friendImages[currentImage].classList.remove("active");

    currentImage = (currentImage + 1) % friendImages.length;

    friendImages[currentImage].classList.add("active");
  }, 3000);
});

/* QUOTES */

quotesBtn.addEventListener("click", () => {
  quotesGallery.classList.remove("hidden");

  imageMusic.currentTime = 0;
  imageMusic.play();

  currentImage = 0;

  quoteImages.forEach((img) => img.classList.remove("active"));

  quoteImages[0].classList.add("active");

  galleryInterval = setInterval(() => {
    quoteImages[currentImage].classList.remove("active");

    currentImage = (currentImage + 1) % quoteImages.length;

    quoteImages[currentImage].classList.add("active");
  }, 3000);
});

/* CLOSE */

friendsGallery.addEventListener("click", () => {
  friendsGallery.classList.add("hidden");

  imageMusic.pause();

  clearInterval(galleryInterval);
});

quotesGallery.addEventListener("click", () => {
  quotesGallery.classList.add("hidden");

  imageMusic.pause();

  clearInterval(galleryInterval);
});
