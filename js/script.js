// CALL NAVBARS
$(document).ready(function() {
  	$('.toggle-menu').jPushMenu();
});


// CALL TIMELINE JS
$(document).ready(function() {
  var embed = document.getElementById('timeline-embed');
  embed.style.height = getComputedStyle(document.body).height;
  window.timeline = new TL.Timeline('timeline-embed', 'json/photoinventory.json', {
    hash_bookmark: true,
    initial_zoom: 6
  });
  window.addEventListener('resize', function() {
    var embed = document.getElementById('timeline-embed');
    embed.style.height = getComputedStyle(document.body).height;
    timeline.updateDisplay();
  });
});

// // FILTER THEMES
$(document).ready(function() {

    $("#birthday").click(function() {
      window.timeline = new TL.Timeline('timeline-embed', 'json/birthday.json', {
        hash_bookmark: true,
        initial_zoom: 6
      });
    });

    $("#adults").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/adults.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#cars").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/cars.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#events").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/events.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#holiday").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/holiday.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#house").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/house.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#inside").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/inside.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#kids").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/kids.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#military").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/military.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#outside").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/adults.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#playing").click(function(){
     window.timeline = new TL.Timeline('timeline-embed', 'json/playing.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#porch").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/porch.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#pregnancy").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/pregnancy.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#summer").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/summer.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#vacation").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/vacation.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#winter").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/winter.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#portraits").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/portraits.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

    $("#show").click(function() {
     window.timeline = new TL.Timeline('timeline-embed', 'json/photoinventory.json', {
       hash_bookmark: true,
       initial_zoom: 6
     });
    });

});
