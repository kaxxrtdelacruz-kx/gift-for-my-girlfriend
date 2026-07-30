const startDate = new Date("2025-03-23T00:00:00");

const images = [
  "images/Messenger_creation_04357F33-98AF-4D00-A8BD-5FC130BD3701.jpeg",
  "images/Messenger_creation_113C9902-1FCA-4D0D-BAB9-C2E8C58EAD1B.jpeg",
  "images/Messenger_creation_259D9E3B-B14F-44E5-B3E8-4956A696F45.jpeg",
  "images/Messenger_creation_2E19DEBB-0BA9-4558-A0DB-999387984E15.jpeg",
  "images/Messenger_creation_2EF6CFDF-BB1F-4765-88D8-EEBAC4C2E9F5.jpeg",
  "images/Messenger_creation_3153CF4F-5E4D-4FC6-91B4-4B2343236A46.jpeg",
  "images/Messenger_creation_34265CDE-D5A2-4162-B137-EDB01789215F.jpeg",
  "images/Messenger_creation_50957C07-4C2B-4974-AE4C-63AC41788362.jpeg",
  "images/Messenger_creation_5CB82224-7573-4033-A397-82AE078A2946.jpeg",
  "images/Messenger_creation_64EDEA4E-DF96-435C-893F-F262A6C30BC3.jpeg",
  "images/Messenger_creation_66253C39-F33E-4073-B09B-BE7E4064AD95.jpeg",
  "images/Messenger_creation_6C8554A4-4491-4EB7-96D2-26D24B7521A1.jpeg",
  "images/Messenger_creation_729EFB91-BCB4-44F0-9944-FB2482A9327E.jpeg",
  "images/Messenger_creation_788614BD-A625-483D-B345-101F349C53CF.jpeg",
  "images/Messenger_creation_8DFE46A8-D2F0-4609-A61A-AD22D3301D01.jpeg",
  "images/Messenger_creation_B4EA7673-77FA-479D-AFCF-5323DA518634.jpeg",
  "images/Messenger_creation_D2D98399-5AE9-4733-8CC0-DFCBA20A7DA3.jpeg",
  "images/Messenger_creation_DB480AD7-6823-4C07-B636-119B49326C44.jpeg",
  "images/Messenger_creation_F29ABE7F-2572-45D7-A155-E6AD93DBBFB7.jpeg",
  "images/Messenger_creation_FEABC5BC-FC3D-4B0F-A7A1-AF7B7AA8BB22.jpeg"
];

const music = document.getElementById("bgMusic");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("counter").innerHTML =
        `❤️ Together for <b>${days}</b> days <b>${hours}</b>h <b>${minutes}</b>m <b>${seconds}</b>s ❤️`;
}

setInterval(updateCounter, 1000);
updateCounter();

document.getElementById("openBtn").addEventListener("click", () => {

    music.play().catch(err => console.log(err));

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
