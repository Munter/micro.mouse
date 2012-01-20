micro.mouse = function (e) {
    e = e || window.event;

    e.pageX = e.pageX || (e.clientX || 0) + document.body.scrollLeft + document.documentElement.scrollLeft;
    e.pageY = e.pageY || (e.clientY || 0) + document.body.scrollTop + document.documentElement.scrollTop;

    var offset = micro.offset(e.target || e.srcElement);
    e.offsetX = e.pageX - offset.x;
    e.offsetY = e.pageY - offset.y;

    return e;
};
