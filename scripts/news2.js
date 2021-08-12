// fetching news
$.getJSON('https://newsdata.io/api/1/news?country=in&category=health&apikey=pub_821918560554a511408760e6b7f9be31846&language=en', function (news) {
    var article = news.results
    for (let i = 0; i < article.length; i++) {
        console.log(i);
        $('.des'+i).append(article[i].description);
        $('.title'+i).append(article[i].title);
        $('.source'+i).append(article[i].source_id);
        $('.seemore'+i).html('<a href='+ article[i].link +' target="_blank" >See more...</a>');
        if (article[i].image_url!=null){
            var image = document.createElement("IMG");
            image.alt = article[i].title;
            image.setAttribute('class', 'photo');
            image.src= article[i].image_url;
            $('.image'+i).html(image);
        }
    }
}); 