$('.memlist').each(function() {
    var memthis = $(this);
    var memtab = memthis.find('li.active');
    var memlink = memtab.find('a');
    var mempanel = $(memlink.attr('href'));
    memthis.on('click', '.memcontrol', function(e) {
        e.preventDefault();
        var memlink = $(this);
        // console.log(memlink);
        var id = this.hash;
        if (id && !memlink.is('.active')) {
            mempanel.removeClass('active');
            memtab.removeClass('active');
            mempanel = $(id).addClass('active');
            memtab = memlink.parent().addClass('active');
        }
    })
});
$('.memrightul').each(function() {
    var memthis = $(this);
    var memtab = memthis.find('li.active');
    var memlink = memtab.find('a');
    var mempanel = $(memlink.attr('href'));
    memthis.on('click', '.memrightli', function(e) {
        e.preventDefault();
    })
});