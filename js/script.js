$(document).ready(function () {
  // accordion
  function close_accordion() {
    $('.accordion-toggle').removeClass('active');
    $('.faq-answer').slideUp(300).removeClass('open');
  }
  $('.accordion-toggle').click(function (e) {
    e.preventDefault();
    if ($(this).is('.active')) {
      close_accordion();
    } else {
      close_accordion();
      $(this).addClass('active');
      $(this)
        .parents('.faq-item')
        .find('.faq-answer')
        .slideDown(300)
        .addClass('open');
    }
  });
  // top-menu
  $('.navbar-toggle').on('click', function () {
    $(this).find('.nav-icon').toggleClass('open');
    $('.navbar-collapse-sojam').animate({ width: 'toggle' });
  });

// map
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 47.936862689468136,
      lng: 403.3030532836914
    },
    zoom: 5,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    styles: [{
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#dde3ed"
      }]
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      "stylers": [{
        "color": "#424242"
      }]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#bbc9db"
      }]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#748eb6"
      },
      {
        "visibility": "on"
      }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#bbc9db"
      }]
    },
    {
      "featureType": "water",
      "stylers": [{
        "color": "#eaeef4"
      }]
    }
    ]
  });
  setMarkers(map);
}

var partners = [
  ['Волгоград', 48.707103, 44.516939, 4],
  ['Ростов-на-Дону', 47.222543, 39.718732, 3],
  ['Краснодар', 45.035566, 38.974711, 2],
  ['Ставрополь', 45.044521, 42.969083, 1]
];

function setMarkers(map) {
  var image = {
    url: 'images/map-marker.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(30, 38),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(14, 35),
    labelOrigin: new google.maps.Point(14, 40)
  };
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < partners.length; i++) {
    var partner = partners[i];
    var markerLabel = partners[i][0];
    var marker = new google.maps.Marker({
      position: {
        lat: partner[1],
        lng: partner[2]
      },
      map: map,
      icon: image,
      shape: shape,
      title: partner[0],
      zIndex: partner[3],
      label: {
        text: markerLabel,
        color: "#c52c13",
        fontSize: "15px",
        fontWeight: "600"
      }
    });
  }
}

// slider nav indicator animation
var progressBarOptionsSlow = {
  startAngle: -1.55,
  size: 25,
  value: 1,
  animation: { duration: 5000, easing: "linear" },
  fill: { color: '#fff' }
}
var progressBarOptionsFast = {
  startAngle: -1.55,
  size: 25,
  value: 1,
  animation: { duration: 600, easing: "circleProgressEasing" },
  fill: { color: '#fff' }
}
var myIndicator = $('.main .carousel-control-sojam.right');
myIndicator.circleProgress(progressBarOptionsSlow);
// carousel
var myCarousel = $('#myCarousel');
myCarousel.on('slide.bs.carousel', function () {
  myIndicator.circleProgress(progressBarOptionsFast);
});
myCarousel.on('slid.bs.carousel', function () {
  myIndicator.circleProgress(progressBarOptionsSlow);
});

});// /doc.ready
