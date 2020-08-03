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
            <p><b>Location</b></p>
            <p>Ramen House</p>
            <p>15 Linders Street, Melbourne VIC 3000</p>
        </div>
        <div>
            <p><b>Hours</b></p>
            <p>Mon - Fri:    9:00am to 10:00pm</p>
            <p>Sat - Sun:   10:00am to 9:00pm</p>
        </div>
        <div>
            <p><b>Contact</b></p>
            <p>+61 2 3456 7890</p>
            <p>info@ramenhouse.com</p>
        </div>
    </footer>
    */
    const footer = document.createElement('footer');
    
    const footerArray = [['<b>Location</b>','Ramen House', '15 Linders Street, Melbourne VIC 3000'], ['<b>Opening Hours</b>', 'Mon - Fri: 9:00am to 10:00pm', 
    'Sat - Sun: 10:00am to 9:00pm'], ['<b>Contact</b>', '+61 2 3456 7890', 'info@ramenhouse.com']];

    footerArray.forEach(section => {
        let details_div = document.createElement('div');
        section.forEach(text => {
            let line = document.createElement('p');
            line.innerHTML = text;
            details_div.appendChild(line);    
        })
        footer.appendChild(details_div)
    });
    content_div.appendChild(footer);
    return false;
}

export {addNav, addFooter};