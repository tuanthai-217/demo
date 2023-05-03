const URL = "https://avaxpad.fi/"
    // const URL = "http://127.0.0.1:5500/landing_page/"
pathLanding = ['terms-of-use', 'private-policy', 'airdrop']
const keys = [{
        class: "url_home",
        url: `${URL}`,
        scollID: 'home'
    }, {
        class: "url_about",
        url: `${URL}`,
        scollID: 'about'
    }, {
        class: "url_tokenomics",
        url: `${URL}`,
        scollID: 'tokenomics'
    }, {
        class: "url_roadmap",
        url: `${URL}`,
        scollID: 'roadmap'
    }, 
]

let navItemMenus = document.getElementsByClassName('nav-item')
if (localStorage.getItem('scrollId')) {
    let scrollID = document.getElementById(localStorage.getItem('scrollId'))
    scrollID.scrollIntoView()
    activeMenu(localStorage.getItem('scrollId'))
    localStorage.removeItem('scrollId')
}
for (const key of keys) {
    let elements = document.getElementsByClassName(key.class);

    if (elements) {
        for (const element of elements) {
            element.href = key.url;
            if (key.scollID) {
                let eventScroll = document.getElementById(key.scollID)
                element.addEventListener('click', (event) => {
                    for (const path of pathLanding) {
                        if (location.pathname.indexOf(path) != -1) {
                            localStorage.setItem('scrollId', key.scollID)
                            window.location.url = URL
                            return
                        }
                    }
                    activeMenu(key.scollID)
                    eventScroll.scrollIntoView()
                    event.preventDefault()
                })
            }

        }
    }
}

function activeMenu(className) {
    for (const item of navItemMenus) {
        item.classList.remove('active')
        if (item.className.indexOf(className) != -1) {
            item.classList.add('active')
        }
    }
}