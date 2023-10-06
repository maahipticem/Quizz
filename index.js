// Variables pour le score et la question actuelle
let currentQuestion = 0;
let score = 0;


const questionElement = document.querySelector("#question");
const optionElements = document.querySelectorAll("input[class='rep']");
const button = document.querySelector("#start");
const container = document.querySelector(".question-container");


const questions = [
    {
        question: "Quelle est la vitesse du son ?",
        options: ["340 km/h", "450 km/h", "1000 km/h", "300 000 km/h"],
        answer: "340 km/h", 
    },
    {
        question: "Que signifie l'acronyme ADN ?",
        options: ["Acide Désoxyribonucléique", "Activité Définie Nucléique", "Acide Dinenocleique Naturel", "Activité Définitive Normal"],
        answer: "Acide Désoxyribonucléique", 
    },
    {
        question: "Quel est le groupe sanguin le plus rare ?",
        options: ["AB+", "O-", "B+", "AB-"],
        answer: "AB-",
    },
    {
        question: "Combien de cœurs a une pieuvre ?",
        options: ["1", "6", "0", "3"],
        answer: "3",
    },
    {
        question: "Qui a remporté l'Euro (Championnat Européen) en 2004 ?",
        options: ["Portugal", "Belgique", "Grèce", "Brésil"],
        answer: "Grèce", 
    },
    {
        question: "Quel est le seul joueur à avoir remporté la Coupe du Monde plus de 2 fois ?",
        options: ["Pelé", "Messi", "Cristiano Ronaldo", "Mitroglou"],
        answer: "Pelé",
    },
    {
        question: "Dans quelle ville est née la pétanque ?",
        options: ["Roubaix", "Rio de Janeiro", "Marseille", "La Ciotat"],
        answer: "La Ciotat", 
    },
];


// Fonction pour afficher la question actuelle et les réponses
const display = () => {
    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].question;

        // Mettre à jour les boutons de réponse
        for (let i = 0; i < optionElements.length; i++) {
            optionElements[i].value = questions[currentQuestion].options[i];
            optionElements[i].addEventListener("click", answer);
            optionElements[i].style.background = ""; // Réinitialiser la couleur de fond
        }
    } else {
        // Si toutes les questions ont été répondues
        questionElement.textContent = "Quiz terminé ! Votre score : " + score;
    }
};

// Fonction pour vérifier la réponse et passer à la question suivante
const answer = (e) => {
    const selectedAnswer = e.target.value;
    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
        e.target.style.background = "green";
    } else {
        console.log("Mauvaise réponse");
        e.target.style.background = "red";
    }

    // Permet de donner du temps avant de passer a la prochaine question
    setTimeout(() => {
        currentQuestion++;
        display();
    }, 2000);
};

// Attachez l'événement "click" au bouton de démarrage
button.addEventListener("click", () => {
    container.style.display = "flex"; 
    display(); 
    button.style.display = 'none'
});