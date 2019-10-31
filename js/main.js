var input = $('#inputLine')
var inputArr = [];
var removed = [];

// $('.button').addClass('btn-danger');

$('#button').on('click', function() {
    var skill = $(this).closest('p');
    removed.push(skill[0].outerHTML);

    skill.fadeOut(600, function() {
        skill.remove();
    });
    return;
});


$('#addSkill').on('click', function(evt) {
    let input = $('#inputLine');
    let inputFind = evt.target.parentElement.children[0].value
    inputArr.push(inputFind);
    

    var newSkill = `<p><button id="button" class="btn btn-danger">X</button>${inputFind}</p>`
    $('#para p').append(newSkill);


    return inputArr;
    // console.log(inputFind);
});










$('#addHome').click(function(evt){
    // Exit if there are no homes in the array
    if (!newHomes.length) return;
    // Grab a home
    var home = newHomes.pop();
    // Build the string for the new table row
    var newRow =  `<tr>
                    <td>${home.address}</td><td>${home.sf}</td><td>${home.bedrooms}</td>
                    <td>${home.baths}</td><td>${home.price}</td>
                    <td><button class="btn btn-xs btn-danger">Remove</button></td>
                  </tr>`;
    // Append the string for the new row to the tbody element
    $('#homes tbody').append(newRow);
    // Disable the "Add Home" button if no more homes
    if (!newHomes.length) $('#addHome').attr('disabled', true);
  });