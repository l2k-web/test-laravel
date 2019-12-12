require('./bootstrap');


document.addEventListener("DOMContentLoaded", function (event) {
    if ($('#description').length > 0) {
        Laraberg.init('description');
    }
});
