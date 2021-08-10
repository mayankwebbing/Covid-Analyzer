// total overview
$.getJSON('https://api.rootnet.in/covid19-in/stats/latest', function (latest) {
  // console.log(latest.data.summary.total);
  $('.totalcases').append(latest.data.summary.total);
  $('.totalrecovered').append(latest.data.summary.discharged);
  $('.totalactive').append(
    latest.data.summary.total - (latest.data.summary.discharged - latest.data.summary.deaths)
  );
  $('.totaldeaths').append(latest.data.summary.deaths);
});

// today overview
$.getJSON('https://api.covid19india.org/data.json', function (data) {
  // console.log(data);
  var today = data.cases_time_series[data.cases_time_series.length - 1];
  var yesterday = data.cases_time_series[data.cases_time_series.length - 2];
  // console.log(today);
  // console.log(yesterday);
  $('.todaydate').append(today.date);
  $('.yesterdaydate').append(yesterday.date);
  $('.todaycases').append(today.dailyconfirmed);
  $('.todayrecovered').append(today.dailyrecovered);
  $('.todayactive').append(
    today.dailyconfirmed - today.dailydeceased - today.dailyrecovered
  );
  $('.todaydeaths').append(today.dailydeceased);
});
