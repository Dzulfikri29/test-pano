$(function () {});

function showmodal(id) {
    console.log("test")
    var myModal = new bootstrap.Modal(document.getElementById('' + id + ''))
    // var myModal = document.getElementById(''+id+'') // relatedTarget
    myModal.show()
    // $('#'+id+'').show()
}

initFireBase();

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
