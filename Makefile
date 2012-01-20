default: micro.mouse-min.js

PHONY: clean

micro.mouse-debug.js: lib/offset/lib/ns.js lib/offset/lib/offset.js lib/mouse.js
	echo "(function () {" > $@
	sed "s/^/\t/g" lib/offset/lib/ns.js >> $@
	echo "" >> $@
	sed "s/^/\t/g" lib/offset/lib/offset.js >> $@
	echo "" >> $@
	sed "s/^/\t/g" lib/mouse.js >> $@
	echo "}())" >> $@

micro.mouse-min.js: micro.mouse-debug.js
	uglifyjs -nc $< > $@

clean:
	rm *.js
