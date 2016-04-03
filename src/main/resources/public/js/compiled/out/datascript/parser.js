// Compiled by ClojureScript 1.7.170 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');
datascript.parser.collect_vars_acc;

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__5327__auto__ = (((_ == null))?null:_);
var m__5328__auto__ = (datascript.parser._collect[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,_,pred,acc);
} else {
var m__5328__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__5327__auto__ = (((_ == null))?null:_);
var m__5328__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,_,acc);
} else {
var m__5328__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__5327__auto__ = (((_ == null))?null:_);
var m__5328__auto__ = (datascript.parser._postwalk[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,_,f);
} else {
var m__5328__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__8987_SHARP_,p2__8986_SHARP_){
var temp__4423__auto__ = parse_el.call(null,p2__8986_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.conj.call(null,p1__8987_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__5737__auto__ = [];
var len__5730__auto___8994 = arguments.length;
var i__5731__auto___8995 = (0);
while(true){
if((i__5731__auto___8995 < len__5730__auto___8994)){
args__5737__auto__.push((arguments[i__5731__auto___8995]));

var G__8996 = (i__5731__auto___8995 + (1));
i__5731__auto___8995 = G__8996;
continue;
} else {
}
break;
}

var argseq__5738__auto__ = ((((2) < args__5737__auto__.length))?(new cljs.core.IndexedSeq(args__5737__auto__.slice((2)),(0))):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5738__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__8991){
var vec__8992 = p__8991;
var acc = cljs.core.nth.call(null,vec__8992,(0),null);
var acc__$1 = (function (){var or__4672__auto__ = acc;
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.db.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__8992,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__8992,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq8988){
var G__8989 = cljs.core.first.call(null,seq8988);
var seq8988__$1 = cljs.core.next.call(null,seq8988);
var G__8990 = cljs.core.first.call(null,seq8988__$1);
var seq8988__$2 = cljs.core.next.call(null,seq8988__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__8989,G__8990,seq8988__$2);
});
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__4672__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__4672__auto__){
return or__4672__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__9003){
var vec__9004 = p__9003;
var k = cljs.core.nth.call(null,vec__9004,(0),null);
var v = cljs.core.nth.call(null,vec__9004,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__8997_SHARP_){
return datascript$parser$postwalk.call(null,p1__8997_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__8998_SHARP_){
return datascript$parser$postwalk.call(null,p1__8998_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__4672__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9009,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9011 = k9009;
switch (G__9011) {
default:
return cljs.core.get.call(null,self__.__extmap,k9009,else__5289__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.Placeholder{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9008){
var self__ = this;
var G__9008__$1 = this;
return (new cljs.core.RecordIter((0),G__9008__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9008){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9012 = cljs.core.keyword_identical_QMARK_;
var expr__9013 = k__5294__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9008),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9008){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.Placeholder(G__9008,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9005){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9006,acc9007){
var self__ = this;
var ___7931__auto____$1 = this;
return acc9007;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9007){
var self__ = this;
var ___7931__auto____$1 = this;
return acc9007;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__9010){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__9010),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9020,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9022 = (((k9020 instanceof cljs.core.Keyword))?k9020.fqn:null);
switch (G__9022) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9020,else__5289__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.Variable{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9019){
var self__ = this;
var G__9019__$1 = this;
return (new cljs.core.RecordIter((0),G__9019__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9019){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9023 = cljs.core.keyword_identical_QMARK_;
var expr__9024 = k__5294__auto__;
if(cljs.core.truth_(pred__9023.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__9024))){
return (new datascript.parser.Variable(G__9019,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9019),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9019){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__9019,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9016){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f9016),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9017,acc9018){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9017,self__.symbol,acc9018);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9018){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9018,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__9021){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__9021),null,cljs.core.dissoc.call(null,G__9021,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9031,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9033 = (((k9031 instanceof cljs.core.Keyword))?k9031.fqn:null);
switch (G__9033) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9031,else__5289__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.SrcVar{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9030){
var self__ = this;
var G__9030__$1 = this;
return (new cljs.core.RecordIter((0),G__9030__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9030){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9034 = cljs.core.keyword_identical_QMARK_;
var expr__9035 = k__5294__auto__;
if(cljs.core.truth_(pred__9034.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__9035))){
return (new datascript.parser.SrcVar(G__9030,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9030),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9030){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__9030,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9027){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f9027),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9028,acc9029){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9028,self__.symbol,acc9029);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9029){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9029,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__9032){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__9032),null,cljs.core.dissoc.call(null,G__9032,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9042,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9044 = k9042;
switch (G__9044) {
default:
return cljs.core.get.call(null,self__.__extmap,k9042,else__5289__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9041){
var self__ = this;
var G__9041__$1 = this;
return (new cljs.core.RecordIter((0),G__9041__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9041){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9045 = cljs.core.keyword_identical_QMARK_;
var expr__9046 = k__5294__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9041),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9041){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__9041,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9038){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9039,acc9040){
var self__ = this;
var ___7931__auto____$1 = this;
return acc9040;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9040){
var self__ = this;
var ___7931__auto____$1 = this;
return acc9040;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__9043){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__9043),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9053,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9055 = k9053;
switch (G__9055) {
default:
return cljs.core.get.call(null,self__.__extmap,k9053,else__5289__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.RulesVar{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9052){
var self__ = this;
var G__9052__$1 = this;
return (new cljs.core.RecordIter((0),G__9052__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9052){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9056 = cljs.core.keyword_identical_QMARK_;
var expr__9057 = k__5294__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9052),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9052){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.RulesVar(G__9052,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9049){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9050,acc9051){
var self__ = this;
var ___7931__auto____$1 = this;
return acc9051;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9051){
var self__ = this;
var ___7931__auto____$1 = this;
return acc9051;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__9054){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__9054),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9064,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9066 = (((k9064 instanceof cljs.core.Keyword))?k9064.fqn:null);
switch (G__9066) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9064,else__5289__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.Constant{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9063){
var self__ = this;
var G__9063__$1 = this;
return (new cljs.core.RecordIter((0),G__9063__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9063){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9067 = cljs.core.keyword_identical_QMARK_;
var expr__9068 = k__5294__auto__;
if(cljs.core.truth_(pred__9067.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__9068))){
return (new datascript.parser.Constant(G__9063,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9063),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9063){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__9063,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9060){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f9060),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9061,acc9062){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9061,self__.value,acc9062);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9062){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9062,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__9065){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__9065),null,cljs.core.dissoc.call(null,G__9065,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9075,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9077 = (((k9075 instanceof cljs.core.Keyword))?k9075.fqn:null);
switch (G__9077) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9075,else__5289__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9074){
var self__ = this;
var G__9074__$1 = this;
return (new cljs.core.RecordIter((0),G__9074__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9074){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9078 = cljs.core.keyword_identical_QMARK_;
var expr__9079 = k__5294__auto__;
if(cljs.core.truth_(pred__9078.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__9079))){
return (new datascript.parser.PlainSymbol(G__9074,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9074),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9074){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__9074,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9071){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f9071),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9072,acc9073){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9072,self__.symbol,acc9073);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9073){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9073,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__9076){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__9076),null,cljs.core.dissoc.call(null,G__9076,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_rules_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol.call(null,form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__4672__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
var or__4672__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__4672__auto____$1)){
return or__4672__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9086,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9088 = (((k9086 instanceof cljs.core.Keyword))?k9086.fqn:null);
switch (G__9088) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9086,else__5289__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.RuleVars{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9085){
var self__ = this;
var G__9085__$1 = this;
return (new cljs.core.RecordIter((0),G__9085__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9085){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9089 = cljs.core.keyword_identical_QMARK_;
var expr__9090 = k__5294__auto__;
if(cljs.core.truth_(pred__9089.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__9090))){
return (new datascript.parser.RuleVars(G__9085,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9089.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__9090))){
return (new datascript.parser.RuleVars(self__.required,G__9085,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9085),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9085){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__9085,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9082){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f9082),datascript.parser.postwalk.call(null,self__.free,f9082),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9083,acc9084){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9083,self__.free,datascript.parser.collect.call(null,pred9083,self__.required,acc9084));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9084){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9084,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__9087){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__9087),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__9087),null,cljs.core.dissoc.call(null,G__9087,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__9094 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__9094,(0),null);
var rest = cljs.core.nth.call(null,vec__9094,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9099,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9101 = k9099;
switch (G__9101) {
default:
return cljs.core.get.call(null,self__.__extmap,k9099,else__5289__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9098){
var self__ = this;
var G__9098__$1 = this;
return (new cljs.core.RecordIter((0),G__9098__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9098){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9102 = cljs.core.keyword_identical_QMARK_;
var expr__9103 = k__5294__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9098),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9098){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__9098,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9095){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9096,acc9097){
var self__ = this;
var ___7931__auto____$1 = this;
return acc9097;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9097){
var self__ = this;
var ___7931__auto____$1 = this;
return acc9097;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__9100){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__9100),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9110,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9112 = (((k9110 instanceof cljs.core.Keyword))?k9110.fqn:null);
switch (G__9112) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9110,else__5289__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.BindScalar{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9109){
var self__ = this;
var G__9109__$1 = this;
return (new cljs.core.RecordIter((0),G__9109__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9109){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9113 = cljs.core.keyword_identical_QMARK_;
var expr__9114 = k__5294__auto__;
if(cljs.core.truth_(pred__9113.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__9114))){
return (new datascript.parser.BindScalar(G__9109,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9109),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9109){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__9109,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9106){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f9106),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9107,acc9108){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9107,self__.variable,acc9108);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9108){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9108,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__9111){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__9111),null,cljs.core.dissoc.call(null,G__9111,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9121,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9123 = (((k9121 instanceof cljs.core.Keyword))?k9121.fqn:null);
switch (G__9123) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9121,else__5289__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.BindTuple{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9120){
var self__ = this;
var G__9120__$1 = this;
return (new cljs.core.RecordIter((0),G__9120__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9120){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9124 = cljs.core.keyword_identical_QMARK_;
var expr__9125 = k__5294__auto__;
if(cljs.core.truth_(pred__9124.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__9125))){
return (new datascript.parser.BindTuple(G__9120,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9120),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9120){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__9120,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9117){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f9117),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9118,acc9119){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9118,self__.bindings,acc9119);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9119){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9119,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__9122){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__9122),null,cljs.core.dissoc.call(null,G__9122,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9132,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9134 = (((k9132 instanceof cljs.core.Keyword))?k9132.fqn:null);
switch (G__9134) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9132,else__5289__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.BindColl{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9131){
var self__ = this;
var G__9131__$1 = this;
return (new cljs.core.RecordIter((0),G__9131__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9131){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9135 = cljs.core.keyword_identical_QMARK_;
var expr__9136 = k__5294__auto__;
if(cljs.core.truth_(pred__9135.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__9136))){
return (new datascript.parser.BindColl(G__9131,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9131),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9131){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__9131,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9128){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f9128),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9129,acc9130){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9129,self__.binding,acc9130);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9130){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9130,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__9133){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__9133),null,cljs.core.dissoc.call(null,G__9133,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_binding;
datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4425__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var var$ = temp__4425__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__4660__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__4660__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__4660__auto__;
}
})())){
var temp__4423__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var sub_bind = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__4672__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4425__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4425__auto__)){
var sub_bindings = temp__4425__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__4660__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__4660__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__4660__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__4672__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
var or__4672__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__4672__auto____$1)){
return or__4672__auto____$1;
} else {
var or__4672__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__4672__auto____$2)){
return or__4672__auto____$2;
} else {
var or__4672__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__4672__auto____$3)){
return or__4672__auto____$3;
} else {
var or__4672__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__4672__auto____$4)){
return or__4672__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__5327__auto__ = (((this$ == null))?null:this$);
var m__5328__auto__ = (datascript.parser._find_vars[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,this$);
} else {
var m__5328__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9143,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9145 = (((k9143 instanceof cljs.core.Keyword))?k9143.fqn:null);
switch (G__9145) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9143,else__5289__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.Aggregate{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9142){
var self__ = this;
var G__9142__$1 = this;
return (new cljs.core.RecordIter((0),G__9142__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9142){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9146 = cljs.core.keyword_identical_QMARK_;
var expr__9147 = k__5294__auto__;
if(cljs.core.truth_(pred__9146.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__9147))){
return (new datascript.parser.Aggregate(G__9142,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9146.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__9147))){
return (new datascript.parser.Aggregate(self__.fn,G__9142,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9142),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9142){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__9142,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9139){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f9139),datascript.parser.postwalk.call(null,self__.args,f9139),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9140,acc9141){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9140,self__.args,datascript.parser.collect.call(null,pred9140,self__.fn,acc9141));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9141){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9141,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__9144){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__9144),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__9144),null,cljs.core.dissoc.call(null,G__9144,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9154,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9156 = (((k9154 instanceof cljs.core.Keyword))?k9154.fqn:null);
switch (G__9156) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9154,else__5289__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.Pull{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9153){
var self__ = this;
var G__9153__$1 = this;
return (new cljs.core.RecordIter((0),G__9153__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9153){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9157 = cljs.core.keyword_identical_QMARK_;
var expr__9158 = k__5294__auto__;
if(cljs.core.truth_(pred__9157.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__9158))){
return (new datascript.parser.Pull(G__9153,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9157.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__9158))){
return (new datascript.parser.Pull(self__.source,G__9153,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9157.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__9158))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__9153,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9153),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9153){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__9153,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9150){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f9150),datascript.parser.postwalk.call(null,self__.variable,f9150),datascript.parser.postwalk.call(null,self__.pattern,f9150),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9151,acc9152){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9151,self__.pattern,datascript.parser.collect.call(null,pred9151,self__.variable,datascript.parser.collect.call(null,pred9151,self__.source,acc9152)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9152){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9152,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__9155){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__9155),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__9155),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__9155),null,cljs.core.dissoc.call(null,G__9155,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__5327__auto__ = (((this$ == null))?null:this$);
var m__5328__auto__ = (datascript.parser.find_elements[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,this$);
} else {
var m__5328__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9165,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9167 = (((k9165 instanceof cljs.core.Keyword))?k9165.fqn:null);
switch (G__9167) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9165,else__5289__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.FindRel{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9164){
var self__ = this;
var G__9164__$1 = this;
return (new cljs.core.RecordIter((0),G__9164__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9164){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9168 = cljs.core.keyword_identical_QMARK_;
var expr__9169 = k__5294__auto__;
if(cljs.core.truth_(pred__9168.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__9169))){
return (new datascript.parser.FindRel(G__9164,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9164),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9164){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__9164,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9161){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f9161),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9162,acc9163){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9162,self__.elements,acc9163);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9163){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9163,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__9166){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__9166),null,cljs.core.dissoc.call(null,G__9166,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9176,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9178 = (((k9176 instanceof cljs.core.Keyword))?k9176.fqn:null);
switch (G__9178) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9176,else__5289__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.FindColl{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9175){
var self__ = this;
var G__9175__$1 = this;
return (new cljs.core.RecordIter((0),G__9175__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9175){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9179 = cljs.core.keyword_identical_QMARK_;
var expr__9180 = k__5294__auto__;
if(cljs.core.truth_(pred__9179.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__9180))){
return (new datascript.parser.FindColl(G__9175,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9175),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9175){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__9175,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9172){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f9172),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9173,acc9174){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9173,self__.element,acc9174);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9174){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9174,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__9177){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__9177),null,cljs.core.dissoc.call(null,G__9177,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9187,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9189 = (((k9187 instanceof cljs.core.Keyword))?k9187.fqn:null);
switch (G__9189) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9187,else__5289__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.FindScalar{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9186){
var self__ = this;
var G__9186__$1 = this;
return (new cljs.core.RecordIter((0),G__9186__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9186){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9190 = cljs.core.keyword_identical_QMARK_;
var expr__9191 = k__5294__auto__;
if(cljs.core.truth_(pred__9190.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__9191))){
return (new datascript.parser.FindScalar(G__9186,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9186),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9186){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__9186,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9183){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f9183),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9184,acc9185){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9184,self__.element,acc9185);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9185){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9185,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__9188){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__9188),null,cljs.core.dissoc.call(null,G__9188,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9198,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9200 = (((k9198 instanceof cljs.core.Keyword))?k9198.fqn:null);
switch (G__9200) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9198,else__5289__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.FindTuple{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9197){
var self__ = this;
var G__9197__$1 = this;
return (new cljs.core.RecordIter((0),G__9197__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9197){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9201 = cljs.core.keyword_identical_QMARK_;
var expr__9202 = k__5294__auto__;
if(cljs.core.truth_(pred__9201.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__9202))){
return (new datascript.parser.FindTuple(G__9197,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9197),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9197){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__9197,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9194){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f9194),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9195,acc9196){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9195,self__.elements,acc9196);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9196){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9196,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__9199){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__9199),null,cljs.core.dissoc.call(null,G__9199,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__9206 = form;
var fn = cljs.core.nth.call(null,vec__9206,(0),null);
var args = cljs.core.nthnext.call(null,vec__9206,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__4660__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4660__auto__)){
return args_STAR_;
} else {
return and__4660__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__9208 = form;
var _ = cljs.core.nth.call(null,vec__9208,(0),null);
var fn = cljs.core.nth.call(null,vec__9208,(1),null);
var args = cljs.core.nthnext.call(null,vec__9208,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__4660__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4660__auto__)){
return args_STAR_;
} else {
return and__4660__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__9210 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__9210,(0),null);
var pattern = cljs.core.nth.call(null,vec__9210,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__4672__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
var or__4672__auto____$1 = datascript.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__4672__auto____$1)){
return or__4672__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__4660__auto__ = src_STAR_;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__4660__auto____$1)){
return pattern_STAR_;
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__4672__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
var or__4672__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__4672__auto____$1)){
return or__4672__auto____$1;
} else {
var or__4672__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__4672__auto____$2)){
return or__4672__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__9212 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
var G__9212__$1 = (((G__9212 == null))?null:(new datascript.parser.FindRel(G__9212,null,null,null)));
return G__9212__$1;
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__9214 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
var G__9214__$1 = (((G__9214 == null))?null:(new datascript.parser.FindColl(G__9214,null,null,null)));
return G__9214__$1;
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__9216 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
var G__9216__$1 = (((G__9216 == null))?null:(new datascript.parser.FindScalar(G__9216,null,null,null)));
return G__9216__$1;
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__9218 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
var G__9218__$1 = (((G__9218 == null))?null:(new datascript.parser.FindTuple(G__9218,null,null,null)));
return G__9218__$1;
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__4672__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
var or__4672__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__4672__auto____$1)){
return or__4672__auto____$1;
} else {
var or__4672__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__4672__auto____$2)){
return or__4672__auto____$2;
} else {
var or__4672__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__4672__auto____$3)){
return or__4672__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__4672__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4423__auto__ = (function (){var or__4672__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
var or__4672__auto____$1 = datascript.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__4672__auto____$1)){
return or__4672__auto____$1;
} else {
return datascript.parser.parse_plain_variable.call(null,form);
}
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__4672__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9223,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9225 = (((k9223 instanceof cljs.core.Keyword))?k9223.fqn:null);
switch (G__9225) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9223,else__5289__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.Pattern{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9222){
var self__ = this;
var G__9222__$1 = this;
return (new cljs.core.RecordIter((0),G__9222__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9222){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9226 = cljs.core.keyword_identical_QMARK_;
var expr__9227 = k__5294__auto__;
if(cljs.core.truth_(pred__9226.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__9227))){
return (new datascript.parser.Pattern(G__9222,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9226.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__9227))){
return (new datascript.parser.Pattern(self__.source,G__9222,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9222),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9222){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__9222,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9219){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f9219),datascript.parser.postwalk.call(null,self__.pattern,f9219),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9220,acc9221){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9220,self__.pattern,datascript.parser.collect.call(null,pred9220,self__.source,acc9221));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9221){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9221,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__9224){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__9224),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__9224),null,cljs.core.dissoc.call(null,G__9224,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9234,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9236 = (((k9234 instanceof cljs.core.Keyword))?k9234.fqn:null);
switch (G__9236) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9234,else__5289__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.Predicate{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9233){
var self__ = this;
var G__9233__$1 = this;
return (new cljs.core.RecordIter((0),G__9233__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9233){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9237 = cljs.core.keyword_identical_QMARK_;
var expr__9238 = k__5294__auto__;
if(cljs.core.truth_(pred__9237.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__9238))){
return (new datascript.parser.Predicate(G__9233,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9237.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__9238))){
return (new datascript.parser.Predicate(self__.fn,G__9233,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9233),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9233){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__9233,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9230){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f9230),datascript.parser.postwalk.call(null,self__.args,f9230),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9231,acc9232){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9231,self__.args,datascript.parser.collect.call(null,pred9231,self__.fn,acc9232));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9232){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9232,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__9235){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__9235),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__9235),null,cljs.core.dissoc.call(null,G__9235,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9245,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9247 = (((k9245 instanceof cljs.core.Keyword))?k9245.fqn:null);
switch (G__9247) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9245,else__5289__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.Function{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9244){
var self__ = this;
var G__9244__$1 = this;
return (new cljs.core.RecordIter((0),G__9244__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9244){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9248 = cljs.core.keyword_identical_QMARK_;
var expr__9249 = k__5294__auto__;
if(cljs.core.truth_(pred__9248.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__9249))){
return (new datascript.parser.Function(G__9244,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9248.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__9249))){
return (new datascript.parser.Function(self__.fn,G__9244,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9248.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__9249))){
return (new datascript.parser.Function(self__.fn,self__.args,G__9244,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9244),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9244){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__9244,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9241){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f9241),datascript.parser.postwalk.call(null,self__.args,f9241),datascript.parser.postwalk.call(null,self__.binding,f9241),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9242,acc9243){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9242,self__.binding,datascript.parser.collect.call(null,pred9242,self__.args,datascript.parser.collect.call(null,pred9242,self__.fn,acc9243)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9243){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9243,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__9246){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__9246),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__9246),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__9246),null,cljs.core.dissoc.call(null,G__9246,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9256,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9258 = (((k9256 instanceof cljs.core.Keyword))?k9256.fqn:null);
switch (G__9258) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9256,else__5289__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9255){
var self__ = this;
var G__9255__$1 = this;
return (new cljs.core.RecordIter((0),G__9255__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9255){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9259 = cljs.core.keyword_identical_QMARK_;
var expr__9260 = k__5294__auto__;
if(cljs.core.truth_(pred__9259.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__9260))){
return (new datascript.parser.RuleExpr(G__9255,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9259.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__9260))){
return (new datascript.parser.RuleExpr(self__.source,G__9255,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9259.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__9260))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__9255,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9255),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9255){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__9255,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9252){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f9252),datascript.parser.postwalk.call(null,self__.name,f9252),datascript.parser.postwalk.call(null,self__.args,f9252),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9253,acc9254){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9253,self__.args,datascript.parser.collect.call(null,pred9253,self__.name,datascript.parser.collect.call(null,pred9253,self__.source,acc9254)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9254){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9254,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__9257){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__9257),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__9257),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__9257),null,cljs.core.dissoc.call(null,G__9257,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9267,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9269 = (((k9267 instanceof cljs.core.Keyword))?k9267.fqn:null);
switch (G__9269) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9267,else__5289__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.Not{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9266){
var self__ = this;
var G__9266__$1 = this;
return (new cljs.core.RecordIter((0),G__9266__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9266){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9270 = cljs.core.keyword_identical_QMARK_;
var expr__9271 = k__5294__auto__;
if(cljs.core.truth_(pred__9270.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__9271))){
return (new datascript.parser.Not(G__9266,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9270.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__9271))){
return (new datascript.parser.Not(self__.source,G__9266,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9270.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__9271))){
return (new datascript.parser.Not(self__.source,self__.vars,G__9266,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9266),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9266){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__9266,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9263){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f9263),datascript.parser.postwalk.call(null,self__.vars,f9263),datascript.parser.postwalk.call(null,self__.clauses,f9263),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9264,acc9265){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9264,self__.clauses,datascript.parser.collect.call(null,pred9264,self__.vars,datascript.parser.collect.call(null,pred9264,self__.source,acc9265)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9265){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9265,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__9268){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__9268),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__9268),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__9268),null,cljs.core.dissoc.call(null,G__9268,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9278,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9280 = (((k9278 instanceof cljs.core.Keyword))?k9278.fqn:null);
switch (G__9280) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9278,else__5289__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.Or{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9277){
var self__ = this;
var G__9277__$1 = this;
return (new cljs.core.RecordIter((0),G__9277__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9277){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9281 = cljs.core.keyword_identical_QMARK_;
var expr__9282 = k__5294__auto__;
if(cljs.core.truth_(pred__9281.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__9282))){
return (new datascript.parser.Or(G__9277,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9281.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__9282))){
return (new datascript.parser.Or(self__.source,G__9277,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9281.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__9282))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__9277,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9277),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9277){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__9277,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9274){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f9274),datascript.parser.postwalk.call(null,self__.rule_vars,f9274),datascript.parser.postwalk.call(null,self__.clauses,f9274),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9275,acc9276){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9275,self__.clauses,datascript.parser.collect.call(null,pred9275,self__.rule_vars,datascript.parser.collect.call(null,pred9275,self__.source,acc9276)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9276){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9276,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__9279){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__9279),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__9279),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__9279),null,cljs.core.dissoc.call(null,G__9279,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9289,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9291 = (((k9289 instanceof cljs.core.Keyword))?k9289.fqn:null);
switch (G__9291) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9289,else__5289__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.And{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9288){
var self__ = this;
var G__9288__$1 = this;
return (new cljs.core.RecordIter((0),G__9288__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9288){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9292 = cljs.core.keyword_identical_QMARK_;
var expr__9293 = k__5294__auto__;
if(cljs.core.truth_(pred__9292.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__9293))){
return (new datascript.parser.And(G__9288,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9288),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9288){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__9288,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9285){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f9285),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9286,acc9287){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9286,self__.clauses,acc9287);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9287){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9287,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__9290){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__9290),null,cljs.core.dissoc.call(null,G__9290,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});

datascript.parser.parse_clause;

datascript.parser.parse_clauses;
datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__4672__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
var or__4672__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4672__auto____$1)){
return or__4672__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4423__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var source_STAR_ = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9297 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__9297,(0),null);
var next_form = cljs.core.nth.call(null,vec__9297,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4425__auto____$1)){
var pattern_STAR_ = temp__4425__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__9299 = form;
var fn = cljs.core.nth.call(null,vec__9299,(0),null);
var args = cljs.core.nthnext.call(null,vec__9299,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__4672__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__4660__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4660__auto__)){
return args_STAR_;
} else {
return and__4660__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4425__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9301 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__9301,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__9301,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__9304 = form;
var call = cljs.core.nth.call(null,vec__9304,(0),null);
var binding = cljs.core.nth.call(null,vec__9304,(1),null);
var temp__4425__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9305 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__9305,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__9305,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4425__auto____$1)){
var binding_STAR_ = temp__4425__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9308 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__9308,(0),null);
var next_form = cljs.core.nth.call(null,vec__9308,(1),null);
var vec__9309 = next_form;
var name = cljs.core.nth.call(null,vec__9309,(0),null);
var args = cljs.core.nthnext.call(null,vec__9309,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_9312 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_9312)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_9312)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9315 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__9315,(0),null);
var next_form = cljs.core.nth.call(null,vec__9315,(1),null);
var vec__9316 = next_form;
var sym = cljs.core.nth.call(null,vec__9316,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__9316,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9319 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__9319,(0),null);
var next_form = cljs.core.nth.call(null,vec__9319,(1),null);
var vec__9320 = next_form;
var sym = cljs.core.nth.call(null,vec__9320,(0),null);
var vars = cljs.core.nth.call(null,vec__9320,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__9320,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__4660__auto__ = vars_STAR_;
if(cljs.core.truth_(and__4660__auto__)){
return clauses_STAR_;
} else {
return and__4660__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__9329 = clause;
var map__9329__$1 = ((((!((map__9329 == null)))?((((map__9329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9329):map__9329);
var map__9330 = cljs.core.get.call(null,map__9329__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__9330__$1 = ((((!((map__9330 == null)))?((((map__9330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9330):map__9330);
var required = cljs.core.get.call(null,map__9330__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__9330__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__9329__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__9333_9337 = cljs.core.seq.call(null,clauses);
var chunk__9334_9338 = null;
var count__9335_9339 = (0);
var i__9336_9340 = (0);
while(true){
if((i__9336_9340 < count__9335_9339)){
var clause_9341__$1 = cljs.core._nth.call(null,chunk__9334_9338,i__9336_9340);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_9341__$1], null),form);

var G__9342 = seq__9333_9337;
var G__9343 = chunk__9334_9338;
var G__9344 = count__9335_9339;
var G__9345 = (i__9336_9340 + (1));
seq__9333_9337 = G__9342;
chunk__9334_9338 = G__9343;
count__9335_9339 = G__9344;
i__9336_9340 = G__9345;
continue;
} else {
var temp__4425__auto___9346 = cljs.core.seq.call(null,seq__9333_9337);
if(temp__4425__auto___9346){
var seq__9333_9347__$1 = temp__4425__auto___9346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9333_9347__$1)){
var c__5475__auto___9348 = cljs.core.chunk_first.call(null,seq__9333_9347__$1);
var G__9349 = cljs.core.chunk_rest.call(null,seq__9333_9347__$1);
var G__9350 = c__5475__auto___9348;
var G__9351 = cljs.core.count.call(null,c__5475__auto___9348);
var G__9352 = (0);
seq__9333_9337 = G__9349;
chunk__9334_9338 = G__9350;
count__9335_9339 = G__9351;
i__9336_9340 = G__9352;
continue;
} else {
var clause_9353__$1 = cljs.core.first.call(null,seq__9333_9347__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_9353__$1], null),form);

var G__9354 = cljs.core.next.call(null,seq__9333_9347__$1);
var G__9355 = null;
var G__9356 = (0);
var G__9357 = (0);
seq__9333_9337 = G__9354;
chunk__9334_9338 = G__9355;
count__9335_9339 = G__9356;
i__9336_9340 = G__9357;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9360 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__9360,(0),null);
var next_form = cljs.core.nth.call(null,vec__9360,(1),null);
var vec__9361 = next_form;
var sym = cljs.core.nth.call(null,vec__9361,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__9361,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9364 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__9364,(0),null);
var next_form = cljs.core.nth.call(null,vec__9364,(1),null);
var vec__9365 = next_form;
var sym = cljs.core.nth.call(null,vec__9365,(0),null);
var vars = cljs.core.nth.call(null,vec__9365,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__9365,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__4660__auto__ = vars_STAR_;
if(cljs.core.truth_(and__4660__auto__)){
return clauses_STAR_;
} else {
return and__4660__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__4672__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
var or__4672__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__4672__auto____$1)){
return or__4672__auto____$1;
} else {
var or__4672__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__4672__auto____$2)){
return or__4672__auto____$2;
} else {
var or__4672__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__4672__auto____$3)){
return or__4672__auto____$3;
} else {
var or__4672__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__4672__auto____$4)){
return or__4672__auto____$4;
} else {
var or__4672__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__4672__auto____$5)){
return or__4672__auto____$5;
} else {
var or__4672__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__4672__auto____$6)){
return or__4672__auto____$6;
} else {
var or__4672__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__4672__auto____$7)){
return or__4672__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__4672__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9371,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9373 = (((k9371 instanceof cljs.core.Keyword))?k9371.fqn:null);
switch (G__9373) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9371,else__5289__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9370){
var self__ = this;
var G__9370__$1 = this;
return (new cljs.core.RecordIter((0),G__9370__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9370){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9374 = cljs.core.keyword_identical_QMARK_;
var expr__9375 = k__5294__auto__;
if(cljs.core.truth_(pred__9374.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__9375))){
return (new datascript.parser.RuleBranch(G__9370,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9374.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__9375))){
return (new datascript.parser.RuleBranch(self__.vars,G__9370,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9370),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9370){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__9370,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9367){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f9367),datascript.parser.postwalk.call(null,self__.clauses,f9367),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9368,acc9369){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9368,self__.clauses,datascript.parser.collect.call(null,pred9368,self__.vars,acc9369));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9369){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9369,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__9372){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__9372),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__9372),null,cljs.core.dissoc.call(null,G__9372,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9382,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9384 = (((k9382 instanceof cljs.core.Keyword))?k9382.fqn:null);
switch (G__9384) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9382,else__5289__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.Rule{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9381){
var self__ = this;
var G__9381__$1 = this;
return (new cljs.core.RecordIter((0),G__9381__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9381){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9385 = cljs.core.keyword_identical_QMARK_;
var expr__9386 = k__5294__auto__;
if(cljs.core.truth_(pred__9385.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__9386))){
return (new datascript.parser.Rule(G__9381,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9385.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__9386))){
return (new datascript.parser.Rule(self__.name,G__9381,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9381),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9381){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__9381,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9378){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f9378),datascript.parser.postwalk.call(null,self__.branches,f9378),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9379,acc9380){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9379,self__.branches,datascript.parser.collect.call(null,pred9379,self__.name,acc9380));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9380){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9380,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__9383){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__9383),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__9383),null,cljs.core.dissoc.call(null,G__9383,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__9389_SHARP_){
return (p1__9389_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__9390_SHARP_){
return (p1__9390_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__9393 = form;
var head = cljs.core.nth.call(null,vec__9393,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__9393,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__9394 = head;
var name = cljs.core.nth.call(null,vec__9394,(0),null);
var vars = cljs.core.nthnext.call(null,vec__9394,(1));
var name_STAR_ = (function (){var or__4672__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__4672__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__9401 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__9403 = null;
var count__9404 = (0);
var i__9405 = (0);
while(true){
if((i__9405 < count__9404)){
var b = cljs.core._nth.call(null,chunk__9403,i__9405);
var vars_9407 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_9407))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_9407)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__9408 = seq__9401;
var G__9409 = chunk__9403;
var G__9410 = count__9404;
var G__9411 = (i__9405 + (1));
seq__9401 = G__9408;
chunk__9403 = G__9409;
count__9404 = G__9410;
i__9405 = G__9411;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9401);
if(temp__4425__auto__){
var seq__9401__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9401__$1)){
var c__5475__auto__ = cljs.core.chunk_first.call(null,seq__9401__$1);
var G__9412 = cljs.core.chunk_rest.call(null,seq__9401__$1);
var G__9413 = c__5475__auto__;
var G__9414 = cljs.core.count.call(null,c__5475__auto__);
var G__9415 = (0);
seq__9401 = G__9412;
chunk__9403 = G__9413;
count__9404 = G__9414;
i__9405 = G__9415;
continue;
} else {
var b = cljs.core.first.call(null,seq__9401__$1);
var vars_9416 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_9416))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_9416)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__9417 = cljs.core.next.call(null,seq__9401__$1);
var G__9418 = null;
var G__9419 = (0);
var G__9420 = (0);
seq__9401 = G__9417;
chunk__9403 = G__9418;
count__9404 = G__9419;
i__9405 = G__9420;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__5444__auto__ = (function datascript$parser$parse_rules_$_iter__9430(s__9431){
return (new cljs.core.LazySeq(null,(function (){
var s__9431__$1 = s__9431;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9431__$1);
if(temp__4425__auto__){
var s__9431__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9431__$2)){
var c__5442__auto__ = cljs.core.chunk_first.call(null,s__9431__$2);
var size__5443__auto__ = cljs.core.count.call(null,c__5442__auto__);
var b__9433 = cljs.core.chunk_buffer.call(null,size__5443__auto__);
if((function (){var i__9432 = (0);
while(true){
if((i__9432 < size__5443__auto__)){
var vec__9436 = cljs.core._nth.call(null,c__5442__auto__,i__9432);
var name = cljs.core.nth.call(null,vec__9436,(0),null);
var branches = cljs.core.nth.call(null,vec__9436,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__9432,vec__9436,name,branches,c__5442__auto__,size__5443__auto__,b__9433,s__9431__$2,temp__4425__auto__){
return (function (p1__9421_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__9421_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__9421_SHARP_),null,null,null));
});})(i__9432,vec__9436,name,branches,c__5442__auto__,size__5443__auto__,b__9433,s__9431__$2,temp__4425__auto__))
,branches);
cljs.core.chunk_append.call(null,b__9433,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__9438 = (i__9432 + (1));
i__9432 = G__9438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9433),datascript$parser$parse_rules_$_iter__9430.call(null,cljs.core.chunk_rest.call(null,s__9431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9433),null);
}
} else {
var vec__9437 = cljs.core.first.call(null,s__9431__$2);
var name = cljs.core.nth.call(null,vec__9437,(0),null);
var branches = cljs.core.nth.call(null,vec__9437,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__9437,name,branches,s__9431__$2,temp__4425__auto__){
return (function (p1__9421_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__9421_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__9421_SHARP_),null,null,null));
});})(vec__9437,name,branches,s__9431__$2,temp__4425__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__9430.call(null,cljs.core.rest.call(null,s__9431__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5444__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5286__auto__,k__5287__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return cljs.core._lookup.call(null,this__5286__auto____$1,k__5287__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5288__auto__,k9443,else__5289__auto__){
var self__ = this;
var this__5288__auto____$1 = this;
var G__9445 = (((k9443 instanceof cljs.core.Keyword))?k9443.fqn:null);
switch (G__9445) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9443,else__5289__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5300__auto__,writer__5301__auto__,opts__5302__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
var pr_pair__5303__auto__ = ((function (this__5300__auto____$1){
return (function (keyval__5304__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,cljs.core.pr_writer,""," ","",opts__5302__auto__,keyval__5304__auto__);
});})(this__5300__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5301__auto__,pr_pair__5303__auto__,"#datascript.parser.Query{",", ","}",opts__5302__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9442){
var self__ = this;
var G__9442__$1 = this;
return (new cljs.core.RecordIter((0),G__9442__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5284__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5290__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5281__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if(!((h__5107__auto__ == null))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = cljs.core.hash_imap.call(null,this__5281__auto____$1);
self__.__hash = h__5107__auto____$1;

return h__5107__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5282__auto__,other__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4660__auto__ = other__5283__auto__;
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = (this__5282__auto____$1.constructor === other__5283__auto__.constructor);
if(and__4660__auto____$1){
return cljs.core.equiv_map.call(null,this__5282__auto____$1,other__5283__auto__);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5295__auto__,k__5296__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__5296__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5295__auto____$1),self__.__meta),k__5296__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5296__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5293__auto__,k__5294__auto__,G__9442){
var self__ = this;
var this__5293__auto____$1 = this;
var pred__9446 = cljs.core.keyword_identical_QMARK_;
var expr__9447 = k__5294__auto__;
if(cljs.core.truth_(pred__9446.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__9447))){
return (new datascript.parser.Query(G__9442,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9446.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__9447))){
return (new datascript.parser.Query(self__.find,G__9442,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9446.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__9447))){
return (new datascript.parser.Query(self__.find,self__.with$,G__9442,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9446.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__9447))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__9442,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5294__auto__,G__9442),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5285__auto__,G__9442){
var self__ = this;
var this__5285__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__9442,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5291__auto__,entry__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5292__auto__)){
return cljs.core._assoc.call(null,this__5291__auto____$1,cljs.core._nth.call(null,entry__5292__auto__,(0)),cljs.core._nth.call(null,entry__5292__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5291__auto____$1,entry__5292__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7928__auto__,f9439){
var self__ = this;
var this__7928__auto____$1 = this;
var new__7929__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f9439),datascript.parser.postwalk.call(null,self__.with$,f9439),datascript.parser.postwalk.call(null,self__.in$,f9439),datascript.parser.postwalk.call(null,self__.where,f9439),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__7928__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__7930__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__7929__auto__,meta__7930__auto__);
} else {
return new__7929__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7931__auto__,pred9440,acc9441){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect.call(null,pred9440,self__.where,datascript.parser.collect.call(null,pred9440,self__.in$,datascript.parser.collect.call(null,pred9440,self__.with$,datascript.parser.collect.call(null,pred9440,self__.find,acc9441))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7931__auto__,acc9441){
var self__ = this;
var ___7931__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9441,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__5320__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__5320__auto__,writer__5321__auto__){
return cljs.core._write.call(null,writer__5321__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__9444){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__9444),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__9444),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__9444),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__9444),null,cljs.core.dissoc.call(null,G__9444,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4423__auto__)){
var q = temp__4423__auto__;
if((q instanceof cljs.core.Keyword)){
var G__9450 = parsed;
var G__9451 = q;
var G__9452 = cljs.core.next.call(null,qs);
parsed = G__9450;
key = G__9451;
qs = G__9452;
continue;
} else {
var G__9453 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__9454 = key;
var G__9455 = cljs.core.next.call(null,qs);
parsed = G__9453;
key = G__9454;
qs = G__9455;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_9462 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_9463 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_9464 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_9465 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_9466 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_9462,with_vars_9463),clojure.set.union.call(null,where_vars_9465,in_vars_9464));
var shared_9467 = clojure.set.intersection.call(null,find_vars_9462,with_vars_9463);
if(cljs.core.empty_QMARK_.call(null,unknown_9466)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_9466)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_9466,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_9467)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_9467)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_9467,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_9468 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_9469 = datascript.parser.collect.call(null,((function (in_vars_9468){
return (function (p1__9456_SHARP_){
return (p1__9456_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_9468))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_9470 = datascript.parser.collect.call(null,((function (in_vars_9468,in_sources_9469){
return (function (p1__9457_SHARP_){
return (p1__9457_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_9468,in_sources_9469))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__4660__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_9468);
if(cljs.core.truth_(and__4660__auto__)){
var and__4660__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_9469);
if(cljs.core.truth_(and__4660__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_9470);
} else {
return and__4660__auto____$1;
}
} else {
return and__4660__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_9471 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_9471))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_9472 = datascript.parser.collect.call(null,(function (p1__9458_SHARP_){
return (p1__9458_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_9473 = datascript.parser.collect.call(null,((function (in_sources_9472){
return (function (p1__9459_SHARP_){
return (p1__9459_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_9472))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_9474 = clojure.set.difference.call(null,where_sources_9473,in_sources_9472);
if(cljs.core.empty_QMARK_.call(null,unknown_9474)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_9474)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_9474,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__9460_SHARP_){
return (p1__9460_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__9461_SHARP_){
return (p1__9461_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4425__auto__)){
var with$ = temp__4425__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map?rel=1459672182078