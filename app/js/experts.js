const cardData = [
    {
        name: "Shraddha Khapra",
        job: "Software Developer",
        image: "https://viestories.com/wp-content/uploads/2022/10/cropped-Fc2NAjUacAEHDak.jpg",
        linkedin: "https://www.linkedin.com/in/shradha-khapra/",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Love Babbar",
        job: "Ethical Hacker",
        image: "https://1.bp.blogspot.com/-yyrtgeCKQAQ/YTo1UNMtVEI/AAAAAAAAC48/aaet0f4hrJg1Z_5BRfF_6D_7YpGNmioxQCLcBGAsYHQ/w1600/Screenshot_20210909-215253_Chrome.jpg",
        linkedin: "https://www.linkedin.com/in/love-babbar-38ab2887/",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/"
    },
    {
        name: "Raj Vikram Aditya",
        job: "UI/UX Developer",
        image: "https://th.bing.com/th/id/OIP.TpPGTnN8cS7UOhVe8r4b8gAAAA?pid=ImgDet&rs=1",
        linkedin: "https://www.linkedin.com/in/rajarvp/",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/"
    }
];

// Container to append the cards
const expertMainContainer = document.getElementById('expertMainContainer');

// Generate cards using a for loop
for (let i = 0; i < cardData.length; i++) {
    const card = cardData[i];

    // Create card element
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', `card-${i + 1}`);

    // Create card image
    const cardImage = document.createElement('div');
    cardImage.classList.add('card_image');
    cardImage.innerHTML = `
        <div class="overlay-gradient"></div>
        <img src="${card.image}" alt="${card.name}">
    `;

    // Create card name
    const cardName = document.createElement('div');
    cardName.classList.add('card_name');
    cardName.innerHTML = `<h1>${card.name}</h1>`;

    // Create card job
    const cardJob = document.createElement('div');
    cardJob.classList.add('card_job');
    cardJob.innerHTML = `<p>${card.job}</p>`;

    // Create card social links
    const cardSocial = document.createElement('div');
    cardSocial.classList.add('card_social');
    cardSocial.innerHTML = `
        <a href="${card.linkedin}" target="_blank">
            <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="${card.github}">
            <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="${card.instagram}">
            <ion-icon name="logo-instagram"></ion-icon>
        </a>
    `;

    // Append individual components to the card
    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardName);
    cardElement.appendChild(cardJob);
    cardElement.appendChild(cardSocial);

    // Append the card to the container
    expertMainContainer.appendChild(cardElement);
}