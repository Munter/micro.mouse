micro.mouse = function (e) {
    e = e || window.event;

    if (typeof e.pageX === 'undefined') {
        e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    var offset = micro.offset(e.target || e.srcElement);
    e.offsetX = e.pageX - offset.x;
    e.offsetY = e.pageY - offset.y;

    return e;
};
