// Compiled by ClojureScript 1.7.170 {}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__11523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto__){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto__){
return (function (state_14339){
var state_val_14340 = (state_14339[(1)]);
if((state_val_14340 === (1))){
var state_14339__$1 = state_14339;
var statearr_14341_14356 = state_14339__$1;
(statearr_14341_14356[(2)] = null);

(statearr_14341_14356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (2))){
var state_14339__$1 = state_14339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14339__$1,(4),ch);
} else {
if((state_val_14340 === (3))){
var inst_14337 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14339__$1,inst_14337);
} else {
if((state_val_14340 === (4))){
var inst_14329 = (state_14339[(7)]);
var inst_14329__$1 = (state_14339[(2)]);
var state_14339__$1 = (function (){var statearr_14342 = state_14339;
(statearr_14342[(7)] = inst_14329__$1);

return statearr_14342;
})();
if(cljs.core.truth_(inst_14329__$1)){
var statearr_14343_14357 = state_14339__$1;
(statearr_14343_14357[(1)] = (5));

} else {
var statearr_14344_14358 = state_14339__$1;
(statearr_14344_14358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (5))){
var inst_14329 = (state_14339[(7)]);
var inst_14331 = ws.send(inst_14329);
var state_14339__$1 = (function (){var statearr_14345 = state_14339;
(statearr_14345[(8)] = inst_14331);

return statearr_14345;
})();
var statearr_14346_14359 = state_14339__$1;
(statearr_14346_14359[(2)] = null);

(statearr_14346_14359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (6))){
var state_14339__$1 = state_14339;
var statearr_14347_14360 = state_14339__$1;
(statearr_14347_14360[(2)] = null);

(statearr_14347_14360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14340 === (7))){
var inst_14335 = (state_14339[(2)]);
var state_14339__$1 = state_14339;
var statearr_14348_14361 = state_14339__$1;
(statearr_14348_14361[(2)] = inst_14335);

(statearr_14348_14361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__11523__auto__))
;
return ((function (switch__11411__auto__,c__11523__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__11412__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__11412__auto____0 = (function (){
var statearr_14352 = [null,null,null,null,null,null,null,null,null];
(statearr_14352[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__11412__auto__);

(statearr_14352[(1)] = (1));

return statearr_14352;
});
var chord$channels$write_to_ws_BANG__$_state_machine__11412__auto____1 = (function (state_14339){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_14339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e14353){if((e14353 instanceof Object)){
var ex__11415__auto__ = e14353;
var statearr_14354_14362 = state_14339;
(statearr_14354_14362[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14363 = state_14339;
state_14339 = G__14363;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__11412__auto__ = function(state_14339){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__11412__auto____1.call(this,state_14339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__11412__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__11412__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto__))
})();
var state__11525__auto__ = (function (){var statearr_14355 = f__11524__auto__.call(null);
(statearr_14355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto__);

return statearr_14355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto__))
);

return c__11523__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__5737__auto__ = [];
var len__5730__auto___14374 = arguments.length;
var i__5731__auto___14375 = (0);
while(true){
if((i__5731__auto___14375 < len__5730__auto___14374)){
args__5737__auto__.push((arguments[i__5731__auto___14375]));

var G__14376 = (i__5731__auto___14375 + (1));
i__5731__auto___14375 = G__14376;
continue;
} else {
}
break;
}

var argseq__5738__auto__ = ((((2) < args__5737__auto__.length))?(new cljs.core.IndexedSeq(args__5737__auto__.slice((2)),(0))):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5738__auto__);
});

chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__14367){
var vec__14368 = p__14367;
var map__14369 = cljs.core.nth.call(null,vec__14368,(0),null);
var map__14369__$1 = ((((!((map__14369 == null)))?((((map__14369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14369):map__14369);
var on_close = cljs.core.get.call(null,map__14369__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if(typeof chord.channels.t_chord$channels14371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels14371 = (function (read_ch,write_ch,p__14367,vec__14368,map__14369,on_close,meta14372){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__14367 = p__14367;
this.vec__14368 = vec__14368;
this.map__14369 = map__14369;
this.on_close = on_close;
this.meta14372 = meta14372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.channels.t_chord$channels14371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__14368,map__14369,map__14369__$1,on_close){
return (function (_14373,meta14372__$1){
var self__ = this;
var _14373__$1 = this;
return (new chord.channels.t_chord$channels14371(self__.read_ch,self__.write_ch,self__.p__14367,self__.vec__14368,self__.map__14369,self__.on_close,meta14372__$1));
});})(vec__14368,map__14369,map__14369__$1,on_close))
;

chord.channels.t_chord$channels14371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__14368,map__14369,map__14369__$1,on_close){
return (function (_14373){
var self__ = this;
var _14373__$1 = this;
return self__.meta14372;
});})(vec__14368,map__14369,map__14369__$1,on_close))
;

chord.channels.t_chord$channels14371.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

chord.channels.t_chord$channels14371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__14368,map__14369,map__14369__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__14368,map__14369,map__14369__$1,on_close))
;

chord.channels.t_chord$channels14371.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

chord.channels.t_chord$channels14371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__14368,map__14369,map__14369__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__14368,map__14369,map__14369__$1,on_close))
;

chord.channels.t_chord$channels14371.prototype.cljs$core$async$impl$protocols$Channel$ = true;

chord.channels.t_chord$channels14371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__14368,map__14369,map__14369__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__14368,map__14369,map__14369__$1,on_close))
;

chord.channels.t_chord$channels14371.getBasis = ((function (vec__14368,map__14369,map__14369__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__14367","p__14367",-2112812585,null),new cljs.core.Symbol(null,"vec__14368","vec__14368",-987759047,null),new cljs.core.Symbol(null,"map__14369","map__14369",-70456742,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta14372","meta14372",-241342915,null)], null);
});})(vec__14368,map__14369,map__14369__$1,on_close))
;

chord.channels.t_chord$channels14371.cljs$lang$type = true;

chord.channels.t_chord$channels14371.cljs$lang$ctorStr = "chord.channels/t_chord$channels14371";

chord.channels.t_chord$channels14371.cljs$lang$ctorPrWriter = ((function (vec__14368,map__14369,map__14369__$1,on_close){
return (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"chord.channels/t_chord$channels14371");
});})(vec__14368,map__14369,map__14369__$1,on_close))
;

chord.channels.__GT_t_chord$channels14371 = ((function (vec__14368,map__14369,map__14369__$1,on_close){
return (function chord$channels$__GT_t_chord$channels14371(read_ch__$1,write_ch__$1,p__14367__$1,vec__14368__$1,map__14369__$2,on_close__$1,meta14372){
return (new chord.channels.t_chord$channels14371(read_ch__$1,write_ch__$1,p__14367__$1,vec__14368__$1,map__14369__$2,on_close__$1,meta14372));
});})(vec__14368,map__14369,map__14369__$1,on_close))
;

}

return (new chord.channels.t_chord$channels14371(read_ch,write_ch,p__14367,vec__14368,map__14369__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2);

chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq14364){
var G__14365 = cljs.core.first.call(null,seq14364);
var seq14364__$1 = cljs.core.next.call(null,seq14364);
var G__14366 = cljs.core.first.call(null,seq14364__$1);
var seq14364__$2 = cljs.core.next.call(null,seq14364__$1);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(G__14365,G__14366,seq14364__$2);
});

//# sourceMappingURL=channels.js.map?rel=1459672189007