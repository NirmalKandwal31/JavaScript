let source = 'the-times-of-india';
let apiKey = '6bd5b82f0a8441c694ed0738df26c038'

//http://newsapi.org/v2/top-headlines?country=ie&apiKey=6bd5b82f0a8441c694ed0738df26c038

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
//xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=6bd5b82f0a8441c694ed0738df26c038`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //console.log(articles); : this will show the object with all the element
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <p><b>Breaking News ${index + 1}:</b> ${element["title"]}</p>
                                   
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["description"]} <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.error();
    }
}

xhr.send()

/*
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    let card = document.getElementsByClassName('card');
    Array.from(card).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }

    })
})*/