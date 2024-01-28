const customButton = bhpSettings.n_CustomButton
if (customButton.name && customButton.link) {

    const navbar = $("div.primary > div.grid > div.push-left > ul")
    const li = document.createElement("li")
    const a = document.createElement("a")

    a.href = customButton.link
    a.innerText = customButton.name

    li.appendChild(a)

    navbar[0].appendChild(li)
}

let mainDiv = document.getElementsByClassName("bottom-bar")

// If the user is logged in because there isn't a bottom navbar if they aren't
if (mainDiv[0])
    mainDiv[0].childNodes[0].nextSibling.innerHTML += `<li>
                                                        <a href='https://www.brickite.com/promocodes'>Promocodes</a>
                                                       </li>
                                                       <li>
                                                        <a href='https://discord.gg/brickite'>Discord</a>
                                                       </li>`
