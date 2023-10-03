// local reviews data
const reviews = [
  {
    id: 1,
    name: "Shubham Singh",
    job: "Web Developer",
    img: "https://avatars.githubusercontent.com/u/105745200?v=4",
    text: "I am a web developer, passionate about studying machine learning. I actively engage as a Twitter creator, sharing my insights and expertise in the tech world. On Twitter, I connect with my audience, making me a prominent figure in the digital landscape."
  },
  {
    id: 2, 
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 5,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  
  {
    id: 6,
    name: "Bhanu Singh",
    job: "ML Engineer ",
    img: "https://pbs.twimg.com/profile_images/1701988886506008576/stHO9InY_400x400.jpg",
    text: "I am a ML Engineer. I actively engage as a Twitter creator, sharing my insights and expertise in the tech world. On Twitter, I connect with my audience, making me a prominent figure in the digital landscape."
  },
  {
    id: 7,
    name: "Kushal Sharma",
    job: "CEO",
    img: "https://pbs.twimg.com/profile_images/1702954891503902720/L4FK7zh9_400x400.jpg",
    text: "I am a Entrapenour. I actively engage as a Twitter creator, sharing my insights and expertise in the tech world. On Twitter, I connect with my audience, making me a prominent figure in the digital landscape."
  },
  {
    id: 8,
    name: "Sikha Gupta",
    job: "Backend Engineer",
    img: "./stHO9InY_400x400.jpg",
    text: "I am a web developer, passionate about studying machine learning. I actively engage as a Twitter creator, sharing my insights and expertise in the tech world. On Twitter, I connect with my audience, making me a prominent figure in the digital landscape."
  },


];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
