function kirim_data_lokal() {
    if (confirm('data ini akan di kirim ke server lokal dan diupdate, apa anda yakin?')) {
        jQuery('#wrap-loading').show();
        relayAjax({
            url: lru1,
            type: 'post',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                var data_prog_keg = {
                    action: 'kirim_data_lokal',
                    tahun_anggaran: auth.tahun_anggaran,
                    api_key: auth.api_key,
                    subgiat: {}
                };
                data.data.map(function (subgiat, i) {
                    data_prog_keg.subgiat[i] = {}; // Array untuk push data
                    data_prog_keg.subgiat[i].id_bidang_urusan = subgiat.id_bidang_urusan;
                    data_prog_keg.subgiat[i].id_program = subgiat.id_program;
                    data_prog_keg.subgiat[i].id_sub_giat = subgiat.id_sub_giat
                    data_prog_keg.subgiat[i].id_urusan = subgiat.id_urusan
                    data_prog_keg.subgiat[i].is_locked = subgiat.is_locked
                    data_prog_keg.subgiat[i].kode_bidang_urusan = subgiat.kode_bidang_urusan
                    data_prog_keg.subgiat[i].kode_giat = subgiat.kode_giat
                    data_prog_keg.subgiat[i].kode_program = subgiat.kode_program
                    data_prog_keg.subgiat[i].kode_sub_giat = subgiat.kode_sub_giat
                    data_prog_keg.subgiat[i].kode_urusan = subgiat.kode_urusan
                    data_prog_keg.subgiat[i].nama_bidang_urusan = subgiat.nama_bidang_urusan
                    data_prog_keg.subgiat[i].nama_giat = subgiat.nama_giat
                    data_prog_keg.subgiat[i].nama_program = subgiat.nama_program
                    data_prog_keg.subgiat[i].nama_sub_giat = subgiat.nama_sub_giat
                    data_prog_keg.subgiat[i].nama_urusan = subgiat.nama_urusan
                    data_prog_keg.subgiat[i].status = subgiat.status

                })
                var data = {
                    message: {
                        type: "get-url",
                        content: {
                            url: auth.url,
                            type: 'post',
                            data: data_prog_keg,
                            return: true
                        }
                    }
                };
                chrome.runtime.sendMessage(data, function (response) {
                    console.log('responeMessage', response);
                });
            }
        })
    }
}