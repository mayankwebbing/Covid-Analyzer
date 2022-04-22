$.getJSON(
  'https://gnews.io/api/v4/top-headlines?&token=d25913e772ab575619b1395be1bd2f8e&country=in&topic=health&lang=en',
  function (news) {
    var article = news.articles;
    // console.log(article);
    for (let i = 0; i < article.length; i++) {
      // console.log(i);
      $('.des' + i).append(article[i].description);
      $('.title' + i).append(article[i].title);
      $('.source' + i).html(
        'Source: <a target="_blank" href=' +
          article[i].source.url +
          '>' +
          article[i].source.name +
          '</a>&nbsp;&nbsp;'
      );
      $('.seemore' + i).html(
        '<a href=' + article[i].url + ' target="_blank" >See more...</a>'
      );
      if (article[i].image != null) {
        var image = document.createElement('IMG');
        image.alt = article[i].title;
        image.setAttribute('class', 'photo');
        image.src = article[i].image;
        $('.image' + i).html(image);
      }
    }
  }
);