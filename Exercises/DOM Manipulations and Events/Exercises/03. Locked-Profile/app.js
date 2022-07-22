function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(button => {
            button.addEventListener('click', (event) => {
                // console.log('here')
                // console.log(event.target.parentElement)
                const profile = event.target.parentElement;
                //to get a radio button that unlock the profile
                //.checked is a property that if returns a true, that means the radio button is clicked
                let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked
                //isActive = true if the profile is unlocked
                if (isActive) {
                    // console.log('unlocked')
                    let divToShow = profile.querySelector('div')
                    if (event.target.textContent === "Show more") {
                        // console.log('show text')
                        divToShow.style.display = 'block'
                        event.target.textContent = "Hide it"
                    } else {
                        // console.log('hide text')
                        divToShow.style.display = 'none'
                        event.target.textContent = "Show more"
                    }
                }
            })
        })
}

