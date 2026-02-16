// ================= VARIABLES =================
let pageActuelle = 0;
let score = 0;
let noms = ["", ""];

// Questions et réponses
const questions = [
    { q: "Que désirez-vous principalement dans cette connexion ?", options: [
        { text: "Relation décontractée", value: 7 },
        { text: "Relation sérieuse", value: 10 },
        { text: "Amitié d'abord", value: 6 }
    ]},
    { q: "Si vous passiez un après-midi ensemble, que préférez-vous ?", options: [
        { text: "Parler sans arrêt", value: 8 },
        { text: "Faire une activité côte à côte", value: 9 },
        { text: "Moments légers puis partir", value: 6 },
        { text: "Incertain mais curieux", value: 5 }
    ]},
    { q: "Comment imaginez-vous les conversations ?", options: [
        { text: "Profondes et personnelles", value: 10 },
        { text: "Ludiques et sarcastiques", value: 7 },
        { text: "Pratiques et directes", value: 6 },
        { text: "Gênantes au début", value: 5 }
    ]},
    { q: "Pour les loisirs, qu'est-ce qui compte le plus ?", options: [
        { text: "Partager les mêmes intérêts", value: 10 },
        { text: "Différents mais curieux", value: 8 },
        { text: "Indépendants, quelques intersections", value: 6 },
        { text: "Inconnu mais ouvert", value: 5 }
    ]},
    { q: "Si un plan change à la dernière minute, comment penses-tu que cette personne réagirait ?", options: [
        { text: "Calme et flexible", value: 10 },
        { text: "Communicatif et rassurant", value: 8 },
        { text: "Un peu agacé mais compréhensif", value: 6 },
        { text: "Préférerait éviter", value: 5 }
    ]},
    { q: "Quelle importance a l'humour pour votre relation?", options: [
        { text: "Essentiel", value: 10 },
        { text: "Bien mais pas crucial", value: 8 },
        { text: "Subtil, pas constant", value: 6 },
        { text: "Inconnu", value: 5 }
    ]},
    { q: "En cas de désaccord, quelle dynamique est saine ?", options: [
        { text: "Parler immédiatement", value: 10 },
        { text: "Prendre du recul, discuter calmement", value: 8 },
        { text: "Léger, éviter tension", value: 6 },
        { text: "Inconnu mais respect", value: 5 }
    ]},
    { q: "Comment imaginez-vous passer du temps ensemble ?", options: [
        { text: "Conversation en tête-à-tête", value: 10 },
        { text: "Groupes avec d'autres", value: 6 },
        { text: "Routine partagée", value: 8 },
        { text: "Rencontres occasionnelles", value: 5 }
    ]},
    { q: "Quelle énergie apportez-vous l’un à  la deuxième personne ?", options: [
        { text: "Motivant et soutenant", value: 10 },
        { text: "Relaxant et réconfortant", value: 8 },
        { text: "Aventurier et spontané", value: 9 },
        { text: "Inconnu", value: 5 }
    ]},
    { q: "Si vous les présentiez à vos proches, que ressentiriez-vous ?", options: [
        { text: "S’intégrerait facilement", value: 10 },
        { text: "Différent mais intéressant", value: 8 },
        { text: "Mieux vaut garder séparés", value: 6 },
        { text: "Pas imaginé", value: 5 }
    ]},
    { q: "Comment gérer le silence ensemble ?", options: [
        { text: "Confortable et naturel", value: 10 },
        { text: "Un peu gênant mais gérable", value: 8 },
        { text: "Essayer de le remplir", value: 6 },
        { text: "Inconnu", value: 5 }
    ]},
    { q: "À long terme, qu'est-ce qui compte le plus ?", options: [
        { text: "Connexion émotionnelle", value: 10 },
        { text: "Valeurs partagées", value: 9 },
        { text: "Respect mutuel", value: 8 },
        { text: "Flexibilité", value: 5 }
    ]},
    { q: "Décrivez le 'vibe' avec cette personne ?", options: [
        { text: "Calme et posé", value: 10 },
        { text: "Énergique et fun", value: 9 },
        { text: "Profond et stimulant", value: 8 },
        { text: "Indéfini", value: 5 }
    ]},
    { q: "Comment vous sentez- ou sentirez-vous après du temps ensemble?", options: [
        { text: "Énergisé", value: 10 },
        { text: "Émotionnellement comblé", value: 9 },
        { text: "Relaxé", value: 8 },
        { text: "Inconnu", value: 5 }
    ]},
    { q: "Actuellement, comment décrivez-vous votre curiosité ?", options: [
        { text: "Forte", value: 10 },
        { text: "Modérée", value: 8 },
        { text: "Légère", value: 6 },
        { text: "Neutre", value: 5 }
    ]}
];

// ================= FONCTIONS =================
function allerPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function demarrerQuiz() {
    noms[0] = document.getElementById("nom1").value || "Personne 1";
    noms[1] = document.getElementById("nom2").value || "Personne 2";
    pageActuelle = 0;
    score = 0;
    afficherQuestion();
    allerPage("page-quiz");
}

function afficherQuestion() {
    const q = questions[pageActuelle];
    document.getElementById("titre-question").textContent = `Question ${pageActuelle + 1} / ${questions.length}`;
    document.getElementById("texte-question").textContent = q.q;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach((opt, i) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="reponse" value="${opt.value}"> ${opt.text}`;
        optionsDiv.appendChild(label);
        optionsDiv.appendChild(document.createElement("br"));
    });
}

function questionSuivante() {
    const selected = document.querySelector('input[name="reponse"]:checked');
    if (!selected) {
        alert("Veuillez sélectionner une réponse !");
        return;
    }
    score += parseInt(selected.value);

    pageActuelle++;
    if (pageActuelle < questions.length) {
        afficherQuestion();
    } else {
        afficherResultat();
    }
}

function afficherResultat() {
    document.getElementById("resultat-noms").textContent = `${noms[0]} ❤️ ${noms[1]}`;
    const pourcentage = Math.round((score / (questions.length * 10)) * 100);
    let commentaire = "";

    if (pourcentage >= 85) commentaire = "Très compatible 💖";
    else if (pourcentage >= 70) commentaire = "Bonne compatibilité 💕";
    else if (pourcentage >= 50) commentaire = "Compatibilité moyenne 💗";
    else commentaire = "Faible compatibilité 💔";

    document.getElementById("score-final").textContent = `Score : ${pourcentage}% — ${commentaire}`;
    allerPage("page-resultat");
}
