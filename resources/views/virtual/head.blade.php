<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>Basic RGB</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="mobile-web-app-capable" content="yes" />
<script type="text/javascript" src="{{ asset('virtual-asset/data360/pano2vr_player.js') }}">
</script>
<script src="{{ asset('virtual-asset/data360/webxr/three.min.js') }}"></script>
<script src="{{ asset('virtual-asset/data360/webxr/webxr-polyfill.min.js') }}"></script>
<script>
    const token = "{{ csrf_token() }}";
    const base_url = "{{ url('') }}";
</script>
