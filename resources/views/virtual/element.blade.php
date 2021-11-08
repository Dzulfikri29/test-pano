@for ($i = 0; $i < 2; $i++)
    <!-- Modal Example -->
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
@endfor

<script src="{{ asset('virtual-asset/js/visitor.js') }}"></script>
<script>
    $('.modal').each(function() {
        $(this).on("shown.bs.modal", function() {
            var partner_id = $(this).data('id');
            addVisitor(partner_id);
        });
    });
</script>
