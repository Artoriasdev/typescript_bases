"use strict";
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    flash = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super Fuerza"],
        getNombre: function () {
            return this.name;
        },
    };
    console.log(flash);
})();
