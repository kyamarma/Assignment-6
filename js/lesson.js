const starUp =()=>{
    document.getElementById('nav').classList.add('hidden')
    document.getElementById('main').classList.add('hidden')
}
starUp ()
const showloader =()=>{
    document.getElementById('loader').classList.add('hidden')
    document.getElementById('postContainer').classList.add('hidden')
}
const hideloader =()=>{
    // document.getElementById('loader').classList.add('hidden')
    document.getElementById('postContainer').classList.remove('hidden')
    // document.getElementById('alert').classList.remove('hidden')
    // document.getElementById('alert').classList.add('hidden')
}



const banner =()=>{
    document.getElementById('nav').classList.remove('hidden')
    document.getElementById('main').classList.remove('hidden')
    document.getElementById('banners').classList.add('hidden')
}
document.getElementById('login').addEventListener('click', function(event){
    event.preventDefault();

    const pin =  document.getElementById('password').value;
    // console.log(typeof pin)
    if (pin === '1234'){
        console.log(banner())
    }
    else(
        console.log('sorry')
    )
})
function showloaders(){
    showloader();
}
showloaders()
function handelPost(id) {
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(datas => {
            // console.log(datas.data)
            displayPost(datas.data)
        })
}


function lesson() {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(datas => {
            lessons(datas.data)
        })
}

function lessons(data) {
    // console.log(data)
    const buttons = document.getElementById('button')
    for (let btn of data) {
        // console.log(btn)
        const btnLesson = document.createElement("div");
        btnLesson.classList.add("lesson")
        btnLesson.innerHTML = `
        



        <div class="lesson-2  hover:bg-[#3D26C7] border border-indigo-500 rounded   ">
            <div class="img flex px-4 py-2 gap-4 " >
              <img class="w-6  " src="assets/fa-book-open.png" alt="">
              <button class="btn-info hover:text-white decoration-black" onclick="handelPost(${btn.level_no})">${btn.lessonName}</button>
            </div>
          </div>
        `
        buttons.append(btnLesson)
    }
}
lesson()


const alart =()=>{
    document.getElementById('alert').classList.add('hidden')
}


const displayPost = (posts) => {
    showloader();
    var buttons = document.getElementById('postContainer');
    buttons.innerText = '';

    alart();
    if(posts.length == 0){
        buttons.innerHTML=`
        <div id="alert-error " class="post flex flex-col  justify-center items-center col-span-full  justify-center items-cemter my-10">
                        <img src="assets/alert-error.png" alt="">
                        <h5 class="hind_regular font-sm">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h5>
                        <h1 class="hind-bold text-4xl">নেক্সট Lesson এ যান</h1>
                    </div>
        `;
        
        hideloader();
        return;
    }
    

    posts.forEach(post => {
        
        console.log(post)

        const ti = document.createElement('div');
        ti.classList.add("post")
        ti.innerHTML = `
           <div class="card-body items-center text-center bg-white rounded">
        <h2 class="card-title btn-primary">${post.word}</h2>
        <p class="interMedium  text-xl">Meaning /Pronounciation</p>
        <h2 class="card-title btn-info">${post.meaning}/${post.pronunciation}</h2>
        <div class="navbar  ">
            
        <button class="flex-1 " onclick="showModal()" >
        <i  id="modals" class="fa-solid fa-circle-info bg-[#E0E7FF] rounded  p-2"></i>
        
    </button>
            <div>
                <i class="fa-solid fa-volume-high bg-[#E0E7FF] rounded  p-2"></i>
            </div>
        </div>
    </div>

    `;
        postContainer.appendChild(ti)
        hideloader();
    });
   

};

function showModal() {
    fetch('https://openapi.programming-hero.com/api/word/5')
        .then(res => res.json())
        .then(datas => {
            modal(datas.id)
        })
}













function delayedScroll(event, sectionId) {
    event.preventDefault(); // Prevent instant jump
    setTimeout(() => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    },100); // 2-second delay
}


function Scroll(event, sectionId) {
    event.preventDefault(); // Prevent instant jump
    setTimeout(() => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    },100); // 2-second delay
}