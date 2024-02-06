function createCard(courseData) {
    const cardContainer = document.getElementById("courseContainer");

    // Create a new card div
    const card = document.createElement("div");
    card.classList.add("card");

    // Set inner HTML content for the card
    card.innerHTML = `
        <div class="card_image">
            <img src="${courseData.image}" alt="Course Image">
        </div>
        <div class="card_info">
            <div class="card_info_rating">
                <div class="rating_box">
                    <ion-icon name="star"></ion-icon>
                    <span>${courseData.rating}</span>
                </div>
                <div class="rating_text">
                    <p>${courseData.ratingText}</p>
                </div>
            </div>
            <div class="card_info_text">
                <a href="${courseData.link}" target="_blank">${courseData.title}</a>
            </div>
            <div class="card_info_status">
                <div class="info">
                    <ion-icon name="play-circle"></ion-icon>
                    <p>${courseData.status}</p>
                </div>
                <div class="info">
                    <ion-icon name="time"></ion-icon>
                    <p>${courseData.duration}</p>
                </div>
            </div>
            <div class="card_info_price">
                <div class="price">
                    <h1>${courseData.price}</h1>
                    <p>${courseData.originalPrice}</p>
                </div>
                <a href="${courseData.link}" target="_blank" class="btn btn-learnmore">Learn More</a>
            </div>
        </div>
    `;

    // Append the card to the container
    cardContainer.appendChild(card);
}

// Data for all 6 courses
const coursesData = [
    {
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80",
        rating: "4.4",
        ratingText: "1.1k Rating",
        link: "https://www.crio.do/software-development-fellowship-program",
        title: "Software Development Zero to Pro",
        status: "Live Class",
        duration: "32 Hour",
        price: "$0",
        originalPrice: "160.00"
    },
    {
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        rating: "4.1",
        ratingText: "580 Rating",
        link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiEhoaxkPj-AhVigEsFHajZDykYABAAGgJzZg&ohost=www.google.com&cid=CAESbeD2i_6bQXCOlhA-IHDnhgbWl9UvrIRpgulS3Ah0K-cCo0WM1XPQC-HPOzvQ5jnnRaGfi1T5Dd5G1HjfXnBcxgjrepQaechthB2U9e5oDFtR74gQTnydZv-vJZ5S0WLS6ASokvp0A5blQBqlkjw&sig=AOD64_27dZZNmItOwujIZ-F-Y2Y0LqTe1A&q&adurl&ved=2ahUKEwi85v6wkPj-AhVj8DgGHY9MARcQ0Qx6BAgHEAE",
        title: "UI/UX Design Pattern For Applications",
        status: "Online Class",
        duration: "11 Hour",
        price: "$1",
        originalPrice: "60.00"
    },
    {
        image: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
        rating: "4.9",
        ratingText: "2k Rating",
        link: "https://online.stanford.edu/programs/advanced-cybersecurity-program",
        title: "Advanced Cyber Security Course",
        status: "Live Class",
        duration: "22 Hour",
        price: "$1",
        originalPrice: "188.85"
    },
    {
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: "4.6",
        ratingText: "450 Rating",
        link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
        title: "Data Structures & Algorithms - Basic To Advanced Concepts",
        status: "Live Class",
        duration: "32 Hour",
        price: "$2",
        originalPrice: "120.00"
    },
    {
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
        rating: "4.4",
        ratingText: "680 Rating",
        link: "https://www.udemy.com/topic/full-stack-web-development/",
        title: "Full Stack Developer Training - Become a Web Developer",
        status: "Live and Online Classes",
        duration: "16 Hour",
        price: "$4",
        originalPrice: "95.00"
    },
    {
        image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: "4.1",
        ratingText: "380 Rating",
        link: "https://www.codecademy.com/catalog/subject/mobile-development",
        title: "Mobile App Development - Step by Step Guide for 2022",
        status: "Online Class",
        duration: "10 Hour",
        price: "$3",
        originalPrice: "60.56"
    }
];

// Create cards for all courses
coursesData.forEach(course => {
    createCard(course);
});