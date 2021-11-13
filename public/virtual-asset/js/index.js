var arr_hall = []

$(function () {
  $.ajax({
    type: "get",
    url: "/virtual-asset/js/hall_link.json",
    dataType: "json",
    caches: false,
    success: function (data) {
      console.log("jsondata", data)
      for (var x of data.hall) {
        arr_hall.push(x)
      }
      console.log("arr_hall", arr_hall)
    }
  });
  pano.on('changenode', function () {
    animatehotspot()
  })
});

function showmodal() {
  console.log("test")
  var id = pano.getVariableValue('var_id')
  console.log(id)
  // var myModal = new bootstrap.Modal(document.getElementById('' + id + ''))
  // var myModal = document.getElementById(''+id+'') // relatedTarget
  // myModal.show()
  // $('#'+id+'').show()
  $('#' + id + '').modal('toggle')
}

$('.modal').each(function () {
  $(this).on("shown.bs.modal", function () {
    var partner_id = $(this).data('id');
    // addVisitor(partner_id);

    $(this).find('iframe').attr('src', $(this).data('src'));

    var swiper_el = $(this).find('.swiper');


    if (swiper_el.length > 0) {
      var html = '';
      $.each($(this).data('images'), function (index, value) {
        html += `<div class="swiper-slide">
                                <div class="swiper-zoom-container">
                                    <img class="img-responsive"
                                        src="https://fhcisummit.com/storage/${value}" alt=""
                                        srcset="">
                                </div>
                            </div>`;
      });

      $(this).find('.swiper-wrapper').html(html);

      setTimeout(() => {
        new Swiper(swiper_el, {
          // Optional parameters
          direction: 'horizontal',
          loop: true,
          zoom: {
            maxRatio: 2,
          },
          containerClass: 'swiper-zoom-container',

          // If we need pagination
          pagination: {
            el: $(this).find('.swiper-pagination'),
            clickable: true,
          },

          // Navigation arrows
          navigation: {
            nextEl: $(this).find('.swiper-button-next'),
            prevEl: $(this).find('.swiper-button-prev'),
          },
        });
      }, 1000);


    }

  });
  $(this).on('hidden.bs.modal', function () {
    $(this).find('iframe').attr('src', "");
    $('.youtube-video').each(function (index) {
      $(this)[0].contentWindow.postMessage('{"event":"command","func":"' +
        'pauseVideo' + '","args":""}', '*');
    });
  })
});

function showTooltips() {
  var hs = pano.getVariableValue('hs_title')
  var tmp = []
  console.log(hs)
  if ($('#' + hs + '').hasClass('active')) {
    $('#' + hs + '').removeClass('active');
    $('#' + hs + '').empty();
  } else {
    for (var x of arr_hall) {
      console.log(arr_hall.id)
      if (x.hs_id == hs) {
        $('#' + hs + '').addClass('active');
        tmp = x.link
        for (var y of tmp) {
          // console.log('y', y.link)
          var btnlink = ("<a href='" + y.link + "/" + x.hs_id + "/" + y.lang + "' class='btn btn-primary'>" + y.lang + "</a>")
          $('#' + hs + '').append('' + btnlink + '')
        }
      }
    }
    // arr_hall.forEach(e => {
    //     var btnlink = ("<a href='#" + e_hs_id+ "' class='btn btn-primary'># " + e. + "</a>")
    //     $('#' + hs + '').append('' +btnlink+ '')
    // });
  }
}

initFireBase();

function animatehotspot() {
  var deg = [45, 60, 75]
  deg.forEach(e => {
    anime({
      targets: ['.footprint_' + e,],
      scale: 1.5,
      rotateX: [e, e],
      direction: 'alternate',
      loop: true,
      delay: 300,
      endDelay: 300,
      duration: 1200,
      easing: 'easeInOutQuad'

    })
  });
  anime({
    targets: '.animate',
    scale: 1.2,
    direction: 'alternate',
    loop: true,
    delay: 300,
    endDelay: 300,
    duration: 1200,
    easing: 'easeInOutQuad'

  })
}

function initFireBase() {
  var firebaseConfig = {
    apiKey: "AIzaSyAiLeUDaOBdZGWTmFdPnlsf589hHTkU3OU",
    authDomain: "fhci-e2ff3.firebaseapp.com",
    projectId: "fhci-e2ff3",
    storageBucket: "fhci-e2ff3.appspot.com",
    messagingSenderId: "862268791187",
    appId: "1:862268791187:web:093031c7d8f7f7cab97066",
    measurementId: "G-N7K8SSZYBY"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  Notification.requestPermission().then(function (permission) {
    console.log("permiss", permission);
  });
  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(function () {
      return messaging.getToken();
    })
    .then(function (tkn) {
      $.ajaxSetup({
        headers: {
          "X-CSRF-TOKEN": token,
        },
      });
      $.ajax({
        url: base_url + "/save-token",
        type: "POST",
        data: {
          token: tkn,
        },
        dataType: "JSON",
        success: function (response) {

        },
        error: function (err) {
          console.log(" Can't do because: " + err);
        },
      });
    })
    .catch(function (err) {
      console.log("Unable to get permission to notify.", err);
    });

  messaging.onMessage(function (payload) {
    console.log(payload);
    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon,
    };
    new Notification(noteTitle, noteOptions);
    const audio = new Audio(
      base_url +
      "/assets/sound/sound.mp3"
    );
    audio.play();
  });
}
