$.getJSON(
  'json/mp.json',
  function (hospitalinfoupdate) {
    var re = hospitalinfoupdate;
    buildTable(re);
    function buildTable(data) {
      var table = document.getElementById('myhospitalinfo');
      for (var i = 0; i < data.length; i++) {
        var row = `<tr>
						      <td class="text-dark text-semibold " style="text-align: center; vertical-align: middle;">${data[i].district}</td>
                            <td class="text-dark text-semibold " style="vertical-align: middle;">${data[i].name}</td>
                            <td class="text-dark text-semibold " style="text-align: center; vertical-align: middle;">${data[i].type}</td>
                            <td class="text-dark text-semibold " style="text-align: center; vertical-align: middle;">${data[i].contact1[0]} <br><a href="tel:${data[i].contact1[1]}">${data[i].contact1[1]}</a></td>
                            <td class="text-dark text-semibold " style="text-align: center; vertical-align: middle;">${data[i].contact2[0]} <br><a href="tel:${data[i].contact2[1]}">${data[i].contact2[1]}</a></td>
                            <td class="text-dark text-semibold " style="text-align: center; vertical-align: middle;">${data[i].contact3[0]} <br><a href="tel:${data[i].contact3[1]}">${data[i].contact3[1]}</a></td>
                        </tr>`;
        table.innerHTML += row;
      }
    }
  }

);

