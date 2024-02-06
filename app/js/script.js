//pre loaddder 

const loadder = document.getElementById("preloadder");

window.addEventListener("load", () => {
    try {
        loadder.style.display = "none";
    } catch (error) {
        console.error("Error hiding preloader:", error);
    }
});

// sticky navbar

window.addEventListener('scroll', function () {
    try {
        const header = document.querySelector('header');
        header.classList.toggle("sticky", window.scrollY > 0);
    } catch (error) {
        console.error("Error toggling sticky class:", error);
    }
});

// nav bar
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('primary-navbar');

document.onclick = function (e) {
    try {
        if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'primary-navbar') {
            toggle.classList.remove('active');
            navbar.classList.remove('active');
        }
    } catch (error) {
        console.error("Error handling document click:", error);
    }
};

toggle.addEventListener('click', () => {
    try {
        toggle.classList.toggle('active');
        navbar.classList.toggle('active');
    } catch (error) {
        console.error("Error toggling active class:", error);
    }
});

// faq

const acc = document.getElementsByClassName('accordian_item');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        try {
            this.classList.toggle('active');
        } catch (error) {
            console.error("Error toggling active class on accordion item:", error);
        }
    });
};



function subscribe() {
    try {
        if(!validSubscription)
        {
            alert("Oops, Error !!! Please enter correct email address!!!");
        }
        else
        {alert("Thanks for Subscribing");}
    } catch (error) {
        console.error("Error handling subscribe function:", error);
    }
    return false;
}

var emailInput = document.getElementById('subscribeEmail');

var validSubscription = true;

    // Add an event listener to check the validity on input change
    emailInput.addEventListener('input', function () {
        // Check if the email is valid
        if (emailInput.validity.valid) {
            emailInput.style.color = 'white';
            validSubscription = true;

        } else {
            // If invalid, set the color to red
            emailInput.style.color = 'red';
            validSubscription = false;
        }
    });