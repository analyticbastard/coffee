// Compiled by ClojureScript 1.7.170 {}
goog.provide('coffee_client.core');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('coffee.schema');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('chord.client');
goog.require('cljs.core.async');
goog.require('datascript.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof coffee_client.core.app !== 'undefined'){
} else {
coffee_client.core.app = document.getElementById("app");
}
coffee_client.core.create_ws = (function coffee_client$core$create_ws(ch){
var c__11523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto__){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto__){
return (function (state_15170){
var state_val_15171 = (state_15170[(1)]);
if((state_val_15171 === (7))){
var state_15170__$1 = state_15170;
var statearr_15172_15201 = state_15170__$1;
(statearr_15172_15201[(2)] = false);

(statearr_15172_15201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (1))){
var inst_15125 = window.location;
var inst_15126 = inst_15125.hostname;
var inst_15127 = inst_15125.port;
var inst_15128 = [cljs.core.str("wss://"),cljs.core.str(inst_15126),cljs.core.str(":"),cljs.core.str(inst_15127),cljs.core.str("/ws")].join('');
var inst_15129 = [new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_15130 = [new cljs.core.Keyword(null,"transit-json","transit-json",1168016579)];
var inst_15131 = cljs.core.PersistentHashMap.fromArrays(inst_15129,inst_15130);
var inst_15132 = chord.client.ws_ch.call(null,inst_15128,inst_15131);
var state_15170__$1 = state_15170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15170__$1,(2),inst_15132);
} else {
if((state_val_15171 === (4))){
var state_15170__$1 = state_15170;
var statearr_15173_15202 = state_15170__$1;
(statearr_15173_15202[(2)] = false);

(statearr_15173_15202[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (15))){
var state_15170__$1 = state_15170;
var statearr_15174_15203 = state_15170__$1;
(statearr_15174_15203[(2)] = null);

(statearr_15174_15203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (13))){
var inst_15155 = (state_15170[(7)]);
var inst_15160 = (inst_15155 == null);
var state_15170__$1 = state_15170;
var statearr_15175_15204 = state_15170__$1;
(statearr_15175_15204[(2)] = inst_15160);

(statearr_15175_15204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (6))){
var state_15170__$1 = state_15170;
var statearr_15176_15205 = state_15170__$1;
(statearr_15176_15205[(2)] = true);

(statearr_15176_15205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (17))){
var inst_15168 = (state_15170[(2)]);
var state_15170__$1 = state_15170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15170__$1,inst_15168);
} else {
if((state_val_15171 === (3))){
var inst_15134 = (state_15170[(8)]);
var inst_15139 = inst_15134.cljs$lang$protocol_mask$partition0$;
var inst_15140 = (inst_15139 & (64));
var inst_15141 = inst_15134.cljs$core$ISeq$;
var inst_15142 = (inst_15140) || (inst_15141);
var state_15170__$1 = state_15170;
if(cljs.core.truth_(inst_15142)){
var statearr_15177_15206 = state_15170__$1;
(statearr_15177_15206[(1)] = (6));

} else {
var statearr_15178_15207 = state_15170__$1;
(statearr_15178_15207[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (12))){
var inst_15156 = (state_15170[(9)]);
var state_15170__$1 = state_15170;
var statearr_15179_15208 = state_15170__$1;
(statearr_15179_15208[(2)] = inst_15156);

(statearr_15179_15208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (2))){
var inst_15134 = (state_15170[(8)]);
var inst_15134__$1 = (state_15170[(2)]);
var inst_15136 = (inst_15134__$1 == null);
var inst_15137 = cljs.core.not.call(null,inst_15136);
var state_15170__$1 = (function (){var statearr_15180 = state_15170;
(statearr_15180[(8)] = inst_15134__$1);

return statearr_15180;
})();
if(inst_15137){
var statearr_15181_15209 = state_15170__$1;
(statearr_15181_15209[(1)] = (3));

} else {
var statearr_15182_15210 = state_15170__$1;
(statearr_15182_15210[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (11))){
var inst_15155 = (state_15170[(7)]);
var inst_15156 = (state_15170[(9)]);
var inst_15154 = (state_15170[(2)]);
var inst_15155__$1 = cljs.core.get.call(null,inst_15154,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var inst_15156__$1 = cljs.core.get.call(null,inst_15154,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_15157 = cljs.core.println.call(null,"create",inst_15155__$1);
var state_15170__$1 = (function (){var statearr_15183 = state_15170;
(statearr_15183[(10)] = inst_15157);

(statearr_15183[(7)] = inst_15155__$1);

(statearr_15183[(9)] = inst_15156__$1);

return statearr_15183;
})();
if(cljs.core.truth_(inst_15156__$1)){
var statearr_15184_15211 = state_15170__$1;
(statearr_15184_15211[(1)] = (12));

} else {
var statearr_15185_15212 = state_15170__$1;
(statearr_15185_15212[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (9))){
var inst_15134 = (state_15170[(8)]);
var inst_15151 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15134);
var state_15170__$1 = state_15170;
var statearr_15186_15213 = state_15170__$1;
(statearr_15186_15213[(2)] = inst_15151);

(statearr_15186_15213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (5))){
var inst_15149 = (state_15170[(2)]);
var state_15170__$1 = state_15170;
if(cljs.core.truth_(inst_15149)){
var statearr_15187_15214 = state_15170__$1;
(statearr_15187_15214[(1)] = (9));

} else {
var statearr_15188_15215 = state_15170__$1;
(statearr_15188_15215[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (14))){
var inst_15162 = (state_15170[(2)]);
var state_15170__$1 = state_15170;
if(cljs.core.truth_(inst_15162)){
var statearr_15189_15216 = state_15170__$1;
(statearr_15189_15216[(1)] = (15));

} else {
var statearr_15190_15217 = state_15170__$1;
(statearr_15190_15217[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (16))){
var inst_15155 = (state_15170[(7)]);
var state_15170__$1 = state_15170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15170__$1,(18),ch,inst_15155);
} else {
if((state_val_15171 === (10))){
var inst_15134 = (state_15170[(8)]);
var state_15170__$1 = state_15170;
var statearr_15191_15218 = state_15170__$1;
(statearr_15191_15218[(2)] = inst_15134);

(statearr_15191_15218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (18))){
var inst_15166 = (state_15170[(2)]);
var state_15170__$1 = state_15170;
var statearr_15192_15219 = state_15170__$1;
(statearr_15192_15219[(2)] = inst_15166);

(statearr_15192_15219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (8))){
var inst_15146 = (state_15170[(2)]);
var state_15170__$1 = state_15170;
var statearr_15193_15220 = state_15170__$1;
(statearr_15193_15220[(2)] = inst_15146);

(statearr_15193_15220[(1)] = (5));


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
});})(c__11523__auto__))
;
return ((function (switch__11411__auto__,c__11523__auto__){
return (function() {
var coffee_client$core$create_ws_$_state_machine__11412__auto__ = null;
var coffee_client$core$create_ws_$_state_machine__11412__auto____0 = (function (){
var statearr_15197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15197[(0)] = coffee_client$core$create_ws_$_state_machine__11412__auto__);

(statearr_15197[(1)] = (1));

return statearr_15197;
});
var coffee_client$core$create_ws_$_state_machine__11412__auto____1 = (function (state_15170){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_15170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15198){if((e15198 instanceof Object)){
var ex__11415__auto__ = e15198;
var statearr_15199_15221 = state_15170;
(statearr_15199_15221[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15222 = state_15170;
state_15170 = G__15222;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
coffee_client$core$create_ws_$_state_machine__11412__auto__ = function(state_15170){
switch(arguments.length){
case 0:
return coffee_client$core$create_ws_$_state_machine__11412__auto____0.call(this);
case 1:
return coffee_client$core$create_ws_$_state_machine__11412__auto____1.call(this,state_15170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coffee_client$core$create_ws_$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = coffee_client$core$create_ws_$_state_machine__11412__auto____0;
coffee_client$core$create_ws_$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = coffee_client$core$create_ws_$_state_machine__11412__auto____1;
return coffee_client$core$create_ws_$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto__))
})();
var state__11525__auto__ = (function (){var statearr_15200 = f__11524__auto__.call(null);
(statearr_15200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto__);

return statearr_15200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto__))
);

return c__11523__auto__;
});
coffee_client.core.send_BANG_ = (function coffee_client$core$send_BANG_(server_ch,msg){
cljs.core.println.call(null,"send!",msg);

var c__11523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto__){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto__){
return (function (state_15241){
var state_val_15242 = (state_15241[(1)]);
if((state_val_15242 === (1))){
var inst_15237 = cljs.core.PersistentVector.EMPTY;
var state_15241__$1 = (function (){var statearr_15243 = state_15241;
(statearr_15243[(7)] = inst_15237);

return statearr_15243;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15241__$1,(2),server_ch,msg);
} else {
if((state_val_15242 === (2))){
var inst_15239 = (state_15241[(2)]);
var state_15241__$1 = state_15241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15241__$1,inst_15239);
} else {
return null;
}
}
});})(c__11523__auto__))
;
return ((function (switch__11411__auto__,c__11523__auto__){
return (function() {
var coffee_client$core$send_BANG__$_state_machine__11412__auto__ = null;
var coffee_client$core$send_BANG__$_state_machine__11412__auto____0 = (function (){
var statearr_15247 = [null,null,null,null,null,null,null,null];
(statearr_15247[(0)] = coffee_client$core$send_BANG__$_state_machine__11412__auto__);

(statearr_15247[(1)] = (1));

return statearr_15247;
});
var coffee_client$core$send_BANG__$_state_machine__11412__auto____1 = (function (state_15241){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_15241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15248){if((e15248 instanceof Object)){
var ex__11415__auto__ = e15248;
var statearr_15249_15251 = state_15241;
(statearr_15249_15251[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15252 = state_15241;
state_15241 = G__15252;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
coffee_client$core$send_BANG__$_state_machine__11412__auto__ = function(state_15241){
switch(arguments.length){
case 0:
return coffee_client$core$send_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return coffee_client$core$send_BANG__$_state_machine__11412__auto____1.call(this,state_15241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coffee_client$core$send_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = coffee_client$core$send_BANG__$_state_machine__11412__auto____0;
coffee_client$core$send_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = coffee_client$core$send_BANG__$_state_machine__11412__auto____1;
return coffee_client$core$send_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto__))
})();
var state__11525__auto__ = (function (){var statearr_15250 = f__11524__auto__.call(null);
(statearr_15250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto__);

return statearr_15250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto__))
);

return c__11523__auto__;
});
coffee_client.core.send_datascript_tx_BANG_ = (function coffee_client$core$send_datascript_tx_BANG_(server_ch,msg){
cljs.core.println.call(null,"send-datascript-tx!",msg);

return coffee_client.core.send_BANG_.call(null,server_ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datascript-tx","datascript-tx",-1427549734),msg], null));
});
coffee_client.core.process_command = (function coffee_client$core$process_command(conn,message){
var command = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(message);
var G__15254 = (((command instanceof cljs.core.Keyword))?command.fqn:null);
switch (G__15254) {
case "shutdown":
return datascript.core.reset_conn_BANG_.call(null,conn,cljs.core.deref.call(null,datascript.core.create_conn.call(null,coffee.schema.create_schema.call(null))));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(command)].join('')));

}
});
coffee_client.core.receive_BANG_ = (function coffee_client$core$receive_BANG_(server_ch,conn){
var c__11523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto__){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto__){
return (function (state_15374){
var state_val_15375 = (state_15374[(1)]);
if((state_val_15375 === (7))){
var inst_15350 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
if(cljs.core.truth_(inst_15350)){
var statearr_15376_15408 = state_15374__$1;
(statearr_15376_15408[(1)] = (11));

} else {
var statearr_15377_15409 = state_15374__$1;
(statearr_15377_15409[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (1))){
var state_15374__$1 = state_15374;
var statearr_15378_15410 = state_15374__$1;
(statearr_15378_15410[(2)] = null);

(statearr_15378_15410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (4))){
var inst_15335 = (state_15374[(7)]);
var inst_15335__$1 = (state_15374[(2)]);
var inst_15337 = (inst_15335__$1 == null);
var inst_15338 = cljs.core.not.call(null,inst_15337);
var state_15374__$1 = (function (){var statearr_15379 = state_15374;
(statearr_15379[(7)] = inst_15335__$1);

return statearr_15379;
})();
if(inst_15338){
var statearr_15380_15411 = state_15374__$1;
(statearr_15380_15411[(1)] = (5));

} else {
var statearr_15381_15412 = state_15374__$1;
(statearr_15381_15412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (15))){
var state_15374__$1 = state_15374;
var statearr_15382_15413 = state_15374__$1;
(statearr_15382_15413[(2)] = null);

(statearr_15382_15413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (13))){
var inst_15356 = (state_15374[(8)]);
var inst_15355 = (state_15374[(2)]);
var inst_15356__$1 = cljs.core.get.call(null,inst_15355,new cljs.core.Keyword(null,"message","message",-406056002));
var inst_15357 = cljs.core.get.call(null,inst_15355,new cljs.core.Keyword(null,"_","_",1453416199));
var inst_15358 = cljs.core.println.call(null,"receive!",inst_15356__$1);
var state_15374__$1 = (function (){var statearr_15383 = state_15374;
(statearr_15383[(9)] = inst_15357);

(statearr_15383[(10)] = inst_15358);

(statearr_15383[(8)] = inst_15356__$1);

return statearr_15383;
})();
if(cljs.core.truth_(inst_15356__$1)){
var statearr_15384_15414 = state_15374__$1;
(statearr_15384_15414[(1)] = (14));

} else {
var statearr_15385_15415 = state_15374__$1;
(statearr_15385_15415[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (6))){
var state_15374__$1 = state_15374;
var statearr_15386_15416 = state_15374__$1;
(statearr_15386_15416[(2)] = false);

(statearr_15386_15416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (17))){
var inst_15356 = (state_15374[(8)]);
var inst_15362 = coffee_client.core.process_command.call(null,conn,inst_15356);
var state_15374__$1 = state_15374;
var statearr_15387_15417 = state_15374__$1;
(statearr_15387_15417[(2)] = inst_15362);

(statearr_15387_15417[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (3))){
var inst_15372 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15374__$1,inst_15372);
} else {
if((state_val_15375 === (12))){
var inst_15335 = (state_15374[(7)]);
var state_15374__$1 = state_15374;
var statearr_15388_15418 = state_15374__$1;
(statearr_15388_15418[(2)] = inst_15335);

(statearr_15388_15418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (2))){
var state_15374__$1 = state_15374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15374__$1,(4),server_ch);
} else {
if((state_val_15375 === (19))){
var inst_15366 = (state_15374[(2)]);
var state_15374__$1 = (function (){var statearr_15389 = state_15374;
(statearr_15389[(11)] = inst_15366);

return statearr_15389;
})();
var statearr_15390_15419 = state_15374__$1;
(statearr_15390_15419[(2)] = null);

(statearr_15390_15419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (11))){
var inst_15335 = (state_15374[(7)]);
var inst_15352 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15335);
var state_15374__$1 = state_15374;
var statearr_15391_15420 = state_15374__$1;
(statearr_15391_15420[(2)] = inst_15352);

(statearr_15391_15420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (9))){
var state_15374__$1 = state_15374;
var statearr_15392_15421 = state_15374__$1;
(statearr_15392_15421[(2)] = false);

(statearr_15392_15421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (5))){
var inst_15335 = (state_15374[(7)]);
var inst_15340 = inst_15335.cljs$lang$protocol_mask$partition0$;
var inst_15341 = (inst_15340 & (64));
var inst_15342 = inst_15335.cljs$core$ISeq$;
var inst_15343 = (inst_15341) || (inst_15342);
var state_15374__$1 = state_15374;
if(cljs.core.truth_(inst_15343)){
var statearr_15393_15422 = state_15374__$1;
(statearr_15393_15422[(1)] = (8));

} else {
var statearr_15394_15423 = state_15374__$1;
(statearr_15394_15423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (14))){
var inst_15356 = (state_15374[(8)]);
var inst_15360 = cljs.core.map_QMARK_.call(null,inst_15356);
var state_15374__$1 = state_15374;
if(inst_15360){
var statearr_15395_15424 = state_15374__$1;
(statearr_15395_15424[(1)] = (17));

} else {
var statearr_15396_15425 = state_15374__$1;
(statearr_15396_15425[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (16))){
var inst_15370 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
var statearr_15397_15426 = state_15374__$1;
(statearr_15397_15426[(2)] = inst_15370);

(statearr_15397_15426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (10))){
var inst_15347 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
var statearr_15398_15427 = state_15374__$1;
(statearr_15398_15427[(2)] = inst_15347);

(statearr_15398_15427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (18))){
var inst_15356 = (state_15374[(8)]);
var inst_15364 = datascript.core.transact_BANG_.call(null,conn,inst_15356);
var state_15374__$1 = state_15374;
var statearr_15399_15428 = state_15374__$1;
(statearr_15399_15428[(2)] = inst_15364);

(statearr_15399_15428[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (8))){
var state_15374__$1 = state_15374;
var statearr_15400_15429 = state_15374__$1;
(statearr_15400_15429[(2)] = true);

(statearr_15400_15429[(1)] = (10));


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
});})(c__11523__auto__))
;
return ((function (switch__11411__auto__,c__11523__auto__){
return (function() {
var coffee_client$core$receive_BANG__$_state_machine__11412__auto__ = null;
var coffee_client$core$receive_BANG__$_state_machine__11412__auto____0 = (function (){
var statearr_15404 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15404[(0)] = coffee_client$core$receive_BANG__$_state_machine__11412__auto__);

(statearr_15404[(1)] = (1));

return statearr_15404;
});
var coffee_client$core$receive_BANG__$_state_machine__11412__auto____1 = (function (state_15374){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_15374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15405){if((e15405 instanceof Object)){
var ex__11415__auto__ = e15405;
var statearr_15406_15430 = state_15374;
(statearr_15406_15430[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15431 = state_15374;
state_15374 = G__15431;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
coffee_client$core$receive_BANG__$_state_machine__11412__auto__ = function(state_15374){
switch(arguments.length){
case 0:
return coffee_client$core$receive_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return coffee_client$core$receive_BANG__$_state_machine__11412__auto____1.call(this,state_15374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coffee_client$core$receive_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = coffee_client$core$receive_BANG__$_state_machine__11412__auto____0;
coffee_client$core$receive_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = coffee_client$core$receive_BANG__$_state_machine__11412__auto____1;
return coffee_client$core$receive_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto__))
})();
var state__11525__auto__ = (function (){var statearr_15407 = f__11524__auto__.call(null);
(statearr_15407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto__);

return statearr_15407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto__))
);

return c__11523__auto__;
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"init-server-ch","init-server-ch",-660705954),(function (db,p__15432){
var vec__15433 = p__15432;
var _ = cljs.core.nth.call(null,vec__15433,(0),null);
var server_ch = cljs.core.nth.call(null,vec__15433,(1),null);
cljs.core.println.call(null,"init",server_ch);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"server-ch","server-ch",-1863126302),server_ch);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
var conn_post = datascript.core.create_conn.call(null,coffee.schema.create_schema.call(null));
var server_ch = new cljs.core.Keyword(null,"server-ch","server-ch",-1863126302).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(server_ch)){
coffee_client.core.receive_BANG_.call(null,server_ch,conn_post);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"conn-pre","conn-pre",-1052121643),datascript.core.create_conn.call(null,coffee.schema.create_schema.call(null)),new cljs.core.Keyword(null,"conn-post","conn-post",-617181692),conn_post);
} else {
return null;
}
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"pre-login","pre-login",-1863273842),(function (db,p__15434){
var vec__15435 = p__15434;
var _ = cljs.core.nth.call(null,vec__15435,(0),null);
var user_name = cljs.core.nth.call(null,vec__15435,(1),null);
var server_ch = new cljs.core.Keyword(null,"server-ch","server-ch",-1863126302).cljs$core$IFn$_invoke$arity$1(db);
var tx_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("user","name","user/name",1848814598),user_name], null)], null);
coffee_client.core.send_datascript_tx_BANG_.call(null,server_ch,tx_data);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user-name","user-name",1302913545),user_name);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"pre-organize","pre-organize",-1898725680),(function (db,_){
var user_name_15436 = new cljs.core.Keyword(null,"user-name","user-name",1302913545).cljs$core$IFn$_invoke$arity$1(db);
var server_ch_15437 = new cljs.core.Keyword(null,"server-ch","server-ch",-1863126302).cljs$core$IFn$_invoke$arity$1(db);
var tx_data_15438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session","name","session/name",-279653677),coffee.schema.get_session_name.call(null)], null),new cljs.core.Keyword("session","organizer","session/organizer",405688552),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),user_name_15436], null)], null)], null);
coffee_client.core.send_datascript_tx_BANG_.call(null,server_ch_15437,tx_data_15438);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"pre-choose","pre-choose",1921530519),(function (db,p__15439){
var vec__15440 = p__15439;
var _ = cljs.core.nth.call(null,vec__15440,(0),null);
var choice = cljs.core.nth.call(null,vec__15440,(1),null);
var user_name_15441 = new cljs.core.Keyword(null,"user-name","user-name",1302913545).cljs$core$IFn$_invoke$arity$1(db);
var server_ch_15442 = new cljs.core.Keyword(null,"server-ch","server-ch",-1863126302).cljs$core$IFn$_invoke$arity$1(db);
var conn_post_15443 = new cljs.core.Keyword(null,"conn-post","conn-post",-617181692).cljs$core$IFn$_invoke$arity$1(db);
var db_post_15444 = datascript.core.db.call(null,conn_post_15443);
var prev_choice_15445 = cljs.core.first.call(null,datascript.core.q.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?coffee-name","?coffee-name",-565371373,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?user-name","?user-name",1211171476,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Symbol(null,"?user-name","?user-name",1211171476,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("user","choice","user/choice",-1378487514),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword("coffee","name","coffee/name",925343749),new cljs.core.Symbol(null,"?coffee-name","?coffee-name",-565371373,null)], null)], null),db_post_15444,user_name_15441));
var tx_data_15446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,prev_choice_15445,choice))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),user_name_15441], null),new cljs.core.Keyword("user","choice","user/choice",-1378487514),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("coffee","name","coffee/name",925343749),choice], null)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),user_name_15441], null),new cljs.core.Keyword("user","choice","user/choice",-1378487514),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("coffee","name","coffee/name",925343749),choice], null)], null))], null);
coffee_client.core.send_datascript_tx_BANG_.call(null,server_ch_15442,tx_data_15446);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"pre-shutdown","pre-shutdown",-2143887751),(function (db,_){
var server_ch_15447 = new cljs.core.Keyword(null,"server-ch","server-ch",-1863126302).cljs$core$IFn$_invoke$arity$1(db);
coffee_client.core.send_BANG_.call(null,server_ch_15447,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"shutdown","shutdown",-1876565378)], null));

return db;
}));
coffee_client.core.datascript_query = (function coffee_client$core$datascript_query(conn,query){
var db = datascript.core.db.call(null,conn);
return datascript.core.q.call(null,query,db);
});
coffee_client.core.query__GT_reaction = (function coffee_client$core$query__GT_reaction(var_args){
var args15448 = [];
var len__5730__auto___15451 = arguments.length;
var i__5731__auto___15452 = (0);
while(true){
if((i__5731__auto___15452 < len__5730__auto___15451)){
args15448.push((arguments[i__5731__auto___15452]));

var G__15453 = (i__5731__auto___15452 + (1));
i__5731__auto___15452 = G__15453;
continue;
} else {
}
break;
}

var G__15450 = args15448.length;
switch (G__15450) {
case 3:
return coffee_client.core.query__GT_reaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return coffee_client.core.query__GT_reaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15448.length)].join('')));

}
});

coffee_client.core.query__GT_reaction.cljs$core$IFn$_invoke$arity$3 = (function (db,query,post_process_fn){
var temp__4425__auto__ = new cljs.core.Keyword(null,"conn-post","conn-post",-617181692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
if(cljs.core.truth_(temp__4425__auto__)){
var conn = temp__4425__auto__;
var initial = post_process_fn.call(null,coffee_client.core.datascript_query.call(null,conn,query));
var result_atom = reagent.core.atom.call(null,null);
var db_listener_callback = ((function (initial,result_atom,conn,temp__4425__auto__){
return (function (tx_report){
var value = post_process_fn.call(null,coffee_client.core.datascript_query.call(null,conn,query));
return cljs.core.reset_BANG_.call(null,result_atom,value);
});})(initial,result_atom,conn,temp__4425__auto__))
;
datascript.core.listen_BANG_.call(null,conn,query,db_listener_callback);

return reagent.ratom.make_reaction.call(null,((function (initial,result_atom,db_listener_callback,conn,temp__4425__auto__){
return (function (){
var or__4672__auto__ = cljs.core.deref.call(null,result_atom);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
return initial;
}
});})(initial,result_atom,db_listener_callback,conn,temp__4425__auto__))
);
} else {
return null;
}
});

coffee_client.core.query__GT_reaction.cljs$core$IFn$_invoke$arity$2 = (function (db,query){
return coffee_client.core.query__GT_reaction.call(null,db,query,cljs.core.identity);
});

coffee_client.core.query__GT_reaction.cljs$lang$maxFixedArity = 3;
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"pre-login","pre-login",-1863273842),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"user-name","user-name",1302913545).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return db;
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"post-login","post-login",685807527),(function (db,_){
return coffee_client.core.query__GT_reaction.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null)], null));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"post-organize","post-organize",-1253205674),(function (db,_){
return coffee_client.core.query__GT_reaction.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("session","organizer","session/organizer",405688552),new cljs.core.Symbol(null,"?u","?u",749886731,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null)], null),cljs.core.first);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"post-coffee-types","post-coffee-types",-457792273),(function (db,_){
return coffee_client.core.query__GT_reaction.call(null,db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"?img","?img",-73766042,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword("coffee","name","coffee/name",925343749),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword("coffee","img","coffee/img",-449197646),new cljs.core.Symbol(null,"?img","?img",-73766042,null)], null)], null));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"post-choose","post-choose",1072686010),(function (db,_){
return coffee_client.core.query__GT_reaction.call(null,db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?user-name","?user-name",1211171476,null),new cljs.core.Symbol(null,"?coffee-name","?coffee-name",-565371373,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("user","choice","user/choice",-1378487514),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?u","?u",749886731,null),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Symbol(null,"?user-name","?user-name",1211171476,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword("coffee","name","coffee/name",925343749),new cljs.core.Symbol(null,"?coffee-name","?coffee-name",-565371373,null)], null)], null));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"post-shutdown","post-shutdown",1606949998),(function (db,_){
return coffee_client.core.query__GT_reaction.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?s","?s",456183954,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?s","?s",456183954,null),new cljs.core.Keyword("session","organizer","session/organizer",405688552),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null));
}));
coffee_client.core.error_component = (function coffee_client$core$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Couldn't connect to websocket: ",cljs.core.pr_str.call(null,error)], null);
});
coffee_client.core.shutdown_component = (function coffee_client$core$shutdown_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.bth-default","button.btn.bth-default",-1580675063),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return secretary.core.dispatch_BANG_.call(null,"/");
})], null),"Start over"], null)], null);
});
coffee_client.core.navbar_component = (function coffee_client$core$navbar_component(page_to_switch_to){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-default","nav.navbar.navbar-default",560267194),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),((cljs.core._EQ_.call(null,page_to_switch_to,"/dashboard"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav.navbar-nav.navbar-left","div.nav.navbar-nav.navbar-left",-128524278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-btn.glyphicon.glyphicon.glyphicon-chevron-left","button.navbar-btn.glyphicon.glyphicon.glyphicon-chevron-left",-1641765768),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return secretary.core.dispatch_BANG_.call(null,"/dashboard");
})], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.navbar-text","p.navbar-text",-511122982),[cljs.core.str("Organized by "),cljs.core.str(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-organize","post-organize",-1253205674)], null))))].join('')], null),((cljs.core._EQ_.call(null,page_to_switch_to,"/users"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav.navbar-nav.navbar-right","div.nav.navbar-nav.navbar-right",1580197841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-btn.glyphicon.glyphicon-shopping-cart","button.navbar-btn.glyphicon.glyphicon-shopping-cart",-1610177490),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return secretary.core.dispatch_BANG_.call(null,"/users");
})], null)], null)], null):null)], null)], null);
});
coffee_client.core.users_dashboard_component = (function coffee_client$core$users_dashboard_component(){
var choice = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-choose","post-choose",1072686010)], null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.navbar_component,"/dashboard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),(function (){var iter__5444__auto__ = ((function (choice){
return (function coffee_client$core$users_dashboard_component_$_iter__15459(s__15460){
return (new cljs.core.LazySeq(null,((function (choice){
return (function (){
var s__15460__$1 = s__15460;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15460__$1);
if(temp__4425__auto__){
var s__15460__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15460__$2)){
var c__5442__auto__ = cljs.core.chunk_first.call(null,s__15460__$2);
var size__5443__auto__ = cljs.core.count.call(null,c__5442__auto__);
var b__15462 = cljs.core.chunk_buffer.call(null,size__5443__auto__);
if((function (){var i__15461 = (0);
while(true){
if((i__15461 < size__5443__auto__)){
var user = cljs.core._nth.call(null,c__5442__auto__,i__15461);
cljs.core.chunk_append.call(null,b__15462,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),user,choice.call(null,user)], null));

var G__15463 = (i__15461 + (1));
i__15461 = G__15463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15462),coffee_client$core$users_dashboard_component_$_iter__15459.call(null,cljs.core.chunk_rest.call(null,s__15460__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15462),null);
}
} else {
var user = cljs.core.first.call(null,s__15460__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),user,choice.call(null,user)], null),coffee_client$core$users_dashboard_component_$_iter__15459.call(null,cljs.core.rest.call(null,s__15460__$2)));
}
} else {
return null;
}
break;
}
});})(choice))
,null,null));
});})(choice))
;
return iter__5444__auto__.call(null,cljs.core.map.call(null,cljs.core.first,choice));
})()], null)], null);
});
coffee_client.core.get_count_for_coffee_type = (function coffee_client$core$get_count_for_coffee_type(all_users_choices,coffee_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str("x "),cljs.core.str(cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__15464_SHARP_){
return cljs.core._EQ_.call(null,coffee_name,p1__15464_SHARP_);
}),cljs.core.vals.call(null,all_users_choices))))].join('')], null);
});
coffee_client.core.coffee_button_component = (function coffee_client$core$coffee_button_component(coffee_name,coffee_img,all_users_choices){
var user_name = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre-login","pre-login",-1863273842)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.btn.btn-default","li.btn.btn-default",1198230866),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (user_name){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre-choose","pre-choose",1921530519),coffee_name], null));
});})(user_name))
,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (user_name){
return (function (p__15467){
var vec__15468 = p__15467;
var u = cljs.core.nth.call(null,vec__15468,(0),null);
var c = cljs.core.nth.call(null,vec__15468,(1),null);
return (cljs.core._EQ_.call(null,user_name,u)) && (cljs.core._EQ_.call(null,coffee_name,c));
});})(user_name))
,cljs.core.vec.call(null,all_users_choices))))?"active":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),coffee_img,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null),new cljs.core.Keyword(null,"width","width",-384071477),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),coffee_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.get_count_for_coffee_type,all_users_choices,coffee_name], null)], null);
});
coffee_client.core.coffee_types = (function coffee_client$core$coffee_types(){
var all_users_choices = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-choose","post-choose",1072686010)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.btn-group-vertical","ul.btn-group-vertical",-1460135337),(function (){var iter__5444__auto__ = ((function (all_users_choices){
return (function coffee_client$core$coffee_types_$_iter__15477(s__15478){
return (new cljs.core.LazySeq(null,((function (all_users_choices){
return (function (){
var s__15478__$1 = s__15478;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15478__$1);
if(temp__4425__auto__){
var s__15478__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15478__$2)){
var c__5442__auto__ = cljs.core.chunk_first.call(null,s__15478__$2);
var size__5443__auto__ = cljs.core.count.call(null,c__5442__auto__);
var b__15480 = cljs.core.chunk_buffer.call(null,size__5443__auto__);
if((function (){var i__15479 = (0);
while(true){
if((i__15479 < size__5443__auto__)){
var vec__15483 = cljs.core._nth.call(null,c__5442__auto__,i__15479);
var name = cljs.core.nth.call(null,vec__15483,(0),null);
var img = cljs.core.nth.call(null,vec__15483,(1),null);
cljs.core.chunk_append.call(null,b__15480,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.coffee_button_component,name,img,all_users_choices], null));

var G__15485 = (i__15479 + (1));
i__15479 = G__15485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15480),coffee_client$core$coffee_types_$_iter__15477.call(null,cljs.core.chunk_rest.call(null,s__15478__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15480),null);
}
} else {
var vec__15484 = cljs.core.first.call(null,s__15478__$2);
var name = cljs.core.nth.call(null,vec__15484,(0),null);
var img = cljs.core.nth.call(null,vec__15484,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.coffee_button_component,name,img,all_users_choices], null),coffee_client$core$coffee_types_$_iter__15477.call(null,cljs.core.rest.call(null,s__15478__$2)));
}
} else {
return null;
}
break;
}
});})(all_users_choices))
,null,null));
});})(all_users_choices))
;
return iter__5444__auto__.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-coffee-types","post-coffee-types",-457792273)], null))));
})()], null);
});
coffee_client.core.main_dashboard_component = (function coffee_client$core$main_dashboard_component(){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-shutdown","post-shutdown",1606949998)], null))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.shutdown_component], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.navbar_component,"/users"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.panel-title","h3.panel-title",530261929),"Select your coffee"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.coffee_types], null)], null)], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre-login","pre-login",-1863273842)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-organize","post-organize",-1253205674)], null)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.bth-default","button.btn.bth-default",-1580675063),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre-shutdown","pre-shutdown",-2143887751)], null));
})], null),"Close coffee session"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.bth-default","button.btn.bth-default",-1580675063),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre-organize","pre-organize",-1898725680)], null));
})], null),"Take over session"], null))], null);
}
});
coffee_client.core.organize_component = (function coffee_client$core$organize_component(){
var organizer = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-organize","post-organize",-1253205674)], null));
if(cljs.core.truth_((function (){var and__4660__auto__ = organizer;
if(cljs.core.truth_(and__4660__auto__)){
return cljs.core.deref.call(null,organizer);
} else {
return and__4660__auto__;
}
})())){
secretary.core.dispatch_BANG_.call(null,"/dashboard");
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loginmodal-container","div.loginmodal-container",-2005337288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.form-sign-in-heading","h3.form-sign-in-heading",-1121324591),"Organize coffee session"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.btn-primary.btn-block","button.btn.btn-lg.btn-primary.btn-block",-258089332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (organizer){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre-organize","pre-organize",-1898725680)], null));
});})(organizer))
], null),"Organize coffee session"], null)], null)], null);
});
coffee_client.core.login_page = (function coffee_client$core$login_page(){
var user_login = reagent.core.atom.call(null,"");
var login_fn = ((function (user_login){
return (function (){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,user_login))){
return null;
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre-login","pre-login",-1863273842),cljs.core.deref.call(null,user_login)], null));
}
});})(user_login))
;
var text_input_component = ((function (user_login,login_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Name",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),((function (user_login,login_fn){
return (function (p1__15486_SHARP_){
if(cljs.core.truth_((function (){var and__4660__auto__ = cljs.core._EQ_.call(null,(13),p1__15486_SHARP_.charCode);
if(and__4660__auto__){
return cljs.core.not_empty.call(null,cljs.core.deref.call(null,user_login));
} else {
return and__4660__auto__;
}
})())){
return login_fn.call(null);
} else {
return null;
}
});})(user_login,login_fn))
,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (user_login,login_fn){
return (function (p1__15487_SHARP_){
return cljs.core.reset_BANG_.call(null,user_login,p1__15487_SHARP_.target.value);
});})(user_login,login_fn))
], null)], null);
});})(user_login,login_fn))
;
return ((function (user_login,login_fn,text_input_component){
return (function (){
var user_names_15488 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-login","post-login",685807527)], null));
if(cljs.core.truth_((function (){var and__4660__auto__ = user_names_15488;
if(cljs.core.truth_(and__4660__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,user_names_15488)),cljs.core.deref.call(null,user_login));
} else {
return and__4660__auto__;
}
})())){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-organize","post-organize",-1253205674)], null))))){
secretary.core.dispatch_BANG_.call(null,"/dashboard");
} else {
secretary.core.dispatch_BANG_.call(null,"/organize");
}
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loginmodal-container","div.loginmodal-container",-2005337288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-sign-in","div.form-sign-in",-1283230736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.form-sign-in-heading","h2.form-sign-in-heading",-175702329),"Sign In"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text_input_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-lg.btn-primary.btn-block","input.btn.btn-lg.btn-primary.btn-block",-1557219557),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),login_fn], null)], null)], null)], null)], null);
});
;})(user_login,login_fn,text_input_component))
});
if(typeof coffee_client.core.reload_data !== 'undefined'){
} else {
coffee_client.core.reload_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-page","last-page",-1966154825),"/"], null));
}
var action__14932__auto___15539 = (function (params__14933__auto__){
if(cljs.core.map_QMARK_.call(null,params__14933__auto__)){
var map__15489 = params__14933__auto__;
var map__15489__$1 = ((((!((map__15489 == null)))?((((map__15489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15489):map__15489);
cljs.core.swap_BANG_.call(null,coffee_client.core.reload_data,cljs.core.assoc,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),"/");

var ch = cljs.core.async.chan.call(null);
cljs.core.println.call(null,"jo");

coffee_client.core.create_ws.call(null,ch);

var c__11523__auto___15540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___15540,ch,map__15489,map__15489__$1){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___15540,ch,map__15489,map__15489__$1){
return (function (state_15498){
var state_val_15499 = (state_15498[(1)]);
if((state_val_15499 === (1))){
var inst_15491 = cljs.core.PersistentVector.EMPTY_NODE;
var state_15498__$1 = (function (){var statearr_15500 = state_15498;
(statearr_15500[(7)] = inst_15491);

return statearr_15500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15498__$1,(2),ch);
} else {
if((state_val_15499 === (2))){
var inst_15491 = (state_15498[(7)]);
var inst_15493 = (state_15498[(2)]);
var inst_15494 = [new cljs.core.Keyword(null,"init-server-ch","init-server-ch",-660705954),inst_15493];
var inst_15495 = (new cljs.core.PersistentVector(null,2,(5),inst_15491,inst_15494,null));
var inst_15496 = re_frame.core.dispatch.call(null,inst_15495);
var state_15498__$1 = state_15498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15498__$1,inst_15496);
} else {
return null;
}
}
});})(c__11523__auto___15540,ch,map__15489,map__15489__$1))
;
return ((function (switch__11411__auto__,c__11523__auto___15540,ch,map__15489,map__15489__$1){
return (function() {
var coffee_client$core$state_machine__11412__auto__ = null;
var coffee_client$core$state_machine__11412__auto____0 = (function (){
var statearr_15504 = [null,null,null,null,null,null,null,null];
(statearr_15504[(0)] = coffee_client$core$state_machine__11412__auto__);

(statearr_15504[(1)] = (1));

return statearr_15504;
});
var coffee_client$core$state_machine__11412__auto____1 = (function (state_15498){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_15498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15505){if((e15505 instanceof Object)){
var ex__11415__auto__ = e15505;
var statearr_15506_15541 = state_15498;
(statearr_15506_15541[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15542 = state_15498;
state_15498 = G__15542;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
coffee_client$core$state_machine__11412__auto__ = function(state_15498){
switch(arguments.length){
case 0:
return coffee_client$core$state_machine__11412__auto____0.call(this);
case 1:
return coffee_client$core$state_machine__11412__auto____1.call(this,state_15498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coffee_client$core$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = coffee_client$core$state_machine__11412__auto____0;
coffee_client$core$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = coffee_client$core$state_machine__11412__auto____1;
return coffee_client$core$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___15540,ch,map__15489,map__15489__$1))
})();
var state__11525__auto__ = (function (){var statearr_15507 = f__11524__auto__.call(null);
(statearr_15507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___15540);

return statearr_15507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___15540,ch,map__15489,map__15489__$1))
);


return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.login_page], null),coffee_client.core.app);
} else {
if(cljs.core.vector_QMARK_.call(null,params__14933__auto__)){
var vec__15508 = params__14933__auto__;
cljs.core.swap_BANG_.call(null,coffee_client.core.reload_data,cljs.core.assoc,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),"/");

var ch = cljs.core.async.chan.call(null);
cljs.core.println.call(null,"jo");

coffee_client.core.create_ws.call(null,ch);

var c__11523__auto___15543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___15543,ch,vec__15508){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___15543,ch,vec__15508){
return (function (state_15516){
var state_val_15517 = (state_15516[(1)]);
if((state_val_15517 === (1))){
var inst_15509 = cljs.core.PersistentVector.EMPTY_NODE;
var state_15516__$1 = (function (){var statearr_15518 = state_15516;
(statearr_15518[(7)] = inst_15509);

return statearr_15518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15516__$1,(2),ch);
} else {
if((state_val_15517 === (2))){
var inst_15509 = (state_15516[(7)]);
var inst_15511 = (state_15516[(2)]);
var inst_15512 = [new cljs.core.Keyword(null,"init-server-ch","init-server-ch",-660705954),inst_15511];
var inst_15513 = (new cljs.core.PersistentVector(null,2,(5),inst_15509,inst_15512,null));
var inst_15514 = re_frame.core.dispatch.call(null,inst_15513);
var state_15516__$1 = state_15516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15516__$1,inst_15514);
} else {
return null;
}
}
});})(c__11523__auto___15543,ch,vec__15508))
;
return ((function (switch__11411__auto__,c__11523__auto___15543,ch,vec__15508){
return (function() {
var coffee_client$core$state_machine__11412__auto__ = null;
var coffee_client$core$state_machine__11412__auto____0 = (function (){
var statearr_15522 = [null,null,null,null,null,null,null,null];
(statearr_15522[(0)] = coffee_client$core$state_machine__11412__auto__);

(statearr_15522[(1)] = (1));

return statearr_15522;
});
var coffee_client$core$state_machine__11412__auto____1 = (function (state_15516){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_15516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15523){if((e15523 instanceof Object)){
var ex__11415__auto__ = e15523;
var statearr_15524_15544 = state_15516;
(statearr_15524_15544[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15545 = state_15516;
state_15516 = G__15545;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
coffee_client$core$state_machine__11412__auto__ = function(state_15516){
switch(arguments.length){
case 0:
return coffee_client$core$state_machine__11412__auto____0.call(this);
case 1:
return coffee_client$core$state_machine__11412__auto____1.call(this,state_15516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coffee_client$core$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = coffee_client$core$state_machine__11412__auto____0;
coffee_client$core$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = coffee_client$core$state_machine__11412__auto____1;
return coffee_client$core$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___15543,ch,vec__15508))
})();
var state__11525__auto__ = (function (){var statearr_15525 = f__11524__auto__.call(null);
(statearr_15525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___15543);

return statearr_15525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___15543,ch,vec__15508))
);


return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.login_page], null),coffee_client.core.app);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__14932__auto___15539);

coffee_client.core.login = ((function (action__14932__auto___15539){
return (function coffee_client$core$login(var_args){
var args__5737__auto__ = [];
var len__5730__auto___15546 = arguments.length;
var i__5731__auto___15547 = (0);
while(true){
if((i__5731__auto___15547 < len__5730__auto___15546)){
args__5737__auto__.push((arguments[i__5731__auto___15547]));

var G__15548 = (i__5731__auto___15547 + (1));
i__5731__auto___15547 = G__15548;
continue;
} else {
}
break;
}

var argseq__5738__auto__ = ((((0) < args__5737__auto__.length))?(new cljs.core.IndexedSeq(args__5737__auto__.slice((0)),(0))):null);
return coffee_client.core.login.cljs$core$IFn$_invoke$arity$variadic(argseq__5738__auto__);
});})(action__14932__auto___15539))
;

coffee_client.core.login.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14932__auto___15539){
return (function (args__14931__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__14931__auto__);
});})(action__14932__auto___15539))
;

coffee_client.core.login.cljs$lang$maxFixedArity = (0);

coffee_client.core.login.cljs$lang$applyTo = ((function (action__14932__auto___15539){
return (function (seq15526){
return coffee_client.core.login.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15526));
});})(action__14932__auto___15539))
;

var action__14932__auto___15549 = (function (params__14933__auto__){
if(cljs.core.map_QMARK_.call(null,params__14933__auto__)){
var map__15527 = params__14933__auto__;
var map__15527__$1 = ((((!((map__15527 == null)))?((((map__15527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15527):map__15527);
cljs.core.swap_BANG_.call(null,coffee_client.core.reload_data,cljs.core.assoc,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),"/organize");

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.organize_component], null),coffee_client.core.app);
} else {
if(cljs.core.vector_QMARK_.call(null,params__14933__auto__)){
var vec__15529 = params__14933__auto__;
cljs.core.swap_BANG_.call(null,coffee_client.core.reload_data,cljs.core.assoc,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),"/organize");

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.organize_component], null),coffee_client.core.app);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/organize",action__14932__auto___15549);

coffee_client.core.organize = ((function (action__14932__auto___15549){
return (function coffee_client$core$organize(var_args){
var args__5737__auto__ = [];
var len__5730__auto___15550 = arguments.length;
var i__5731__auto___15551 = (0);
while(true){
if((i__5731__auto___15551 < len__5730__auto___15550)){
args__5737__auto__.push((arguments[i__5731__auto___15551]));

var G__15552 = (i__5731__auto___15551 + (1));
i__5731__auto___15551 = G__15552;
continue;
} else {
}
break;
}

var argseq__5738__auto__ = ((((0) < args__5737__auto__.length))?(new cljs.core.IndexedSeq(args__5737__auto__.slice((0)),(0))):null);
return coffee_client.core.organize.cljs$core$IFn$_invoke$arity$variadic(argseq__5738__auto__);
});})(action__14932__auto___15549))
;

coffee_client.core.organize.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14932__auto___15549){
return (function (args__14931__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/organize",args__14931__auto__);
});})(action__14932__auto___15549))
;

coffee_client.core.organize.cljs$lang$maxFixedArity = (0);

coffee_client.core.organize.cljs$lang$applyTo = ((function (action__14932__auto___15549){
return (function (seq15530){
return coffee_client.core.organize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15530));
});})(action__14932__auto___15549))
;

var action__14932__auto___15553 = (function (params__14933__auto__){
if(cljs.core.map_QMARK_.call(null,params__14933__auto__)){
var map__15531 = params__14933__auto__;
var map__15531__$1 = ((((!((map__15531 == null)))?((((map__15531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15531):map__15531);
cljs.core.swap_BANG_.call(null,coffee_client.core.reload_data,cljs.core.assoc,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),"/dashboard");

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.main_dashboard_component], null),coffee_client.core.app);
} else {
if(cljs.core.vector_QMARK_.call(null,params__14933__auto__)){
var vec__15533 = params__14933__auto__;
cljs.core.swap_BANG_.call(null,coffee_client.core.reload_data,cljs.core.assoc,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),"/dashboard");

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.main_dashboard_component], null),coffee_client.core.app);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/dashboard",action__14932__auto___15553);

coffee_client.core.dashboard = ((function (action__14932__auto___15553){
return (function coffee_client$core$dashboard(var_args){
var args__5737__auto__ = [];
var len__5730__auto___15554 = arguments.length;
var i__5731__auto___15555 = (0);
while(true){
if((i__5731__auto___15555 < len__5730__auto___15554)){
args__5737__auto__.push((arguments[i__5731__auto___15555]));

var G__15556 = (i__5731__auto___15555 + (1));
i__5731__auto___15555 = G__15556;
continue;
} else {
}
break;
}

var argseq__5738__auto__ = ((((0) < args__5737__auto__.length))?(new cljs.core.IndexedSeq(args__5737__auto__.slice((0)),(0))):null);
return coffee_client.core.dashboard.cljs$core$IFn$_invoke$arity$variadic(argseq__5738__auto__);
});})(action__14932__auto___15553))
;

coffee_client.core.dashboard.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14932__auto___15553){
return (function (args__14931__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/dashboard",args__14931__auto__);
});})(action__14932__auto___15553))
;

coffee_client.core.dashboard.cljs$lang$maxFixedArity = (0);

coffee_client.core.dashboard.cljs$lang$applyTo = ((function (action__14932__auto___15553){
return (function (seq15534){
return coffee_client.core.dashboard.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15534));
});})(action__14932__auto___15553))
;

var action__14932__auto___15557 = (function (params__14933__auto__){
if(cljs.core.map_QMARK_.call(null,params__14933__auto__)){
var map__15535 = params__14933__auto__;
var map__15535__$1 = ((((!((map__15535 == null)))?((((map__15535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15535):map__15535);
cljs.core.swap_BANG_.call(null,coffee_client.core.reload_data,cljs.core.assoc,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),"/users");

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.users_dashboard_component], null),coffee_client.core.app);
} else {
if(cljs.core.vector_QMARK_.call(null,params__14933__auto__)){
var vec__15537 = params__14933__auto__;
cljs.core.swap_BANG_.call(null,coffee_client.core.reload_data,cljs.core.assoc,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),"/users");

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coffee_client.core.users_dashboard_component], null),coffee_client.core.app);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/users",action__14932__auto___15557);

coffee_client.core.users = ((function (action__14932__auto___15557){
return (function coffee_client$core$users(var_args){
var args__5737__auto__ = [];
var len__5730__auto___15558 = arguments.length;
var i__5731__auto___15559 = (0);
while(true){
if((i__5731__auto___15559 < len__5730__auto___15558)){
args__5737__auto__.push((arguments[i__5731__auto___15559]));

var G__15560 = (i__5731__auto___15559 + (1));
i__5731__auto___15559 = G__15560;
continue;
} else {
}
break;
}

var argseq__5738__auto__ = ((((0) < args__5737__auto__.length))?(new cljs.core.IndexedSeq(args__5737__auto__.slice((0)),(0))):null);
return coffee_client.core.users.cljs$core$IFn$_invoke$arity$variadic(argseq__5738__auto__);
});})(action__14932__auto___15557))
;

coffee_client.core.users.cljs$core$IFn$_invoke$arity$variadic = ((function (action__14932__auto___15557){
return (function (args__14931__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/users",args__14931__auto__);
});})(action__14932__auto___15557))
;

coffee_client.core.users.cljs$lang$maxFixedArity = (0);

coffee_client.core.users.cljs$lang$applyTo = ((function (action__14932__auto___15557){
return (function (seq15538){
return coffee_client.core.users.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15538));
});})(action__14932__auto___15557))
;
coffee_client.core.on_js_reload = (function coffee_client$core$on_js_reload(){
cljs.core.println.call(null,"reload!",new cljs.core.Keyword(null,"last-page","last-page",-1966154825).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,coffee_client.core.reload_data)));

return secretary.core.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"last-page","last-page",-1966154825).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,coffee_client.core.reload_data)));
});
if(typeof coffee_client.core.once_show_page !== 'undefined'){
} else {
coffee_client.core.once_show_page = secretary.core.dispatch_BANG_.call(null,"/");
}

//# sourceMappingURL=core.js.map?rel=1459672191498