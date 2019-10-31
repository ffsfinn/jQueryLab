var input = $('#inputLine')
var inputArr = [];
var removed = [];



$('#button').on('click', function(evt) {
    var skill = $(this).closest('p');
    removed.push(skill[0].outerHTML);

    skill.fadeOut(300, function() {
        skill.remove();
    });

});


$('#addSkill').on('click', function(evt) {
    let inputFind = evt.target.parentElement.children[0].value;
    inputArr.push(inputFind);

    var newSkill = `<div class="para" id="para">
                    <p><button id="button" class="btn btn-danger">X</button> ${inputFind}</p>
                    </div>`;
    $('#para').append(newSkill);


    // console.log(inputArr);
});