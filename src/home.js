import { addNav, addFooter } from './fixed.js';

const addHome = () => {
    const content_div = document.querySelector('#content');
    addNav();
    /*
    <div id="center-img-wrapper">
        <img id="cooks-img" src="/images/cooks.jpg">
    </div>
    */
    const imgWrapper_div = document.createElement('div');
    imgWrapper_div.id = 'center-img-wrapper';
    const cooksImg_img = document.createElement('img');
    cooksImg_img.id = 'cooks-img';
    cooksImg_img.src = '/images/cooks.jpg';
    imgWrapper_div.appendChild(cooksImg_img);

    /*
    <section id="about">
        <div id="about-text">
            <h1>About Ramen House</h1>
            <p>
                Ramen House is a restaurant that specialises in authentic Japanese ramen. Located in the heart of Melbourne, we have been serving locals  
                hot bowls of flavourful ramen since 2010. Drop by our store on 15 Linders Street for a taste of our unique broth and handmade noodles.
            </p>
            <button>Look at Menu</button>                    
        </div>
        <div id="about-img">
            <img src="/images/ramen.jpg">
        </div>
    </section>
    */
    const about_section = document.createElement('section');
    about_section.id ='about';

    const aboutText_div = document.createElement('div');
    aboutText_div.id = 'about-text';

    const aboutHeading_h1 = document.createElement('h1');
    const aboutBody_p = document.createElement('p');
    const lookMenu_button = document.createElement('button');
    aboutHeading_h1.innerHTML = 'About Ramen House'
    aboutBody_p.innerHTML = 'Ramen House is a restaurant that specialises in authentic Japanese ramen. Located in the heart of Melbourne, we have been serving ' +
                            'locals hot bowls of flavourful ramen since 2010. Drop by our store on 15 Linders Street for a taste of our unique broth and ' +
                            'handmade noodles.';
    lookMenu_button.innerHTML = 'View Menu'
    aboutText_div.append(aboutHeading_h1, aboutBody_p, lookMenu_button);
    about_section.appendChild(aboutText_div);

    const aboutImg_div = document.createElement('div');
    aboutImg_div.id = 'about-img';
    const ramenImg_img = document.createElement('img');
    ramenImg_img.src = '/images/ramen.jpg';
    aboutImg_div.appendChild(ramenImg_img);
    about_section.appendChild(aboutImg_div);

    content_div.appendChild(imgWrapper_div);
    content_div.appendChild(about_section);
    addFooter();
    return false;    
}

export {addHome};