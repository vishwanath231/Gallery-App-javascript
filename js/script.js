// API
const API_KEY = "17980638-ab4833f2f34b1250376127fca";


const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// FORM
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchValue = search.value;

    fetchData(searchValue);

    search.value = "";

})

// FETCH DATA
function fetchData(data){

    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${data}`

    fetch(URL)
    .then(res => res.json())
    .then(datas => {

        getFetchData(datas.hits);

    });
}



// DISPLAY DATA
function getFetchData(data) {

    if(data.length == 0){
       document.getElementById("err").innerHTML = `<img src="img/err.png" alt="">`;
    }
    let output = '';

    data.map(result => {
        const tags = result.tags.split(',');

        
        output += `

        <div class="box__container">
            <img src="${result.webformatURL}" alt="" class="image">
            <div class="info__box">
                <div class="name">${result.user}</div>
                <div class="view flex">
                    <img src="img/view.png" alt="">
                    <span>view :</span>
                    <span>${result.views}</span>
                </div>
                <div class="download flex">
                    <img src="img/download.png" alt="">
                    <span>download :</span>
                    <span>${result.downloads}</span>
                </div>
                <div class="like flex">
                    <img src="img/heart.png" alt="">
                    <span>like :</span>
                    <span>${result.likes}</span>
                </div>
                <div id="tags">
                    <div class="tag">
                        <img src="img/tag.png" alt="">
                        <span>${tags[0]}</span>
                    </div>
                    <div class="tag">
                        <img src="img/tag.png" alt="">
                        <span>${tags[1]}</span>
                    </div>
                    <div class="tag">
                        <img src="img/tag.png" alt="">
                        <span>${tags[2]}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
    })

    main.innerHTML = output;

}

