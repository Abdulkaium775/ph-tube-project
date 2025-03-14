// buttton
function loadCatagories() { 
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then ((res) => res.json())
    .then ((data) => displayBtn (data.categories));

} 
loadCatagories() ;

function displayBtn (categories) {
 const button = document.getElementById ('button') ;
 for ( cat of categories) {
    console.log(cat);
    const div = document.createElement('div');
    div.innerHTML =`
            <button id="btn-${cat.category_id}" onclick="loadCatagoryVideos(${cat.category_id})" class=" bg-gray-200 p-2 rounded-lg"> ${cat.category} </button>
    `;
    button.append(div);
 }
}



// videos
function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => dispalyVideos(data.videos));

}
// loadVideos() ; 



const dispalyVideos = (videos) => {
    const videoContainer = document.getElementById ('videoContainer');
    videoContainer.innerHTML = "";
    if (videos.length == 0){
      videoContainer.innerHTML=`
           <div class="col-span-full flex flex-col items-center justify-center pt-24">
                <img class="w-[160px]": src="./assets/Icon.png" alt="">
                <p class="text-5xl font-bold grid grid-cols-full ">Oops!! Sorry, There is no content here</p>
            </div>`
           
    }

     videos.forEach((video) => {
        // console.log(video)
        const videoCard = document.createElement ('div');
        videoCard.innerHTML =`
            <div class="card w-full h-[240px] bg-base-100 shadow-sm">
                <figure class="relative mb-2">
                  <img class:"w-full h-full object:cover"
                    src="${video.thumbnail} "
                    alt="Shoes" />
                    <p class="absolute bottom-2 right-2 text-white">3hrs 56 min ago</p>
                </figure >
                <div class=" flex gap-2">
              <div class="avatar">
                <div class="ring-primary ring-offset-base-100 w-8 h-8 object-cover rounded-full ring ring-offset-2">
                  <img src="${video.authors[0].profile_picture}" />
                </div>
              </div>

              <div>
                <h1 class="font-bold">${video.title} </h1>
                <p class=" flex">${video.authors[0].profile_name} <img class="w-4" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                <p>${video.others.views} </p>
                </div>
              </div>
            </div>

        `;

videoContainer.append(videoCard);
        
    });
}


// just video.comedy.......others

const loadCatagoryVideos =(id)=>{   
const url =`https://openapi.programming-hero.com/api/phero-tube/category/${id}`
// console.log(url);
fetch(url)
.then((res) => res.json())
.then((data) => {
  const clickbtn= document.getElementById('btn-${id}');
  clickbtn.classList.add('active');
  console.log(clickbtn);
  dispalyVideos(data.category)
});

} 