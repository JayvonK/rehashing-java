let injectHere = document.getElementById("injectHere");
let cardBtn = document.getElementById("cardBtn");

function MakeCard(title) {
    injectHere.innerHTML = "";
    let h5 = document.createElement("h5");
    h5.className = "card-body";
    h5.textContent = title;

    let p = document.createElement("p");
    p.className = "card-text";
    p.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    
    let a = document.createElement("a");
    a.href = "#";
    a.className = "btn btn-primary";
    a.textContent = "Go somewhere";

    let divBody = document.createElement("div");
    divBody.className = "card-body";

    divBody.appendChild(h5);
    divBody.appendChild(p);
    divBody.appendChild(a);
    
    let img = document.createElement("img");
    img.src = "...";
    img.className = "card-img-top";
    img.alt = "...";

    let outerDiv = document.createElement("div");
    outerDiv.className = "card";
    outerDiv.style = "width: 18rem;";

    
    outerDiv.appendChild(img);
    outerDiv.appendChild(divBody);
    injectHere.appendChild(outerDiv);
}

export { injectHere, cardBtn, MakeCard }