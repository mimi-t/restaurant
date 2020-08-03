import { addNav, addFooter } from './fixed.js'

const addContact = () => {
    const content_div = document.querySelector('#content');
    addNav();
    /*
    <div class="center-heading">
        <h1>Contact</h1>
    </div>
    */
    const centerHeading_div = document.createElement('div');
    centerHeading_div.classList.add('center-heading');
    const contactHeading_h1 = document.createElement('h1');
    contactHeading_h1.innerHTML = 'Contact';
    centerHeading_div.appendChild(contactHeading_h1);

    /*
    <div id="contact-wrapper">
        <div id="contact-details">
            <p>15 Linders Street</p>
            <p>Melbourne VIC 3000</p>
            <br>
            <p>+61 2 3456 7890</p>
            <p>info@ramenhouse.com</p>
            <form>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required>

                <label for="email">Email</label>
                <input type="email" name="email" id="email" required>

                <label for="phone">Phone</label>
                <input type="tel" name="phone" id="phone" required>

                <label for="message">Message</label>
                <textarea name="message" id="message" rows="8" required></textarea>

                <button type="submit">Send</button>
            </form>
        </div>
        <div id="contact-img-wrapper">
            <img src="/images/interior.jpg">
        </div>
    </div>
    */
    const contactWrapper_div = document.createElement('div');
    contactWrapper_div.id = 'contact-wrapper';

    const contactDetails_div = document.createElement('div');
    contactDetails_div.id = 'contact-details';
    contactDetails_div.innerHTML = '<p>15 Linders Street</p> <p>Melbourne VIC 3000</p> <br> <p>+61 2 3456 7890</p> <p>info@ramenhouse.com</p>';

    const formArray = [{name: 'Name', type:'text'}, {name: 'Email', type:'email'}, {name: 'Phone', type:'tel'}, {name: 'Message', type: false, row: '8'}];
    const contactForm_form = document.createElement('form');
    formArray.forEach(element => {
        let label = document.createElement('label');
        label.for = element.name;
        label.innerHTML = element.name;

        let input;
        if (element.type) {
            input = document.createElement('input');
            input.type = element.type;
        } else {
            input = document.createElement('textarea');
            input.rows = element.row;
        }

        input.name = element.name;
        input.id = element.name;
        input.required = true;            
        contactForm_form.append(label, input);
    });

    const send_button = document.createElement('button');
    send_button.type = 'submit';
    send_button.innerHTML = 'Send';
    contactForm_form.appendChild(send_button);
    contactDetails_div.appendChild(contactForm_form);

    const contactImgWrapper_div = document.createElement('div');
    contactImgWrapper_div.id = 'contact-img-wrapper';
    const interior_img = document.createElement('img');
    interior_img.src = '/images/interior.jpg';
    contactImgWrapper_div.appendChild(interior_img);

    contactWrapper_div.append(contactDetails_div, contactImgWrapper_div);
    content_div.append(centerHeading_div, contactWrapper_div);
    addFooter();
    return false;
};

export { addContact };


