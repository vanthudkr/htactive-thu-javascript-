var data = [
  {
    "productId": 1,
    "type": "Motor",
    "price": 10000,
    "examine": "Examine"
  },
  {
    "productId": 2,
    "type": "Motor",
    "price": 20000,
    "examine": "Examine"
  },
  {
    "productId": 3,
    "type": "Car",
    "price": 30000,
    "examine": "Examine"
  },
  {
    "productId": 4,
    "type": "Car",
    "price": 40000,
    "examine": "Examine"
  },
  {
    "productId": 5,
    "type": "Bike",
    "price": 50000,
    "examine": "Examine"
  },
  {
    "productId": 6,
    "type": "Bike",
    "price": 60000,
    "examine": "Examine"
  }
]
    var local_data = data;
    var row_data = '';
    for (var i = 0; i < local_data.length; i++) {
    var row_data = row_data + '<tr>' +
        ' <td>' + local_data[i].productId + '</td>' +
        ' <td>' + local_data[i].type + '</td>' +
        ' <td>' + local_data[i].price + '</td>' +
        ' <td>' + local_data[i].examine + '</td>' +
        '</tr>';
    }         

    var table_body_element = document.createElement('tbody');
    table_body_element.innerHTML = row_data;
    document.getElementById('my_table').appendChild(table_body_element);

//Search


function myFunction() {
    var iValue = $('#search').val();
    // $('#search').val(iValue);
    for (var i=0; i < data.length; i++) {
        if (data[i].productId == iValue) {
            var markup =
            `
            <div>
                <span>Product Id: </span><strong>${data[i].productId}</strong><br>
                <span>Type: </span><strong>${data[i].type}</strong><br>
                <span>Price: </span><strong>${data[i].price}</strong><br>
                <span>Examine: </span><strong>${data[i].examine}</strong>
            </div>
            `
            $("#infor").append(markup);

            var row_data = row_data + '<tr>' +
            ' <td>' + data[i].productId + '</td>' +
            ' <td>' + data[i].type + '</td>' +
            ' <td>' + data[i].price + '</td>' +
            ' <td>' + data[i].examine + '</td>' +
            '</tr>';
            var table_body_element = document.createElement('tbody');
            table_body_element.innerHTML = row_data;
            document.getElementById('similar').appendChild(table_body_element);
        }
    }
    
}