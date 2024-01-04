const gallery = document.getElementById('gallery');
const imageIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9];

imageIndex.forEach((i) =>{
    const figure = document.createElement('figure');
    figure.id = `gallery-${i}`;
    
    const image = document.createElement('img');
    image.src = `assets/images/GFX/Dinny-0${i}.jpg`; //Backtext markering `` skulle gøre at jeg kan oprette billederne jeg har i en nummereringrækkefølje, når jeg referere til dem.
    

    const figcaption = document.createElement('figcaption');
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    h3.textContent = `Gallery ${i}`;
    p1.textContent = 'Hic alias laborum nesciunt ipsa, quidem aut fugit similique beatae, vero ullam eum suscipit assumenda fugiat pariatur optio repudiandae laboriosam eos expedita.';
    p2.textContent = 'Dolor nesciunt architecto harum vero? Eos labore iste illo, dignissimos odio voluptates pariatur eum aliquam aperiam ipsam eveniet animi, quod, fugiat beatae.';

    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    figcaption.appendChild(article);

    figure.appendChild(image);
    figure.appendChild(figcaption);

    gallery.appendChild(figure);
})