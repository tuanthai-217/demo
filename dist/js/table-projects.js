////////////////////// /// INPUT DATA /////////////////
///////////////////////////////////////////////////////
const dataProjects =[
    {
        project: 'Avalanche (AVAX)',
        icon: './dist/assets/images/logo.svg',
        onAvaxPad:'May 2022',
        marketCap: '$16.000.000',
        price: '1,0',
        roi:'10x'
    },
    {
        project: 'Avalanche (AVAX)',
        icon: './dist/assets/images/logo.svg',
        onAvaxPad:'April 2022',
        marketCap: '$26.000.000',
        price: '5,0',
        roi:'16x'
    },
    {
        project: 'Avalanche (AVAX)',
        icon: './dist/assets/images/logo.svg',
        onAvaxPad:'May 2022',
        marketCap: '$48.000.000',
        price: '3,22',
        roi:'3x'
    },
    {
        project: 'Avalanche (AVAX)',
        icon: './dist/assets/images/logo.svg',
        onAvaxPad:'May 2022',
        marketCap: '$10.000.000',
        price: '$6,5',
        roi:'17x'
    },
    {
        project: 'Avalanche (AVAX)',
        icon: './dist/assets/images/logo.svg',
        onAvaxPad:'May 2022',
        marketCap: '$6.000.000',
        price: '10,0',
        roi:'22x'
    },
    {
        project: 'Avalanche (AVAX)',
        icon: './dist/assets/images/logo.svg',
        onAvaxPad:'May 2022',
        marketCap: '$16.000.000',
        price: '1,0',
        roi:'10x'
    },
    {
        project: 'Avalanche (AVAX)',
        icon: './dist/assets/images/logo.svg',
        onAvaxPad:'April 2022',
        marketCap: '$26.000.000',
        price: '5,0',
        roi:'16x'
    },
    {
        project: 'Avalanche (AVAX)',
        icon: './dist/assets/images/logo.svg',
        onAvaxPad:'May 2022',
        marketCap: '$48.000.000',
        price: '3,22',
        roi:'3x'
    },
    {
        project: 'Avalanche (AVAX)',
        icon: './dist/assets/images/logo.svg',
        onAvaxPad:'May 2022',
        marketCap: '$10.000.000',
        price: '$6,5',
        roi:'17x'
    },
    {
        project: 'Avalanche (AVAX)',
        icon: './dist/assets/images/logo.svg',
        onAvaxPad:'May 2022',
        marketCap: '$6.000.000',
        price: '10,0',
        roi:'22x'
    },
   
]
////////////////////// END INPUT DATA /////////////////
///////////////////////////////////////////////////////

// Call Page Init
initPage(1)

function initPage(page) {
    let pager = getPager(dataProjects.length, page, 5)
    getTableProjects(pager.startIndex, pager.endIndex, pager)
}

// INNER HTML DATA 
function getTableProjects(indexStart, indexEnd, pager) {
    let table='';
    let thead = `<thead><tr><th>#</th><th>Project</th><th>On AvaxPad</th><th>Market Cap</th><th>Price<img style="margin-left: 0.5rem;" src="./dist/assets/images/icon-down.svg" alt="" /></th><th>ROI</th></tr></thead>`;
    const firstHbody = '<tbody>';
    const lasrHbody = '</tbody>';
    
    table += thead + firstHbody
    let index = indexStart + 1
    for (let i = indexStart;  i <= indexEnd; i++) {
        table += `<tr><td>${index++}</td>`;
        table += `<td><img src="${dataProjects[i].icon}" alt="${dataProjects[i].project}" /> ${dataProjects[i].project}</td>`;
        table += `<td>${dataProjects[i].onAvaxPad}</td>`;
        table += `<td>${dataProjects[i].marketCap}</td>`;
        table += `<td>$${dataProjects[i].price}</td>`;
        table += `<td>${dataProjects[i].roi}</td></tr>`;
    }
    table += lasrHbody;
    document.getElementById('table_projects').innerHTML = table

    let tablePagination = `
                            <ul class="list">
                                <li class="item" onclick="actionPage('0',${pager.currentPage},${pager.totalPages})" id="prev_page">
                                    <img src="./dist/assets/images/icon-back.svg" alt="" />
                                </li>
                                <li class="item">Page ${pager.currentPage} of ${pager.totalPages}</li>
                                <li class="item" id="next_page" onclick="actionPage('1',${pager.currentPage},${pager.totalPages})">
                                    <img src="./dist/assets/images/icon-next.svg" alt="" />
                                </li>
                            </ul>
                        `
    document.getElementById('table_pagination').innerHTML = tablePagination
}

// NEXT ,PREV PAGE
function actionPage(type, current, total) {
    if(type == '0') {
        if(current == 1) return
        initPage(--current)
        console.log(current);
    }else{
        if(current == total) return
        initPage(++current)
        console.log(current);

    }
}

// PAGINATION PAGES
function getPager(totalItems, currentPage = 1, pageSize = 10) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= 5) {
      // less than 5 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 5 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = [];

    for (let index = startPage; index < endPage + 1; index++) {
      pages.push(index)
    };

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }