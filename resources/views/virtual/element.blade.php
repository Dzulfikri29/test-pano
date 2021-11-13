<!-- @for ($i = 0; $i < 2; $i++)
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        data-id="{{ $i }}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Exhibitor {{ $i }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
@endfor -->

@include('virtual.test_modal')

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
</script>
<script src="https://kit.fontawesome.com/91cbc167cc.js" crossorigin="anonymous"></script>
<script src="https://fhcisummit.com/virtual-asset/js/visitor.js"></script>
<script src="https://fhcisummit.com/assets/plugins/swiper/swiper.min.js"></script>
<script src="{{ asset('virtual-asset/js/visitor.js') }}"></script>
<!-- <script>
    $('.modal').each(function() {
        $(this).on("shown.bs.modal", function() {
            var partner_id = $(this).data('id');
            addVisitor(partner_id);
        });
    });
</script> -->