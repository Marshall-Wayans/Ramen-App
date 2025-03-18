const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpeg", rating: 5, comment: "Delicious!" },
    { id: 4, name: "Naruto Ramen", restaurant: "Naruto Restaurant", image: "naruto.jpeg", rating: 4, comment: "Tasty!" },
    { id: 5, name: "Nirvana Ramen", restaurant: "Zen Ramen", image: "nirvana.jpeg", rating: 5, comment: "Best ramen!" },
    { id: 6, name: "Gyukotsu Ramen", restaurant: "Gyukotsu", image: "gyukotsu.jpeg", rating: 4, comment: "Rich flavor." },
    { id: 7, name: "Kojiro Ramen", restaurant: "Kojiro Ramen", image: "kojiro.jpeg", rating: 5, comment: "Amazing!" }
];


function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.style.width = "2in"; 
        img.style.height = "2in"; 
        img.style.objectFit = "cover";
        img.addEventListener("click", () => handleClick(ramen.id));
        ramenMenu.appendChild(img);
    });
}


function handleClick(id) {
    const ramen = ramens.find(r => r.id === id);
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = `Name: ${ramen.name}`;
    document.getElementById("ramen-restaurant").textContent = `Restaurant: ${ramen.restaurant}`;
    document.getElementById("ramen-rating").textContent = `Rating: ${ramen.rating}`;
    document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;
}


function addSubmitListener() {
    const form = document.getElementById("ramen-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const restaurant = document.getElementById("restaurant").value;
        const image = document.getElementById("image").value + ".jpg";
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        const newRamen = { id: ramens.length + 1, name, restaurant, image, rating, comment };
        ramens.push(newRamen);

        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.style.width = "2in"; 
        img.style.height = "2in"; 
        img.style.objectFit = "cover";
        img.addEventListener("click", () => handleClick(newRamen.id));
        document.getElementById("ramen-menu").appendChild(img);
        form.reset();
    });
}


function main() {
    displayRamens();
    addSubmitListener();
    handleClick(1); 
}

document.addEventListener("DOMContentLoaded", main);