let num = 0

let h = 100

$('.todo').css('height', h + 'px')

$('#add').click(() => {
    if ($('#input').val() !== "") {
    num = num + 1
    $('ul').append('<section id="section-' + num + '"> <li onclick="done(' + num + ')" id="item-' + num + '">' + $('#input').val() + '</li> <button class="remove" id="remove-' + num + '" onclick="remove(' + num + ')"></button> <button class="donebutton" id="done-' + num + '" onclick="done(' + num + ')"></button> </section>'),
    $('#input').val(""),
    h = h + $('#section-' + num).height(),
    $('.todo').css('height', h + 'px')
    }
}
)

function done(num) {
    $('#item-' + `${num}`).toggleClass('done'),
    $('#done-' + `${num}`).toggleClass('donetick')
}

function remove(num) {
    h = h - $('#section-' + num).height(),
    $('#section-' + `${num}`).remove(),
    $('.todo').css('height', h + 'px')
}




