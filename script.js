const startDate = new Date("2025-03-23T00:00:00");

const images = [
  "images/Messenger_creation_04357F33-98AF-4D00-A8BD-5FC130BD3701.jpeg",
  "images/Messenger_creation_113C9902-1FCA-4D0D-BAB9-C2E8C58EAD1B.jpeg",
  "images/Messenger_creation_259D9E3B-B14F-44E5-B3E8-4956A696F45.jpeg",
  "images/Messenger_creation_2E19DEB8-0BA9-4558-A0DB-999387984E15.jpeg",
  "images/Messenger_creation_2EF6CFDF-BB1F-4765-8BD8-EEBA2C4E29E5.jpeg",
  "images/Messenger_creation_3153CF4F-5E4B-4BC6-9144-4B23A3236AA6.jpeg",
  "images/Messenger_creation_3426C5DE-D5A2-4162-B137-EDB017B9215F.jpeg",
  "images/Messenger_creation_50957C07-4C2B-4974-AE4C-63AC41788632.jpeg",
  "images/Messenger_creation_5CB82224-7573-4D03-A397-82AED78A2946.jpeg",
  "images/Messenger_creation_64EDEA4E-0F96-435C-893F-F262A60C3BC3.jpeg",
  "images/Messenger_creation_66253C39-F33E-4D73-B09B-EB7E4064AD95.jpeg",
  "images/Messenger_creation_6C85544A-4491-4EB7-96DD-26D24B7521A1.jpeg",
  "images/Messenger_creation_729EFB91-8C84-44F0-9944-FB24B2A9327E.jpeg",
  "images/Messenger_creation_788614BD-A625-483D-B345-101F349C53CF.jpeg",
  "images/Messenger_creation_8DFE46A8-D2E9-46D9-A619-AD22D3301D01.jpeg",
  "images/Messenger_creation_B4E3A763-77FA-479D-ACFF-5323DA51B634.jpeg",
  "images/Messenger_creation_D2DB9839-5AE9-4733-8CC0-0FCB20A7DA03.jpeg",
  "images/Messenger_creation_DB4B0AD7-6823-4C07-B636-119B49326C44.jpeg",
  "images/Messenger_creation_F29ABE7F-2572-45D7-A155-E6AD93DBBF87.jpeg",
  "images/Messenger_creation_FEABC5BC-FC3D-4B0F-A7A1-A7FB7AA8BB22.jpeg"
];

const music = new Audio("music/Libu-Libong Buwan (Uwian) - Kyle Raphael (Official Music Video).mp3");
music.loop = true;

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const counter = document.getElementById("counter");
  if (counter) {
    counter.innerHTML =
      `❤️ Together for <b>${days}</b> days <b>${hours}</b>h <b>${minutes}</b>m <b>${seconds}</b>s ❤️`;
  }
}

setInterval(updateCounter, 1000);
updateCounter();

document.getElementById("openBtn").addEventListener("click", () => {
  music.play();

  document.getElementById("letter").classList.remove("hidden");

  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });

  document.getElementById("openBtn").style.display = "none";
});
