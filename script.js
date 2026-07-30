const startDate = new Date("2025-03-23T00:00:00");

const images = [
"images/Messenger_creation_04357F33-98AF-4D00-A8BD-5FC130BD3701.jpeg",
"images/Messenger_creation_113C9902-1FCA-4D0D-BAB9-C2E8C58EAD1B.jpeg",
"images/Messenger_creation_259DE93B-B14F-44E5-B3E8-4956AA696F45.jpeg",
"images/Messenger_creation_2E19DEB8-0BA9-4558-A0DB-999387984E15.jpeg",
"images/Messenger_creation_2EF6CFDF-BB1F-4765-8BD8-EEBA2C4E29E5.jpeg",
"images/Messenger_creation_315C3F4F-5E4B-4BC6-9144-4823A3236AA6.jpeg",
"images/Messenger_creation_3426C5DE-D5A2-4162-B137-ED8017B9215F.jpeg",
"images/Messenger_creation_50957C07-4C28-4974-AE4C-63AC41788632.jpeg",
"images/Messenger_creation_5CB82224-7573-4D03-A397-82AED78A2946.jpeg",
"images/Messenger_creation_64EDEA4E-0F96-435C-893F-F262A60C3BC3.jpeg",
"images/Messenger_creation_66253C39-F33E-4D73-B09B-EB7E4064AD95.jpeg",
"images/Messenger_creation_6C85544A-4491-4EB7-96DD-26D24B7521A1.jpeg",
"images/Messenger_creation_729EFB91-8C84-44F0-9944-FB2482A9327E.jpeg",
"images/Messenger_creation_788614BB-A625-483D-B345-101F349C53CF.jpeg",
"images/Messenger_creation_8DFE46A8-D2E9-46D9-A619-AD22D3301D01.jpeg",
"images/Messenger_creation_B4E3A763-7FFA-479D-ACFF-5323DA51B634.jpeg",
"images/Messenger_creation_D2DB9839-5AE9-4733-8CC0-0FCB20A7DA03.jpeg",
"images/Messenger_creation_DB4B0AD7-6823-4C07-B636-119B49326C44.jpeg",
"images/Messenger_creation_F29ABE7F-2572-45D7-A155-E6AD93DBBF87.jpeg",
"images/Messenger_creation_FEABC5BC-FC3D-4B0F-A7A1-A7FB7AA8BB22.jpeg"
];

const music = new Audio("music/Libu-Libong Buwan (Uwian) - Kyle Raphael (Official Music Video).mp3");

function openHeart() {
    music.play();

    let html = `
    <div style="padding:20px;text-align:center;color:white;">
    <h1>Happy Girlfriend's Day ❤️</h1>

    <h2>Hi Mommy 🥺❤️</h2>

    <p>
    Thank you for always staying by my side.
    Thank you for loving me even when I am hard to understand.
    Every moment with you became one of the happiest memories of my life.
    </p>

    <p>
    Since March 23, 2025, you became my home, my peace,
    and my favorite person.
    I promise to love you through every laugh,
    every challenge, every dream,
    and every tomorrow.
    </p>

    <h2 id="timer"></h2>

    <img id="slide" src="${images[0]}"
    style="width:90%;max-width:400px;border-radius:20px;margin:20px auto;display:block;">

    <h2>I Love You So Much Mommy ❤️</h2>

    <p>
    Thank you for choosing me every single day.
    Happy Girlfriend's Day, my love.
    I hope this little surprise makes you smile.
    I can't wait to create thousands more memories with you.
    </p>

    <h2>Forever and Always ❤️</h2>

    <h3>Your baby,<br>Kaz Kaz ❤️</h3>
    </div>
    `;

    document.body.innerHTML = html;

    let i = 0;
    setInterval(()=>{
        i=(i+1)%images.length;
        document.getElementById("slide").src=images[i];
    },2500);

    setInterval(updateTimer,1000);
    updateTimer();
}

function updateTimer(){
    const now=new Date();
    const diff=now-startDate;

    const days=Math.floor(diff/(1000*60*60*24));
    const hours=Math.floor((diff/(1000*60*60))%24);
    const minutes=Math.floor((diff/(1000*60))%60);
    const seconds=Math.floor((diff/1000)%60);

    document.getElementById("timer").innerHTML=
    `❤️ Together for ${days} days ${hours}h ${minutes}m ${seconds}s ❤️`;
}
