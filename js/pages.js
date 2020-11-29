// Page number
let pageNumber = 0

// Page content
const pages = [
    {
        copy: "We do nothing. We hope that our early successes make up for the embarrassing mess we’ve become. Like Facebook. Or America.",
        background: "#edc7a9",
        circle: "#3e78ed"
    },
    {
        copy: "When something dope comes along, you gotta lock it down! If you’re always frozen in fear and taking too long to figure out what to do, you’ll miss your opportunity.",
        background: "#a1fffe",
        circle: "#e34a47"
    },
    {
        copy:  "If soulmates do exist, they’re not found. They’re made.",
        background: "#d3c7f3",
        circle: "#f7fe00"
    },
    {
        copy: "Here’s an idea. What if we don’t worry about whatever comes next?",
        background: "#faffb8",
        circle: "#b472e6"
    }
]

// Pick relevant tags 
const prevTag = document.querySelector("footer img.prev")
const nextTag = document.querySelector("footer img.next")
const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")

// Functions for clicking buttons 
const next = function () {
    if (pageNumber < (pages.length-1)) {
        pageNumber++;
    } else {
        pageNumber = 0;
    }
    updateSection(pageNumber);
}

const previous = function () {
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        pageNumber = (pages.length-1);
    }
    updateSection(pageNumber);
}

const updateSection = function (pageNumber) {
    outputTag.innerHTML = pages[pageNumber].copy;
    circleTag.style.backgroundColor = pages[pageNumber].circle;
    bodyTag.style.backgroundColor = pages[pageNumber].background;
}

prevTag.addEventListener("click", function () {
    previous();
})

nextTag.addEventListener("click", function () {
    next();
})