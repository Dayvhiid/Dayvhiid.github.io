const serachForm = document.getElementById("search-form")
const serachBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")


let keyword = "";
let page = 1;
const accessKey = "TxMyZCN5iP5OoeJJIr9GFeXY0G8Da-R64IuM1Tei8Oc"
async function searchImage() {
    keyword = serachBox.value;
    const url = `https://api.unsplash.com/search/photos?
    page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;


    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }
    const results = data.results;
    console.log(data)
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
    showMoreBtn.style.display = "block";
}

serachForm.addEventListener("submit", (e) => {
    e.preventDefault()
    page = 1;
    searchImage();
})

showMoreBtn.addEventListener("click", function() {
    page++;
    searchImage()
})