// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: structure_test.ggsk
// Generated 2021-11-09T19:51:50

function pano2vrSkin(player,base) {
	player.addVariable('var_id', 0, "");
	player.addVariable('hs_url', 0, "");
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('node_data', 0, "");
	player.addVariable('node_view', 0, "");
	player.addVariable('hs_title', 0, "");
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._timer_node_change=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="timer_node_change";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_node_change.ggIsActive=function() {
			return (me._timer_node_change.ggTimestamp + me._timer_node_change.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_node_change.ggDeactivate=function () {
			player.openNext(player.getVariableValue('node_data'),player.getVariableValue('node_view'));
		}
		me._timer_node_change.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_node_change);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 67px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 102px;';
		hs+='height: 22px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._text_2.ggUpdateText();
		});
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_2);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._timer_node_change.ggLastIsActive!=me._timer_node_change.ggIsActive()) {
			me._timer_node_change.ggLastIsActive=me._timer_node_change.ggIsActive();
			if (me._timer_node_change.ggLastIsActive) {
			} else {
				player.openNext(player.getVariableValue('node_data'),player.getVariableValue('node_view'));
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hs_button(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hs_button=document.createElement('div');
		el.ggId="hs_button";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_button.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hs_button.onclick=function (e) {
			player.setVariableValue('var_id', me.hotspot.description);
			showmodal('$(hd)');
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hs_button.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hs_button.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hs_button.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hs_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._hs_button.appendChild(me._text_1);
		me.__div = me._hs_button;
	};
	function SkinHotspotClass_ht_node_75(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_75=document.createElement('div');
		el.ggId="ht_node_75";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 227px;';
		hs+='position : absolute;';
		hs+='top : 127px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_75.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_75.onclick=function (e) {
			player.setVariableValue('node_data', me.hotspot.url);
			player.moveTo(me.hotspot.pan,"0","70","15.0000");
			player.setVariableValue('node_view', me.hotspot.target);
			skin._timer_node_change.ggTimeout=Number("1") * 1000.0;
			skin._timer_node_change.ggTimestamp=skin.ggCurrentTime;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_75.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_75.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_75.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_75.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_0=document.createElement('div');
		els=me._svg_0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMiwyMi41QzYuMiwyMi41LDEuNSwxNy44LDEuNSwxMkMxLjUsNi4yLDYuMiwxLjUsMTIsMS41YzUuOCwwLDEwLjUsNC43LDEwLjUsMTAuNSYjeGQ7JiN4YTsmI3g5O0MyMi41LDE3LjgsMTcuOCwyMi41LDEyLDIyLjV6IE0xMiwyLjVjLTUuMiwwLTkuNSw0LjMtOS41LDkuNXM0LjMsOS41LDkuNSw5LjVzOS41LTQuMyw5LjUtOS41UzE3LjIsMi41LDEyLDIuNXoiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMC41LDExLjVjLTEu'+
			'MSwwLjMtMi4yLDAuNi0zLjMsMC45YzAtMC4xLDAtMC4xLTAuMS0wLjJjLTAuNi0yLTEuMi00LjEtMC40LTUuOUM2LjgsNiw3LjQsNC45LDguMyw0LjgmI3hkOyYjeGE7JiN4OTtjMC44LTAuMSwxLjQsMC42LDEuNiwwLjdjMC44LDAuOSwwLjksMi4xLDAuOSwyLjhjMCwwLjUtMC4xLDAuMy0wLjMsMi42QzEwLjUsMTEuMiwxMC41LDExLjMsMTAuNSwxMS41eiIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTExLjIsMTUuOGMtMC4yLDAuNS0wLjcsMC45LTEuMiwxYy0wLjgsMC4yLTEuNi0wLjMtMS45LTAuOGMtMC40LTAuNS0wLjItMC44LTAuNS0yLjJjMC41LTAuMSwxLjEtMC4yLDEuNi0wLjMmI3'+
			'hkOyYjeGE7JiN4OTtjMC41LTAuMSwxLTAuMywxLjUtMC40YzAuMiwwLjQsMC4zLDAuNiwwLjUsMS4yQzExLjMsMTQuOCwxMS40LDE1LjIsMTEuMiwxNS44eiIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzLjQsMTQuM2MxLjEsMC4zLDIuMiwwLjYsMy4zLDAuOWMwLTAuMSwwLTAuMSwwLjEtMC4yYzAuNi0yLDEuMi00LjEsMC40LTUuOWMtMC4xLTAuMy0wLjctMS40LTEuNi0xLjUmI3hkOyYjeGE7JiN4OTtjLTAuOC0wLjEtMS40LDAuNi0xLjYsMC43Yy0wLjgsMC45LTAuOSwyLjEtMC45LDIuOGMwLDAuNSwwLjEsMC4zLDAuMywyLjZDMTMuNCwxNCwxMy40LDE0LjEsMTMuNCwxNC4zeiIvPgog'+
			'PHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjcsMTguNmMwLjIsMC41LDAuNywwLjksMS4yLDFjMC44LDAuMiwxLjYtMC4zLDEuOS0wLjhjMC40LTAuNSwwLjItMC44LDAuNS0yLjJjLTAuNS0wLjEtMS4xLTAuMi0xLjYtMC4zJiN4ZDsmI3hhOyYjeDk7Yy0wLjUtMC4xLTEtMC4zLTEuNS0wLjRjLTAuMiwwLjQtMC4zLDAuNi0wLjUsMS4yQzEyLjYsMTcuNiwxMi41LDE4LDEyLjcsMTguNnoiLz4KPC9zdmc+Cg==';
		me._svg_0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg footprint_75";
		el.ggType='svg';
		hs ='';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node_75.appendChild(me._svg_0);
		me.__div = me._ht_node_75;
	};
	function SkinHotspotClass_ht_node_45(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_45=document.createElement('div');
		el.ggId="ht_node_45";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 227px;';
		hs+='position : absolute;';
		hs+='top : 127px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_45.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_45.onclick=function (e) {
			player.setVariableValue('node_data', me.hotspot.url);
			player.moveTo(me.hotspot.pan,"0","70","15.0000");
			player.setVariableValue('node_view', me.hotspot.target);
			skin._timer_node_change.ggTimeout=Number("1") * 1000.0;
			skin._timer_node_change.ggTimestamp=skin.ggCurrentTime;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_45.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_45.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_45.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_45.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMiwyMi41QzYuMiwyMi41LDEuNSwxNy44LDEuNSwxMkMxLjUsNi4yLDYuMiwxLjUsMTIsMS41YzUuOCwwLDEwLjUsNC43LDEwLjUsMTAuNSYjeGQ7JiN4YTsmI3g5O0MyMi41LDE3LjgsMTcuOCwyMi41LDEyLDIyLjV6IE0xMiwyLjVjLTUuMiwwLTkuNSw0LjMtOS41LDkuNXM0LjMsOS41LDkuNSw5LjVzOS41LTQuMyw5LjUtOS41UzE3LjIsMi41LDEyLDIuNXoiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMC41LDExLjVjLTEu'+
			'MSwwLjMtMi4yLDAuNi0zLjMsMC45YzAtMC4xLDAtMC4xLTAuMS0wLjJjLTAuNi0yLTEuMi00LjEtMC40LTUuOUM2LjgsNiw3LjQsNC45LDguMyw0LjgmI3hkOyYjeGE7JiN4OTtjMC44LTAuMSwxLjQsMC42LDEuNiwwLjdjMC44LDAuOSwwLjksMi4xLDAuOSwyLjhjMCwwLjUtMC4xLDAuMy0wLjMsMi42QzEwLjUsMTEuMiwxMC41LDExLjMsMTAuNSwxMS41eiIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTExLjIsMTUuOGMtMC4yLDAuNS0wLjcsMC45LTEuMiwxYy0wLjgsMC4yLTEuNi0wLjMtMS45LTAuOGMtMC40LTAuNS0wLjItMC44LTAuNS0yLjJjMC41LTAuMSwxLjEtMC4yLDEuNi0wLjMmI3'+
			'hkOyYjeGE7JiN4OTtjMC41LTAuMSwxLTAuMywxLjUtMC40YzAuMiwwLjQsMC4zLDAuNiwwLjUsMS4yQzExLjMsMTQuOCwxMS40LDE1LjIsMTEuMiwxNS44eiIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzLjQsMTQuM2MxLjEsMC4zLDIuMiwwLjYsMy4zLDAuOWMwLTAuMSwwLTAuMSwwLjEtMC4yYzAuNi0yLDEuMi00LjEsMC40LTUuOWMtMC4xLTAuMy0wLjctMS40LTEuNi0xLjUmI3hkOyYjeGE7JiN4OTtjLTAuOC0wLjEtMS40LDAuNi0xLjYsMC43Yy0wLjgsMC45LTAuOSwyLjEtMC45LDIuOGMwLDAuNSwwLjEsMC4zLDAuMywyLjZDMTMuNCwxNCwxMy40LDE0LjEsMTMuNCwxNC4zeiIvPgog'+
			'PHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjcsMTguNmMwLjIsMC41LDAuNywwLjksMS4yLDFjMC44LDAuMiwxLjYtMC4zLDEuOS0wLjhjMC40LTAuNSwwLjItMC44LDAuNS0yLjJjLTAuNS0wLjEtMS4xLTAuMi0xLjYtMC4zJiN4ZDsmI3hhOyYjeDk7Yy0wLjUtMC4xLTEtMC4zLTEuNS0wLjRjLTAuMiwwLjQtMC4zLDAuNi0wLjUsMS4yQzEyLjYsMTcuNiwxMi41LDE4LDEyLjcsMTguNnoiLz4KPC9zdmc+Cg==';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg footprint_45";
		el.ggType='svg';
		hs ='';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node_45.appendChild(me._svg_1);
		me.__div = me._ht_node_45;
	};
	function SkinHotspotClass_ht_node_60(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_60=document.createElement('div');
		el.ggId="ht_node_60";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 227px;';
		hs+='position : absolute;';
		hs+='top : 127px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_60.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_60.onclick=function (e) {
			player.setVariableValue('node_data', me.hotspot.url);
			player.moveTo(me.hotspot.pan,"0","70","15.0000");
			player.setVariableValue('node_view', me.hotspot.target);
			skin._timer_node_change.ggTimeout=Number("1") * 1000.0;
			skin._timer_node_change.ggTimestamp=skin.ggCurrentTime;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_60.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_60.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_60.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_60.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMiwyMi41QzYuMiwyMi41LDEuNSwxNy44LDEuNSwxMkMxLjUsNi4yLDYuMiwxLjUsMTIsMS41YzUuOCwwLDEwLjUsNC43LDEwLjUsMTAuNSYjeGQ7JiN4YTsmI3g5O0MyMi41LDE3LjgsMTcuOCwyMi41LDEyLDIyLjV6IE0xMiwyLjVjLTUuMiwwLTkuNSw0LjMtOS41LDkuNXM0LjMsOS41LDkuNSw5LjVzOS41LTQuMyw5LjUtOS41UzE3LjIsMi41LDEyLDIuNXoiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMC41LDExLjVjLTEu'+
			'MSwwLjMtMi4yLDAuNi0zLjMsMC45YzAtMC4xLDAtMC4xLTAuMS0wLjJjLTAuNi0yLTEuMi00LjEtMC40LTUuOUM2LjgsNiw3LjQsNC45LDguMyw0LjgmI3hkOyYjeGE7JiN4OTtjMC44LTAuMSwxLjQsMC42LDEuNiwwLjdjMC44LDAuOSwwLjksMi4xLDAuOSwyLjhjMCwwLjUtMC4xLDAuMy0wLjMsMi42QzEwLjUsMTEuMiwxMC41LDExLjMsMTAuNSwxMS41eiIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTExLjIsMTUuOGMtMC4yLDAuNS0wLjcsMC45LTEuMiwxYy0wLjgsMC4yLTEuNi0wLjMtMS45LTAuOGMtMC40LTAuNS0wLjItMC44LTAuNS0yLjJjMC41LTAuMSwxLjEtMC4yLDEuNi0wLjMmI3'+
			'hkOyYjeGE7JiN4OTtjMC41LTAuMSwxLTAuMywxLjUtMC40YzAuMiwwLjQsMC4zLDAuNiwwLjUsMS4yQzExLjMsMTQuOCwxMS40LDE1LjIsMTEuMiwxNS44eiIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzLjQsMTQuM2MxLjEsMC4zLDIuMiwwLjYsMy4zLDAuOWMwLTAuMSwwLTAuMSwwLjEtMC4yYzAuNi0yLDEuMi00LjEsMC40LTUuOWMtMC4xLTAuMy0wLjctMS40LTEuNi0xLjUmI3hkOyYjeGE7JiN4OTtjLTAuOC0wLjEtMS40LDAuNi0xLjYsMC43Yy0wLjgsMC45LTAuOSwyLjEtMC45LDIuOGMwLDAuNSwwLjEsMC4zLDAuMywyLjZDMTMuNCwxNCwxMy40LDE0LjEsMTMuNCwxNC4zeiIvPgog'+
			'PHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjcsMTguNmMwLjIsMC41LDAuNywwLjksMS4yLDFjMC44LDAuMiwxLjYtMC4zLDEuOS0wLjhjMC40LTAuNSwwLjItMC44LDAuNS0yLjJjLTAuNS0wLjEtMS4xLTAuMi0xLjYtMC4zJiN4ZDsmI3hhOyYjeDk7Yy0wLjUtMC4xLTEtMC4zLTEuNS0wLjRjLTAuMiwwLjQtMC4zLDAuNi0wLjUsMS4yQzEyLjYsMTcuNiwxMi41LDE4LDEyLjcsMTguNnoiLz4KPC9zdmc+Cg==';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg footprint_60";
		el.ggType='svg';
		hs ='';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node_60.appendChild(me._svg_2);
		me.__div = me._ht_node_60;
	};
	function SkinHotspotClass_ht_lobby_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_lobby_url=document.createElement('div');
		el.ggId="ht_lobby_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 332px;';
		hs+='position : absolute;';
		hs+='top : 218px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_lobby_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_lobby_url.onclick=function (e) {
			player.setVariableValue('hs_title', me.hotspot.title);
			me._tooltip.ggVisible = !me._tooltip.ggVisible;
			var flag=me._tooltip.ggVisible;
			me._tooltip.style[domTransition]='none';
			me._tooltip.style.visibility=((flag)&&(Number(me._tooltip.style.opacity)>0||!me._tooltip.style.opacity))?'inherit':'hidden';
			showTooltips();
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_lobby_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_lobby_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_lobby_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_lobby_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOSwxOVY0aC01VjNINXYxNkgzdjJoMTFWNmgzdjE1aDR2LTJIMTl6IE0xMiwxM2gtMnYtMmgyVjEzeiIvPgo8L3N2Zz4K';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_lobby_url.appendChild(me._svg_3);
		el=me._tooltip=document.createElement('div');
		els=me._tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : auto;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_lobby_url.appendChild(me._tooltip);
		me.__div = me._ht_lobby_url;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='hs_button') {
			hotspot.skinid = 'hs_button';
			hsinst = new SkinHotspotClass_hs_button(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_node_75') {
			hotspot.skinid = 'ht_node_75';
			hsinst = new SkinHotspotClass_ht_node_75(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_node_45') {
			hotspot.skinid = 'ht_node_45';
			hsinst = new SkinHotspotClass_ht_node_45(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_node_60') {
			hotspot.skinid = 'ht_node_60';
			hsinst = new SkinHotspotClass_ht_node_60(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
			hotspot.skinid = 'ht_lobby_url';
			hsinst = new SkinHotspotClass_ht_lobby_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['hs_button']) {
			var i;
			for(i = 0; i < hotspotTemplates['hs_button'].length; i++) {
				hotspotTemplates['hs_button'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_75']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_75'].length; i++) {
				hotspotTemplates['ht_node_75'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_45']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_45'].length; i++) {
				hotspotTemplates['ht_node_45'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_60']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_60'].length; i++) {
				hotspotTemplates['ht_node_60'][i] = null;
			}
		}
		if(hotspotTemplates['ht_lobby_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_lobby_url'].length; i++) {
				hotspotTemplates['ht_lobby_url'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};