jQuery(document).ready(function () {
    var = url = window.location.href;

    if (
        jQuery('h3.page-title').text().indexOf('Sub Kegiatan') != -1
    ) {
        console.log('Halaman sub kegiatan')
        var singkron_data = ''
            + '<a class="fcbtn btn btn-danger" id="singkron_data_giat_lokal">'
                + '<i class="fa fa-cloud-download m-r-5"></i> <span>Kirim Program Kegiatan ke DB</span>'
            + '</a>';
        jQuery('#reset_submit').parent().append(singkron_data);
        jQuery('#kirim_data_lokal').on('click', function () {
            kirim_data_lokal();
        });
    }

    Promise.all(sendData)
    
});