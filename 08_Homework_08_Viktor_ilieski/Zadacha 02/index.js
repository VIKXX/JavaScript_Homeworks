

let url = "https://rickandmortyapi.com/api/character"

const fetchUserData = async () => {
    try {
        const response = await fetch(url)
        const userData = await response.json()

        const profileCharacterContainer = document.getElementById("all-characters-container");

        // console.log(userData)

        //Kreiranje na div na sekoi 5 karakteri (i+=5)
        for (let i = 0; i < userData.results.length; i += 5) {
            const card5Characters = document.createElement("div");
            card5Characters.classList.add("character-group");

            //Vo sekoj div (character-group) dodavanje na podatoci za 5 karakteri
            for (let j = i; j < i + 5 && j < userData.results.length; j++) {
                const result = userData.results[j];
                const profileCharacter = document.createElement("div");
                profileCharacter.classList.add("profile-character");



                const imgCharacter = document.createElement("img");
                imgCharacter.src = result.image;
                profileCharacter.appendChild(imgCharacter);

                const nameCharacter = document.createElement("p");
                nameCharacter.textContent = result.name;
                profileCharacter.appendChild(nameCharacter);

                const genderCharacter = document.createElement("p");
                genderCharacter.textContent = result.gender;
                profileCharacter.appendChild(genderCharacter);

                const statusCharacter = document.createElement("p");
                statusCharacter.textContent = result.status;
                profileCharacter.appendChild(statusCharacter);

                if (statusCharacter.textContent === "Alive") {
                    statusCharacter.classList.add("alive-character");
                }

                const numberEpisodesCharacter = document.createElement("p");
                numberEpisodesCharacter.textContent = result.episode.length;
                profileCharacter.appendChild(numberEpisodesCharacter);

                card5Characters.appendChild(profileCharacter);
            }
            profileCharacterContainer.appendChild(card5Characters);
        }
    }

    catch (error) {
        console.log(error)
    }
}

fetchUserData()