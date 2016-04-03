// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args11568 = [];
var len__5730__auto___11574 = arguments.length;
var i__5731__auto___11575 = (0);
while(true){
if((i__5731__auto___11575 < len__5730__auto___11574)){
args11568.push((arguments[i__5731__auto___11575]));

var G__11576 = (i__5731__auto___11575 + (1));
i__5731__auto___11575 = G__11576;
continue;
} else {
}
break;
}

var G__11570 = args11568.length;
switch (G__11570) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11568.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async11571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11571 = (function (f,blockable,meta11572){
this.f = f;
this.blockable = blockable;
this.meta11572 = meta11572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11573,meta11572__$1){
var self__ = this;
var _11573__$1 = this;
return (new cljs.core.async.t_cljs$core$async11571(self__.f,self__.blockable,meta11572__$1));
});

cljs.core.async.t_cljs$core$async11571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11573){
var self__ = this;
var _11573__$1 = this;
return self__.meta11572;
});

cljs.core.async.t_cljs$core$async11571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11571.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async11571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11572","meta11572",-1800852664,null)], null);
});

cljs.core.async.t_cljs$core$async11571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11571";

cljs.core.async.t_cljs$core$async11571.cljs$lang$ctorPrWriter = (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"cljs.core.async/t_cljs$core$async11571");
});

cljs.core.async.__GT_t_cljs$core$async11571 = (function cljs$core$async$__GT_t_cljs$core$async11571(f__$1,blockable__$1,meta11572){
return (new cljs.core.async.t_cljs$core$async11571(f__$1,blockable__$1,meta11572));
});

}

return (new cljs.core.async.t_cljs$core$async11571(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args11580 = [];
var len__5730__auto___11583 = arguments.length;
var i__5731__auto___11584 = (0);
while(true){
if((i__5731__auto___11584 < len__5730__auto___11583)){
args11580.push((arguments[i__5731__auto___11584]));

var G__11585 = (i__5731__auto___11584 + (1));
i__5731__auto___11584 = G__11585;
continue;
} else {
}
break;
}

var G__11582 = args11580.length;
switch (G__11582) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11580.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args11587 = [];
var len__5730__auto___11590 = arguments.length;
var i__5731__auto___11591 = (0);
while(true){
if((i__5731__auto___11591 < len__5730__auto___11590)){
args11587.push((arguments[i__5731__auto___11591]));

var G__11592 = (i__5731__auto___11591 + (1));
i__5731__auto___11591 = G__11592;
continue;
} else {
}
break;
}

var G__11589 = args11587.length;
switch (G__11589) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11587.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args11594 = [];
var len__5730__auto___11597 = arguments.length;
var i__5731__auto___11598 = (0);
while(true){
if((i__5731__auto___11598 < len__5730__auto___11597)){
args11594.push((arguments[i__5731__auto___11598]));

var G__11599 = (i__5731__auto___11598 + (1));
i__5731__auto___11598 = G__11599;
continue;
} else {
}
break;
}

var G__11596 = args11594.length;
switch (G__11596) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11594.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11601 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11601);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11601,ret){
return (function (){
return fn1.call(null,val_11601);
});})(val_11601,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args11602 = [];
var len__5730__auto___11605 = arguments.length;
var i__5731__auto___11606 = (0);
while(true){
if((i__5731__auto___11606 < len__5730__auto___11605)){
args11602.push((arguments[i__5731__auto___11606]));

var G__11607 = (i__5731__auto___11606 + (1));
i__5731__auto___11606 = G__11607;
continue;
} else {
}
break;
}

var G__11604 = args11602.length;
switch (G__11604) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11602.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5575__auto___11609 = n;
var x_11610 = (0);
while(true){
if((x_11610 < n__5575__auto___11609)){
(a[x_11610] = (0));

var G__11611 = (x_11610 + (1));
x_11610 = G__11611;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__11612 = (i + (1));
i = G__11612;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11616 = (function (alt_flag,flag,meta11617){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11617 = meta11617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11618,meta11617__$1){
var self__ = this;
var _11618__$1 = this;
return (new cljs.core.async.t_cljs$core$async11616(self__.alt_flag,self__.flag,meta11617__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11618){
var self__ = this;
var _11618__$1 = this;
return self__.meta11617;
});})(flag))
;

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11616.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11616.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11617","meta11617",1122239839,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11616";

cljs.core.async.t_cljs$core$async11616.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"cljs.core.async/t_cljs$core$async11616");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11616 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11616(alt_flag__$1,flag__$1,meta11617){
return (new cljs.core.async.t_cljs$core$async11616(alt_flag__$1,flag__$1,meta11617));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11616(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11622 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11622 = (function (alt_handler,flag,cb,meta11623){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11623 = meta11623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11624,meta11623__$1){
var self__ = this;
var _11624__$1 = this;
return (new cljs.core.async.t_cljs$core$async11622(self__.alt_handler,self__.flag,self__.cb,meta11623__$1));
});

cljs.core.async.t_cljs$core$async11622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11624){
var self__ = this;
var _11624__$1 = this;
return self__.meta11623;
});

cljs.core.async.t_cljs$core$async11622.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11622.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11623","meta11623",-940629074,null)], null);
});

cljs.core.async.t_cljs$core$async11622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11622";

cljs.core.async.t_cljs$core$async11622.cljs$lang$ctorPrWriter = (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"cljs.core.async/t_cljs$core$async11622");
});

cljs.core.async.__GT_t_cljs$core$async11622 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11622(alt_handler__$1,flag__$1,cb__$1,meta11623){
return (new cljs.core.async.t_cljs$core$async11622(alt_handler__$1,flag__$1,cb__$1,meta11623));
});

}

return (new cljs.core.async.t_cljs$core$async11622(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11625_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11625_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11626_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11626_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4672__auto__ = wport;
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11627 = (i + (1));
i = G__11627;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4672__auto__ = ret;
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4660__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4660__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4660__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5737__auto__ = [];
var len__5730__auto___11633 = arguments.length;
var i__5731__auto___11634 = (0);
while(true){
if((i__5731__auto___11634 < len__5730__auto___11633)){
args__5737__auto__.push((arguments[i__5731__auto___11634]));

var G__11635 = (i__5731__auto___11634 + (1));
i__5731__auto___11634 = G__11635;
continue;
} else {
}
break;
}

var argseq__5738__auto__ = ((((1) < args__5737__auto__.length))?(new cljs.core.IndexedSeq(args__5737__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5738__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11630){
var map__11631 = p__11630;
var map__11631__$1 = ((((!((map__11631 == null)))?((((map__11631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11631):map__11631);
var opts = map__11631__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11628){
var G__11629 = cljs.core.first.call(null,seq11628);
var seq11628__$1 = cljs.core.next.call(null,seq11628);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11629,seq11628__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args11636 = [];
var len__5730__auto___11686 = arguments.length;
var i__5731__auto___11687 = (0);
while(true){
if((i__5731__auto___11687 < len__5730__auto___11686)){
args11636.push((arguments[i__5731__auto___11687]));

var G__11688 = (i__5731__auto___11687 + (1));
i__5731__auto___11687 = G__11688;
continue;
} else {
}
break;
}

var G__11638 = args11636.length;
switch (G__11638) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11636.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11523__auto___11690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___11690){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___11690){
return (function (state_11662){
var state_val_11663 = (state_11662[(1)]);
if((state_val_11663 === (7))){
var inst_11658 = (state_11662[(2)]);
var state_11662__$1 = state_11662;
var statearr_11664_11691 = state_11662__$1;
(statearr_11664_11691[(2)] = inst_11658);

(statearr_11664_11691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11663 === (1))){
var state_11662__$1 = state_11662;
var statearr_11665_11692 = state_11662__$1;
(statearr_11665_11692[(2)] = null);

(statearr_11665_11692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11663 === (4))){
var inst_11641 = (state_11662[(7)]);
var inst_11641__$1 = (state_11662[(2)]);
var inst_11642 = (inst_11641__$1 == null);
var state_11662__$1 = (function (){var statearr_11666 = state_11662;
(statearr_11666[(7)] = inst_11641__$1);

return statearr_11666;
})();
if(cljs.core.truth_(inst_11642)){
var statearr_11667_11693 = state_11662__$1;
(statearr_11667_11693[(1)] = (5));

} else {
var statearr_11668_11694 = state_11662__$1;
(statearr_11668_11694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11663 === (13))){
var state_11662__$1 = state_11662;
var statearr_11669_11695 = state_11662__$1;
(statearr_11669_11695[(2)] = null);

(statearr_11669_11695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11663 === (6))){
var inst_11641 = (state_11662[(7)]);
var state_11662__$1 = state_11662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11662__$1,(11),to,inst_11641);
} else {
if((state_val_11663 === (3))){
var inst_11660 = (state_11662[(2)]);
var state_11662__$1 = state_11662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11662__$1,inst_11660);
} else {
if((state_val_11663 === (12))){
var state_11662__$1 = state_11662;
var statearr_11670_11696 = state_11662__$1;
(statearr_11670_11696[(2)] = null);

(statearr_11670_11696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11663 === (2))){
var state_11662__$1 = state_11662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11662__$1,(4),from);
} else {
if((state_val_11663 === (11))){
var inst_11651 = (state_11662[(2)]);
var state_11662__$1 = state_11662;
if(cljs.core.truth_(inst_11651)){
var statearr_11671_11697 = state_11662__$1;
(statearr_11671_11697[(1)] = (12));

} else {
var statearr_11672_11698 = state_11662__$1;
(statearr_11672_11698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11663 === (9))){
var state_11662__$1 = state_11662;
var statearr_11673_11699 = state_11662__$1;
(statearr_11673_11699[(2)] = null);

(statearr_11673_11699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11663 === (5))){
var state_11662__$1 = state_11662;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11674_11700 = state_11662__$1;
(statearr_11674_11700[(1)] = (8));

} else {
var statearr_11675_11701 = state_11662__$1;
(statearr_11675_11701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11663 === (14))){
var inst_11656 = (state_11662[(2)]);
var state_11662__$1 = state_11662;
var statearr_11676_11702 = state_11662__$1;
(statearr_11676_11702[(2)] = inst_11656);

(statearr_11676_11702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11663 === (10))){
var inst_11648 = (state_11662[(2)]);
var state_11662__$1 = state_11662;
var statearr_11677_11703 = state_11662__$1;
(statearr_11677_11703[(2)] = inst_11648);

(statearr_11677_11703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11663 === (8))){
var inst_11645 = cljs.core.async.close_BANG_.call(null,to);
var state_11662__$1 = state_11662;
var statearr_11678_11704 = state_11662__$1;
(statearr_11678_11704[(2)] = inst_11645);

(statearr_11678_11704[(1)] = (10));


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
});})(c__11523__auto___11690))
;
return ((function (switch__11411__auto__,c__11523__auto___11690){
return (function() {
var cljs$core$async$state_machine__11412__auto__ = null;
var cljs$core$async$state_machine__11412__auto____0 = (function (){
var statearr_11682 = [null,null,null,null,null,null,null,null];
(statearr_11682[(0)] = cljs$core$async$state_machine__11412__auto__);

(statearr_11682[(1)] = (1));

return statearr_11682;
});
var cljs$core$async$state_machine__11412__auto____1 = (function (state_11662){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_11662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e11683){if((e11683 instanceof Object)){
var ex__11415__auto__ = e11683;
var statearr_11684_11705 = state_11662;
(statearr_11684_11705[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11706 = state_11662;
state_11662 = G__11706;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$state_machine__11412__auto__ = function(state_11662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11412__auto____1.call(this,state_11662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11412__auto____0;
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11412__auto____1;
return cljs$core$async$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___11690))
})();
var state__11525__auto__ = (function (){var statearr_11685 = f__11524__auto__.call(null);
(statearr_11685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___11690);

return statearr_11685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___11690))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11890){
var vec__11891 = p__11890;
var v = cljs.core.nth.call(null,vec__11891,(0),null);
var p = cljs.core.nth.call(null,vec__11891,(1),null);
var job = vec__11891;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11523__auto___12073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___12073,res,vec__11891,v,p,job,jobs,results){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___12073,res,vec__11891,v,p,job,jobs,results){
return (function (state_11896){
var state_val_11897 = (state_11896[(1)]);
if((state_val_11897 === (1))){
var state_11896__$1 = state_11896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11896__$1,(2),res,v);
} else {
if((state_val_11897 === (2))){
var inst_11893 = (state_11896[(2)]);
var inst_11894 = cljs.core.async.close_BANG_.call(null,res);
var state_11896__$1 = (function (){var statearr_11898 = state_11896;
(statearr_11898[(7)] = inst_11893);

return statearr_11898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11896__$1,inst_11894);
} else {
return null;
}
}
});})(c__11523__auto___12073,res,vec__11891,v,p,job,jobs,results))
;
return ((function (switch__11411__auto__,c__11523__auto___12073,res,vec__11891,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0 = (function (){
var statearr_11902 = [null,null,null,null,null,null,null,null];
(statearr_11902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__);

(statearr_11902[(1)] = (1));

return statearr_11902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1 = (function (state_11896){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_11896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e11903){if((e11903 instanceof Object)){
var ex__11415__auto__ = e11903;
var statearr_11904_12074 = state_11896;
(statearr_11904_12074[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12075 = state_11896;
state_11896 = G__12075;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__ = function(state_11896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1.call(this,state_11896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___12073,res,vec__11891,v,p,job,jobs,results))
})();
var state__11525__auto__ = (function (){var statearr_11905 = f__11524__auto__.call(null);
(statearr_11905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___12073);

return statearr_11905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___12073,res,vec__11891,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11906){
var vec__11907 = p__11906;
var v = cljs.core.nth.call(null,vec__11907,(0),null);
var p = cljs.core.nth.call(null,vec__11907,(1),null);
var job = vec__11907;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5575__auto___12076 = n;
var __12077 = (0);
while(true){
if((__12077 < n__5575__auto___12076)){
var G__11908_12078 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11908_12078) {
case "compute":
var c__11523__auto___12080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12077,c__11523__auto___12080,G__11908_12078,n__5575__auto___12076,jobs,results,process,async){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (__12077,c__11523__auto___12080,G__11908_12078,n__5575__auto___12076,jobs,results,process,async){
return (function (state_11921){
var state_val_11922 = (state_11921[(1)]);
if((state_val_11922 === (1))){
var state_11921__$1 = state_11921;
var statearr_11923_12081 = state_11921__$1;
(statearr_11923_12081[(2)] = null);

(statearr_11923_12081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11922 === (2))){
var state_11921__$1 = state_11921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11921__$1,(4),jobs);
} else {
if((state_val_11922 === (3))){
var inst_11919 = (state_11921[(2)]);
var state_11921__$1 = state_11921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11921__$1,inst_11919);
} else {
if((state_val_11922 === (4))){
var inst_11911 = (state_11921[(2)]);
var inst_11912 = process.call(null,inst_11911);
var state_11921__$1 = state_11921;
if(cljs.core.truth_(inst_11912)){
var statearr_11924_12082 = state_11921__$1;
(statearr_11924_12082[(1)] = (5));

} else {
var statearr_11925_12083 = state_11921__$1;
(statearr_11925_12083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11922 === (5))){
var state_11921__$1 = state_11921;
var statearr_11926_12084 = state_11921__$1;
(statearr_11926_12084[(2)] = null);

(statearr_11926_12084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11922 === (6))){
var state_11921__$1 = state_11921;
var statearr_11927_12085 = state_11921__$1;
(statearr_11927_12085[(2)] = null);

(statearr_11927_12085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11922 === (7))){
var inst_11917 = (state_11921[(2)]);
var state_11921__$1 = state_11921;
var statearr_11928_12086 = state_11921__$1;
(statearr_11928_12086[(2)] = inst_11917);

(statearr_11928_12086[(1)] = (3));


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
});})(__12077,c__11523__auto___12080,G__11908_12078,n__5575__auto___12076,jobs,results,process,async))
;
return ((function (__12077,switch__11411__auto__,c__11523__auto___12080,G__11908_12078,n__5575__auto___12076,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0 = (function (){
var statearr_11932 = [null,null,null,null,null,null,null];
(statearr_11932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__);

(statearr_11932[(1)] = (1));

return statearr_11932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1 = (function (state_11921){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_11921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e11933){if((e11933 instanceof Object)){
var ex__11415__auto__ = e11933;
var statearr_11934_12087 = state_11921;
(statearr_11934_12087[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12088 = state_11921;
state_11921 = G__12088;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__ = function(state_11921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1.call(this,state_11921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__;
})()
;})(__12077,switch__11411__auto__,c__11523__auto___12080,G__11908_12078,n__5575__auto___12076,jobs,results,process,async))
})();
var state__11525__auto__ = (function (){var statearr_11935 = f__11524__auto__.call(null);
(statearr_11935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___12080);

return statearr_11935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(__12077,c__11523__auto___12080,G__11908_12078,n__5575__auto___12076,jobs,results,process,async))
);


break;
case "async":
var c__11523__auto___12089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12077,c__11523__auto___12089,G__11908_12078,n__5575__auto___12076,jobs,results,process,async){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (__12077,c__11523__auto___12089,G__11908_12078,n__5575__auto___12076,jobs,results,process,async){
return (function (state_11948){
var state_val_11949 = (state_11948[(1)]);
if((state_val_11949 === (1))){
var state_11948__$1 = state_11948;
var statearr_11950_12090 = state_11948__$1;
(statearr_11950_12090[(2)] = null);

(statearr_11950_12090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (2))){
var state_11948__$1 = state_11948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11948__$1,(4),jobs);
} else {
if((state_val_11949 === (3))){
var inst_11946 = (state_11948[(2)]);
var state_11948__$1 = state_11948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11948__$1,inst_11946);
} else {
if((state_val_11949 === (4))){
var inst_11938 = (state_11948[(2)]);
var inst_11939 = async.call(null,inst_11938);
var state_11948__$1 = state_11948;
if(cljs.core.truth_(inst_11939)){
var statearr_11951_12091 = state_11948__$1;
(statearr_11951_12091[(1)] = (5));

} else {
var statearr_11952_12092 = state_11948__$1;
(statearr_11952_12092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (5))){
var state_11948__$1 = state_11948;
var statearr_11953_12093 = state_11948__$1;
(statearr_11953_12093[(2)] = null);

(statearr_11953_12093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (6))){
var state_11948__$1 = state_11948;
var statearr_11954_12094 = state_11948__$1;
(statearr_11954_12094[(2)] = null);

(statearr_11954_12094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (7))){
var inst_11944 = (state_11948[(2)]);
var state_11948__$1 = state_11948;
var statearr_11955_12095 = state_11948__$1;
(statearr_11955_12095[(2)] = inst_11944);

(statearr_11955_12095[(1)] = (3));


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
});})(__12077,c__11523__auto___12089,G__11908_12078,n__5575__auto___12076,jobs,results,process,async))
;
return ((function (__12077,switch__11411__auto__,c__11523__auto___12089,G__11908_12078,n__5575__auto___12076,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0 = (function (){
var statearr_11959 = [null,null,null,null,null,null,null];
(statearr_11959[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__);

(statearr_11959[(1)] = (1));

return statearr_11959;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1 = (function (state_11948){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_11948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e11960){if((e11960 instanceof Object)){
var ex__11415__auto__ = e11960;
var statearr_11961_12096 = state_11948;
(statearr_11961_12096[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12097 = state_11948;
state_11948 = G__12097;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__ = function(state_11948){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1.call(this,state_11948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__;
})()
;})(__12077,switch__11411__auto__,c__11523__auto___12089,G__11908_12078,n__5575__auto___12076,jobs,results,process,async))
})();
var state__11525__auto__ = (function (){var statearr_11962 = f__11524__auto__.call(null);
(statearr_11962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___12089);

return statearr_11962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(__12077,c__11523__auto___12089,G__11908_12078,n__5575__auto___12076,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12098 = (__12077 + (1));
__12077 = G__12098;
continue;
} else {
}
break;
}

var c__11523__auto___12099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___12099,jobs,results,process,async){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___12099,jobs,results,process,async){
return (function (state_11984){
var state_val_11985 = (state_11984[(1)]);
if((state_val_11985 === (1))){
var state_11984__$1 = state_11984;
var statearr_11986_12100 = state_11984__$1;
(statearr_11986_12100[(2)] = null);

(statearr_11986_12100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11985 === (2))){
var state_11984__$1 = state_11984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11984__$1,(4),from);
} else {
if((state_val_11985 === (3))){
var inst_11982 = (state_11984[(2)]);
var state_11984__$1 = state_11984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11984__$1,inst_11982);
} else {
if((state_val_11985 === (4))){
var inst_11965 = (state_11984[(7)]);
var inst_11965__$1 = (state_11984[(2)]);
var inst_11966 = (inst_11965__$1 == null);
var state_11984__$1 = (function (){var statearr_11987 = state_11984;
(statearr_11987[(7)] = inst_11965__$1);

return statearr_11987;
})();
if(cljs.core.truth_(inst_11966)){
var statearr_11988_12101 = state_11984__$1;
(statearr_11988_12101[(1)] = (5));

} else {
var statearr_11989_12102 = state_11984__$1;
(statearr_11989_12102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11985 === (5))){
var inst_11968 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11984__$1 = state_11984;
var statearr_11990_12103 = state_11984__$1;
(statearr_11990_12103[(2)] = inst_11968);

(statearr_11990_12103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11985 === (6))){
var inst_11970 = (state_11984[(8)]);
var inst_11965 = (state_11984[(7)]);
var inst_11970__$1 = cljs.core.async.chan.call(null,(1));
var inst_11971 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11972 = [inst_11965,inst_11970__$1];
var inst_11973 = (new cljs.core.PersistentVector(null,2,(5),inst_11971,inst_11972,null));
var state_11984__$1 = (function (){var statearr_11991 = state_11984;
(statearr_11991[(8)] = inst_11970__$1);

return statearr_11991;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11984__$1,(8),jobs,inst_11973);
} else {
if((state_val_11985 === (7))){
var inst_11980 = (state_11984[(2)]);
var state_11984__$1 = state_11984;
var statearr_11992_12104 = state_11984__$1;
(statearr_11992_12104[(2)] = inst_11980);

(statearr_11992_12104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11985 === (8))){
var inst_11970 = (state_11984[(8)]);
var inst_11975 = (state_11984[(2)]);
var state_11984__$1 = (function (){var statearr_11993 = state_11984;
(statearr_11993[(9)] = inst_11975);

return statearr_11993;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11984__$1,(9),results,inst_11970);
} else {
if((state_val_11985 === (9))){
var inst_11977 = (state_11984[(2)]);
var state_11984__$1 = (function (){var statearr_11994 = state_11984;
(statearr_11994[(10)] = inst_11977);

return statearr_11994;
})();
var statearr_11995_12105 = state_11984__$1;
(statearr_11995_12105[(2)] = null);

(statearr_11995_12105[(1)] = (2));


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
});})(c__11523__auto___12099,jobs,results,process,async))
;
return ((function (switch__11411__auto__,c__11523__auto___12099,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0 = (function (){
var statearr_11999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__);

(statearr_11999[(1)] = (1));

return statearr_11999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1 = (function (state_11984){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_11984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e12000){if((e12000 instanceof Object)){
var ex__11415__auto__ = e12000;
var statearr_12001_12106 = state_11984;
(statearr_12001_12106[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12107 = state_11984;
state_11984 = G__12107;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__ = function(state_11984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1.call(this,state_11984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___12099,jobs,results,process,async))
})();
var state__11525__auto__ = (function (){var statearr_12002 = f__11524__auto__.call(null);
(statearr_12002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___12099);

return statearr_12002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___12099,jobs,results,process,async))
);


var c__11523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto__,jobs,results,process,async){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto__,jobs,results,process,async){
return (function (state_12040){
var state_val_12041 = (state_12040[(1)]);
if((state_val_12041 === (7))){
var inst_12036 = (state_12040[(2)]);
var state_12040__$1 = state_12040;
var statearr_12042_12108 = state_12040__$1;
(statearr_12042_12108[(2)] = inst_12036);

(statearr_12042_12108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (20))){
var state_12040__$1 = state_12040;
var statearr_12043_12109 = state_12040__$1;
(statearr_12043_12109[(2)] = null);

(statearr_12043_12109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (1))){
var state_12040__$1 = state_12040;
var statearr_12044_12110 = state_12040__$1;
(statearr_12044_12110[(2)] = null);

(statearr_12044_12110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (4))){
var inst_12005 = (state_12040[(7)]);
var inst_12005__$1 = (state_12040[(2)]);
var inst_12006 = (inst_12005__$1 == null);
var state_12040__$1 = (function (){var statearr_12045 = state_12040;
(statearr_12045[(7)] = inst_12005__$1);

return statearr_12045;
})();
if(cljs.core.truth_(inst_12006)){
var statearr_12046_12111 = state_12040__$1;
(statearr_12046_12111[(1)] = (5));

} else {
var statearr_12047_12112 = state_12040__$1;
(statearr_12047_12112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (15))){
var inst_12018 = (state_12040[(8)]);
var state_12040__$1 = state_12040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12040__$1,(18),to,inst_12018);
} else {
if((state_val_12041 === (21))){
var inst_12031 = (state_12040[(2)]);
var state_12040__$1 = state_12040;
var statearr_12048_12113 = state_12040__$1;
(statearr_12048_12113[(2)] = inst_12031);

(statearr_12048_12113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (13))){
var inst_12033 = (state_12040[(2)]);
var state_12040__$1 = (function (){var statearr_12049 = state_12040;
(statearr_12049[(9)] = inst_12033);

return statearr_12049;
})();
var statearr_12050_12114 = state_12040__$1;
(statearr_12050_12114[(2)] = null);

(statearr_12050_12114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (6))){
var inst_12005 = (state_12040[(7)]);
var state_12040__$1 = state_12040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12040__$1,(11),inst_12005);
} else {
if((state_val_12041 === (17))){
var inst_12026 = (state_12040[(2)]);
var state_12040__$1 = state_12040;
if(cljs.core.truth_(inst_12026)){
var statearr_12051_12115 = state_12040__$1;
(statearr_12051_12115[(1)] = (19));

} else {
var statearr_12052_12116 = state_12040__$1;
(statearr_12052_12116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (3))){
var inst_12038 = (state_12040[(2)]);
var state_12040__$1 = state_12040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12040__$1,inst_12038);
} else {
if((state_val_12041 === (12))){
var inst_12015 = (state_12040[(10)]);
var state_12040__$1 = state_12040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12040__$1,(14),inst_12015);
} else {
if((state_val_12041 === (2))){
var state_12040__$1 = state_12040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12040__$1,(4),results);
} else {
if((state_val_12041 === (19))){
var state_12040__$1 = state_12040;
var statearr_12053_12117 = state_12040__$1;
(statearr_12053_12117[(2)] = null);

(statearr_12053_12117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (11))){
var inst_12015 = (state_12040[(2)]);
var state_12040__$1 = (function (){var statearr_12054 = state_12040;
(statearr_12054[(10)] = inst_12015);

return statearr_12054;
})();
var statearr_12055_12118 = state_12040__$1;
(statearr_12055_12118[(2)] = null);

(statearr_12055_12118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (9))){
var state_12040__$1 = state_12040;
var statearr_12056_12119 = state_12040__$1;
(statearr_12056_12119[(2)] = null);

(statearr_12056_12119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (5))){
var state_12040__$1 = state_12040;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12057_12120 = state_12040__$1;
(statearr_12057_12120[(1)] = (8));

} else {
var statearr_12058_12121 = state_12040__$1;
(statearr_12058_12121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (14))){
var inst_12018 = (state_12040[(8)]);
var inst_12020 = (state_12040[(11)]);
var inst_12018__$1 = (state_12040[(2)]);
var inst_12019 = (inst_12018__$1 == null);
var inst_12020__$1 = cljs.core.not.call(null,inst_12019);
var state_12040__$1 = (function (){var statearr_12059 = state_12040;
(statearr_12059[(8)] = inst_12018__$1);

(statearr_12059[(11)] = inst_12020__$1);

return statearr_12059;
})();
if(inst_12020__$1){
var statearr_12060_12122 = state_12040__$1;
(statearr_12060_12122[(1)] = (15));

} else {
var statearr_12061_12123 = state_12040__$1;
(statearr_12061_12123[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (16))){
var inst_12020 = (state_12040[(11)]);
var state_12040__$1 = state_12040;
var statearr_12062_12124 = state_12040__$1;
(statearr_12062_12124[(2)] = inst_12020);

(statearr_12062_12124[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (10))){
var inst_12012 = (state_12040[(2)]);
var state_12040__$1 = state_12040;
var statearr_12063_12125 = state_12040__$1;
(statearr_12063_12125[(2)] = inst_12012);

(statearr_12063_12125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (18))){
var inst_12023 = (state_12040[(2)]);
var state_12040__$1 = state_12040;
var statearr_12064_12126 = state_12040__$1;
(statearr_12064_12126[(2)] = inst_12023);

(statearr_12064_12126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (8))){
var inst_12009 = cljs.core.async.close_BANG_.call(null,to);
var state_12040__$1 = state_12040;
var statearr_12065_12127 = state_12040__$1;
(statearr_12065_12127[(2)] = inst_12009);

(statearr_12065_12127[(1)] = (10));


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
});})(c__11523__auto__,jobs,results,process,async))
;
return ((function (switch__11411__auto__,c__11523__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0 = (function (){
var statearr_12069 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__);

(statearr_12069[(1)] = (1));

return statearr_12069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1 = (function (state_12040){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_12040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e12070){if((e12070 instanceof Object)){
var ex__11415__auto__ = e12070;
var statearr_12071_12128 = state_12040;
(statearr_12071_12128[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12129 = state_12040;
state_12040 = G__12129;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__ = function(state_12040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1.call(this,state_12040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto__,jobs,results,process,async))
})();
var state__11525__auto__ = (function (){var statearr_12072 = f__11524__auto__.call(null);
(statearr_12072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto__);

return statearr_12072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto__,jobs,results,process,async))
);

return c__11523__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args12130 = [];
var len__5730__auto___12133 = arguments.length;
var i__5731__auto___12134 = (0);
while(true){
if((i__5731__auto___12134 < len__5730__auto___12133)){
args12130.push((arguments[i__5731__auto___12134]));

var G__12135 = (i__5731__auto___12134 + (1));
i__5731__auto___12134 = G__12135;
continue;
} else {
}
break;
}

var G__12132 = args12130.length;
switch (G__12132) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12130.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args12137 = [];
var len__5730__auto___12140 = arguments.length;
var i__5731__auto___12141 = (0);
while(true){
if((i__5731__auto___12141 < len__5730__auto___12140)){
args12137.push((arguments[i__5731__auto___12141]));

var G__12142 = (i__5731__auto___12141 + (1));
i__5731__auto___12141 = G__12142;
continue;
} else {
}
break;
}

var G__12139 = args12137.length;
switch (G__12139) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12137.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args12144 = [];
var len__5730__auto___12197 = arguments.length;
var i__5731__auto___12198 = (0);
while(true){
if((i__5731__auto___12198 < len__5730__auto___12197)){
args12144.push((arguments[i__5731__auto___12198]));

var G__12199 = (i__5731__auto___12198 + (1));
i__5731__auto___12198 = G__12199;
continue;
} else {
}
break;
}

var G__12146 = args12144.length;
switch (G__12146) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12144.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11523__auto___12201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___12201,tc,fc){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___12201,tc,fc){
return (function (state_12172){
var state_val_12173 = (state_12172[(1)]);
if((state_val_12173 === (7))){
var inst_12168 = (state_12172[(2)]);
var state_12172__$1 = state_12172;
var statearr_12174_12202 = state_12172__$1;
(statearr_12174_12202[(2)] = inst_12168);

(statearr_12174_12202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12173 === (1))){
var state_12172__$1 = state_12172;
var statearr_12175_12203 = state_12172__$1;
(statearr_12175_12203[(2)] = null);

(statearr_12175_12203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12173 === (4))){
var inst_12149 = (state_12172[(7)]);
var inst_12149__$1 = (state_12172[(2)]);
var inst_12150 = (inst_12149__$1 == null);
var state_12172__$1 = (function (){var statearr_12176 = state_12172;
(statearr_12176[(7)] = inst_12149__$1);

return statearr_12176;
})();
if(cljs.core.truth_(inst_12150)){
var statearr_12177_12204 = state_12172__$1;
(statearr_12177_12204[(1)] = (5));

} else {
var statearr_12178_12205 = state_12172__$1;
(statearr_12178_12205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12173 === (13))){
var state_12172__$1 = state_12172;
var statearr_12179_12206 = state_12172__$1;
(statearr_12179_12206[(2)] = null);

(statearr_12179_12206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12173 === (6))){
var inst_12149 = (state_12172[(7)]);
var inst_12155 = p.call(null,inst_12149);
var state_12172__$1 = state_12172;
if(cljs.core.truth_(inst_12155)){
var statearr_12180_12207 = state_12172__$1;
(statearr_12180_12207[(1)] = (9));

} else {
var statearr_12181_12208 = state_12172__$1;
(statearr_12181_12208[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12173 === (3))){
var inst_12170 = (state_12172[(2)]);
var state_12172__$1 = state_12172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12172__$1,inst_12170);
} else {
if((state_val_12173 === (12))){
var state_12172__$1 = state_12172;
var statearr_12182_12209 = state_12172__$1;
(statearr_12182_12209[(2)] = null);

(statearr_12182_12209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12173 === (2))){
var state_12172__$1 = state_12172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12172__$1,(4),ch);
} else {
if((state_val_12173 === (11))){
var inst_12149 = (state_12172[(7)]);
var inst_12159 = (state_12172[(2)]);
var state_12172__$1 = state_12172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12172__$1,(8),inst_12159,inst_12149);
} else {
if((state_val_12173 === (9))){
var state_12172__$1 = state_12172;
var statearr_12183_12210 = state_12172__$1;
(statearr_12183_12210[(2)] = tc);

(statearr_12183_12210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12173 === (5))){
var inst_12152 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12153 = cljs.core.async.close_BANG_.call(null,fc);
var state_12172__$1 = (function (){var statearr_12184 = state_12172;
(statearr_12184[(8)] = inst_12152);

return statearr_12184;
})();
var statearr_12185_12211 = state_12172__$1;
(statearr_12185_12211[(2)] = inst_12153);

(statearr_12185_12211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12173 === (14))){
var inst_12166 = (state_12172[(2)]);
var state_12172__$1 = state_12172;
var statearr_12186_12212 = state_12172__$1;
(statearr_12186_12212[(2)] = inst_12166);

(statearr_12186_12212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12173 === (10))){
var state_12172__$1 = state_12172;
var statearr_12187_12213 = state_12172__$1;
(statearr_12187_12213[(2)] = fc);

(statearr_12187_12213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12173 === (8))){
var inst_12161 = (state_12172[(2)]);
var state_12172__$1 = state_12172;
if(cljs.core.truth_(inst_12161)){
var statearr_12188_12214 = state_12172__$1;
(statearr_12188_12214[(1)] = (12));

} else {
var statearr_12189_12215 = state_12172__$1;
(statearr_12189_12215[(1)] = (13));

}

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
});})(c__11523__auto___12201,tc,fc))
;
return ((function (switch__11411__auto__,c__11523__auto___12201,tc,fc){
return (function() {
var cljs$core$async$state_machine__11412__auto__ = null;
var cljs$core$async$state_machine__11412__auto____0 = (function (){
var statearr_12193 = [null,null,null,null,null,null,null,null,null];
(statearr_12193[(0)] = cljs$core$async$state_machine__11412__auto__);

(statearr_12193[(1)] = (1));

return statearr_12193;
});
var cljs$core$async$state_machine__11412__auto____1 = (function (state_12172){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_12172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e12194){if((e12194 instanceof Object)){
var ex__11415__auto__ = e12194;
var statearr_12195_12216 = state_12172;
(statearr_12195_12216[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12217 = state_12172;
state_12172 = G__12217;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$state_machine__11412__auto__ = function(state_12172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11412__auto____1.call(this,state_12172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11412__auto____0;
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11412__auto____1;
return cljs$core$async$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___12201,tc,fc))
})();
var state__11525__auto__ = (function (){var statearr_12196 = f__11524__auto__.call(null);
(statearr_12196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___12201);

return statearr_12196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___12201,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto__){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto__){
return (function (state_12281){
var state_val_12282 = (state_12281[(1)]);
if((state_val_12282 === (7))){
var inst_12277 = (state_12281[(2)]);
var state_12281__$1 = state_12281;
var statearr_12283_12304 = state_12281__$1;
(statearr_12283_12304[(2)] = inst_12277);

(statearr_12283_12304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (1))){
var inst_12261 = init;
var state_12281__$1 = (function (){var statearr_12284 = state_12281;
(statearr_12284[(7)] = inst_12261);

return statearr_12284;
})();
var statearr_12285_12305 = state_12281__$1;
(statearr_12285_12305[(2)] = null);

(statearr_12285_12305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (4))){
var inst_12264 = (state_12281[(8)]);
var inst_12264__$1 = (state_12281[(2)]);
var inst_12265 = (inst_12264__$1 == null);
var state_12281__$1 = (function (){var statearr_12286 = state_12281;
(statearr_12286[(8)] = inst_12264__$1);

return statearr_12286;
})();
if(cljs.core.truth_(inst_12265)){
var statearr_12287_12306 = state_12281__$1;
(statearr_12287_12306[(1)] = (5));

} else {
var statearr_12288_12307 = state_12281__$1;
(statearr_12288_12307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (6))){
var inst_12264 = (state_12281[(8)]);
var inst_12268 = (state_12281[(9)]);
var inst_12261 = (state_12281[(7)]);
var inst_12268__$1 = f.call(null,inst_12261,inst_12264);
var inst_12269 = cljs.core.reduced_QMARK_.call(null,inst_12268__$1);
var state_12281__$1 = (function (){var statearr_12289 = state_12281;
(statearr_12289[(9)] = inst_12268__$1);

return statearr_12289;
})();
if(inst_12269){
var statearr_12290_12308 = state_12281__$1;
(statearr_12290_12308[(1)] = (8));

} else {
var statearr_12291_12309 = state_12281__$1;
(statearr_12291_12309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (3))){
var inst_12279 = (state_12281[(2)]);
var state_12281__$1 = state_12281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12281__$1,inst_12279);
} else {
if((state_val_12282 === (2))){
var state_12281__$1 = state_12281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12281__$1,(4),ch);
} else {
if((state_val_12282 === (9))){
var inst_12268 = (state_12281[(9)]);
var inst_12261 = inst_12268;
var state_12281__$1 = (function (){var statearr_12292 = state_12281;
(statearr_12292[(7)] = inst_12261);

return statearr_12292;
})();
var statearr_12293_12310 = state_12281__$1;
(statearr_12293_12310[(2)] = null);

(statearr_12293_12310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (5))){
var inst_12261 = (state_12281[(7)]);
var state_12281__$1 = state_12281;
var statearr_12294_12311 = state_12281__$1;
(statearr_12294_12311[(2)] = inst_12261);

(statearr_12294_12311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (10))){
var inst_12275 = (state_12281[(2)]);
var state_12281__$1 = state_12281;
var statearr_12295_12312 = state_12281__$1;
(statearr_12295_12312[(2)] = inst_12275);

(statearr_12295_12312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12282 === (8))){
var inst_12268 = (state_12281[(9)]);
var inst_12271 = cljs.core.deref.call(null,inst_12268);
var state_12281__$1 = state_12281;
var statearr_12296_12313 = state_12281__$1;
(statearr_12296_12313[(2)] = inst_12271);

(statearr_12296_12313[(1)] = (10));


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
});})(c__11523__auto__))
;
return ((function (switch__11411__auto__,c__11523__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11412__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11412__auto____0 = (function (){
var statearr_12300 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12300[(0)] = cljs$core$async$reduce_$_state_machine__11412__auto__);

(statearr_12300[(1)] = (1));

return statearr_12300;
});
var cljs$core$async$reduce_$_state_machine__11412__auto____1 = (function (state_12281){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_12281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e12301){if((e12301 instanceof Object)){
var ex__11415__auto__ = e12301;
var statearr_12302_12314 = state_12281;
(statearr_12302_12314[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12315 = state_12281;
state_12281 = G__12315;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11412__auto__ = function(state_12281){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11412__auto____1.call(this,state_12281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11412__auto____0;
cljs$core$async$reduce_$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11412__auto____1;
return cljs$core$async$reduce_$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto__))
})();
var state__11525__auto__ = (function (){var statearr_12303 = f__11524__auto__.call(null);
(statearr_12303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto__);

return statearr_12303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto__))
);

return c__11523__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args12316 = [];
var len__5730__auto___12368 = arguments.length;
var i__5731__auto___12369 = (0);
while(true){
if((i__5731__auto___12369 < len__5730__auto___12368)){
args12316.push((arguments[i__5731__auto___12369]));

var G__12370 = (i__5731__auto___12369 + (1));
i__5731__auto___12369 = G__12370;
continue;
} else {
}
break;
}

var G__12318 = args12316.length;
switch (G__12318) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12316.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto__){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto__){
return (function (state_12343){
var state_val_12344 = (state_12343[(1)]);
if((state_val_12344 === (7))){
var inst_12325 = (state_12343[(2)]);
var state_12343__$1 = state_12343;
var statearr_12345_12372 = state_12343__$1;
(statearr_12345_12372[(2)] = inst_12325);

(statearr_12345_12372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (1))){
var inst_12319 = cljs.core.seq.call(null,coll);
var inst_12320 = inst_12319;
var state_12343__$1 = (function (){var statearr_12346 = state_12343;
(statearr_12346[(7)] = inst_12320);

return statearr_12346;
})();
var statearr_12347_12373 = state_12343__$1;
(statearr_12347_12373[(2)] = null);

(statearr_12347_12373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (4))){
var inst_12320 = (state_12343[(7)]);
var inst_12323 = cljs.core.first.call(null,inst_12320);
var state_12343__$1 = state_12343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12343__$1,(7),ch,inst_12323);
} else {
if((state_val_12344 === (13))){
var inst_12337 = (state_12343[(2)]);
var state_12343__$1 = state_12343;
var statearr_12348_12374 = state_12343__$1;
(statearr_12348_12374[(2)] = inst_12337);

(statearr_12348_12374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (6))){
var inst_12328 = (state_12343[(2)]);
var state_12343__$1 = state_12343;
if(cljs.core.truth_(inst_12328)){
var statearr_12349_12375 = state_12343__$1;
(statearr_12349_12375[(1)] = (8));

} else {
var statearr_12350_12376 = state_12343__$1;
(statearr_12350_12376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (3))){
var inst_12341 = (state_12343[(2)]);
var state_12343__$1 = state_12343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12343__$1,inst_12341);
} else {
if((state_val_12344 === (12))){
var state_12343__$1 = state_12343;
var statearr_12351_12377 = state_12343__$1;
(statearr_12351_12377[(2)] = null);

(statearr_12351_12377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (2))){
var inst_12320 = (state_12343[(7)]);
var state_12343__$1 = state_12343;
if(cljs.core.truth_(inst_12320)){
var statearr_12352_12378 = state_12343__$1;
(statearr_12352_12378[(1)] = (4));

} else {
var statearr_12353_12379 = state_12343__$1;
(statearr_12353_12379[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (11))){
var inst_12334 = cljs.core.async.close_BANG_.call(null,ch);
var state_12343__$1 = state_12343;
var statearr_12354_12380 = state_12343__$1;
(statearr_12354_12380[(2)] = inst_12334);

(statearr_12354_12380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (9))){
var state_12343__$1 = state_12343;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12355_12381 = state_12343__$1;
(statearr_12355_12381[(1)] = (11));

} else {
var statearr_12356_12382 = state_12343__$1;
(statearr_12356_12382[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (5))){
var inst_12320 = (state_12343[(7)]);
var state_12343__$1 = state_12343;
var statearr_12357_12383 = state_12343__$1;
(statearr_12357_12383[(2)] = inst_12320);

(statearr_12357_12383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (10))){
var inst_12339 = (state_12343[(2)]);
var state_12343__$1 = state_12343;
var statearr_12358_12384 = state_12343__$1;
(statearr_12358_12384[(2)] = inst_12339);

(statearr_12358_12384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (8))){
var inst_12320 = (state_12343[(7)]);
var inst_12330 = cljs.core.next.call(null,inst_12320);
var inst_12320__$1 = inst_12330;
var state_12343__$1 = (function (){var statearr_12359 = state_12343;
(statearr_12359[(7)] = inst_12320__$1);

return statearr_12359;
})();
var statearr_12360_12385 = state_12343__$1;
(statearr_12360_12385[(2)] = null);

(statearr_12360_12385[(1)] = (2));


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
});})(c__11523__auto__))
;
return ((function (switch__11411__auto__,c__11523__auto__){
return (function() {
var cljs$core$async$state_machine__11412__auto__ = null;
var cljs$core$async$state_machine__11412__auto____0 = (function (){
var statearr_12364 = [null,null,null,null,null,null,null,null];
(statearr_12364[(0)] = cljs$core$async$state_machine__11412__auto__);

(statearr_12364[(1)] = (1));

return statearr_12364;
});
var cljs$core$async$state_machine__11412__auto____1 = (function (state_12343){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_12343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e12365){if((e12365 instanceof Object)){
var ex__11415__auto__ = e12365;
var statearr_12366_12386 = state_12343;
(statearr_12366_12386[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12387 = state_12343;
state_12343 = G__12387;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$state_machine__11412__auto__ = function(state_12343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11412__auto____1.call(this,state_12343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11412__auto____0;
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11412__auto____1;
return cljs$core$async$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto__))
})();
var state__11525__auto__ = (function (){var statearr_12367 = f__11524__auto__.call(null);
(statearr_12367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto__);

return statearr_12367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto__))
);

return c__11523__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5327__auto__ = (((_ == null))?null:_);
var m__5328__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,_);
} else {
var m__5328__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5327__auto__ = (((m == null))?null:m);
var m__5328__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5328__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5327__auto__ = (((m == null))?null:m);
var m__5328__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,m,ch);
} else {
var m__5328__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5327__auto__ = (((m == null))?null:m);
var m__5328__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,m);
} else {
var m__5328__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12609 = (function (mult,ch,cs,meta12610){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12610 = meta12610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12611,meta12610__$1){
var self__ = this;
var _12611__$1 = this;
return (new cljs.core.async.t_cljs$core$async12609(self__.mult,self__.ch,self__.cs,meta12610__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12611){
var self__ = this;
var _12611__$1 = this;
return self__.meta12610;
});})(cs))
;

cljs.core.async.t_cljs$core$async12609.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12609.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12609.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async12609.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12609.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12609.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12609.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12610","meta12610",-1300515353,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12609";

cljs.core.async.t_cljs$core$async12609.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"cljs.core.async/t_cljs$core$async12609");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12609 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12609(mult__$1,ch__$1,cs__$1,meta12610){
return (new cljs.core.async.t_cljs$core$async12609(mult__$1,ch__$1,cs__$1,meta12610));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12609(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11523__auto___12830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___12830,cs,m,dchan,dctr,done){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___12830,cs,m,dchan,dctr,done){
return (function (state_12742){
var state_val_12743 = (state_12742[(1)]);
if((state_val_12743 === (7))){
var inst_12738 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12744_12831 = state_12742__$1;
(statearr_12744_12831[(2)] = inst_12738);

(statearr_12744_12831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (20))){
var inst_12643 = (state_12742[(7)]);
var inst_12653 = cljs.core.first.call(null,inst_12643);
var inst_12654 = cljs.core.nth.call(null,inst_12653,(0),null);
var inst_12655 = cljs.core.nth.call(null,inst_12653,(1),null);
var state_12742__$1 = (function (){var statearr_12745 = state_12742;
(statearr_12745[(8)] = inst_12654);

return statearr_12745;
})();
if(cljs.core.truth_(inst_12655)){
var statearr_12746_12832 = state_12742__$1;
(statearr_12746_12832[(1)] = (22));

} else {
var statearr_12747_12833 = state_12742__$1;
(statearr_12747_12833[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (27))){
var inst_12683 = (state_12742[(9)]);
var inst_12614 = (state_12742[(10)]);
var inst_12685 = (state_12742[(11)]);
var inst_12690 = (state_12742[(12)]);
var inst_12690__$1 = cljs.core._nth.call(null,inst_12683,inst_12685);
var inst_12691 = cljs.core.async.put_BANG_.call(null,inst_12690__$1,inst_12614,done);
var state_12742__$1 = (function (){var statearr_12748 = state_12742;
(statearr_12748[(12)] = inst_12690__$1);

return statearr_12748;
})();
if(cljs.core.truth_(inst_12691)){
var statearr_12749_12834 = state_12742__$1;
(statearr_12749_12834[(1)] = (30));

} else {
var statearr_12750_12835 = state_12742__$1;
(statearr_12750_12835[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (1))){
var state_12742__$1 = state_12742;
var statearr_12751_12836 = state_12742__$1;
(statearr_12751_12836[(2)] = null);

(statearr_12751_12836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (24))){
var inst_12643 = (state_12742[(7)]);
var inst_12660 = (state_12742[(2)]);
var inst_12661 = cljs.core.next.call(null,inst_12643);
var inst_12623 = inst_12661;
var inst_12624 = null;
var inst_12625 = (0);
var inst_12626 = (0);
var state_12742__$1 = (function (){var statearr_12752 = state_12742;
(statearr_12752[(13)] = inst_12660);

(statearr_12752[(14)] = inst_12623);

(statearr_12752[(15)] = inst_12624);

(statearr_12752[(16)] = inst_12625);

(statearr_12752[(17)] = inst_12626);

return statearr_12752;
})();
var statearr_12753_12837 = state_12742__$1;
(statearr_12753_12837[(2)] = null);

(statearr_12753_12837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (39))){
var state_12742__$1 = state_12742;
var statearr_12757_12838 = state_12742__$1;
(statearr_12757_12838[(2)] = null);

(statearr_12757_12838[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (4))){
var inst_12614 = (state_12742[(10)]);
var inst_12614__$1 = (state_12742[(2)]);
var inst_12615 = (inst_12614__$1 == null);
var state_12742__$1 = (function (){var statearr_12758 = state_12742;
(statearr_12758[(10)] = inst_12614__$1);

return statearr_12758;
})();
if(cljs.core.truth_(inst_12615)){
var statearr_12759_12839 = state_12742__$1;
(statearr_12759_12839[(1)] = (5));

} else {
var statearr_12760_12840 = state_12742__$1;
(statearr_12760_12840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (15))){
var inst_12623 = (state_12742[(14)]);
var inst_12624 = (state_12742[(15)]);
var inst_12625 = (state_12742[(16)]);
var inst_12626 = (state_12742[(17)]);
var inst_12639 = (state_12742[(2)]);
var inst_12640 = (inst_12626 + (1));
var tmp12754 = inst_12623;
var tmp12755 = inst_12624;
var tmp12756 = inst_12625;
var inst_12623__$1 = tmp12754;
var inst_12624__$1 = tmp12755;
var inst_12625__$1 = tmp12756;
var inst_12626__$1 = inst_12640;
var state_12742__$1 = (function (){var statearr_12761 = state_12742;
(statearr_12761[(14)] = inst_12623__$1);

(statearr_12761[(15)] = inst_12624__$1);

(statearr_12761[(18)] = inst_12639);

(statearr_12761[(16)] = inst_12625__$1);

(statearr_12761[(17)] = inst_12626__$1);

return statearr_12761;
})();
var statearr_12762_12841 = state_12742__$1;
(statearr_12762_12841[(2)] = null);

(statearr_12762_12841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (21))){
var inst_12664 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12766_12842 = state_12742__$1;
(statearr_12766_12842[(2)] = inst_12664);

(statearr_12766_12842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (31))){
var inst_12690 = (state_12742[(12)]);
var inst_12694 = done.call(null,null);
var inst_12695 = cljs.core.async.untap_STAR_.call(null,m,inst_12690);
var state_12742__$1 = (function (){var statearr_12767 = state_12742;
(statearr_12767[(19)] = inst_12694);

return statearr_12767;
})();
var statearr_12768_12843 = state_12742__$1;
(statearr_12768_12843[(2)] = inst_12695);

(statearr_12768_12843[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (32))){
var inst_12683 = (state_12742[(9)]);
var inst_12682 = (state_12742[(20)]);
var inst_12685 = (state_12742[(11)]);
var inst_12684 = (state_12742[(21)]);
var inst_12697 = (state_12742[(2)]);
var inst_12698 = (inst_12685 + (1));
var tmp12763 = inst_12683;
var tmp12764 = inst_12682;
var tmp12765 = inst_12684;
var inst_12682__$1 = tmp12764;
var inst_12683__$1 = tmp12763;
var inst_12684__$1 = tmp12765;
var inst_12685__$1 = inst_12698;
var state_12742__$1 = (function (){var statearr_12769 = state_12742;
(statearr_12769[(9)] = inst_12683__$1);

(statearr_12769[(20)] = inst_12682__$1);

(statearr_12769[(11)] = inst_12685__$1);

(statearr_12769[(22)] = inst_12697);

(statearr_12769[(21)] = inst_12684__$1);

return statearr_12769;
})();
var statearr_12770_12844 = state_12742__$1;
(statearr_12770_12844[(2)] = null);

(statearr_12770_12844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (40))){
var inst_12710 = (state_12742[(23)]);
var inst_12714 = done.call(null,null);
var inst_12715 = cljs.core.async.untap_STAR_.call(null,m,inst_12710);
var state_12742__$1 = (function (){var statearr_12771 = state_12742;
(statearr_12771[(24)] = inst_12714);

return statearr_12771;
})();
var statearr_12772_12845 = state_12742__$1;
(statearr_12772_12845[(2)] = inst_12715);

(statearr_12772_12845[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (33))){
var inst_12701 = (state_12742[(25)]);
var inst_12703 = cljs.core.chunked_seq_QMARK_.call(null,inst_12701);
var state_12742__$1 = state_12742;
if(inst_12703){
var statearr_12773_12846 = state_12742__$1;
(statearr_12773_12846[(1)] = (36));

} else {
var statearr_12774_12847 = state_12742__$1;
(statearr_12774_12847[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (13))){
var inst_12633 = (state_12742[(26)]);
var inst_12636 = cljs.core.async.close_BANG_.call(null,inst_12633);
var state_12742__$1 = state_12742;
var statearr_12775_12848 = state_12742__$1;
(statearr_12775_12848[(2)] = inst_12636);

(statearr_12775_12848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (22))){
var inst_12654 = (state_12742[(8)]);
var inst_12657 = cljs.core.async.close_BANG_.call(null,inst_12654);
var state_12742__$1 = state_12742;
var statearr_12776_12849 = state_12742__$1;
(statearr_12776_12849[(2)] = inst_12657);

(statearr_12776_12849[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (36))){
var inst_12701 = (state_12742[(25)]);
var inst_12705 = cljs.core.chunk_first.call(null,inst_12701);
var inst_12706 = cljs.core.chunk_rest.call(null,inst_12701);
var inst_12707 = cljs.core.count.call(null,inst_12705);
var inst_12682 = inst_12706;
var inst_12683 = inst_12705;
var inst_12684 = inst_12707;
var inst_12685 = (0);
var state_12742__$1 = (function (){var statearr_12777 = state_12742;
(statearr_12777[(9)] = inst_12683);

(statearr_12777[(20)] = inst_12682);

(statearr_12777[(11)] = inst_12685);

(statearr_12777[(21)] = inst_12684);

return statearr_12777;
})();
var statearr_12778_12850 = state_12742__$1;
(statearr_12778_12850[(2)] = null);

(statearr_12778_12850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (41))){
var inst_12701 = (state_12742[(25)]);
var inst_12717 = (state_12742[(2)]);
var inst_12718 = cljs.core.next.call(null,inst_12701);
var inst_12682 = inst_12718;
var inst_12683 = null;
var inst_12684 = (0);
var inst_12685 = (0);
var state_12742__$1 = (function (){var statearr_12779 = state_12742;
(statearr_12779[(27)] = inst_12717);

(statearr_12779[(9)] = inst_12683);

(statearr_12779[(20)] = inst_12682);

(statearr_12779[(11)] = inst_12685);

(statearr_12779[(21)] = inst_12684);

return statearr_12779;
})();
var statearr_12780_12851 = state_12742__$1;
(statearr_12780_12851[(2)] = null);

(statearr_12780_12851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (43))){
var state_12742__$1 = state_12742;
var statearr_12781_12852 = state_12742__$1;
(statearr_12781_12852[(2)] = null);

(statearr_12781_12852[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (29))){
var inst_12726 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12782_12853 = state_12742__$1;
(statearr_12782_12853[(2)] = inst_12726);

(statearr_12782_12853[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (44))){
var inst_12735 = (state_12742[(2)]);
var state_12742__$1 = (function (){var statearr_12783 = state_12742;
(statearr_12783[(28)] = inst_12735);

return statearr_12783;
})();
var statearr_12784_12854 = state_12742__$1;
(statearr_12784_12854[(2)] = null);

(statearr_12784_12854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (6))){
var inst_12674 = (state_12742[(29)]);
var inst_12673 = cljs.core.deref.call(null,cs);
var inst_12674__$1 = cljs.core.keys.call(null,inst_12673);
var inst_12675 = cljs.core.count.call(null,inst_12674__$1);
var inst_12676 = cljs.core.reset_BANG_.call(null,dctr,inst_12675);
var inst_12681 = cljs.core.seq.call(null,inst_12674__$1);
var inst_12682 = inst_12681;
var inst_12683 = null;
var inst_12684 = (0);
var inst_12685 = (0);
var state_12742__$1 = (function (){var statearr_12785 = state_12742;
(statearr_12785[(9)] = inst_12683);

(statearr_12785[(30)] = inst_12676);

(statearr_12785[(20)] = inst_12682);

(statearr_12785[(11)] = inst_12685);

(statearr_12785[(29)] = inst_12674__$1);

(statearr_12785[(21)] = inst_12684);

return statearr_12785;
})();
var statearr_12786_12855 = state_12742__$1;
(statearr_12786_12855[(2)] = null);

(statearr_12786_12855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (28))){
var inst_12682 = (state_12742[(20)]);
var inst_12701 = (state_12742[(25)]);
var inst_12701__$1 = cljs.core.seq.call(null,inst_12682);
var state_12742__$1 = (function (){var statearr_12787 = state_12742;
(statearr_12787[(25)] = inst_12701__$1);

return statearr_12787;
})();
if(inst_12701__$1){
var statearr_12788_12856 = state_12742__$1;
(statearr_12788_12856[(1)] = (33));

} else {
var statearr_12789_12857 = state_12742__$1;
(statearr_12789_12857[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (25))){
var inst_12685 = (state_12742[(11)]);
var inst_12684 = (state_12742[(21)]);
var inst_12687 = (inst_12685 < inst_12684);
var inst_12688 = inst_12687;
var state_12742__$1 = state_12742;
if(cljs.core.truth_(inst_12688)){
var statearr_12790_12858 = state_12742__$1;
(statearr_12790_12858[(1)] = (27));

} else {
var statearr_12791_12859 = state_12742__$1;
(statearr_12791_12859[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (34))){
var state_12742__$1 = state_12742;
var statearr_12792_12860 = state_12742__$1;
(statearr_12792_12860[(2)] = null);

(statearr_12792_12860[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (17))){
var state_12742__$1 = state_12742;
var statearr_12793_12861 = state_12742__$1;
(statearr_12793_12861[(2)] = null);

(statearr_12793_12861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (3))){
var inst_12740 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12742__$1,inst_12740);
} else {
if((state_val_12743 === (12))){
var inst_12669 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12794_12862 = state_12742__$1;
(statearr_12794_12862[(2)] = inst_12669);

(statearr_12794_12862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (2))){
var state_12742__$1 = state_12742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12742__$1,(4),ch);
} else {
if((state_val_12743 === (23))){
var state_12742__$1 = state_12742;
var statearr_12795_12863 = state_12742__$1;
(statearr_12795_12863[(2)] = null);

(statearr_12795_12863[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (35))){
var inst_12724 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12796_12864 = state_12742__$1;
(statearr_12796_12864[(2)] = inst_12724);

(statearr_12796_12864[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (19))){
var inst_12643 = (state_12742[(7)]);
var inst_12647 = cljs.core.chunk_first.call(null,inst_12643);
var inst_12648 = cljs.core.chunk_rest.call(null,inst_12643);
var inst_12649 = cljs.core.count.call(null,inst_12647);
var inst_12623 = inst_12648;
var inst_12624 = inst_12647;
var inst_12625 = inst_12649;
var inst_12626 = (0);
var state_12742__$1 = (function (){var statearr_12797 = state_12742;
(statearr_12797[(14)] = inst_12623);

(statearr_12797[(15)] = inst_12624);

(statearr_12797[(16)] = inst_12625);

(statearr_12797[(17)] = inst_12626);

return statearr_12797;
})();
var statearr_12798_12865 = state_12742__$1;
(statearr_12798_12865[(2)] = null);

(statearr_12798_12865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (11))){
var inst_12643 = (state_12742[(7)]);
var inst_12623 = (state_12742[(14)]);
var inst_12643__$1 = cljs.core.seq.call(null,inst_12623);
var state_12742__$1 = (function (){var statearr_12799 = state_12742;
(statearr_12799[(7)] = inst_12643__$1);

return statearr_12799;
})();
if(inst_12643__$1){
var statearr_12800_12866 = state_12742__$1;
(statearr_12800_12866[(1)] = (16));

} else {
var statearr_12801_12867 = state_12742__$1;
(statearr_12801_12867[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (9))){
var inst_12671 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12802_12868 = state_12742__$1;
(statearr_12802_12868[(2)] = inst_12671);

(statearr_12802_12868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (5))){
var inst_12621 = cljs.core.deref.call(null,cs);
var inst_12622 = cljs.core.seq.call(null,inst_12621);
var inst_12623 = inst_12622;
var inst_12624 = null;
var inst_12625 = (0);
var inst_12626 = (0);
var state_12742__$1 = (function (){var statearr_12803 = state_12742;
(statearr_12803[(14)] = inst_12623);

(statearr_12803[(15)] = inst_12624);

(statearr_12803[(16)] = inst_12625);

(statearr_12803[(17)] = inst_12626);

return statearr_12803;
})();
var statearr_12804_12869 = state_12742__$1;
(statearr_12804_12869[(2)] = null);

(statearr_12804_12869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (14))){
var state_12742__$1 = state_12742;
var statearr_12805_12870 = state_12742__$1;
(statearr_12805_12870[(2)] = null);

(statearr_12805_12870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (45))){
var inst_12732 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12806_12871 = state_12742__$1;
(statearr_12806_12871[(2)] = inst_12732);

(statearr_12806_12871[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (26))){
var inst_12674 = (state_12742[(29)]);
var inst_12728 = (state_12742[(2)]);
var inst_12729 = cljs.core.seq.call(null,inst_12674);
var state_12742__$1 = (function (){var statearr_12807 = state_12742;
(statearr_12807[(31)] = inst_12728);

return statearr_12807;
})();
if(inst_12729){
var statearr_12808_12872 = state_12742__$1;
(statearr_12808_12872[(1)] = (42));

} else {
var statearr_12809_12873 = state_12742__$1;
(statearr_12809_12873[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (16))){
var inst_12643 = (state_12742[(7)]);
var inst_12645 = cljs.core.chunked_seq_QMARK_.call(null,inst_12643);
var state_12742__$1 = state_12742;
if(inst_12645){
var statearr_12810_12874 = state_12742__$1;
(statearr_12810_12874[(1)] = (19));

} else {
var statearr_12811_12875 = state_12742__$1;
(statearr_12811_12875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (38))){
var inst_12721 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12812_12876 = state_12742__$1;
(statearr_12812_12876[(2)] = inst_12721);

(statearr_12812_12876[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (30))){
var state_12742__$1 = state_12742;
var statearr_12813_12877 = state_12742__$1;
(statearr_12813_12877[(2)] = null);

(statearr_12813_12877[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (10))){
var inst_12624 = (state_12742[(15)]);
var inst_12626 = (state_12742[(17)]);
var inst_12632 = cljs.core._nth.call(null,inst_12624,inst_12626);
var inst_12633 = cljs.core.nth.call(null,inst_12632,(0),null);
var inst_12634 = cljs.core.nth.call(null,inst_12632,(1),null);
var state_12742__$1 = (function (){var statearr_12814 = state_12742;
(statearr_12814[(26)] = inst_12633);

return statearr_12814;
})();
if(cljs.core.truth_(inst_12634)){
var statearr_12815_12878 = state_12742__$1;
(statearr_12815_12878[(1)] = (13));

} else {
var statearr_12816_12879 = state_12742__$1;
(statearr_12816_12879[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (18))){
var inst_12667 = (state_12742[(2)]);
var state_12742__$1 = state_12742;
var statearr_12817_12880 = state_12742__$1;
(statearr_12817_12880[(2)] = inst_12667);

(statearr_12817_12880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (42))){
var state_12742__$1 = state_12742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12742__$1,(45),dchan);
} else {
if((state_val_12743 === (37))){
var inst_12614 = (state_12742[(10)]);
var inst_12710 = (state_12742[(23)]);
var inst_12701 = (state_12742[(25)]);
var inst_12710__$1 = cljs.core.first.call(null,inst_12701);
var inst_12711 = cljs.core.async.put_BANG_.call(null,inst_12710__$1,inst_12614,done);
var state_12742__$1 = (function (){var statearr_12818 = state_12742;
(statearr_12818[(23)] = inst_12710__$1);

return statearr_12818;
})();
if(cljs.core.truth_(inst_12711)){
var statearr_12819_12881 = state_12742__$1;
(statearr_12819_12881[(1)] = (39));

} else {
var statearr_12820_12882 = state_12742__$1;
(statearr_12820_12882[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12743 === (8))){
var inst_12625 = (state_12742[(16)]);
var inst_12626 = (state_12742[(17)]);
var inst_12628 = (inst_12626 < inst_12625);
var inst_12629 = inst_12628;
var state_12742__$1 = state_12742;
if(cljs.core.truth_(inst_12629)){
var statearr_12821_12883 = state_12742__$1;
(statearr_12821_12883[(1)] = (10));

} else {
var statearr_12822_12884 = state_12742__$1;
(statearr_12822_12884[(1)] = (11));

}

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
}
}
}
});})(c__11523__auto___12830,cs,m,dchan,dctr,done))
;
return ((function (switch__11411__auto__,c__11523__auto___12830,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11412__auto__ = null;
var cljs$core$async$mult_$_state_machine__11412__auto____0 = (function (){
var statearr_12826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12826[(0)] = cljs$core$async$mult_$_state_machine__11412__auto__);

(statearr_12826[(1)] = (1));

return statearr_12826;
});
var cljs$core$async$mult_$_state_machine__11412__auto____1 = (function (state_12742){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_12742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e12827){if((e12827 instanceof Object)){
var ex__11415__auto__ = e12827;
var statearr_12828_12885 = state_12742;
(statearr_12828_12885[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12886 = state_12742;
state_12742 = G__12886;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11412__auto__ = function(state_12742){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11412__auto____1.call(this,state_12742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11412__auto____0;
cljs$core$async$mult_$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11412__auto____1;
return cljs$core$async$mult_$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___12830,cs,m,dchan,dctr,done))
})();
var state__11525__auto__ = (function (){var statearr_12829 = f__11524__auto__.call(null);
(statearr_12829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___12830);

return statearr_12829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___12830,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args12887 = [];
var len__5730__auto___12890 = arguments.length;
var i__5731__auto___12891 = (0);
while(true){
if((i__5731__auto___12891 < len__5730__auto___12890)){
args12887.push((arguments[i__5731__auto___12891]));

var G__12892 = (i__5731__auto___12891 + (1));
i__5731__auto___12891 = G__12892;
continue;
} else {
}
break;
}

var G__12889 = args12887.length;
switch (G__12889) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12887.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5327__auto__ = (((m == null))?null:m);
var m__5328__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,m,ch);
} else {
var m__5328__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5327__auto__ = (((m == null))?null:m);
var m__5328__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,m,ch);
} else {
var m__5328__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5327__auto__ = (((m == null))?null:m);
var m__5328__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,m);
} else {
var m__5328__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5327__auto__ = (((m == null))?null:m);
var m__5328__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,m,state_map);
} else {
var m__5328__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5327__auto__ = (((m == null))?null:m);
var m__5328__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,m,mode);
} else {
var m__5328__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5737__auto__ = [];
var len__5730__auto___12904 = arguments.length;
var i__5731__auto___12905 = (0);
while(true){
if((i__5731__auto___12905 < len__5730__auto___12904)){
args__5737__auto__.push((arguments[i__5731__auto___12905]));

var G__12906 = (i__5731__auto___12905 + (1));
i__5731__auto___12905 = G__12906;
continue;
} else {
}
break;
}

var argseq__5738__auto__ = ((((3) < args__5737__auto__.length))?(new cljs.core.IndexedSeq(args__5737__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5738__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12898){
var map__12899 = p__12898;
var map__12899__$1 = ((((!((map__12899 == null)))?((((map__12899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12899):map__12899);
var opts = map__12899__$1;
var statearr_12901_12907 = state;
(statearr_12901_12907[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__12899,map__12899__$1,opts){
return (function (val){
var statearr_12902_12908 = state;
(statearr_12902_12908[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12899,map__12899__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_12903_12909 = state;
(statearr_12903_12909[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12894){
var G__12895 = cljs.core.first.call(null,seq12894);
var seq12894__$1 = cljs.core.next.call(null,seq12894);
var G__12896 = cljs.core.first.call(null,seq12894__$1);
var seq12894__$2 = cljs.core.next.call(null,seq12894__$1);
var G__12897 = cljs.core.first.call(null,seq12894__$2);
var seq12894__$3 = cljs.core.next.call(null,seq12894__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12895,G__12896,G__12897,seq12894__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13073 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13074){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13074 = meta13074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13075,meta13074__$1){
var self__ = this;
var _13075__$1 = this;
return (new cljs.core.async.t_cljs$core$async13073(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13074__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13075){
var self__ = this;
var _13075__$1 = this;
return self__.meta13074;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13073.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13073.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13073.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async13073.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13073.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13073.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13073.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13073.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13073.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13074","meta13074",-940720234,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13073";

cljs.core.async.t_cljs$core$async13073.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"cljs.core.async/t_cljs$core$async13073");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13073 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13073(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13074){
return (new cljs.core.async.t_cljs$core$async13073(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13074));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13073(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11523__auto___13236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___13236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___13236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13173){
var state_val_13174 = (state_13173[(1)]);
if((state_val_13174 === (7))){
var inst_13091 = (state_13173[(2)]);
var state_13173__$1 = state_13173;
var statearr_13175_13237 = state_13173__$1;
(statearr_13175_13237[(2)] = inst_13091);

(statearr_13175_13237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (20))){
var inst_13103 = (state_13173[(7)]);
var state_13173__$1 = state_13173;
var statearr_13176_13238 = state_13173__$1;
(statearr_13176_13238[(2)] = inst_13103);

(statearr_13176_13238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (27))){
var state_13173__$1 = state_13173;
var statearr_13177_13239 = state_13173__$1;
(statearr_13177_13239[(2)] = null);

(statearr_13177_13239[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (1))){
var inst_13079 = (state_13173[(8)]);
var inst_13079__$1 = calc_state.call(null);
var inst_13081 = (inst_13079__$1 == null);
var inst_13082 = cljs.core.not.call(null,inst_13081);
var state_13173__$1 = (function (){var statearr_13178 = state_13173;
(statearr_13178[(8)] = inst_13079__$1);

return statearr_13178;
})();
if(inst_13082){
var statearr_13179_13240 = state_13173__$1;
(statearr_13179_13240[(1)] = (2));

} else {
var statearr_13180_13241 = state_13173__$1;
(statearr_13180_13241[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (24))){
var inst_13126 = (state_13173[(9)]);
var inst_13133 = (state_13173[(10)]);
var inst_13147 = (state_13173[(11)]);
var inst_13147__$1 = inst_13126.call(null,inst_13133);
var state_13173__$1 = (function (){var statearr_13181 = state_13173;
(statearr_13181[(11)] = inst_13147__$1);

return statearr_13181;
})();
if(cljs.core.truth_(inst_13147__$1)){
var statearr_13182_13242 = state_13173__$1;
(statearr_13182_13242[(1)] = (29));

} else {
var statearr_13183_13243 = state_13173__$1;
(statearr_13183_13243[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (4))){
var inst_13094 = (state_13173[(2)]);
var state_13173__$1 = state_13173;
if(cljs.core.truth_(inst_13094)){
var statearr_13184_13244 = state_13173__$1;
(statearr_13184_13244[(1)] = (8));

} else {
var statearr_13185_13245 = state_13173__$1;
(statearr_13185_13245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (15))){
var inst_13120 = (state_13173[(2)]);
var state_13173__$1 = state_13173;
if(cljs.core.truth_(inst_13120)){
var statearr_13186_13246 = state_13173__$1;
(statearr_13186_13246[(1)] = (19));

} else {
var statearr_13187_13247 = state_13173__$1;
(statearr_13187_13247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (21))){
var inst_13125 = (state_13173[(12)]);
var inst_13125__$1 = (state_13173[(2)]);
var inst_13126 = cljs.core.get.call(null,inst_13125__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13127 = cljs.core.get.call(null,inst_13125__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13128 = cljs.core.get.call(null,inst_13125__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13173__$1 = (function (){var statearr_13188 = state_13173;
(statearr_13188[(13)] = inst_13127);

(statearr_13188[(9)] = inst_13126);

(statearr_13188[(12)] = inst_13125__$1);

return statearr_13188;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13173__$1,(22),inst_13128);
} else {
if((state_val_13174 === (31))){
var inst_13155 = (state_13173[(2)]);
var state_13173__$1 = state_13173;
if(cljs.core.truth_(inst_13155)){
var statearr_13189_13248 = state_13173__$1;
(statearr_13189_13248[(1)] = (32));

} else {
var statearr_13190_13249 = state_13173__$1;
(statearr_13190_13249[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (32))){
var inst_13132 = (state_13173[(14)]);
var state_13173__$1 = state_13173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13173__$1,(35),out,inst_13132);
} else {
if((state_val_13174 === (33))){
var inst_13125 = (state_13173[(12)]);
var inst_13103 = inst_13125;
var state_13173__$1 = (function (){var statearr_13191 = state_13173;
(statearr_13191[(7)] = inst_13103);

return statearr_13191;
})();
var statearr_13192_13250 = state_13173__$1;
(statearr_13192_13250[(2)] = null);

(statearr_13192_13250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (13))){
var inst_13103 = (state_13173[(7)]);
var inst_13110 = inst_13103.cljs$lang$protocol_mask$partition0$;
var inst_13111 = (inst_13110 & (64));
var inst_13112 = inst_13103.cljs$core$ISeq$;
var inst_13113 = (inst_13111) || (inst_13112);
var state_13173__$1 = state_13173;
if(cljs.core.truth_(inst_13113)){
var statearr_13193_13251 = state_13173__$1;
(statearr_13193_13251[(1)] = (16));

} else {
var statearr_13194_13252 = state_13173__$1;
(statearr_13194_13252[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (22))){
var inst_13133 = (state_13173[(10)]);
var inst_13132 = (state_13173[(14)]);
var inst_13131 = (state_13173[(2)]);
var inst_13132__$1 = cljs.core.nth.call(null,inst_13131,(0),null);
var inst_13133__$1 = cljs.core.nth.call(null,inst_13131,(1),null);
var inst_13134 = (inst_13132__$1 == null);
var inst_13135 = cljs.core._EQ_.call(null,inst_13133__$1,change);
var inst_13136 = (inst_13134) || (inst_13135);
var state_13173__$1 = (function (){var statearr_13195 = state_13173;
(statearr_13195[(10)] = inst_13133__$1);

(statearr_13195[(14)] = inst_13132__$1);

return statearr_13195;
})();
if(cljs.core.truth_(inst_13136)){
var statearr_13196_13253 = state_13173__$1;
(statearr_13196_13253[(1)] = (23));

} else {
var statearr_13197_13254 = state_13173__$1;
(statearr_13197_13254[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (36))){
var inst_13125 = (state_13173[(12)]);
var inst_13103 = inst_13125;
var state_13173__$1 = (function (){var statearr_13198 = state_13173;
(statearr_13198[(7)] = inst_13103);

return statearr_13198;
})();
var statearr_13199_13255 = state_13173__$1;
(statearr_13199_13255[(2)] = null);

(statearr_13199_13255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (29))){
var inst_13147 = (state_13173[(11)]);
var state_13173__$1 = state_13173;
var statearr_13200_13256 = state_13173__$1;
(statearr_13200_13256[(2)] = inst_13147);

(statearr_13200_13256[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (6))){
var state_13173__$1 = state_13173;
var statearr_13201_13257 = state_13173__$1;
(statearr_13201_13257[(2)] = false);

(statearr_13201_13257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (28))){
var inst_13143 = (state_13173[(2)]);
var inst_13144 = calc_state.call(null);
var inst_13103 = inst_13144;
var state_13173__$1 = (function (){var statearr_13202 = state_13173;
(statearr_13202[(7)] = inst_13103);

(statearr_13202[(15)] = inst_13143);

return statearr_13202;
})();
var statearr_13203_13258 = state_13173__$1;
(statearr_13203_13258[(2)] = null);

(statearr_13203_13258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (25))){
var inst_13169 = (state_13173[(2)]);
var state_13173__$1 = state_13173;
var statearr_13204_13259 = state_13173__$1;
(statearr_13204_13259[(2)] = inst_13169);

(statearr_13204_13259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (34))){
var inst_13167 = (state_13173[(2)]);
var state_13173__$1 = state_13173;
var statearr_13205_13260 = state_13173__$1;
(statearr_13205_13260[(2)] = inst_13167);

(statearr_13205_13260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (17))){
var state_13173__$1 = state_13173;
var statearr_13206_13261 = state_13173__$1;
(statearr_13206_13261[(2)] = false);

(statearr_13206_13261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (3))){
var state_13173__$1 = state_13173;
var statearr_13207_13262 = state_13173__$1;
(statearr_13207_13262[(2)] = false);

(statearr_13207_13262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (12))){
var inst_13171 = (state_13173[(2)]);
var state_13173__$1 = state_13173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13173__$1,inst_13171);
} else {
if((state_val_13174 === (2))){
var inst_13079 = (state_13173[(8)]);
var inst_13084 = inst_13079.cljs$lang$protocol_mask$partition0$;
var inst_13085 = (inst_13084 & (64));
var inst_13086 = inst_13079.cljs$core$ISeq$;
var inst_13087 = (inst_13085) || (inst_13086);
var state_13173__$1 = state_13173;
if(cljs.core.truth_(inst_13087)){
var statearr_13208_13263 = state_13173__$1;
(statearr_13208_13263[(1)] = (5));

} else {
var statearr_13209_13264 = state_13173__$1;
(statearr_13209_13264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (23))){
var inst_13132 = (state_13173[(14)]);
var inst_13138 = (inst_13132 == null);
var state_13173__$1 = state_13173;
if(cljs.core.truth_(inst_13138)){
var statearr_13210_13265 = state_13173__$1;
(statearr_13210_13265[(1)] = (26));

} else {
var statearr_13211_13266 = state_13173__$1;
(statearr_13211_13266[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (35))){
var inst_13158 = (state_13173[(2)]);
var state_13173__$1 = state_13173;
if(cljs.core.truth_(inst_13158)){
var statearr_13212_13267 = state_13173__$1;
(statearr_13212_13267[(1)] = (36));

} else {
var statearr_13213_13268 = state_13173__$1;
(statearr_13213_13268[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (19))){
var inst_13103 = (state_13173[(7)]);
var inst_13122 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13103);
var state_13173__$1 = state_13173;
var statearr_13214_13269 = state_13173__$1;
(statearr_13214_13269[(2)] = inst_13122);

(statearr_13214_13269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (11))){
var inst_13103 = (state_13173[(7)]);
var inst_13107 = (inst_13103 == null);
var inst_13108 = cljs.core.not.call(null,inst_13107);
var state_13173__$1 = state_13173;
if(inst_13108){
var statearr_13215_13270 = state_13173__$1;
(statearr_13215_13270[(1)] = (13));

} else {
var statearr_13216_13271 = state_13173__$1;
(statearr_13216_13271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (9))){
var inst_13079 = (state_13173[(8)]);
var state_13173__$1 = state_13173;
var statearr_13217_13272 = state_13173__$1;
(statearr_13217_13272[(2)] = inst_13079);

(statearr_13217_13272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (5))){
var state_13173__$1 = state_13173;
var statearr_13218_13273 = state_13173__$1;
(statearr_13218_13273[(2)] = true);

(statearr_13218_13273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (14))){
var state_13173__$1 = state_13173;
var statearr_13219_13274 = state_13173__$1;
(statearr_13219_13274[(2)] = false);

(statearr_13219_13274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (26))){
var inst_13133 = (state_13173[(10)]);
var inst_13140 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13133);
var state_13173__$1 = state_13173;
var statearr_13220_13275 = state_13173__$1;
(statearr_13220_13275[(2)] = inst_13140);

(statearr_13220_13275[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (16))){
var state_13173__$1 = state_13173;
var statearr_13221_13276 = state_13173__$1;
(statearr_13221_13276[(2)] = true);

(statearr_13221_13276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (38))){
var inst_13163 = (state_13173[(2)]);
var state_13173__$1 = state_13173;
var statearr_13222_13277 = state_13173__$1;
(statearr_13222_13277[(2)] = inst_13163);

(statearr_13222_13277[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (30))){
var inst_13127 = (state_13173[(13)]);
var inst_13126 = (state_13173[(9)]);
var inst_13133 = (state_13173[(10)]);
var inst_13150 = cljs.core.empty_QMARK_.call(null,inst_13126);
var inst_13151 = inst_13127.call(null,inst_13133);
var inst_13152 = cljs.core.not.call(null,inst_13151);
var inst_13153 = (inst_13150) && (inst_13152);
var state_13173__$1 = state_13173;
var statearr_13223_13278 = state_13173__$1;
(statearr_13223_13278[(2)] = inst_13153);

(statearr_13223_13278[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (10))){
var inst_13079 = (state_13173[(8)]);
var inst_13099 = (state_13173[(2)]);
var inst_13100 = cljs.core.get.call(null,inst_13099,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13101 = cljs.core.get.call(null,inst_13099,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13102 = cljs.core.get.call(null,inst_13099,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13103 = inst_13079;
var state_13173__$1 = (function (){var statearr_13224 = state_13173;
(statearr_13224[(7)] = inst_13103);

(statearr_13224[(16)] = inst_13101);

(statearr_13224[(17)] = inst_13100);

(statearr_13224[(18)] = inst_13102);

return statearr_13224;
})();
var statearr_13225_13279 = state_13173__$1;
(statearr_13225_13279[(2)] = null);

(statearr_13225_13279[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (18))){
var inst_13117 = (state_13173[(2)]);
var state_13173__$1 = state_13173;
var statearr_13226_13280 = state_13173__$1;
(statearr_13226_13280[(2)] = inst_13117);

(statearr_13226_13280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (37))){
var state_13173__$1 = state_13173;
var statearr_13227_13281 = state_13173__$1;
(statearr_13227_13281[(2)] = null);

(statearr_13227_13281[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13174 === (8))){
var inst_13079 = (state_13173[(8)]);
var inst_13096 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13079);
var state_13173__$1 = state_13173;
var statearr_13228_13282 = state_13173__$1;
(statearr_13228_13282[(2)] = inst_13096);

(statearr_13228_13282[(1)] = (10));


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
});})(c__11523__auto___13236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11411__auto__,c__11523__auto___13236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11412__auto__ = null;
var cljs$core$async$mix_$_state_machine__11412__auto____0 = (function (){
var statearr_13232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13232[(0)] = cljs$core$async$mix_$_state_machine__11412__auto__);

(statearr_13232[(1)] = (1));

return statearr_13232;
});
var cljs$core$async$mix_$_state_machine__11412__auto____1 = (function (state_13173){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_13173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e13233){if((e13233 instanceof Object)){
var ex__11415__auto__ = e13233;
var statearr_13234_13283 = state_13173;
(statearr_13234_13283[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13284 = state_13173;
state_13173 = G__13284;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11412__auto__ = function(state_13173){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11412__auto____1.call(this,state_13173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11412__auto____0;
cljs$core$async$mix_$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11412__auto____1;
return cljs$core$async$mix_$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___13236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11525__auto__ = (function (){var statearr_13235 = f__11524__auto__.call(null);
(statearr_13235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___13236);

return statearr_13235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___13236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5327__auto__ = (((p == null))?null:p);
var m__5328__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5328__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5327__auto__ = (((p == null))?null:p);
var m__5328__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,p,v,ch);
} else {
var m__5328__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args13285 = [];
var len__5730__auto___13288 = arguments.length;
var i__5731__auto___13289 = (0);
while(true){
if((i__5731__auto___13289 < len__5730__auto___13288)){
args13285.push((arguments[i__5731__auto___13289]));

var G__13290 = (i__5731__auto___13289 + (1));
i__5731__auto___13289 = G__13290;
continue;
} else {
}
break;
}

var G__13287 = args13285.length;
switch (G__13287) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13285.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5327__auto__ = (((p == null))?null:p);
var m__5328__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,p);
} else {
var m__5328__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5327__auto__ = (((p == null))?null:p);
var m__5328__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5327__auto__)]);
if(!((m__5328__auto__ == null))){
return m__5328__auto__.call(null,p,v);
} else {
var m__5328__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5328__auto____$1 == null))){
return m__5328__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args13293 = [];
var len__5730__auto___13418 = arguments.length;
var i__5731__auto___13419 = (0);
while(true){
if((i__5731__auto___13419 < len__5730__auto___13418)){
args13293.push((arguments[i__5731__auto___13419]));

var G__13420 = (i__5731__auto___13419 + (1));
i__5731__auto___13419 = G__13420;
continue;
} else {
}
break;
}

var G__13295 = args13293.length;
switch (G__13295) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13293.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4672__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4672__auto__)){
return or__4672__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4672__auto__,mults){
return (function (p1__13292_SHARP_){
if(cljs.core.truth_(p1__13292_SHARP_.call(null,topic))){
return p1__13292_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13292_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4672__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13296 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13297){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13297 = meta13297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13298,meta13297__$1){
var self__ = this;
var _13298__$1 = this;
return (new cljs.core.async.t_cljs$core$async13296(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13297__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13298){
var self__ = this;
var _13298__$1 = this;
return self__.meta13297;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13296.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13296.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async13296.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13296.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13296.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13297","meta13297",1105441029,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13296";

cljs.core.async.t_cljs$core$async13296.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"cljs.core.async/t_cljs$core$async13296");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13296 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13296(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13297){
return (new cljs.core.async.t_cljs$core$async13296(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13297));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13296(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11523__auto___13422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___13422,mults,ensure_mult,p){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___13422,mults,ensure_mult,p){
return (function (state_13370){
var state_val_13371 = (state_13370[(1)]);
if((state_val_13371 === (7))){
var inst_13366 = (state_13370[(2)]);
var state_13370__$1 = state_13370;
var statearr_13372_13423 = state_13370__$1;
(statearr_13372_13423[(2)] = inst_13366);

(statearr_13372_13423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (20))){
var state_13370__$1 = state_13370;
var statearr_13373_13424 = state_13370__$1;
(statearr_13373_13424[(2)] = null);

(statearr_13373_13424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (1))){
var state_13370__$1 = state_13370;
var statearr_13374_13425 = state_13370__$1;
(statearr_13374_13425[(2)] = null);

(statearr_13374_13425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (24))){
var inst_13349 = (state_13370[(7)]);
var inst_13358 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13349);
var state_13370__$1 = state_13370;
var statearr_13375_13426 = state_13370__$1;
(statearr_13375_13426[(2)] = inst_13358);

(statearr_13375_13426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (4))){
var inst_13301 = (state_13370[(8)]);
var inst_13301__$1 = (state_13370[(2)]);
var inst_13302 = (inst_13301__$1 == null);
var state_13370__$1 = (function (){var statearr_13376 = state_13370;
(statearr_13376[(8)] = inst_13301__$1);

return statearr_13376;
})();
if(cljs.core.truth_(inst_13302)){
var statearr_13377_13427 = state_13370__$1;
(statearr_13377_13427[(1)] = (5));

} else {
var statearr_13378_13428 = state_13370__$1;
(statearr_13378_13428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (15))){
var inst_13343 = (state_13370[(2)]);
var state_13370__$1 = state_13370;
var statearr_13379_13429 = state_13370__$1;
(statearr_13379_13429[(2)] = inst_13343);

(statearr_13379_13429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (21))){
var inst_13363 = (state_13370[(2)]);
var state_13370__$1 = (function (){var statearr_13380 = state_13370;
(statearr_13380[(9)] = inst_13363);

return statearr_13380;
})();
var statearr_13381_13430 = state_13370__$1;
(statearr_13381_13430[(2)] = null);

(statearr_13381_13430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (13))){
var inst_13325 = (state_13370[(10)]);
var inst_13327 = cljs.core.chunked_seq_QMARK_.call(null,inst_13325);
var state_13370__$1 = state_13370;
if(inst_13327){
var statearr_13382_13431 = state_13370__$1;
(statearr_13382_13431[(1)] = (16));

} else {
var statearr_13383_13432 = state_13370__$1;
(statearr_13383_13432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (22))){
var inst_13355 = (state_13370[(2)]);
var state_13370__$1 = state_13370;
if(cljs.core.truth_(inst_13355)){
var statearr_13384_13433 = state_13370__$1;
(statearr_13384_13433[(1)] = (23));

} else {
var statearr_13385_13434 = state_13370__$1;
(statearr_13385_13434[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (6))){
var inst_13349 = (state_13370[(7)]);
var inst_13301 = (state_13370[(8)]);
var inst_13351 = (state_13370[(11)]);
var inst_13349__$1 = topic_fn.call(null,inst_13301);
var inst_13350 = cljs.core.deref.call(null,mults);
var inst_13351__$1 = cljs.core.get.call(null,inst_13350,inst_13349__$1);
var state_13370__$1 = (function (){var statearr_13386 = state_13370;
(statearr_13386[(7)] = inst_13349__$1);

(statearr_13386[(11)] = inst_13351__$1);

return statearr_13386;
})();
if(cljs.core.truth_(inst_13351__$1)){
var statearr_13387_13435 = state_13370__$1;
(statearr_13387_13435[(1)] = (19));

} else {
var statearr_13388_13436 = state_13370__$1;
(statearr_13388_13436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (25))){
var inst_13360 = (state_13370[(2)]);
var state_13370__$1 = state_13370;
var statearr_13389_13437 = state_13370__$1;
(statearr_13389_13437[(2)] = inst_13360);

(statearr_13389_13437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (17))){
var inst_13325 = (state_13370[(10)]);
var inst_13334 = cljs.core.first.call(null,inst_13325);
var inst_13335 = cljs.core.async.muxch_STAR_.call(null,inst_13334);
var inst_13336 = cljs.core.async.close_BANG_.call(null,inst_13335);
var inst_13337 = cljs.core.next.call(null,inst_13325);
var inst_13311 = inst_13337;
var inst_13312 = null;
var inst_13313 = (0);
var inst_13314 = (0);
var state_13370__$1 = (function (){var statearr_13390 = state_13370;
(statearr_13390[(12)] = inst_13312);

(statearr_13390[(13)] = inst_13311);

(statearr_13390[(14)] = inst_13313);

(statearr_13390[(15)] = inst_13336);

(statearr_13390[(16)] = inst_13314);

return statearr_13390;
})();
var statearr_13391_13438 = state_13370__$1;
(statearr_13391_13438[(2)] = null);

(statearr_13391_13438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (3))){
var inst_13368 = (state_13370[(2)]);
var state_13370__$1 = state_13370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13370__$1,inst_13368);
} else {
if((state_val_13371 === (12))){
var inst_13345 = (state_13370[(2)]);
var state_13370__$1 = state_13370;
var statearr_13392_13439 = state_13370__$1;
(statearr_13392_13439[(2)] = inst_13345);

(statearr_13392_13439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (2))){
var state_13370__$1 = state_13370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13370__$1,(4),ch);
} else {
if((state_val_13371 === (23))){
var state_13370__$1 = state_13370;
var statearr_13393_13440 = state_13370__$1;
(statearr_13393_13440[(2)] = null);

(statearr_13393_13440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (19))){
var inst_13301 = (state_13370[(8)]);
var inst_13351 = (state_13370[(11)]);
var inst_13353 = cljs.core.async.muxch_STAR_.call(null,inst_13351);
var state_13370__$1 = state_13370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13370__$1,(22),inst_13353,inst_13301);
} else {
if((state_val_13371 === (11))){
var inst_13311 = (state_13370[(13)]);
var inst_13325 = (state_13370[(10)]);
var inst_13325__$1 = cljs.core.seq.call(null,inst_13311);
var state_13370__$1 = (function (){var statearr_13394 = state_13370;
(statearr_13394[(10)] = inst_13325__$1);

return statearr_13394;
})();
if(inst_13325__$1){
var statearr_13395_13441 = state_13370__$1;
(statearr_13395_13441[(1)] = (13));

} else {
var statearr_13396_13442 = state_13370__$1;
(statearr_13396_13442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (9))){
var inst_13347 = (state_13370[(2)]);
var state_13370__$1 = state_13370;
var statearr_13397_13443 = state_13370__$1;
(statearr_13397_13443[(2)] = inst_13347);

(statearr_13397_13443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (5))){
var inst_13308 = cljs.core.deref.call(null,mults);
var inst_13309 = cljs.core.vals.call(null,inst_13308);
var inst_13310 = cljs.core.seq.call(null,inst_13309);
var inst_13311 = inst_13310;
var inst_13312 = null;
var inst_13313 = (0);
var inst_13314 = (0);
var state_13370__$1 = (function (){var statearr_13398 = state_13370;
(statearr_13398[(12)] = inst_13312);

(statearr_13398[(13)] = inst_13311);

(statearr_13398[(14)] = inst_13313);

(statearr_13398[(16)] = inst_13314);

return statearr_13398;
})();
var statearr_13399_13444 = state_13370__$1;
(statearr_13399_13444[(2)] = null);

(statearr_13399_13444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (14))){
var state_13370__$1 = state_13370;
var statearr_13403_13445 = state_13370__$1;
(statearr_13403_13445[(2)] = null);

(statearr_13403_13445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (16))){
var inst_13325 = (state_13370[(10)]);
var inst_13329 = cljs.core.chunk_first.call(null,inst_13325);
var inst_13330 = cljs.core.chunk_rest.call(null,inst_13325);
var inst_13331 = cljs.core.count.call(null,inst_13329);
var inst_13311 = inst_13330;
var inst_13312 = inst_13329;
var inst_13313 = inst_13331;
var inst_13314 = (0);
var state_13370__$1 = (function (){var statearr_13404 = state_13370;
(statearr_13404[(12)] = inst_13312);

(statearr_13404[(13)] = inst_13311);

(statearr_13404[(14)] = inst_13313);

(statearr_13404[(16)] = inst_13314);

return statearr_13404;
})();
var statearr_13405_13446 = state_13370__$1;
(statearr_13405_13446[(2)] = null);

(statearr_13405_13446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (10))){
var inst_13312 = (state_13370[(12)]);
var inst_13311 = (state_13370[(13)]);
var inst_13313 = (state_13370[(14)]);
var inst_13314 = (state_13370[(16)]);
var inst_13319 = cljs.core._nth.call(null,inst_13312,inst_13314);
var inst_13320 = cljs.core.async.muxch_STAR_.call(null,inst_13319);
var inst_13321 = cljs.core.async.close_BANG_.call(null,inst_13320);
var inst_13322 = (inst_13314 + (1));
var tmp13400 = inst_13312;
var tmp13401 = inst_13311;
var tmp13402 = inst_13313;
var inst_13311__$1 = tmp13401;
var inst_13312__$1 = tmp13400;
var inst_13313__$1 = tmp13402;
var inst_13314__$1 = inst_13322;
var state_13370__$1 = (function (){var statearr_13406 = state_13370;
(statearr_13406[(12)] = inst_13312__$1);

(statearr_13406[(13)] = inst_13311__$1);

(statearr_13406[(14)] = inst_13313__$1);

(statearr_13406[(17)] = inst_13321);

(statearr_13406[(16)] = inst_13314__$1);

return statearr_13406;
})();
var statearr_13407_13447 = state_13370__$1;
(statearr_13407_13447[(2)] = null);

(statearr_13407_13447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (18))){
var inst_13340 = (state_13370[(2)]);
var state_13370__$1 = state_13370;
var statearr_13408_13448 = state_13370__$1;
(statearr_13408_13448[(2)] = inst_13340);

(statearr_13408_13448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (8))){
var inst_13313 = (state_13370[(14)]);
var inst_13314 = (state_13370[(16)]);
var inst_13316 = (inst_13314 < inst_13313);
var inst_13317 = inst_13316;
var state_13370__$1 = state_13370;
if(cljs.core.truth_(inst_13317)){
var statearr_13409_13449 = state_13370__$1;
(statearr_13409_13449[(1)] = (10));

} else {
var statearr_13410_13450 = state_13370__$1;
(statearr_13410_13450[(1)] = (11));

}

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
}
}
}
}
});})(c__11523__auto___13422,mults,ensure_mult,p))
;
return ((function (switch__11411__auto__,c__11523__auto___13422,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11412__auto__ = null;
var cljs$core$async$state_machine__11412__auto____0 = (function (){
var statearr_13414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13414[(0)] = cljs$core$async$state_machine__11412__auto__);

(statearr_13414[(1)] = (1));

return statearr_13414;
});
var cljs$core$async$state_machine__11412__auto____1 = (function (state_13370){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_13370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e13415){if((e13415 instanceof Object)){
var ex__11415__auto__ = e13415;
var statearr_13416_13451 = state_13370;
(statearr_13416_13451[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13452 = state_13370;
state_13370 = G__13452;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$state_machine__11412__auto__ = function(state_13370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11412__auto____1.call(this,state_13370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11412__auto____0;
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11412__auto____1;
return cljs$core$async$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___13422,mults,ensure_mult,p))
})();
var state__11525__auto__ = (function (){var statearr_13417 = f__11524__auto__.call(null);
(statearr_13417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___13422);

return statearr_13417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___13422,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args13453 = [];
var len__5730__auto___13456 = arguments.length;
var i__5731__auto___13457 = (0);
while(true){
if((i__5731__auto___13457 < len__5730__auto___13456)){
args13453.push((arguments[i__5731__auto___13457]));

var G__13458 = (i__5731__auto___13457 + (1));
i__5731__auto___13457 = G__13458;
continue;
} else {
}
break;
}

var G__13455 = args13453.length;
switch (G__13455) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13453.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args13460 = [];
var len__5730__auto___13463 = arguments.length;
var i__5731__auto___13464 = (0);
while(true){
if((i__5731__auto___13464 < len__5730__auto___13463)){
args13460.push((arguments[i__5731__auto___13464]));

var G__13465 = (i__5731__auto___13464 + (1));
i__5731__auto___13464 = G__13465;
continue;
} else {
}
break;
}

var G__13462 = args13460.length;
switch (G__13462) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13460.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args13467 = [];
var len__5730__auto___13538 = arguments.length;
var i__5731__auto___13539 = (0);
while(true){
if((i__5731__auto___13539 < len__5730__auto___13538)){
args13467.push((arguments[i__5731__auto___13539]));

var G__13540 = (i__5731__auto___13539 + (1));
i__5731__auto___13539 = G__13540;
continue;
} else {
}
break;
}

var G__13469 = args13467.length;
switch (G__13469) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13467.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__11523__auto___13542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___13542,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___13542,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13508){
var state_val_13509 = (state_13508[(1)]);
if((state_val_13509 === (7))){
var state_13508__$1 = state_13508;
var statearr_13510_13543 = state_13508__$1;
(statearr_13510_13543[(2)] = null);

(statearr_13510_13543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13509 === (1))){
var state_13508__$1 = state_13508;
var statearr_13511_13544 = state_13508__$1;
(statearr_13511_13544[(2)] = null);

(statearr_13511_13544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13509 === (4))){
var inst_13472 = (state_13508[(7)]);
var inst_13474 = (inst_13472 < cnt);
var state_13508__$1 = state_13508;
if(cljs.core.truth_(inst_13474)){
var statearr_13512_13545 = state_13508__$1;
(statearr_13512_13545[(1)] = (6));

} else {
var statearr_13513_13546 = state_13508__$1;
(statearr_13513_13546[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13509 === (15))){
var inst_13504 = (state_13508[(2)]);
var state_13508__$1 = state_13508;
var statearr_13514_13547 = state_13508__$1;
(statearr_13514_13547[(2)] = inst_13504);

(statearr_13514_13547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13509 === (13))){
var inst_13497 = cljs.core.async.close_BANG_.call(null,out);
var state_13508__$1 = state_13508;
var statearr_13515_13548 = state_13508__$1;
(statearr_13515_13548[(2)] = inst_13497);

(statearr_13515_13548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13509 === (6))){
var state_13508__$1 = state_13508;
var statearr_13516_13549 = state_13508__$1;
(statearr_13516_13549[(2)] = null);

(statearr_13516_13549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13509 === (3))){
var inst_13506 = (state_13508[(2)]);
var state_13508__$1 = state_13508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13508__$1,inst_13506);
} else {
if((state_val_13509 === (12))){
var inst_13494 = (state_13508[(8)]);
var inst_13494__$1 = (state_13508[(2)]);
var inst_13495 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13494__$1);
var state_13508__$1 = (function (){var statearr_13517 = state_13508;
(statearr_13517[(8)] = inst_13494__$1);

return statearr_13517;
})();
if(cljs.core.truth_(inst_13495)){
var statearr_13518_13550 = state_13508__$1;
(statearr_13518_13550[(1)] = (13));

} else {
var statearr_13519_13551 = state_13508__$1;
(statearr_13519_13551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13509 === (2))){
var inst_13471 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13472 = (0);
var state_13508__$1 = (function (){var statearr_13520 = state_13508;
(statearr_13520[(9)] = inst_13471);

(statearr_13520[(7)] = inst_13472);

return statearr_13520;
})();
var statearr_13521_13552 = state_13508__$1;
(statearr_13521_13552[(2)] = null);

(statearr_13521_13552[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13509 === (11))){
var inst_13472 = (state_13508[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13508,(10),Object,null,(9));
var inst_13481 = chs__$1.call(null,inst_13472);
var inst_13482 = done.call(null,inst_13472);
var inst_13483 = cljs.core.async.take_BANG_.call(null,inst_13481,inst_13482);
var state_13508__$1 = state_13508;
var statearr_13522_13553 = state_13508__$1;
(statearr_13522_13553[(2)] = inst_13483);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13508__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13509 === (9))){
var inst_13472 = (state_13508[(7)]);
var inst_13485 = (state_13508[(2)]);
var inst_13486 = (inst_13472 + (1));
var inst_13472__$1 = inst_13486;
var state_13508__$1 = (function (){var statearr_13523 = state_13508;
(statearr_13523[(7)] = inst_13472__$1);

(statearr_13523[(10)] = inst_13485);

return statearr_13523;
})();
var statearr_13524_13554 = state_13508__$1;
(statearr_13524_13554[(2)] = null);

(statearr_13524_13554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13509 === (5))){
var inst_13492 = (state_13508[(2)]);
var state_13508__$1 = (function (){var statearr_13525 = state_13508;
(statearr_13525[(11)] = inst_13492);

return statearr_13525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13508__$1,(12),dchan);
} else {
if((state_val_13509 === (14))){
var inst_13494 = (state_13508[(8)]);
var inst_13499 = cljs.core.apply.call(null,f,inst_13494);
var state_13508__$1 = state_13508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13508__$1,(16),out,inst_13499);
} else {
if((state_val_13509 === (16))){
var inst_13501 = (state_13508[(2)]);
var state_13508__$1 = (function (){var statearr_13526 = state_13508;
(statearr_13526[(12)] = inst_13501);

return statearr_13526;
})();
var statearr_13527_13555 = state_13508__$1;
(statearr_13527_13555[(2)] = null);

(statearr_13527_13555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13509 === (10))){
var inst_13476 = (state_13508[(2)]);
var inst_13477 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13508__$1 = (function (){var statearr_13528 = state_13508;
(statearr_13528[(13)] = inst_13476);

return statearr_13528;
})();
var statearr_13529_13556 = state_13508__$1;
(statearr_13529_13556[(2)] = inst_13477);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13508__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13509 === (8))){
var inst_13490 = (state_13508[(2)]);
var state_13508__$1 = state_13508;
var statearr_13530_13557 = state_13508__$1;
(statearr_13530_13557[(2)] = inst_13490);

(statearr_13530_13557[(1)] = (5));


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
});})(c__11523__auto___13542,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11411__auto__,c__11523__auto___13542,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11412__auto__ = null;
var cljs$core$async$state_machine__11412__auto____0 = (function (){
var statearr_13534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13534[(0)] = cljs$core$async$state_machine__11412__auto__);

(statearr_13534[(1)] = (1));

return statearr_13534;
});
var cljs$core$async$state_machine__11412__auto____1 = (function (state_13508){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_13508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e13535){if((e13535 instanceof Object)){
var ex__11415__auto__ = e13535;
var statearr_13536_13558 = state_13508;
(statearr_13536_13558[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13559 = state_13508;
state_13508 = G__13559;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$state_machine__11412__auto__ = function(state_13508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11412__auto____1.call(this,state_13508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11412__auto____0;
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11412__auto____1;
return cljs$core$async$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___13542,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11525__auto__ = (function (){var statearr_13537 = f__11524__auto__.call(null);
(statearr_13537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___13542);

return statearr_13537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___13542,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args13561 = [];
var len__5730__auto___13617 = arguments.length;
var i__5731__auto___13618 = (0);
while(true){
if((i__5731__auto___13618 < len__5730__auto___13617)){
args13561.push((arguments[i__5731__auto___13618]));

var G__13619 = (i__5731__auto___13618 + (1));
i__5731__auto___13618 = G__13619;
continue;
} else {
}
break;
}

var G__13563 = args13561.length;
switch (G__13563) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13561.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11523__auto___13621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___13621,out){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___13621,out){
return (function (state_13593){
var state_val_13594 = (state_13593[(1)]);
if((state_val_13594 === (7))){
var inst_13573 = (state_13593[(7)]);
var inst_13572 = (state_13593[(8)]);
var inst_13572__$1 = (state_13593[(2)]);
var inst_13573__$1 = cljs.core.nth.call(null,inst_13572__$1,(0),null);
var inst_13574 = cljs.core.nth.call(null,inst_13572__$1,(1),null);
var inst_13575 = (inst_13573__$1 == null);
var state_13593__$1 = (function (){var statearr_13595 = state_13593;
(statearr_13595[(7)] = inst_13573__$1);

(statearr_13595[(8)] = inst_13572__$1);

(statearr_13595[(9)] = inst_13574);

return statearr_13595;
})();
if(cljs.core.truth_(inst_13575)){
var statearr_13596_13622 = state_13593__$1;
(statearr_13596_13622[(1)] = (8));

} else {
var statearr_13597_13623 = state_13593__$1;
(statearr_13597_13623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13594 === (1))){
var inst_13564 = cljs.core.vec.call(null,chs);
var inst_13565 = inst_13564;
var state_13593__$1 = (function (){var statearr_13598 = state_13593;
(statearr_13598[(10)] = inst_13565);

return statearr_13598;
})();
var statearr_13599_13624 = state_13593__$1;
(statearr_13599_13624[(2)] = null);

(statearr_13599_13624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13594 === (4))){
var inst_13565 = (state_13593[(10)]);
var state_13593__$1 = state_13593;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13593__$1,(7),inst_13565);
} else {
if((state_val_13594 === (6))){
var inst_13589 = (state_13593[(2)]);
var state_13593__$1 = state_13593;
var statearr_13600_13625 = state_13593__$1;
(statearr_13600_13625[(2)] = inst_13589);

(statearr_13600_13625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13594 === (3))){
var inst_13591 = (state_13593[(2)]);
var state_13593__$1 = state_13593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13593__$1,inst_13591);
} else {
if((state_val_13594 === (2))){
var inst_13565 = (state_13593[(10)]);
var inst_13567 = cljs.core.count.call(null,inst_13565);
var inst_13568 = (inst_13567 > (0));
var state_13593__$1 = state_13593;
if(cljs.core.truth_(inst_13568)){
var statearr_13602_13626 = state_13593__$1;
(statearr_13602_13626[(1)] = (4));

} else {
var statearr_13603_13627 = state_13593__$1;
(statearr_13603_13627[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13594 === (11))){
var inst_13565 = (state_13593[(10)]);
var inst_13582 = (state_13593[(2)]);
var tmp13601 = inst_13565;
var inst_13565__$1 = tmp13601;
var state_13593__$1 = (function (){var statearr_13604 = state_13593;
(statearr_13604[(11)] = inst_13582);

(statearr_13604[(10)] = inst_13565__$1);

return statearr_13604;
})();
var statearr_13605_13628 = state_13593__$1;
(statearr_13605_13628[(2)] = null);

(statearr_13605_13628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13594 === (9))){
var inst_13573 = (state_13593[(7)]);
var state_13593__$1 = state_13593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13593__$1,(11),out,inst_13573);
} else {
if((state_val_13594 === (5))){
var inst_13587 = cljs.core.async.close_BANG_.call(null,out);
var state_13593__$1 = state_13593;
var statearr_13606_13629 = state_13593__$1;
(statearr_13606_13629[(2)] = inst_13587);

(statearr_13606_13629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13594 === (10))){
var inst_13585 = (state_13593[(2)]);
var state_13593__$1 = state_13593;
var statearr_13607_13630 = state_13593__$1;
(statearr_13607_13630[(2)] = inst_13585);

(statearr_13607_13630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13594 === (8))){
var inst_13573 = (state_13593[(7)]);
var inst_13572 = (state_13593[(8)]);
var inst_13574 = (state_13593[(9)]);
var inst_13565 = (state_13593[(10)]);
var inst_13577 = (function (){var cs = inst_13565;
var vec__13570 = inst_13572;
var v = inst_13573;
var c = inst_13574;
return ((function (cs,vec__13570,v,c,inst_13573,inst_13572,inst_13574,inst_13565,state_val_13594,c__11523__auto___13621,out){
return (function (p1__13560_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13560_SHARP_);
});
;})(cs,vec__13570,v,c,inst_13573,inst_13572,inst_13574,inst_13565,state_val_13594,c__11523__auto___13621,out))
})();
var inst_13578 = cljs.core.filterv.call(null,inst_13577,inst_13565);
var inst_13565__$1 = inst_13578;
var state_13593__$1 = (function (){var statearr_13608 = state_13593;
(statearr_13608[(10)] = inst_13565__$1);

return statearr_13608;
})();
var statearr_13609_13631 = state_13593__$1;
(statearr_13609_13631[(2)] = null);

(statearr_13609_13631[(1)] = (2));


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
});})(c__11523__auto___13621,out))
;
return ((function (switch__11411__auto__,c__11523__auto___13621,out){
return (function() {
var cljs$core$async$state_machine__11412__auto__ = null;
var cljs$core$async$state_machine__11412__auto____0 = (function (){
var statearr_13613 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13613[(0)] = cljs$core$async$state_machine__11412__auto__);

(statearr_13613[(1)] = (1));

return statearr_13613;
});
var cljs$core$async$state_machine__11412__auto____1 = (function (state_13593){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_13593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e13614){if((e13614 instanceof Object)){
var ex__11415__auto__ = e13614;
var statearr_13615_13632 = state_13593;
(statearr_13615_13632[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13633 = state_13593;
state_13593 = G__13633;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$state_machine__11412__auto__ = function(state_13593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11412__auto____1.call(this,state_13593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11412__auto____0;
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11412__auto____1;
return cljs$core$async$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___13621,out))
})();
var state__11525__auto__ = (function (){var statearr_13616 = f__11524__auto__.call(null);
(statearr_13616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___13621);

return statearr_13616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___13621,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args13634 = [];
var len__5730__auto___13683 = arguments.length;
var i__5731__auto___13684 = (0);
while(true){
if((i__5731__auto___13684 < len__5730__auto___13683)){
args13634.push((arguments[i__5731__auto___13684]));

var G__13685 = (i__5731__auto___13684 + (1));
i__5731__auto___13684 = G__13685;
continue;
} else {
}
break;
}

var G__13636 = args13634.length;
switch (G__13636) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13634.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11523__auto___13687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___13687,out){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___13687,out){
return (function (state_13660){
var state_val_13661 = (state_13660[(1)]);
if((state_val_13661 === (7))){
var inst_13642 = (state_13660[(7)]);
var inst_13642__$1 = (state_13660[(2)]);
var inst_13643 = (inst_13642__$1 == null);
var inst_13644 = cljs.core.not.call(null,inst_13643);
var state_13660__$1 = (function (){var statearr_13662 = state_13660;
(statearr_13662[(7)] = inst_13642__$1);

return statearr_13662;
})();
if(inst_13644){
var statearr_13663_13688 = state_13660__$1;
(statearr_13663_13688[(1)] = (8));

} else {
var statearr_13664_13689 = state_13660__$1;
(statearr_13664_13689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13661 === (1))){
var inst_13637 = (0);
var state_13660__$1 = (function (){var statearr_13665 = state_13660;
(statearr_13665[(8)] = inst_13637);

return statearr_13665;
})();
var statearr_13666_13690 = state_13660__$1;
(statearr_13666_13690[(2)] = null);

(statearr_13666_13690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13661 === (4))){
var state_13660__$1 = state_13660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13660__$1,(7),ch);
} else {
if((state_val_13661 === (6))){
var inst_13655 = (state_13660[(2)]);
var state_13660__$1 = state_13660;
var statearr_13667_13691 = state_13660__$1;
(statearr_13667_13691[(2)] = inst_13655);

(statearr_13667_13691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13661 === (3))){
var inst_13657 = (state_13660[(2)]);
var inst_13658 = cljs.core.async.close_BANG_.call(null,out);
var state_13660__$1 = (function (){var statearr_13668 = state_13660;
(statearr_13668[(9)] = inst_13657);

return statearr_13668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13660__$1,inst_13658);
} else {
if((state_val_13661 === (2))){
var inst_13637 = (state_13660[(8)]);
var inst_13639 = (inst_13637 < n);
var state_13660__$1 = state_13660;
if(cljs.core.truth_(inst_13639)){
var statearr_13669_13692 = state_13660__$1;
(statearr_13669_13692[(1)] = (4));

} else {
var statearr_13670_13693 = state_13660__$1;
(statearr_13670_13693[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13661 === (11))){
var inst_13637 = (state_13660[(8)]);
var inst_13647 = (state_13660[(2)]);
var inst_13648 = (inst_13637 + (1));
var inst_13637__$1 = inst_13648;
var state_13660__$1 = (function (){var statearr_13671 = state_13660;
(statearr_13671[(10)] = inst_13647);

(statearr_13671[(8)] = inst_13637__$1);

return statearr_13671;
})();
var statearr_13672_13694 = state_13660__$1;
(statearr_13672_13694[(2)] = null);

(statearr_13672_13694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13661 === (9))){
var state_13660__$1 = state_13660;
var statearr_13673_13695 = state_13660__$1;
(statearr_13673_13695[(2)] = null);

(statearr_13673_13695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13661 === (5))){
var state_13660__$1 = state_13660;
var statearr_13674_13696 = state_13660__$1;
(statearr_13674_13696[(2)] = null);

(statearr_13674_13696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13661 === (10))){
var inst_13652 = (state_13660[(2)]);
var state_13660__$1 = state_13660;
var statearr_13675_13697 = state_13660__$1;
(statearr_13675_13697[(2)] = inst_13652);

(statearr_13675_13697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13661 === (8))){
var inst_13642 = (state_13660[(7)]);
var state_13660__$1 = state_13660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13660__$1,(11),out,inst_13642);
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
});})(c__11523__auto___13687,out))
;
return ((function (switch__11411__auto__,c__11523__auto___13687,out){
return (function() {
var cljs$core$async$state_machine__11412__auto__ = null;
var cljs$core$async$state_machine__11412__auto____0 = (function (){
var statearr_13679 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13679[(0)] = cljs$core$async$state_machine__11412__auto__);

(statearr_13679[(1)] = (1));

return statearr_13679;
});
var cljs$core$async$state_machine__11412__auto____1 = (function (state_13660){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_13660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e13680){if((e13680 instanceof Object)){
var ex__11415__auto__ = e13680;
var statearr_13681_13698 = state_13660;
(statearr_13681_13698[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13699 = state_13660;
state_13660 = G__13699;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$state_machine__11412__auto__ = function(state_13660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11412__auto____1.call(this,state_13660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11412__auto____0;
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11412__auto____1;
return cljs$core$async$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___13687,out))
})();
var state__11525__auto__ = (function (){var statearr_13682 = f__11524__auto__.call(null);
(statearr_13682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___13687);

return statearr_13682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___13687,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13707 = (function (map_LT_,f,ch,meta13708){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13708 = meta13708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13709,meta13708__$1){
var self__ = this;
var _13709__$1 = this;
return (new cljs.core.async.t_cljs$core$async13707(self__.map_LT_,self__.f,self__.ch,meta13708__$1));
});

cljs.core.async.t_cljs$core$async13707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13709){
var self__ = this;
var _13709__$1 = this;
return self__.meta13708;
});

cljs.core.async.t_cljs$core$async13707.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13707.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13707.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13707.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13707.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13710 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13710 = (function (map_LT_,f,ch,meta13708,_,fn1,meta13711){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13708 = meta13708;
this._ = _;
this.fn1 = fn1;
this.meta13711 = meta13711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13712,meta13711__$1){
var self__ = this;
var _13712__$1 = this;
return (new cljs.core.async.t_cljs$core$async13710(self__.map_LT_,self__.f,self__.ch,self__.meta13708,self__._,self__.fn1,meta13711__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13710.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13712){
var self__ = this;
var _13712__$1 = this;
return self__.meta13711;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13710.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13700_SHARP_){
return f1.call(null,(((p1__13700_SHARP_ == null))?null:self__.f.call(null,p1__13700_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13710.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13708","meta13708",721415656,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13707","cljs.core.async/t_cljs$core$async13707",1407249580,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13711","meta13711",-1044358624,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13710";

cljs.core.async.t_cljs$core$async13710.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"cljs.core.async/t_cljs$core$async13710");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13710 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13710(map_LT___$1,f__$1,ch__$1,meta13708__$1,___$2,fn1__$1,meta13711){
return (new cljs.core.async.t_cljs$core$async13710(map_LT___$1,f__$1,ch__$1,meta13708__$1,___$2,fn1__$1,meta13711));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13710(self__.map_LT_,self__.f,self__.ch,self__.meta13708,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4660__auto__ = ret;
if(cljs.core.truth_(and__4660__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4660__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13707.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13707.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13708","meta13708",721415656,null)], null);
});

cljs.core.async.t_cljs$core$async13707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13707";

cljs.core.async.t_cljs$core$async13707.cljs$lang$ctorPrWriter = (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"cljs.core.async/t_cljs$core$async13707");
});

cljs.core.async.__GT_t_cljs$core$async13707 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13707(map_LT___$1,f__$1,ch__$1,meta13708){
return (new cljs.core.async.t_cljs$core$async13707(map_LT___$1,f__$1,ch__$1,meta13708));
});

}

return (new cljs.core.async.t_cljs$core$async13707(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13716 = (function (map_GT_,f,ch,meta13717){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13717 = meta13717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13718,meta13717__$1){
var self__ = this;
var _13718__$1 = this;
return (new cljs.core.async.t_cljs$core$async13716(self__.map_GT_,self__.f,self__.ch,meta13717__$1));
});

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13718){
var self__ = this;
var _13718__$1 = this;
return self__.meta13717;
});

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13716.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13717","meta13717",2065994517,null)], null);
});

cljs.core.async.t_cljs$core$async13716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13716";

cljs.core.async.t_cljs$core$async13716.cljs$lang$ctorPrWriter = (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"cljs.core.async/t_cljs$core$async13716");
});

cljs.core.async.__GT_t_cljs$core$async13716 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13716(map_GT___$1,f__$1,ch__$1,meta13717){
return (new cljs.core.async.t_cljs$core$async13716(map_GT___$1,f__$1,ch__$1,meta13717));
});

}

return (new cljs.core.async.t_cljs$core$async13716(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13722 = (function (filter_GT_,p,ch,meta13723){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13723 = meta13723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13724,meta13723__$1){
var self__ = this;
var _13724__$1 = this;
return (new cljs.core.async.t_cljs$core$async13722(self__.filter_GT_,self__.p,self__.ch,meta13723__$1));
});

cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13724){
var self__ = this;
var _13724__$1 = this;
return self__.meta13723;
});

cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13723","meta13723",-1716726142,null)], null);
});

cljs.core.async.t_cljs$core$async13722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13722";

cljs.core.async.t_cljs$core$async13722.cljs$lang$ctorPrWriter = (function (this__5270__auto__,writer__5271__auto__,opt__5272__auto__){
return cljs.core._write.call(null,writer__5271__auto__,"cljs.core.async/t_cljs$core$async13722");
});

cljs.core.async.__GT_t_cljs$core$async13722 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13722(filter_GT___$1,p__$1,ch__$1,meta13723){
return (new cljs.core.async.t_cljs$core$async13722(filter_GT___$1,p__$1,ch__$1,meta13723));
});

}

return (new cljs.core.async.t_cljs$core$async13722(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args13725 = [];
var len__5730__auto___13769 = arguments.length;
var i__5731__auto___13770 = (0);
while(true){
if((i__5731__auto___13770 < len__5730__auto___13769)){
args13725.push((arguments[i__5731__auto___13770]));

var G__13771 = (i__5731__auto___13770 + (1));
i__5731__auto___13770 = G__13771;
continue;
} else {
}
break;
}

var G__13727 = args13725.length;
switch (G__13727) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13725.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11523__auto___13773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___13773,out){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___13773,out){
return (function (state_13748){
var state_val_13749 = (state_13748[(1)]);
if((state_val_13749 === (7))){
var inst_13744 = (state_13748[(2)]);
var state_13748__$1 = state_13748;
var statearr_13750_13774 = state_13748__$1;
(statearr_13750_13774[(2)] = inst_13744);

(statearr_13750_13774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13749 === (1))){
var state_13748__$1 = state_13748;
var statearr_13751_13775 = state_13748__$1;
(statearr_13751_13775[(2)] = null);

(statearr_13751_13775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13749 === (4))){
var inst_13730 = (state_13748[(7)]);
var inst_13730__$1 = (state_13748[(2)]);
var inst_13731 = (inst_13730__$1 == null);
var state_13748__$1 = (function (){var statearr_13752 = state_13748;
(statearr_13752[(7)] = inst_13730__$1);

return statearr_13752;
})();
if(cljs.core.truth_(inst_13731)){
var statearr_13753_13776 = state_13748__$1;
(statearr_13753_13776[(1)] = (5));

} else {
var statearr_13754_13777 = state_13748__$1;
(statearr_13754_13777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13749 === (6))){
var inst_13730 = (state_13748[(7)]);
var inst_13735 = p.call(null,inst_13730);
var state_13748__$1 = state_13748;
if(cljs.core.truth_(inst_13735)){
var statearr_13755_13778 = state_13748__$1;
(statearr_13755_13778[(1)] = (8));

} else {
var statearr_13756_13779 = state_13748__$1;
(statearr_13756_13779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13749 === (3))){
var inst_13746 = (state_13748[(2)]);
var state_13748__$1 = state_13748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13748__$1,inst_13746);
} else {
if((state_val_13749 === (2))){
var state_13748__$1 = state_13748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13748__$1,(4),ch);
} else {
if((state_val_13749 === (11))){
var inst_13738 = (state_13748[(2)]);
var state_13748__$1 = state_13748;
var statearr_13757_13780 = state_13748__$1;
(statearr_13757_13780[(2)] = inst_13738);

(statearr_13757_13780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13749 === (9))){
var state_13748__$1 = state_13748;
var statearr_13758_13781 = state_13748__$1;
(statearr_13758_13781[(2)] = null);

(statearr_13758_13781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13749 === (5))){
var inst_13733 = cljs.core.async.close_BANG_.call(null,out);
var state_13748__$1 = state_13748;
var statearr_13759_13782 = state_13748__$1;
(statearr_13759_13782[(2)] = inst_13733);

(statearr_13759_13782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13749 === (10))){
var inst_13741 = (state_13748[(2)]);
var state_13748__$1 = (function (){var statearr_13760 = state_13748;
(statearr_13760[(8)] = inst_13741);

return statearr_13760;
})();
var statearr_13761_13783 = state_13748__$1;
(statearr_13761_13783[(2)] = null);

(statearr_13761_13783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13749 === (8))){
var inst_13730 = (state_13748[(7)]);
var state_13748__$1 = state_13748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13748__$1,(11),out,inst_13730);
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
});})(c__11523__auto___13773,out))
;
return ((function (switch__11411__auto__,c__11523__auto___13773,out){
return (function() {
var cljs$core$async$state_machine__11412__auto__ = null;
var cljs$core$async$state_machine__11412__auto____0 = (function (){
var statearr_13765 = [null,null,null,null,null,null,null,null,null];
(statearr_13765[(0)] = cljs$core$async$state_machine__11412__auto__);

(statearr_13765[(1)] = (1));

return statearr_13765;
});
var cljs$core$async$state_machine__11412__auto____1 = (function (state_13748){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_13748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e13766){if((e13766 instanceof Object)){
var ex__11415__auto__ = e13766;
var statearr_13767_13784 = state_13748;
(statearr_13767_13784[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13785 = state_13748;
state_13748 = G__13785;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$state_machine__11412__auto__ = function(state_13748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11412__auto____1.call(this,state_13748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11412__auto____0;
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11412__auto____1;
return cljs$core$async$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___13773,out))
})();
var state__11525__auto__ = (function (){var statearr_13768 = f__11524__auto__.call(null);
(statearr_13768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___13773);

return statearr_13768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___13773,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13786 = [];
var len__5730__auto___13789 = arguments.length;
var i__5731__auto___13790 = (0);
while(true){
if((i__5731__auto___13790 < len__5730__auto___13789)){
args13786.push((arguments[i__5731__auto___13790]));

var G__13791 = (i__5731__auto___13790 + (1));
i__5731__auto___13790 = G__13791;
continue;
} else {
}
break;
}

var G__13788 = args13786.length;
switch (G__13788) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13786.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto__){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto__){
return (function (state_13958){
var state_val_13959 = (state_13958[(1)]);
if((state_val_13959 === (7))){
var inst_13954 = (state_13958[(2)]);
var state_13958__$1 = state_13958;
var statearr_13960_14001 = state_13958__$1;
(statearr_13960_14001[(2)] = inst_13954);

(statearr_13960_14001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (20))){
var inst_13924 = (state_13958[(7)]);
var inst_13935 = (state_13958[(2)]);
var inst_13936 = cljs.core.next.call(null,inst_13924);
var inst_13910 = inst_13936;
var inst_13911 = null;
var inst_13912 = (0);
var inst_13913 = (0);
var state_13958__$1 = (function (){var statearr_13961 = state_13958;
(statearr_13961[(8)] = inst_13911);

(statearr_13961[(9)] = inst_13935);

(statearr_13961[(10)] = inst_13910);

(statearr_13961[(11)] = inst_13912);

(statearr_13961[(12)] = inst_13913);

return statearr_13961;
})();
var statearr_13962_14002 = state_13958__$1;
(statearr_13962_14002[(2)] = null);

(statearr_13962_14002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (1))){
var state_13958__$1 = state_13958;
var statearr_13963_14003 = state_13958__$1;
(statearr_13963_14003[(2)] = null);

(statearr_13963_14003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (4))){
var inst_13899 = (state_13958[(13)]);
var inst_13899__$1 = (state_13958[(2)]);
var inst_13900 = (inst_13899__$1 == null);
var state_13958__$1 = (function (){var statearr_13964 = state_13958;
(statearr_13964[(13)] = inst_13899__$1);

return statearr_13964;
})();
if(cljs.core.truth_(inst_13900)){
var statearr_13965_14004 = state_13958__$1;
(statearr_13965_14004[(1)] = (5));

} else {
var statearr_13966_14005 = state_13958__$1;
(statearr_13966_14005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (15))){
var state_13958__$1 = state_13958;
var statearr_13970_14006 = state_13958__$1;
(statearr_13970_14006[(2)] = null);

(statearr_13970_14006[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (21))){
var state_13958__$1 = state_13958;
var statearr_13971_14007 = state_13958__$1;
(statearr_13971_14007[(2)] = null);

(statearr_13971_14007[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (13))){
var inst_13911 = (state_13958[(8)]);
var inst_13910 = (state_13958[(10)]);
var inst_13912 = (state_13958[(11)]);
var inst_13913 = (state_13958[(12)]);
var inst_13920 = (state_13958[(2)]);
var inst_13921 = (inst_13913 + (1));
var tmp13967 = inst_13911;
var tmp13968 = inst_13910;
var tmp13969 = inst_13912;
var inst_13910__$1 = tmp13968;
var inst_13911__$1 = tmp13967;
var inst_13912__$1 = tmp13969;
var inst_13913__$1 = inst_13921;
var state_13958__$1 = (function (){var statearr_13972 = state_13958;
(statearr_13972[(8)] = inst_13911__$1);

(statearr_13972[(10)] = inst_13910__$1);

(statearr_13972[(11)] = inst_13912__$1);

(statearr_13972[(12)] = inst_13913__$1);

(statearr_13972[(14)] = inst_13920);

return statearr_13972;
})();
var statearr_13973_14008 = state_13958__$1;
(statearr_13973_14008[(2)] = null);

(statearr_13973_14008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (22))){
var state_13958__$1 = state_13958;
var statearr_13974_14009 = state_13958__$1;
(statearr_13974_14009[(2)] = null);

(statearr_13974_14009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (6))){
var inst_13899 = (state_13958[(13)]);
var inst_13908 = f.call(null,inst_13899);
var inst_13909 = cljs.core.seq.call(null,inst_13908);
var inst_13910 = inst_13909;
var inst_13911 = null;
var inst_13912 = (0);
var inst_13913 = (0);
var state_13958__$1 = (function (){var statearr_13975 = state_13958;
(statearr_13975[(8)] = inst_13911);

(statearr_13975[(10)] = inst_13910);

(statearr_13975[(11)] = inst_13912);

(statearr_13975[(12)] = inst_13913);

return statearr_13975;
})();
var statearr_13976_14010 = state_13958__$1;
(statearr_13976_14010[(2)] = null);

(statearr_13976_14010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (17))){
var inst_13924 = (state_13958[(7)]);
var inst_13928 = cljs.core.chunk_first.call(null,inst_13924);
var inst_13929 = cljs.core.chunk_rest.call(null,inst_13924);
var inst_13930 = cljs.core.count.call(null,inst_13928);
var inst_13910 = inst_13929;
var inst_13911 = inst_13928;
var inst_13912 = inst_13930;
var inst_13913 = (0);
var state_13958__$1 = (function (){var statearr_13977 = state_13958;
(statearr_13977[(8)] = inst_13911);

(statearr_13977[(10)] = inst_13910);

(statearr_13977[(11)] = inst_13912);

(statearr_13977[(12)] = inst_13913);

return statearr_13977;
})();
var statearr_13978_14011 = state_13958__$1;
(statearr_13978_14011[(2)] = null);

(statearr_13978_14011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (3))){
var inst_13956 = (state_13958[(2)]);
var state_13958__$1 = state_13958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13958__$1,inst_13956);
} else {
if((state_val_13959 === (12))){
var inst_13944 = (state_13958[(2)]);
var state_13958__$1 = state_13958;
var statearr_13979_14012 = state_13958__$1;
(statearr_13979_14012[(2)] = inst_13944);

(statearr_13979_14012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (2))){
var state_13958__$1 = state_13958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13958__$1,(4),in$);
} else {
if((state_val_13959 === (23))){
var inst_13952 = (state_13958[(2)]);
var state_13958__$1 = state_13958;
var statearr_13980_14013 = state_13958__$1;
(statearr_13980_14013[(2)] = inst_13952);

(statearr_13980_14013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (19))){
var inst_13939 = (state_13958[(2)]);
var state_13958__$1 = state_13958;
var statearr_13981_14014 = state_13958__$1;
(statearr_13981_14014[(2)] = inst_13939);

(statearr_13981_14014[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (11))){
var inst_13924 = (state_13958[(7)]);
var inst_13910 = (state_13958[(10)]);
var inst_13924__$1 = cljs.core.seq.call(null,inst_13910);
var state_13958__$1 = (function (){var statearr_13982 = state_13958;
(statearr_13982[(7)] = inst_13924__$1);

return statearr_13982;
})();
if(inst_13924__$1){
var statearr_13983_14015 = state_13958__$1;
(statearr_13983_14015[(1)] = (14));

} else {
var statearr_13984_14016 = state_13958__$1;
(statearr_13984_14016[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (9))){
var inst_13946 = (state_13958[(2)]);
var inst_13947 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13958__$1 = (function (){var statearr_13985 = state_13958;
(statearr_13985[(15)] = inst_13946);

return statearr_13985;
})();
if(cljs.core.truth_(inst_13947)){
var statearr_13986_14017 = state_13958__$1;
(statearr_13986_14017[(1)] = (21));

} else {
var statearr_13987_14018 = state_13958__$1;
(statearr_13987_14018[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (5))){
var inst_13902 = cljs.core.async.close_BANG_.call(null,out);
var state_13958__$1 = state_13958;
var statearr_13988_14019 = state_13958__$1;
(statearr_13988_14019[(2)] = inst_13902);

(statearr_13988_14019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (14))){
var inst_13924 = (state_13958[(7)]);
var inst_13926 = cljs.core.chunked_seq_QMARK_.call(null,inst_13924);
var state_13958__$1 = state_13958;
if(inst_13926){
var statearr_13989_14020 = state_13958__$1;
(statearr_13989_14020[(1)] = (17));

} else {
var statearr_13990_14021 = state_13958__$1;
(statearr_13990_14021[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (16))){
var inst_13942 = (state_13958[(2)]);
var state_13958__$1 = state_13958;
var statearr_13991_14022 = state_13958__$1;
(statearr_13991_14022[(2)] = inst_13942);

(statearr_13991_14022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13959 === (10))){
var inst_13911 = (state_13958[(8)]);
var inst_13913 = (state_13958[(12)]);
var inst_13918 = cljs.core._nth.call(null,inst_13911,inst_13913);
var state_13958__$1 = state_13958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13958__$1,(13),out,inst_13918);
} else {
if((state_val_13959 === (18))){
var inst_13924 = (state_13958[(7)]);
var inst_13933 = cljs.core.first.call(null,inst_13924);
var state_13958__$1 = state_13958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13958__$1,(20),out,inst_13933);
} else {
if((state_val_13959 === (8))){
var inst_13912 = (state_13958[(11)]);
var inst_13913 = (state_13958[(12)]);
var inst_13915 = (inst_13913 < inst_13912);
var inst_13916 = inst_13915;
var state_13958__$1 = state_13958;
if(cljs.core.truth_(inst_13916)){
var statearr_13992_14023 = state_13958__$1;
(statearr_13992_14023[(1)] = (10));

} else {
var statearr_13993_14024 = state_13958__$1;
(statearr_13993_14024[(1)] = (11));

}

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
}
}
});})(c__11523__auto__))
;
return ((function (switch__11411__auto__,c__11523__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11412__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11412__auto____0 = (function (){
var statearr_13997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13997[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11412__auto__);

(statearr_13997[(1)] = (1));

return statearr_13997;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11412__auto____1 = (function (state_13958){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_13958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e13998){if((e13998 instanceof Object)){
var ex__11415__auto__ = e13998;
var statearr_13999_14025 = state_13958;
(statearr_13999_14025[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14026 = state_13958;
state_13958 = G__14026;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11412__auto__ = function(state_13958){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11412__auto____1.call(this,state_13958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11412__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11412__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto__))
})();
var state__11525__auto__ = (function (){var statearr_14000 = f__11524__auto__.call(null);
(statearr_14000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto__);

return statearr_14000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto__))
);

return c__11523__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14027 = [];
var len__5730__auto___14030 = arguments.length;
var i__5731__auto___14031 = (0);
while(true){
if((i__5731__auto___14031 < len__5730__auto___14030)){
args14027.push((arguments[i__5731__auto___14031]));

var G__14032 = (i__5731__auto___14031 + (1));
i__5731__auto___14031 = G__14032;
continue;
} else {
}
break;
}

var G__14029 = args14027.length;
switch (G__14029) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14027.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args14034 = [];
var len__5730__auto___14037 = arguments.length;
var i__5731__auto___14038 = (0);
while(true){
if((i__5731__auto___14038 < len__5730__auto___14037)){
args14034.push((arguments[i__5731__auto___14038]));

var G__14039 = (i__5731__auto___14038 + (1));
i__5731__auto___14038 = G__14039;
continue;
} else {
}
break;
}

var G__14036 = args14034.length;
switch (G__14036) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14034.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args14041 = [];
var len__5730__auto___14092 = arguments.length;
var i__5731__auto___14093 = (0);
while(true){
if((i__5731__auto___14093 < len__5730__auto___14092)){
args14041.push((arguments[i__5731__auto___14093]));

var G__14094 = (i__5731__auto___14093 + (1));
i__5731__auto___14093 = G__14094;
continue;
} else {
}
break;
}

var G__14043 = args14041.length;
switch (G__14043) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14041.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11523__auto___14096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___14096,out){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___14096,out){
return (function (state_14067){
var state_val_14068 = (state_14067[(1)]);
if((state_val_14068 === (7))){
var inst_14062 = (state_14067[(2)]);
var state_14067__$1 = state_14067;
var statearr_14069_14097 = state_14067__$1;
(statearr_14069_14097[(2)] = inst_14062);

(statearr_14069_14097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (1))){
var inst_14044 = null;
var state_14067__$1 = (function (){var statearr_14070 = state_14067;
(statearr_14070[(7)] = inst_14044);

return statearr_14070;
})();
var statearr_14071_14098 = state_14067__$1;
(statearr_14071_14098[(2)] = null);

(statearr_14071_14098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (4))){
var inst_14047 = (state_14067[(8)]);
var inst_14047__$1 = (state_14067[(2)]);
var inst_14048 = (inst_14047__$1 == null);
var inst_14049 = cljs.core.not.call(null,inst_14048);
var state_14067__$1 = (function (){var statearr_14072 = state_14067;
(statearr_14072[(8)] = inst_14047__$1);

return statearr_14072;
})();
if(inst_14049){
var statearr_14073_14099 = state_14067__$1;
(statearr_14073_14099[(1)] = (5));

} else {
var statearr_14074_14100 = state_14067__$1;
(statearr_14074_14100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (6))){
var state_14067__$1 = state_14067;
var statearr_14075_14101 = state_14067__$1;
(statearr_14075_14101[(2)] = null);

(statearr_14075_14101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (3))){
var inst_14064 = (state_14067[(2)]);
var inst_14065 = cljs.core.async.close_BANG_.call(null,out);
var state_14067__$1 = (function (){var statearr_14076 = state_14067;
(statearr_14076[(9)] = inst_14064);

return statearr_14076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14067__$1,inst_14065);
} else {
if((state_val_14068 === (2))){
var state_14067__$1 = state_14067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14067__$1,(4),ch);
} else {
if((state_val_14068 === (11))){
var inst_14047 = (state_14067[(8)]);
var inst_14056 = (state_14067[(2)]);
var inst_14044 = inst_14047;
var state_14067__$1 = (function (){var statearr_14077 = state_14067;
(statearr_14077[(7)] = inst_14044);

(statearr_14077[(10)] = inst_14056);

return statearr_14077;
})();
var statearr_14078_14102 = state_14067__$1;
(statearr_14078_14102[(2)] = null);

(statearr_14078_14102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (9))){
var inst_14047 = (state_14067[(8)]);
var state_14067__$1 = state_14067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14067__$1,(11),out,inst_14047);
} else {
if((state_val_14068 === (5))){
var inst_14044 = (state_14067[(7)]);
var inst_14047 = (state_14067[(8)]);
var inst_14051 = cljs.core._EQ_.call(null,inst_14047,inst_14044);
var state_14067__$1 = state_14067;
if(inst_14051){
var statearr_14080_14103 = state_14067__$1;
(statearr_14080_14103[(1)] = (8));

} else {
var statearr_14081_14104 = state_14067__$1;
(statearr_14081_14104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (10))){
var inst_14059 = (state_14067[(2)]);
var state_14067__$1 = state_14067;
var statearr_14082_14105 = state_14067__$1;
(statearr_14082_14105[(2)] = inst_14059);

(statearr_14082_14105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14068 === (8))){
var inst_14044 = (state_14067[(7)]);
var tmp14079 = inst_14044;
var inst_14044__$1 = tmp14079;
var state_14067__$1 = (function (){var statearr_14083 = state_14067;
(statearr_14083[(7)] = inst_14044__$1);

return statearr_14083;
})();
var statearr_14084_14106 = state_14067__$1;
(statearr_14084_14106[(2)] = null);

(statearr_14084_14106[(1)] = (2));


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
});})(c__11523__auto___14096,out))
;
return ((function (switch__11411__auto__,c__11523__auto___14096,out){
return (function() {
var cljs$core$async$state_machine__11412__auto__ = null;
var cljs$core$async$state_machine__11412__auto____0 = (function (){
var statearr_14088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14088[(0)] = cljs$core$async$state_machine__11412__auto__);

(statearr_14088[(1)] = (1));

return statearr_14088;
});
var cljs$core$async$state_machine__11412__auto____1 = (function (state_14067){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_14067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e14089){if((e14089 instanceof Object)){
var ex__11415__auto__ = e14089;
var statearr_14090_14107 = state_14067;
(statearr_14090_14107[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14108 = state_14067;
state_14067 = G__14108;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$state_machine__11412__auto__ = function(state_14067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11412__auto____1.call(this,state_14067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11412__auto____0;
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11412__auto____1;
return cljs$core$async$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___14096,out))
})();
var state__11525__auto__ = (function (){var statearr_14091 = f__11524__auto__.call(null);
(statearr_14091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___14096);

return statearr_14091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___14096,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14109 = [];
var len__5730__auto___14179 = arguments.length;
var i__5731__auto___14180 = (0);
while(true){
if((i__5731__auto___14180 < len__5730__auto___14179)){
args14109.push((arguments[i__5731__auto___14180]));

var G__14181 = (i__5731__auto___14180 + (1));
i__5731__auto___14180 = G__14181;
continue;
} else {
}
break;
}

var G__14111 = args14109.length;
switch (G__14111) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14109.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11523__auto___14183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___14183,out){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___14183,out){
return (function (state_14149){
var state_val_14150 = (state_14149[(1)]);
if((state_val_14150 === (7))){
var inst_14145 = (state_14149[(2)]);
var state_14149__$1 = state_14149;
var statearr_14151_14184 = state_14149__$1;
(statearr_14151_14184[(2)] = inst_14145);

(statearr_14151_14184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (1))){
var inst_14112 = (new Array(n));
var inst_14113 = inst_14112;
var inst_14114 = (0);
var state_14149__$1 = (function (){var statearr_14152 = state_14149;
(statearr_14152[(7)] = inst_14113);

(statearr_14152[(8)] = inst_14114);

return statearr_14152;
})();
var statearr_14153_14185 = state_14149__$1;
(statearr_14153_14185[(2)] = null);

(statearr_14153_14185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (4))){
var inst_14117 = (state_14149[(9)]);
var inst_14117__$1 = (state_14149[(2)]);
var inst_14118 = (inst_14117__$1 == null);
var inst_14119 = cljs.core.not.call(null,inst_14118);
var state_14149__$1 = (function (){var statearr_14154 = state_14149;
(statearr_14154[(9)] = inst_14117__$1);

return statearr_14154;
})();
if(inst_14119){
var statearr_14155_14186 = state_14149__$1;
(statearr_14155_14186[(1)] = (5));

} else {
var statearr_14156_14187 = state_14149__$1;
(statearr_14156_14187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (15))){
var inst_14139 = (state_14149[(2)]);
var state_14149__$1 = state_14149;
var statearr_14157_14188 = state_14149__$1;
(statearr_14157_14188[(2)] = inst_14139);

(statearr_14157_14188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (13))){
var state_14149__$1 = state_14149;
var statearr_14158_14189 = state_14149__$1;
(statearr_14158_14189[(2)] = null);

(statearr_14158_14189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (6))){
var inst_14114 = (state_14149[(8)]);
var inst_14135 = (inst_14114 > (0));
var state_14149__$1 = state_14149;
if(cljs.core.truth_(inst_14135)){
var statearr_14159_14190 = state_14149__$1;
(statearr_14159_14190[(1)] = (12));

} else {
var statearr_14160_14191 = state_14149__$1;
(statearr_14160_14191[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (3))){
var inst_14147 = (state_14149[(2)]);
var state_14149__$1 = state_14149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14149__$1,inst_14147);
} else {
if((state_val_14150 === (12))){
var inst_14113 = (state_14149[(7)]);
var inst_14137 = cljs.core.vec.call(null,inst_14113);
var state_14149__$1 = state_14149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14149__$1,(15),out,inst_14137);
} else {
if((state_val_14150 === (2))){
var state_14149__$1 = state_14149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14149__$1,(4),ch);
} else {
if((state_val_14150 === (11))){
var inst_14129 = (state_14149[(2)]);
var inst_14130 = (new Array(n));
var inst_14113 = inst_14130;
var inst_14114 = (0);
var state_14149__$1 = (function (){var statearr_14161 = state_14149;
(statearr_14161[(10)] = inst_14129);

(statearr_14161[(7)] = inst_14113);

(statearr_14161[(8)] = inst_14114);

return statearr_14161;
})();
var statearr_14162_14192 = state_14149__$1;
(statearr_14162_14192[(2)] = null);

(statearr_14162_14192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (9))){
var inst_14113 = (state_14149[(7)]);
var inst_14127 = cljs.core.vec.call(null,inst_14113);
var state_14149__$1 = state_14149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14149__$1,(11),out,inst_14127);
} else {
if((state_val_14150 === (5))){
var inst_14122 = (state_14149[(11)]);
var inst_14113 = (state_14149[(7)]);
var inst_14117 = (state_14149[(9)]);
var inst_14114 = (state_14149[(8)]);
var inst_14121 = (inst_14113[inst_14114] = inst_14117);
var inst_14122__$1 = (inst_14114 + (1));
var inst_14123 = (inst_14122__$1 < n);
var state_14149__$1 = (function (){var statearr_14163 = state_14149;
(statearr_14163[(12)] = inst_14121);

(statearr_14163[(11)] = inst_14122__$1);

return statearr_14163;
})();
if(cljs.core.truth_(inst_14123)){
var statearr_14164_14193 = state_14149__$1;
(statearr_14164_14193[(1)] = (8));

} else {
var statearr_14165_14194 = state_14149__$1;
(statearr_14165_14194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (14))){
var inst_14142 = (state_14149[(2)]);
var inst_14143 = cljs.core.async.close_BANG_.call(null,out);
var state_14149__$1 = (function (){var statearr_14167 = state_14149;
(statearr_14167[(13)] = inst_14142);

return statearr_14167;
})();
var statearr_14168_14195 = state_14149__$1;
(statearr_14168_14195[(2)] = inst_14143);

(statearr_14168_14195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (10))){
var inst_14133 = (state_14149[(2)]);
var state_14149__$1 = state_14149;
var statearr_14169_14196 = state_14149__$1;
(statearr_14169_14196[(2)] = inst_14133);

(statearr_14169_14196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (8))){
var inst_14122 = (state_14149[(11)]);
var inst_14113 = (state_14149[(7)]);
var tmp14166 = inst_14113;
var inst_14113__$1 = tmp14166;
var inst_14114 = inst_14122;
var state_14149__$1 = (function (){var statearr_14170 = state_14149;
(statearr_14170[(7)] = inst_14113__$1);

(statearr_14170[(8)] = inst_14114);

return statearr_14170;
})();
var statearr_14171_14197 = state_14149__$1;
(statearr_14171_14197[(2)] = null);

(statearr_14171_14197[(1)] = (2));


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
});})(c__11523__auto___14183,out))
;
return ((function (switch__11411__auto__,c__11523__auto___14183,out){
return (function() {
var cljs$core$async$state_machine__11412__auto__ = null;
var cljs$core$async$state_machine__11412__auto____0 = (function (){
var statearr_14175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14175[(0)] = cljs$core$async$state_machine__11412__auto__);

(statearr_14175[(1)] = (1));

return statearr_14175;
});
var cljs$core$async$state_machine__11412__auto____1 = (function (state_14149){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_14149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e14176){if((e14176 instanceof Object)){
var ex__11415__auto__ = e14176;
var statearr_14177_14198 = state_14149;
(statearr_14177_14198[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14199 = state_14149;
state_14149 = G__14199;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$state_machine__11412__auto__ = function(state_14149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11412__auto____1.call(this,state_14149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11412__auto____0;
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11412__auto____1;
return cljs$core$async$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___14183,out))
})();
var state__11525__auto__ = (function (){var statearr_14178 = f__11524__auto__.call(null);
(statearr_14178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___14183);

return statearr_14178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___14183,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args14200 = [];
var len__5730__auto___14274 = arguments.length;
var i__5731__auto___14275 = (0);
while(true){
if((i__5731__auto___14275 < len__5730__auto___14274)){
args14200.push((arguments[i__5731__auto___14275]));

var G__14276 = (i__5731__auto___14275 + (1));
i__5731__auto___14275 = G__14276;
continue;
} else {
}
break;
}

var G__14202 = args14200.length;
switch (G__14202) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14200.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11523__auto___14278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11523__auto___14278,out){
return (function (){
var f__11524__auto__ = (function (){var switch__11411__auto__ = ((function (c__11523__auto___14278,out){
return (function (state_14244){
var state_val_14245 = (state_14244[(1)]);
if((state_val_14245 === (7))){
var inst_14240 = (state_14244[(2)]);
var state_14244__$1 = state_14244;
var statearr_14246_14279 = state_14244__$1;
(statearr_14246_14279[(2)] = inst_14240);

(statearr_14246_14279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14245 === (1))){
var inst_14203 = [];
var inst_14204 = inst_14203;
var inst_14205 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14244__$1 = (function (){var statearr_14247 = state_14244;
(statearr_14247[(7)] = inst_14205);

(statearr_14247[(8)] = inst_14204);

return statearr_14247;
})();
var statearr_14248_14280 = state_14244__$1;
(statearr_14248_14280[(2)] = null);

(statearr_14248_14280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14245 === (4))){
var inst_14208 = (state_14244[(9)]);
var inst_14208__$1 = (state_14244[(2)]);
var inst_14209 = (inst_14208__$1 == null);
var inst_14210 = cljs.core.not.call(null,inst_14209);
var state_14244__$1 = (function (){var statearr_14249 = state_14244;
(statearr_14249[(9)] = inst_14208__$1);

return statearr_14249;
})();
if(inst_14210){
var statearr_14250_14281 = state_14244__$1;
(statearr_14250_14281[(1)] = (5));

} else {
var statearr_14251_14282 = state_14244__$1;
(statearr_14251_14282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14245 === (15))){
var inst_14234 = (state_14244[(2)]);
var state_14244__$1 = state_14244;
var statearr_14252_14283 = state_14244__$1;
(statearr_14252_14283[(2)] = inst_14234);

(statearr_14252_14283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14245 === (13))){
var state_14244__$1 = state_14244;
var statearr_14253_14284 = state_14244__$1;
(statearr_14253_14284[(2)] = null);

(statearr_14253_14284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14245 === (6))){
var inst_14204 = (state_14244[(8)]);
var inst_14229 = inst_14204.length;
var inst_14230 = (inst_14229 > (0));
var state_14244__$1 = state_14244;
if(cljs.core.truth_(inst_14230)){
var statearr_14254_14285 = state_14244__$1;
(statearr_14254_14285[(1)] = (12));

} else {
var statearr_14255_14286 = state_14244__$1;
(statearr_14255_14286[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14245 === (3))){
var inst_14242 = (state_14244[(2)]);
var state_14244__$1 = state_14244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14244__$1,inst_14242);
} else {
if((state_val_14245 === (12))){
var inst_14204 = (state_14244[(8)]);
var inst_14232 = cljs.core.vec.call(null,inst_14204);
var state_14244__$1 = state_14244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14244__$1,(15),out,inst_14232);
} else {
if((state_val_14245 === (2))){
var state_14244__$1 = state_14244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14244__$1,(4),ch);
} else {
if((state_val_14245 === (11))){
var inst_14208 = (state_14244[(9)]);
var inst_14212 = (state_14244[(10)]);
var inst_14222 = (state_14244[(2)]);
var inst_14223 = [];
var inst_14224 = inst_14223.push(inst_14208);
var inst_14204 = inst_14223;
var inst_14205 = inst_14212;
var state_14244__$1 = (function (){var statearr_14256 = state_14244;
(statearr_14256[(11)] = inst_14224);

(statearr_14256[(12)] = inst_14222);

(statearr_14256[(7)] = inst_14205);

(statearr_14256[(8)] = inst_14204);

return statearr_14256;
})();
var statearr_14257_14287 = state_14244__$1;
(statearr_14257_14287[(2)] = null);

(statearr_14257_14287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14245 === (9))){
var inst_14204 = (state_14244[(8)]);
var inst_14220 = cljs.core.vec.call(null,inst_14204);
var state_14244__$1 = state_14244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14244__$1,(11),out,inst_14220);
} else {
if((state_val_14245 === (5))){
var inst_14208 = (state_14244[(9)]);
var inst_14212 = (state_14244[(10)]);
var inst_14205 = (state_14244[(7)]);
var inst_14212__$1 = f.call(null,inst_14208);
var inst_14213 = cljs.core._EQ_.call(null,inst_14212__$1,inst_14205);
var inst_14214 = cljs.core.keyword_identical_QMARK_.call(null,inst_14205,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14215 = (inst_14213) || (inst_14214);
var state_14244__$1 = (function (){var statearr_14258 = state_14244;
(statearr_14258[(10)] = inst_14212__$1);

return statearr_14258;
})();
if(cljs.core.truth_(inst_14215)){
var statearr_14259_14288 = state_14244__$1;
(statearr_14259_14288[(1)] = (8));

} else {
var statearr_14260_14289 = state_14244__$1;
(statearr_14260_14289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14245 === (14))){
var inst_14237 = (state_14244[(2)]);
var inst_14238 = cljs.core.async.close_BANG_.call(null,out);
var state_14244__$1 = (function (){var statearr_14262 = state_14244;
(statearr_14262[(13)] = inst_14237);

return statearr_14262;
})();
var statearr_14263_14290 = state_14244__$1;
(statearr_14263_14290[(2)] = inst_14238);

(statearr_14263_14290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14245 === (10))){
var inst_14227 = (state_14244[(2)]);
var state_14244__$1 = state_14244;
var statearr_14264_14291 = state_14244__$1;
(statearr_14264_14291[(2)] = inst_14227);

(statearr_14264_14291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14245 === (8))){
var inst_14208 = (state_14244[(9)]);
var inst_14212 = (state_14244[(10)]);
var inst_14204 = (state_14244[(8)]);
var inst_14217 = inst_14204.push(inst_14208);
var tmp14261 = inst_14204;
var inst_14204__$1 = tmp14261;
var inst_14205 = inst_14212;
var state_14244__$1 = (function (){var statearr_14265 = state_14244;
(statearr_14265[(14)] = inst_14217);

(statearr_14265[(7)] = inst_14205);

(statearr_14265[(8)] = inst_14204__$1);

return statearr_14265;
})();
var statearr_14266_14292 = state_14244__$1;
(statearr_14266_14292[(2)] = null);

(statearr_14266_14292[(1)] = (2));


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
});})(c__11523__auto___14278,out))
;
return ((function (switch__11411__auto__,c__11523__auto___14278,out){
return (function() {
var cljs$core$async$state_machine__11412__auto__ = null;
var cljs$core$async$state_machine__11412__auto____0 = (function (){
var statearr_14270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14270[(0)] = cljs$core$async$state_machine__11412__auto__);

(statearr_14270[(1)] = (1));

return statearr_14270;
});
var cljs$core$async$state_machine__11412__auto____1 = (function (state_14244){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__.call(null,state_14244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e14271){if((e14271 instanceof Object)){
var ex__11415__auto__ = e14271;
var statearr_14272_14293 = state_14244;
(statearr_14272_14293[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14294 = state_14244;
state_14244 = G__14294;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
cljs$core$async$state_machine__11412__auto__ = function(state_14244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11412__auto____1.call(this,state_14244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11412__auto____0;
cljs$core$async$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11412__auto____1;
return cljs$core$async$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11523__auto___14278,out))
})();
var state__11525__auto__ = (function (){var statearr_14273 = f__11524__auto__.call(null);
(statearr_14273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11523__auto___14278);

return statearr_14273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11525__auto__);
});})(c__11523__auto___14278,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1459672188663