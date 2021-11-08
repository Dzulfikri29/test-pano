function addVisitor(partner_id) {
    $.ajax({
        url: `${base_url}/add-visitor`,
        method: "POST",
        headers: {
            'X-CSRF-TOKEN': token,
        },
        data: {
            partner_id: partner_id,
        },
        success: function (res) {
            if (res.success) {
                console.log(res);
            } else {
                console.log(res)
            }
        }
    });
}
