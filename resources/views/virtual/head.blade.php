<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>FHCI Summit</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="mobile-web-app-capable" content="yes" />

<link rel="icon" href="https://fhcisummit.com/web/images/favicon.png">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
<link rel="stylesheet" href="https://fhcisummit.com/assets/plugins/swiper/swiper-bundle.min.css" />
<link rel="stylesheet" href="https://fhcisummit.com/web/css/main.css">

<script type="text/javascript" src="{{ asset('virtual-asset/data360/pano2vr_player.js') }}">
</script>
<script src="{{ asset('virtual-asset/data360/webxr/three.min.js') }}"></script>
<script src="{{ asset('virtual-asset/data360/webxr/webxr-polyfill.min.js') }}"></script>
<script>
    const token = "{{ csrf_token() }}";
    const base_url = "{{ url('') }}";
</script>
<style>
    .btn-custom{
        color : #d1975f;
        background-color: white;
        border-color: #d1975f;
    }
</style>