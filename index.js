// Variables pour le score et la question actuelle
let currentQuestion = 0;
let score = 0;
let interval;

/** Get element depuis le dom */
const questionElement = document.querySelector("#question");
const optionElements = document.querySelectorAll("input[class='rep']");
const button = document.querySelector("#start");
const container = document.querySelector(".question-container");

const footer = document.querySelector("footer")



const repSupp=document.querySelector(".contenaire");
const questions = [
    {

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

function compteARebours(info) {
    const departMinutes = 0.5
    const temps = departMinutes * 60
    const timerElement = document.getElementById("timer")
    /**
     * Il faut refresh la constante `interval`
     * La méthode clearinterval permet de faire un reset de celui-ci
     * doc : clearInterval => https://developer.mozilla.org/fr/docs/Web/API/clearInterval
     * setInterval : https://developer.mozilla.org/en-US/docs/Web/API/setInterval
     */

    if (info === "start") {
        let tempsDecrem = temps;
        interval = setInterval(() => {
            let minutes = parseInt(tempsDecrem / 60, 10)
            let secondes = parseInt(tempsDecrem % 60, 10)

            minutes = minutes < 10 ? "0" + minutes : minutes
            secondes = secondes < 10 ? "0" + secondes : secondes

            timerElement.innerText = `${minutes}:${secondes}`
            tempsDecrem = tempsDecrem <= 0 ? 0 : tempsDecrem - 1
        }, 1000)
    }


    if (info === "nextQuestion") {
        // on stop le chrono interval`
        clearInterval(interval);
        // on lance le chrono interval sur la nouvelle question
        let tempsDecrem = temps;
        interval = setInterval(() => {
            let minutes = parseInt(tempsDecrem / 60, 10)
            let secondes = parseInt(tempsDecrem % 60, 10)

            minutes = minutes < 10 ? "0" + minutes : minutes
            secondes = secondes < 10 ? "0" + secondes : secondes

            timerElement.innerText = `${minutes}:${secondes}`
            tempsDecrem = tempsDecrem <= 0 ? 0 : tempsDecrem - 1
        }, 1000)
    }
}

// compte à rebours
button.addEventListener('click', () => compteARebours("start"));

// remise à zero compte rebours
function resetChrono() {
    const timerElement = document.getElementById("timer");
    // je dois réinitialiser le chrono `interval` dans la fonction `compteARebours`
    compteARebours("nextQuestion");
}

//fin des question compte à rebours disparer
function hideTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.style.display = "none";
    relance();
}

//affiche bouton de relance du questionnaire 
function relance (){
    const b_relance=document.getElementById("new");
    b_relance.style.display ="flex";
    
}

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
        hideTimer();
      
    }
};

// Fonction pour vérifier la réponse et passer à la question suivante
const answer = (e) => {

    const selectedAnswer = e.target.value;
    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
        e.target.style.background = "green";
      audiusTrue();

        //appel fonction remis a zero compteur

    } else {
        console.log("Mauvaise réponse");
        e.target.style.background = "red";
        audius();
    }
    // Permet de donner du temps avant de passer a la prochaine question
    setTimeout(() => {
        currentQuestion++;
        display();
          resetChrono();
    }, 750);
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


const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);

