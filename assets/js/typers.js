const words = [
    "Bash",
    "HTML/CSS",
    "JavaScript",
    "PHP",
    "Python",
    "SQL",
    "Java",
    "C#",
    "Docker",
    "Node.js",
    "C/C++",
    "React",
    "Linux",
    "Windows"
];

const output = document.getElementById("typing-text");

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeLoop() {
    const currentWord = words[wordIndex];

    output.textContent = currentWord.slice(0, characterIndex);

    let delay = deleting ? 70 : 120;

    if (!deleting && characterIndex < currentWord.length) {
        characterIndex++;
    } else if (!deleting) {
        deleting = true;
        delay = 1200;
    } else if (characterIndex > 0) {
        characterIndex--;
    } else {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 300;
    }

    setTimeout(typeLoop, delay);
}

typeLoop();
