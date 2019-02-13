const $input = $('#cityField');
const $submit = $('#search');

$input.keypress(function(event) {
    if (event.keyCode == '13') {
        event.preventDefault();
    }
 });

const executeSearch = () => {
    const city = $input.val();
    $.ajax({
        type: "POST",
        url: "/",
        data: `${city}`,
        success: console.log("Data sent to server!"),
        dataType: "application/x-www-form-urlencoded"
      });
};

$submit.click(executeSearch);