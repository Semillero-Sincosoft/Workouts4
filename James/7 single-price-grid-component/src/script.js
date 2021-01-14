const body = document.querySelector("#body");

const container = document.createElement("main");
container.classList.add('container');

const above = document.createElement("section");
above.classList.add('above');

const header = document.createElement("h1");
header.classList.add('header');
header.innerHTML = 'Join our community';

const guarantee = document.createElement("span");
guarantee.classList.add('guarantee');
guarantee.innerHTML = '30-day, hassle-free money back guaratee';

const description = document.createElement("p");
description.classList.add('description');
description.innerHTML = 'Gain access to our full library of tutorials along with expert code reviews Perfect for any developer who are serious about honing their skills.';

const bottom = document.createElement("section");
bottom.classList.add('bottom');

const bLeft = document.createElement("aside");
bLeft.classList.add('bLeft');

const monthly = document.createElement("h2");
monthly.classList.add('monthly');
monthly.innerHTML = 'Monthly Subscription';

const price = document.createElement("span");
price.classList.add('price');
price.innerHTML = '<b>$29</b> per month';

const details = document.createElement("span");
details.classList.add('details');
details.innerHTML = 'Full access for less than $1 a day';

const signUpBtn = document.createElement("button");
signUpBtn.classList.add('signUpBtn');
signUpBtn.innerHTML = 'Sign Up';

const bRight = document.createElement("aside");
bRight.classList.add('bRight');

const why = document.createElement("h2");
why.classList.add('why');
why.innerHTML = 'Why Us';

const because = document.createElement("p");
because.classList.add('because');
because.innerHTML = 'Tutorials by industry experts <br> Peer & expert code review <br> Coding exercises <br> Access to our Git Hub repos <br> Community forum <br> Flash cards decks <br> New videos every week';

body.appendChild(container);

container.appendChild(above);
above.appendChild(header);
above.appendChild(guarantee);
above.appendChild(description);

container.appendChild(bottom);
bottom.appendChild(bLeft);
bLeft.appendChild(monthly);
bLeft.appendChild(price);
bLeft.appendChild(details);
bLeft.appendChild(signUpBtn);

bottom.appendChild(bRight);
bRight.appendChild(why);
bRight.appendChild(because);

