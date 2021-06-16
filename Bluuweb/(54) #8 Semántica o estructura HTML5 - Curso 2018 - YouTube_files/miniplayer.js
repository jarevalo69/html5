(function(g){var window=this;'use strict';var p6=function(a){g.V.call(this,{D:"div",L:"ytp-miniplayer-ui"});this.cg=!1;this.player=a;this.N(a,"minimized",this.jg);this.N(a,"onStateChange",this.pD)},q6=function(a){g.IN.call(this,a);
this.i=new p6(this.player);this.i.hide();g.vN(this.player,this.i.element,4);a.Be()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(p6,g.V);g.k=p6.prototype;
g.k.IB=function(){this.tooltip=new g.hR(this.player,this);g.F(this,this.tooltip);g.vN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.jc=new g.DO(this.player);g.F(this,this.jc);this.yg=new g.V({D:"div",L:"ytp-miniplayer-scrim"});g.F(this,this.yg);this.yg.ya(this.element);this.N(this.yg.element,"click",this.Ex);var a=new g.V({D:"button",Ca:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Cerrar"},S:[g.KL()]});g.F(this,a);a.ya(this.yg.element);this.N(a.element,"click",this.Wh);
a=new g.U1(this.player,this);g.F(this,a);a.ya(this.yg.element);this.po=new g.V({D:"div",L:"ytp-miniplayer-controls"});g.F(this,this.po);this.po.ya(this.yg.element);this.N(this.po.element,"click",this.Ex);var b=new g.V({D:"div",L:"ytp-miniplayer-button-container"});g.F(this,b);b.ya(this.po.element);a=new g.V({D:"div",L:"ytp-miniplayer-play-button-container"});g.F(this,a);a.ya(this.po.element);var c=new g.V({D:"div",L:"ytp-miniplayer-button-container"});g.F(this,c);c.ya(this.po.element);this.IJ=new g.eQ(this.player,
this,!1);g.F(this,this.IJ);this.IJ.ya(b.element);b=new g.WP(this.player,this);g.F(this,b);b.ya(a.element);this.nextButton=new g.eQ(this.player,this,!0);g.F(this,this.nextButton);this.nextButton.ya(c.element);this.Ag=new g.VQ(this.player,this);g.F(this,this.Ag);this.Ag.ya(this.yg.element);this.Ec=new g.jQ(this.player,this);g.F(this,this.Ec);g.vN(this.player,this.Ec.element,4);this.ox=new g.V({D:"div",L:"ytp-miniplayer-buttons"});g.F(this,this.ox);g.vN(this.player,this.ox.element,4);a=new g.V({D:"button",
Ca:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Cerrar"},S:[g.KL()]});g.F(this,a);a.ya(this.ox.element);this.N(a.element,"click",this.Wh);a=new g.V({D:"button",Ca:["ytp-miniplayer-replay-button","ytp-button"],V:{"aria-label":"Cerrar"},S:[g.PL()]});g.F(this,a);a.ya(this.ox.element);this.N(a.element,"click",this.xS);this.N(this.player,"presentingplayerstatechange",this.Dc);this.N(this.player,"appresize",this.tb);this.N(this.player,"fullscreentoggled",this.tb);this.tb()};
g.k.show=function(){this.ud=new g.Cq(this.ep,null,this);this.ud.start();this.cg||(this.IB(),this.cg=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Ec.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.ud&&(this.ud.dispose(),this.ud=void 0);g.V.prototype.hide.call(this);this.player.Be()||(this.cg&&this.Ec.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.ud&&(this.ud.dispose(),this.ud=void 0);g.V.prototype.ra.call(this)};
g.k.Wh=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.xS=function(){this.player.playVideo()};
g.k.Ex=function(a){if(a.target===this.yg.element||a.target===this.po.element)g.S(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.MK(this.player.sb())?this.player.pauseVideo():this.player.playVideo():this.player.Na("onExpandMiniplayer")};
g.k.jg=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Be())};
g.k.Yc=function(){this.Ec.Rb();this.Ag.Rb()};
g.k.ep=function(){this.Yc();this.ud&&this.ud.start()};
g.k.Dc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.tb=function(){g.uQ(this.Ec,0,this.player.Za().getPlayerSize().width,!1);g.lQ(this.Ec)};
g.k.pD=function(a){this.player.Be()&&(0===a?this.hide():this.show())};
g.k.ac=function(){return this.tooltip};
g.k.ze=function(){return!1};
g.k.Xe=function(){return!1};
g.k.Rh=function(){return!1};
g.k.dy=function(){};
g.k.mm=function(){};
g.k.rq=function(){};
g.k.Dm=function(){return null};
g.k.Li=function(){return new g.rl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.mp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Ql(a);if(b){c=g.Oq(b,"ytp-prev-button")||g.Oq(b,"ytp-next-button");var m=g.Oq(b,"ytp-play-button"),n=g.Oq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ol(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Oq(b,"ytp-miniplayer-button-top-left"),f=g.Ol(b,this.element),b=g.Ql(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Za().getPlayerSize().width;e=f+(e||0);l=g.Of(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.yk=function(){};
g.k.Qj=function(){return!1};g.v(q6,g.IN);q6.prototype.create=function(){};
q6.prototype.ji=function(){return!1};
q6.prototype.load=function(){this.player.hideControls();this.i.show()};
q6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.TN.miniplayer=q6;})(_yt_player);
