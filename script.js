const startDate new Date("2025-03-23T00:00:00");

"images/Messenger_creation_04357F33-98AF-4D00-A8BD-5FC130BD3701.jpeg".

const images= [

"inages/Messenger_creation 113C9902-1FCA-400D-BA89-C2E8C5BEAD1B.jpeg".

"images/Messenger_creation_259DE93B-B14F-44E5-B3E8-4956AA696F45.jpeg

"images/Messenger_creation_2E19DEB8-0BA9-4558-AODB-999387984E15.jpeg "images/Messenger_creation_2EF6CFDF-BB1F-4765-8BD8-EEBA2C4E29E5.jpeg

"images/Messenger_creation_315C3F4F-5E4B-4BC6-9144-482343236AA6.jpeg"

"images/Messenger_creation 3426C5DE-D5A2-4162-8137-ED801789215F.jpeg"

"images/Messenger_creation_50957C07-4C28-4974-AE4C-63AC41788632.jpeg" "images/Messenger_creation_5CB82224-7573-4003-A397-82AED78A2946.jpeg"

"images/Messenger. ation_64EDEA4E-OF96-435C-893F-F262A60C3BC3.jpeg

"images/Messenger_creation_66253C39-F33E-4073-8098-EB7E4064AD95.jpeg"

"images/Messenger_creation_6C85544A-4491-4E87-96DD-2602487521A1.J ipeg

"images/Messenger_creation_729EFB91-8C84-44F0-9944-FB2482A9327E.jpeg"

"images/Messenger_creation_788614BB-A625-4830-B345-101F349C53CF.jpeg" "images/Messenger creation BDFE46A8-D2E9-4609-A619-AD2203301001.jpeg"

"images/Messenger_creation_B4E3A763-7FFA-4790-ACFF-5323DA518634.jpeg

"images/Messenger creation D2D89839-5AE9-4733-8CCO-OFCR20A7DA03.jpeg" -6823-4007-8636-119849326044.jpeg

"images/Messenger_creation_DB4B0AD7-6823-4007-B

"images/Messenger_creation_F29ABE7F-2572-45D7-A155-E6AD930BBF87.jpeg" "images/Messenger_creation_FEABC5BC-FC3D-4B0F-A7A1-A7FB7AA88B22.jpeg"

document.getElementById("bgMusic");

function updateCounter() {

}

const now new Date()) const diff now startDate:

const days Math.floor(diff / (1000 60 60 24));

const hours Math.floor((diff / (1000+60+60)) % const minutes Math.floor((diff/ (1000*60)) %60);

const seconds Math.floor((diff/1000) % 60);

Together for <b>${days)</b> days <b>${hours)</b>h <b>${minutes)</b> <b>${seconds}</b>s:

document.getElementById("counter").innerHTML

setInterval(updateCounter, 1000);

updateCounter();

document.getElementById("openBtn").addEventListener("click", () => {

music.play().catch(err console.log(err));

document.getElementById("letter").classList.remove("hidden");

const gallery document.getElementById("gallery"); gallery.innerHTML = "";

images.forEach(src => {

const ing document.createElement("img");

gallery.appendChild(ing): });

document.getElementById("openBin").style.display = "none";

});
