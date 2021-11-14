@include('virtual.test_modal')

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
</script>
<script src="https://kit.fontawesome.com/91cbc167cc.js" crossorigin="anonymous"></script>
<script src="https://fhcisummit.com/virtual-asset/js/visitor.js"></script>
<script src="https://fhcisummit.com/assets/plugins/swiper/swiper.min.js"></script>
<script src="{{ asset('virtual-asset/js/visitor.js') }}"></script>
<link rel="stylesheet" href="https://fhcisummit.com/assets/plugins/swiper/swiper-bundle.min.css" />
<link rel="stylesheet" href="https://fhcisummit.com/web/css/main.css">
<style>
    body.modal-open {
        overflow: hidden !important;
    }

    .img-responsive {
        max-height: calc(100vh - 225px) !important;
    }

    .modal-height {
        min-height: calc(100vh - 225px) !important;
        max-height: calc(100vh - 225px) !important;
        overflow-x: scroll;
    }
</style>
<!-- <script>
    $('.modal').each(function() {
        $(this).on("shown.bs.modal", function() {
            var partner_id = $(this).data('id');
            addVisitor(partner_id);
        });
    });
</script> -->