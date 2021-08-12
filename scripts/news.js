// fetching news
$.getJSON('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=d479deebfa18494b85420954ada43be3', function (news) {
    var article = news.articles
    for (let i = 0; i < article.length; i++) {
        // console.log(i);
        $('.des'+i).append(article[i].description);
        $('.title'+i).append(article[i].title);
        $('.source'+i).append(article[i].source.name);
        $('.seemore'+i).html('<a href='+ article[i].url +' target="_blank" >See more...</a>');
        if (article[i].urlToImage!=null){
            var image = document.createElement("IMG");
            image.alt = article[i].title;
            image.setAttribute('class', 'photo');
            image.src= article[i].urlToImage;
            $('.image'+i).html(image);
        }
    }
});