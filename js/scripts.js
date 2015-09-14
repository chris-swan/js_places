// keeps hidden but eventually appends new location-name, photo , journal to form
$(document).ready(function() {
  $("#add-location").click(function() {
    $("#new-locationes").append('<div class="new-location">' +
                                 '<div class="form-group">' +
                                   '<label for="new-location-name">location-name</label>' +
                                   '<input type="text" class="form-control new-location-name">' +
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

      var inputtedplaceVisited = $("input#new-place-visted").val();
      var inputteddate = $("input#new-date").val();

      var newplace = { placeVisited: inputtedplaceVisited,
                          date: inputteddate,
                          locationes: [] };

// new locations object
      $(".new-location").each(function() {
        var inputtedlocation-name = $(this).find("input.new-location-name").val();
        var inputtedphoto = $(this).find("input.new-photo").val();
        var inputtedjournal = $(this).find("input.new-journal").val();

        var newlocation = { location-name: inputtedlocation-name, photo: inputtedphoto, journal: inputtedjournal };
        newplace.locationes.push(newlocation);
      });

// list places object ?
      $("ul#places").append("<li><span class='place'>" +
                                newplace.placeVisited +
                                " " + newplace.date +
                                "</span></li>");

      $("input#new-place-visted").val("");
      $("input#new-date").val("");
      $("input.new-location-name").val("");
      $("input.new-photo").val("");
      $("input.new-journal").val("")

      $(".place").last().click(function() {
        $("#show-place").show();
        $("#show-place h2").text(newplace.placeVisited);
        $(".place-visted").text(newplace.placeVisited);
        $(".date").text(newplace.date);

        $("ul#locationes").text("");
        newplace.locationes.forEach(function(location) {
          $("ul#locationes").append("<li>" + location.location-name + ", " + location.photo + ", " + location.journal + "</li>");
        });
      });
    });
  });
