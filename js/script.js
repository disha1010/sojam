$(document).ready(function () {
  // accordion
  $('.open .faq-answer').css('display', 'block');
  $('.article-title-wrapper').click(function (e) {
    e.preventDefault();
    var clickedFaqItem = $(this).closest('.faq-item');

    if(clickedFaqItem.hasClass('open')){
      clickedFaqItem.removeClass('open');
      clickedFaqItem.find('.faq-answer').slideUp();
    } else {
      var faqItemToClose = $('.faq-item.open');
      if(faqItemToClose.length){
        faqItemToClose.removeClass('open');
        faqItemToClose.find('.faq-answer').slideUp();
      }
      clickedFaqItem.addClass('open');
      clickedFaqItem.find('.faq-answer').slideDown();
    }
  });
  // top-menu
  $('.navbar-toggle').on('click', function () {
    $(this).find('.nav-icon').toggleClass('open');
    $('.navbar-collapse-sojam').animate({
      width: 'toggle'
    });
  });

  // filter-nav
  $('.filter-toggle').on('click', function () {
    $('.nav-navbar-filter').toggleClass('open');
  });

  // form inits
  $('#contact-form').submit(function (e) {
    $('.message').removeClass('hide').slideDown().show();
    e.preventDefault();
  });

  // slider nav indicator animation
  var progressBarOptionsSlow = {
    startAngle: -1.55,
    size: 26,
    value: 1,
    animation: {
      duration: 4000,
      easing: "linear"
    },
    fill: {
      color: '#fff'
    }
  }
  var progressBarOptionsFast = {
    startAngle: -1.55,
    size: 26,
    value: 1,
    animation: {
      duration: 600,
      easing: "circleProgressEasing"
    },
    fill: {
      color: '#fff'
    }
  }
  var myIndicator = $('.main .carousel-control-sojam.right');
  if (myIndicator && myIndicator.length) {
    myIndicator.circleProgress(progressBarOptionsSlow);
    // carousel
    var myCarousel = $('.main #myCarousel');
    myCarousel.on('slide.bs.carousel', function () {
      myIndicator.circleProgress(progressBarOptionsFast);
    });
    myCarousel.on('slid.bs.carousel', function () {
      myIndicator.circleProgress(progressBarOptionsSlow);
    });
  }
});

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
  ['Волгоград', 48.707103, 44.516939, 4,
    '<div class="map-mark-info"><span style="font-weight: 600">ОАО «Николаевское хлебоприёмное»</span> Волгоградская область</div>'
  ],
  ['Ростов-на-Дону', 47.222543, 39.718732, 3,
    '<div class="map-mark-info"><span style="font-weight: 600">ОАО «Николаевское хлебоприёмное»</span> Волгоградская область</div>'
  ],
  ['Краснодар', 45.035566, 38.974711, 2,
    '<div class="map-mark-info"><span style="font-weight: 600">ОАО «Николаевское хлебоприёмное»</span> Волгоградская область</div>'
  ],
  ['Ставрополь', 45.044521, 42.969083, 1,
    '<div class="map-mark-info"><span style="font-weight: 600">ОАО «Николаевское хлебоприёмное»</span> Волгоградская область</div>'
  ]
];

function setMarkers(map) {
  for (var i = 0; i < partners.length; i++) {
    var partner = partners[i];
    var markerLabel = partner[0];
    var contentString = partner[4];
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    var image = {
      url: 'images/map-marker.png',
      size: new google.maps.Size(43, 54),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(21, 54),
      labelOrigin: new google.maps.Point(21, 60)
    };
    var shape = {
      coords: [1, 1, 1, 53, 42, 53, 42, 1],
      type: 'poly'
    };
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
    var clickListner = (function (infowindow, map, marker) {
      infowindow.open(map, marker);
    }).bind({}, infowindow, map, marker)

    marker.addListener('click', clickListner);
  }
}