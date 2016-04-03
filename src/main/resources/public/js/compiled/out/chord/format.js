// Compiled by ClojureScript 1.7.170 {}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

chord.format.freeze = (function chord$format$freeze(_,obj){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__5327__auto__ = (((_ == null))?null:_);
var m__5328__auto__ = (chord.format.freeze[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,_,obj);
} else {
var m__5328__auto____$1 = (chord.format.freeze["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,_,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.freeze",_);
}
}
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__5327__auto__ = (((_ == null))?null:_);
var m__5328__auto__ = (chord.format.thaw[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,_,s);
} else {
var m__5328__auto____$1 = (chord.format.thaw["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
}
});

if(typeof chord.format.formatter_STAR_ !== 'undefined'){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__5585__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5586__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5587__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5588__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5589__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5589__auto__,method_table__5585__auto__,prefer_table__5586__auto__,method_cache__5587__auto__,cached_hierarchy__5588__auto__));
})();
}
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if(typeof chord.format.t_chord$format14533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format14533 = (function (_,meta14534){
this._ = _;
this.meta14534 = meta14534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format14533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14535,meta14534__$1){
var self__ = this;
var _14535__$1 = this;
return (new chord.format.t_chord$format14533(self__._,meta14534__$1));
});

chord.format.t_chord$format14533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14535){
var self__ = this;
var _14535__$1 = this;
return self__.meta14534;
});

chord.format.t_chord$format14533.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format14533.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
});

chord.format.t_chord$format14533.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
});

chord.format.t_chord$format14533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta14534","meta14534",-340587295,null)], null);
});

chord.format.t_chord$format14533.cljs$lang$type = true;

chord.format.t_chord$format14533.cljs$lang$ctorStr = "chord.format/t_chord$format14533";

chord.format.t_chord$format14533.cljs$lang$ctorPrWriter = (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"chord.format/t_chord$format14533");
});

chord.format.__GT_t_chord$format14533 = (function chord$format$__GT_t_chord$format14533(___$1,meta14534){
return (new chord.format.t_chord$format14533(___$1,meta14534));
});

}

return (new chord.format.t_chord$format14533(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if(typeof chord.format.t_chord$format14536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format14536 = (function (_,meta14537){
this._ = _;
this.meta14537 = meta14537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format14536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14538,meta14537__$1){
var self__ = this;
var _14538__$1 = this;
return (new chord.format.t_chord$format14536(self__._,meta14537__$1));
});

chord.format.t_chord$format14536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14538){
var self__ = this;
var _14538__$1 = this;
return self__.meta14537;
});

chord.format.t_chord$format14536.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format14536.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
});

chord.format.t_chord$format14536.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});

chord.format.t_chord$format14536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta14537","meta14537",1975475274,null)], null);
});

chord.format.t_chord$format14536.cljs$lang$type = true;

chord.format.t_chord$format14536.cljs$lang$ctorStr = "chord.format/t_chord$format14536";

chord.format.t_chord$format14536.cljs$lang$ctorPrWriter = (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"chord.format/t_chord$format14536");
});

chord.format.__GT_t_chord$format14536 = (function chord$format$__GT_t_chord$format14536(___$1,meta14537){
return (new chord.format.t_chord$format14536(___$1,meta14537));
});

}

return (new chord.format.t_chord$format14536(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if(typeof chord.format.t_chord$format14539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format14539 = (function (opts,json_formatter,meta14540){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta14540 = meta14540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format14539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_14541,meta14540__$1){
var self__ = this;
var _14541__$1 = this;
return (new chord.format.t_chord$format14539(self__.opts,self__.json_formatter,meta14540__$1));
});})(json_formatter))
;

chord.format.t_chord$format14539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_14541){
var self__ = this;
var _14541__$1 = this;
return self__.meta14540;
});})(json_formatter))
;

chord.format.t_chord$format14539.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format14539.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t_chord$format14539.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t_chord$format14539.getBasis = ((function (json_formatter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta14540","meta14540",1556904097,null)], null);
});})(json_formatter))
;

chord.format.t_chord$format14539.cljs$lang$type = true;

chord.format.t_chord$format14539.cljs$lang$ctorStr = "chord.format/t_chord$format14539";

chord.format.t_chord$format14539.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"chord.format/t_chord$format14539");
});})(json_formatter))
;

chord.format.__GT_t_chord$format14539 = ((function (json_formatter){
return (function chord$format$__GT_t_chord$format14539(opts__$1,json_formatter__$1,meta14540){
return (new chord.format.t_chord$format14539(opts__$1,json_formatter__$1,meta14540));
});})(json_formatter))
;

}

return (new chord.format.t_chord$format14539(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if(typeof chord.format.t_chord$format14542 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format14542 = (function (_,meta14543){
this._ = _;
this.meta14543 = meta14543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format14542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14544,meta14543__$1){
var self__ = this;
var _14544__$1 = this;
return (new chord.format.t_chord$format14542(self__._,meta14543__$1));
});

chord.format.t_chord$format14542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14544){
var self__ = this;
var _14544__$1 = this;
return self__.meta14543;
});

chord.format.t_chord$format14542.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format14542.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
});

chord.format.t_chord$format14542.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});

chord.format.t_chord$format14542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta14543","meta14543",1589599742,null)], null);
});

chord.format.t_chord$format14542.cljs$lang$type = true;

chord.format.t_chord$format14542.cljs$lang$ctorStr = "chord.format/t_chord$format14542";

chord.format.t_chord$format14542.cljs$lang$ctorPrWriter = (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"chord.format/t_chord$format14542");
});

chord.format.__GT_t_chord$format14542 = (function chord$format$__GT_t_chord$format14542(___$1,meta14543){
return (new chord.format.t_chord$format14542(___$1,meta14543));
});

}

return (new chord.format.t_chord$format14542(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if(typeof chord.format.t_chord$format14545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format14545 = (function (_,meta14546){
this._ = _;
this.meta14546 = meta14546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format14545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14547,meta14546__$1){
var self__ = this;
var _14547__$1 = this;
return (new chord.format.t_chord$format14545(self__._,meta14546__$1));
});

chord.format.t_chord$format14545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14547){
var self__ = this;
var _14547__$1 = this;
return self__.meta14546;
});

chord.format.t_chord$format14545.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format14545.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t_chord$format14545.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t_chord$format14545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta14546","meta14546",-1742636322,null)], null);
});

chord.format.t_chord$format14545.cljs$lang$type = true;

chord.format.t_chord$format14545.cljs$lang$ctorStr = "chord.format/t_chord$format14545";

chord.format.t_chord$format14545.cljs$lang$ctorPrWriter = (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"chord.format/t_chord$format14545");
});

chord.format.__GT_t_chord$format14545 = (function chord$format$__GT_t_chord$format14545(___$1,meta14546){
return (new chord.format.t_chord$format14545(___$1,meta14546));
});

}

return (new chord.format.t_chord$format14545(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__14549,p__14550){
var map__14559 = p__14549;
var map__14559__$1 = ((((!((map__14559 == null)))?((((map__14559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14559):map__14559);
var read_ch = cljs.core.get.call(null,map__14559__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__14559__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__14560 = p__14550;
var map__14560__$1 = ((((!((map__14560 == null)))?((((map__14560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14560):map__14560);
var opts = map__14560__$1;
var format = cljs.core.get.call(null,map__14560__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,((function (fmtr,map__14559,map__14559__$1,read_ch,write_ch,map__14560,map__14560__$1,opts,format){
return (function (p__14563){
var map__14564 = p__14563;
var map__14564__$1 = ((((!((map__14564 == null)))?((((map__14564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14564):map__14564);
var message = cljs.core.get.call(null,map__14564__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
} else {
return null;
}
}catch (e14566){if((e14566 instanceof Error)){
var e = e14566;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e14566;

}
}});})(fmtr,map__14559,map__14559__$1,read_ch,write_ch,map__14560,map__14560__$1,opts,format))
,read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,((function (fmtr,map__14559,map__14559__$1,read_ch,write_ch,map__14560,map__14560__$1,opts,format){
return (function (p1__14548_SHARP_){
if(cljs.core.truth_(p1__14548_SHARP_)){
return chord.format.freeze.call(null,fmtr,p1__14548_SHARP_);
} else {
return null;
}
});})(fmtr,map__14559,map__14559__$1,read_ch,write_ch,map__14560,map__14560__$1,opts,format))
,write_ch)], null);
});

//# sourceMappingURL=format.js.map?rel=1459672189520