const projectAvaxpad = [{
        img: '../assets/images/rectangle.png',
        icon: './dist/assets//images/USDC.svg',
        simpleCoin: 'USD',
        USDC: 72900,
        AVAX: 0.0432,
        status: 1,
        link: 'javascript:void(0)',
        percent: 68,
        date: '05.19.2022',
        tokenPrice: 0.006,
        totalSold: 16,
        totalToken: 50,
        vip: {
            icon: './dist/assets/images/icon_star.svg',
            status: true
        },
        audit: {
            icon: './dist/assets/images/icon_checked.svg',
            status: 1
        },
        kyc: {
            icon: './dist/assets/images/icon_checked.svg',
            status: 1
        },
    },
    {
        img: '../assets/images/rectangle.png',
        icon: './dist/assets//images/USDC.svg',
        simpleCoin: 'USD',
        USDC: 72900,
        AVAX: 0.0432,
        status: 2,
        link: 'javascript:void(0)',
        percent: 50,
        date: '05.19.2022',
        tokenPrice: 0.006,
        totalSold: 16,
        totalToken: 50,
        vip: {
            icon: './dist/assets/images/icon_star.svg',
            status: 1
        },
        audit: {
            icon: './dist/assets/images/icon_checked.svg',
            status: 0
        },
        kyc: {
            icon: './dist/assets/images/icon_checked.svg',
            status: 1
        },
    },
    {
        img: '../assets/images/rectangle.png',
        icon: './dist/assets//images/USDC.svg',
        simpleCoin: 'USD',
        USDC: 72900,
        AVAX: 0.0432,
        status: 3,
        link: 'javascript:void(0)',
        percent: 45,
        date: '05.19.2022',
        tokenPrice: 0.006,
        totalSold: 16,
        totalToken: 50,
        vip: {
            icon: './dist/assets/images/icon_star.svg',
            status: 0
        },
        audit: {
            icon: './dist/assets/images/icon_checked.svg',
            status: 1
        },
        kyc: {
            icon: './dist/assets/images/icon_checked.svg',
            status: 0
        },
    },
]

// INNER HTML DATA 
function getProjectAvax() {
    let cardList = '';
    for (let i = 0; i < projectAvaxpad.length; i++) {
        cardList += `<div class="card-inner">
                        <div class="card-item">
                            <div class="card-head" style="--background_card: url(${projectAvaxpad[i].img})">
                                <div class="backdrop">
                                    <img src="${projectAvaxpad[i].icon}" alt="coin USDC" />
                                    <div class="tranf">
                                        <p>${projectAvaxpad[i].simpleCoin} Coin</p>
                                        <span>01 ${projectAvaxpad[i].simpleCoin} = ${projectAvaxpad[i].AVAX} AVAX</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="row_1">
                                    <button ${changeClassButton(projectAvaxpad[i].status)}>${checkStatus(projectAvaxpad[i].status)}</button>
                                    <p>
                                        <span ${projectAvaxpad[i].vip.status == 1 ? '' : 'style="display: none;"'}>
                                            <img src="${projectAvaxpad[i].vip.icon}" alt="">
                                            VIP
                                        </span>
                                        <span ${projectAvaxpad[i].audit.status == 1 ? '' : 'style="display: none;"'}>
                                            <img src="${projectAvaxpad[i].audit.icon}" alt="">
                                            Audit
                                        </span>
                                        <span ${projectAvaxpad[i].kyc.status == 1 ? '' : 'style="display: none;"'}>
                                            <img src="${projectAvaxpad[i].kyc.icon}" alt="">
                                            KYC
                                        </span>
                                    </p>
                                </div>
                                <div class="row_2">
                                    <div class="progress">
                                        <span>Progress (${projectAvaxpad[i].percent}%)</span>
                                        <span>${projectAvaxpad[i].USDC} ${projectAvaxpad[i].simpleCoin}</span>
                                    </div>
                                    <p class="input_progress" style="--width_progress: ${projectAvaxpad[i].percent}%"}>
                                    </p>
                                </div>
                                <div class="row_3">
                                    <span>Start date:</span>
                                    <span>${projectAvaxpad[i].date}</span>
                                </div>
                                <div class="row_3">
                                    <span>Token price:</span>
                                    <span>${projectAvaxpad[i].tokenPrice}</span>
                                </div>
                                <div class="row_3">
                                    <span>Total sold:</span>
                                    <span>${projectAvaxpad[i].totalSold}M</span>
                                </div>
                                <div class="row_3">
                                    <span>Total token:</span>
                                    <span>${projectAvaxpad[i].totalToken}M</span>
                                </div>
                                <div class="see-detail">
                                    <a href="${projectAvaxpad[i].link}">See details</a>
                                </div>
                            </div>
                        </div>
                    </div>`
    }
    document.getElementById('card_projects').innerHTML = cardList;
}

getProjectAvax();

//changeClassButton
function changeClassButton(status) {
    if (status == 1) {
        return 'class="in-progress"';
    } else if (status == 2) {
        return 'class="up-comming"';
    } else {
        return 'class="ended"';
    }
}

//check status
function checkStatus(status) {
    if (status == 1) {
        return 'In progress';
    } else if (status == 2) {
        return 'Upcomming';
    } else {
        return 'Ended';
    }
}