

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



(lib.vmax = function() {
	this.initialize(img.vmax);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,775,434);// helper functions:

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


(lib.turbine_ring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#515151").ss(3,1).p("Ag2AtIBthZ");
	this.shape.setTransform(115,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#515151").ss(3,1).p("Ag4ApIBxhR");
	this.shape_1.setTransform(120.9,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#515151").ss(3,1).p("Ag7AmIB3hL");
	this.shape_2.setTransform(126.7,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#515151").ss(3,1).p("Ag9AhIB7hB");
	this.shape_3.setTransform(132.4,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#515151").ss(3,1).p("Ag/AeIB/g7");
	this.shape_4.setTransform(137.9,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#515151").ss(3,1).p("AhBAZICDgy");
	this.shape_5.setTransform(143.4,15.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#515151").ss(3,1).p("AhDAWICHgr");
	this.shape_6.setTransform(148.6,18.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#515151").ss(3,1).p("AhDARICIgh");
	this.shape_7.setTransform(153.7,21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#515151").ss(3,1).p("AhEANICJgZ");
	this.shape_8.setTransform(158.5,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#515151").ss(3,1).p("AhFAIICLgP");
	this.shape_9.setTransform(163.1,28.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#515151").ss(3,1).p("AhGAEICNgH");
	this.shape_10.setTransform(167.5,33);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#515151").ss(3,1).p("AhGAAICNAA");
	this.shape_11.setTransform(171.6,37.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#515151").ss(3,1).p("AhFgEICMAJ");
	this.shape_12.setTransform(175.4,41.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#515151").ss(3,1).p("AhFgIICLAS");
	this.shape_13.setTransform(179,46.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#515151").ss(3,1).p("AhEgNICJAb");
	this.shape_14.setTransform(182.2,51.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#515151").ss(3,1).p("AhDgRICHAj");
	this.shape_15.setTransform(185.1,57);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#515151").ss(3,1).p("AhCgVICFAr");
	this.shape_16.setTransform(187.7,62.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#515151").ss(3,1).p("AhBgaICCA1");
	this.shape_17.setTransform(189.9,67.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#515151").ss(3,1).p("Ag/geIB/A8");
	this.shape_18.setTransform(191.7,73.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#515151").ss(3,1).p("Ag9giIB7BE");
	this.shape_19.setTransform(193.2,79.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#515151").ss(3,1).p("Ag6glIB1BL");
	this.shape_20.setTransform(194.4,85.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#515151").ss(3,1).p("Ag4gpIBxBT");
	this.shape_21.setTransform(195.2,91.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#515151").ss(3,1).p("Ag1gsIBrBZ");
	this.shape_22.setTransform(195.6,97.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#515151").ss(3,1).p("AgygvIBlBf");
	this.shape_23.setTransform(195.6,103.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#515151").ss(3,1).p("AgvgzIBfBn");
	this.shape_24.setTransform(195.2,109.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#515151").ss(3,1).p("Agsg2IBZBt");
	this.shape_25.setTransform(194.5,115);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#515151").ss(3,1).p("Agog4IBRBx");
	this.shape_26.setTransform(193.4,120.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#515151").ss(3,1).p("Aglg7IBLB3");
	this.shape_27.setTransform(192,126.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#515151").ss(3,1).p("Aghg9IBCB7");
	this.shape_28.setTransform(190.1,132.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#515151").ss(3,1).p("Agdg/IA7B/");
	this.shape_29.setTransform(187.9,137.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#515151").ss(3,1).p("AgYhBIAyCD");
	this.shape_30.setTransform(185.4,143.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#515151").ss(3,1).p("AgUhDIAqCH");
	this.shape_31.setTransform(182.6,148.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#515151").ss(3,1).p("AgQhDIAhCI");
	this.shape_32.setTransform(179.4,153.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#515151").ss(3,1).p("AgMhEIAZCJ");
	this.shape_33.setTransform(175.9,158.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#515151").ss(3,1).p("AgHhFIAPCL");
	this.shape_34.setTransform(172.1,163.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#515151").ss(3,1).p("AgDhGIAHCN");
	this.shape_35.setTransform(168,167.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#515151").ss(3,1).p("AABhGIgBCN");
	this.shape_36.setTransform(163.7,171.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#515151").ss(3,1).p("AAFhFIgJCM");
	this.shape_37.setTransform(159.1,175.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#515151").ss(3,1).p("AAJhFIgRCL");
	this.shape_38.setTransform(154.3,179);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#515151").ss(3,1).p("AAOhEIgbCJ");
	this.shape_39.setTransform(149.2,182.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#515151").ss(3,1).p("AAShDIgjCH");
	this.shape_40.setTransform(144,185.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#515151").ss(3,1).p("AAWhCIgrCF");
	this.shape_41.setTransform(138.6,187.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#515151").ss(3,1).p("AAbhBIg0CC");
	this.shape_42.setTransform(133.1,189.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#515151").ss(3,1).p("AAeg/Ig8B/");
	this.shape_43.setTransform(127.4,191.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#515151").ss(3,1).p("AAig9IhEB7");
	this.shape_44.setTransform(121.6,193.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#515151").ss(3,1).p("AAmg6IhLB1");
	this.shape_45.setTransform(115.7,194.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#515151").ss(3,1).p("AAqg4IhTBx");
	this.shape_46.setTransform(109.8,195.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#515151").ss(3,1).p("AAtg1IhZBr");
	this.shape_47.setTransform(103.8,195.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#515151").ss(3,1).p("AAwgyIhfBl");
	this.shape_48.setTransform(97.9,195.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#515151").ss(3,1).p("AA0gvIhnBf");
	this.shape_49.setTransform(91.9,195.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#515151").ss(3,1).p("AA3gsIhtBZ");
	this.shape_50.setTransform(86,194.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#515151").ss(3,1).p("AA5goIhxBR");
	this.shape_51.setTransform(80.1,193.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#515151").ss(3,1).p("AA8glIh3BL");
	this.shape_52.setTransform(74.3,192);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#515151").ss(3,1).p("AA+ghIh7BC");
	this.shape_53.setTransform(68.6,190.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#515151").ss(3,1).p("ABAgdIh/A7");
	this.shape_54.setTransform(63,187.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#515151").ss(3,1).p("ABCgYIiDAy");
	this.shape_55.setTransform(57.6,185.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#515151").ss(3,1).p("ABEgUIiHAq");
	this.shape_56.setTransform(52.4,182.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#515151").ss(3,1).p("ABEgQIiIAh");
	this.shape_57.setTransform(47.3,179.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#515151").ss(3,1).p("ABGgMIiKAZ");
	this.shape_58.setTransform(42.5,175.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#515151").ss(3,1).p("ABGgHIiLAP");
	this.shape_59.setTransform(37.8,172.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#515151").ss(3,1).p("ABHgDIiMAH");
	this.shape_60.setTransform(33.5,168);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#515151").ss(3,1).p("ABHABIiNgB");
	this.shape_61.setTransform(29.4,163.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#515151").ss(3,1).p("ABGAFIiMgJ");
	this.shape_62.setTransform(25.6,159.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#515151").ss(3,1).p("ABGAJIiLgR");
	this.shape_63.setTransform(22,154.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#515151").ss(3,1).p("ABFAOIiJgb");
	this.shape_64.setTransform(18.8,149.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#515151").ss(3,1).p("ABEASIiHgj");
	this.shape_65.setTransform(15.9,144);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#515151").ss(3,1).p("ABDAWIiFgr");
	this.shape_66.setTransform(13.3,138.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#515151").ss(3,1).p("ABBAbIiCg0");
	this.shape_67.setTransform(11.1,133.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#515151").ss(3,1).p("ABAAeIh/g8");
	this.shape_68.setTransform(9.2,127.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#515151").ss(3,1).p("AA+AiIh7hE");
	this.shape_69.setTransform(7.7,121.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#515151").ss(3,1).p("AA7AmIh1hL");
	this.shape_70.setTransform(6.6,115.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#515151").ss(3,1).p("AA5AqIhxhT");
	this.shape_71.setTransform(5.8,109.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#515151").ss(3,1).p("AA2AtIhrhZ");
	this.shape_72.setTransform(5.4,103.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#515151").ss(3,1).p("AAzAwIhlhf");
	this.shape_73.setTransform(5.4,97.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#515151").ss(3,1).p("AAwA0Ihfhn");
	this.shape_74.setTransform(5.7,91.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#515151").ss(3,1).p("AAtA3IhZht");
	this.shape_75.setTransform(6.5,86);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#515151").ss(3,1).p("AApA5IhRhx");
	this.shape_76.setTransform(7.6,80.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#515151").ss(3,1).p("AAmA8IhLh3");
	this.shape_77.setTransform(9,74.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#515151").ss(3,1).p("AAhA+IhBh7");
	this.shape_78.setTransform(10.9,68.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#515151").ss(3,1).p("AAeBAIg7h/");
	this.shape_79.setTransform(13,63);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#515151").ss(3,1).p("AAZBCIgyiD");
	this.shape_80.setTransform(15.6,57.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#515151").ss(3,1).p("AAWBEIgriH");
	this.shape_81.setTransform(18.4,52.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#515151").ss(3,1).p("AARBEIghiI");
	this.shape_82.setTransform(21.6,47.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#515151").ss(3,1).p("AANBGIgZiK");
	this.shape_83.setTransform(25.1,42.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#515151").ss(3,1).p("AAIBGIgPiL");
	this.shape_84.setTransform(28.9,37.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#515151").ss(3,1).p("AAEBHIgHiM");
	this.shape_85.setTransform(33,33.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#515151").ss(3,1).p("AAABHIAAiN");
	this.shape_86.setTransform(37.3,29.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#515151").ss(3,1).p("AgEBGIAJiM");
	this.shape_87.setTransform(41.9,25.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#515151").ss(3,1).p("AgIBGIASiL");
	this.shape_88.setTransform(46.7,22);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#515151").ss(3,1).p("AgNBFIAbiJ");
	this.shape_89.setTransform(51.7,18.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#515151").ss(3,1).p("AgRBEIAjiH");
	this.shape_90.setTransform(57,15.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#515151").ss(3,1).p("AgVBDIAriF");
	this.shape_91.setTransform(62.4,13.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#515151").ss(3,1).p("AgaBBIA1iC");
	this.shape_92.setTransform(67.9,11.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#515151").ss(3,1).p("AgeBAIA8h/");
	this.shape_93.setTransform(73.6,9.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#515151").ss(3,1).p("AgiA+IBEh7");
	this.shape_94.setTransform(79.4,7.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#515151").ss(3,1).p("AglA7IBLh1");
	this.shape_95.setTransform(85.2,6.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#515151").ss(3,1).p("AgpA5IBThx");
	this.shape_96.setTransform(91.2,5.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#515151").ss(3,1).p("AgsA2IBZhr");
	this.shape_97.setTransform(97.1,5.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#515151").ss(3,1).p("AgvAzIBfhl");
	this.shape_98.setTransform(103.1,5.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#515151").ss(3,1).p("AgzAwIBnhf");
	this.shape_99.setTransform(109.1,5.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#515151").ss(3,1).p("Ag2AtIBthZ");
	this.shape_100.setTransform(115,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.388)").s().p("Am3McQlKi3holqQholpC2lKQC3lKFqhnQFphoFKC3QFKC2BnFqQBoFpi3FJQi2FLlqBnQiEAmh+AAQjfAAjRh0g");
	this.shape_101.setTransform(100.6,101.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_101).wait(1));

}).prototype = getMCSymbolPrototype(lib.turbine_ring, new cjs.Rectangle(-1.5,-1.5,204,204), null);


(lib.small_solid_segment = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA3437").s().p("AgnArQizhJjAgIIAAjIQDpAJDVBZQDQBWCnCWIiMCPQiMh9iqhHg");
	this.shape.setTransform(41.1,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.small_solid_segment, new cjs.Rectangle(0,0,82.2,47.9), null);


(lib.large_hollow_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AA3437").p("AFj0sQkBkBlLiOQlAiJlegMIABGNQEQAMD5BsQEBBvDHDIQDVDUBwEVQBsELAAEgQAAEhhsELQhwEUjVDVQjFDGj/BwQj3BrkNAOIAAGMQFbgNE+iJQFIiND/kAQEOkNCOlfQCJlSAAlvQAAluiJlSQiOlfkOkNg");
	this.shape.setTransform(216.2,187.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#515151").s().p("AgeD3Qkwh3j3jXIETkdQC+ChDnBaQDhBXDyAMIAAGLQk+gLkmhzg");
	this.shape_1.setTransform(58.2,337.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.large_hollow_circle, new cjs.Rectangle(0,-1,307.6,376.5), null);


(lib.solid_ring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA3437").s().p("An5StQjphii0i1Qi0i0hjjpQhmjxAAkIQAAkCBijsQBejlCtizQCsizDhhmQDohqEAgKIAADJQjYAJjCBaQi9BYiRCWQiRCYhPDAQhSDIAADZQAADfBXDMQBTDFCZCZQCYCZDFBTQDMBWDfABQDfgBDNhWQDFhTCZiZQCYiZBUjFQBWjMAAjfQAAjVhPjFQhNi9iMiXICLiPQCqCzBbDhQBgDrAAD+QAAEIhnDxQhiDpi1C0QizC1jqBiQjxBnkIgBQkHABjyhng");
	this.shape.setTransform(130,130);

	this.instance = new lib.small_solid_segment();
	this.instance.parent = this;
	this.instance.setTransform(176.1,23.9,1,1,0,0,0,41.1,23.9);
	this.instance.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.solid_ring, new cjs.Rectangle(0,0,260,259.9), null);


(lib.Outer_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:0});

	// symbol
	this.instance = new lib.large_hollow_circle();
	this.instance.parent = this;
	this.instance.setTransform(252.9,227.3,1,1,0,0,0,153.6,187.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.3,39.5,307.1,375.5);


(lib.center_cap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turbine_ring();
	this.instance.parent = this;
	this.instance.setTransform(100.5,100.5,1,1,0,0,0,100.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.center_cap, new cjs.Rectangle(-1.5,-1.5,204,204), null);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.center_cap();
	this.instance.parent = this;
	this.instance.setTransform(-35.8,1.3,1,1,0,0,0,100.5,100.5);

	this.instance_1 = new lib.Outer_circle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.3,0.1,1,1,0,0,0,252.8,227.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.3,-187.7,307.1,375.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Outer_circle();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0.1,1,1,0,0,0,252.8,227.3);

	this.instance_1 = new lib.turbine_ring();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.8,1.3,1,1,0,0,0,100.5,100.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.3,-187.7,307.1,375.5);


(lib.fullSelector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fade_in:0,click:28,click_off:40});

	// timeline functions:
	this.frame_27 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(12).call(this.frame_39).wait(12).call(this.frame_51).wait(1));

	// middle
	this.instance = new lib.solid_ring();
	this.instance.parent = this;
	this.instance.setTransform(129.7,188.5,1.735,1.735,0,0,0,129.8,129.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},2).to({regX:130,scaleX:1,scaleY:1,x:130.1},23).wait(3).to({regX:129.9,rotation:150,x:130.2,y:188.4},6).wait(1).to({regX:129.8,scaleX:1.18,scaleY:1.18,rotation:150.1,x:130.3},2).wait(5).to({regX:129.9,scaleX:1,scaleY:1,rotation:150,x:130.2},2).wait(1).to({regX:130,rotation:0,x:130.1,y:188.5},6).wait(1));

	// outer
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(130.1,188.5,1.682,1.682,0,0,0,-35.8,1.2);

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(130.1,188.4,1,1,180,0,0,-35.9,1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},2).to({_off:true,regX:-35.9,scaleX:1,scaleY:1,rotation:180,y:188.4},23).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},23).to({startPosition:0},3).to({startPosition:0},2).to({startPosition:0},4).to({startPosition:0},1).to({scaleX:1.15,scaleY:1.15},4).to({startPosition:0},1).to({scaleX:1,scaleY:1},4).to({startPosition:0},1).to({startPosition:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-129.4,544.6,631.9);


(lib.vmaxClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.rwSelector = new lib.fullSelector();
	this.rwSelector.parent = this;
	this.rwSelector.setTransform(172.2,325,0.406,0.406,-140.2,0,0,159.5,187.6);

	this.fwSelector = new lib.fullSelector();
	this.fwSelector.parent = this;
	this.fwSelector.setTransform(742.6,324.9,0.406,0.406,-59,0,0,159.7,187.6);

	this.engineSelector = new lib.fullSelector();
	this.engineSelector.parent = this;
	this.engineSelector.setTransform(496,273.4,0.332,0.332,-119,0,0,159.7,187.3);

	this.exhaustSelector = new lib.fullSelector();
	this.exhaustSelector.parent = this;
	this.exhaustSelector.setTransform(351.1,328.8,0.303,0.303,-14,0,0,160,187.4);

	this.controlSelector = new lib.fullSelector();
	this.controlSelector.parent = this;
	this.controlSelector.setTransform(584.4,67.9,0.237,0.237,31,0,0,159.8,187.1);

	this.tankSelector = new lib.fullSelector();
	this.tankSelector.parent = this;
	this.tankSelector.setTransform(488.7,132.7,0.246,0.246,112.5,0,0,159.4,186.8);

	this.seatSelector = new lib.fullSelector();
	this.seatSelector.parent = this;
	this.seatSelector.setTransform(286,198.5,0.238,0.238,-157.5);

	this.instance = new lib.vmax();
	this.instance.parent = this;
	this.instance.setTransform(63.6,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.seatSelector},{t:this.tankSelector},{t:this.controlSelector},{t:this.exhaustSelector},{t:this.engineSelector},{t:this.fwSelector},{t:this.rwSelector}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vmaxClip, new cjs.Rectangle(-0.5,-8.8,913.1,478.5), null);


// stage content:
(lib.Service_animation_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
        
		this.main.gotoAndStop(0);
		var root = this;
		var selectors = root.main.children;
		var names = ["seat", "tank", "controls", "exhaust", "engine", "frontWheel", "rearWheel"];
        
        var data = {
            name: "test",
            id: i
        };
            
        var selector = function(x) {
//            console.log(x);
            parent.postMessage(x, "http://localhost:3000");
        };
        
        for(var i = 1; i < selectors.length; i++) {
             selectors[i].activeSelector = false;
             selectors[i].name = names[i - 1];
             selectors[i].on("click", function(e) {
                for(var i = 1; i < selectors.length; i++) {
                    if (selectors[i].activeSelector) {
                        selectors[i].activeSelector = false;
                        selectors[i].gotoAndPlay("click_off");
                    } else if (selectors[i] == e.currentTarget) {
                        e.currentTarget.activeSelector = true;
                        e.currentTarget.gotoAndPlay("click");
                        data.name = selectors[i].name
                        data.id = i;
                        selector(data);
                    }
                }
             });
        }
        
        
        
        
        
        
        
        
//		var jsonRequest = function(method, url, callback) {
//            var request = new XMLHttpRequest();
//            request.open(method, url, true);
//            request.onload = function() {
//               callback(request.onerror, JSON.parse(request.responseText));
//            };
//            request.send();
//        };
//        
        
//        jsonRequest("GET", '../resources/json/information.json', function(err, response) {
//            if (err) {
//                console.log("uh-oh");
//            } else {
//                data = response;
//                for(var i = 1; i < selectors.length; i++) {
//			         selectors[i].activeSelector = false;
//			         selectors[i].name = names[i - 1];
//			         selectors[i].on("click", function(e) {
//                        for(var i = 1; i < selectors.length; i++) {
//                            if (selectors[i].activeSelector) {
//                                selectors[i].activeSelector = false;
//                                selectors[i].gotoAndPlay("click_off");
//                            } else if (selectors[i] == e.currentTarget) {
//                                e.currentTarget.activeSelector = true;
//                                e.currentTarget.gotoAndPlay("click");
//                                data.service.selector = {
//                                    name: selectors[i].name,
//                                    id: i
//                                };
//                                console.log(data.service.selector);
//                            }
//                        }
//			         });
//                }
//            }
//        });
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// main
	this.main = new lib.vmaxClip();
	this.main.parent = this;
	this.main.setTransform(500,300.1,1,1,0,0,0,456.1,245);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(543.4,346.2,913.1,478.6);
// library properties:
lib.properties = {
	id: '5564E5B3BDD3E74B9D8A0E6AB7166CC5',
	width: 1000,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/vmax.png", id:"vmax"}
	],
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
an.compositions['5564E5B3BDD3E74B9D8A0E6AB7166CC5'] = {
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
