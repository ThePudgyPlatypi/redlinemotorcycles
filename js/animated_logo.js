(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A71F24").s().p("AueESQB7ihA4iYIaKjtQhMENjbEcg");
	this.shape.setTransform(201,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgtSAOKICKghQAJgCACgHQADgHgIACIiLAhQBYjaCyjkID7ACQANAAAKgMQAEgFgBgEQgBgDgFAAIj9gBQCzjfD/jYIBXAiIADAAQAFgBAGgEQAIgIgFgBIhXghQEOjjFVjNIBVCZQABAEAHgBQAGgBAJgFQAIgEAEgGQAFgFgCgDIhXiaQFujYGcirIgbB2QgCAFAJgCIAFgCQAOgFABgHIAbh2QHajCHnhyIkOFWQgFAHADADQAEAEALgCQAJgCAMgGQALgGAFgHIESlZQI0h/HzgCIkaDSQgGAFgBADQAAAEAHAAIAHgBQAOgCALgJIEcjSQEhABD4AtQD8AtDHBXIuSGoQgRAIgGAIQgHAJAHAEQAIAFAPgDQAQgCARgIIOcmpQDaBoCFCXQCICbAlDEIp2CaQgOAEgJAGQgJAFABAFQABAIAUgCIANgCIJ3iZQAcCzg5DII6KDsQBJjHgtilQgsikidhzQjBiNlCgmQk4glmDBAQlFA2lKB2QlBBzklCkQi1BlieByQksDXi8DtQiKCug9CnQg9CoAXCSIoCDvQgNjLBXjeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tach, new cjs.Rectangle(-297.4,-133,594.8,266.2), null);


(lib.Redline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ak3EJIEioRIFNAAIhCB5IilAAIghA6ICXAAIhDB4IiUAAIg9BuIClAAIhCB4g");
	this.shape.setTransform(108.2,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhuEJIA+j5IiID5IiZAAIEioRIClAAIg1DbIB3jbICaAAIkiIRg");
	this.shape_1.setTransform(68.3,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AjkEJIEhoRICoAAIkhIRg");
	this.shape_2.setTransform(36.6,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AjkEJIEhoRICoAAIjgGZIBoAAIhCB4g");
	this.shape_3.setTransform(6.5,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("Ak9EJIEioRIETAAQAdAAAQAGQARAIAFANQAFAOgGAVQgFAXgRAdIidEfQgnBIgnAcQgUAPgYAGQgYAHgeAAgAhSCQIATAAQAOAAAJgJQAKgIALgVIBzjTQAMgWAAgIQgBgIgOAAIgSAAg");
	this.shape_4.setTransform(-26.7,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("Ak3EJIEioRIFNAAIhCB5IimAAIgfA6ICWAAIhDB4IiUAAIg8BuICkAAIhCB4g");
	this.shape_5.setTransform(-65.2,-1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhoEJIBji1QAKgUAAgJQgBgJgNAAIgSAAIh4DbIioAAIEioRIEQAAQAdAAAQAHQARAIAFAPQAFAOgHAYQgHAZgSAhQgPAbgPAUQgPATgQAQQgQAOgTAJQgSAKgWAGQAfALgCAhQgCAiglBDIhLCJgAAjhEIATAAQANAAAKgJQAKgIALgUQAMgWgBgIQAAgIgOAAIgTAAg");
	this.shape_6.setTransform(-107,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Redline, new cjs.Rectangle(-151.8,-43,303.7,86), null);


(lib.needle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A71F24").s().p("AgsAtQgTgSAAgbQAAgaATgSQASgTAaAAQAaAAATATQATASAAAaQAAAbgTASQgTATgaAAQgaAAgSgTg");
	this.shape.setTransform(227.9,0,1,1.008);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A71F24").s().p("EgkHABBIAAiBMBIPAAAIAACBg");
	this.shape_1.setTransform(-3.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.needle, new cjs.Rectangle(-234.3,-6.5,468.6,13), null);


(lib.Motorcycles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Aj8EmQgzAAgKgcQgJgbAfg2IA8hqICnAAIgXApQgYAqAUAAQAKAAAMgLQAKgKAOgYIAMgWQAFgKABgGQAAgGgCgFQgDgGgGgFIhNg+QgbgXABgYQACgbAZgsIAkg+QAeg1AqgcQApgbAyAAICoAAQAzAAAKAbQAKAcgfA1IgnBFIimAAIAEgHQAWgngVAAQgJAAgKAIQgJAHgIANIgFALQgCAFAAAEIAEAJQADAFAHAFIBXBOQAIAIADAJQADAKgDAOQgCAOgKAVQgJATgPAcIglBAQgmBBgpAeQgpAdg1AAg");
	this.shape.setTransform(200.3,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AlIEjIFNpFIFEAAIhMCFIigAAIglBAICSAAIhNCDIiRAAIhFB4ICgAAIhLCFg");
	this.shape_1.setTransform(161.5,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("Aj3EjIFNpFICiAAIkBHAIBkAAIhMCFg");
	this.shape_2.setTransform(124.2,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("Aj/EmQg0AAgHgeQgGgeAlhBIC7lEQAWglAUgbQAVgbAVgQQAVgQAWgIQAYgHAbAAICqAAQAdAAAQAHQARAIACAPQAEAggsBNIgsBMIimAAIAZgqQANgXAAgKQABgJgLAAQgLAAgLAKQgKAJgNAXIiKDwQgNAXgBAKQAAAKALAAQAVAAAYgrIAmhDIClAAIhCB0QgUAigTAXQgTAYgVAPQgUAPgYAHQgYAHgcAAg");
	this.shape_3.setTransform(93.7,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("Ak0EjIB+jdIBXloICeAAIgkCMIB8iMICeAAIlHFoIh/Ddg");
	this.shape_4.setTransform(59.6,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("Aj/EmQg0AAgHgeQgGgeAlhBIC7lEQAWglAUgbQAVgbAVgQQAVgQAWgIQAYgHAbAAICqAAQAdAAAQAHQARAIACAPQAEAggsBNIgsBMIimAAIAZgqQANgXAAgKQABgJgLAAQgLAAgLAKQgKAJgNAXIiKDwQgNAXgBAKQAAAKALAAQAVAAAYgrIAmhDIClAAIhCB0QgUAigTAXQgTAYgVAPQgUAPgYAHQgYAHgcAAg");
	this.shape_5.setTransform(13.5,-1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("Ah9EjIByjGQAMgYAAgJQABgJgNgBIgSAAIiKDxIijAAIFNpFIEIAAQAdAAAPAIQAQAIADARQADAQgJAaQgKAbgVAkQgQAegRAVQgQAXgRAPQgSARgSAKQgTALgWAGQAdAMgFAkQgGAlgqBLIhWCWgAArhLIASAAQANAAALgJQAKgKANgWQANgXAAgJQABgJgOAAIgSAAg");
	this.shape_6.setTransform(-29.3,-1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AkAEmQgcAAgOgHQgPgIgCgQQgCgRAKgbQAKgaAVgmIC8lFQAlhBAogdQAogdA0AAICqAAQAcAAAQAGQAQAHAEAPQAEAPgIAYQgIAXgTAhIi7FFQgsBNgpAgQgUAPgYAIQgZAHgdAAgABHiYQgKAJgNAXIiKDwQgNAXAAAJQgBAKALAAQALAAALgKQAKgJANgXICKjwQAYgqgVAAQgLAAgLAKg");
	this.shape_7.setTransform(-67.9,-1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AkhEjIECnAIhUAAIBMiFIFJAAIhMCFIhUAAIkBHAg");
	this.shape_8.setTransform(-102.1,-1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AkAEmQgcAAgOgHQgPgIgCgQQgCgRAKgbQAKgaAVgmIC8lFQAlhBAogdQAogdA0AAICqAAQAcAAAQAGQAQAHAEAPQAEAPgIAYQgIAXgTAhIi7FFQgsBNgpAgQgUAPgYAIQgZAHgdAAgABHiYQgKAJgNAXIiKDwQgNAXAAAJQgBAKALAAQALAAALgKQAKgJANgXICKjwQAYgqgVAAQgLAAgLAKg");
	this.shape_9.setTransform(-144.5,-1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("Ag8EjIC3lAIjzFAIhcAAIB7lAIi3FAIiSAAIFOpFIDOAAIheDyIC4jyIDPAAIlOJFg");
	this.shape_10.setTransform(-192,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Motorcycles, new cjs.Rectangle(-248.3,-47.1,496.8,94.3), null);


(lib.Center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah0DHQhEgCgOg7QgPg7AthQQAuhRBRg5QBPg6BGgCQBIgBASA7QASA7gwBTQgwBVhUA6QhPA4hCAAIgHgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Center, new cjs.Rectangle(-20.3,-19.9,40.6,39.9), null);


// stage content:
(lib.animated_logo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Redline
	this.instance = new lib.Redline();
	this.instance.parent = this;
	this.instance.setTransform(-278.4,169.5,1,1,0,0,0,-139.6,24);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.4,regY:-1.4,x:-78.6,y:144.1},0).wait(1).to({x:-33.5},0).wait(1).to({x:0.5},0).wait(1).to({x:26.4},0).wait(1).to({x:46.6},0).wait(1).to({x:63},0).wait(1).to({x:77},0).wait(1).to({x:89.6},0).wait(1).to({x:101.5},0).wait(1).to({x:113.1},0).wait(1).to({x:124.5},0).wait(1).to({x:135.9},0).wait(1).to({x:147.4},0).wait(1).to({x:158.8,alpha:0.167},0).wait(1).to({x:170.4,alpha:0.333},0).wait(1).to({x:182.2,alpha:0.5},0).wait(1).to({x:194.8,alpha:0.667},0).wait(1).to({x:208.8,alpha:0.833},0).wait(1).to({x:225.2,alpha:1},0).wait(1).to({x:245.5},0).wait(1).to({x:271.4},0).wait(1).to({x:296},0).wait(3));

	// Motorcycles
	this.instance_1 = new lib.Motorcycles();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1110.1,237.5,1,1,0,0,0,210.2,14.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-1,regY:-1.4,x:822.7,y:221.2},0).wait(1).to({x:765.2},0).wait(1).to({x:721.9},0).wait(1).to({x:688.9},0).wait(1).to({x:663.1},0).wait(1).to({x:642.1},0).wait(1).to({x:624.3},0).wait(1).to({x:608.3},0).wait(1).to({x:593.1},0).wait(1).to({x:578.4},0).wait(1).to({x:563.9},0).wait(1).to({x:549.3},0).wait(1).to({x:534.7},0).wait(1).to({x:520.1,alpha:0.167},0).wait(1).to({x:505.4,alpha:0.333},0).wait(1).to({x:490.3,alpha:0.5},0).wait(1).to({x:474.2,alpha:0.667},0).wait(1).to({x:456.4,alpha:0.833},0).wait(1).to({x:435.5,alpha:1},0).wait(1).to({x:409.7},0).wait(1).to({x:376.7},0).wait(1).to({x:345.3,y:221.3},0).wait(3));

	// Center
	this.instance_2 = new lib.Center();
	this.instance_2.parent = this;
	this.instance_2.setTransform(129.3,179.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25));

	// Needle Ref
	this.instance_3 = new lib.needle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(133,180.8,0.304,0.995,0,-179.5,148.9,-230.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,scaleX:0.3,scaleY:0.99,skewX:-178.5,skewY:149.9,x:72.6,y:215.8},0).wait(1).to({scaleX:0.29,scaleY:0.98,skewX:-174.7,skewY:153.7,x:73.7,y:210.1},0).wait(1).to({scaleX:0.27,scaleY:0.97,skewX:-168.6,skewY:159.8,x:75.6,y:201.9},0).wait(1).to({scaleX:0.23,scaleY:0.96,skewX:-160.3,skewY:168.2,x:81.9,y:191.5},0).wait(1).to({scaleX:0.19,scaleY:0.96,skewX:-149.7,skewY:178.8,x:89.3,y:181.7},0).wait(1).to({scaleX:0.16,scaleY:0.95,skewX:-136.7,skewY:191.7,x:96.1,y:173.2},0).wait(1).to({scaleX:0.14,scaleY:0.85,skewX:-133.8,skewY:207.1,x:103.9,y:165.9},0).wait(1).to({scaleX:0.14,scaleY:0.85,skewX:-126.6,skewY:224.9,x:110.8,y:158.7},0).wait(1).to({scaleX:0.15,scaleY:0.79,skewX:-121.5,skewY:245.9,x:119.2,y:150.1},0).wait(1).to({scaleX:0.18,scaleY:1.04,skewX:-119.1,skewY:271.3,x:133.9,y:139.2},0).wait(1).to({scaleX:0.29,scaleY:1.03,skewX:-101.9,skewY:299.2,x:165.4,y:122.8},0).wait(1).to({scaleX:0.58,scaleY:1.41,skewX:-95.6,skewY:321.6,x:238,y:97.6},0).wait(1).to({scaleX:0.96,scaleY:1.15,skewX:-70.5,skewY:337.7,x:337.9,y:96.9},0).wait(1).to({scaleX:1.08,scaleY:0.76,skewX:-12.1,skewY:348.8,x:376.4,y:132.4},0).wait(1).to({scaleX:1.05,scaleY:0.76,skewX:3.2,skewY:355.6,x:373.3,y:162.1},0).wait(1).to({scaleX:0.99,scaleY:0.78,skewX:14.4,skewY:359,x:361.2,y:176.9},0).wait(1).to({scaleY:0.85,skewX:1.3,skewY:360,y:180.8},0).wait(1).to({skewX:1.3},0).wait(7));

	// Tach (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtSAOKICKghQAJgCACgHIAAAAQADgHgIACIAAAAIiLAhQBYjaCyjkIAAAAID7ACQANAAAKgMIAAAAQAEgFgBgEIAAAAQgBgDgFAAIAAAAIj9gBQCzjfD/jYIAAAAIBXAiIADAAQAFgBAGgEIAAAAQAIgIgFgBIAAAAIhXghQEOjjFVjNIAAAAIBVCZQABAEAHgBIAAAAQAGgBAJgFIAAAAQAIgEAEgGIAAAAQAFgFgCgDIAAAAIhXiaQFujYGcirIAAAAIgbB2QgCAFAJgCIAAAAIAFgCQAOgFABgHIAAAAIAbh2QHajCHnhyIAAAAIkOFWQgFAHADADIAAAAQAEAEALgCIAAAAQAJgCAMgGIAAAAQALgGAFgHIAAAAIESlZQI0h/HzgCIAAAAIkaDSQgGAFgBADIAAAAQAAAEAHAAIAAAAIAHgBQAOgCALgJIAAAAIEcjSQEhABD4AtIAAAAQD8AtDHBXIAAAAIuSGoQgRAIgGAIIAAAAQgHAJAHAEIAAAAQAIAFAPgDIAAAAQAQgCARgIIAAAAIOcmpQDaBoCFCXIAAAAQCICbAlDEIAAAAIp2CaQgOAEgJAGIAAAAQgJAFABAFIAAAAQABAIAUgCIAAAAIANgCIAAAAIJ3iZQAcCzg5DIIAAAAI6KDsQBJjHgtilIAAAAQgsikidhzIAAAAQjBiNlCgmIAAAAQk4glmDBAIAAAAQlFA2lKB2IAAAAQlBBzklCkIAAAAQi1BlieByIAAAAQksDXi8DtIAAAAQiKCug9CnIAAAAQg9CoAXCSIAAAAIoCDvQgNjLBXjegAQ7GsQB7ihA4iZIAAAAIaKjsQhMEMjbEdIAAAAg");
	mask.setTransform(311.9,142.3);

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,254,254,0)","rgba(255,255,255,0)","#A71F24"],[0.008,0.176,0.89],4.3,3.1,-4.3,-3).s().p("AnkC3INymrIBXA9ItyGsg");
	this.shape.setTransform(54.1,227.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,254,254,0)","rgba(255,255,255,0)","#A71F24"],[0.008,0.176,0.89],-32.4,0,32.4,0).s().p("AlDHWIAAurIKHAAIAAOrg");
	this.shape_1.setTransform(62.1,227.7,0.356,1,-110,0,0,-13.5,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,254,254,0)","rgba(255,255,255,0)","#A71F24"],[0.008,0.176,0.89],-31.7,6.1,31.8,-6).s().p("AlDHWIAAurIKHAAIAAOrg");
	this.shape_2.setTransform(82.7,193.7,0.577,1.9,-99.8,0,0,32,0.4);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,254,254,0)","rgba(255,255,255,0)","#A71F24"],[0.008,0.176,0.89],-30.9,9.4,31,-9.3).s().p("AlDHWIAAurIKHAAIAAOrg");
	this.shape_3.setTransform(131.4,176.8,1.13,0.635,-46,0,0,33.4,46.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,254,254,0)","rgba(255,255,255,0)","#A71F24"],[0.008,0.176,0.89],-30.3,11.1,30.5,-11.1).s().p("AlDHWIAAurIKHAAIAAOrg");
	this.shape_4.setTransform(133.2,182.1,1.239,0.711,-24.3,0,0,32.5,47.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,254,254,0)","rgba(255,255,255,0)","#A71F24"],[0.008,0.176,0.89],-27.5,16.8,27.8,-16.7).s().p("AlDHWIAAurIKHAAIAAOrg");
	this.shape_5.setTransform(136.3,177.2,1.239,1.166,30.6,0,0,33,47.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,254,254,0)","rgba(255,255,255,0)","#A71F24"],[0.008,0.176,0.89],-30.7,9.8,30.9,-9.7).s().p("AlDHWIAAurIKHAAIAAOrg");
	this.shape_6.setTransform(623.6,85,1.726,2.748,79.3,0,0,32.9,-46.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,254,254,0)","rgba(255,255,255,0)","#A71F24"],[0.008,0.176,0.89],-30.2,11,30.4,-11).s().p("AlDHWIAAurIKHAAIAAOrg");
	this.shape_7.setTransform(629.8,140.3,1.512,2.445,85.8,0,0,32.6,-47);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,254,254,0)","rgba(255,255,255,0)","#A71F24"],[0.008,0.176,0.89],-32.2,-0.2,32.2,0.3).s().p("AlDHWIAAurIKHAAIAAOrg");
	this.shape_8.setTransform(402.6,160.7,0.548,2.444,82.3,0,0,32.4,47);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,254,254,0)","rgba(255,255,255,0)","#A71F24"],[0.008,0.176,0.89],-32,3.5,32.1,-3.4).s().p("AlDHWIAAurIKHAAIAAOrg");
	this.shape_9.setTransform(399.3,159.7,0.191,2.444,82.1,0,0,32,47);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{regX:32.5,regY:47.4,scaleY:0.711,rotation:-24.3,x:133.2,y:182.1}}]},1).to({state:[{t:this.shape_4,p:{regX:32,regY:47.8,scaleY:0.903,rotation:3.1,x:130.4,y:186}}]},1).to({state:[{t:this.shape_5,p:{regY:47.9,scaleY:1.166,rotation:30.6,x:136.3,y:177.2}}]},1).to({state:[{t:this.shape_5,p:{regY:47.7,scaleY:2.823,rotation:51.8,x:136.5,y:177.1}}]},1).to({state:[{t:this.shape_5,p:{regY:47.6,scaleY:4.568,rotation:68.3,x:136.8,y:177}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{scaleX:1.512}}]},1).to({state:[{t:this.shape_7,p:{scaleX:1.205}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1).to({regY:0.5,scaleX:0.73,scaleY:1.5,rotation:-91.6,x:72.8,y:185.7},0).wait(1).to({rotation:-77.7,x:93.3,y:175.3},0).wait(1).to({regX:31.4,regY:47.1,scaleX:0.97,scaleY:0.82,rotation:-63.6,x:131.6,y:181.7},0).to({_off:true},1).wait(17));

	// Tach copy
	this.instance_4 = new lib.tach();
	this.instance_4.parent = this;
	this.instance_4.setTransform(311.9,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.9,159.2,1438.9,266.2);
// library properties:
lib.properties = {
	id: 'BDB17E747DAA4546BD3F9D8730CB3388',
	width: 641,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BDB17E747DAA4546BD3F9D8730CB3388'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;