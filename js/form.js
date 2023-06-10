console.log("bite")

const NB_OF_QUESTIONS = 5

function getScore() {
    let form = {
        // "pseudo" : document.getElementById("pseudo").value,
    }

    // if (form.pseudo === "") return

    let score = 0

    let allFiled = true

    for (let i = 1; i <= NB_OF_QUESTIONS; i++) {
        const el = document.getElementById("q" + i.toString()).value
        
        if (el === "") {
            allFiled = false
            break
        }

        form["q" + i.toString()] = el

        if (parseInt(el)) score++
    }

    if (allFiled) {
        alert(`Vous avez eu ${score} points`)
    }
}