/* BUBBLE NAVIGATION */

const bubble=document.getElementById("enterBubble");

if(bubble){
bubble.addEventListener("click",function(){
bubble.classList.add("pop");
setTimeout(()=>{
window.location.href="garden.html";
},500);
});
}


/* PETALS */

function createPetal(){
const petal=document.createElement("div");
petal.classList.add("petal");

petal.style.left=Math.random()*100+"vw";
petal.style.animationDuration=Math.random()*3+3+"s";

const container=document.querySelector(".petal-container") || document.body;
container.appendChild(petal);

setTimeout(()=>petal.remove(),6000);
}
setInterval(createPetal,250);


/* FLOWER DATA */

const flowers=[

{
id:"rose",
name:"Rose",
description:"Symbol of love and beauty.",
images:[
"images/roses/R_1.jpg",
"images/roses/R_2.jpg",
"images/roses/R_3.jpg",
"images/roses/R_4.jpg",
"images/roses/R_5.jpg",
"images/roses/R_6.jpg",
"images/roses/R_7.jpg",

],
content:`
<h3>1. Definition</h3>
<p>A beautiful fragrant flowering plant.</p>

<h3>2. Uses</h3>
<p>Decoration, perfumes, skincare.</p>

<h3>3. Top Producers</h3>
<p>Ecuador, Colombia, Netherlands.</p>

<h3>4. Purpose</h3>
<p>Express love, decorate, celebrate.</p>

<h3>5. Symbolism</h3>
<p>Red: Love | White: Purity | Yellow: Friendship | Pink: Gratitude</p>

<h3>6. Facts</h3>
<p>Over 150 species. Used in perfumes.</p>
`
},

{
id:"jasmine",
name:"Jasmine",
description:"Fragrant white flower.",
images:[
"images/jasmine/jasmine_entrance.jpg",
"images/jasmine/J_1.jpg",
"images/jasmine/J_2.jpg",
"images/jasmine/j_3.jpg",
"images/jasmine/j_4.jpg",
"images/jasmine/j_5.jpg",
"images/jasmine/j_6.jpg",
"images/jasmine/j_7.jpg",
"images/jasmine/j_8.jpg",
"images/jasmine/j_9.jpg",
],
content: `
<h3>1. Definition</h3>
<p>A small white fragrant flowering plant.</p>

<h3>2. Uses</h3>
<p>Perfumes, tea, decoration, skincare.</p>

<h3>3. Top Producers</h3>
<p>India, China, Egypt.</p>

<h3>4. Purpose</h3>
<p>Relaxation, worship, decoration.</p>

<h3>5. Symbolism</h3>
<p>Purity | Love | Peace</p>

<h3>6. Facts</h3>
<p>Blooms at night. Strong natural fragrance.</p>
`
},

{
id:"carnation",
name:"Carnation",
description:"Ruffled petals, various colors.",
images:[
"images/carnation/carnation_2.jpg",
"images/carnation/carnation_1.jpg",
"images/carnation/carnation_7.jpg",
"images/carnation/carnation_3.jpg",
"images/carnation/carnation_4.jpg",
"images/carnation/carnation_5.jpg",
"images/carnation/carnation_6.jpg",
"images/carnation/carnation_entrance.jpg",
],
content: `
<h3>1. Definition</h3>
<p>A soft, ruffled flower known for its long-lasting freshness.</p>

<h3>2. Uses</h3>
<p>Decoration, bouquets, perfumes.</p>

<h3>3. Top Producers</h3>
<p>Colombia, Spain, Netherlands.</p>

<h3>4. Purpose</h3>
<p>Express emotions, gifting, celebrations.</p>

<h3>5. Symbolism</h3>
<p>Red: Love | White: Pure love | Pink: Gratitude</p>

<h3>6. Facts</h3>
<p>Long-lasting flower. Popular in bouquets.</p>
`
},

{
id:"lily",
name:"Lily",
description:"Graceful flower.",
images:["images/lily/lily_entrance.jpg",
"images/lily/lily_1.jpg",
"images/lily/lily_2.jpg",
"images/lily/lily_3.jpg",
"images/lily/lily_4.jpg",
"images/lily/lily_5.jpg",
"images/lily/lily_6.jpg",
],
content: `
<h3>1. Definition</h3>
<p>An elegant flowering plant known for its large petals.</p>

<h3>2. Uses</h3>
<p>Decoration, bouquets, ceremonies.</p>

<h3>3. Top Producers</h3>
<p>Netherlands, China, USA.</p>

<h3>4. Purpose</h3>
<p>Decoration, gifting, special occasions.</p>

<h3>5. Symbolism</h3>
<p>White: Purity | Pink: Prosperity | Orange: Confidence</p>

<h3>6. Facts</h3>
<p>Comes in many colors. Strong fragrance.</p>
`
},

{
id:"tulip",
name:"Tulip",
description:"Colorful spring flower.",
images:[
"images/tulip/tulip_1.jpg",
"images/tulip/tulip_2.jpg",
"images/tulip/tulip_3.jpg",
"images/tulip/tulip_4.jpg",
"images/tulip/tulip_5.jpg",
"images/tulip/tulip_6.jpg",
],
content: `
<h3>1. Definition</h3>
<p>A bright and colorful spring flowering plant.</p>

<h3>2. Uses</h3>
<p>Gardens, decoration, bouquets.</p>

<h3>3. Top Producers</h3>
<p>Netherlands, Turkey, Iran.</p>

<h3>4. Purpose</h3>
<p>Decoration, gifting, celebrations.</p>

<h3>5. Symbolism</h3>
<p>Red: Love | Yellow: Happiness | Purple: Royalty</p>

<h3>6. Facts</h3>
<p>Blooms in spring. Comes in many colors.</p>
`
}

];


/* DISPLAY */

const flowerList=document.getElementById("flower-list");
const searchInput=document.getElementById("search");

function displayFlowers(data){
if(!flowerList) return;

flowerList.innerHTML=data.map(f=>`
<div class="flower-card" onclick="openFlower('${f.id}')">
<img src="${f.images[0]}">
<h2>${f.name}</h2>
<p>${f.description}</p>
</div>
`).join("");
}

displayFlowers(flowers);


/* SEARCH */

if(searchInput){
searchInput.addEventListener("input",function(e){
const value=e.target.value.toLowerCase();
const filtered=flowers.filter(f=>f.name.toLowerCase().includes(value));
displayFlowers(filtered);
});
}


/* OPEN */

function openFlower(id){

const flower=flowers.find(f=>f.id===id);
if(!flower) return;

document.getElementById("detail-title").innerText=flower.name;

const imgs=flower.images;

document.getElementById("top-images").innerHTML=
imgs.slice(0,2).map(i=>`<img src="${i}">`).join("");

document.getElementById("left-images").innerHTML=
imgs.slice(2,4).map(i=>`<img src="${i}">`).join("");

document.getElementById("right-images").innerHTML=
imgs.slice(4,6).map(i=>`<img src="${i}">`).join("");

document.getElementById("detail-card").innerHTML=flower.content;

const detail=document.getElementById("flower-detail");
detail.classList.remove("hidden");
detail.classList.add("show");
}


/* CLOSE */

function closeFlower(){
const detail=document.getElementById("flower-detail");
detail.classList.remove("show");
detail.classList.add("hidden");
}