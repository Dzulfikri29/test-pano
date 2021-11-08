<script type="text/javascript" src="{{ asset('virtual-asset/data360/skin.js') }}"></script>
<script type="text/javascript">
    // create the panorama player with the container
    pano = new pano2vrPlayer("container");
    // add the skin object
    skin = new pano2vrSkin(pano);
    // load the configuration

    window.addEventListener("load", function() {
        pano.readConfigUrlAsync("{{ asset('virtual-asset/data360/pano.xml') }}");
    });
</script>
<noscript>
    <p><b>Please enable Javascript!</b></p>
</noscript>
