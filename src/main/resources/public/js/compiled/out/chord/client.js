// Compiled by ClojureScript 1.7.170 {}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 *  ws-url           - (required) link to websocket service
 *  opts             - (optional) map to configure reading/writing channels
 *    :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 *    :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 *    :format        - (optional) data format to use on the channel, (at the moment)
 *                                either :edn (default), :json, :json-kw or :str.
 * 
 * Usage:
 *  (:require [cljs.core.async :as a])
 * 
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 *                                        :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(var_args){
var args__5737__auto__ = [];
var len__5730__auto___14675 = arguments.length;
var i__5731__auto___14676 = (0);
while(true){
if((i__5731__auto___14676 < len__5730__auto___14675)){
args__5737__auto__.push((arguments[i__5731__auto___14676]));

var G__14677 = (i__5731__auto___14676 + (1));
i__5731__auto___14676 = G__14677;
continue;
} else {
}
break;
}

var argseq__5738__auto__ = ((((1) < args__5737__auto__.length))?(new cljs.core.IndexedSeq(args__5737__auto__.slice((1)),(0))):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5738__auto__);
});

chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__14573){
var vec__14574 = p__14573;
var map__14575 = cljs.core.nth.call(null,vec__14574,(0),null);
var map__14575__$1 = ((((!((map__14575 == null)))?((((map__14575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14575):map__14575);
var opts = map__14575__$1;
var read_ch = cljs.core.get.call(null,map__14575__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__14575__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.call(null,map__14575__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var web_socket = (new WebSocket(ws_url));
var map__14577 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__4672__auto__ = read_ch;
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__4672__auto__ = write_ch;
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__14577__$1 = ((((!((map__14577 == null)))?((((map__14577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14577):map__14577);
var read_ch__$1 = cljs.core.get.call(null,map__14577__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.call(null,map__14577__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__14577,map__14577__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14574,map__14575,map__14575__$1,opts,read_ch,write_ch,format){
return (function (p1__14569_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__14569_SHARP_);
});})(web_socket,map__14577,map__14577__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14574,map__14575,map__14575__$1,opts,read_ch,write_ch,format))
;

web_socket.onclose = ((function (web_socket,map__14577,map__14577__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14574,map__14575,map__14575__$1,opts,read_ch,write_ch,format){
return (function (p1__14570_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__14570_SHARP_);
});})(web_socket,map__14577,map__14577__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14574,map__14575,map__14575__$1,opts,read_ch,write_ch,format))
;

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__14577,map__14577__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14574,map__14575,map__14575__$1,opts,read_ch,write_ch,format){
return (function (){
return web_socket.close();
});})(web_socket,map__14577,map__14577__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14574,map__14575,map__14575__$1,opts,read_ch,write_ch,format))
], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__11523__auto___14678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___14678,ws_chan,initial_ch,web_socket,map__14577,map__14577__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14574,map__14575,map__14575__$1,opts,read_ch,write_ch,format){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___14678,ws_chan,initial_ch,web_socket,map__14577,map__14577__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14574,map__14575,map__14575__$1,opts,read_ch,write_ch,format){
return (function (state_14638){
var state_val_14639 = (state_14638[(1)]);
if((state_val_14639 === (7))){
var inst_14634 = (state_14638[(2)]);
var state_14638__$1 = state_14638;
var statearr_14640_14679 = state_14638__$1;
(statearr_14640_14679[(2)] = inst_14634);

(statearr_14640_14679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (20))){
var state_14638__$1 = state_14638;
var statearr_14641_14680 = state_14638__$1;
(statearr_14641_14680[(2)] = null);

(statearr_14641_14680[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (1))){
var inst_14579 = false;
var state_14638__$1 = (function (){var statearr_14642 = state_14638;
(statearr_14642[(7)] = inst_14579);

return statearr_14642;
})();
var statearr_14643_14681 = state_14638__$1;
(statearr_14643_14681[(2)] = null);

(statearr_14643_14681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (4))){
var inst_14592 = (state_14638[(8)]);
var inst_14590 = (state_14638[(9)]);
var inst_14590__$1 = (state_14638[(2)]);
var inst_14591 = cljs.core.nth.call(null,inst_14590__$1,(0),null);
var inst_14592__$1 = cljs.core.nth.call(null,inst_14590__$1,(1),null);
var inst_14593 = cljs.core._EQ_.call(null,inst_14592__$1,open_ch);
var state_14638__$1 = (function (){var statearr_14644 = state_14638;
(statearr_14644[(8)] = inst_14592__$1);

(statearr_14644[(9)] = inst_14590__$1);

(statearr_14644[(10)] = inst_14591);

return statearr_14644;
})();
if(inst_14593){
var statearr_14645_14682 = state_14638__$1;
(statearr_14645_14682[(1)] = (5));

} else {
var statearr_14646_14683 = state_14638__$1;
(statearr_14646_14683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (15))){
var inst_14619 = (state_14638[(2)]);
var state_14638__$1 = state_14638;
var statearr_14647_14684 = state_14638__$1;
(statearr_14647_14684[(2)] = inst_14619);

(statearr_14647_14684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (21))){
var inst_14630 = (state_14638[(2)]);
var state_14638__$1 = state_14638;
var statearr_14648_14685 = state_14638__$1;
(statearr_14648_14685[(2)] = inst_14630);

(statearr_14648_14685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (13))){
var state_14638__$1 = state_14638;
var statearr_14649_14686 = state_14638__$1;
(statearr_14649_14686[(2)] = null);

(statearr_14649_14686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (6))){
var inst_14592 = (state_14638[(8)]);
var inst_14605 = cljs.core._EQ_.call(null,inst_14592,close_ch);
var state_14638__$1 = state_14638;
if(inst_14605){
var statearr_14650_14687 = state_14638__$1;
(statearr_14650_14687[(1)] = (9));

} else {
var statearr_14651_14688 = state_14638__$1;
(statearr_14651_14688[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (17))){
var state_14638__$1 = state_14638;
var statearr_14652_14689 = state_14638__$1;
(statearr_14652_14689[(2)] = initial_ch);

(statearr_14652_14689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (3))){
var inst_14636 = (state_14638[(2)]);
var state_14638__$1 = state_14638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14638__$1,inst_14636);
} else {
if((state_val_14639 === (12))){
var inst_14579 = (state_14638[(7)]);
var state_14638__$1 = state_14638;
if(cljs.core.truth_(inst_14579)){
var statearr_14653_14690 = state_14638__$1;
(statearr_14653_14690[(1)] = (16));

} else {
var statearr_14654_14691 = state_14638__$1;
(statearr_14654_14691[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (2))){
var inst_14586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14587 = [open_ch,close_ch];
var inst_14588 = (new cljs.core.PersistentVector(null,2,(5),inst_14586,inst_14587,null));
var state_14638__$1 = state_14638;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14638__$1,(4),inst_14588);
} else {
if((state_val_14639 === (19))){
var inst_14591 = (state_14638[(10)]);
var state_14638__$1 = state_14638;
var statearr_14655_14692 = state_14638__$1;
(statearr_14655_14692[(2)] = inst_14591);

(statearr_14655_14692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (11))){
var inst_14632 = (state_14638[(2)]);
var state_14638__$1 = state_14638;
var statearr_14656_14693 = state_14638__$1;
(statearr_14656_14693[(2)] = inst_14632);

(statearr_14656_14693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (9))){
var inst_14590 = (state_14638[(9)]);
var inst_14609 = (state_14638[(11)]);
var inst_14608 = cljs.core.nth.call(null,inst_14590,(0),null);
var inst_14609__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_14608);
var state_14638__$1 = (function (){var statearr_14657 = state_14638;
(statearr_14657[(11)] = inst_14609__$1);

return statearr_14657;
})();
if(cljs.core.truth_(inst_14609__$1)){
var statearr_14658_14694 = state_14638__$1;
(statearr_14658_14694[(1)] = (12));

} else {
var statearr_14659_14695 = state_14638__$1;
(statearr_14659_14695[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (5))){
var inst_14590 = (state_14638[(9)]);
var inst_14596 = cljs.core.nth.call(null,inst_14590,(0),null);
var inst_14597 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_14598 = [ws_chan];
var inst_14599 = cljs.core.PersistentHashMap.fromArrays(inst_14597,inst_14598);
var state_14638__$1 = (function (){var statearr_14660 = state_14638;
(statearr_14660[(12)] = inst_14596);

return statearr_14660;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14638__$1,(8),initial_ch,inst_14599);
} else {
if((state_val_14639 === (14))){
var inst_14622 = (state_14638[(2)]);
var inst_14623 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_14624 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_14638__$1 = (function (){var statearr_14661 = state_14638;
(statearr_14661[(13)] = inst_14622);

(statearr_14661[(14)] = inst_14623);

return statearr_14661;
})();
var statearr_14662_14696 = state_14638__$1;
(statearr_14662_14696[(2)] = inst_14624);

(statearr_14662_14696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (16))){
var state_14638__$1 = state_14638;
var statearr_14663_14697 = state_14638__$1;
(statearr_14663_14697[(2)] = read_ch__$1);

(statearr_14663_14697[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (10))){
var inst_14592 = (state_14638[(8)]);
var inst_14626 = cljs.core._EQ_.call(null,inst_14592,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_14638__$1 = state_14638;
if(inst_14626){
var statearr_14664_14698 = state_14638__$1;
(statearr_14664_14698[(1)] = (19));

} else {
var statearr_14665_14699 = state_14638__$1;
(statearr_14665_14699[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (18))){
var inst_14609 = (state_14638[(11)]);
var inst_14614 = (state_14638[(2)]);
var inst_14615 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_14616 = [inst_14609];
var inst_14617 = cljs.core.PersistentHashMap.fromArrays(inst_14615,inst_14616);
var state_14638__$1 = state_14638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14638__$1,(15),inst_14614,inst_14617);
} else {
if((state_val_14639 === (8))){
var inst_14601 = (state_14638[(2)]);
var inst_14602 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_14579 = true;
var state_14638__$1 = (function (){var statearr_14666 = state_14638;
(statearr_14666[(15)] = inst_14601);

(statearr_14666[(16)] = inst_14602);

(statearr_14666[(7)] = inst_14579);

return statearr_14666;
})();
var statearr_14667_14700 = state_14638__$1;
(statearr_14667_14700[(2)] = null);

(statearr_14667_14700[(1)] = (2));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11523__auto___14678,ws_chan,initial_ch,web_socket,map__14577,map__14577__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14574,map__14575,map__14575__$1,opts,read_ch,write_ch,format))
;
return ((function (switch__11411__auto__,c__11523__auto___14678,ws_chan,initial_ch,web_socket,map__14577,map__14577__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14574,map__14575,map__14575__$1,opts,read_ch,write_ch,format){
return (function() {
var chord$client$state_machine__11412__auto__ = null;
var chord$client$state_machine__11412__auto____0 = (function (){
var statearr_14671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14671[(0)] = chord$client$state_machine__11412__auto__);

(statearr_14671[(1)] = (1));

return statearr_14671;
});
var chord$client$state_machine__11412__auto____1 = (function (state_14638){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_14638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e14672){if((e14672 instanceof Object)){
var ex__11415__auto__ = e14672;
var statearr_14673_14701 = state_14638;
(statearr_14673_14701[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14702 = state_14638;
state_14638 = G__14702;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
chord$client$state_machine__11412__auto__ = function(state_14638){
switch(arguments.length){
case 0:
return chord$client$state_machine__11412__auto____0.call(this);
case 1:
return chord$client$state_machine__11412__auto____1.call(this,state_14638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__11412__auto____0;
chord$client$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__11412__auto____1;
return chord$client$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___14678,ws_chan,initial_ch,web_socket,map__14577,map__14577__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14574,map__14575,map__14575__$1,opts,read_ch,write_ch,format))
})();
var state__11525__auto__ = (function (){var statearr_14674 = f__11524__auto__.call(null);
(statearr_14674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___14678);

return statearr_14674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___14678,ws_chan,initial_ch,web_socket,map__14577,map__14577__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14574,map__14575,map__14575__$1,opts,read_ch,write_ch,format))
);


return initial_ch;
});

chord.client.ws_ch.cljs$lang$maxFixedArity = (1);

chord.client.ws_ch.cljs$lang$applyTo = (function (seq14571){
var G__14572 = cljs.core.first.call(null,seq14571);
var seq14571__$1 = cljs.core.next.call(null,seq14571);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(G__14572,seq14571__$1);
});

//# sourceMappingURL=client.js.map?rel=1459672189662