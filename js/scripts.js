// keeps hidden but eventually appends new locationName, photo , journal to form
$(document).ready(function() {
  $("#add-location").click(function() {
    $("#new-locations").append('<div class="new-location">' +
                                 '<div class="form-group">' +
                                   '<label for="new-locationName">location name</label>' +
                                   '<input type="text" class="form-control new-locationName">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-photo">photo</label>' +
                                   '<input type="text" class="form-control new-photo">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-journal">journal</label>' +
                                   '<input type="text" class="form-control new-journal">' +
                                 '</div>' +
                               '</div>');
  });


// new place
  $("form#new-place").submit(function(event) {
      event.preventDefault();

      var inputtedPlaceVisited = $("input#new-place-visited").val();
      var inputtedDate = $("input#new-date").val();

      var newPlace = { placeVisited: inputtedPlaceVisited,
                          date: inputtedDate,
                          locations: [] };

// new locations object
      $(".new-location").each(function() {
        var inputtedLocationName = $(this).find("input.new-locationName").val();
        var inputtedPhoto = $(this).find("input.new-photo").val();
        var inputtedJournal = $(this).find("input.new-journal").val();

        var newLocation = { locationName: inputtedLocationName, photo: inputtedPhoto, journal: inputtedJournal };
        newPlace.locations.push(newLocation);
      });
// list places object ?
      $("ul#places").append("<li><span class='place'>" +
                                newPlace.placeVisited +
                                " " + newPlace.date +
                                "</span></li>");


      $(".place").last().click(function() {
        $("#show-place").show();

        $("#show-place h2").text(newPlace.placeVisited);
        $(".place-visited").text(newPlace.placeVisited);
        $(".date").text(newPlace.date);


        $("ul#locations").text("");
        newPlace.locations.forEach(function(location) {
          $("ul#locations").append("<li>" + location.locationName + ", " + location.photo + ", " + location.journal + "</li>");

          // console.log (inputtedLocationName)
          //debugger;
        });
      $("input#new-place-visited").val("");
      $("input#new-date").val("");
      $("input.new-locationName").val("");
      $("input.new-photo").val("");
      $("input.new-journal").val("");
      });
    });
  });
