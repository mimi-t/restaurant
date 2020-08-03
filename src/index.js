import { addHome } from './home.js';
import { addMenu } from './menu.js';
import { addContact } from './contact.js';

const tab = (target) => {
    const content_div = document.querySelector('#content');
    switch (target) {
        case 'Home':
            content_div.innerHTML = '';
            addHome()
            break;
        case 'Menu':
            content_div.innerHTML = '';
            addMenu()
            break;
        case 'Contact':
            content_div.innerHTML = '';
            addContact()
            break;
        default:
            return false;
    }
    switchTab();
    return false;
}

const switchTab = () => {
    const navNodes = document.querySelectorAll('.nav-link');
    navNodes.forEach(node => {
        node.addEventListener('click', e => {
            tab(e.target.innerHTML);
        })
    });
};

addHome();
switchTab();
