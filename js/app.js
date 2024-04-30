let navbarToggler = document.querySelector('.navbar-toggler');
let navbarCollapse = document.querySelector('.navbar-collapse');
    navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
});

let dropdowns = document.querySelectorAll('.dropdown-toggle');
        dropdowns.forEach(function (dropdown) {
            dropdown.addEventListener('click', function () {
                let dropdownMenu = this.nextElementSibling;
                dropdownMenu.classList.toggle('show');
            });
        });
        
        document.addEventListener('DOMContentLoaded', function() {
            const ticks = document.querySelectorAll('.tick');
            
            ticks.forEach(function(tick) {
                tick.addEventListener('click', function() {
                    tick.classList.toggle('checked');
                });
            });
        });
        