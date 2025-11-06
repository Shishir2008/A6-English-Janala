function lodeCateguri() {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then((res) => res.json())
        .then((data) => displayCateguri(data.data))
}

function lodevideos() {
    fetch('https://openapi.programming-hero.com/api/words/all')
        .then(res => res.json())
        // .then(data => displayVideos(data.data))
}
const lodeCateguriVideo = (id)=>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        const clickButton = document.getElementById(`btn-${id}`);
        clickButton.classList.add('active')
        console.log(clickButton)
        displayVideos(data.data)
    })
}

function displayCateguri(catiguri) {
    const categuriContenar = document.getElementById('categuri-contenar');
    for (let num of catiguri) {
        // console.log(num)
        const categuriDiv = document.createElement('div');
        categuriDiv.innerHTML = `
    <button id="btn-${num.level_no}" onclick="lodeCateguriVideo(${num.level_no})" class="btn btn-outline btn-primary font-bold""><i class="fa-solid fa-book-open"></i> Lesson-${num.level_no}</button>
    `;
        categuriContenar.append(categuriDiv)
    }
}

const displayVideos = (videos) => {
    console.log(videos)
    const videoContenar = document.getElementById('video-content');
    videoContenar.innerHTML="";
    if(videos.length==0){
        videoContenar.innerHTML=`
         <div class=" space-y-3 col-span-full flex flex-col justify-center items-center text-center">
                    <img class="w-[150px]" src="./assets/alert-error.png" alt="">
                    <p class="text-sm text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                    <h2 class="text-[#292524] text-4xl font-medium">নেক্সট Lesson এ যান</h2>
                </div>
        `;
        return;
    }
    videos.forEach(video => {
        // console.log(video)
        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
        
             <div  class="bg-white text-center  space-y-8 p-3 rounded-lg shadow-xl hover:bg-sky-50 border border-x-20 border-y-20 border-white">
                 <h2 class="text-2xl font-bold">${video.word}</h2>
                 <p class="font-medium text-sm">meaning/pronunciation</p>
                 <p class="text-xl font-semibold text-gray-700">"${video.meaning}/${video.pronunciation}"</p>
                 <div class="flex justify-between">
                     <button class="btn px-2 bg-[#1A91FF10]"> <i class="fa-solid fa-circle-info"></i></button>
                     <button class="btn px-2 bg-[#1A91FF10]"><i class="fa-solid fa-volume-high"></i></button>
                 </div>
             </div>   
        `;
        videoContenar.append(videoCard)
    });
}


lodeCateguri()

lodevideos()