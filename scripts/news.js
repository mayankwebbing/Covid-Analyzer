var today = new Date();
var time = today.getHours();
// console.log(time);

// # fetching news
var token1 = "d25913e772ab575619b1395be1bd2f8e";
var token2 = "e0f4d33b6fafe49961b63c29ccdf6f1b";
var token3 = "87e816b6ed5eaec9d9e1baf4d7b7af43";
var token4 = "534ce9db5bb6c7008cb19b508a616abc";
var token5 = "e0a11fff2b932a85b32965ede0ae1f77";
var token6 = "c6f1cec12f633694c1d3ab9f7e3b55b4";
var token7 = "69e764573694924dc379ab1bfed68075";

if ( time >= 0 && time < 8){
    $.getJSON('https://gnews.io/api/v4/top-headlines?&token='+token1+'&country=in&topic=health&lang=en', function (news) {
    var article = news.articles
    // console.log(article);
    for (let i = 0; i < article.length; i++) {
        // console.log(i);
        $('.des'+i).append(article[i].description);
        $('.title'+i).append(article[i].title);
        $('.source'+i).html('Source: <a target="_blank" href='+article[i].source.url+'>'+article[i].source.name+'</a>&nbsp;&nbsp;');
        $('.seemore'+i).html('<a href='+ article[i].url +' target="_blank" >See more...</a>');
        if (article[i].image!=null){
            var image = document.createElement("IMG");
            image.alt = article[i].title;
            image.setAttribute('class', 'photo');
            image.src= article[i].image;
            $('.image'+i).html(image);
        }
    }
}); 
}

if ( time >= 8 && time < 11){
    $.getJSON('https://gnews.io/api/v4/top-headlines?&token='+token2+'&country=in&topic=health&lang=en', function (news) {
    var article = news.articles
    // console.log(article);
    for (let i = 0; i < article.length; i++) {
        // console.log(i);
        $('.des'+i).append(article[i].description);
        $('.title'+i).append(article[i].title);
        $('.source'+i).html('Source: <a target="_blank" href='+article[i].source.url+'>'+article[i].source.name+'</a>&nbsp;&nbsp;');
        $('.seemore'+i).html('<a href='+ article[i].url +' target="_blank" >See more...</a>');
        if (article[i].image!=null){
            var image = document.createElement("IMG");
            image.alt = article[i].title;
            image.setAttribute('class', 'photo');
            image.src= article[i].image;
            $('.image'+i).html(image);
        }
    }
}); 
}

if ( time >= 11 && time < 14){
    $.getJSON('https://gnews.io/api/v4/top-headlines?&token='+token3+'&country=in&topic=health&lang=en', function (news) {
    var article = news.articles
    // console.log(article);
    for (let i = 0; i < article.length; i++) {
        // console.log(i);
        $('.des'+i).append(article[i].description);
        $('.title'+i).append(article[i].title);
        $('.source'+i).html('Source: <a target="_blank" href='+article[i].source.url+'>'+article[i].source.name+'</a>&nbsp;&nbsp;');
        $('.seemore'+i).html('<a href='+ article[i].url +' target="_blank" >See more...</a>');
        if (article[i].image!=null){
            var image = document.createElement("IMG");
            image.alt = article[i].title;
            image.setAttribute('class', 'photo');
            image.src= article[i].image;
            $('.image'+i).html(image);
        }
    }
}); 
}

if ( time >= 14 && time < 17){
    $.getJSON('https://gnews.io/api/v4/top-headlines?&token='+token4+'&country=in&topic=health&lang=en', function (news) {
    var article = news.articles
    // console.log(article);
    for (let i = 0; i < article.length; i++) {
        // console.log(i);
        $('.des'+i).append(article[i].description);
        $('.title'+i).append(article[i].title);
        $('.source'+i).html('Source: <a target="_blank" href='+article[i].source.url+'>'+article[i].source.name+'</a>&nbsp;&nbsp;');
        $('.seemore'+i).html('<a href='+ article[i].url +' target="_blank" >See more...</a>');
        if (article[i].image!=null){
            var image = document.createElement("IMG");
            image.alt = article[i].title;
            image.setAttribute('class', 'photo');
            image.src= article[i].image;
            $('.image'+i).html(image);
        }
    }
}); 
}

if ( time >= 17 && time < 20){
    $.getJSON('https://gnews.io/api/v4/top-headlines?&token='+token5+'&country=in&topic=health&lang=en', function (news) {
    var article = news.articles
    // console.log(article);
    for (let i = 0; i < article.length; i++) {
        // console.log(i);
        $('.des'+i).append(article[i].description);
        $('.title'+i).append(article[i].title);
        $('.source'+i).html('Source: <a target="_blank" href='+article[i].source.url+'>'+article[i].source.name+'</a>&nbsp;&nbsp;');
        $('.seemore'+i).html('<a href='+ article[i].url +' target="_blank" >See more...</a>');
        if (article[i].image!=null){
            var image = document.createElement("IMG");
            image.alt = article[i].title;
            image.setAttribute('class', 'photo');
            image.src= article[i].image;
            $('.image'+i).html(image);
        }
    }
}); 
}

if ( time >= 20 && time < 22){
    $.getJSON('https://gnews.io/api/v4/top-headlines?&token='+token6+'&country=in&topic=health&lang=en', function (news) {
    var article = news.articles
    // console.log(article);
    for (let i = 0; i < article.length; i++) {
        // console.log(i);
        $('.des'+i).append(article[i].description);
        $('.title'+i).append(article[i].title);
        $('.source'+i).html('Source: <a target="_blank" href='+article[i].source.url+'>'+article[i].source.name+'</a>&nbsp;&nbsp;');
        $('.seemore'+i).html('<a href='+ article[i].url +' target="_blank" >See more...</a>');
        if (article[i].image!=null){
            var image = document.createElement("IMG");
            image.alt = article[i].title;
            image.setAttribute('class', 'photo');
            image.src= article[i].image;
            $('.image'+i).html(image);
        }
    }
}); 
}

if ( time >= 22 && time < 24){
    $.getJSON('https://gnews.io/api/v4/top-headlines?&token='+token7+'&country=in&topic=health&lang=en', function (news) {
    var article = news.articles
    // console.log(article);
    for (let i = 0; i < article.length; i++) {
        // console.log(i);
        $('.des'+i).append(article[i].description);
        $('.title'+i).append(article[i].title);
        $('.source'+i).html('Source: <a target="_blank" href='+article[i].source.url+'>'+article[i].source.name+'</a>&nbsp;&nbsp;');
        $('.seemore'+i).html('<a href='+ article[i].url +' target="_blank" >See more...</a>');
        if (article[i].image!=null){
            var image = document.createElement("IMG");
            image.alt = article[i].title;
            image.setAttribute('class', 'photo');
            image.src= article[i].image;
            $('.image'+i).html(image);
        }
    }
}); 
}