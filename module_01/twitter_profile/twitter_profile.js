(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/twitter_profile.jpg", id:"twitter_profile"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.twitter_profile = function() {
	this.initialize(img.twitter_profile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,800);


(lib.gfcProfile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twitter_profile();
	this.instance.setTransform(-400,-400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-400,800,800);


(lib.gfcEllipseBase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai9C+QhQhPAAhvQAAhuBQhPQBPhQBuAAQBvAABPBQQBQBPAABuQAABvhQBPQhPBQhvAAQhuAAhPhQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.gfcContentBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EghMAOYIAA8vMBCZAAAIAAcvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-92,425.1,184.1);


(lib.mvEllipseBaseOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// base
	this.instance = new lib.gfcEllipseBase("synched",0);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, 156, 20, 28, 0)];
	this.instance.cache(-29,-29,58,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.mvContent5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAJQgDgDAAgGQAAgEACgDQADgEAEABQAFgBACAEQADADAAAEQAAAGgDACQgDADgEAAQgDAAgDgCg");
	this.shape.setTransform(-162.5,59.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBEIggguIgLAKIAAAkIgOAAIAAiHIAOAAIAABHIgBAPIABAAIAMgPIAdgfIASAAIgmAoIAoA3g");
	this.shape_1.setTransform(-168.9,53.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAkQgLgNAAgXQAAgWAMgOQALgNAUABIAOABQAHACADABIgEANIgLgEIgKgBQgbAAAAAkQAAARAHAKQAHAKAMgBQAMAAANgEIAAAMQgKAFgOABQgTgBgMgNg");
	this.shape_2.setTransform(-178.4,55.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgvQgCgDAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_3.setTransform(-185.2,53.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggArIAAgNQAGADAIACQAIACAIAAQAJAAAGgEQAHgDAAgHQAAgGgGgEQgEgEgNgFQgNgEgGgDQgFgEgDgFQgDgEABgHQAAgMAJgGQAKgIAOABQAPAAAPAFIgEANQgPgHgMAAQgIABgFADQgGADAAAGQAAADACADQACADAEADIAPAHQARAFAHAFQAFAHAAAJQAAANgKAIQgKAHgQABQgSgBgLgGg");
	this.shape_4.setTransform(-191.6,55.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAIgNgBg");
	this.shape_5.setTransform(176.7,30.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_6.setTransform(169.9,26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_7.setTransform(165.4,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAsgBIARgBIAAgGQAAgMgFgFQgFgGgKABQgLgBgPAIIgFgLQAIgEAIgCQAJgDAGAAQASAAAIAIQAIAIAAARIAAA/IgLAAIgDgNIgBAAQgHAJgHADQgHADgJAAQgOABgIgIgAAJAAQgPACgIAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgIQAJgGgBgOIAAgJg");
	this.shape_8.setTransform(157.8,28.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_9.setTransform(148.1,28.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgFAJgBIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_10.setTransform(140.4,28.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_11.setTransform(128.2,27.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAVQAHgXACgTIAOAAIACADIgHASIgHAVg");
	this.shape_12.setTransform(123.6,22.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_13.setTransform(116.8,28.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAIACQAHACAIAAQAJAAAGgDQAHgEgBgIQAAgFgEgEQgFgEgNgGQgNgDgGgEQgFgDgDgFQgCgEgBgHQAAgMAKgHQAJgGAPgBQAPABAPAFIgEAMQgPgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAOAHQASAGAFAGQAGAFABAKQgBAOgJAHQgKAIgRgBQgSABgMgHg");
	this.shape_14.setTransform(107,28.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_15.setTransform(100.4,26.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_16.setTransform(88.5,28.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAZBEIAAg+QAAgKgFgGQgGgFgLgBQgNABgHAHQgHAIAAARIAAAzIgPAAIAAiHIAPAAIAAApIgBANIABAAQAEgHAIgEQAIgEAIAAQASAAAJAJQAJAIAAAQIAAA/g");
	this.shape_17.setTransform(78,26.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_18.setTransform(62.3,28.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_19.setTransform(51.8,28.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAZBEIAAg+QAAgKgFgGQgGgFgLgBQgNABgHAHQgHAIAAARIAAAzIgPAAIAAiHIAPAAIAAApIgBANIABAAQAEgHAIgEQAIgEAIAAQASAAAJAJQAJAIAAAQIAAA/g");
	this.shape_20.setTransform(41.3,26.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAYAwIgSg3IgGgXIAAAAIgFAXIgTA3IgQAAIgbhfIAQAAIAOA2QAFATAAAGIABAAIAEgNIADgMIASg2IAOAAIARA2QAFAPABAKIABAAIACgKIAThFIAOAAIgaBfg");
	this.shape_21.setTransform(28.7,28.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUBEIgfgtIgMAJIAAAkIgOAAIAAiHIAOAAIAABHIgBAOIABAAIAMgNIAdgfIARAAIgkAnIAnA3g");
	this.shape_22.setTransform(13.1,26.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAkQgLgNAAgXQAAgWAMgNQALgOAUAAIAOACQAHACADACIgEAMIgLgDIgKgBQgbAAAAAjQAAASAHAJQAHAJAMAAQAMABANgGIAAANQgKAGgOgBQgTAAgMgNg");
	this.shape_23.setTransform(3.6,28.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_24.setTransform(-3.2,26.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAIACQAHACAIAAQAJAAAGgDQAHgEgBgIQABgFgGgEQgEgEgNgGQgNgDgGgEQgFgDgDgFQgCgEgBgHQAAgMAKgHQAJgGAPgBQAQABAOAFIgEAMQgPgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAEACIAPAHQASAGAGAGQAFAFABAKQAAAOgLAHQgJAIgRgBQgSABgMgHg");
	this.shape_25.setTransform(-9.6,28.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_26.setTransform(-24.1,28.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_27.setTransform(-31.9,26.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgMQAAgJAGgHQAFgGALgCQgEgCgDgEQgCgEAAgEQAAgFACgCQAEgEAFgEQgHgDgFgIQgEgGgBgKQAAgQAKgIQAJgJASAAQAFAAAHACIAhAAIAAAJIgSACIAFAIQABAFAAAGQABAOgLAJQgJAJgPAAIgIgBQgKAEAAAGQABAEADACQADABAIABIAPAAQAQgBAIAIQAIAGAAANQABAPgNAJQgNAIgWAAQgUAAgKgHgAgZAeQgFAEAAAJQAAAIAHAEQAGAEANAAQAQAAAJgFQAIgGABgKQgBgHgFgDQgEgDgOAAIgPAAQgKAAgGAFgAgRg1QgFAGAAAKQAAAKAFAGQAGAFAKAAQAUAAAAgVQAAgVgUgBQgKABgGAFg");
	this.shape_28.setTransform(-43.8,30.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_29.setTransform(-54.1,28.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_30.setTransform(-62,26.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_31.setTransform(-66.5,26.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_32.setTransform(-71.1,26.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAsgBIARgBIAAgGQAAgMgFgFQgFgGgKABQgKgBgQAIIgFgLQAIgEAIgCQAIgDAHAAQARAAAJAIQAIAIAAARIAAA/IgLAAIgCgNIgBAAQgIAJgHADQgHADgJAAQgOABgIgIgAAJAAQgQACgHAEQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAIgIQAHgGABgOIAAgJg");
	this.shape_33.setTransform(-78.6,28.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAkQgLgNAAgXQAAgWAMgNQALgOAUAAIAOACQAHACADACIgEAMIgLgDIgKgBQgbAAAAAjQAAASAHAJQAHAJAMAAQAMABANgGIAAANQgKAGgOgBQgTAAgMgNg");
	this.shape_34.setTransform(-87.4,28.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_35.setTransform(-102,28.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_36.setTransform(-113,28.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgMQAAgJAFgHQAGgGAKgCQgDgCgDgEQgCgEgBgEQAAgFADgCQAEgEAFgEQgHgDgFgIQgFgGABgKQgBgQAKgIQAKgJARAAQAGAAAFACIAiAAIAAAJIgSACIAEAIQACAFABAGQAAAOgLAJQgJAJgPAAIgIgBQgKAEABAGQAAAEADACQADABAIABIAPAAQAQgBAIAIQAJAGAAANQAAAPgOAJQgMAIgXAAQgSAAgLgHgAgYAeQgGAEAAAJQAAAIAGAEQAHAEAMAAQARAAAIgFQAKgGgBgKQAAgHgEgDQgFgDgNAAIgQAAQgKAAgFAFgAgQg1QgGAGAAAKQAAAKAGAGQAFAFALAAQATAAAAgVQAAgVgTgBQgLABgFAFg");
	this.shape_37.setTransform(-128,30.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_38.setTransform(-138.3,28.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_39.setTransform(-146.2,26.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_40.setTransform(-153.9,28.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_41.setTransform(-164.9,28.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAsgBIARgBIAAgGQAAgMgFgFQgFgGgKABQgLgBgPAIIgFgLQAIgEAIgCQAJgDAGAAQASAAAIAIQAIAIAAARIAAA/IgLAAIgDgNIAAAAQgIAJgHADQgHADgJAAQgOABgIgIgAAJAAQgQACgHAEQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAHgIQAJgGAAgOIAAgJg");
	this.shape_42.setTransform(-175.7,28.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_43.setTransform(-182.7,26.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIABAAQAFgIAHgEQAIgDAIAAQATAAAKANQALANAAAXQAAAWgLANQgKAOgTAAQgHAAgJgDQgHgEgFgIIgCAAIACAQIAAAogAgUgxQgGAJAAASIAAACQAAAUAGAIQAHAJANAAQAMAAAIgLQAGgHABgTQgBgSgGgJQgIgKgMAAQgNABgHAHg");
	this.shape_44.setTransform(-190.2,30.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AggArIAAgNQAGADAJACQAHACAIAAQAJAAAGgEQAHgDAAgHQAAgGgGgEQgEgEgNgFQgNgEgGgDQgFgEgDgFQgDgEABgHQAAgMAJgGQAJgIAPABQAPgBAPAHIgEAMQgPgHgMAAQgIABgGADQgFADAAAGQAAADACADQACADAEADIAPAHQARAFAHAFQAFAHAAAJQAAANgKAIQgJAHgRAAQgSAAgLgGg");
	this.shape_45.setTransform(118.5,2.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_46.setTransform(111.9,0.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNBBQgIgDgGgHIgBAAIgCAMIgLAAIAAiHIAOAAIAAAiIAAATIAAAAQALgOASAAQATAAALANQAKANAAAWQAAAYgLAMQgKAOgTAAQgIAAgHgEgAgUgIQgGAIgBATQAAAUAIAJQAGAIANAAQAOAAAGgJQAHgKgBgSQABgTgHgHQgGgKgOABQgNAAgHAIg");
	this.shape_47.setTransform(99.8,0.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAJAAASQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_48.setTransform(88.5,2.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAbBAIgdg2IgbAAIAAA2IgPAAIAAh/IAkAAQAVAAAMAJQALAJAAATQAAAZgaAHIAjA6gAgdgBIAVAAQAOAAAHgGQAHgGAAgNQAAgMgHgGQgIgGgOAAIgUAAg");
	this.shape_49.setTransform(78.3,0.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_50.setTransform(64.1,1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgFgFgLgBQgKAAgPAIIgEgLQAGgEAJgCQAJgDAGABQARAAAJAHQAIAIAAARIAABAIgLAAIgCgOIgBAAQgHAJgHADQgIADgJAAQgOAAgIgHgAAJABQgQAAgHAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgHQAHgIABgNIAAgJg");
	this.shape_51.setTransform(55.7,2.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAZBEIAAg/QAAgJgFgGQgGgGgLABQgNgBgHAJQgHAHAAASIAAAyIgPAAIAAiHIAPAAIAAAqIgBAMIABAAQAEgHAIgEQAIgEAIAAQASAAAJAIQAJAJAAAQIAAA/g");
	this.shape_52.setTransform(45.6,0.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_53.setTransform(36.8,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgNQAAgJAGgGQAFgGALgDQgEgBgDgDQgCgEAAgFQAAgFADgCQACgEAHgEQgIgDgFgHQgEgIgBgJQAAgQAKgJQAJgIASAAQAFAAAHACIAhAAIAAAJIgSACIAFAIQABAFAAAGQABAOgKAJQgKAJgPgBIgIgBQgKAGAAAFQABAEADACQADACAIAAIAPAAQAQAAAIAGQAIAHAAAMQABARgNAIQgNAIgWAAQgTAAgLgHgAgZAeQgFAEAAAJQAAAIAGAEQAHAEANAAQAQAAAJgGQAIgFABgJQgBgIgFgDQgEgDgOAAIgPAAQgKAAgGAFgAgRg1QgFAFAAALQAAALAFAFQAHAFAKAAQATAAAAgVQAAgWgTABQgLgBgGAGg");
	this.shape_54.setTransform(24.1,4.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_55.setTransform(13.7,2.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_56.setTransform(5.9,0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_57.setTransform(-1.8,2.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgaAxIAAhfIAMAAIABASIABAAQAFgJAHgGQAHgEAJAAIALAAIgCAOIgKgCQgMAAgGAKQgJAJAAAPIAAAyg");
	this.shape_58.setTransform(-10.4,2.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgFgFgLgBQgKAAgPAIIgEgLQAGgEAJgCQAJgDAGABQARAAAJAHQAIAIAAARIAABAIgLAAIgCgOIgCAAQgHAJgGADQgIADgIAAQgPAAgIgHgAAJABQgQAAgHAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgHQAHgIAAgNIAAgJg");
	this.shape_59.setTransform(-20,2.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgNARAAQASgBALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHABgKAAQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_60.setTransform(-29.7,2.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_61.setTransform(-37,0.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgaAxIAAhfIAMAAIABASIABAAQAFgJAHgGQAHgEAJAAIALAAIgCAOIgKgCQgMAAgGAKQgJAJAAAPIAAAyg");
	this.shape_62.setTransform(-46.9,2.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAJAAASQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_63.setTransform(-56.7,2.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AADAWIAEgWIAFgVIAPAAIACACIgGATIgJAWgAgcAWQAGgYADgTIAQAAIABACIgGATIgJAWg");
	this.shape_64.setTransform(-69.9,-3.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_65.setTransform(-76.6,1.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAJAAASQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_66.setTransform(-85.2,2.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_67.setTransform(-92.9,0.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgfA4QgKgNAAgYQAAgVAKgOQALgNATAAQASAAAKAOIABAAIgBgHIAAgHIAAgnIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgLgNgAgTgHQgHAIAAATQAAARAHAKQAHAJAMAAQAOABAGgJQAHgHAAgTIAAgDQAAgTgHgIQgGgJgOAAQgMAAgHAKg");
	this.shape_68.setTransform(-100.9,0.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_69.setTransform(-108.4,0.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AADAWIgBgCQAGgUAKgVIALAAIgFAWIgEAVgAgaAWIgCgCIAGgUIAJgVIAMAAQgHAVgCAWg");
	this.shape_70.setTransform(-113.8,-3.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_71.setTransform(-127.1,2.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAsgCIARAAIAAgGQAAgLgFgGQgFgFgKgBQgLAAgPAIIgFgLQAIgEAIgCQAJgDAGABQASAAAIAHQAIAIAAARIAABAIgLAAIgDgOIAAAAQgIAJgHADQgHADgJAAQgOAAgIgHgAAJABQgQAAgHAFQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAHgHQAJgIAAgNIAAgJg");
	this.shape_72.setTransform(-137.9,2.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgeA4QgLgNAAgYQAAgVALgOQAKgNATAAQARAAALAOIABAAIAAgHIgBgHIAAgnIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgKgNgAgTgHQgHAIAAATQAAARAHAKQAHAJAMAAQAOABAHgJQAGgHAAgTIAAgDQAAgTgGgIQgIgJgNAAQgMAAgHAKg");
	this.shape_73.setTransform(-153,0.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgNARAAQASgBALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHABgKAAQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_74.setTransform(-163.3,2.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_75.setTransform(-170.6,0.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_76.setTransform(-175.2,0.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAsgCIARAAIAAgGQAAgLgFgGQgFgFgKgBQgLAAgPAIIgFgLQAIgEAIgCQAIgDAHABQASAAAIAHQAIAIAAARIAABAIgLAAIgDgOIgBAAQgGAJgHADQgIADgIAAQgPAAgIgHgAAJABQgPAAgIAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgHQAJgIgBgNIAAgJg");
	this.shape_77.setTransform(-182.7,2.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgWAlQgLgNAAgYQAAgWAMgOQALgNAUABQAHgBAHACQAHACADABIgEANIgLgEIgKgBQgbAAAAAkQAAARAHAKQAHAKAMAAQAMgBANgEIAAAMQgKAFgOAAQgTABgMgNg");
	this.shape_78.setTransform(-191.5,2.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgMQAAgJAGgHQAFgGAKgDQgEgBgCgEQgDgEAAgEQABgFADgCQACgEAHgEQgIgDgFgIQgEgGAAgKQAAgQAJgIQAJgJASAAQAGAAAFABIAiAAIAAAKIgSACIAFAIQACAFAAAHQAAAOgKAIQgKAIgPAAIgIAAQgJAEAAAGQAAAEADACQADACAIgBIAPAAQAQAAAIAIQAIAGAAAMQABARgNAIQgNAIgXAAQgTAAgKgHgAgZAdQgFAFAAAJQAAAIAGAEQAHAEAMAAQARAAAIgFQAJgGAAgKQAAgHgEgDQgFgDgNAAIgQAAQgKAAgGAEgAgRg1QgFAGAAALQAAAJAFAGQAHAFAKAAQATAAAAgUQAAgXgTAAQgLABgGAFg");
	this.shape_79.setTransform(173.4,-22.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgEAIgBQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_80.setTransform(163,-24.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_81.setTransform(155.2,-26.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_82.setTransform(147.9,-24.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgNBCQgIgEgGgIIgBAAIgCANIgLAAIAAiHIAOAAIAAAhIAAAVIAAAAQALgPASAAQATAAAKANQALANAAAVQAAAZgLANQgKANgTAAQgHAAgIgDgAgUgIQgHAIAAASQABAVAGAJQAHAJANAAQAOAAAGgKQAHgKgBgTQABgSgHgIQgHgIgNgBQgOAAgGAJg");
	this.shape_83.setTransform(137.7,-26.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_84.setTransform(122.2,-24.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAUBEIgfgtIgMAJIAAAkIgOAAIAAiHIAOAAIAABHIgBAOIABAAIAMgNIAdggIARAAIgkAoIAnA3g");
	this.shape_85.setTransform(113.5,-26.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_86.setTransform(105.8,-26.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_87.setTransform(101.3,-26.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_88.setTransform(91.1,-25.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgMAVQAHgWACgTIAOAAIACACIgHASIgHAVg");
	this.shape_89.setTransform(86.5,-30.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgEAIgBQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_90.setTransform(79.7,-24.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_91.setTransform(68.7,-24.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAYAwIgSg3IgGgXIAAAAIgFAXIgTA3IgQAAIgbhfIAQAAIAOA2QAFATAAAGIABAAIAEgNIADgMIASg2IAOAAIARA2QAFAPACAKIAAAAIACgKIAThFIAPAAIgbBfg");
	this.shape_92.setTransform(56.3,-24.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_93.setTransform(39.6,-24.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAZBEIAAg+QAAgKgFgGQgGgGgLAAQgNABgHAHQgHAIAAARIAAAzIgPAAIAAiHIAPAAIAAApIgBANIABAAQAEgHAIgEQAIgEAIAAQASAAAJAJQAJAIAAAQIAAA/g");
	this.shape_94.setTransform(29.1,-26.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AggArIAAgOQAHAEAHACQAJACAHAAQAJAAAHgDQAFgEABgHQgBgGgFgEQgEgEgMgGQgOgDgFgEQgGgDgDgFQgCgFAAgGQgBgMAKgHQAKgGAOgBQAQABAPAFIgGAMQgOgFgMAAQgIgBgFAEQgGADAAAGQAAAEACADQACACAEACIAQAHQAQAGAGAGQAHAFgBAKQABAOgKAHQgLAIgPAAQgUAAgKgHg");
	this.shape_95.setTransform(14.7,-24.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAsgCIARAAIAAgGQAAgMgFgFQgFgGgKABQgKAAgQAHIgFgLQAIgEAIgCQAIgDAHAAQARAAAJAIQAIAIAAARIAAA/IgLAAIgCgNIgBAAQgHAJgIADQgHAEgJAAQgOAAgIgIgAAJAAQgQACgHAEQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAIgIQAHgGABgOIAAgJg");
	this.shape_96.setTransform(5.1,-24.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgMAWIAGgWIAEgVIAOAAIABACIgHATIgHAWg");
	this.shape_97.setTransform(-6.8,-19.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_98.setTransform(-11.9,-25.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AghArIAAgOQAHAEAIACQAJACAHAAQAJAAAHgDQAFgEAAgHQAAgGgEgEQgFgEgMgGQgOgDgFgEQgGgDgDgFQgDgFAAgGQAAgMAKgHQAKgGAOgBQAQABAPAFIgGAMQgOgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAPAHQARAGAFAGQAHAFAAAKQAAAOgKAHQgLAIgPAAQgUAAgLgHg");
	this.shape_99.setTransform(-19.2,-24.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_100.setTransform(-29,-24.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgpBGIAAiKIAMAAIACAOIAAAAQAGgIAIgEQAHgDAIAAQATAAAKANQALANAAAXQAAAXgLANQgKANgTAAQgHAAgIgDQgIgEgGgIIgBAAIABAQIAAAogAgUgxQgGAJgBARIAAADQABAUAGAIQAHAJANAAQAMgBAIgJQAGgIAAgTQAAgRgGgKQgIgKgMAAQgNABgHAHg");
	this.shape_101.setTransform(-39.6,-22.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_102.setTransform(-52.4,-26.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgMgFgFQgFgGgLABQgKAAgPAHIgEgLQAGgEAJgCQAJgDAGAAQARAAAJAIQAIAIAAARIAAA/IgLAAIgCgNIgBAAQgHAJgIADQgHAEgJAAQgOAAgIgIgAAJAAQgQACgHAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgIQAHgGABgOIAAgJg");
	this.shape_103.setTransform(-59.9,-24.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgEAIgBQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_104.setTransform(-70.1,-24.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_105.setTransform(-77.9,-26.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgMQAAgJAFgHQAGgGAKgDQgEgBgCgEQgCgEgBgEQAAgFAEgCQACgEAHgEQgIgDgFgIQgFgGABgKQAAgQAJgIQAKgJARAAQAGAAAFABIAiAAIAAAKIgSACIAEAIQADAFAAAHQgBAOgJAIQgKAIgPAAIgIAAQgJAEAAAGQgBAEAEACQADACAIgBIAPAAQAQAAAIAIQAJAGAAAMQgBARgNAIQgMAIgXAAQgSAAgLgHgAgZAdQgFAFAAAJQAAAIAGAEQAHAEAMAAQARAAAIgFQAKgGgBgKQAAgHgEgDQgFgDgNAAIgQAAQgKAAgGAEgAgQg1QgGAGAAALQAAAJAGAGQAFAFALAAQATAAAAgUQAAgXgTAAQgLABgFAFg");
	this.shape_106.setTransform(-85.1,-22.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_107.setTransform(-92.3,-26.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgFQAHgEAJgBIALACIgCANIgKgBQgMAAgGAJQgJAJAAAPIAAAxg");
	this.shape_108.setTransform(-97.6,-24.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_109.setTransform(-107.3,-24.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_110.setTransform(-122.4,-24.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAZBEIAAg+QAAgKgFgGQgGgGgLAAQgNABgHAHQgHAIAAARIAAAzIgPAAIAAiHIAPAAIAAApIgBANIABAAQAEgHAIgEQAIgEAIAAQASAAAJAJQAJAIAAAQIAAA/g");
	this.shape_111.setTransform(-132.9,-26.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_112.setTransform(-141.7,-25.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAIACQAHACAIAAQAJAAAGgDQAHgEgBgHQABgGgGgEQgEgEgNgGQgNgDgGgEQgFgDgDgFQgCgFgBgGQAAgMAKgHQAJgGAPgBQAQABAOAFIgEAMQgPgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAEACIAPAHQASAGAGAGQAFAFABAKQAAAOgLAHQgJAIgRAAQgSAAgMgHg");
	this.shape_113.setTransform(-153.6,-24.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgfA4QgKgNAAgYQAAgWAKgNQALgNATAAQARAAALAOIABAAIAAgHIgBgHIAAgnIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgLgNgAgTgHQgHAIAAATQAAARAHAKQAHAKAMAAQAOgBAHgHQAGgIAAgTIAAgDQAAgTgGgIQgHgJgOAAQgMAAgHAKg");
	this.shape_114.setTransform(-163.7,-26.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAsgCIARAAIAAgGQAAgMgFgFQgFgGgKABQgLAAgPAHIgFgLQAIgEAIgCQAJgDAGAAQASAAAIAIQAIAIAAARIAAA/IgLAAIgDgNIgBAAQgHAJgHADQgHAEgJAAQgOAAgIgIgAAJAAQgPACgIAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgIQAJgGgBgOIAAgJg");
	this.shape_115.setTransform(-174.3,-24.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_116.setTransform(-184,-24.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgFQAHgEAJgBIALACIgCANIgKgBQgMAAgGAJQgJAJAAAPIAAAxg");
	this.shape_117.setTransform(-191.7,-24.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AggArIAAgNQAGADAJACQAHACAIAAQAJAAAGgEQAHgDAAgIQAAgFgGgEQgEgEgNgGQgNgDgGgEQgFgDgDgFQgDgFABgGQAAgMAJgGQAJgIAPAAQAPAAAPAHIgEALQgPgFgMgBQgIAAgGAEQgFADAAAGQAAADACADQACADAEACIAPAIQARAFAHAFQAFAHAAAJQAAANgKAIQgJAHgRAAQgSAAgLgGg");
	this.shape_118.setTransform(148.2,-50.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AggArIAAgNQAGADAJACQAHACAIAAQAJAAAGgEQAHgDAAgIQAAgFgGgEQgEgEgNgGQgNgDgGgEQgFgDgDgFQgDgFABgGQAAgMAJgGQAJgIAPAAQAPAAAPAHIgEALQgPgFgMgBQgIAAgGAEQgFADAAAGQAAADACADQACADAEACIAPAIQARAFAHAFQAFAHAAAJQAAANgKAIQgJAHgRAAQgSAAgLgGg");
	this.shape_119.setTransform(139.7,-50.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATAAQAUAAAMAOQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAKAAARQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_120.setTransform(129.9,-50.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgOBBQgHgDgFgIIgBAAIgEANIgKAAIAAiHIAPAAIAAAiIgBATIABAAQAKgOASAAQATAAALANQAKANAAAVQAAAZgLAMQgLAOgSAAQgHAAgJgEgAgUgIQgGAIAAASQgBAVAIAJQAGAIANAAQANAAAHgJQAGgKAAgTQAAgSgGgHQgHgKgNABQgNAAgHAIg");
	this.shape_121.setTransform(119.3,-52.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AghArIAAgNQAIADAHACQAJACAHAAQAJAAAHgEQAFgDAAgIQAAgFgEgEQgFgEgMgGQgOgDgFgEQgGgDgDgFQgDgFAAgGQAAgMAKgGQAKgIAOAAQAQAAAPAHIgGALQgOgFgMgBQgIAAgFAEQgGADAAAGQAAADACADQACADAFACIAPAIQARAFAFAFQAHAHAAAJQAAANgKAIQgLAHgPAAQgUAAgLgGg");
	this.shape_122.setTransform(104.6,-50.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_123.setTransform(98,-52.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAZBEIAAg/QAAgJgFgGQgGgFgLAAQgNgBgHAJQgHAHAAASIAAAyIgPAAIAAiHIAPAAIAAAqIgBAMIABAAQAEgHAIgEQAIgEAIAAQASAAAJAIQAJAJAAAQIAAA/g");
	this.shape_124.setTransform(90.3,-52.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgOBEIAAhTIgRAAIAAgGIARgGIAAgFQAAgjAdAAQAIAAAJADIgDALQgIgCgHAAQgHAAgFAFQgCAGAAAMIAAAGIAXAAIAAALIgXAAIAABTg");
	this.shape_125.setTransform(77.6,-52.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_126.setTransform(71.7,-52.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASAAALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_127.setTransform(59.8,-50.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_128.setTransform(52.5,-52.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgOBBQgHgDgFgIIgBAAIgEANIgKAAIAAiHIAPAAIAAAiIgBATIABAAQAKgOASAAQATAAALANQAKANAAAVQAAAZgLAMQgLAOgSAAQgHAAgJgEgAgUgIQgGAIAAASQgBAVAIAJQAGAIANAAQANAAAHgJQAGgKABgTQgBgSgGgHQgHgKgNABQgNAAgHAIg");
	this.shape_129.setTransform(45,-52.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_130.setTransform(33.7,-50.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATAAQAUAAAMAOQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAKAAARQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_131.setTransform(22.8,-50.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgaAxIAAhfIAMAAIABASIABAAQAFgKAHgEQAHgGAJAAIALABIgCAOIgKgCQgMAAgGAKQgJAKAAAOIAAAyg");
	this.shape_132.setTransform(14.7,-50.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_133.setTransform(7.2,-51.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgEAIAAQARABAJAIQAJAIAAATIAAA9g");
	this.shape_134.setTransform(-6,-50.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_135.setTransform(-13.9,-52.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_136.setTransform(-24,-51.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASAAALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_137.setTransform(-32.1,-50.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgNQAAgIAFgHQAGgGAKgCQgDgCgDgEQgCgDgBgFQAAgFADgCQAEgEAFgEQgHgDgFgIQgFgHAAgJQAAgQAKgJQAKgIARAAQAGAAAFACIAiAAIAAAJIgSACIAEAIQACAFAAAGQAAAOgKAJQgJAJgPAAIgIgCQgKAGAAAFQAAAEAEACQADACAIAAIAPAAQAQAAAIAGQAJAHAAANQAAAPgOAJQgMAIgXAAQgSAAgLgHgAgYAeQgGAEAAAJQAAAIAHAEQAGAEAMAAQARAAAIgGQAKgFgBgJQABgIgGgDQgEgDgOAAIgPAAQgKAAgFAFgAgQg1QgGAFAAALQAAALAGAFQAGAFAJAAQAUAAAAgVQAAgWgUABQgKgBgFAGg");
	this.shape_138.setTransform(-42.1,-48.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAIgNgBg");
	this.shape_139.setTransform(-56.2,-48.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_140.setTransform(-63,-52.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgOBBQgHgDgFgIIgCAAIgDANIgKAAIAAiHIAPAAIAAAiIgBATIABAAQAKgOASAAQATAAAKANQALANAAAVQAAAZgLAMQgKAOgTAAQgHAAgJgEgAgUgIQgHAIABASQAAAVAGAJQAHAIANAAQAOAAAGgJQAHgKAAgTQAAgSgHgHQgGgKgOABQgOAAgGAIg");
	this.shape_141.setTransform(-70.5,-52.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAsgBIARgBIAAgGQAAgMgFgFQgFgGgKAAQgLAAgPAIIgFgLQAIgEAIgCQAJgCAGgBQASABAIAHQAIAIAAARIAABAIgLAAIgDgOIgBAAQgHAJgHADQgHADgJAAQgOAAgIgHgAAJABQgPAAgIAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgHQAJgIgBgNIAAgJg");
	this.shape_142.setTransform(-81.6,-50.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgNBBQgIgDgGgIIgBAAIgCANIgLAAIAAiHIAOAAIAAAiIAAATIAAAAQALgOASAAQATAAALANQAKANAAAVQAAAZgLAMQgKAOgTAAQgIAAgHgEgAgUgIQgGAIgBASQAAAVAHAJQAHAIANAAQAOAAAGgJQAHgKgBgTQABgSgHgHQgGgKgOABQgNAAgHAIg");
	this.shape_143.setTransform(-91.5,-52.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATAAQAUAAAMAOQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAKAAARQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_144.setTransform(-102.7,-50.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgaAxIAAhfIAMAAIABASIABAAQAFgKAHgEQAHgGAJAAIALABIgCAOIgKgCQgMAAgGAKQgJAKAAAOIAAAyg");
	this.shape_145.setTransform(-110.8,-50.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIAAAAQAGgIAIgDQAHgEAIAAQATAAALANQAKANAAAXQAAAXgLAMQgKAOgTAAQgIAAgHgEQgIgDgGgIIgBAAIABARIAAAngAgUgwQgHAHAAATIAAACQAAAUAHAIQAHAIANAAQAMABAIgLQAGgIAAgSQAAgRgGgKQgIgJgMAAQgNgBgHAJg");
	this.shape_146.setTransform(-120.3,-48.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_147.setTransform(-133,-52.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_148.setTransform(-137.6,-52.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_149.setTransform(-142.1,-52.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAXAwIgRg3IgGgXIAAAAIgFAXIgTA3IgQAAIgbhfIAQAAIAOA2QAFATAAAGIABAAIAEgNIADgMIASg2IAOAAIARA2QAFAPABAKIABAAIACgKIAThFIAOAAIgaBfg");
	this.shape_150.setTransform(-151.4,-50.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgNBBQgIgDgGgIIgBAAIgDANIgKAAIAAiHIAOAAIAAAiIAAATIAAAAQALgOASAAQATAAAKANQALANAAAVQAAAZgLAMQgKAOgTAAQgIAAgHgEgAgUgIQgHAIAAASQABAVAGAJQAHAIANAAQAOAAAGgJQAHgKAAgTQAAgSgHgHQgGgKgOABQgOAAgGAIg");
	this.shape_151.setTransform(-168.2,-52.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATAAQAUAAAMAOQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAKAAARQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_152.setTransform(-179.5,-50.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAbBAIgdg2IgbAAIAAA2IgPAAIAAh/IAkAAQAVAAAMAJQALAJAAATQAAAZgaAHIAjA6gAgdgBIAVAAQAOAAAHgGQAHgGAAgNQAAgMgHgGQgIgGgOAAIgUAAg");
	this.shape_153.setTransform(-189.7,-52.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance = new lib.gfcContentBg("synched",0);
	this.instance.alpha = 0.852;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-92,425.1,184.1);


(lib.mvContent4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAJQgDgDAAgGQAAgEACgDQADgEAEAAQAEAAADAEQADADAAAEQAAAFgDAEQgDADgEAAQgEgBgCgCg");
	this.shape.setTransform(120.9,32.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAIACQAHACAIAAQAJAAAHgDQAFgEAAgIQAAgFgEgEQgFgEgMgGQgOgDgGgEQgFgDgDgFQgCgEgBgHQAAgMAKgHQAJgGAPgBQAPABAQAFIgGAMQgOgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAPAHQARAGAFAGQAHAFAAAKQgBAOgJAHQgLAIgPgBQgUABgLgHg");
	this.shape_1.setTransform(114.3,28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_2.setTransform(107.7,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_3.setTransform(103.1,26.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_4.setTransform(98.6,26.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBEIghgtIgKAJIAAAkIgPAAIAAiHIAPAAIAABHIgBAOIABAAIALgNIAdgfIASAAIgmAnIAoA3g");
	this.shape_5.setTransform(92.3,26.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAIACQAHACAIAAQAJAAAGgDQAHgEgBgIQAAgFgEgEQgFgEgNgGQgNgDgGgEQgFgDgDgFQgCgEgBgHQAAgMAKgHQAJgGAPgBQAPABAPAFIgEAMQgPgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAOAHQASAGAGAGQAFAFABAKQgBAOgJAHQgKAIgRgBQgSABgMgHg");
	this.shape_6.setTransform(82.7,28.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgMQAAgJAFgHQAGgGAKgCQgEgCgCgEQgCgEgBgEQAAgFAEgCQACgEAHgEQgIgDgFgIQgFgGABgKQAAgQAJgIQAKgJARAAQAGAAAFACIAiAAIAAAJIgSACIAEAIQADAFAAAGQgBAOgJAJQgKAJgPAAIgIgBQgJAEAAAGQgBAEAEACQADABAIABIAPAAQAQgBAIAIQAJAGAAANQgBAPgNAJQgMAIgXAAQgSAAgLgHgAgYAeQgGAEAAAJQAAAIAGAEQAHAEAMAAQARAAAIgFQAKgGgBgKQAAgHgEgDQgFgDgNAAIgQAAQgKAAgFAFgAgQg1QgGAGAAAKQAAAKAGAGQAFAFALAAQATAAAAgVQAAgVgTgBQgLABgFAFg");
	this.shape_7.setTransform(68.8,30.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_8.setTransform(58.4,28.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_9.setTransform(50.6,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_10.setTransform(45.1,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_11.setTransform(39.7,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgFAJgBIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_12.setTransform(34.4,28.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXAwIgRg3IgGgXIAAAAIgFAXIgSA3IgRAAIgbhfIAQAAIAOA2QAFATAAAGIABAAIADgNIAEgMIASg2IAOAAIARA2QAFAPABAKIABAAIACgKIAThFIAOAAIgaBfg");
	this.shape_13.setTransform(23.1,28.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgFAJgBIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_14.setTransform(8.5,28.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_15.setTransform(-1.3,28.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_16.setTransform(-12.1,28.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIAAAAQAGgIAIgEQAHgDAIAAQATAAALANQAKANAAAXQAAAWgLANQgLAOgSAAQgIAAgHgDQgIgEgGgIIgBAAIABAQIAAAogAgTgxQgIAJAAASIAAACQAAAUAIAIQAGAJANAAQANAAAGgLQAIgHgBgTQABgSgIgJQgGgKgNAAQgNABgGAHg");
	this.shape_17.setTransform(-22.7,30.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeA4QgLgNAAgYQAAgWALgNQAKgNATAAQASAAAKAOIABAAIgBgHIAAgGIAAgoIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgKgNgAgTgHQgHAIAAASQAAATAHAJQAHAKAMAAQAOgBAHgHQAGgIAAgTIAAgDQAAgTgGgIQgIgJgNAAQgMAAgHAKg");
	this.shape_18.setTransform(-38.9,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_19.setTransform(-49.6,28.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgBIAQgBIAAgGQAAgMgFgFQgFgGgLABQgKgBgPAIIgEgLQAGgEAJgCQAJgDAGAAQARAAAJAIQAIAIAAARIAAA/IgLAAIgCgNIgCAAQgHAJgGADQgIADgIAAQgPABgIgIgAAJAAQgQACgHAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgIQAHgGAAgOIAAgJg");
	this.shape_20.setTransform(-60.5,28.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAHACQAJACAHAAQAJAAAHgDQAFgEAAgIQAAgFgEgEQgFgEgMgGQgOgDgFgEQgGgDgDgFQgDgEAAgHQAAgMAKgHQAKgGAOgBQAQABAPAFIgGAMQgOgFgMAAQgIgBgFAEQgGADAAAGQAAAEACADQACACAFACIAPAHQARAGAFAGQAHAFgBAKQABAOgKAHQgLAIgPgBQgUABgLgHg");
	this.shape_21.setTransform(-74,28.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAHACQAJACAHAAQAJAAAHgDQAFgEAAgIQAAgFgEgEQgFgEgMgGQgOgDgFgEQgGgDgDgFQgDgEAAgHQAAgMAKgHQAKgGAOgBQAQABAPAFIgGAMQgOgFgMAAQgIgBgFAEQgGADAAAGQAAAEACADQACACAFACIAPAHQARAGAFAGQAHAFgBAKQABAOgKAHQgLAIgPgBQgUABgLgHg");
	this.shape_22.setTransform(-82.6,28.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_23.setTransform(-91.9,28.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_24.setTransform(-102.4,28.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_25.setTransform(-110.3,26.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_26.setTransform(-118.1,28.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOBEIAAhTIgRAAIAAgGIARgGIAAgFQAAgjAdAAQAHAAAKADIgDALQgIgCgHAAQgHAAgEAFQgDAGAAAMIAAAGIAXAAIAAALIgXAAIAABTg");
	this.shape_27.setTransform(-126,26.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_28.setTransform(-132.8,27.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAZBEIAAg+QAAgKgFgGQgGgFgLgBQgNABgHAHQgHAIAAARIAAAzIgPAAIAAiHIAPAAIAAApIgBANIABAAQAEgHAIgEQAIgEAIAAQASAAAJAJQAJAIAAAQIAAA/g");
	this.shape_29.setTransform(-141.4,26.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgMQAAgJAGgHQAFgGALgCQgEgCgDgEQgCgEAAgEQAAgFADgCQACgEAHgEQgIgDgFgIQgEgGgBgKQAAgQAKgIQAJgJASAAQAFAAAHACIAhAAIAAAJIgSACIAFAIQABAFAAAGQABAOgKAJQgKAJgPAAIgIgBQgKAEAAAGQABAEADACQADABAIABIAPAAQAQgBAIAIQAIAGAAANQABAPgNAJQgNAIgWAAQgTAAgLgHgAgZAeQgFAEAAAJQAAAIAGAEQAHAEANAAQAQAAAJgFQAIgGABgKQgBgHgFgDQgEgDgOAAIgPAAQgKAAgGAFgAgRg1QgFAGAAAKQAAAKAFAGQAHAFAJAAQAUAAAAgVQAAgVgUgBQgKABgGAFg");
	this.shape_30.setTransform(-151.9,30.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_31.setTransform(-162.3,28.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_32.setTransform(-173.2,28.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAZBEIAAg+QAAgKgFgGQgGgFgLgBQgNABgHAHQgHAIAAARIAAAzIgPAAIAAiHIAPAAIAAApIgBANIABAAQAEgHAIgEQAIgEAIAAQASAAAJAJQAJAIAAAQIAAA/g");
	this.shape_33.setTransform(-184.1,26.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_34.setTransform(-192.9,27.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgOBEIAAhTIgSAAIAAgGIASgGIAAgFQAAgjAdAAQAIAAAJADIgDALQgIgCgHAAQgHAAgFAFQgCAGAAAMIAAAGIAXAAIAAALIgXAAIAABTg");
	this.shape_35.setTransform(155.4,0.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAJAAASQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_36.setTransform(146.4,2.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAVBEIghguIgKAKIAAAkIgPAAIAAiHIAPAAIAABHIgBAPIABAAIALgPIAdgeIASAAIgmAmIAoA4g");
	this.shape_37.setTransform(132.4,0.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWAlQgLgNAAgYQAAgWAMgOQALgNAUABQAHgBAHACQAHACADABIgEANIgLgEIgKgBQgbAAAAAkQAAARAHAKQAHAKAMAAQAMgBANgEIAAAMQgKAFgOAAQgTABgMgNg");
	this.shape_38.setTransform(122.9,2.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgFgFgLgBQgKAAgPAIIgEgLQAGgEAJgCQAIgDAHABQARAAAJAHQAIAIAAARIAABAIgLAAIgDgOIgBAAQgHAJgGADQgIADgIAAQgPAAgIgHgAAJABQgPAAgIAFQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAHgHQAIgIAAgNIAAgJg");
	this.shape_39.setTransform(113.1,2.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_40.setTransform(106.1,0.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAsgCIARAAIAAgGQAAgLgFgGQgFgFgKgBQgLAAgPAIIgFgLQAIgEAIgCQAJgDAGABQASAAAIAHQAIAIAAARIAABAIgLAAIgDgOIgBAAQgHAJgHADQgHADgJAAQgOAAgIgHgAAJABQgPAAgIAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgHQAJgIgBgNIAAgJg");
	this.shape_41.setTransform(93.9,2.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AghArIAAgNQAIADAIACQAHACAIAAQAJAAAGgEQAHgDgBgHQABgGgGgEQgEgEgNgFQgNgEgGgDQgFgEgDgFQgCgEgBgHQAAgMAKgGQAJgIAPABQAQgBAOAHIgEAMQgPgHgMAAQgIABgGADQgFADAAAGQAAADACADQACADAEADIAPAHQASAFAGAFQAFAHABAJQAAANgLAIQgJAHgRAAQgSAAgMgGg");
	this.shape_42.setTransform(80.4,2.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAIgNgBg");
	this.shape_43.setTransform(71.5,4.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgNARAAQASgBALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHABgKAAQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_44.setTransform(62.3,2.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHAwIglhfIAQAAIAVA4QAHAUAAAGIAAAAIAGgUIAXg+IAPAAIgkBfg");
	this.shape_45.setTransform(52.8,2.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_46.setTransform(42.8,2.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAJAAASQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_47.setTransform(31.8,2.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWAlQgLgNAAgYQAAgWAMgOQALgNAUABQAHgBAHACQAHACADABIgEANIgLgEIgKgBQgbAAAAAkQAAARAHAKQAHAKAMAAQAMgBANgEIAAAMQgKAFgOAAQgTABgMgNg");
	this.shape_48.setTransform(22.3,2.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AghArIAAgNQAHADAJACQAHACAIAAQAJAAAHgEQAFgDAAgHQAAgGgEgEQgFgEgMgFQgOgEgGgDQgFgEgDgFQgCgEgBgHQAAgMAKgGQAJgIAPABQAPgBAQAHIgGAMQgOgHgMAAQgIABgGADQgFADAAAGQAAADACADQACADAFADIAPAHQARAFAFAFQAHAHAAAJQgBANgJAIQgLAHgPAAQgUAAgLgGg");
	this.shape_49.setTransform(9,2.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_50.setTransform(2.4,0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAZBEIAAg/QAAgJgFgGQgGgGgLABQgNgBgHAJQgHAHAAASIAAAyIgPAAIAAiHIAPAAIAAAqIgBAMIABAAQAEgHAIgEQAIgEAIAAQASAAAJAIQAJAJAAAQIAAA/g");
	this.shape_51.setTransform(-5.3,0.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgGBAIAAhxIgpAAIAAgOIBfAAIAAAOIgpAAIAABxg");
	this.shape_52.setTransform(-15.9,0.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgGAJQgDgDAAgGQAAgEADgDQACgDAEAAQAEAAADADQADADAAAEQAAAGgDACQgDADgEABQgEAAgCgDg");
	this.shape_53.setTransform(-27.8,6.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgNQAAgJAFgGQAGgGAKgDQgEgBgCgDQgCgEgBgFQAAgFAEgCQACgEAHgEQgIgDgFgHQgFgIABgJQAAgQAJgJQAKgIARAAQAGAAAFACIAiAAIAAAJIgSACIAEAIQADAFAAAGQgBAOgJAJQgKAJgPgBIgIgBQgJAGAAAFQgBAEAEACQADACAIAAIAPAAQAQAAAIAGQAJAHAAAMQgBARgNAIQgMAIgXAAQgSAAgLgHgAgZAeQgFAEAAAJQAAAIAGAEQAHAEAMAAQARAAAIgGQAKgFgBgJQAAgIgEgDQgFgDgNAAIgQAAQgKAAgGAFgAgQg1QgGAFAAALQAAALAGAFQAFAFALAAQATAAAAgVQAAgWgTABQgLgBgFAGg");
	this.shape_54.setTransform(-35.2,4.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_55.setTransform(-45.5,2.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAsgCIARAAIAAgGQAAgLgFgGQgFgFgKgBQgLAAgPAIIgFgLQAIgEAIgCQAJgDAGABQASAAAIAHQAIAIAAARIAABAIgLAAIgDgOIgBAAQgHAJgHADQgHADgJAAQgOAAgIgHgAAJABQgPAAgIAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgHQAJgIgBgNIAAgJg");
	this.shape_56.setTransform(-56.4,2.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_57.setTransform(-63.4,0.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AghArIAAgNQAIADAIACQAHACAIAAQAJAAAGgEQAHgDgBgHQAAgGgEgEQgFgEgNgFQgNgEgGgDQgFgEgDgFQgCgEgBgHQAAgMAKgGQAJgIAPABQAPgBAPAHIgEAMQgPgHgMAAQgIABgGADQgFADAAAGQAAADACADQACADAFADIAOAHQASAFAFAFQAGAHABAJQgBANgJAIQgKAHgRAAQgSAAgMgGg");
	this.shape_58.setTransform(-69.8,2.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgfA4QgKgNAAgYQAAgVAKgOQALgNATAAQASAAAKAOIABAAIgBgHIAAgHIAAgnIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgLgNgAgTgHQgHAIAAATQAAARAHAKQAHAJAMAAQAOABAGgJQAHgHAAgTIAAgDQAAgTgHgIQgGgJgOAAQgMAAgHAKg");
	this.shape_59.setTransform(-84.6,0.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_60.setTransform(-95.3,2.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAsgCIARAAIAAgGQAAgLgFgGQgFgFgLgBQgJAAgQAIIgFgLQAIgEAIgCQAIgDAHABQASAAAIAHQAIAIAAARIAABAIgLAAIgDgOIgBAAQgGAJgHADQgIADgIAAQgPAAgIgHgAAJABQgPAAgIAFQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAHgHQAJgIgBgNIAAgJg");
	this.shape_61.setTransform(-106.1,2.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgMAVIAGgVIAEgVIAOAAIABADIgHASIgHAVg");
	this.shape_62.setTransform(-118,7.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgNARAAQASgBALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHABgKAAQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_63.setTransform(-124.9,2.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgaAxIAAhfIAMAAIABASIABAAQAFgJAHgGQAHgEAJAAIALAAIgCAOIgKgCQgMAAgGAKQgJAJAAAPIAAAyg");
	this.shape_64.setTransform(-132.6,2.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_65.setTransform(-142.4,2.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_66.setTransform(-151.1,1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgWAlQgLgNAAgYQAAgWAMgOQALgNAUABQAHgBAHACQAHACADABIgEANIgLgEIgKgBQgbAAAAAkQAAARAHAKQAHAKAMAAQAMgBANgEIAAAMQgKAFgOAAQgTABgMgNg");
	this.shape_67.setTransform(-158.3,2.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_68.setTransform(-168.3,2.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgaAxIAAhfIAMAAIABASIABAAQAFgJAHgGQAHgEAJAAIALAAIgCAOIgKgCQgMAAgGAKQgJAJAAAPIAAAyg");
	this.shape_69.setTransform(-176.8,2.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_70.setTransform(-184.3,1.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AggArIAAgNQAGADAIACQAIACAIAAQAJAAAGgEQAHgDAAgHQAAgGgGgEQgEgEgNgFQgNgEgGgDQgFgEgDgFQgDgEABgHQAAgMAJgGQAKgIAOABQAPgBAPAHIgEAMQgPgHgMAAQgIABgFADQgGADAAAGQAAADACADQACADAEADIAPAHQARAFAHAFQAFAHAAAJQAAANgKAIQgKAHgQAAQgSAAgLgGg");
	this.shape_71.setTransform(-191.6,2.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_72.setTransform(116.3,-24.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgWAkQgLgNAAgXQAAgWAMgNQALgOAUAAIAOACQAHABADACIgEANIgLgEIgKAAQgbAAAAAjQAAARAHAKQAHAJAMAAQAMAAANgEIAAAMQgKAGgOAAQgTAAgMgOg");
	this.shape_73.setTransform(107.2,-24.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgEAIgBQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_74.setTransform(97.3,-24.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_75.setTransform(86.7,-24.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_76.setTransform(78.4,-25.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgEAIgBQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_77.setTransform(69.9,-24.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_78.setTransform(59.3,-24.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AghArIAAgOQAHAEAIACQAJACAHAAQAJAAAHgDQAFgEAAgHQAAgGgEgEQgFgEgMgGQgOgDgFgEQgGgDgDgFQgDgFAAgGQAAgMAKgHQAKgGAOgBQAQABAPAFIgGAMQgOgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAPAHQARAGAFAGQAHAFAAAKQAAAOgKAHQgLAIgPAAQgUAAgLgHg");
	this.shape_79.setTransform(50.1,-24.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgeA4QgLgNAAgYQAAgWALgNQAKgNATAAQASAAAKAOIABAAIgBgHIAAgHIAAgnIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgKgNgAgTgHQgHAIAAATQAAARAHAKQAHAKAMAAQAOgBAHgHQAGgIAAgTIAAgDQAAgTgGgIQgIgJgNAAQgMAAgHAKg");
	this.shape_80.setTransform(35.3,-26.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgMgFgFQgFgGgLABQgJAAgQAHIgEgLQAGgEAJgCQAIgDAHAAQARAAAJAIQAIAIAAARIAAA/IgLAAIgCgNIgBAAQgHAJgIADQgHAEgJAAQgOAAgIgIgAAJAAQgQACgHAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgIQAHgGABgOIAAgJg");
	this.shape_81.setTransform(24.8,-24.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgOBCQgHgEgFgIIgBAAIgEANIgKAAIAAiHIAPAAIAAAhIgBAVIABAAQAKgPASAAQATAAALANQAKANAAAVQAAAZgLANQgLANgSAAQgHAAgJgDgAgUgIQgGAIAAASQgBAVAIAJQAGAJANAAQANAAAHgKQAGgKAAgTQAAgSgGgIQgHgIgNgBQgNAAgHAJg");
	this.shape_82.setTransform(14.9,-26.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgMAWIAGgWIAEgVIAOAAIABACIgHATIgHAWg");
	this.shape_83.setTransform(1.9,-19.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AggArIAAgOQAHAEAHACQAJACAHAAQAJAAAHgDQAFgEABgHQgBgGgFgEQgEgEgMgGQgOgDgFgEQgGgDgDgFQgCgFAAgGQgBgMAKgHQAKgGAOgBQAQABAPAFIgGAMQgOgFgMAAQgIgBgFAEQgGADAAAGQAAAEACADQACACAEACIAQAHQAQAGAGAGQAHAFgBAKQABAOgLAHQgKAIgPAAQgUAAgKgHg");
	this.shape_84.setTransform(-4.2,-24.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_85.setTransform(-14,-24.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgpBGIAAiKIAMAAIACAOIABAAQAFgIAHgEQAIgDAIAAQATAAAKANQALANAAAXQAAAXgLANQgKANgTAAQgHAAgJgDQgHgEgFgIIgCAAIACAQIAAAogAgUgxQgGAJAAARIAAADQAAAUAGAIQAHAJANAAQAMgBAIgJQAGgIABgTQgBgRgGgKQgIgKgMAAQgNABgHAHg");
	this.shape_86.setTransform(-24.6,-22.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAQgHAAgGgBg");
	this.shape_87.setTransform(-34.9,-22.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_88.setTransform(-42.7,-25.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgOBEIAAhTIgSAAIAAgGIASgGIAAgFQAAgjAdAAQAIAAAJADIgDALQgIgCgHAAQgHAAgFAFQgCAGAAAMIAAAGIAXAAIAAALIgXAAIAABTg");
	this.shape_89.setTransform(-52.9,-26.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_90.setTransform(-61.9,-24.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_91.setTransform(-74.3,-26.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_92.setTransform(-78.8,-26.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_93.setTransform(-86.6,-24.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgOBEIAAhTIgSAAIAAgGIASgGIAAgFQAAgjAdAAQAIAAAKADIgEALQgJgCgFAAQgIAAgFAFQgCAGAAAMIAAAGIAXAAIAAALIgXAAIAABTg");
	this.shape_94.setTransform(-94.6,-26.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AghArIAAgOQAHAEAIACQAJACAHAAQAJAAAHgDQAFgEAAgHQAAgGgEgEQgFgEgMgGQgOgDgFgEQgGgDgDgFQgDgFAAgGQAAgMAKgHQAKgGAOgBQAQABAPAFIgGAMQgOgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAPAHQARAGAFAGQAHAFAAAKQAAAOgKAHQgLAIgPAAQgUAAgLgHg");
	this.shape_95.setTransform(-107,-24.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_96.setTransform(-113.6,-26.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_97.setTransform(-123.8,-25.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AggArIAAgOQAHAEAHACQAJACAHAAQAJAAAHgDQAFgEABgHQgBgGgFgEQgEgEgMgGQgOgDgFgEQgGgDgDgFQgCgFAAgGQgBgMAKgHQAKgGAOgBQAQABAPAFIgGAMQgOgFgMAAQgIgBgFAEQgGADAAAGQAAAEACADQACACAEACIAQAHQAQAGAGAGQAHAFgBAKQABAOgLAHQgKAIgPAAQgUAAgKgHg");
	this.shape_98.setTransform(-131.1,-24.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_99.setTransform(-140.9,-24.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgpBGIAAiKIAMAAIACAOIABAAQAFgIAHgEQAIgDAIAAQATAAAKANQALANAAAXQAAAXgLANQgKANgTAAQgHAAgJgDQgHgEgFgIIgCAAIACAQIAAAogAgUgxQgGAJAAARIAAADQAAAUAGAIQAHAJANAAQAMgBAIgJQAGgIABgTQgBgRgGgKQgIgKgMAAQgNABgHAHg");
	this.shape_100.setTransform(-151.5,-22.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAIACQAHACAIAAQAJAAAGgDQAHgEgBgHQAAgGgEgEQgFgEgNgGQgNgDgGgEQgFgDgDgFQgCgFgBgGQAAgMAKgHQAJgGAPgBQAPABAPAFIgEAMQgPgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAOAHQASAGAFAGQAGAFABAKQgBAOgJAHQgKAIgRAAQgSAAgMgHg");
	this.shape_101.setTransform(-166.1,-24.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_102.setTransform(-172.8,-26.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAZBEIAAg+QAAgKgFgGQgGgGgLAAQgNABgHAHQgHAIAAARIAAAzIgPAAIAAiHIAPAAIAAApIgBANIABAAQAEgHAIgEQAIgEAIAAQASAAAJAJQAJAIAAAQIAAA/g");
	this.shape_103.setTransform(-180.5,-26.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgGBAIAAhxIgpAAIAAgOIBfAAIAAAOIgpAAIAABxg");
	this.shape_104.setTransform(-191,-25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance = new lib.gfcContentBg("synched",0);
	this.instance.alpha = 0.852;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-92,425.1,184.1);


(lib.mvContent3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAJQgDgDAAgGQAAgEACgDQADgEAEAAQAEAAADAEQADADAAAEQAAAFgDAEQgDADgEAAQgEgBgCgCg");
	this.shape.setTransform(126.3,32.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgFAJgBIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_1.setTransform(120.9,28.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_2.setTransform(111.6,28.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAIgNgBg");
	this.shape_3.setTransform(102,30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_4.setTransform(92.4,28.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_5.setTransform(84.7,26.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIAAAAQAGgIAIgEQAHgDAIAAQATAAALANQAKANAAAXQAAAWgLANQgKAOgTAAQgIAAgHgDQgIgEgGgIIgBAAIABAQIAAAogAgTgxQgIAJAAASIAAACQAAAUAIAIQAGAJANAAQAMAAAIgLQAGgHAAgTQAAgSgGgJQgIgKgMAAQgNABgGAHg");
	this.shape_6.setTransform(77.3,30.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA2AwIAAg8QAAgLgFgHQgFgFgLAAQgNAAgHAIQgGAHAAAQIAAA0IgNAAIAAg8QAAgLgFgHQgFgFgKAAQgOAAgGAIQgHAIAAATIAAAwIgOAAIAAheIAMAAIACANIABAAQAEgHAHgDQAIgFAJAAQAXAAAFARIAAAAQAFgIAIgEQAIgFAKAAQARAAAIAJQAIAIAAASIAAA9g");
	this.shape_7.setTransform(63.2,28.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_8.setTransform(49.8,28.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_9.setTransform(37.8,26.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAsgBIARgBIAAgGQAAgMgFgFQgFgGgKABQgKgBgQAIIgFgLQAIgEAIgCQAIgDAHAAQASAAAIAIQAIAIAAARIAAA/IgLAAIgDgNIgBAAQgGAJgHADQgIADgIAAQgPABgIgIgAAJAAQgPACgIAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgIQAJgGgBgOIAAgJg");
	this.shape_10.setTransform(30.2,28.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_11.setTransform(23.2,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_12.setTransform(17.7,27.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_13.setTransform(9.2,28.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_14.setTransform(-1.4,28.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_15.setTransform(-9.7,27.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_16.setTransform(-18.2,28.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIAAAAQAGgIAIgEQAHgDAIAAQATAAAKANQALANAAAXQAAAWgLANQgKAOgTAAQgHAAgIgDQgIgEgGgIIgBAAIABAQIAAAogAgUgxQgGAJgBASIAAACQABAUAGAIQAHAJANAAQAMAAAIgLQAGgHAAgTQAAgSgGgJQgIgKgMAAQgNABgHAHg");
	this.shape_17.setTransform(-28.8,30.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAsgBIARgBIAAgGQAAgMgFgFQgFgGgKABQgLgBgPAIIgFgLQAIgEAIgCQAIgDAHAAQASAAAIAIQAIAIAAARIAAA/IgLAAIgDgNIgBAAQgGAJgHADQgIADgIAAQgPABgIgIgAAJAAQgPACgIAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgIQAJgGgBgOIAAgJg");
	this.shape_18.setTransform(-44.6,28.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgFAJgBIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_19.setTransform(-56.9,28.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_20.setTransform(-66.7,28.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggArIAAgOQAGAEAIACQAIACAIAAQAJAAAGgDQAHgEAAgIQAAgFgGgEQgEgEgNgGQgNgDgGgEQgFgDgDgFQgDgEABgHQAAgMAJgHQAKgGAOgBQAPABAPAFIgEAMQgPgFgMAAQgIgBgFAEQgGADAAAGQAAAEACADQACACAEACIAPAHQARAGAHAGQAFAFAAAKQAAAOgKAHQgKAIgQgBQgSABgLgHg");
	this.shape_21.setTransform(-80.9,28.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgFAJgBIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_22.setTransform(-88.3,28.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_23.setTransform(-97.6,28.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAXAwIgRg3IgGgXIAAAAIgFAXIgSA3IgRAAIgbhfIAQAAIAOA2QAFATAAAGIABAAIADgNIAEgMIASg2IAOAAIARA2QAFAPABAKIABAAIACgKIAThFIAOAAIgaBfg");
	this.shape_24.setTransform(-109.6,28.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_25.setTransform(-121.7,28.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_26.setTransform(-129.4,26.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_27.setTransform(-134,26.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_28.setTransform(-141.7,28.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgOBEIAAhTIgSAAIAAgGIASgGIAAgFQAAgjAdAAQAIAAAJADIgDALQgIgCgHAAQgIAAgEAFQgCAGAAAMIAAAGIAXAAIAAALIgXAAIAABTg");
	this.shape_29.setTransform(-149.6,26.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgFAJgBIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_30.setTransform(-160.8,28.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_31.setTransform(-170.6,28.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_32.setTransform(-181.5,28.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAIgNgBg");
	this.shape_33.setTransform(-191.5,30.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgNARAAQASgBALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHABgKAAQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_34.setTransform(190.6,2.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_35.setTransform(182.3,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgFgFgLgBQgKAAgPAIIgEgLQAGgEAJgCQAIgDAHABQARAAAJAHQAIAIAAARIAABAIgLAAIgDgOIgBAAQgHAJgGADQgIADgIAAQgPAAgIgHgAAJABQgPAAgIAFQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAHgHQAIgIAAgNIAAgJg");
	this.shape_36.setTransform(173.9,2.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_37.setTransform(163.7,2.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgNARAAQASgBALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHABgKAAQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_38.setTransform(153.2,2.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_39.setTransform(145.8,0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_40.setTransform(141.3,0.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAsgCIARAAIAAgGQAAgLgFgGQgFgFgLgBQgJAAgQAIIgFgLQAIgEAIgCQAIgDAHABQASAAAIAHQAIAIAAARIAABAIgLAAIgDgOIgBAAQgGAJgHADQgIADgIAAQgPAAgIgHgAAJABQgPAAgIAFQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAHgHQAJgIgBgNIAAgJg");
	this.shape_41.setTransform(133.7,2.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgfA4QgKgNAAgYQAAgVAKgOQALgNATAAQASAAAKAOIABAAIAAgHIgBgHIAAgnIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgLgNgAgTgHQgHAIAAATQAAARAHAKQAHAJAMAAQAOABAGgJQAHgHAAgTIAAgDQAAgTgHgIQgGgJgOAAQgMAAgHAKg");
	this.shape_42.setTransform(118.6,0.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_43.setTransform(111.1,0.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_44.setTransform(103.3,2.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAJAAASQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_45.setTransform(92.4,2.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgWAlQgLgNAAgYQAAgWAMgOQALgNAUABQAHgBAHACQAHACADABIgEANIgLgEIgKgBQgbAAAAAkQAAARAHAKQAHAKAMAAQAMgBANgEIAAAMQgKAFgOAAQgTABgMgNg");
	this.shape_46.setTransform(82.9,2.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgNQAAgJAFgGQAGgGALgDQgFgBgCgDQgDgEABgFQAAgFACgCQAEgEAFgEQgHgDgFgHQgEgIgBgJQAAgQAKgJQAJgIASAAQAFAAAHACIAhAAIAAAJIgSACIAFAIQABAFAAAGQABAOgLAJQgJAJgPgBIgIgBQgKAGAAAFQABAEADACQADACAIAAIAPAAQAQAAAIAGQAJAHgBAMQAAARgMAIQgNAIgWAAQgUAAgKgHgAgYAeQgGAEAAAJQAAAIAHAEQAGAEANAAQAQAAAJgGQAIgFABgJQAAgIgGgDQgEgDgOAAIgPAAQgKAAgFAFgAgRg1QgFAFAAALQAAALAFAFQAGAFAKAAQAUAAAAgVQAAgWgUABQgKgBgGAGg");
	this.shape_47.setTransform(68.8,4.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_48.setTransform(58.5,2.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_49.setTransform(50.6,0.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_50.setTransform(45.1,1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_51.setTransform(36.6,2.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_52.setTransform(25.5,2.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAZBEIAAg/QAAgJgFgGQgGgGgLABQgNgBgHAJQgHAHAAASIAAAyIgPAAIAAiHIAPAAIAAAqIgBAMIABAAQAEgHAIgEQAIgEAIAAQASAAAJAIQAJAJAAAQIAAA/g");
	this.shape_53.setTransform(14.6,0.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAUBEIggguIgLAKIAAAkIgOAAIAAiHIAOAAIAABHIgBAPIABAAIAMgPIAdgeIASAAIglAmIAnA4g");
	this.shape_54.setTransform(0.4,0.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgWAlQgLgNAAgYQAAgWAMgOQALgNAUABQAHgBAHACQAHACADABIgEANIgLgEIgKgBQgbAAAAAkQAAARAHAKQAHAKAMAAQAMgBANgEIAAAMQgKAFgOAAQgTABgMgNg");
	this.shape_55.setTransform(-9.1,2.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_56.setTransform(-19.1,2.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgfA4QgKgNAAgYQAAgVAKgOQALgNATAAQASAAAKAOIABAAIAAgHIgBgHIAAgnIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgLgNgAgTgHQgHAIAAATQAAARAHAKQAHAJAMAAQAOABAGgJQAHgHAAgTIAAgDQAAgTgHgIQgGgJgOAAQgMAAgHAKg");
	this.shape_57.setTransform(-30.3,0.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_58.setTransform(-43.5,1.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_59.setTransform(-52.1,2.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAJAAASQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_60.setTransform(-63,2.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgOBBQgHgDgFgHIgCAAIgDAMIgKAAIAAiHIAPAAIAAAiIgBATIABAAQAKgOASAAQATAAAKANQALANAAAWQAAAYgLAMQgKAOgTAAQgHAAgJgEgAgUgIQgHAIABATQAAAUAGAJQAHAIANAAQAOAAAGgJQAHgKAAgSQAAgTgHgHQgGgKgOABQgOAAgGAIg");
	this.shape_61.setTransform(-73.6,0.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAsgCIARAAIAAgGQAAgLgFgGQgFgFgKgBQgLAAgPAIIgFgLQAIgEAIgCQAJgDAGABQASAAAIAHQAIAIAAARIAABAIgLAAIgDgOIgBAAQgHAJgHADQgHADgJAAQgOAAgIgHgAAJABQgPAAgIAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgHQAJgIgBgNIAAgJg");
	this.shape_62.setTransform(-84.7,2.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgNQAAgJAFgGQAGgGALgDQgFgBgCgDQgDgEABgFQAAgFACgCQAEgEAFgEQgHgDgFgHQgEgIgBgJQAAgQAKgJQAJgIASAAQAFAAAHACIAhAAIAAAJIgSACIAEAIQACAFAAAGQABAOgLAJQgJAJgPgBIgIgBQgKAGAAAFQABAEADACQADACAIAAIAPAAQAQAAAIAGQAJAHgBAMQAAARgMAIQgNAIgWAAQgUAAgKgHgAgYAeQgGAEAAAJQAAAIAHAEQAGAEANAAQAQAAAJgGQAIgFABgJQAAgIgGgDQgEgDgOAAIgPAAQgKAAgFAFgAgRg1QgFAFAAALQAAALAFAFQAGAFAKAAQAUAAAAgVQAAgWgUABQgKgBgGAGg");
	this.shape_63.setTransform(-99,4.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_64.setTransform(-109.4,2.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_65.setTransform(-117.2,0.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAUBEIggguIgLAKIAAAkIgOAAIAAiHIAOAAIAABHIgBAPIABAAIAMgPIAdgeIASAAIgmAmIAoA4g");
	this.shape_66.setTransform(-123.5,0.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_67.setTransform(-131.2,0.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAsgCIARAAIAAgGQAAgLgFgGQgFgFgKgBQgLAAgPAIIgFgLQAIgEAIgCQAJgDAGABQASAAAIAHQAIAIAAARIAABAIgLAAIgDgOIgBAAQgHAJgHADQgHADgJAAQgOAAgIgHgAAJABQgPAAgIAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgHQAJgIgBgNIAAgJg");
	this.shape_68.setTransform(-138.7,2.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_69.setTransform(-146.7,1.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgMAVIAGgVIAEgVIAOAAIABADIgHASIgHAVg");
	this.shape_70.setTransform(-157,7.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgNARAAQASgBALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHABgKAAQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_71.setTransform(-163.8,2.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AggArIAAgNQAGADAJACQAHACAIAAQAJAAAGgEQAHgDAAgHQAAgGgGgEQgEgEgNgFQgNgEgGgDQgFgEgDgFQgDgEABgHQAAgMAJgGQAJgIAPABQAPgBAPAHIgEAMQgPgHgMAAQgIABgGADQgFADAAAGQAAADACADQACADAEADIAPAHQARAFAHAFQAFAHAAAJQAAANgKAIQgJAHgRAAQgSAAgLgGg");
	this.shape_72.setTransform(-173.1,2.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAsgCIARAAIAAgGQAAgLgFgGQgFgFgKgBQgLAAgPAIIgFgLQAIgEAIgCQAIgDAHABQASAAAIAHQAIAIAAARIAABAIgLAAIgDgOIgBAAQgGAJgHADQgIADgIAAQgPAAgIgHgAAJABQgPAAgIAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgHQAJgIgBgNIAAgJg");
	this.shape_73.setTransform(-182.7,2.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgWAlQgLgNAAgYQAAgWAMgOQALgNAUABQAHgBAHACQAHACADABIgEANIgLgEIgKgBQgbAAAAAkQAAARAHAKQAHAKAMAAQAMgBANgEIAAAMQgKAFgOAAQgTABgMgNg");
	this.shape_74.setTransform(-191.5,2.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AghArIAAgOQAHAEAIACQAJACAHAAQAJAAAHgDQAFgEAAgHQAAgGgEgEQgFgEgMgGQgOgDgFgEQgGgDgDgFQgDgFAAgGQAAgMAKgHQAKgGAOgBQAQABAPAFIgGAMQgOgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAPAHQARAGAFAGQAHAFAAAKQAAAOgKAHQgLAIgPAAQgUAAgLgHg");
	this.shape_75.setTransform(190.9,-24.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_76.setTransform(184.3,-26.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAZBEIAAg+QAAgKgFgGQgGgGgLAAQgNABgHAHQgHAIAAARIAAAzIgPAAIAAiHIAPAAIAAApIgBANIABAAQAEgHAIgEQAIgEAIAAQASAAAJAJQAJAIAAAQIAAA/g");
	this.shape_77.setTransform(176.6,-26.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_78.setTransform(167.8,-25.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgEAIgBQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_79.setTransform(154.6,-24.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_80.setTransform(146.5,-25.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgGAJQgDgDAAgGQAAgEACgDQADgEAEAAQAEAAADAEQADADAAAEQAAAGgDADQgDACgEAAQgEABgCgDg");
	this.shape_81.setTransform(137,-20.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_82.setTransform(132.3,-26.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgMgFgFQgFgGgKABQgKAAgQAHIgFgLQAIgEAIgCQAIgDAHAAQARAAAJAIQAIAIAAARIAAA/IgLAAIgCgNIgBAAQgIAJgHADQgHAEgJAAQgOAAgIgIgAAJAAQgQACgHAEQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAIgIQAHgGABgOIAAgJg");
	this.shape_83.setTransform(124.8,-24.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgWAkQgLgNAAgXQAAgWAMgNQALgOAUAAIAOACQAHABADACIgEANIgLgEIgKAAQgbAAAAAjQAAARAHAKQAHAJAMAAQAMAAANgEIAAAMQgKAGgOAAQgTAAgMgOg");
	this.shape_84.setTransform(116,-24.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_85.setTransform(109.2,-26.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_86.setTransform(103.7,-25.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_87.setTransform(98.3,-26.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgFQAHgEAJgBIALACIgCANIgKgBQgMAAgGAJQgJAJAAAPIAAAxg");
	this.shape_88.setTransform(93.1,-24.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgWAkQgLgNAAgXQAAgWAMgNQALgOAUAAIAOACQAHABADACIgEANIgLgEIgKAAQgbAAAAAjQAAARAHAKQAHAJAMAAQAMAAANgEIAAAMQgKAGgOAAQgTAAgMgOg");
	this.shape_89.setTransform(84.7,-24.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAIACQAHACAIAAQAJAAAGgDQAHgEgBgHQABgGgGgEQgEgEgNgGQgNgDgGgEQgFgDgDgFQgCgFgBgGQAAgMAKgHQAJgGAPgBQAQABAOAFIgEAMQgPgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAEACIAPAHQASAGAGAGQAFAFABAKQAAAOgLAHQgJAIgRAAQgSAAgMgHg");
	this.shape_90.setTransform(71.4,-24.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_91.setTransform(64.7,-26.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_92.setTransform(54.6,-25.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgEAIgBQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_93.setTransform(46,-24.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_94.setTransform(35.5,-24.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_95.setTransform(27.2,-25.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgEAIgBQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_96.setTransform(18.6,-24.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_97.setTransform(7.6,-24.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgWAkQgLgNAAgXQAAgWAMgNQALgOAUAAIAOACQAHABADACIgEANIgLgEIgKAAQgbAAAAAjQAAARAHAKQAHAJAMAAQAMAAANgEIAAAMQgKAGgOAAQgTAAgMgOg");
	this.shape_98.setTransform(-1.9,-24.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_99.setTransform(-13.3,-26.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAsgCIARAAIAAgGQAAgMgFgFQgFgGgKABQgLAAgPAHIgFgLQAIgEAIgCQAJgDAGAAQASAAAIAIQAIAIAAARIAAA/IgLAAIgDgNIgBAAQgHAJgHADQgHAEgJAAQgOAAgIgIgAAJAAQgPACgIAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgIQAJgGgBgOIAAgJg");
	this.shape_100.setTransform(-20.8,-24.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_101.setTransform(-27.8,-26.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAIACQAHACAIAAQAJAAAGgDQAHgEgBgHQAAgGgEgEQgFgEgNgGQgNgDgGgEQgFgDgDgFQgCgFgBgGQAAgMAKgHQAJgGAPgBQAPABAPAFIgEAMQgPgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAOAHQASAGAFAGQAGAFABAKQgBAOgJAHQgKAIgRAAQgSAAgMgHg");
	this.shape_102.setTransform(-34.3,-24.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgFQAHgEAJgBIALACIgCANIgKgBQgMAAgGAJQgJAJAAAPIAAAxg");
	this.shape_103.setTransform(-41.6,-24.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_104.setTransform(-50.9,-24.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgHAwIgkhfIAPAAIAVA4QAHAUAAAGIAAAAIAGgUIAXg+IAQAAIglBfg");
	this.shape_105.setTransform(-60.5,-24.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_106.setTransform(-70.1,-24.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgFQAHgEAJgBIALACIgCANIgKgBQgMAAgGAJQgJAJAAAPIAAAxg");
	this.shape_107.setTransform(-78.1,-24.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_108.setTransform(-85.7,-25.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgEAIgBQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_109.setTransform(-94.2,-24.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_110.setTransform(-105.2,-24.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgWAkQgLgNAAgXQAAgWAMgNQALgOAUAAIAOACQAHABADACIgEANIgLgEIgKAAQgbAAAAAjQAAARAHAKQAHAJAMAAQAMAAANgEIAAAMQgKAGgOAAQgTAAgMgOg");
	this.shape_111.setTransform(-114.7,-24.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgMQAAgJAFgHQAGgGAKgDQgEgBgCgEQgCgEgBgEQAAgFAEgCQACgEAHgEQgIgDgFgIQgFgGABgKQAAgQAJgIQAKgJARAAQAGAAAFABIAiAAIAAAKIgSACIAEAIQADAFAAAHQgBAOgJAIQgKAIgPAAIgIAAQgJAEAAAGQgBAEAEACQADACAIgBIAPAAQAQAAAIAIQAJAGAAAMQgBARgNAIQgMAIgXAAQgSAAgLgHgAgZAdQgFAFAAAJQAAAIAGAEQAHAEAMAAQARAAAIgFQAKgGgBgKQAAgHgEgDQgFgDgNAAIgQAAQgKAAgGAEgAgQg1QgGAGAAALQAAAJAGAGQAFAFALAAQATAAAAgUQAAgXgTAAQgLABgFAFg");
	this.shape_112.setTransform(-128.8,-22.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgEAIgBQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_113.setTransform(-139.1,-24.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_114.setTransform(-147,-26.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgfA4QgKgNAAgYQAAgWAKgNQALgNATAAQASAAAKAOIABAAIAAgHIgBgHIAAgnIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgLgNgAgTgHQgHAIAAATQAAARAHAKQAHAKAMAAQAOgBAGgHQAHgIAAgTIAAgDQAAgTgHgIQgGgJgOAAQgMAAgHAKg");
	this.shape_115.setTransform(-155,-26.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_116.setTransform(-162.5,-26.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_117.setTransform(-170.2,-24.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgHAwIglhfIAQAAIAVA4QAHAUAAAGIAAAAIAGgUIAXg+IAPAAIgkBfg");
	this.shape_118.setTransform(-180.1,-24.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AApBAIgQgpIgxAAIgQApIgQAAIA0h/IAKAAIAzB/gAAVAKIgQgmIgFgTIgEATIgQAmIApAAg");
	this.shape_119.setTransform(-190.3,-25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance = new lib.gfcContentBg("synched",0);
	this.instance.alpha = 0.852;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-92,425.1,184.1);


(lib.mvContent2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAJQgDgDAAgGQAAgEADgDQACgEAEABQAEgBADAEQADADAAAEQAAAGgDACQgDADgEAAQgDAAgDgCg");
	this.shape.setTransform(-57.6,59.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_1.setTransform(-65.6,55.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMAOgUAAQgMgBgKgGgAgUgbQgIAJAAASQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_2.setTransform(-76.5,55.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAIgNgBg");
	this.shape_3.setTransform(-86.4,57.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgNARAAQASgBALAMQAKAMAAAUIAAAHIhAAAQAAARAJAIQAIAJAMAAQAQABAPgHIAAANIgOAFQgHABgKABQgTgBgNgNgAAZgIQAAgNgGgIQgHgHgLgBQgKABgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_4.setTransform(-100.6,55.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAxIAAhfIAMAAIABASIABAAQAFgJAHgGQAHgEAJAAIALABIgCANIgKgCQgMAAgGAKQgJAJAAAPIAAAyg");
	this.shape_5.setTransform(-108.3,55.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgvQgCgDAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_6.setTransform(-114.9,53.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZBEIAAg/QAAgJgFgGQgGgGgLABQgNAAgHAIQgHAHAAASIAAAyIgPAAIAAiHIAPAAIAAAqIgBAMIABAAQAEgHAIgEQAIgEAIAAQASAAAJAIQAJAJAAAQIAAA/g");
	this.shape_7.setTransform(-122.6,53.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMAOgUAAQgMgBgKgGgAgUgbQgIAJAAASQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_8.setTransform(-138.2,55.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_9.setTransform(-146.9,54.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_10.setTransform(-157.9,54.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACANIABAAQAFgHAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_11.setTransform(-166.4,55.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgcAtgBIAQAAIAAgGQAAgLgFgGQgFgFgLgBQgJABgQAHIgEgLQAGgEAJgCQAIgDAHABQARAAAJAHQAIAIAAARIAABAIgLAAIgCgOIgBAAQgHAJgIADQgHADgJABQgOgBgIgHgAAJAAQgQACgHAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgHQAHgIABgNIAAgJg");
	this.shape_12.setTransform(-177.3,55.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAYAwIgSg3IgGgXIAAAAIgFAXIgTA3IgQAAIgbhfIAQAAIAOA2QAFATAAAGIABAAIAEgNIADgMIASg2IAOAAIARA2QAFAPACAKIAAAAIACgKIAThFIAPAAIgbBfg");
	this.shape_13.setTransform(-189,55.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggArIAAgOQAHAEAHACQAJACAHAAQAJAAAHgDQAFgEABgIQgBgFgFgEQgEgEgMgGQgOgDgFgEQgGgDgDgFQgCgEAAgHQgBgMAKgHQAKgGAOgBQAQABAPAFIgGAMQgOgFgMAAQgIgBgFAEQgGADAAAGQAAAEACADQACACAEACIAQAHQAQAGAGAGQAHAFgBAKQABAOgKAHQgLAIgPgBQgUABgKgHg");
	this.shape_14.setTransform(190.7,28.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgFAJgBIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_15.setTransform(183.3,28.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_16.setTransform(174,28.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAIgNgBg");
	this.shape_17.setTransform(164.4,30.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_18.setTransform(154.8,28.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_19.setTransform(147.1,26.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIABAAQAFgIAHgEQAIgDAIAAQATAAAKANQALANAAAXQAAAWgLANQgKAOgTAAQgHAAgJgDQgHgEgFgIIgCAAIACAQIAAAogAgUgxQgGAJAAASIAAACQAAAUAGAIQAHAJANAAQAMAAAIgLQAGgHABgTQgBgSgGgJQgIgKgMAAQgNABgHAHg");
	this.shape_20.setTransform(139.7,30.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA2AwIAAg8QAAgLgFgHQgFgFgLAAQgNAAgHAIQgGAHAAAQIAAA0IgNAAIAAg8QAAgLgFgHQgFgFgKAAQgOAAgGAIQgHAIAAATIAAAwIgOAAIAAheIAMAAIACANIABAAQAEgHAHgDQAIgFAJAAQAXAAAFARIAAAAQAFgIAIgEQAIgFAKAAQARAAAIAJQAIAIAAASIAAA9g");
	this.shape_21.setTransform(125.6,28.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_22.setTransform(112.2,28.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_23.setTransform(97.5,28.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAwIgkhfIAPAAIAVA4QAHAUAAAGIAAAAIAGgUIAXg+IAQAAIglBfg");
	this.shape_24.setTransform(87.9,28.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_25.setTransform(81.1,26.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_26.setTransform(75.6,27.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWAkQgLgNAAgXQAAgWAMgNQALgOAUAAIAOACQAHACADACIgEAMIgLgDIgKgBQgbAAAAAjQAAASAHAJQAHAJAMAAQAMABANgGIAAANQgKAGgOgBQgTAAgMgNg");
	this.shape_27.setTransform(68.4,28.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_28.setTransform(59,28.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIAAAAQAGgIAHgEQAIgDAIAAQATAAALANQAKANAAAXQAAAWgLANQgLAOgSAAQgIAAgIgDQgHgEgGgIIAAAAIAAAQIAAAogAgTgxQgIAJAAASIAAACQAAAUAIAIQAGAJANAAQANAAAGgLQAIgHgBgTQABgSgIgJQgGgKgNAAQgNABgGAHg");
	this.shape_29.setTransform(48.7,30.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AghArIAAgOQAHAEAJACQAHACAIAAQAJAAAHgDQAFgEAAgIQAAgFgEgEQgFgEgMgGQgOgDgGgEQgFgDgDgFQgCgEgBgHQAAgMAKgHQAJgGAPgBQAPABAQAFIgGAMQgOgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAPAHQARAGAFAGQAHAFAAAKQgBAOgJAHQgLAIgPgBQgUABgLgHg");
	this.shape_30.setTransform(38.7,28.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_31.setTransform(28.9,28.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgFAJgBIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_32.setTransform(20.9,28.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIABAAQAFgIAHgEQAIgDAIAAQATAAALANQAKANAAAXQAAAWgLANQgLAOgSAAQgIAAgIgDQgHgEgFgIIgBAAIABAQIAAAogAgTgxQgIAJABASIAAACQgBAUAIAIQAGAJANAAQANAAAGgLQAIgHgBgTQABgSgIgJQgGgKgNAAQgNABgGAHg");
	this.shape_33.setTransform(11.4,30.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_34.setTransform(-1.4,26.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_35.setTransform(-5.9,26.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_36.setTransform(-10.5,26.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAXAwIgRg3IgGgXIAAAAIgFAXIgSA3IgRAAIgbhfIAQAAIAOA2QAFATABAGIAAAAIADgNIAEgMIASg2IANAAIASA2QAFAPABAKIABAAIACgKIAShFIAPAAIgaBfg");
	this.shape_37.setTransform(-19.7,28.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgFAJgBIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_38.setTransform(-34.4,28.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_39.setTransform(-44.1,28.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_40.setTransform(-55,28.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAIACQAHACAIAAQAJAAAGgDQAHgEgBgIQAAgFgEgEQgFgEgNgGQgNgDgGgEQgFgDgDgFQgCgEgBgHQAAgMAKgHQAJgGAPgBQAPABAPAFIgEAMQgPgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAOAHQASAGAFAGQAGAFABAKQgBAOgJAHQgKAIgRgBQgSABgMgHg");
	this.shape_41.setTransform(-69.4,28.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_42.setTransform(-77,27.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AggArIAAgOQAHAEAHACQAJACAHAAQAJAAAHgDQAFgEABgIQgBgFgFgEQgEgEgMgGQgOgDgFgEQgGgDgDgFQgCgEAAgHQgBgMAKgHQAKgGAOgBQAQABAPAFIgGAMQgOgFgMAAQgIgBgFAEQgGADAAAGQAAAEACADQACACAEACIAQAHQAQAGAGAGQAHAFgBAKQABAOgLAHQgKAIgPgBQgUABgKgHg");
	this.shape_43.setTransform(-84.3,28.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_44.setTransform(-94.1,28.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIABAAQAFgIAHgEQAIgDAIAAQATAAAKANQALANAAAXQAAAWgLANQgKAOgTAAQgHAAgJgDQgHgEgFgIIgCAAIACAQIAAAogAgUgxQgGAJAAASIAAACQAAAUAGAIQAHAJANAAQAMAAAIgLQAGgHABgTQgBgSgGgJQgIgKgMAAQgNABgHAHg");
	this.shape_45.setTransform(-104.7,30.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgFAJgBIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_46.setTransform(-118.1,28.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_47.setTransform(-128,28.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_48.setTransform(-138.9,28.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAIgNgBg");
	this.shape_49.setTransform(-148.8,30.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgfA4QgKgNAAgYQAAgWAKgNQALgNATAAQARAAALAOIABAAIAAgHIgBgGIAAgoIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgLgNgAgTgHQgHAIAAASQAAATAHAJQAHAKAMAAQAOgBAHgHQAGgIAAgTIAAgDQAAgTgGgIQgHgJgOAAQgMAAgHAKg");
	this.shape_50.setTransform(-163.7,26.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAsgBIARgBIAAgGQAAgMgFgFQgFgGgKABQgLgBgPAIIgFgLQAIgEAIgCQAJgDAGAAQASAAAIAIQAIAIAAARIAAA/IgLAAIgDgNIgBAAQgHAJgHADQgHADgJAAQgOABgIgIgAAJAAQgPACgIAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgIQAJgGgBgOIAAgJg");
	this.shape_51.setTransform(-174.3,28.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHABgKAAQgTAAgNgNgAAZgIQAAgNgGgIQgHgIgLABQgKgBgGAIQgHAIgCANIAxAAIAAAAg");
	this.shape_52.setTransform(-184,28.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgFAJgBIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_53.setTransform(-191.7,28.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAJAAASQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_54.setTransform(187.2,2.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_55.setTransform(178.6,1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_56.setTransform(167.6,1.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_57.setTransform(159,2.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAsgCIARAAIAAgGQAAgLgFgGQgFgFgKgBQgKAAgQAIIgFgLQAIgEAIgCQAIgDAHABQARAAAJAHQAIAIAAARIAABAIgLAAIgCgOIgBAAQgIAJgHADQgHADgJAAQgOAAgIgHgAAJABQgQAAgHAFQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAIgHQAHgIABgNIAAgJg");
	this.shape_58.setTransform(148.2,2.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAYAwIgSg3IgGgXIAAAAIgFAXIgTA3IgQAAIgahfIAPAAIAOA2QAFATAAAGIACAAIADgNIADgMIASg2IAOAAIARA2QAFAPACAKIAAAAIACgKIAThFIAPAAIgbBfg");
	this.shape_59.setTransform(136.5,2.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_60.setTransform(121.6,1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAJAAASQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_61.setTransform(113,2.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_62.setTransform(102.2,2.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_63.setTransform(89.7,0.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_64.setTransform(85.1,0.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_65.setTransform(80.6,0.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAYAwIgSg3IgGgXIAAAAIgFAXIgTA3IgQAAIgahfIAPAAIAOA2QAFATABAGIABAAIADgNIADgMIASg2IANAAIASA2QAFAPACAKIAAAAIACgKIAShFIAQAAIgbBfg");
	this.shape_66.setTransform(71.3,2.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgNARAAQASgBALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHABgKAAQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_67.setTransform(54.7,2.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_68.setTransform(47.3,0.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIABAAQAFgIAHgDQAIgEAIAAQATAAAKANQALANAAAYQAAAWgLAMQgLAOgSAAQgHAAgJgEQgHgDgFgHIgBAAIABAQIAAAngAgUgwQgGAHAAATIAAADQAAATAGAIQAHAIANAAQAMABAHgLQAIgIAAgRQAAgSgIgKQgHgJgMAAQgNgBgHAJg");
	this.shape_69.setTransform(39.9,4.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAJAAASQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_70.setTransform(28.6,2.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgNARAAQASgBALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHABgKAAQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_71.setTransform(18.2,2.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIAAAAQAGgIAIgDQAHgEAIAAQATAAALANQAKANAAAYQAAAWgLAMQgKAOgTAAQgIAAgHgEQgIgDgGgHIgBAAIABAQIAAAngAgUgwQgHAHAAATIAAADQAAATAHAIQAHAIANAAQAMABAIgLQAGgIAAgRQAAgSgGgKQgIgJgMAAQgNgBgHAJg");
	this.shape_72.setTransform(8,4.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgNQAAgJAGgGQAFgGALgDQgEgBgDgDQgCgEAAgFQAAgFADgCQACgEAHgEQgIgDgFgHQgEgIgBgJQAAgQAKgJQAJgIASAAQAFAAAHACIAhAAIAAAJIgSACIAFAIQABAFAAAGQABAOgKAJQgKAJgPgBIgIgBQgKAGAAAFQABAEADACQADACAIAAIAPAAQAQAAAIAGQAIAHAAAMQABARgNAIQgNAIgWAAQgTAAgLgHgAgZAeQgFAEAAAJQAAAIAGAEQAHAEANAAQAQAAAJgGQAIgFABgJQgBgIgFgDQgEgDgOAAIgPAAQgKAAgGAFgAgRg1QgFAFAAALQAAALAFAFQAHAFAJAAQAUAAAAgVQAAgWgUABQgKgBgGAGg");
	this.shape_73.setTransform(-7.4,4.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_74.setTransform(-17.8,2.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_75.setTransform(-25.6,0.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_76.setTransform(-33.3,2.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_77.setTransform(-41.2,0.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAsgCIARAAIAAgGQAAgLgFgGQgFgFgKgBQgLAAgPAIIgFgLQAIgEAIgCQAJgDAGABQASAAAIAHQAIAIAAARIAABAIgLAAIgDgOIgBAAQgHAJgHADQgHADgJAAQgOAAgIgHgAAJABQgPAAgIAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgHQAJgIgBgNIAAgJg");
	this.shape_78.setTransform(-48.7,2.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_79.setTransform(-55.7,0.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIABAAQAFgIAHgDQAIgEAIAAQATAAAKANQALANAAAYQAAAWgLAMQgLAOgSAAQgHAAgJgEQgHgDgFgHIgBAAIABAQIAAAngAgUgwQgGAHAAATIAAADQAAATAGAIQAHAIANAAQAMABAHgLQAIgIAAgRQAAgSgIgKQgHgJgMAAQgNgBgHAJg");
	this.shape_80.setTransform(-63.2,4.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AA2AxIAAg9QAAgMgFgFQgFgGgLAAQgNAAgHAHQgGAJAAAQIAAA0IgNAAIAAg9QAAgMgFgFQgFgGgKAAQgOAAgGAIQgHAIAAATIAAAxIgOAAIAAhfIAMAAIACAOIABAAQAEgHAHgFQAIgDAJAAQAXAAAFAQIAAAAQAFgIAIgEQAIgEAKAAQARAAAIAIQAIAIAAATIAAA9g");
	this.shape_81.setTransform(-77.3,2.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAJAAASQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_82.setTransform(-91.1,2.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgWAlQgLgNAAgYQAAgWAMgOQALgNAUABQAHgBAHACQAHACADABIgEANIgLgEIgKgBQgbAAAAAkQAAARAHAKQAHAKAMAAQAMgBANgEIAAAMQgKAFgOAAQgTABgMgNg");
	this.shape_83.setTransform(-100.6,2.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAIgNgBg");
	this.shape_84.setTransform(-114.3,4.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_85.setTransform(-121.1,0.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_86.setTransform(-126.6,1.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_87.setTransform(-135.1,2.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgFgFgLgBQgKAAgPAIIgEgLQAGgEAJgCQAJgDAGABQARAAAJAHQAIAIAAARIAABAIgLAAIgCgOIgCAAQgHAJgGADQgIADgIAAQgPAAgIgHgAAJABQgQAAgHAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgHQAHgIAAgNIAAgJg");
	this.shape_88.setTransform(-146,2.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_89.setTransform(-153.9,1.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AggArIAAgNQAHADAHACQAJACAHAAQAJAAAHgEQAFgDABgHQgBgGgFgEQgEgEgMgFQgOgEgFgDQgGgEgDgFQgCgEAAgHQgBgMAKgGQAKgIAOABQAQgBAPAHIgGAMQgOgHgMAAQgIABgFADQgGADAAAGQAAADACADQACADAEADIAQAHQAQAFAGAFQAHAHgBAJQABANgLAIQgKAHgPAAQgUAAgKgGg");
	this.shape_90.setTransform(-161.2,2.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgDAIAAQARAAAJAIQAJAIAAATIAAA9g");
	this.shape_91.setTransform(-171,2.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATABQAUAAAMANQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAJAAASQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_92.setTransform(-182,2.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgWAlQgLgNAAgYQAAgWAMgOQALgNAUABQAHgBAHACQAHACADABIgEANIgLgEIgKgBQgbAAAAAkQAAARAHAKQAHAKAMAAQAMgBANgEIAAAMQgKAFgOAAQgTABgMgNg");
	this.shape_93.setTransform(-191.5,2.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_94.setTransform(117.9,-24.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgFQAHgEAJgBIALACIgCANIgKgBQgMAAgGAJQgJAJAAAPIAAAxg");
	this.shape_95.setTransform(110.2,-24.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAsgCIARAAIAAgGQAAgMgFgFQgFgGgKABQgLAAgPAHIgFgLQAIgEAIgCQAJgDAGAAQASAAAIAIQAIAIAAARIAAA/IgLAAIgDgNIAAAAQgIAJgHADQgHAEgJAAQgOAAgIgIgAAJAAQgQACgHAEQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAIgIQAIgGAAgOIAAgJg");
	this.shape_96.setTransform(100.6,-24.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_97.setTransform(85.7,-24.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_98.setTransform(74.8,-24.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAQgHAAgGgBg");
	this.shape_99.setTransform(64.8,-22.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgOBEIAAhTIgRAAIAAgGIARgGIAAgFQAAgjAdAAQAHAAAKADIgDALQgIgCgHAAQgHAAgEAFQgDAGAAAMIAAAGIAXAAIAAALIgXAAIAABTg");
	this.shape_100.setTransform(53.2,-26.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_101.setTransform(47.1,-25.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgGAJQgDgDAAgGQAAgEADgDQACgEAEAAQAFAAACAEQADADAAAEQAAAGgDADQgDACgEAAQgDABgDgDg");
	this.shape_102.setTransform(37.6,-20.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_103.setTransform(30.2,-24.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgEAIgBQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_104.setTransform(19.7,-24.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_105.setTransform(8.7,-24.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_106.setTransform(0.1,-25.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_107.setTransform(-12.7,-24.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgHAwIgkhfIAPAAIAVA4QAHAUAAAGIAAAAIAGgUIAXg+IAQAAIglBfg");
	this.shape_108.setTransform(-22.2,-24.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_109.setTransform(-29,-26.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_110.setTransform(-34.5,-25.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgMgFgFQgFgGgLABQgKAAgPAHIgEgLQAGgEAJgCQAJgDAGAAQARAAAJAIQAIAIAAARIAAA/IgLAAIgCgNIgCAAQgHAJgGADQgIAEgIAAQgPAAgIgIgAAJAAQgQACgHAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgIQAHgGAAgOIAAgJg");
	this.shape_111.setTransform(-42.9,-24.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgMQAAgJAFgHQAGgGALgDQgEgBgDgEQgDgEABgEQAAgFACgCQADgEAGgEQgHgDgFgIQgFgGAAgKQAAgQAKgIQAKgJARAAQAFAAAHABIAhAAIAAAKIgSACIAEAIQACAFAAAHQAAAOgKAIQgJAIgPAAIgIAAQgKAEAAAGQAAAEAEACQADACAIgBIAPAAQAQAAAIAIQAJAGgBAMQAAARgNAIQgMAIgWAAQgUAAgKgHgAgYAdQgGAFAAAJQAAAIAHAEQAGAEANAAQAQAAAJgFQAJgGAAgKQAAgHgGgDQgEgDgOAAIgPAAQgKAAgFAEgAgQg1QgGAGAAALQAAAJAGAGQAGAFAJAAQAUAAAAgUQAAgXgUAAQgKABgFAFg");
	this.shape_112.setTransform(-52.6,-22.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_113.setTransform(-62.5,-24.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACANIABAAQAFgHAIgDQAIgEAIgBQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_114.setTransform(-73,-24.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgMgFgFQgFgGgLABQgKAAgPAHIgEgLQAGgEAJgCQAIgDAHAAQARAAAJAIQAIAIAAARIAAA/IgLAAIgDgNIgBAAQgHAJgGADQgIAEgIAAQgPAAgIgIgAAJAAQgPACgIAEQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAHgIQAIgGAAgOIAAgJg");
	this.shape_115.setTransform(-88.5,-24.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AghArIAAgOQAHAEAIACQAJACAHAAQAJAAAHgDQAFgEAAgHQAAgGgEgEQgFgEgMgGQgOgDgFgEQgGgDgDgFQgDgFAAgGQAAgMAKgHQAKgGAOgBQAQABAPAFIgGAMQgOgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAPAHQARAGAFAGQAHAFAAAKQAAAOgKAHQgLAIgPAAQgUAAgLgHg");
	this.shape_116.setTransform(-102,-24.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_117.setTransform(-109.6,-25.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgOARAAQASAAALANQAKALAAATIAAAIIhAAAQAAARAJAIQAIAKAMgBQAQAAAPgGIAAANIgOAFQgHACgKAAQgTAAgNgOgAAZgIQAAgNgGgIQgHgHgLAAQgKAAgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_118.setTransform(-117.7,-24.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAIACQAHACAIAAQAJAAAGgDQAHgEgBgHQAAgGgEgEQgFgEgNgGQgNgDgGgEQgFgDgDgFQgCgFgBgGQAAgMAKgHQAJgGAPgBQAPABAPAFIgEAMQgPgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAFACIAOAHQASAGAFAGQAGAFABAKQgBAOgJAHQgKAIgRAAQgSAAgMgHg");
	this.shape_119.setTransform(-127,-24.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AACAVIAGgVIADgUIAQAAIACACIgHASIgJAVgAgcAVQAHgWACgTIAQAAIACACIgHASIgJAVg");
	this.shape_120.setTransform(-139.1,-30.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_121.setTransform(-145.9,-25.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAIACQAHACAIAAQAJAAAGgDQAHgEgBgHQABgGgGgEQgEgEgNgGQgNgDgGgEQgFgDgDgFQgCgFgBgGQAAgMAKgHQAJgGAPgBQAQABAOAFIgEAMQgPgFgMAAQgIgBgGAEQgFADAAAGQAAAEACADQACACAEACIAPAHQASAGAGAGQAFAFABAKQAAAOgLAHQgJAIgRAAQgSAAgMgHg");
	this.shape_122.setTransform(-153.2,-24.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgFQAHgEAJgBIALACIgCANIgKgBQgMAAgGAJQgJAJAAAPIAAAxg");
	this.shape_123.setTransform(-160.5,-24.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgWAMgNQAMgOATAAQAUAAAMAOQAMAOAAAVQAAAXgMANQgMAOgUAAQgMAAgKgHgAgUgbQgIAKAAARQAAARAIAKQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_124.setTransform(-170.3,-24.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAYAwIgSg3IgGgXIAAAAIgFAXIgTA3IgQAAIgbhfIAQAAIAOA2QAFATAAAGIABAAIAEgNIADgMIASg2IAOAAIARA2QAFAPACAKIAAAAIACgKIAThFIAPAAIgbBfg");
	this.shape_125.setTransform(-182.7,-24.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AAEAVIgBgCQAEgTALgUIALAAIgFAUIgEAVgAgbAVIgBgCIAHgTIAJgUIALAAQgHAUgCAVg");
	this.shape_126.setTransform(-192.8,-30.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASAAALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_127.setTransform(185.9,-50.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAZBEIAAg/QAAgJgFgGQgGgFgLAAQgNgBgHAJQgHAHAAASIAAAyIgPAAIAAiHIAPAAIAAAqIgBAMIABAAQAEgHAIgEQAIgEAIAAQASAAAJAIQAJAJAAAQIAAA/g");
	this.shape_128.setTransform(175.4,-52.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_129.setTransform(166.6,-51.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AghArIAAgNQAIADAIACQAHACAIAAQAJAAAGgEQAHgDgBgIQABgFgGgEQgEgEgNgGQgNgDgGgEQgFgDgDgFQgCgFgBgGQABgMAJgGQAJgIAPAAQAQAAAOAHIgEALQgPgFgMgBQgIAAgGAEQgFADAAAGQAAADACADQACADAEACIAPAIQASAFAGAFQAFAHABAJQAAANgLAIQgJAHgRAAQgSAAgMgGg");
	this.shape_130.setTransform(154.6,-50.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_131.setTransform(148,-52.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgNQAAgIAGgHQAFgGALgCQgEgCgDgEQgCgDAAgFQAAgFADgCQACgEAHgEQgIgDgFgIQgEgHAAgJQgBgQAKgJQAJgIASAAQAFAAAHACIAhAAIAAAJIgSACIAFAIQABAFAAAGQABAOgKAJQgKAJgPAAIgIgCQgKAGAAAFQABAEADACQADACAIAAIAPAAQAQAAAIAGQAIAHAAANQABAPgNAJQgNAIgWAAQgTAAgLgHgAgZAeQgFAEAAAJQAAAIAGAEQAHAEANAAQAQAAAJgGQAIgFABgJQgBgIgFgDQgEgDgNAAIgQAAQgKAAgGAFgAgRg1QgFAFAAALQAAALAFAFQAHAFAJAAQAUAAAAgVQAAgWgUABQgKgBgGAGg");
	this.shape_132.setTransform(136.1,-48.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgEAIAAQARABAJAIQAJAIAAATIAAA9g");
	this.shape_133.setTransform(125.8,-50.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_134.setTransform(117.9,-52.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAZBEIAAg/QAAgJgFgGQgGgFgLAAQgNgBgHAJQgHAHAAASIAAAyIgPAAIAAiHIAPAAIAAAqIgBAMIABAAQAEgHAIgEQAIgEAIAAQASAAAJAIQAJAJAAAQIAAA/g");
	this.shape_135.setTransform(110.2,-52.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_136.setTransform(101.4,-51.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASAAALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_137.setTransform(93.3,-50.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AA2AxIAAg9QAAgLgFgHQgFgFgLAAQgNAAgHAHQgGAJAAAQIAAA0IgNAAIAAg9QAAgLgFgHQgFgFgKAAQgOAAgGAIQgHAIAAATIAAAxIgOAAIAAhfIAMAAIACAOIABAAQAEgHAHgFQAIgEAJAAQAXAAAFARIAAAAQAFgIAIgEQAIgEAKgBQARABAIAIQAIAIAAATIAAA9g");
	this.shape_138.setTransform(80,-50.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATAAQAUAAAMAOQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAKAAARQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_139.setTransform(66.1,-50.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AghArIAAgNQAIADAIACQAHACAIAAQAJAAAGgEQAHgDAAgIQAAgFgGgEQgEgEgNgGQgNgDgGgEQgFgDgDgFQgCgFgBgGQAAgMAKgGQAJgIAPAAQAQAAAOAHIgEALQgPgFgMgBQgIAAgGAEQgFADAAAGQAAADACADQACADAEACIAPAIQASAFAGAFQAFAHABAJQAAANgLAIQgJAHgRAAQgSAAgMgGg");
	this.shape_140.setTransform(56.5,-50.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASAAALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_141.setTransform(42.5,-50.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AAVBEIghguIgKAKIAAAkIgPAAIAAiHIAPAAIAABHIgBAPIABAAIALgPIAdgeIASAAIgmAmIAoA4g");
	this.shape_142.setTransform(33.8,-52.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_143.setTransform(26.1,-52.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_144.setTransform(21.6,-52.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgMAVIAGgVIAEgUIAOAAIABACIgHASIgHAVg");
	this.shape_145.setTransform(12.1,-45.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_146.setTransform(7,-51.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgEAIAAQARABAJAIQAJAIAAATIAAA9g");
	this.shape_147.setTransform(-1.5,-50.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASAAALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_148.setTransform(-12.1,-50.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_149.setTransform(-20.4,-51.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgEAIAAQARABAJAIQAJAIAAATIAAA9g");
	this.shape_150.setTransform(-28.9,-50.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATAAQAUAAAMAOQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAKAAARQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_151.setTransform(-39.9,-50.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgWAlQgLgNAAgYQAAgWAMgOQALgNAUAAIAOACQAHABADADIgEAMIgLgDIgKgCQgbAAAAAkQAAARAHAKQAHAKAMAAQAMgBANgFIAAANQgKAFgOAAQgTABgMgNg");
	this.shape_152.setTransform(-49.4,-50.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASAAALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_153.setTransform(-63.5,-50.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgHAwIgkhfIAPAAIAVA4QAHAUAAAGIAAAAIAGgUIAXg+IAQAAIglBfg");
	this.shape_154.setTransform(-73.1,-50.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_155.setTransform(-79.9,-52.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_156.setTransform(-85.4,-51.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgbAtgBIAQgBIAAgGQAAgMgFgFQgFgGgLAAQgKAAgPAIIgEgLQAGgEAJgCQAJgCAGgBQARABAJAHQAIAIAAARIAABAIgLAAIgCgOIgCAAQgHAJgGADQgIADgIAAQgPAAgIgHgAAJABQgQAAgHAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgHQAHgIAAgNIAAgJg");
	this.shape_157.setTransform(-93.8,-50.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgNQAAgIAFgHQAGgGALgCQgEgCgDgEQgDgDABgFQAAgFACgCQADgEAGgEQgHgDgFgIQgFgHAAgJQAAgQAKgJQAKgIARAAQAFAAAHACIAhAAIAAAJIgSACIAEAIQACAFAAAGQAAAOgKAJQgJAJgPAAIgIgCQgKAGAAAFQAAAEAEACQADACAIAAIAPAAQAQAAAIAGQAJAHgBANQAAAPgNAJQgMAIgWAAQgUAAgKgHgAgYAeQgGAEAAAJQAAAIAHAEQAGAEANAAQAQAAAJgGQAJgFAAgJQAAgIgGgDQgEgDgOAAIgPAAQgKAAgFAFgAgQg1QgGAFAAALQAAALAGAFQAGAFAJAAQAUAAAAgVQAAgWgUABQgKgBgFAGg");
	this.shape_158.setTransform(-103.4,-48.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASAAALAMQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQAAAPgHIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_159.setTransform(-113.3,-50.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgEAIAAQARABAJAIQAJAIAAATIAAA9g");
	this.shape_160.setTransform(-123.8,-50.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgNQAAgIAFgHQAGgGALgCQgEgCgDgEQgDgDABgFQAAgFACgCQADgEAGgEQgHgDgFgIQgFgHAAgJQAAgQAKgJQAKgIARAAQAFAAAHACIAhAAIAAAJIgSACIAEAIQACAFAAAGQAAAOgKAJQgJAJgPAAIgIgCQgKAGAAAFQAAAEAEACQADACAIAAIAPAAQAQAAAIAGQAJAHgBANQAAAPgNAJQgMAIgWAAQgUAAgKgHgAgYAeQgGAEAAAJQAAAIAHAEQAGAEANAAQAQAAAJgGQAJgFAAgJQAAgIgGgDQgEgDgOAAIgPAAQgKAAgFAFgAgQg1QgGAFAAALQAAALAGAFQAGAFAJAAQAUAAAAgVQAAgWgUABQgKgBgFAGg");
	this.shape_161.setTransform(-139,-48.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgEQAIgEAIAAQARABAJAIQAJAIAAATIAAA9g");
	this.shape_162.setTransform(-149.3,-50.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgCACgBQADABADACQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_163.setTransform(-157.2,-52.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_164.setTransform(-162.7,-51.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AghArIAAgNQAHADAIACQAJACAHAAQAJAAAHgEQAFgDAAgIQAAgFgEgEQgFgEgMgGQgOgDgFgEQgGgDgDgFQgDgFAAgGQAAgMAKgGQAKgIAOAAQAQAAAPAHIgGALQgOgFgMgBQgIAAgGAEQgFADAAAGQAAADACADQACADAFACIAPAIQARAFAFAFQAHAHAAAJQAAANgKAIQgLAHgPAAQgUAAgLgGg");
	this.shape_165.setTransform(-170,-50.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgNQAMgNATAAQAUAAAMAOQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAKAAARQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_166.setTransform(-179.8,-50.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgnBAIAAh/IAhAAQAuAAAAAmQAAATgNAJQgNAKgXAAIgPAAIAAAzgAgYAAIANAAQASAAAJgEQAJgGAAgPQAAgMgIgHQgJgGgPAAIgRAAg");
	this.shape_167.setTransform(-190.2,-52.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance = new lib.gfcContentBg("synched",0);
	this.instance.alpha = 0.852;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-92,425.1,184.1);


(lib.mvContent1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAJQgDgDAAgGQAAgEACgDQADgDAEAAQAEAAADADQADADAAAEQAAAFgDAEQgDACgEAAQgEABgCgDg");
	this.shape.setTransform(-161.3,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2AwIAAg8QAAgMgFgFQgFgGgLAAQgNAAgHAIQgGAHAAAQIAAA0IgNAAIAAg8QAAgMgFgFQgFgGgKAAQgOAAgGAIQgHAIAAATIAAAwIgOAAIAAheIAMAAIACANIABAAQAEgGAHgFQAIgDAJAAQAXAAAFAQIAAAAQAFgIAIgEQAIgFAKABQARgBAIAJQAIAIAAASIAAA9g");
	this.shape_1.setTransform(-172,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgCgDAAgFQAAgFACgCQADgDACABQADgBADADQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_2.setTransform(-182.7,40.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZBEIAAg+QAAgKgFgGQgGgGgLAAQgNABgHAHQgHAIAAARIAAAzIgPAAIAAiHIAPAAIAAApIgBANIABAAQAEgHAIgEQAIgEAIAAQASAAAJAIQAJAJAAAQIAAA/g");
	this.shape_3.setTransform(-190.4,39.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBEIAAhTIgSAAIAAgGIASgGIAAgFQAAgjAdAAQAIAAAKADIgEALQgJgCgFAAQgIAAgFAFQgCAGAAAMIAAAGIAXAAIAAALIgXAAIAABTg");
	this.shape_4.setTransform(190.3,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgNATgBQAUAAAMAOQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAKAAARQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_5.setTransform(181.3,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA+g");
	this.shape_6.setTransform(165.8,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgNATgBQAUAAAMAOQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAKAAARQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_7.setTransform(154.8,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgDACAAQADAAADADQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_8.setTransform(147.1,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAHACQAJACAHAAQAJAAAHgEQAFgDAAgIQAAgFgEgEQgFgEgMgGQgOgDgFgEQgGgDgDgFQgDgFAAgGQAAgMAKgGQAKgIAOAAQAQAAAPAHIgGALQgOgFgMgBQgIAAgFAEQgGADAAAGQAAAEACADQACACAFACIAPAIQARAFAFAFQAHAHAAAJQAAANgKAIQgLAHgPAAQgUAAgLgGg");
	this.shape_9.setTransform(140.6,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAHACQAJACAHAAQAJAAAHgEQAFgDAAgIQAAgFgEgEQgFgEgMgGQgOgDgFgEQgGgDgDgFQgDgFAAgGQAAgMAKgGQAKgIAOAAQAQAAAPAHIgGALQgOgFgMgBQgIAAgFAEQgGADAAAGQAAAEACADQACACAFACIAPAIQARAFAFAFQAHAHgBAJQABANgKAIQgLAHgPAAQgUAAgLgGg");
	this.shape_10.setTransform(132.1,15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASABALALQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQgBAPgGIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_11.setTransform(122.7,15.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAxIAAhfIAMAAIABASIABAAQAFgKAHgEQAHgGAJAAIALABIgCAOIgKgBQgMgBgGAKQgJAKAAAOIAAAyg");
	this.shape_12.setTransform(115,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIAAAAQAGgIAIgDQAHgEAIAAQATAAALANQAKANAAAXQAAAWgLANQgLAOgSAAQgIAAgHgEQgIgDgGgIIgBAAIABARIAAAngAgTgwQgIAHAAATIAAACQAAAUAIAIQAGAJANgBQANAAAGgKQAIgIgBgSQABgSgIgJQgGgKgNAAQgNAAgGAJg");
	this.shape_13.setTransform(105.5,17.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA2AxIAAg9QAAgLgFgHQgFgFgLAAQgNAAgHAHQgGAJAAAPIAAA1IgNAAIAAg9QAAgLgFgHQgFgFgKAAQgOAAgGAIQgHAIAAATIAAAxIgOAAIAAhfIAMAAIACAOIABAAQAEgIAHgDQAIgFAJAAQAXAAAFARIAAAAQAFgIAIgEQAIgEAKgBQARAAAIAJQAIAIAAASIAAA+g");
	this.shape_14.setTransform(91.4,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgDACAAQADAAADADQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_15.setTransform(80.7,13.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASABALALQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQgBAPgGIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_16.setTransform(68.8,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggArIAAgOQAGAEAJACQAHACAIAAQAJAAAGgEQAHgDAAgIQAAgFgGgEQgEgEgNgGQgNgDgGgEQgFgDgDgFQgDgFABgGQAAgMAJgGQAKgIAOAAQAPAAAPAHIgEALQgPgFgMgBQgIAAgGAEQgFADAAAGQAAAEACADQACACAEACIAPAIQARAFAHAFQAFAHAAAJQAAANgKAIQgJAHgRAAQgSAAgLgGg");
	this.shape_17.setTransform(59.6,15.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_18.setTransform(52.9,13.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgcAtAAIAQgBIAAgGQAAgLgFgGQgFgGgLAAQgKAAgPAIIgEgLQAGgEAJgCQAJgCAGgBQARABAJAHQAIAIAAARIAABAIgLAAIgCgOIgBAAQgHAJgIADQgHAEgJgBQgOAAgIgHgAAJABQgQABgHAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgIQAHgHABgNIAAgJg");
	this.shape_19.setTransform(45.4,15.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOBEIAAhTIgSAAIAAgGIASgGIAAgFQAAgjAdAAQAIAAAKADIgEALQgJgCgFAAQgIAAgFAFQgCAGAAAMIAAAGIAXAAIAAALIgXAAIAABTg");
	this.shape_20.setTransform(38.2,13.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgcAtAAIAQgBIAAgGQAAgLgFgGQgFgGgLAAQgKAAgPAIIgEgLQAGgEAJgCQAJgCAGgBQARABAJAHQAIAIAAARIAABAIgLAAIgCgOIgBAAQgHAJgIADQgHAEgIgBQgPAAgIgHgAAJABQgQABgHAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgIQAHgHABgNIAAgJg");
	this.shape_21.setTransform(24.7,15.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAxIAAhfIAMAAIABASIABAAQAFgKAHgEQAHgGAJAAIALABIgCAOIgKgBQgMgBgGAKQgJAKAAAOIAAAyg");
	this.shape_22.setTransform(12.3,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASABALALQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQgBAPgGIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_23.setTransform(3,15.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAIgNgBg");
	this.shape_24.setTransform(-6.6,17.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgNATgBQAUAAAMAOQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAKAAARQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_25.setTransform(-16.2,15.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_26.setTransform(-23.9,13.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIABAAQAFgIAHgDQAIgEAIAAQATAAAKANQALANAAAXQAAAWgLANQgKAOgTAAQgHAAgJgEQgHgDgFgIIgCAAIACARIAAAngAgUgwQgGAHAAATIAAACQAAAUAGAIQAHAJANgBQAMAAAIgKQAGgIABgSQgBgSgGgJQgIgKgMAAQgNAAgHAJg");
	this.shape_27.setTransform(-31.3,17.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA2AxIAAg9QAAgLgFgHQgFgFgLAAQgNAAgHAHQgGAJAAAPIAAA1IgNAAIAAg9QAAgLgFgHQgFgFgKAAQgOAAgGAIQgHAIAAATIAAAxIgOAAIAAhfIAMAAIACAOIABAAQAEgIAHgDQAIgFAJAAQAXAAAFARIAAAAQAFgIAIgEQAIgEAKgBQARAAAIAJQAIAIAAASIAAA+g");
	this.shape_28.setTransform(-45.4,15.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASABALALQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQgBAPgGIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_29.setTransform(-58.8,15.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_30.setTransform(-70.8,13.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgcAtAAIAQgBIAAgGQAAgLgFgGQgFgGgLAAQgKAAgPAIIgEgLQAGgEAJgCQAJgCAGgBQARABAJAHQAIAIAAARIAABAIgLAAIgCgOIgBAAQgHAJgIADQgHAEgJgBQgOAAgIgHgAAJABQgQABgHAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgIQAHgHABgNIAAgJg");
	this.shape_31.setTransform(-78.4,15.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgDACAAQADAAADADQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_32.setTransform(-85.4,13.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_33.setTransform(-90.9,14.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACAOIABAAQAFgIAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA+g");
	this.shape_34.setTransform(-99.4,15.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASABALALQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQgBAPgGIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_35.setTransform(-110,15.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_36.setTransform(-118.3,14.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgWAMgNQAMgNATgBQAUAAAMAOQAMANAAAWQAAAXgMANQgMANgUAAQgMAAgKgGgAgUgbQgIAKAAARQAAARAIALQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_37.setTransform(-126.8,15.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIABAAQAFgIAHgDQAIgEAIAAQATAAAKANQALANAAAXQAAAWgLANQgLAOgSAAQgHAAgJgEQgHgDgFgIIgBAAIABARIAAAngAgUgwQgGAHAAATIAAACQAAAUAGAIQAHAJANgBQAMAAAHgKQAIgIAAgSQAAgSgIgJQgHgKgMAAQgNAAgHAJg");
	this.shape_38.setTransform(-137.4,17.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgcAtAAIAQgBIAAgGQAAgLgFgGQgFgGgLAAQgKAAgPAIIgEgLQAGgEAJgCQAJgCAGgBQARABAJAHQAIAIAAARIAABAIgLAAIgCgOIgCAAQgHAJgGADQgIAEgIgBQgPAAgIgHgAAJABQgQABgHAEQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgIQAHgHAAgNIAAgJg");
	this.shape_39.setTransform(-153.2,15.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASABALALQAKAMAAAUIAAAHIhAAAQAAARAJAJQAIAIAMABQAQgBAPgGIAAANIgOAFQgHACgKgBQgTABgNgNgAAZgIQAAgOgGgHQgHgIgLAAQgKAAgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_40.setTransform(-167.5,15.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgHAwIglhfIAQAAIAVA4QAHAUAAAGIAAAAIAGgUIAXg+IAPAAIgkBfg");
	this.shape_41.setTransform(-177.1,15.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgCQADgDACAAQADAAADADQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_42.setTransform(-183.9,13.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgNQAAgIAFgHQAGgGAKgCQgDgCgDgEQgCgDgBgFQAAgFADgCQAEgEAFgEQgHgDgFgIQgFgHAAgJQAAgQAKgIQAKgJARAAQAGAAAFACIAiAAIAAAJIgSACIAEAIQACAFAAAGQAAAPgKAIQgJAJgPAAIgIgBQgKAFAAAFQAAAEAEACQADABAIABIAPAAQAQgBAIAIQAJAGAAANQAAAPgOAJQgMAIgXAAQgSAAgLgHgAgYAeQgGAEAAAJQAAAIAHAEQAGAEAMAAQARAAAIgGQAKgFgBgJQABgIgGgDQgEgDgOAAIgPAAQgKAAgFAFgAgQg1QgGAFAAALQAAALAGAFQAGAFAJAAQAUAAAAgVQAAgVgUAAQgKgBgFAGg");
	this.shape_43.setTransform(-191.1,17.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeA4QgLgNAAgYQAAgWALgNQAKgNATAAQASAAAKAOIABAAIgBgHIAAgHIAAgnIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgKgNgAgTgHQgHAIAAATQAAASAHAJQAHAKAMAAQAOAAAHgJQAGgIAAgSIAAgDQAAgTgGgIQgIgJgNAAQgMAAgHAKg");
	this.shape_44.setTransform(184.7,-13);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_45.setTransform(177.2,-13.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgTIAAg9IAPAAIAAA9QAAAMAFAFQAGAGALAAQANAAAHgIQAHgIAAgTIAAgxIAPAAIAABfIgMAAIgCgNIgBAAQgFAHgIAEQgIAEgIAAQgRAAgJgJg");
	this.shape_46.setTransform(169.4,-11);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgXAMgNQAMgMATAAQAUAAAMANQAMAOAAAVQAAAXgMANQgMAOgUAAQgMgBgKgGgAgUgbQgIAJAAASQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_47.setTransform(158.5,-11);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWAkQgLgMAAgYQAAgWAMgOQALgMAUAAIAOABQAHABADACIgEANIgLgEIgKgBQgbAAAAAkQAAARAHAKQAHAJAMAAQAMAAANgEIAAAMQgKAFgOABQgTgBgMgNg");
	this.shape_48.setTransform(149,-11);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgfA4QgKgNAAgYQAAgWAKgNQALgNATAAQASAAAKAOIABAAIgBgHIAAgHIAAgnIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgLgNgAgTgHQgHAIAAATQAAASAHAJQAHAKAMAAQAOAAAGgJQAHgIAAgSIAAgDQAAgTgHgIQgGgJgOAAQgMAAgHAKg");
	this.shape_49.setTransform(134.1,-13);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACANIABAAQAFgHAIgEQAIgDAIAAQARgBAJAJQAJAIAAATIAAA9g");
	this.shape_50.setTransform(123.4,-11.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgcAsgBIARAAIAAgGQAAgLgFgGQgFgFgLgBQgJABgQAHIgFgLQAIgEAIgCQAIgCAHAAQASgBAIAIQAIAIAAARIAABAIgLAAIgDgOIgBAAQgGAJgHADQgIADgIABQgPAAgIgIgAAJAAQgPABgIAFQgIAFAAAKQAAAIAFAEQAFAEAIAAQAMAAAHgHQAJgIgBgNIAAgJg");
	this.shape_51.setTransform(112.6,-11);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_52.setTransform(100.9,-13.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgcAsgBIARAAIAAgGQAAgLgFgGQgFgFgKgBQgLABgPAHIgFgLQAIgEAIgCQAJgCAGAAQASgBAIAIQAIAIAAARIAABAIgLAAIgDgOIAAAAQgIAJgHADQgHADgJABQgOAAgIgIgAAJAAQgQABgHAFQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAHgHQAJgIAAgNIAAgJg");
	this.shape_53.setTransform(93.4,-11);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACANIABAAQAFgHAIgEQAIgDAIAAQARgBAJAJQAJAIAAATIAAA9g");
	this.shape_54.setTransform(83.2,-11.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgXAMgNQAMgMATAAQAUAAAMANQAMAOAAAVQAAAXgMANQgMAOgUAAQgMgBgKgGgAgUgbQgIAJAAASQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_55.setTransform(72.2,-11);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgvQgCgDAAgFQAAgFACgCQADgDACABQADgBADADQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_56.setTransform(64.5,-12.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AghArIAAgNQAHADAJACQAHACAIAAQAJAAAHgEQAFgDAAgHQAAgGgEgEQgFgEgMgFQgOgEgGgDQgFgEgDgFQgCgFgBgGQAAgMAKgHQAJgGAPAAQAPAAAQAFIgFANQgPgHgMAAQgIABgGADQgFADAAAGQAAADACADQACADAFADIAPAGQARAGAFAGQAHAFAAAKQgBAOgJAHQgLAIgPAAQgUgBgLgGg");
	this.shape_57.setTransform(58.1,-11);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AghArIAAgNQAHADAJACQAHACAIAAQAJAAAHgEQAFgDAAgHQAAgGgEgEQgFgEgMgFQgOgEgGgDQgFgEgDgFQgCgFgBgGQAAgMAKgHQAJgGAPAAQAPAAAQAFIgFANQgPgHgMAAQgIABgGADQgFADAAAGQAAADACADQACADAFADIAPAGQARAGAFAGQAHAFAAAKQgBAOgJAHQgLAIgPAAQgUgBgLgGg");
	this.shape_58.setTransform(49.5,-11);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgNARAAQASAAALALQAKAMAAATIAAAIIhAAAQAAARAJAIQAIAJAMAAQAQABAPgHIAAANIgOAFQgHABgKABQgTgBgNgNgAAZgIQAAgNgGgIQgHgHgLgBQgKABgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_59.setTransform(40.2,-11);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgOBEIAAhTIgRAAIAAgGIARgGIAAgFQAAgjAdAAQAHAAALADIgEALQgJgCgFAAQgJAAgDAFQgDAGAAAMIAAAGIAXAAIAAALIgXAAIAABTg");
	this.shape_60.setTransform(32.6,-13.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgLAAgPQAAgXAMgNQAMgMATAAQAUAAAMANQAMAOAAAVQAAAXgMANQgMAOgUAAQgMgBgKgGgAgUgbQgIAJAAASQAAASAIAJQAHAKANAAQAOAAAHgKQAIgJAAgSQAAgRgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_61.setTransform(23.6,-11);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgaAxIAAhfIAMAAIABASIABAAQAFgJAHgGQAHgEAJAAIALABIgCANIgKgCQgMAAgGAKQgJAJAAAPIAAAyg");
	this.shape_62.setTransform(15.6,-11.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgpBGIAAiKIAMAAIACAOIAAAAQAGgIAIgDQAHgEAIAAQATAAALANQAKANAAAYQAAAVgLAOQgLANgSAAQgIAAgHgDQgIgEgGgHIgBAAIABAPIAAAogAgTgxQgIAJAAARIAAAEQAAATAIAIQAGAJANAAQANAAAGgKQAIgJgBgRQABgTgIgJQgGgKgNABQgNAAgGAHg");
	this.shape_63.setTransform(6.1,-9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgqBEIAAgMIAKABQAPAAAHgRIAFgNIgnhfIAQAAIAVA3QAHARAAAIIAAAAIAFgNIAYhDIAQAAIgqBsQgEAQgIAHQgIAGgMAAIgNgBg");
	this.shape_64.setTransform(-8.9,-8.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_65.setTransform(-15.7,-13.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_66.setTransform(-21.2,-12.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgWAkQgLgMAAgYQAAgWAMgOQALgMAUAAIAOABQAHABADACIgEANIgLgEIgKgBQgbAAAAAkQAAARAHAKQAHAJAMAAQAMAAANgEIAAAMQgKAFgOABQgTgBgMgNg");
	this.shape_67.setTransform(-28.4,-11);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgcAsgBIARAAIAAgGQAAgLgFgGQgFgFgLgBQgJABgQAHIgFgLQAIgEAIgCQAIgCAHAAQASgBAIAIQAIAIAAARIAABAIgLAAIgDgOIgBAAQgGAJgHADQgIADgIABQgPAAgIgIgAAJAAQgPABgIAFQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAHgHQAJgIgBgNIAAgJg");
	this.shape_68.setTransform(-38.2,-11);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAaAwIgagnIgaAnIgQAAIAjgwIgigvIARAAIAYAlIAZglIARAAIgiAvIAjAwg");
	this.shape_69.setTransform(-47.6,-11.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgXQAAgVALgOQAMgNARAAQASAAALALQAKAMAAATIAAAIIhAAAQAAARAJAIQAIAJAMAAQAQABAPgHIAAANIgOAFQgHABgKABQgTgBgNgNgAAZgIQAAgNgGgIQgHgHgLgBQgKABgGAHQgHAIgCANIAxAAIAAAAg");
	this.shape_70.setTransform(-56.9,-11);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_71.setTransform(-69.9,-12.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgMAWQAHgYACgSIAOAAIACABIgHATIgHAWg");
	this.shape_72.setTransform(-74.5,-16.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACANIABAAQAFgHAIgEQAIgDAIAAQARgBAJAJQAJAIAAATIAAA9g");
	this.shape_73.setTransform(-81.3,-11.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AghArIAAgNQAIADAIACQAHACAIAAQAJAAAGgEQAHgDgBgHQABgGgGgEQgEgEgNgFQgNgEgGgDQgFgEgDgFQgCgFgBgGQAAgMAKgHQAJgGAPAAQAQAAAOAFIgEANQgPgHgMAAQgIABgGADQgFADAAAGQAAADACADQACADAEADIAPAGQASAGAGAGQAFAFABAKQAAAOgLAHQgJAIgRAAQgSgBgMgGg");
	this.shape_74.setTransform(-91.1,-11);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgvQgCgDAAgFQAAgFACgCQADgDACABQADgBADADQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_75.setTransform(-97.7,-12.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AggArIAAgNQAGADAIACQAIACAIAAQAJAAAGgEQAHgDAAgHQAAgGgGgEQgEgEgNgFQgNgEgGgDQgFgEgDgFQgDgFABgGQAAgMAJgHQAKgGAOAAQAPAAAPAFIgEANQgPgHgMAAQgIABgFADQgGADAAAGQAAADACADQACADAEADIAPAGQARAGAHAGQAFAFAAAKQAAAOgKAHQgKAIgQAAQgSgBgLgGg");
	this.shape_76.setTransform(-108.8,-11);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgvQgCgDAAgFQAAgFACgCQADgDACABQADgBADADQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_77.setTransform(-115.5,-12.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAZBEIAAg/QAAgJgFgGQgGgGgLABQgNAAgHAHQgHAIAAARIAAAzIgPAAIAAiHIAPAAIAAApIgBANIABAAQAEgHAIgEQAIgEAIAAQASAAAJAIQAJAJAAAQIAAA/g");
	this.shape_78.setTransform(-123.2,-13.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgGBAIAAhxIgpAAIAAgOIBfAAIAAAOIgpAAIAABxg");
	this.shape_79.setTransform(-133.7,-12.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgGAJQgDgDAAgGQAAgEACgDQADgEAEABQAEgBADAEQADADAAAEQAAAFgDADQgDADgEAAQgEAAgCgCg");
	this.shape_80.setTransform(-145.7,-7.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgMQAAgKAFgGQAGgHALgCQgFgBgCgDQgDgEABgFQAAgFACgCQAEgEAFgEQgHgDgFgHQgEgIgBgJQAAgQAKgJQAJgIASAAQAFAAAHABIAhAAIAAAKIgSACIAEAIQACAFAAAHQABANgLAJQgJAIgPAAIgIgBQgKAFAAAGQABAEADACQADABAIAAIAPAAQAQABAIAGQAJAHgBAMQAAAQgMAJQgNAIgWAAQgUAAgKgHgAgYAdQgGAGAAAIQAAAIAHAEQAGAEANAAQAQAAAJgGQAIgFABgKQAAgHgGgDQgEgDgOAAIgPAAQgKAAgFAEgAgRg1QgFAGAAALQAAAKAFAFQAGAFAKAAQAUAAAAgUQAAgXgUAAQgKAAgGAGg");
	this.shape_81.setTransform(-153,-9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAZAxIAAg9QAAgMgFgFQgGgGgLAAQgNAAgHAIQgHAIAAATIAAAxIgPAAIAAhfIAMAAIACANIABAAQAFgHAIgEQAIgDAIAAQARgBAJAJQAJAIAAATIAAA9g");
	this.shape_82.setTransform(-163.4,-11.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgvQgCgDAAgFQAAgFACgCQADgDACABQADgBADADQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_83.setTransform(-171.2,-12.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgvQgCgDAAgFQAAgFACgCQADgDACABQADgBADADQACACAAAFQAAAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_84.setTransform(-175.8,-12.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAVBEIggguIgLAKIAAAkIgPAAIAAiHIAPAAIAABHIgCAPIACAAIALgPIAdgfIARAAIgkAoIAnA3g");
	this.shape_85.setTransform(-182,-13.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AggArIAAgNQAGADAIACQAIACAIAAQAJAAAGgEQAHgDAAgHQAAgGgGgEQgEgEgNgFQgNgEgGgDQgFgEgDgFQgDgFABgGQAAgMAJgHQAKgGAOAAQAPAAAPAFIgEANQgPgHgMAAQgIABgFADQgGADAAAGQAAADACADQACADAEADIAPAGQARAGAHAGQAFAFAAAKQAAAOgKAHQgKAIgQAAQgSgBgLgGg");
	this.shape_86.setTransform(-191.6,-11);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgGAJAAIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_87.setTransform(173.1,-37.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASABALAMQAKALAAATIAAAIIhAAAQAAARAJAJQAIAJAMAAQAQgBAPgGIAAANIgOAFQgHABgKAAQgTAAgNgMgAAZgIQAAgOgGgHQgHgIgLABQgKgBgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_88.setTransform(163.8,-37.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgNAeIAAg3IgOAAIAAgHIAOgGIAGgVIAHAAIAAAWIAbAAIAAAMIgbAAIAAA2QAAAJADAFQAFAEAHAAIAHAAIAGgBIAAALIgHACIgIABQgaAAAAgeg");
	this.shape_89.setTransform(155.5,-38.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgOBEIAAhTIgSAAIAAgGIASgGIAAgFQAAgjAdAAQAIAAAKADIgEALQgJgCgFAAQgIAAgFAFQgCAGAAAMIAAAGIAXAAIAAALIgXAAIAABTg");
	this.shape_90.setTransform(149.9,-39.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgcAtAAIAQgBIAAgGQAAgMgFgFQgFgGgLABQgKgBgPAIIgEgLQAGgEAJgCQAIgCAHgBQARAAAJAIQAIAIAAARIAAA/IgLAAIgDgNIgBAAQgHAJgGADQgIAEgIgBQgPABgIgIgAAJABQgPABgIAEQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAHgIQAIgGAAgOIAAgJg");
	this.shape_91.setTransform(141,-37.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgGAJAAIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_92.setTransform(128.7,-37.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASABALAMQAKALAAATIAAAIIhAAAQAAARAJAJQAIAJAMAAQAQgBAPgGIAAANIgOAFQgHABgKAAQgTAAgNgMgAAZgIQAAgOgGgHQgHgIgLABQgKgBgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_93.setTransform(119.4,-37.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASABALAMQAKALAAATIAAAIIhAAAQAAARAJAJQAIAJAMAAQAQgBAPgGIAAANIgOAFQgHABgKAAQgTAAgNgMgAAZgIQAAgOgGgHQgHgIgLABQgKgBgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_94.setTransform(109.3,-37.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgNBBQgIgDgGgIIgBAAIgDANIgKAAIAAiHIAOAAIAAAhIAAAUIAAAAQALgOASAAQATAAAKANQALANAAAVQAAAYgLANQgKAOgTAAQgIAAgHgEgAgUgIQgHAIAAASQABAVAGAJQAHAJANgBQAOABAGgKQAHgKAAgTQAAgSgHgIQgGgJgOAAQgOAAgGAJg");
	this.shape_95.setTransform(99.1,-39.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgdAqQgIgIAAgNQAAgcAsAAIARgBIAAgGQAAgMgFgFQgFgGgLABQgJgBgQAIIgFgLQAIgEAIgCQAIgCAHgBQASAAAIAIQAIAIAAARIAAA/IgLAAIgDgNIgBAAQgGAJgHADQgIAEgIgBQgPABgIgIgAAJABQgPABgIAEQgIAFAAAKQAAAIAFAEQAEAEAJAAQAMAAAHgIQAJgGgBgOIAAgJg");
	this.shape_96.setTransform(83.3,-37.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgiA/QgKgHAAgNQAAgIAFgHQAGgGAKgCQgDgCgDgEQgCgEgBgEQAAgFADgCQAEgEAFgEQgHgDgFgIQgFgGAAgKQAAgQAKgIQAKgJARAAQAGAAAFACIAiAAIAAAJIgSACIAEAIQACAFAAAGQAAAPgKAIQgJAJgPAAIgIgBQgKAEAAAGQAAAEAEACQADABAIABIAPAAQAQgBAIAIQAJAGAAANQAAAPgOAJQgMAIgWAAQgTAAgLgHgAgYAeQgGAEAAAJQAAAIAHAEQAGAEANAAQAQAAAIgFQAKgGAAgJQAAgIgGgDQgEgDgOAAIgPAAQgKAAgFAFgAgQg1QgGAGAAAKQAAAKAGAGQAGAFAJAAQAUAAAAgVQAAgVgUAAQgKAAgFAFg");
	this.shape_97.setTransform(69,-35.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACAOIABAAQAFgIAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_98.setTransform(58.7,-37.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgDACAAQADAAADADQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_99.setTransform(50.8,-39.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAUBEIgfgtIgMAJIAAAkIgOAAIAAiHIAOAAIAABHIgBAOIABAAIAMgNIAdgfIARAAIgkAmIAnA4g");
	this.shape_100.setTransform(44.6,-39.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAheIAMAAIACAOIABAAQAFgIAIgDQAIgFAIAAQARAAAJAJQAJAIAAASIAAA9g");
	this.shape_101.setTransform(33.7,-37.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgDACAAQADAAADADQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_102.setTransform(25.9,-39.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgGAJAAIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_103.setTransform(20.6,-37.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgeA4QgLgNAAgYQAAgVALgOQAKgNATAAQASAAAKAOIABAAIgBgHIAAgGIAAgoIAPAAIAACHIgMAAIgCgNIgBAAQgKAPgSAAQgTAAgKgNgAgTgHQgHAIAAASQAAATAHAJQAHAKAMgBQAOAAAHgHQAGgJAAgSIAAgDQAAgTgGgIQgIgJgNAAQgMAAgHAKg");
	this.shape_104.setTransform(10.6,-39.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AA2AwIAAg8QAAgLgFgHQgFgFgLAAQgNAAgHAHQgGAJAAAPIAAA0IgNAAIAAg8QAAgLgFgHQgFgFgKAAQgOAAgGAIQgHAIAAATIAAAwIgOAAIAAheIAMAAIACAOIABAAQAEgIAHgDQAIgFAJAAQAXAAAFARIAAAAQAFgIAIgEQAIgEAKgBQARAAAIAJQAIAIAAASIAAA9g");
	this.shape_105.setTransform(-7.6,-37.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgDACAAQADAAADADQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_106.setTransform(-18.3,-39.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAZBEIAAg+QAAgKgFgGQgGgFgLgBQgNAAgHAIQgHAIAAARIAAAzIgPAAIAAiHIAPAAIAAApIgBANIABAAQAEgHAIgEQAIgEAIAAQASAAAJAJQAJAIAAAQIAAA/g");
	this.shape_107.setTransform(-26,-39.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AggArIAAgOQAGAEAIACQAIACAIAAQAJAAAGgDQAHgEAAgIQAAgFgGgEQgEgEgNgGQgNgDgGgEQgFgDgDgFQgDgFABgGQAAgMAJgHQAKgHAOAAQAPAAAPAHIgEALQgPgFgMAAQgIAAgFADQgGADAAAGQAAADACAEQACACAEACIAPAHQARAGAHAFQAFAHAAAJQAAANgKAIQgKAIgQgBQgSABgLgHg");
	this.shape_108.setTransform(-40.4,-37.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAXAwIgRg3IgGgXIAAAAIgFAXIgSA3IgRAAIgahfIAPAAIAOA2QAFATABAGIABAAIACgNIAEgMIASg2IANAAIASA2QAFAPABAKIABAAIACgKIAShFIAPAAIgaBfg");
	this.shape_109.setTransform(-51.8,-37.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgMQAMgNATgBQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAKQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_110.setTransform(-63.9,-37.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAZBEIAAg+QAAgKgFgGQgGgFgLgBQgNAAgHAIQgHAIAAARIAAAzIgPAAIAAiHIAPAAIAAApIgBANIABAAQAEgHAIgEQAIgEAIAAQASAAAJAJQAJAIAAAQIAAA/g");
	this.shape_111.setTransform(-74.7,-39.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AghArIAAgOQAHAEAIACQAJACAHAAQAJAAAHgDQAFgEAAgIQAAgFgEgEQgFgEgMgGQgOgDgFgEQgGgDgDgFQgDgFAAgGQAAgMAKgHQAKgHAOAAQAQAAAPAHIgGALQgOgFgMAAQgIAAgGADQgFADAAAGQAAADACAEQACACAFACIAPAHQARAGAFAFQAHAHAAAJQAAANgKAIQgLAIgPgBQgUABgLgHg");
	this.shape_112.setTransform(-84.5,-37.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgbAlQgMgOAAgXQAAgVALgOQAMgOARAAQASABALAMQAKALAAATIAAAIIhAAAQAAARAJAJQAIAJAMAAQAQgBAPgGIAAANIgOAFQgHABgKAAQgTAAgNgMgAAZgIQAAgOgGgHQgHgIgLABQgKgBgGAIQgHAHgCAOIAxAAIAAAAg");
	this.shape_113.setTransform(-98.5,-37.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_114.setTransform(-105.8,-39.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgwQgCgCAAgFQAAgFACgCQADgDACAAQADAAADADQACACAAAFQAAAFgCACQgDADgDAAQgCAAgDgDg");
	this.shape_115.setTransform(-110.4,-39.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgOBEIAAhTIgRAAIAAgGIARgGIAAgFQAAgjAdAAQAHAAAKADIgDALQgIgCgHAAQgHAAgEAFQgDAGAAAMIAAAGIAXAAIAAALIgXAAIAABTg");
	this.shape_116.setTransform(-115.1,-39.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgMQAMgNATgBQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAKQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_117.setTransform(-124.1,-37.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAMAAIABASIABAAQAFgKAHgEQAHgGAJAAIALABIgCAOIgKgBQgMAAgGAJQgJAKAAAOIAAAxg");
	this.shape_118.setTransform(-132.2,-37.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgpBGIAAiJIAMAAIACANIAAAAQAGgIAIgEQAHgDAIAAQATAAAKANQALANAAAXQAAAWgLANQgKAOgTAAQgIAAgHgEQgIgDgGgIIgBAAIABAQIAAAogAgUgxQgGAJgBASIAAACQABAUAGAIQAHAJANgBQAMAAAIgKQAGgHABgTQgBgSgGgJQgIgKgMAAQgNAAgHAIg");
	this.shape_119.setTransform(-141.7,-35.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AghArIAAgOQAIAEAIACQAHACAIAAQAJAAAGgDQAHgEgBgIQABgFgGgEQgEgEgNgGQgNgDgGgEQgFgDgDgFQgCgFgBgGQAAgMAKgHQAJgHAPAAQAQAAAOAHIgEALQgPgFgMAAQgIAAgGADQgFADAAAGQAAADACAEQACACAEACIAPAHQASAGAGAFQAFAHABAJQAAANgLAIQgJAIgRgBQgSABgMgHg");
	this.shape_120.setTransform(-156.3,-37.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgMAVQAHgWACgUIAOAAIACADIgHASIgHAVg");
	this.shape_121.setTransform(-161.7,-43.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgNBBQgIgDgGgIIgBAAIgDANIgKAAIAAiHIAOAAIAAAhIAAAUIAAAAQALgOASAAQATAAAKANQALANAAAVQAAAYgLANQgKAOgTAAQgIAAgHgEgAgUgIQgHAIAAASQABAVAGAJQAHAJANgBQAOABAGgKQAHgKAAgTQAAgSgHgIQgGgJgOAAQgOAAgGAJg");
	this.shape_122.setTransform(-168.2,-39.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgGgMAAgOQAAgXAMgMQAMgNATgBQAUAAAMAOQAMAOAAAVQAAAXgMANQgMANgUAAQgMABgKgHgAgUgbQgIAKAAARQAAASAIAKQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAJg");
	this.shape_123.setTransform(-179.5,-37.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAbBAIgdg2IgbAAIAAA2IgPAAIAAh/IAkAAQAVAAAMAJQALAJAAATQAAAZgaAHIAjA6gAgdgBIAVAAQAOAAAHgGQAHgGAAgNQAAgMgHgGQgIgGgOAAIgUAAg");
	this.shape_124.setTransform(-189.7,-39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.instance = new lib.gfcContentBg("synched",0);
	this.instance.alpha = 0.852;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-92,425.1,184.1);


(lib.btnNo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// number
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBaIAAgsQAMAFAPAEQAPADALAAQAPAAAGgGQAIgGAAgNQAAgLgIgHQgGgGgRAAQgNAAgOAFIgUgKIAHhoIBwAAIAAAtIhCAAIgCAbIANgCIAJgBQAQAAAOAIQAPAIAHAPQAIANAAATQAAAhgVASQgTASgnAAQgjAAgXgLg");
	this.shape.setTransform(-0.1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// bg
	this.instance = new lib.gfcEllipseBase("synched",0);

	this.instance_1 = new lib.mvEllipseBaseOver();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{mode:"synched",startPosition:0}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},1).to({state:[{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.btnNo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// number
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACBkIAAgnIhOAAIAAgoIBRh4IAyAAIAAB4IAWAAIAAAoIgWAAIAAAngAgIgLIgWAgIAgAAIAAgWIAAgSIABgLIgCAAQgCAKgHAJg");
	this.shape.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// bg
	this.instance = new lib.gfcEllipseBase("synched",0);

	this.instance_1 = new lib.mvEllipseBaseOver();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{mode:"synched",startPosition:0}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},1).to({state:[{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.btnNo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// number
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBkQgOgCgQgGIAAgtQANAHAOADQANADAMAAQARAAAHgFQAIgFAAgLQAAgIgEgEQgEgFgIgCQgKgCgOAAIgNAAIAAgnIANAAQAnAAAAgVQAAgIgGgEQgGgEgIAAQgUAAgUANIgWgkQAPgLARgEQARgFAUAAQAeAAARAMQASANAAAVQAAATgLANQgMANgVAGIAAABQAyAFAAApQAAAbgWAQQgWAQgmAAQgPAAgOgCg");
	this.shape.setTransform(-0.2,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// bg
	this.instance = new lib.gfcEllipseBase("synched",0);

	this.instance_1 = new lib.mvEllipseBaseOver();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{mode:"synched",startPosition:0}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},1).to({state:[{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.btnNo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// number
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBlIAAgkIAxgxIAZgcQAHgIACgFQADgHAAgGQAAgHgFgFQgFgFgIABQgJgBgKAGQgJAGgMAKIgegjQAPgOALgFQAKgHANgCQAMgEAOAAQATAAAPAHQAQAHAIAMQAIANAAAQQAAALgDAKQgDAKgGAKQgGAIgKAKQgKALgfAeIAAABIBJAAIAAAtg");
	this.shape.setTransform(-0.3,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// bg
	this.instance = new lib.gfcEllipseBase("synched",0);

	this.instance_1 = new lib.mvEllipseBaseOver();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{mode:"synched",startPosition:0}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},1).to({state:[{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.btnNo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// number
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADBkIAAhoIABgjIgLAMIgWATIgcgiIBCg5IAxAAIAADHg");
	this.shape.setTransform(-1.3,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// bg
	this.instance = new lib.gfcEllipseBase("synched",0);

	this.instance_1 = new lib.mvEllipseBaseOver();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{mode:"synched",startPosition:0}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},1).to({state:[{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,54,54);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// bg
	this.bg = new lib.gfcProfile();
	this.bg.setTransform(0,0,0.018,0.018);
	this.bg.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1).to({scaleX:0.02,scaleY:0.02,alpha:0.099},0).wait(1).to({scaleX:0.05,scaleY:0.05,alpha:0.189},0).wait(1).to({scaleX:0.08,scaleY:0.08,alpha:0.269},0).wait(1).to({scaleX:0.13,scaleY:0.13,alpha:0.342},0).wait(1).to({scaleX:0.19,scaleY:0.19,alpha:0.408},0).wait(1).to({scaleX:0.26,scaleY:0.26,alpha:0.467},0).wait(1).to({scaleX:0.35,scaleY:0.35,alpha:0.52},0).wait(1).to({scaleX:0.45,scaleY:0.45,alpha:0.568},0).wait(1).to({scaleX:0.57,scaleY:0.57,alpha:0.611},0).wait(1).to({scaleX:0.7,scaleY:0.7,alpha:0.65},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.686},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.719},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.749},0).wait(1).to({scaleX:0.68,scaleY:0.68,alpha:0.777},0).wait(1).to({scaleX:0.64,scaleY:0.64,alpha:0.803},0).wait(1).to({scaleX:0.68,scaleY:0.68,alpha:0.827},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.851},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.873},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.895},0).wait(1).to({scaleX:0.87,scaleY:0.87,alpha:0.916},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.937},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.958},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.979},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,14.1,14.1);


// stage content:



(lib.twitter_profile_800x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{content1:74,content2:95,content3:115,content4:135,content5:155});

	// timeline functions:
	this.frame_73 = function() {
		this.stop();
		
		this.btn1.addEventListener("click", content1.bind(this));
		
		function content1() {
			this.gotoAndPlay("content1");
		}
		
		this.btn2.addEventListener("click", content2.bind(this));
		
		function content2() {
			this.gotoAndPlay("content2");
		}
		
		this.btn3.addEventListener("click", content3.bind(this));
		
		function content3() {
			this.gotoAndPlay("content3");
		}
		
		this.btn4.addEventListener("click", content4.bind(this));
		
		function content4() {
			this.gotoAndPlay("content4");
		}
		
		this.btn5.addEventListener("click", content5.bind(this));
		
		function content5() {
			this.gotoAndPlay("content5");
		}
	}
	this.frame_94 = function() {
		this.stop();
	}
	this.frame_114 = function() {
		this.stop();
	}
	this.frame_134 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_174 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(21).call(this.frame_94).wait(20).call(this.frame_114).wait(20).call(this.frame_134).wait(20).call(this.frame_154).wait(20).call(this.frame_174).wait(1));

	// content5
	this.instance = new lib.mvContent5();
	this.instance.setTransform(343.5,447);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(1));

	// content4
	this.instance_1 = new lib.mvContent4();
	this.instance_1.setTransform(345.1,372);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).to({_off:false},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(20));

	// content3
	this.instance_2 = new lib.mvContent3();
	this.instance_2.setTransform(350.5,279.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({_off:false},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(40));

	// content2
	this.instance_3 = new lib.mvContent2();
	this.instance_3.setTransform(350.1,200);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({_off:false},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(60));

	// content1
	this.instance_4 = new lib.mvContent1("synched",0);
	this.instance_4.setTransform(337.1,133.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(80));

	// button5
	this.btn5 = new lib.btnNo5();
	this.btn5.setTransform(596,566);
	this.btn5.alpha = 0;
	this.btn5._off = true;
	new cjs.ButtonHelper(this.btn5, 0, 1, 2, false, new lib.btnNo5(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn5).wait(55).to({_off:false},0).to({alpha:1},16).wait(104));

	// button4
	this.btn4 = new lib.btnNo4();
	this.btn4.setTransform(596,484);
	this.btn4.alpha = 0;
	this.btn4._off = true;
	new cjs.ButtonHelper(this.btn4, 0, 1, 2, false, new lib.btnNo4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn4).wait(49).to({_off:false},0).to({alpha:1},22).wait(104));

	// button3
	this.btn3 = new lib.btnNo3();
	this.btn3.setTransform(596,404);
	this.btn3.alpha = 0;
	this.btn3._off = true;
	new cjs.ButtonHelper(this.btn3, 0, 1, 2, false, new lib.btnNo3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn3).wait(44).to({_off:false},0).to({alpha:1},27).wait(104));

	// button2
	this.btn2 = new lib.btnNo2();
	this.btn2.setTransform(596,319);
	this.btn2.alpha = 0;
	this.btn2._off = true;
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.btnNo2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(40).to({_off:false},0).to({alpha:1},31).wait(104));

	// button1
	this.btn1 = new lib.btnNo1();
	this.btn1.setTransform(37,146);
	this.btn1.alpha = 0;
	this.btn1._off = true;
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.btnNo1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(36).to({_off:false},0).to({alpha:1},35).wait(104));

	// background
	this.instance_5 = new lib.background();
	this.instance_5.setTransform(400,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(175));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(793,493,14.1,14.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;