// total overview
$.getJSON('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=d479deebfa18494b85420954ada43be3', function () {
  console.log(latest.articles[1].description);
//   $('.totalcases').append(latest.data.summary.total);
//   $('.totalrecovered').append(latest.data.summary.discharged);
//   $('.totalactive').append(
//     latest.data.summary.total - (latest.data.summary.discharged - latest.data.summary.deaths)
//   );
//   $('.totaldeaths').append(latest.data.summary.deaths);
});