const addNav = () => {
    const content_div = document.querySelector('#content');
    /*
    <nav id="navbar">
        <div id="logo-wrapper">
            <a id="logo" href="index.html">Ramen House</a>
        </div>
        <div id="nav-list"> 
            <a class="nav-link" href="index.html">Home</a>
            <a class="nav-link" href="menu.html">Menu</a>
            <a class="nav-link" href="contact.html">Contact</a>
        </div> 
    </nav>
    */    
    const navbar_nav = document.createElement('nav');
    navbar_nav.id = 'navbar';

    const logoWrapper_div = document.createElement('div');
    logoWrapper_div.id = 'logo-wrapper';
    const logo_a = document.createElement('a');
    logo_a.id = 'logo';
    logo_a.href = 'index.html';
    logo_a.innerHTML = 'Ramen House'
    logoWrapper_div.appendChild(logo_a);
    navbar_nav.appendChild(logoWrapper_div);

    const navList_div = document.createElement('div');
    navList_div.id = 'nav-list';
    const navLinksArray = [{name: 'Home', link: 'index.html'}, {name: 'Menu', link: 'menu.html'}, {name: 'Contact', link: 'contact.html'}];
    navLinksArray.forEach(navObj => {
        let navElement = document.createElement('a');
        navElement.classList.add('nav-link');
        navElement.href = navObj.link;
        navElement.innerHTML = navObj.name;
        navList_div.appendChild(navElement);
    })
    navbar_nav.appendChild(navList_div);
    
    content_div.appendChild(navbar_nav);
    return false;
}


const addFooter = () => {
    const content_div = document.querySelector('#content');
    /*
    <footer>
        <div>
            <p><b>Ramen House</b></p>
            <p>15 Linders Street, Melbourne VIC 3000</p>
            <p>03 1234 5678</p>
        </div>
        <div>
            <p><b>Opening Hours</b></p>
            <p>Mon - Fri: 9:00am to 10:00pm</p>
            <p>Sat - Sun: 10:00am to 9:00pm</p>
        </div>
    </footer>
    */
    const footer = document.createElement('footer');
    
    const resturantDetails_div = document.createElement('div');
    const detailsTextArray = ['<b>Ramen House</b>', '15 Linders Street, Melbourne VIC 3000', '03 1234 5678'];
    detailsTextArray.forEach(text => {
        const element = document.createElement('p');
        element.innerHTML = text;
        resturantDetails_div.appendChild(element);
    });
    footer.appendChild(resturantDetails_div);

    const openHours_div = document.createElement('div');
    const hoursTextArray = ['<b>Opening Hours</b>', 'Mon - Fri: 9:00am to 10:00pm', 'Sat - Sun: 10:00am to 9:00pm'];
    hoursTextArray.forEach(text => {
        const element = document.createElement('p');
        element.innerHTML = text;
        openHours_div.appendChild(element);
    });
    footer.appendChild(openHours_div);

    content_div.appendChild(footer);
}

export {addNav, addFooter};