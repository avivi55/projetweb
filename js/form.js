console.log("bite")

const NB_OF_QUESTIONS = 1

function getScore() {
    let form = {
        "pseudo" : document.getElementById("pseudo").value,
    }

    // if (form.pseudo === "") {
    //     alert("Mettez un pseudo")
    //     return
    // }

    let score = 0

    for (let i = 1; i <= NB_OF_QUESTIONS; i++) {
        const el = document.getElementById("q" + i.toString()).value
        form["q" + i.toString()] = el

        if (parseInt(el)) {
            score++;
        }
    }

    

    alert(`Vous avez eu ${score} points`)
}