var d = [];
function submitf() {
  let a = {};
  var namec = $("#inputName").val();
  var mail = $("#inputEmail").val();
  var password = $("#inputPassword").val();
  var phonenumber = $('#inputPhone').val();
  a = {
    'id': d.length + 1,
    'Name': namec,
    'Email': mail,
    'Password': password,
    'PhoneNumber': phonenumber
  }
  d.push(a);
  $('#tform')[0].reset(); 
}
function showData() {
  $('#rowd').empty();
  for (let x in d)
    $('#rowd').append(`  
    <tr id="${x.id}">        
      <td><b id="nameB_${x}">${d[x].Name}</b><input type="text" class="form-control" name='namec' style="display:none;width:250px !important" id="inputNameC_${x}" aria-describedby="Name"></td>
      <td><b id="emailB_${x}">${d[x].Email}</b><input type="text" class="form-control" name='emailc' style="display:none;width:250px !important" id="inputEmailC_${x}" aria-describedby="Name"></td>
      <td>${d[x].Password}</td>
      <td>${d[x].PhoneNumber}</td>
      <td><button type="submit" id="deleteb" onclick="event.preventDefault();deleted(${x})"
      class="btn btn-danger mb-md-5 ">Delete</button></td>
      <td><button type="submit" id="editb" onclick="event.preventDefault();edit(${x})"
      class="btn btn-danger mb-md-5">Edit</button></td>
      <td><button type="submit" id="doneb_${x}" style="display:none" onclick="event.preventDefault();done(${x})"
      class="btn btn-danger mb-md-5">Done</button></td>
    </tr>     
 `);
}
function edit(x) {
  $(`#inputNameC_${x}`).show();
  $(`#inputEmailC_${x}`).show();
  $(`#nameB_${x}`).hide();
  $(`#emailB_${x}`).hide();
  $(`#doneb_${x}`).show();
}
function done(x) {  
  d[x].Name=$(`#inputNameC_${x}`).val();
  d[x].Email=$(`#inputEmailC_${x}`).val();
  showData();
}
function deleted(id) {
  d.splice(id, 1);
  showData();
}
