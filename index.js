// Variables pour le score et la question actuelle
let currentQuestion = 0;
let score = 0;


const questionElement = document.querySelector("#question");
const optionElements = document.querySelectorAll("input[class='rep']");
const button = document.querySelector("#start");
const container = document.querySelector(".question-container");
const footer = document.querySelector("footer")


const questions = [{
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        answer: "Paris",
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        options: ["Océan Atlantique", "Océan Arctique", "Océan Indien", "Océan Pacifique"],
        answer: "Océan Pacifique",
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
        final();
        note();
        buttonNote();
        coordonnées();
    }
};

// Fonction pour vérifier la réponse et passer à la question suivante
const answer = (e) => {
    const selectedAnswer = e.target.value;
    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
        e.target.style.background = "green";
      audiusTrue();
    } else {
        console.log("Mauvaise réponse");
        e.target.style.background = "red";
        audius();
    }

    // Permet de donner du temps avant de passer a la prochaine question
    setTimeout(() => {
        currentQuestion++;
        display();
    }, 1500);
};

// Attachez l'événement "click" au bouton de démarrage ET L'ENLEVER
button.addEventListener("click", () => {
    
    container.style.display = "flex"; 
    footer.style.display = "none";
    display();
    button.style.display = "none";
});

const audius = () => {
       const music  = new Audio("./asset/SF-group1.mp3");
    music.play()
    music.loop = false;
    }

    const audiusTrue = () => {
        const music = new Audio("./asset/yeah-boy-114748.mp3")
        music.play()
        music.loop =false;
    }

//son = audio(SF-asterisk.mp3)



// pseudo utilisé apres click ok 
// utilisateur saisie son pseudo
// utilisateur valide sur ok 
const buttonPseudo = document.querySelector("#buttonPseudo")
buttonPseudo.addEventListener("click", () => {
    pseudo();
})


// recuperer pseudo 
// personnaliser le quizz  en fessant disparaitre h2 
//remplacer avec une phrase+ speudo "A toi de jouer +pseudo" 
const pseudo = () => {

    const name = document.querySelector("#pseudo").value
    const titreSupprime = document.querySelector("#pseudoSupprimer")
    const inputSupprime = document.querySelector("#pseudo")
    const buttonSupprime = document.querySelector("#buttonPseudo")
    const emplacementAffichagePseudo = document.querySelector("#tonPseudo")
    


emplacementAffichagePseudo.innerHTML = name + "<br> à toi de jouer"
titreSupprime.style.display="none"
inputSupprime.style.display="none"
buttonSupprime.style.display="none"






}

// supprimer la derniere reponse 
// demander a l utilisateur de noter 
//demander a l utilisateur de cliquer sur ok pour valider 
// faire apparaitre les coordonnées 



function final (){
    const supReponse1=document.getElementById("reponse1");
    supReponse1.style.display ="none";
    const supReponse2=document.getElementById("reponse2");
    supReponse2.style.display ="none";
    const supReponse3=document.getElementById("reponse3");
    supReponse3.style.display ="none";
    const supReponse4=document.getElementById("reponse4");
    supReponse4.style.display ="none";

}

function note (){
    const note=document.getElementById("note");
    note.style.display ="flex";
}

function buttonNote (){
    const buttonNote=document.getElementById("buttonNote");
    buttonNote.style.display ="flex";
}

function coordonnées(){
    const coordonnées=document.querySelector(".coordonnées");
    coordonnées.style.display ="flex";
}

