import { addNav, addFooter } from './fixed.js';

const menuArray = [
    ['Ramen', [
        { name: 'CHASHU RAMEN', price: '$14.00', desc: 'Ramen soup topped with slices of roasted pork, served with leeks, bamboo shoots and marinated egg' },
        { name: 'TONKATSU RAMEN', price: '$14.50', desc: 'Pork-based soup ramen with pork cutlets, bok choy, and spring onion' },
        { name: 'SHIO RAMEN', price: '$14.50', desc: 'Shio-based broth, served with pork belly, spring onion, bamboo shoots and marinated egg' },
        { name: 'TSUKEMEN', price: '$14.50', desc: 'Also known as dipping noodles, served with grilled pork belly, spring onion, and nori' },
        { name: 'SHOYU RAMEN', price: '$14.50', desc: 'Soy sauce-based broth with minced pork, topped with spring onion, bok choy and bean sprouts' },
        { name: 'VEGETABLE RAMEN', price: '$13.50', desc: 'Soy-based soup ramen with tofu, shiitake, nori and vegetables' },
    ]],
    ['Udon', [
        { name: 'KITSUNE UDON', price: '$12.00', desc: 'Noodle soup in dashi broth topped with aburaage, nori, and bok choy' },
        { name: 'BEEF UDON', price: '$13.00', desc: 'Noodle soup in dashi broth topped with sliced beef, nori, and mitsuba' },
        { name: 'TEMPURA PRAWN UDON', price: '$13.00', desc: 'Warm soup noodle served with tempura prawn, spring onions, and narutomaki' },
        { name: 'TSUKIMI UDON', price: '$2.50', desc: 'Warm soup noodle served with raw egg, spring onions, and nori' },
    ]],
    ['Sides', [
        { name: 'MISO SOUP', price: '$3.50', desc: 'Traditional Japanese soup made from dashi' },
        { name: 'EDAMAME', price: '$4.20', desc: 'Steamed soybeans sprinkled with salt' },
        { name: 'TAKOYAKI', price: '$6.20', desc: 'Octopus dumplings topped with special sauce' },
        { name: 'VEGETABLE TEMPURA', price: '$6.90', desc: 'Vegetables deep fried in a light batter' },
        { name: 'GYOZA (5PCS)', price: '$7.40', desc: 'Five pan fried pork dumplings' },
        { name: 'VEGETARIAN GYOZA (5PCS)', price: '$7.40', desc: 'Five pan fried vegetable dumplings' },
    ]],
    ['Sides', [
        { name: 'MATCHA ICE', price: '$5.00', desc: 'Green tea ice cream' },
        { name: 'KURO GOMA ICE', price: '$5.00', desc: 'Black sesame ice cream' },
        { name: 'AZUKI ICE', price: '$5.00', desc: 'Red bean ice cream' },
    ]],
    ['Sides', [
        { name: 'SENCHA', price: '$2.80', desc: 'Hot green tea made from leaves imported from Kyoto' },
        { name: 'RAMUNE', price: '$4.20', desc: 'A soft drink known for its distinctive design and refreshing lemon taste' },
        { name: 'ASAHI SUPER DRY 330ML', price: '$9.00', desc: 'Asahi super dry has a nice sweetness with mild bitterness and a dry finish' },
        { name: 'YUZU SAKE 240ML', price: '$15.00', desc: 'Made from a Japanese citrus, this sake has a mild sweetness and fragrant aroma' },
    ]]];

const addMenu = () => {
    const content_div = document.querySelector('#content');
    addNav();

    /*
    <div class="center-heading">
        <h1>Menu</h1>
    </div>
    */
    const centerHeading_div = document.createElement('div');
    centerHeading_div.classList.add('center-heading');
    const menuHeading_h1 = document.createElement('h1');
    menuHeading_h1.innerHTML = 'Menu';
    centerHeading_div.appendChild(menuHeading_h1);

    /*
     <div id="menu-wrapper">
         <section class="menu-category">
             <h2>Ramen</h2>
             <div class="menu-item">
                 <div class="header-item"><h3>CHASHU RAMEN / チャーシューメン</h3> <span class="price">$14.00</span></div>    
                 <p>Ramen soup topped with slices of roasted pork, served with leeks, bamboo shoots and marinated egg</p>
             </div>
         </section>
     </div>
    */
    const menuWrapper_div = document.createElement('div');
    menuWrapper_div.id = 'menu-wrapper';

    menuArray.forEach(category => {
        let menuCategory_section = document.createElement('section');
        menuCategory_section.classList.add('menu-category');
        let categoryHeading_h2 = document.createElement('h2');
        categoryHeading_h2.innerHTML = category[0];
        menuCategory_section.appendChild(categoryHeading_h2);

        category[1].forEach(item => {
            let menuItem_div = document.createElement('div');
            menuItem_div.classList.add('menu-item');

            let headerItem_div = document.createElement('div');
            headerItem_div.classList.add('header-item');
            let itemName_h3 = document.createElement('h3');
            itemName_h3.innerHTML = item.name;
            let itemPrice_span = document.createElement('span');
            itemPrice_span.classList.add('price');
            itemPrice_span.innerHTML = item.price;
            headerItem_div.append(itemName_h3, itemPrice_span);

            let itemDesc_p = document.createElement('p');
            itemDesc_p.innerHTML = item.desc;

            menuItem_div.append(headerItem_div, itemDesc_p);
            menuCategory_section.appendChild(menuItem_div);
        });
        menuWrapper_div.appendChild(menuCategory_section);
    });

    content_div.append(centerHeading_div, menuWrapper_div);
    addFooter();
}

export { addMenu };