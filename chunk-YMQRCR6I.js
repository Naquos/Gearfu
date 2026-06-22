import{a as D,d as Zi}from"./chunk-ELGHWM6Z.js";import{a as Ze,b as Hn}from"./chunk-QUWUYPFC.js";import{a as nt,b as Ji,c as rn,d as Te,e as _e,f as eo,g as to,h as sn,i as cn}from"./chunk-BTOAOMMG.js";import{e as it,f as ot,g as ln}from"./chunk-GFOA4U3Q.js";import{a as Xi}from"./chunk-5ABOHW55.js";import{a as zt}from"./chunk-VOAIZEKI.js";import{a as Xe}from"./chunk-PT7SBGUQ.js";import{A as en,B as tn,C as nn,D as on,G as tt,H as Kn,I as Yi,J as an,b as jn,c as zn,e as Rt,f as de,h as Gn,i as Si,m as Vt,n as jt,o as ji,p as et,q as Wt,r as Qt,s as Ht,t as Kt,u as $i,v as $t,w as Yt,x as Xt,y as Zt,z as Jt}from"./chunk-L4BIVQJE.js";import{a as Ii,b as Ei}from"./chunk-YTXRVCRC.js";import{$a as S,$c as wi,Aa as a,Ab as Ie,Ad as Qn,Ba as ui,Bb as Pe,Bd as j,C as Le,Ca as hi,Cb as N,Cd as Vi,D as ci,Db as ce,Ea as Tt,Eb as g,Ed as we,Fa as ht,Fb as v,Fd as Je,Ga as gt,Gb as K,Hb as le,Hc as J,Ic as He,Id as zi,Ja as At,Jc as xi,Jd as Gi,K as Et,Kd as qi,L as pt,Lb as _i,Lc as Ke,M as Ce,Mb as vi,Mc as ie,Md as Wi,N as se,Na as b,Nb as yi,Nd as Qi,O as ge,Oa as te,Ob as me,Oc as Mi,Od as _t,Pa as je,Pb as Ci,Qa as gi,Qb as m,Qc as oe,R as Ue,Rb as d,Rc as Oi,Rd as Hi,S as q,Sa as Pt,Sb as ki,Sc as Ti,T as ee,Ta as fi,Tc as Dt,Td as Oe,Ua as bi,Ud as Ki,V as G,Vb as Ee,Wd as Gt,X as s,Xb as Qe,Yc as Ai,Zc as Pi,Zd as qt,_ as li,_a as U,_b as Se,a as xt,aa as W,ab as x,ba as Q,bb as ke,bd as Ft,c as dt,ca as Mt,cb as ft,cc as V,d as X,da as mi,db as F,dd as pe,e as he,ea as ut,eb as B,ed as Bt,fb as c,fd as Nt,gb as p,gc as C,hb as u,hc as bt,hd as Ri,ia as R,ib as l,id as Lt,j as Ne,ja as Ot,jb as ze,jd as Di,kb as Ge,kd as Fi,ld as Bi,ma as L,mb as fe,md as Ni,n as M,nb as qe,o as ri,ob as y,oc as wt,od as qn,pd as Wn,qa as di,qb as f,qd as Ut,r as It,ra as pi,rb as ne,rd as Li,sa as Ve,sb as H,sd as ue,t as si,tb as We,td as $e,ua as Z,ub as be,ud as Ye,v as xe,vb as T,wb as A,wd as Me,x as ye,xd as E,ya as O,yd as I,zd as Ui}from"./chunk-IB5BOXAK.js";import{a as Fe,b as Be}from"./chunk-25N2FLV6.js";var no=class o{isDisplayed=new he(!1);isDisplayed$=this.isDisplayed.asObservable();toggleDisplay(){this.isDisplayed.next(!this.isDisplayed.value)}setDisplay(i){this.isDisplayed.next(i)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=q({token:o,factory:o.\u0275fac,providedIn:"root"})};var mn=class o{reverseFormService=s(nn);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-reverse-button"]],decls:1,vars:1,consts:[["matIcon","swap_vert",3,"fieldControl"]],template:function(e,t){e&1&&l(0,"app-button-checkbox",0),e&2&&c("fieldControl",t.reverseFormService.form.reverse)},dependencies:[D,I],encapsulation:2})};var dn=(()=>{class o{_animationsDisabled=ue();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&N("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return o})();var _o=["text"],vo=[[["mat-icon"]],"*"],yo=["mat-icon","*"];function Co(o,i){if(o&1&&l(0,"mat-pseudo-checkbox",1),o&2){let e=f();c("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function ko(o,i){if(o&1&&l(0,"mat-pseudo-checkbox",3),o&2){let e=f();c("disabled",e.disabled)}}function So(o,i){if(o&1&&(p(0,"span",4),g(1),u()),o&2){let e=f();a(),K("(",e.group.label,")")}}var yt=new G("MAT_OPTION_PARENT_COMPONENT"),Ct=new G("MatOptgroup");var vt=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},ae=(()=>{class o{_element=s(Z);_changeDetectorRef=s(V);_parent=s(yt,{optional:!0});group=s(Ct,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(pe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=L(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new R;_text;_stateChanges=new X;constructor(){let e=s(He);e.load(ot),e.load(xi),this._signalDisableRipple=!!this._parent&&pi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!oe(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new vt(this,e))}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&be(_o,7),t&2){let r;T(r=A())&&(n._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&y("click",function(){return n._selectViaInteraction()})("keydown",function(h){return n._handleKeydown(h)}),t&2&&(qe("id",n.id),U("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),N("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",C]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:yo,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(ne(vo),S(0,Co,1,2,"mat-pseudo-checkbox",1),H(1),p(2,"span",2,0),H(4,1),u(),S(5,ko,1,1,"mat-pseudo-checkbox",3),S(6,So,2,1,"span",4),l(7,"div",5)),t&2&&(x(n.multiple?0:-1),a(5),x(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),a(),x(n.group&&n.group._inert?6:-1),a(),c("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[dn,it],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return o})();function pn(o,i,e){if(e.length){let t=i.toArray(),n=e.toArray(),r=0;for(let h=0;h<o+1;h++)t[h].group&&t[h].group===n[r]&&r++;return r}return 0}function un(o,i,e,t){return o<e?o:o+i>e+t?Math.max(0,o-t+i):e}var io=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=te({type:o});static \u0275inj=ee({imports:[ie]})}return o})();var rt=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=te({type:o});static \u0275inj=ee({imports:[ln,io,ae,ie]})}return o})();var Io=["panel"],Eo=["*"];function Mo(o,i){if(o&1&&(ze(0,"div",1,0),H(2),Ge()),o&2){let e=i.id,t=f();ce(t._classList),N("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),qe("id",t.id),U("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var $n=class{source;option;constructor(i,e){this.source=i,this.option=e}},oo=new G("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),ao=(()=>{class o{_changeDetectorRef=s(V);_elementRef=s(Z);_defaults=s(oo);_animationsDisabled=ue();_activeOptionChanges=xt.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new R;opened=new R;closed=new R;optionActivated=new R;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=s(pe).getId("mat-autocomplete-");inertGroups;constructor(){let e=s(Oi);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Ft(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new $n(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["mat-autocomplete"]],contentQueries:function(t,n,r){if(t&1&&We(r,ae,5)(r,Ct,5),t&2){let h;T(h=A())&&(n.options=h),T(h=A())&&(n.optionGroups=h)}},viewQuery:function(t,n){if(t&1&&be(hi,7)(Io,5),t&2){let r;T(r=A())&&(n.template=r.first),T(r=A())&&(n.panel=r.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",C],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",C],requireSelection:[2,"requireSelection","requireSelection",C],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",C],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",C]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[me([{provide:yt,useExisting:o}])],ngContentSelectors:Eo,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,n){t&1&&(ne(),bi(0,Mo,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2})}return o})();var Oo={provide:Je,useExisting:Ue(()=>Yn),multi:!0};var To=new G("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let o=s(ut);return()=>Lt(o)}}),Yn=(()=>{class o{_environmentInjector=s(li);_element=s(Z);_injector=s(ut);_viewContainerRef=s(At);_zone=s(Ot);_changeDetectorRef=s(V);_dir=s(Ke,{optional:!0});_formField=s(rn,{optional:!0,host:!0});_viewportRuler=s(Bt);_scrollStrategy=s(To);_renderer=s(Tt);_animationsDisabled=ue();_defaults=s(oo,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new X;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=xt.EMPTY;_breakpointObserver=s(Pi);_handsetLandscapeSubscription=xt.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new X;_overlayPanelClass=Mi(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return xe(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(ye(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(ye(()=>this._overlayAttached)):Ne()).pipe(M(e=>e instanceof vt?e:null))}optionSelections=It(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(pt(e),Ce(()=>xe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ce(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new dt(e=>{let t=r=>{let h=Dt(r),_=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,P=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&h!==this._element.nativeElement&&!this._hasFocus()&&(!_||!_.contains(h))&&(!P||!P.contains(h))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(h)&&e.next(r)},n=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{n.forEach(r=>r())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,n=t.keyCode,r=oe(t);if(n===27&&!r&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&n===13&&this.panelOpen&&!r)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let h=this.autocomplete._keyManager.activeItem,_=n===38||n===40;n===9||_&&!r&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):_&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(_||this.autocomplete._keyManager.activeItem!==h)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,n=t.value;if(t.type==="number"&&(n=n==""?null:parseFloat(n)),this._previousValue!==n){if(this._previousValue=n,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(n),!n)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let r=this.autocomplete.options?.find(h=>h.selected);if(r){let h=this._getDisplayValue(r.value);n!==h&&r.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let r=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(r)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Ti()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new dt(n=>{ui(()=>{n.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(ge(()=>this._positionStrategy.reapplyLastPosition()),ci(0))??Ne();return xe(e,t).pipe(Ce(()=>this._zone.run(()=>{let n=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),n!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Le(1)).subscribe(n=>this._setValueAndClose(n))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,n=e?e.source:this._pendingAutoselectedOption;n?(this._clearPreviousSelectedOption(n),this._assignOptionValue(n.value),this._onChange(n.value),t._emitSelectEvent(n),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(n=>{n!==e&&n.selected&&n.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new Ri(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=Ni(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Li.HandsetLandscape).subscribe(r=>{r.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let n=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&n!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!oe(e)||e.keyCode===38&&oe(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Di({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Fi(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],n=this._aboveClass,r=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:n},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:n}],h;this.position==="above"?h=r:this.position==="below"?h=t:h=[...t,...r],e.withPositions(h)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let n=0;n<e.options.length;n++)if(!e.options.get(n).disabled){t=n;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,n=pn(e,t.options,t.optionGroups);if(e===0&&n===1)t._setScrollTop(0);else if(t.panel){let r=t.options.toArray()[e];if(r){let h=r._getHostElement(),_=un(h.offsetTop,h.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(_)}}}static \u0275fac=function(t){return new(t||o)};static \u0275dir=je({type:o,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,n){t&1&&y("focusin",function(){return n._handleFocus()})("blur",function(){return n._onTouched()})("input",function(h){return n._handleInput(h)})("keydown",function(h){return n._handleKeydown(h)})("click",function(){return n._handleClick()}),t&2&&U("autocomplete",n.autocompleteAttribute)("role",n.autocompleteDisabled?null:"combobox")("aria-autocomplete",n.autocompleteDisabled?null:"list")("aria-activedescendant",n.panelOpen&&n.activeOption?n.activeOption.id:null)("aria-expanded",n.autocompleteDisabled?null:n.panelOpen.toString())("aria-controls",n.autocompleteDisabled||!n.panelOpen?null:n.autocomplete?.id)("aria-haspopup",n.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",C]},exportAs:["matAutocompleteTrigger"],features:[me([Oo]),Ve]})}return o})(),ro=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=te({type:o});static \u0275inj=ee({imports:[Ut,rt,Nt,rt,ie]})}return o})();var Po=(o,i)=>i.id;function wo(o,i){if(o&1&&(p(0,"mat-option",4)(1,"div",5),l(2,"img",6),p(3,"span"),g(4),u()()()),o&2){let e=i.$implicit;Pe("background-color",e.backgroundColor),c("value",e.label),a(2),c("src",e.imgUrl,O),a(2),v(e.displayLabel)}}var gn=class o{translateService=s(Me);itemService=s(tt);colorRarityService=s(Ze);searchItemNameFormService=s(Zt);imageService=s(j);options=L([]);constructor(){this.itemService.itemsFilterByItemName$.pipe(Ce(i=>si(()=>this.searchItemNameFormService.searchValue().length>2,Ne(i),Ne([]))),M(i=>i.slice(0,10)),ge(i=>this.options.set(i.map(e=>({id:`${e.id}`,label:this.getLabel(e),displayLabel:`${this.getLabel(e)} (${e.level})`,imgUrl:this.imageService.getItemUrl(e.idImage),backgroundColor:this.colorRarityService.mapColors.get(e.rarity)??"",value:e}))))).subscribe()}getLabel(i){return`${i.title[this.translateService.currentLang]}`}onOptionSelected(i){let e=this.options().find(t=>t.label===i.option.value);e&&this.searchItemNameFormService.setFilter(e.value)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-search-item-name"]],decls:9,vars:5,consts:[["auto","matAutocomplete"],["matInput","",3,"formField","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],[3,"value","backgroundColor"],[3,"value"],[2,"display","flex","align-items","center"],["alt","image item","width","50px","height","50px","appFallback","",3,"src"]],template:function(e,t){if(e&1&&(p(0,"mat-form-field")(1,"mat-label"),g(2),m(3,"translate"),u(),l(4,"input",1),ht(),p(5,"mat-autocomplete",2,0),y("optionSelected",function(r){return t.onOptionSelected(r)}),F(7,wo,5,5,"mat-option",3,Po),u()()),e&2){let n=Ie(6);a(2),v(d(3,3,"search-item-name.label")),a(2),c("formField",t.searchItemNameFormService.form.search)("matAutocomplete",n),gt(),a(3),B(t.options())}},dependencies:[_e,Te,nt,cn,sn,I,ro,ao,ae,Yn,Gt,Xe,E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};var Ro=["*"],so=(()=>{class o{labelPosition="after";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&N("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:Ro,decls:1,vars:0,template:function(t,n){t&1&&(ne(),H(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return o})();var Do=["input"],Fo=["label"],Bo=["*"],Jn={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},No=new G("mat-checkbox-default-options",{providedIn:"root",factory:()=>Jn}),z=(function(o){return o[o.Init=0]="Init",o[o.Checked=1]="Checked",o[o.Unchecked=2]="Unchecked",o[o.Indeterminate=3]="Indeterminate",o})(z||{}),ei=class{source;checked},Lo=(()=>{class o{_elementRef=s(Z);_changeDetectorRef=s(V);_ngZone=s(Ot);_animationsDisabled=ue();_options=s(No,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new ei;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new R;indeterminateChange=new R;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=z.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){s(He).load(ot);let e=s(new Qe("tabindex"),{optional:!0});this._options=this._options||Jn,this.color=this._options.color||Jn.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=s(pe).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(z.Indeterminate):this._transitionCheckState(this.checked?z.Checked:z.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=L(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?z.Checked:z.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case z.Init:if(t===z.Checked)return this._animationClasses.uncheckedToChecked;if(t==z.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case z.Unchecked:return t===z.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case z.Checked:return t===z.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case z.Indeterminate:return t===z.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&be(Do,5)(Fo,5),t&2){let r;T(r=A())&&(n._inputElement=r.first),T(r=A())&&(n._labelElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(qe("id",n.id),U("tabindex",null)("aria-label",null)("aria-labelledby",null),ce(n.color?"mat-"+n.color:"mat-accent"),N("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",C],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",C],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",C],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:bt(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",C],checked:[2,"checked","checked",C],disabled:[2,"disabled","disabled",C],indeterminate:[2,"indeterminate","indeterminate",C]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[me([{provide:Je,useExisting:Ue(()=>o),multi:!0},{provide:zi,useExisting:o,multi:!0}]),Ve],ngContentSelectors:Bo,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(ne(),p(0,"div",3),y("click",function(h){return n._preventBubblingFromLabel(h)}),p(1,"div",4,0)(3,"div",5),y("click",function(){return n._onTouchTargetClick()}),u(),p(4,"input",6,1),y("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(h){return n._onInteractionEvent(h)}),u(),l(6,"div",7),p(7,"div",8),Mt(),p(8,"svg",9),l(9,"path",10),u(),mi(),l(10,"div",11),u(),l(11,"div",12),u(),p(12,"label",13,2),H(14),u()()),t&2){let r=Ie(2);c("labelPosition",n.labelPosition),a(4),N("mdc-checkbox--selected",n.checked),c("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),U("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),a(7),c("matRippleTrigger",r)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),a(),c("for",n.inputId)}},dependencies:[it,so],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return o})(),re=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=te({type:o});static \u0275inj=ee({imports:[Lo,ie]})}return o})();var fn=class o{obtentionFormService=s(on);imageService=s(j);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-obtention"]],decls:14,vars:28,consts:[[3,"tooltip","fieldControl","srcImg"]],template:function(e,t){e&1&&(p(0,"h3"),g(1),m(2,"translate"),u(),p(3,"div"),l(4,"app-button-checkbox",0),m(5,"translate"),l(6,"app-button-checkbox",0),m(7,"translate"),l(8,"app-button-checkbox",0),m(9,"translate"),l(10,"app-button-checkbox",0),m(11,"translate"),l(12,"app-button-checkbox",0),m(13,"translate"),u()),e&2&&(a(),v(d(2,16,"obtention.cacher")),a(3),c("tooltip",d(5,18,"obtention.craftable"))("fieldControl",t.obtentionFormService.form.CRAFTABLE)("srcImg",t.imageService.getItemUrl(71919810)),a(2),c("tooltip",d(7,20,"obtention.droppable"))("fieldControl",t.obtentionFormService.form.DROP)("srcImg",t.imageService.getMonsterUrl(100200039)),a(2),c("tooltip",d(9,22,"obtention.boss"))("fieldControl",t.obtentionFormService.form.BOSS)("srcImg",t.imageService.getMonsterUrl(100200044)),a(2),c("tooltip",d(11,24,"obtention.archi"))("fieldControl",t.obtentionFormService.form.ARCHI)("srcImg",t.imageService.getAchievementUrl(5341)),a(2),c("tooltip",d(13,26,"obtention.pvp"))("fieldControl",t.obtentionFormService.form.PVP)("srcImg",t.imageService.getItemUrl(53124705)))},dependencies:[Oe,re,D,I,E],encapsulation:2})};var De=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new X;constructor(i=!1,e,t=!0,n){this._multiple=i,this._emitChanges=t,this.compareWith=n,e&&e.length&&(i?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(r=>this._getConcreteValue(r)));i.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var Uo=["button"],Vo=["*"];function jo(o,i){if(o&1&&(p(0,"div",2),l(1,"mat-pseudo-checkbox",6),u()),o&2){let e=f();a(),c("disabled",e.disabled)}}var co=new G("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),lo=new G("MatButtonToggleGroup"),zo={provide:Je,useExisting:Ue(()=>kt),multi:!0},bn=class{source;value;constructor(i,e){this.source=i,this.value=e}},kt=(()=>{class o{_changeDetector=s(V);_dir=s(Ke,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=s(pe).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new R;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new R;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=s(co,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new De(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||oe(e))return;let n=e.target.id,r=this._buttonToggles.toArray().findIndex(_=>_.buttonId===n),h=null;switch(e.keyCode){case 32:case 13:h=this._buttonToggles.get(r)||null;break;case 38:h=this._getNextButton(r,-1);break;case 37:h=this._getNextButton(r,this.dir==="ltr"?-1:1);break;case 40:h=this._getNextButton(r,1);break;case 39:h=this._getNextButton(r,this.dir==="ltr"?1:-1);break;default:return}h&&(e.preventDefault(),h._onButtonClick(),h.focus())}_emitChangeEvent(e){let t=new bn(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,n=!1,r=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):r=!0,r?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let r=1;r<=n.length;r++){let h=(e+t*r+n.length)%n.length,_=n.get(h);if(_&&!_.disabled)return _}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||o)};static \u0275dir=je({type:o,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,n,r){if(t&1&&We(r,ct,5),t&2){let h;T(h=A())&&(n._buttonToggles=h)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,n){t&1&&y("keydown",function(h){return n._keydown(h)}),t&2&&(U("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),N("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",C],value:"value",multiple:[2,"multiple","multiple",C],disabled:[2,"disabled","disabled",C],disabledInteractive:[2,"disabledInteractive","disabledInteractive",C],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",C],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",C]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[me([zo,{provide:lo,useExisting:o}])]})}return o})(),ct=(()=>{class o{_changeDetectorRef=s(V);_elementRef=s(Z);_focusMonitor=s(Ai);_idGenerator=s(pe);_animationDisabled=ue();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new R;constructor(){s(He).load(ot);let e=s(lo,{optional:!0}),t=s(new Qe("tabindex"),{optional:!0})||"",n=s(co,{optional:!0});this._tabIndex=L(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new bn(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["mat-button-toggle"]],viewQuery:function(t,n){if(t&1&&be(Uo,5),t&2){let r;T(r=A())&&(n._buttonElement=r.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,n){t&1&&y("focus",function(){return n.focus()}),t&2&&(U("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),N("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",C],appearance:"appearance",checked:[2,"checked","checked",C],disabled:[2,"disabled","disabled",C],disabledInteractive:[2,"disabledInteractive","disabledInteractive",C]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Vo,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,n){if(t&1&&(ne(),p(0,"button",1,0),y("click",function(){return n._onButtonClick()}),S(2,jo,2,1,"div",2),p(3,"span",3),H(4),u()(),l(5,"span",4)(6,"span",5)),t&2){let r=Ie(1);c("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),U("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),a(2),x(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),a(4),c("matRippleTrigger",r)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[it,dn],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2})}return o})(),_n=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=te({type:o});static \u0275inj=ee({imports:[ln,ct,ie]})}return o})();var vn=class o{onlyNoSecondaryFormService=s(Ht);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-only-no-secondary"]],decls:11,vars:11,consts:[[3,"change","checked"]],template:function(e,t){e&1&&(p(0,"h3"),g(1),m(2,"translate"),u(),p(3,"section")(4,"mat-button-toggle-group")(5,"mat-button-toggle",0),y("change",function(){return t.onlyNoSecondaryFormService.setValue(!0)}),g(6),m(7,"translate"),u(),p(8,"mat-button-toggle",0),y("change",function(){return t.onlyNoSecondaryFormService.setValue(!1)}),g(9),m(10,"translate"),u()()()),e&2&&(a(),v(d(2,5,"only-no-secondary.label")),a(4),c("checked",t.onlyNoSecondaryFormService.currentValue()),a(),v(d(7,7,"only-no-secondary.oui")),a(2),c("checked",!t.onlyNoSecondaryFormService.currentValue()),a(),v(d(10,9,"only-no-secondary.non")))},dependencies:[_n,kt,ct,I,E],styles:["mat-button-toggle[_ngcontent-%COMP%]{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}"]})};var yn=class o{onlyNoElemFormService=s(tn);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-only-no-elem"]],decls:11,vars:11,consts:[[3,"change","checked"]],template:function(e,t){e&1&&(p(0,"h3"),g(1),m(2,"translate"),u(),p(3,"section")(4,"mat-button-toggle-group")(5,"mat-button-toggle",0),y("change",function(){return t.onlyNoElemFormService.setValue(!0)}),g(6),m(7,"translate"),u(),p(8,"mat-button-toggle",0),y("change",function(){return t.onlyNoElemFormService.setValue(!1)}),g(9),m(10,"translate"),u()()()),e&2&&(a(),v(d(2,5,"only-no-elem.label")),a(4),c("checked",t.onlyNoElemFormService.currentValue()),a(),v(d(7,7,"only-no-elem.oui")),a(2),c("checked",!t.onlyNoElemFormService.currentValue()),a(),v(d(10,9,"only-no-elem.non")))},dependencies:[_n,kt,ct,I,E],styles:["mat-button-toggle[_ngcontent-%COMP%]{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}"]})};var qo=["trigger"],Wo=["panel"],Qo=[[["mat-select-trigger"]],"*"],Ho=["mat-select-trigger","*"];function Ko(o,i){if(o&1&&(p(0,"span",4),g(1),u()),o&2){let e=f();a(),v(e.placeholder)}}function $o(o,i){o&1&&H(0)}function Yo(o,i){if(o&1&&(p(0,"span",11),g(1),u()),o&2){let e=f(2);a(),v(e.triggerValue)}}function Xo(o,i){if(o&1&&(p(0,"span",5),S(1,$o,1,0)(2,Yo,2,1,"span",11),u()),o&2){let e=f();a(),x(e.customTrigger?1:2)}}function Zo(o,i){if(o&1){let e=fe();p(0,"div",12,1),y("keydown",function(n){W(e);let r=f();return Q(r._handleKeydown(n))}),H(2,1),u()}if(o&2){let e=f();ce(e.panelClass),N("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),U("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Jo=new G("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let o=s(ut);return()=>Lt(o)}}),ea=new G("MAT_SELECT_CONFIG"),po=new G("MatSelectTrigger"),ii=class{source;value;constructor(i,e){this.source=i,this.value=e}},Cn=(()=>{class o{_viewportRuler=s(Bt);_changeDetectorRef=s(V);_elementRef=s(Z);_dir=s(Ke,{optional:!0});_idGenerator=s(pe);_renderer=s(Tt);_parentFormField=s(rn,{optional:!0});ngControl=s(qi,{self:!0,optional:!0});_liveAnnouncer=s(wi);_defaultOptions=s(ea,{optional:!0});_animationsDisabled=ue();_popoverLocation;_initialized=new X;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,r=pn(e,this.options,this.optionGroups),h=t._getHostElement();e===0&&r===1?n.scrollTop=0:n.scrollTop=un(h.offsetTop,h.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ii(this,e)}_scrollStrategyFactory=s(Jo);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new X;_errorStateTracker;stateChanges=new X;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=L(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Gi.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=It(()=>{let e=this.options;return e?e.changes.pipe(pt(e),Ce(()=>xe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ce(()=>this.optionSelectionChanges))});openedChange=new R;_openedStream=this.openedChange.pipe(ye(e=>e),M(()=>{}));_closedStream=this.openedChange.pipe(ye(e=>!e),M(()=>{}));selectionChange=new R;valueChange=new R;constructor(){let e=s(eo),t=s(Qi,{optional:!0}),n=s(Hi,{optional:!0}),r=s(new Qe("tabindex"),{optional:!0}),h=s(Bi,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new to(e,this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=h?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new De(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(se(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(se(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(pt(null),se(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Le(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,r=t===13||t===32,h=this._keyManager;if(!h.isTyping()&&r&&!oe(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let _=this.selected;h.onKeydown(e);let P=this.selected;P&&_!==P&&this._liveAnnouncer.announce(P.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,r=n===40||n===38,h=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!h&&(n===13||n===32)&&t.activeItem&&!oe(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!h&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let _=this.options.some(P=>!P.disabled&&!P.selected);this.options.forEach(P=>{P.disabled||(_?P.select():P.deselect())})}else{let _=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==_&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!oe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch(r){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof qn?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ft(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=xe(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(se(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),xe(...this.options.map(t=>t._stateChanges)).pipe(se(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Dt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["mat-select"]],contentQueries:function(t,n,r){if(t&1&&We(r,po,5)(r,ae,5)(r,Ct,5),t&2){let h;T(h=A())&&(n.customTrigger=h.first),T(h=A())&&(n.options=h),T(h=A())&&(n.optionGroups=h)}},viewQuery:function(t,n){if(t&1&&be(qo,5)(Wo,5)(Wn,5),t&2){let r;T(r=A())&&(n.trigger=r.first),T(r=A())&&(n.panel=r.first),T(r=A())&&(n._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,n){t&1&&y("keydown",function(h){return n._handleKeydown(h)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(U("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),N("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",C],disableRipple:[2,"disableRipple","disableRipple",C],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:bt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",C],placeholder:"placeholder",required:[2,"required","required",C],multiple:[2,"multiple","multiple",C],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",C],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",bt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",C]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[me([{provide:Ji,useExisting:o},{provide:yt,useExisting:o}]),Ve],ngContentSelectors:Ho,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,n){if(t&1&&(ne(Qo),p(0,"div",2,0),y("click",function(){return n.open()}),p(3,"div",3),S(4,Ko,2,1,"span",4)(5,Xo,3,1,"span",5),u(),p(6,"div",6)(7,"div",7),Mt(),p(8,"svg",8),l(9,"path",9),u()()()(),fi(10,Zo,3,16,"ng-template",10),y("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(h){return n._handleOverlayKeydown(h)})),t&2){let r=Ie(1);a(3),U("id",n._valueId),a(),x(n.empty?4:5),a(6),c("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",n._popoverLocation)}},dependencies:[qn,Wn],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return o})(),kn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275dir=je({type:o,selectors:[["mat-select-trigger"]],features:[me([{provide:po,useExisting:o}])]})}return o})(),Sn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=te({type:o});static \u0275inj=ee({imports:[Ut,rt,ie,Nt,_e,rt]})}return o})();function ta(o,i){o&1&&g(0,", ")}function na(o,i){if(o&1&&(g(0),m(1,"translate"),S(2,ta,1,0)),o&2){let e=i.$implicit,t=i.$index,n=i.$count;K(" ",d(1,2,"elem-maitrises-mecanism-enum."+e.valueOf())),a(2),x(t!==n-1?2:-1)}}function ia(o,i){if(o&1&&F(0,na,3,4,null,null,ft),o&2){let e=f();B(e.modifierMecanismFormService.selectedValues())}}function oa(o,i){if(o&1&&(p(0,"mat-option",1),m(1,"translate"),g(2),m(3,"translate"),u()),o&2){let e=i.$implicit,t=f();c("value",e)("matTooltip",d(1,3,t.mapTranslation[e])),a(2),v(d(3,5,"elem-maitrises-mecanism-enum."+e.valueOf()))}}var xn=class o{modifierMecanismFormService=s($t);ElemMaitrisesMecanismEnumList=Object.values($i);mapTranslation={COEUR_HUPPERMAGE:"modifier-mecanism.coeur-huppermage",DENOUEMENT:"modifier-mecanism.denouement",DEMESURE:"modifier-mecanism.demesure",CHAOS:"modifier-mecanism.chaos"};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-modifier-mecanism"]],decls:12,vars:8,consts:[["multiple","",3,"valueChange","value"],[3,"value","matTooltip"]],template:function(e,t){e&1&&(p(0,"h3"),g(1),m(2,"translate"),u(),p(3,"mat-form-field")(4,"mat-label"),g(5),m(6,"translate"),u(),p(7,"mat-select",0),y("valueChange",function(r){return t.modifierMecanismFormService.setValue(r)}),p(8,"mat-select-trigger"),S(9,ia,2,0),u(),F(10,oa,4,7,"mat-option",1,ft),u()()),e&2&&(a(),v(d(2,4,"modifier-elem-maitrises.label")),a(4),v(d(6,6,"modifier-elem-maitrises.mecaniques")),a(2),c("value",t.modifierMecanismFormService.form.mecanisms().value()),a(2),x(t.modifierMecanismFormService.selectedValues().length?9:-1),a(),B(t.ElemMaitrisesMecanismEnumList))},dependencies:[_e,Te,nt,Sn,Cn,kn,ae,I,Ye,$e,E],encapsulation:2})};function aa(o,i){if(o&1&&(p(0,"mat-option",1),g(1),m(2,"translate"),u()),o&2){let e=i.$implicit;c("value",e),a(),v(d(2,2,"sort-choice-enum."+e.valueOf()))}}var In=class o{sortChoiceFormService=s(Qt);SortChoiceEnumList=Object.values(ji);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-sort-choice"]],decls:7,vars:4,consts:[[3,"selectionChange","value"],[3,"value"]],template:function(e,t){e&1&&(p(0,"mat-form-field")(1,"mat-select",0),y("selectionChange",function(r){return t.sortChoiceFormService.form.sortChoice().value.set(r.value)}),p(2,"mat-select-trigger"),g(3),m(4,"translate"),u(),F(5,aa,3,4,"mat-option",1,ft),u()()),e&2&&(a(),c("value",t.sortChoiceFormService.form.sortChoice().value()),a(2),K(" ",d(4,2,"sort-choice-enum."+t.sortChoiceFormService.currentValue())," "),a(2),B(t.SortChoiceEnumList))},dependencies:[_e,Te,Sn,Cn,kn,ae,I,E],styles:["mat-button-toggle[_ngcontent-%COMP%]{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}"]})};var En=class o{resistancesFormService=s(Jt);imageService=s(j);IdActionsEnum=J;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-filter-resistances"]],decls:9,vars:11,consts:[[1,"group"],["tooltip","filter-maitrises.feu",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.eau",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.terre",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.air",3,"fieldControl","srcImg"]],template:function(e,t){e&1&&(p(0,"h3"),g(1),m(2,"translate"),u(),p(3,"div")(4,"div",0),l(5,"app-button-checkbox",1)(6,"app-button-checkbox",2)(7,"app-button-checkbox",3)(8,"app-button-checkbox",4),u()()),e&2&&(a(),v(d(2,9,"filter-resistances.resistances-elementaires")),a(4),c("fieldControl",t.resistancesFormService.form.feu)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_FEU)),a(),c("fieldControl",t.resistancesFormService.form.eau)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_EAU)),a(),c("fieldControl",t.resistancesFormService.form.terre)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_TERRE)),a(),c("fieldControl",t.resistancesFormService.form.air)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_AIR)))},dependencies:[re,D,I,E],encapsulation:2})};var Mn=class o{majorPresentFormService=s(Kt);imageService=s(j);IdActionsEnum=J;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-major-present"]],decls:69,vars:174,consts:[[3,"tooltip","fieldControl","srcImg"],[3,"tooltip","fieldControl","srcImg","crossedOut"]],template:function(e,t){e&1&&(p(0,"h3"),g(1),m(2,"translate"),u(),p(3,"div"),l(4,"app-button-checkbox",0),m(5,"translate"),l(6,"app-button-checkbox",0),m(7,"translate"),l(8,"app-button-checkbox",0),m(9,"translate"),l(10,"app-button-checkbox",0),m(11,"translate"),l(12,"app-button-checkbox",0),m(13,"translate"),l(14,"app-button-checkbox",0),m(15,"translate"),l(16,"app-button-checkbox",0),m(17,"translate"),l(18,"app-button-checkbox",0),m(19,"translate"),l(20,"app-button-checkbox",0),m(21,"translate"),l(22,"app-button-checkbox",0),m(23,"translate"),l(24,"app-button-checkbox",0),m(25,"translate"),l(26,"app-button-checkbox",0),m(27,"translate"),u(),p(28,"h3"),g(29),m(30,"translate"),u(),p(31,"div"),l(32,"app-button-checkbox",1),m(33,"translate"),l(34,"app-button-checkbox",1),m(35,"translate"),l(36,"app-button-checkbox",1),m(37,"translate"),l(38,"app-button-checkbox",1),m(39,"translate"),l(40,"app-button-checkbox",1),m(41,"translate"),l(42,"app-button-checkbox",1),m(43,"translate"),l(44,"app-button-checkbox",1),m(45,"translate"),l(46,"app-button-checkbox",1),m(47,"translate"),l(48,"app-button-checkbox",1),m(49,"translate"),l(50,"app-button-checkbox",1),m(51,"translate"),l(52,"app-button-checkbox",1),m(53,"translate"),l(54,"app-button-checkbox",1),m(55,"translate"),u(),p(56,"div"),l(57,"app-button-checkbox",1),m(58,"translate"),l(59,"app-button-checkbox",1),m(60,"translate"),l(61,"app-button-checkbox",1),m(62,"translate"),l(63,"app-button-checkbox",1),m(64,"translate"),l(65,"app-button-checkbox",1),m(66,"translate"),l(67,"app-button-checkbox",1),m(68,"translate"),u()),e&2&&(a(),v(d(2,110,"major-present.label")),a(3),c("tooltip",d(5,112,"major-present.PA"))("fieldControl",t.majorPresentFormService.form.PA)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PA)),a(2),c("tooltip",d(7,114,"major-present.PM"))("fieldControl",t.majorPresentFormService.form.PM)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PM)),a(2),c("tooltip",d(9,116,"major-present.PW"))("fieldControl",t.majorPresentFormService.form.PW)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PW)),a(2),c("tooltip",d(11,118,"major-present.PO"))("fieldControl",t.majorPresentFormService.form.PO)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PORTEE)),a(2),c("tooltip",d(13,120,"major-present.armure-donnee"))("fieldControl",t.majorPresentFormService.form.ARMURE_DONNEE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.ARMURE_DONNEE_RECUE)),a(2),c("tooltip",d(15,122,"major-present.armure-recue"))("fieldControl",t.majorPresentFormService.form.ARMURE_RECUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.ARMURE_DONNEE_RECUE,!0)),a(2),c("tooltip",d(17,124,"major-present.critique"))("fieldControl",t.majorPresentFormService.form.CRITIQUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.COUP_CRITIQUE)),a(2),c("tooltip",d(19,126,"major-present.parade"))("fieldControl",t.majorPresentFormService.form.PARADE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PARADE)),a(2),c("tooltip",d(21,128,"major-present.resistance-dos"))("fieldControl",t.majorPresentFormService.form.RESISTANCE_DOS)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_DOS)),a(2),c("tooltip",d(23,130,"major-present.resistance-critique"))("fieldControl",t.majorPresentFormService.form.RESISTANCE_CRITIQUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_CRITIQUES)),a(2),c("tooltip",d(25,132,"major-present.tacle"))("fieldControl",t.majorPresentFormService.form.TACLE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.TACLE)),a(2),c("tooltip",d(27,134,"major-present.esquive"))("fieldControl",t.majorPresentFormService.form.ESQUIVE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.ESQUIVE)),a(3),v(d(30,136,"major-present.label-malus")),a(3),c("tooltip",d(33,138,"major-present.PERTE_PA"))("fieldControl",t.majorPresentFormService.form.PERTE_PA)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PA))("crossedOut",!0),a(2),c("tooltip",d(35,140,"major-present.PERTE_PM"))("fieldControl",t.majorPresentFormService.form.PERTE_PM)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PM))("crossedOut",!0),a(2),c("tooltip",d(37,142,"major-present.PERTE_PW"))("fieldControl",t.majorPresentFormService.form.PERTE_PW)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PW))("crossedOut",!0),a(2),c("tooltip",d(39,144,"major-present.PERTE_PO"))("fieldControl",t.majorPresentFormService.form.PERTE_PO)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PORTEE))("crossedOut",!0),a(2),c("tooltip",d(41,146,"major-present.PERTE_ARMURE_DONNEE"))("fieldControl",t.majorPresentFormService.form.PERTE_ARMURE_DONNEE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.ARMURE_DONNEE_RECUE))("crossedOut",!0),a(2),c("tooltip",d(43,148,"major-present.PERTE_ARMURE_RECUE"))("fieldControl",t.majorPresentFormService.form.PERTE_ARMURE_RECUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.ARMURE_DONNEE_RECUE,!0))("crossedOut",!0),a(2),c("tooltip",d(45,150,"major-present.PERTE_CRITIQUE"))("fieldControl",t.majorPresentFormService.form.PERTE_CRITIQUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.COUP_CRITIQUE))("crossedOut",!0),a(2),c("tooltip",d(47,152,"major-present.PERTE_PARADE"))("fieldControl",t.majorPresentFormService.form.PERTE_PARADE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PARADE))("crossedOut",!0),a(2),c("tooltip",d(49,154,"major-present.PERTE_RESISTANCE_DOS"))("fieldControl",t.majorPresentFormService.form.PERTE_RESISTANCE_DOS)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_DOS))("crossedOut",!0),a(2),c("tooltip",d(51,156,"major-present.PERTE_RESISTANCE_CRITIQUE"))("fieldControl",t.majorPresentFormService.form.PERTE_RESISTANCE_CRITIQUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.RESISTANCES_CRITIQUES))("crossedOut",!0),a(2),c("tooltip",d(53,158,"major-present.PERTE_TACLE"))("fieldControl",t.majorPresentFormService.form.PERTE_TACLE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.TACLE))("crossedOut",!0),a(2),c("tooltip",d(55,160,"major-present.PERTE_ESQUIVE"))("fieldControl",t.majorPresentFormService.form.PERTE_ESQUIVE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.ESQUIVE))("crossedOut",!0),a(3),c("tooltip",d(58,162,"major-present.PERTE_MAITRISES_MELEE"))("fieldControl",t.majorPresentFormService.form.PERTE_MAITRISES_MELEE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PERTE_MAITRISES_MELEE))("crossedOut",!0),a(2),c("tooltip",d(60,164,"major-present.PERTE_MAITRISES_DISTANCE"))("fieldControl",t.majorPresentFormService.form.PERTE_MAITRISES_DISTANCE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PERTE_MAITRISES_DISTANCE))("crossedOut",!0),a(2),c("tooltip",d(62,166,"major-present.PERTE_MAITRISES_CRITIQUE"))("fieldControl",t.majorPresentFormService.form.PERTE_MAITRISES_CRITIQUE)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PERTE_MAITRISES_CRITIQUE))("crossedOut",!0),a(2),c("tooltip",d(64,168,"major-present.PERTE_MAITRISES_DOS"))("fieldControl",t.majorPresentFormService.form.PERTE_MAITRISES_DOS)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PERTE_MAITRISES_DOS))("crossedOut",!0),a(2),c("tooltip",d(66,170,"major-present.PERTE_MAITRISES_SOIN"))("fieldControl",t.majorPresentFormService.form.PERTE_MAITRISES_SOIN)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PERTE_MAITRISES_SOIN))("crossedOut",!0),a(2),c("tooltip",d(68,172,"major-present.PERTE_MAITRISES_BERZERK"))("fieldControl",t.majorPresentFormService.form.PERTE_MAITRISES_BERZERK)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.PERTE_MAITRISES_BERZERK))("crossedOut",!0))},dependencies:[Oe,re,D,I,E],encapsulation:2})};var On=class o{maitrisesFormServices=s(en);imageService=s(j);IdActionsEnum=J;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-filter-maitrises"]],decls:19,vars:26,consts:[[1,"group"],["tooltip","filter-maitrises.feu",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.eau",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.terre",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.air",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.melee",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.distance",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.critique",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.dos",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.soin",3,"fieldControl","srcImg"],["tooltip","filter-maitrises.berzerk",3,"fieldControl","srcImg"]],template:function(e,t){e&1&&(p(0,"h3"),g(1),m(2,"translate"),u(),p(3,"div")(4,"div",0),l(5,"app-button-checkbox",1)(6,"app-button-checkbox",2)(7,"app-button-checkbox",3)(8,"app-button-checkbox",4),u(),p(9,"h3"),g(10),m(11,"translate"),u(),p(12,"div",0),l(13,"app-button-checkbox",5)(14,"app-button-checkbox",6)(15,"app-button-checkbox",7)(16,"app-button-checkbox",8)(17,"app-button-checkbox",9)(18,"app-button-checkbox",10),u()()),e&2&&(a(),v(d(2,22,"filter-maitrises.maitrises-elementaires")),a(4),c("fieldControl",t.maitrisesFormServices.form.feu)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_FEU)),a(),c("fieldControl",t.maitrisesFormServices.form.eau)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_EAU)),a(),c("fieldControl",t.maitrisesFormServices.form.terre)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_TERRE)),a(),c("fieldControl",t.maitrisesFormServices.form.air)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_AIR)),a(2),v(d(11,24,"filter-maitrises.maitrises-secondaires")),a(3),c("fieldControl",t.maitrisesFormServices.form.melee)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_MELEE)),a(),c("fieldControl",t.maitrisesFormServices.form.distance)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_DISTANCES)),a(),c("fieldControl",t.maitrisesFormServices.form.critique)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_CRITIQUES)),a(),c("fieldControl",t.maitrisesFormServices.form.dos)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_DOS)),a(),c("fieldControl",t.maitrisesFormServices.form.soin)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_SOIN)),a(),c("fieldControl",t.maitrisesFormServices.form.berzerk)("srcImg",t.imageService.getActionIdUrl(t.IdActionsEnum.MAITRISES_BERZERK)))},dependencies:[re,D,I,E],styles:["[_nghost-%COMP%]   .group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}"]})};var Tn=class o{rareteItemFormService=s(Xt);imageService=s(j);RarityItemEnum=Ui;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-rarete-item"]],decls:18,vars:38,consts:[[3,"tooltip","fieldControl","srcImg"]],template:function(e,t){e&1&&(p(0,"h3"),g(1),m(2,"translate"),u(),p(3,"div"),l(4,"app-button-checkbox",0),m(5,"translate"),l(6,"app-button-checkbox",0),m(7,"translate"),l(8,"app-button-checkbox",0),m(9,"translate"),l(10,"app-button-checkbox",0),m(11,"translate"),l(12,"app-button-checkbox",0),m(13,"translate"),l(14,"app-button-checkbox",0),m(15,"translate"),l(16,"app-button-checkbox",0),m(17,"translate"),u()),e&2&&(a(),v(d(2,22,"rarete-item.label")),a(3),c("tooltip",d(5,24,"rarete-item.normal"))("fieldControl",t.rareteItemFormService.form.normal)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.NORMAL)??""),a(2),c("tooltip",d(7,26,"rarete-item.rare"))("fieldControl",t.rareteItemFormService.form.rare)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.RARE)??""),a(2),c("tooltip",d(9,28,"rarete-item.mythique"))("fieldControl",t.rareteItemFormService.form.mythique)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.MYTHIQUE)??""),a(2),c("tooltip",d(11,30,"rarete-item.legendaire"))("fieldControl",t.rareteItemFormService.form.legendaire)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.LEGENDAIRE)??""),a(2),c("tooltip",d(13,32,"rarete-item.souvenir"))("fieldControl",t.rareteItemFormService.form.souvenir)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.SOUVENIR)??""),a(2),c("tooltip",d(15,34,"rarete-item.epique"))("fieldControl",t.rareteItemFormService.form.epique)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.EPIQUE)??""),a(2),c("tooltip",d(17,36,"rarete-item.relique"))("fieldControl",t.rareteItemFormService.form.relique)("srcImg",t.imageService.mapRarityUrl.get(t.RarityItemEnum.RELIQUE)??""))},dependencies:[Oe,re,D,I,E],styles:["[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}"]})};var An=class o{itemLevelFormService=s(Yt);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-item-level"]],decls:14,vars:11,consts:[["type","text","inputmode","numeric","matInput","",3,"formField"]],template:function(e,t){e&1&&(p(0,"h3"),g(1),m(2,"translate"),u(),p(3,"div")(4,"mat-form-field")(5,"mat-label"),g(6),m(7,"translate"),u(),l(8,"input",0),ht(),u(),p(9,"mat-form-field")(10,"mat-label"),g(11),m(12,"translate"),u(),l(13,"input",0),ht(),u()()),e&2&&(a(),v(d(2,5,"item-level.level")),a(5),v(d(7,7,"item-level.level-min")),a(2),c("formField",t.itemLevelFormService.form.levelMin),gt(),a(3),v(d(12,9,"item-level.level-max")),a(2),c("formField",t.itemLevelFormService.form.levelMax),gt())},dependencies:[Gt,_e,Te,nt,cn,sn,I,E],styles:["form[_ngcontent-%COMP%]{display:flex;justify-content:space-between}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:45%}@media screen and (min-width:700px){input[type=number][_ngcontent-%COMP%]{display:none}}@media screen and (max-width:700px){input[type=text][_ngcontent-%COMP%]{display:none}}"]})};var Pn=class o{itemTypeFormServices=s(Wt);itemTypesServices=s(et);itemTypes=new Map([]);ItemTypeEnum=Qn;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-item-types"]],decls:32,vars:73,consts:[[3,"tooltip","fieldControl","srcImg"]],template:function(e,t){e&1&&(p(0,"h3"),g(1),m(2,"translate"),u(),p(3,"div"),l(4,"app-button-checkbox",0),m(5,"translate"),l(6,"app-button-checkbox",0),m(7,"translate"),l(8,"app-button-checkbox",0),m(9,"translate"),l(10,"app-button-checkbox",0),m(11,"translate"),l(12,"app-button-checkbox",0),m(13,"translate"),l(14,"app-button-checkbox",0),m(15,"translate"),l(16,"app-button-checkbox",0),m(17,"translate"),l(18,"app-button-checkbox",0),m(19,"translate"),l(20,"app-button-checkbox",0),m(21,"translate"),l(22,"app-button-checkbox",0),m(23,"translate"),l(24,"app-button-checkbox",0),m(25,"translate"),l(26,"app-button-checkbox",0),m(27,"translate"),l(28,"app-button-checkbox",0),m(29,"translate"),l(30,"app-button-checkbox",0),m(31,"translate"),u()),e&2&&(a(),v(d(2,43,"item-types.type-item")),a(3),c("tooltip",d(5,45,"item-types.coiffe"))("fieldControl",t.itemTypeFormServices.form.casque)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.CASQUE)),a(2),c("tooltip",d(7,47,"item-types.amulette"))("fieldControl",t.itemTypeFormServices.form.amulette)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.AMULETTE)),a(2),c("tooltip",d(9,49,"item-types.plastron"))("fieldControl",t.itemTypeFormServices.form.plastron)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.PLASTRON)),a(2),c("tooltip",d(11,51,"item-types.anneau"))("fieldControl",t.itemTypeFormServices.form.anneau)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.ANNEAU)),a(2),c("tooltip",d(13,53,"item-types.bottes"))("fieldControl",t.itemTypeFormServices.form.bottes)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.BOTTES)),a(2),c("tooltip",d(15,55,"item-types.cape"))("fieldControl",t.itemTypeFormServices.form.cape)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.CAPE)),a(2),c("tooltip",d(17,57,"item-types.epaulettes"))("fieldControl",t.itemTypeFormServices.form.epaulettes)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.EPAULETTES)),a(2),c("tooltip",d(19,59,"item-types.ceinture"))("fieldControl",t.itemTypeFormServices.form.ceinture)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.CEINTURE)),a(2),c("tooltip",d(21,61,"item-types.bouclier"))("fieldControl",t.itemTypeFormServices.form.bouclier)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.BOUCLIER)),a(2),c("tooltip",d(23,63,"item-types.seconde-main"))("fieldControl",t.itemTypeFormServices.form.dague)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.DAGUE)),a(2),c("tooltip",d(25,65,"item-types.une-main"))("fieldControl",t.itemTypeFormServices.form.uneMain)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.UNE_MAIN)),a(2),c("tooltip",d(27,67,"item-types.deux-mains"))("fieldControl",t.itemTypeFormServices.form.deuxMains)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.DEUX_MAINS)),a(2),c("tooltip",d(29,69,"item-types.accessoires"))("fieldControl",t.itemTypeFormServices.form.accessoires)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.ACCESSOIRES)),a(2),c("tooltip",d(31,71,"item-types.familier"))("fieldControl",t.itemTypeFormServices.form.familier)("srcImg",t.itemTypesServices.getLogo(t.ItemTypeEnum.FAMILIER)))},dependencies:[Oe,re,D,I,E],styles:["[_nghost-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}"]})};var wn=class o{itemLevelFormService=s(Yt);itemTypeFormServices=s(Wt);maitrisesFormService=s(en);majorPresentFormService=s(Kt);modifierElemMaitrisesFormService=s($t);onlyNoElemFormService=s(tn);onlyNoSecondaryFormService=s(Ht);rareteItemFormServices=s(Xt);resistancesFormService=s(Jt);searchItemNameFormService=s(Zt);sortChoiceFormService=s(Qt);reverseFormService=s(nn);dropCraftableFormService=s(on);resetAllForms(){this.itemLevelFormService.setDefaultValue(),this.itemTypeFormServices.setDefaultValue(),this.maitrisesFormService.setDefaultValue(),this.majorPresentFormService.setDefaultValue(),this.modifierElemMaitrisesFormService.setDefaultValue(),this.onlyNoElemFormService.setDefaultValue(),this.onlyNoSecondaryFormService.setDefaultValue(),this.rareteItemFormServices.setDefaultValue(),this.resistancesFormService.setDefaultValue(),this.searchItemNameFormService.setDefaultValue(),this.sortChoiceFormService.setDefaultValue(),this.reverseFormService.setDefaultValue(),this.dropCraftableFormService.setDefaultValue()}static \u0275fac=function(e){return new(e||o)};static \u0275prov=q({token:o,factory:o.\u0275fac,providedIn:"root"})};var Rn=class o extends qt{static DEFAULT_VALUE=!1;display=new he(o.DEFAULT_VALUE);display$=this.display.asObservable();keyEnum="KEY_DISPLAY_FAVORIS";model=L({display:o.DEFAULT_VALUE});form=Ki(this.model);constructor(){super(),this.init()}handleChanges(i){this.display.next(i.display)}setValue(i){this.model.set({display:this.normalizeStoredValue(i)})}setDefaultValue(){this.model.set({display:o.DEFAULT_VALUE})}normalizeStoredValue(i){if(typeof i=="boolean")return i;if(i&&typeof i=="object"){let t=i.display;if(typeof t=="boolean")return t}return o.DEFAULT_VALUE}static \u0275fac=function(e){return new(e||o)};static \u0275prov=q({token:o,factory:o.\u0275fac,providedIn:"root"})};var go=class o{resetFormService=s(wn);displayFavorisFormService=s(Rn);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-filters"]],decls:26,vars:13,consts:[[1,"filter-content"],[1,"filter-title"],["color","rgb(207, 148, 11)","matIcon","star",3,"fieldControl","tooltip"],[3,"click","matTooltip"]],template:function(e,t){e&1&&(p(0,"div",0)(1,"div",1)(2,"h2"),g(3),m(4,"translate"),u(),l(5,"app-reverse-button")(6,"app-button-checkbox",2),m(7,"translate"),p(8,"button",3),m(9,"translate"),y("click",function(){return t.resetFormService.resetAllForms()}),g(10,"X"),u()(),l(11,"app-search-item-name")(12,"app-obtention")(13,"app-item-types")(14,"app-item-level")(15,"app-rarete-item")(16,"app-filter-maitrises")(17,"app-major-present")(18,"app-filter-resistances"),p(19,"h2"),g(20),m(21,"translate"),u(),l(22,"app-sort-choice")(23,"app-modifier-mecanism")(24,"app-only-no-elem")(25,"app-only-no-secondary"),u()),e&2&&(a(3),v(d(4,5,"app.filter-item")),a(3),c("fieldControl",t.displayFavorisFormService.form.display)("tooltip",d(7,7,"filters.favoris")),a(2),c("matTooltip",d(9,9,"filters.reset")),a(12),v(d(21,11,"app.sort-item")))},dependencies:[I,mn,gn,fn,vn,yn,xn,In,En,Mn,On,Tn,An,Pn,D,Ye,$e,E],styles:["[_nghost-%COMP%]{background:var(--color-surface-strong);color:var(--color-text-inverse);font-weight:400}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]{padding:10px;margin-bottom:50px}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]   app-reverse-button[_ngcontent-%COMP%]{width:41px;border-radius:25%}[_nghost-%COMP%]   .filter-content[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]   app-reverse-button[_ngcontent-%COMP%]{margin-left:auto;margin-right:15px}"]})};var fo=class o extends qt{static DEFAULT_VALUE=!0;open=new he(o.DEFAULT_VALUE);open$=this.open.asObservable();keyEnum="KEY_FILTER_SIDEBAR";model=L({open:o.DEFAULT_VALUE});currentValue=Ee(()=>this.model().open);constructor(){super(),this.init()}handleChanges(i){this.open.next(i.open)}setValue(i){this.model.set({open:this.normalizeStoredValue(i)})}setDefaultValue(){this.model.set({open:o.DEFAULT_VALUE})}getValue(){return this.open.getValue()}normalizeStoredValue(i){if(typeof i=="boolean")return i;if(i&&typeof i=="object"){let t=i.open;if(typeof t=="boolean")return t}return o.DEFAULT_VALUE}static \u0275fac=function(e){return new(e||o)};static \u0275prov=q({token:o,factory:o.\u0275fac,providedIn:"root"})};var Dn=class o{condition=new Map;compressionService=s(Vt);load(){return this.compressionService.decompressGzipJson(Rt+"itemConditions.json.gz").pipe(ge(i=>i.forEach(e=>this.condition.set(e.id,e))),Et(1),M(()=>{}))}findCondition(i){return this.condition.get(i)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=q({token:o,factory:o.\u0275fac,providedIn:"root"})};var Fn=class o{stateDefinitionService=new Map;compressionService=s(Vt);load(){return this.compressionService.decompressGzipJson(Rt+"statesDefinition.json.gz").pipe(ge(i=>{i.forEach(e=>this.stateDefinitionService.set(e.id,{id:e.id,description:{fr:e.description.fr,en:e.description.en,es:e.description.es,pt:e.description.pt}}))}),Et(1),M(()=>{}))}findStatesDefinition(i){return this.stateDefinitionService.get(i)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=q({token:o,factory:o.\u0275fac,providedIn:"root"})};var lt=class o{ankamaCdnFacade=s(jt);translateService=s(Me);actionService=s(zt);transform(i){let e=this.ankamaCdnFacade.actions();if(e.length===0)return"";let t=this.findAction(e,i),n=this.getDefinitions(t);return this.getDefinitionsComplete(n,i)}getDefinitionsComplete(i,e){let t=`${i}`;return t=this.replaceValues(t,e),t=this.cleanHeaderDefinition(t),t=this.cleanRecoltEffect(t),t=this.singularOrPlurial(t,e),t=this.atLeastSixParameters(t,e),t=this.armorGivenOrReceived(t,e),t=this.deleteDoubleMinus(t),t}deleteDoubleMinus(i){return i.replace(/--/g,"")}armorGivenOrReceived(i,e){if(e.actionId!==39&&e.actionId!==40)return i;let t=e.params[4]===120?this.translateService.instant("abstract.donnee"):this.translateService.instant("abstract.recue"),n=Math.abs(e.params[0]),r=this.actionService.isAMalus(e.actionId);return(r&&e.params[0]>0||!r&&e.params[0]<0?"-":"")+n+this.translateService.instant("abstract.armure")+t}atLeastSixParameters(i,e){let t=/{\[~3\]\?(.*):(.*)}/,n=i.match(t);return n&&(i=n[e.params.length>=6?1:2]),i}singularOrPlurial(i,e){return i=this.singularOrPlurialWithRegex(i,e,/\{\[>2\]\?([^}]){0,5}:([^}]){0,5}\}/g,2),i=this.singularOrPlurialWithRegex(i,e,/\{\[>1\]\?([^}]){0,5}:([^}]){0,5}\}/g),i}singularOrPlurialWithRegex(i,e,t,n=0){let r=[...i.matchAll(t)];if(r&&e.params.length>n){let h=r.map(_=>_[e.params[n]>=2?1:2]);for(let _=0;_<r.length;_++)i=i.replace(r[_][0],h[_]??"")}return i}cleanDefinition(i,e){let t=i.match(e);return t&&(i=i.replace(t[0],"")),i}cleanRecoltEffect(i){return this.cleanDefinition(i,/{\[~2]?.+}/g)}cleanHeaderDefinition(i){return this.cleanDefinition(i,/(\[#.*\]) /g)}replaceValues(i,e){let t=/(\[#\d\])/g,n=[...i.matchAll(t)].map(r=>r[1]);if(n)for(let r of n){let h=0;switch(r){case"[#1]":h=0;break;case"[#2]":h=2;break;case"[#3]":h=4;break}e.params.length>h&&(i=i.replace(r,e.params[h].toString()))}return i}getDefinitions(i){return i.description[this.translateService.currentLang]}findAction(i,e){return i.filter(t=>t.definition.id===e.actionId)[0]}static \u0275fac=function(e){return new(e||o)};static \u0275pipe=gi({name:"actions",type:o,pure:!1})};var Bn=class o{AnkamaCdnFacade=s(jt);findStates(i){let e=this.AnkamaCdnFacade.getStatesList().find(t=>t.definition.id===i);if(e)return{id:e.definition.id,fr:e.title.fr,en:e.title.en,es:e.title.es,pt:e.title.pt}}static \u0275fac=function(e){return new(e||o)};static \u0275prov=q({token:o,factory:o.\u0275fac,providedIn:"root"})};var mt=class o{translateService=s(Me);itemTypeService=s(et);itemChooseService=s(an);actionsService=s(zt);statesService=s(Bn);imageService=s(j);destroy$=new X;resistances=0;maitrises=0;IdActionEnum=J;Math=Math;itemChoosen$=new he([[]]);IdActionsEnum=J;itemChoosen=we(this.itemChoosen$);getEffectPng(i){return this.imageService.getActionIdUrl(i.actionId,i.actionId===39&&i.params[4]===121)}initItemChoosen(i){let e=this.itemTypeService.getItemType(i.itemTypeId);if(!e)return;let t=new dt;e===13?t=this.itemChooseService.getObsItem(12).pipe(M(n=>[n])):e===1?t=ri([this.itemChooseService.getObsItem(2),this.itemChooseService.getObsItem(12)]).pipe(M(([n,r])=>[n,r])):t=this.itemChooseService.getObsItem(e).pipe(M(n=>[n])),t.pipe(se(this.destroy$)).subscribe(n=>this.itemChoosen$.next(n))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-item"]],decls:0,vars:0,template:function(e,t){},encapsulation:2})};function ca(o,i){if(o&1&&(p(0,"div",0)(1,"span"),l(2,"img",7),g(3),m(4,"translate"),u(),p(5,"span"),l(6,"img",8),g(7),m(8,"translate"),u()()),o&2){let e=f();a(),ce(e.getBackgroundDifferentsStatsOnValue(e.maitrises)),a(),c("src",e.imageService.getActionIdUrl(e.IdActionEnum.MAITRISES_ELEMENTAIRES),O),a(),le("",d(4,10,"item.maitrises")," ",e.Math.trunc(e.maitrises)),a(2),ce(e.getBackgroundDifferentsStatsOnValue(e.resistances)),a(),c("src",e.imageService.getActionIdUrl(e.IdActionEnum.RESISTANCES_ELEMENTAIRE),O),a(),le("",d(8,12,"item.resistances")," ",e.resistances)}}function la(o,i){if(o&1&&(p(0,"div",4)(1,"h3"),g(2),u(),l(3,"img",9),u()),o&2){let e=i.$implicit,t=f(2);a(),Pe("color",t.colorRarityService.mapColors.get(e.rarity)),a(),le("",t.getTitle(e)," (",e.level,") "),a(),c("src",t.imageService.getItemUrl(e.idImage),O)}}function ma(o,i){o&1&&F(0,la,4,5,"div",4,ke),o&2&&B(i)}function da(o,i){if(o&1&&(l(0,"img",11),g(1),m(2,"actions")),o&2){let e=f().$implicit,t=f(2);c("src",t.getEffectPng(e),O),a(),K(" ",d(2,2,e)," ")}}function pa(o,i){if(o&1&&(p(0,"p"),S(1,da,3,4),u()),o&2){let e=i.$implicit,t=f(2);ce(t.getBackgroundDifferentsStats(e)),a(),x(e.actionId!==t.IdActionEnum.APPLIQUE_ETAT&&e.value!==0?1:-1)}}function ua(o,i){o&1&&(p(0,"div"),F(1,pa,2,3,"p",10,ke),u()),o&2&&(a(),B(i))}var Nn=class o extends mt{itemService=s(tt);colorRarityService=s(Ze);cdr=s(V);item=Se.required();indexItemChoosen=Se(0);ARMURE_DONNEE_RECUE=[39,40];listDifferentsStatsItem=[];loaded=L(!1);weight=0;itemSelected$=this.itemChoosen$.pipe(ye(i=>i.length!==0),M(i=>i.map(e=>e[this.indexItemChoosen()])),M(i=>i.length>=2&&i[0]?.id===i[1]?.id?[i.find(e=>e!==void 0)]:i),M(i=>i.filter(e=>e!==void 0)));itemSelected=we(this.itemSelected$,{initialValue:[]});differentStatsItemList=we(this.itemSelected$.pipe(se(this.destroy$),M(i=>({currentItem:this.getCurrentItem(),listItems:i})),ye(({currentItem:i})=>i!==void 0),ge(i=>{this.listDifferentsStatsItem=[];let e=i.currentItem;e&&(this.fillListCurrentItem(e),i.listItems.forEach(t=>{t&&this.fillMapDifferentStatsItem(t,e)}))}),M(()=>this.listDifferentsStatsItem.sort((i,e)=>(de.get(i.actionId)??999)-(de.get(e.actionId)??999)))),{initialValue:[]});constructor(){super()}ngAfterViewInit(){let i=this.getCurrentItem();i&&(i.equipEffects=i.equipEffects.sort((e,t)=>(de.get(e.actionId)??999)-(de.get(t.actionId)??999)),this.itemSelected$.pipe(se(this.destroy$)).subscribe(e=>{this.resistances=i.resistance,this.maitrises=i.maitrise,this.weight=Gn(this.resistances,this.maitrises,i.level),e.forEach(t=>{t&&(this.resistances-=t.resistance,this.maitrises-=t.maitrise,this.weight=Gn(this.resistances,this.maitrises,t.level))}),this.loaded.set(!0),this.cdr.markForCheck()}),this.initItemChoosen(i),this.cdr.detectChanges())}setItem(i){let e=this.itemTypeService.getItemType(i.itemTypeId);e&&this.itemChooseService.setItem(e,i)}getTitle(i){return i?i.title[this.translateService.currentLang]:""}getBackgroundDifferentsStatsOnValue(i){return i>0?"green":i<0?"red":""}getBackgroundDifferentsStats(i){let e=this.actionsService.isAMalus(i.actionId);return i.value>0&&!e||i.value<0&&e||i.presentOnCurrentItem&&!i.presentOnEquippedItem&&!e?"green":i.value<0&&!e||i.value>0&&e||!i.presentOnCurrentItem&&i.presentOnEquippedItem&&e?"red":""}getByActionId(i,e){return this.listDifferentsStatsItem.find(t=>t.actionId===i&&t.isArmureRecue===e)}pushSetDifferentsStatsItem(i){i&&(this.listDifferentsStatsItem=this.listDifferentsStatsItem.filter(e=>e.actionId!==i.actionId||e.isArmureRecue!==i.isArmureRecue),this.listDifferentsStatsItem.push(i))}fillListCurrentItem(i){i.equipEffects.forEach(e=>{let t=this.ARMURE_DONNEE_RECUE.includes(e.actionId)&&e.params[4]===121,n=this.getByActionId(e.actionId,t);if(n){let r=n.params;r[0]+=e.params[0],n=Be(Fe({},n),{value:n.value+e.params[0],params:r,presentOnCurrentItem:!0})}else n={value:e.params[0],params:[...e.params],actionId:e.actionId,presentOnCurrentItem:!0,presentOnEquippedItem:!1,isArmureRecue:t};this.pushSetDifferentsStatsItem(n)})}fillMapDifferentStatsItem(i,e){i.equipEffects.forEach(t=>{let n=this.ARMURE_DONNEE_RECUE.includes(t.actionId)&&t.params[4]===121,r=this.getByActionId(t.actionId,n),h=e.equipEffects.find(_=>this.actionsService.isOpposed(_,t));if(h){let _=[...t.params];_[0]=h.params[0]+_[0],r={value:h.params[0]+t.params[0],params:_,actionId:h.actionId,presentOnCurrentItem:!0,presentOnEquippedItem:!0,isArmureRecue:n}}else if(r&&r.isArmureRecue===n){let _=r.params;_[0]-=t.params[0],r=Be(Fe({},r),{value:r.value-t.params[0],params:_,presentOnEquippedItem:!0})}else{let _=[...t.params];_[0]=-_[0],r={value:-t.params[0],params:_,actionId:t.actionId,presentOnCurrentItem:!1,presentOnEquippedItem:!0,isArmureRecue:n}}this.pushSetDifferentsStatsItem(r)}),this.calculDifferenceResistance()}calculDifferenceResistance(){let i=this.getByActionId(80,!1),e=[82,83,85,84];i&&e.find(t=>this.getByActionId(t,!1))&&(e.forEach(t=>{let n=this.getByActionId(t,!1);n?(n.params[0]+=i.params[0],n.value+=i.params[0],n.presentOnCurrentItem=!0,n.presentOnEquippedItem=!0):n=Be(Fe({},i),{actionId:t,presentOnCurrentItem:!0,presentOnEquippedItem:!0}),this.pushSetDifferentsStatsItem(n)}),this.listDifferentsStatsItem=this.listDifferentsStatsItem.filter(t=>t.actionId!==80))}getCurrentItem(){try{return this.item()}catch(i){return}}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-item-tooltip"]],inputs:{item:[1,"item"],indexItemChoosen:[1,"indexItemChoosen"]},features:[Pt],decls:14,vars:15,consts:[[1,"header"],[1,"content",3,"click"],[1,"column"],[1,"row"],[1,"title"],["alt","item",3,"src"],["alt","poids",3,"src"],["alt","Maitrises",3,"src"],["alt","Resistances",3,"src"],["appFallback","","alt","items",3,"src"],[3,"class"],["alt","aptitudes",3,"src"]],template:function(e,t){if(e&1&&(S(0,ca,9,14,"div",0),p(1,"div",1),y("click",function(){return t.setItem(t.item())}),p(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),g(6),u(),l(7,"img",5),u(),S(8,ma,2,0),u(),p(9,"span"),l(10,"img",6),g(11),m(12,"translate"),u()(),S(13,ua,3,0,"div"),u()),e&2){let n,r;x(t.loaded()?0:-1),a(5),Pe("color",t.colorRarityService.mapColors.get(t.item().rarity)),a(),le("",t.getTitle(t.item())," (",t.item().level,")"),a(),c("src",t.imageService.getItemUrl(t.item().idImage),O),a(),x((n=t.itemSelected())?8:-1,n),a(),ce(t.getBackgroundDifferentsStatsOnValue(t.weight)+" poids"),a(),c("src","aptitudes/poids.png",O),a(),le("",d(12,13,"item.poids")," ",t.weight," "),a(2),x((r=t.differentStatsItemList())?13:-1,r)}},dependencies:[I,Xe,wt,E,lt],styles:["[_nghost-%COMP%]{background:var(--gradient-panel);border-radius:15px;padding:5px;color:var(--color-text-inverse);height:fit-content;width:600px;display:flex;flex-direction:column;box-shadow:0 8px 8px var(--shadow-panel-color);position:relative}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{border-radius:10px;width:200px;display:flex;justify-content:space-around;align-items:center;margin:2px auto}[_nghost-%COMP%]   .green[_ngcontent-%COMP%]{background:var(--gradient-positive)}[_nghost-%COMP%]   .red[_ngcontent-%COMP%]{background:var(--gradient-negative)}[_nghost-%COMP%]   .green[_ngcontent-%COMP%], [_nghost-%COMP%]   .red[_ngcontent-%COMP%]{color:var(--color-surface-deepest)}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;border-bottom:3px solid var(--color-surface-soft);margin-bottom:10px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]{width:50px;height:50px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;cursor:pointer}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{width:50px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:space-around;cursor:pointer}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;align-items:center}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{margin-right:10px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;max-width:30%;flex-direction:column}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin:auto}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px;margin:auto}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;margin:2px 0;border-radius:20px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .poids[_ngcontent-%COMP%]{align-items:center;display:flex}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .poids[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:22px;height:22px;margin:0 10px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .poids[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   .iconComparator[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:10px;color:var(--color-text-muted-on-dark);background-color:var(--color-surface-muted-alt);border-radius:50%;cursor:pointer;border:5px solid var(--color-surface-deepest)}@media screen and (max-width:700px){[_nghost-%COMP%]{width:300px;font-size:12px}}@media screen and (max-width:700px){  .cdk-overlay-pane{transform:none!important}}"],changeDetection:1})};function ha(o,i){if(o&1&&l(0,"app-item-tooltip",0),o&2){let e=f().$index,t=f();c("item",t.item)("indexItemChoosen",e)}}function ga(o,i){if(o&1&&S(0,ha,1,2,"app-item-tooltip",0),o&2){let e=i.$index,t=f();x(t.itemsChoosen[e]!==void 0?0:-1)}}var Ln=class o{item;itemsChoosen=[];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-items-tooltip"]],inputs:{item:"item",itemsChoosen:"itemsChoosen"},decls:2,vars:0,consts:[[3,"item","indexItemChoosen"]],template:function(e,t){e&1&&F(0,ga,1,1,null,null,ke),e&2&&B(t.itemsChoosen)},dependencies:[Nn],encapsulation:2,changeDetection:1})};function fa(o,i){if(o&1&&(ze(0,"div"),g(1),Ge()),o&2){let e=f();a(),K(" ",e.definition()," ")}}var Un=class o{statesDefinitionService=s(Fn);translateService=s(Me);statesDefinitionId=0;nameStates="";definition(){let i=this.statesDefinitionService.findStatesDefinition(this.statesDefinitionId);if(i)return i.description[this.translateService.currentLang]}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-states"]],inputs:{statesDefinitionId:"statesDefinitionId",nameStates:"nameStates"},decls:4,vars:2,consts:[[1,"header"]],template:function(e,t){e&1&&(ze(0,"div",0)(1,"span"),g(2),Ge()(),S(3,fa,2,1,"div")),e&2&&(a(2),v(t.nameStates),a(),x(t.definition()?3:-1))},styles:["[_nghost-%COMP%]{background:var(--gradient-panel);border-radius:15px;padding:10px;color:var(--color-text-inverse);display:flex;flex-direction:column;box-shadow:0 8px 8px var(--shadow-panel-color);position:relative}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;border-bottom:3px solid var(--color-surface-soft);margin-bottom:10px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;margin:auto}"]})};function ba(o,i){if(o&1&&(p(0,"div",0)(1,"div",1)(2,"span"),g(3),u(),l(4,"img",2),u(),p(5,"div",3),l(6,"app-button-checkbox",4)(7,"app-button-checkbox",4)(8,"app-button-checkbox",4)(9,"app-button-checkbox",4),u()()),o&2){let e=f();a(3),v(e.nbElements()),a(),c("src",e.imageUrl(),O),a(2),c("control",e.form.controls.feu)("srcImg",e.imageService.getActionIdUrl(e.IdActionsEnum.MAITRISES_FEU)),a(),c("control",e.form.controls.eau)("srcImg",e.imageService.getActionIdUrl(e.IdActionsEnum.MAITRISES_EAU)),a(),c("control",e.form.controls.terre)("srcImg",e.imageService.getActionIdUrl(e.IdActionsEnum.MAITRISES_TERRE)),a(),c("control",e.form.controls.air)("srcImg",e.imageService.getActionIdUrl(e.IdActionsEnum.MAITRISES_AIR))}}var Vn=class o{item=Se();selector=Se("maitrise");imageService=s(j);IdActionsEnum=J;itemTypeService=s(et);itemChooseService=s(an);elementSelectorService=s(Yi);nbElements=Ee(()=>{let i=this.item();if(!i)return 0;let t=this.selector()==="maitrise"?jn:zn;return i.equipEffects.filter(r=>r.id===t).length});mapElements=Ee(()=>{let i=this.selector(),e=this.mapResistanceToActionId;return i==="maitrise"&&(e=this.mapElementMaitriseToActionId),e});imageUrl=Ee(()=>this.selector()==="maitrise"?this.imageService.getActionIdUrl(1068):this.imageService.getActionIdUrl(1069));mapElementMaitriseToActionId=new Map([["feu",122],["eau",124],["terre",123],["air",125]]);mapResistanceToActionId=new Map([["feu",82],["eau",83],["terre",84],["air",85]]);form=new Wi({feu:new _t(!1),eau:new _t(!1),air:new _t(!1),terre:new _t(!1)});constructor(){di(()=>{this.updateForm()}),this.form.valueChanges.subscribe(()=>{this.updateItemEffects()})}updateItemEffects(){let i=this.item(),e=this.nbElements(),t=this.selector();if(!i||e===0)return;let n=[...i.equipEffects],r=this.mapElements(),h=n.find(Y=>Y.id===(t==="maitrise"?jn:zn));for(let Y of r.values()){let ve=n.findIndex(ai=>ai.actionId===Y);ve!==-1&&n.splice(ve,1)}let _=[],P=[];for(let[Y,ve]of r.entries())this.form.get(Y).value?_.push({element:Y,actionId:ve}):P.push({element:Y,actionId:ve});let St=[..._,...P],oi=0;for(let Y of St)if(oi<e){let ve=Be(Fe({},h),{actionId:Y.actionId});n.push(ve),oi++}else break;n.sort((Y,ve)=>(de.get(Y.actionId)??999)-(de.get(ve.actionId)??999)),i.equipEffects=n,this.setItem(),this.elementSelectorService.setElementsForItem(i.id,St.slice(0,e).map(Y=>Y.actionId),t)}updateForm(){let i=this.item(),e=this.nbElements();if(!i||e===0)return;let t=this.mapElements(),n=0;for(let[r,h]of t.entries()){let _=this.form.get(r);if(n<e){let P=i.equipEffects.some(St=>St.actionId===h);_.setValue(P,{emitEvent:!1}),n+=P?1:0}else _.setValue(!1,{emitEvent:!1})}}setItem(){let i=this.itemTypeService.getItemType(this.item().itemTypeId);i&&this.itemChooseService.setItem(i,this.item(),!1)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-element-selector"]],inputs:{item:[1,"item"],selector:[1,"selector"]},decls:1,vars:1,consts:[[1,"content"],[1,"nbElements"],["alt","Nombre variable",3,"src"],[1,"elements"],[3,"control","srcImg"]],template:function(e,t){e&1&&S(0,ba,10,10,"div",0),e&2&&x(t.nbElements()>0?0:-1)},dependencies:[D],styles:[".content[_ngcontent-%COMP%]{display:flex;border:3px solid var(--color-border-strong);border-radius:10px;z-index:100;height:40px;background:var(--gradient-sidebar);padding:0 5px;margin:10px 0}.content[_ngcontent-%COMP%]   .nbElements[_ngcontent-%COMP%]{display:flex;font-weight:700;align-items:center;margin:auto;gap:10px}.content[_ngcontent-%COMP%]   .elements[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;margin:0 5px}.content[_ngcontent-%COMP%]   .elements[_ngcontent-%COMP%]   app-button-checkbox[_ngcontent-%COMP%]{margin:-5px}@media screen and (max-width:900px){.content[_ngcontent-%COMP%]{height:auto}.content[_ngcontent-%COMP%]   .elements[_ngcontent-%COMP%]{display:grid!important;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:2px;grid-row-gap:2px}}"]})};var _a=o=>({ratio:o}),va=(o,i)=>i.actionId;function ya(o,i){o&1&&(p(0,"div",5),g(1),u()),o&2&&(a(),K(" [ ",i,` ]
`))}function Ca(o,i){if(o&1&&(l(0,"img",23),g(1),m(2,"actions")),o&2){let e=f().$implicit,t=f(2);c("src",t.getEffectPng(e),O),a(),K(" ",d(2,2,e)," ")}}function ka(o,i){if(o&1){let e=fe();_i(0),p(1,"span",24),y("mouseenter",function(n){W(e);let r=yi(0),h=f(3);return Q(h.openStatesTooltip(n,r?.id??0,h.getStatesTranslate(r)))})("mouseleave",function(){W(e);let n=f(3);return Q(n.stateTooltipService.closeTooltip())}),g(2),u()}if(o&2){let e=f().$implicit,t=f(2),n=vi(t.statesService.findStates(e.params[0]));a(2),K(" ",t.getStatesTranslate(n)," ")}}function Sa(o,i){if(o&1&&(p(0,"p"),S(1,Ca,3,4)(2,ka,3,2,"span",22),u()),o&2){let e=i.$implicit,t=f(2);a(),x(e.actionId!==t.IdActionEnum.APPLIQUE_ETAT?1:2)}}function xa(o,i){if(o&1){let e=fe();p(0,"img",25),m(1,"translate"),y("click",function(){W(e);let n=f(2);return Q(n.navigateToCraftku())}),u()}if(o&2){let e=f(2);c("src",e.imageService.getItemUrl(71919810),O)("matTooltip",d(1,2,"item.craftable"))}}function Ia(o,i){if(o&1){let e=fe();p(0,"img",27),m(1,"translate"),y("click",function(){let n=W(e).$implicit,r=f(3);return Q(r.openEncyclopedieForMonster(n.idMob))}),u()}if(o&2){let e=i.$implicit,t=f(3);c("src",t.imageService.getMonsterUrl(e.gfxId),O)("matTooltip",`${d(1,2,"item.droppable")} (${t.nameMonster(e)})`)}}function Ea(o,i){if(o&1&&F(0,Ia,2,4,"img",26,ke),o&2){let e=f(2);B(e.item().mobDropable)}}function Ma(o,i){if(o&1){let e=fe();p(0,"img",29),m(1,"translate"),y("click",function(){let n=W(e).$implicit,r=f(3);return Q(r.openEncyclopedieForMonster(n.idMob))}),u()}if(o&2){let e=i.$implicit,t=f(3);c("src",t.imageService.getMonsterUrl(e.gfxId),O)("matTooltip",`${d(1,2,"item.boss-drop")} (${t.nameMonster(e)})`)}}function Oa(o,i){if(o&1&&F(0,Ma,2,4,"img",28,ke),o&2){let e=f(2);B(e.item().bossDropable)}}function Ta(o,i){if(o&1){let e=fe();p(0,"img",31),m(1,"translate"),y("click",function(){let n=W(e).$implicit,r=f(3);return Q(r.openEncyclopedieForMonster(n.idMob))}),u()}if(o&2){let e=i.$implicit,t=f(3);c("src",t.imageService.getMonsterUrl(e.gfxId),O)("matTooltip",`${d(1,2,"item.archi-drop")} (${t.nameMonster(e)})`)}}function Aa(o,i){if(o&1&&F(0,Ta,2,4,"img",30,ke),o&2){let e=f(2);B(e.item().archiDropable)}}function Pa(o,i){if(o&1&&(l(0,"img",19),m(1,"translate")),o&2){let e=f(2);c("src",e.imageService.getItemUrl(53124705),O)("matTooltip",d(1,2,"item.pvp"))}}function wa(o,i){if(o&1){let e=fe();p(0,"div",0)(1,"span"),l(2,"img",1),g(3),m(4,"translate"),u(),p(5,"span"),l(6,"img",2),g(7),m(8,"translate"),u(),p(9,"span",3),m(10,"translate"),l(11,"img",4),g(12),m(13,"translate"),u()(),S(14,ya,2,1,"div",5),p(15,"div",6),y("appActivate",function(){W(e);let n=f();return Q(n.setItemChoosen())}),p(16,"div",7)(17,"h3"),g(18),p(19,"div",8),l(20,"img",9),p(21,"span",10),m(22,"translate"),y("appActivate",function(){W(e);let n=f();return Q(n.copyToClipboard())}),l(23,"mat-icon",11),u()()(),l(24,"img",12),p(25,"span",13),y("appActivate",function(){W(e);let n=f();return Q(n.openEncyclopedie(n.item().id))}),l(26,"img",14),u()(),p(27,"div",15)(28,"div"),F(29,Sa,3,1,"p",null,va),u(),l(31,"app-element-selector",16)(32,"app-element-selector",16),p(33,"div",17),S(34,xa,2,4,"img",18),S(35,Ea,2,0),S(36,Oa,2,0),S(37,Aa,2,0),S(38,Pa,2,4,"img",19),u()(),p(39,"div",20),l(40,"app-favoris-button",21),u()()}if(o&2){let e,t=f();a(2),c("src",t.imageService.getActionIdUrl(t.IdActionEnum.MAITRISES_ELEMENTAIRES),O),a(),le("",d(4,29,"item.maitrises")," ",t.Math.trunc(t.item().maitrise)),a(3),c("src",t.imageService.getActionIdUrl(t.IdActionEnum.RESISTANCES_ELEMENTAIRE),O),a(),le("",d(8,31,"item.resistances")," ",t.item().resistance),a(2),c("matTooltip",ki(10,33,"item.poids-infobulle",Ci(40,_a,t.ratioWeight())))("matTooltipShowDelay",300),a(2),c("src","aptitudes/poids.png",O),a(),le("",d(13,36,"item.poids")," ",t.item().weight),a(2),x((e=t.textCondition())?14:-1,e),a(3),Pe("color",t.colorRarityService.mapColors.get(t.item().rarity)),a(),le(" ",t.getTitle()," (",t.item().level,") "),a(2),c("src",t.itemTypeService.getLogo(t.itemTypeService.getItemType(t.item().itemTypeId)),O),a(),c("matTooltip",d(22,38,"item.copier")),a(3),c("src",t.imageService.getItemUrl(t.item().idImage),O),a(5),B(t.item().equipEffects),a(2),c("item",t.item())("selector",t.ElementSelectorEnum.Maitrise),a(),c("item",t.item())("selector",t.ElementSelectorEnum.Resistance),a(2),x(t.item().isCraftable?34:-1),a(),x(t.item().mobDropable?35:-1),a(),x(t.item().bossDropable?36:-1),a(),x(t.item().archiDropable?37:-1),a(),x(t.item().isPvP?38:-1),a(2),c("item",t.item())}}function Ra(o,i){if(o&1){let e=fe();p(0,"mat-icon",33),y("mouseenter",function(n){W(e);let r=f(2);return Q(r.openTooltip(n,r.item()))})("mouseleave",function(){W(e);let n=f(2);return Q(n.tooltipService.closeTooltip())}),u()}}function Da(o,i){if(o&1&&S(0,Ra,1,0,"mat-icon",32),o&2){let e=f();x(e.itemIsPresentAndNotChoosen(i)?0:-1)}}var bo=class o extends mt{viewContainerRef=s(At);el=s(Z);itemService=s(tt);colorRarityService=s(Ze);tooltipService=s(Hn);stateTooltipService=s(Hn);cdr=s(V);itemConditionService=s(Dn);ElementSelectorEnum=Kn;ratioWeight=Ee(()=>{let i=this.item().level;return Si(i)});item=Se.required();isTooltip=Se(!1);condition=new he(void 0);condition$=this.condition.asObservable();textCondition=we(this.condition$.pipe(M(i=>i?.description[this.translateService.currentLang]??void 0)));constructor(){super()}navigateToCraftku(){window.open("https://craftkfu.waklab.fr/?"+this.item().id,"_blank")}setItemChoosen(){if(this.isTooltip())return;let i=this.itemTypeService.getItemType(this.item().itemTypeId);i&&this.itemChooseService.setItem(i,this.item())}itemIsPresentAndNotChoosen(i){return!!i.find(e=>e.find(t=>t!==void 0)&&!e.find(t=>t?.id===this.item().id))}ngAfterViewInit(){let i=this.item();if(i){i.equipEffects=i.equipEffects.sort((t,n)=>(de.get(t.actionId)??999)-(de.get(n.actionId)??999)),this.initItemChoosen(i);let e=this.itemConditionService.findCondition(i.id);e&&this.condition.next(e),this.cdr.detectChanges()}}nameMonster(i){return i.name[this.translateService.currentLang]??""}openTooltip(i,e){let t=i.pageX>window.screen.width/2;this.tooltipService.closeTooltip(),this.itemChoosen$.pipe(Le(1),M(n=>n.find(r=>r.find(h=>h)))).subscribe(n=>{this.tooltipService.openTooltip(this.viewContainerRef,Ln,i,{item:e,itemsChoosen:n},[{originX:t?"end":"center",originY:"bottom",overlayX:t?"end":"center",overlayY:"bottom",offsetY:0,offsetX:t?-this.el.nativeElement.offsetWidth:340}],!1)})}openEncyclopedie(i){window.open("https://www.wakfu.com/fr/mmorpg/encyclopedie/armures/"+i)}openEncyclopedieForMonster(i){window.open("https://www.wakfu.com/fr/mmorpg/encyclopedie/monstres/"+i)}copyToClipboard(){let i=this.item();navigator.clipboard.writeText(i.title[this.translateService.currentLang])}getStatesTranslate(i){if(!i)return"";let e=this.translateService.currentLang;return i[e].toString()??""}getTitle(){return this.item().title[this.translateService.currentLang]}openStatesTooltip(i,e,t){this.stateTooltipService.closeTooltip(),this.stateTooltipService.openTooltip(this.viewContainerRef,Un,i,{statesDefinitionId:e,nameStates:t},[{originX:"center",originY:"top",overlayX:"center",overlayY:"top",offsetY:20,offsetX:0}])}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["app-item"]],inputs:{item:[1,"item"],isTooltip:[1,"isTooltip"]},features:[Pt],decls:2,vars:2,consts:[[1,"header"],["alt","Maitrises",3,"src"],["alt","R\xE9sistances",3,"src"],[3,"matTooltip","matTooltipShowDelay"],["alt","poids",3,"src"],[1,"condition"],[1,"content",3,"appActivate"],[1,"title"],[1,"icon"],["alt","item type logo",3,"src"],[1,"imgContainer","fileCopy","cliquable",3,"appActivate","matTooltip"],["fontIcon","file_copy"],["alt","items","appFallback","",3,"src"],[1,"imgContainer","cliquable",3,"appActivate"],["src","aptitudes/Encyclop\xE9die.png","alt","Encyclop\xE9die"],[1,"effects"],[3,"item","selector"],[1,"craftAndDrop"],["alt","craftable",1,"craftable",3,"src","matTooltip"],["alt","pvp",3,"src","matTooltip"],[1,"favoris"],[3,"item"],[1,"appliqueEtat"],["alt","aptitudes",3,"src"],[1,"appliqueEtat",3,"mouseenter","mouseleave"],["alt","craftable",1,"craftable",3,"click","src","matTooltip"],["alt","droppable","appFallback","",1,"monster",3,"src","matTooltip"],["alt","droppable","appFallback","",1,"monster",3,"click","src","matTooltip"],["alt","boss drop","appFallback","",1,"monster",3,"src","matTooltip"],["alt","boss drop","appFallback","",1,"monster",3,"click","src","matTooltip"],["alt","archi drop","appFallback","",1,"monster",3,"src","matTooltip"],["alt","archi drop","appFallback","",1,"monster",3,"click","src","matTooltip"],["fontIcon","swap_horiz",1,"iconComparator"],["fontIcon","swap_horiz",1,"iconComparator",3,"mouseenter","mouseleave"]],template:function(e,t){if(e&1&&(S(0,wa,41,42),S(1,Da,1,1)),e&2){let n;x(t.item()?0:-1),a(),x((n=t.itemChoosen())?1:-1,n)}},dependencies:[Ei,Ii,I,Ye,$e,Xe,Vi,Vn,Xi,wt,Zi,E,lt],styles:["[_nghost-%COMP%]{background:var(--color-surface-mid);border-radius:15px;padding:5px;color:var(--color-text-inverse);height:100%;width:100%;display:flex;flex-direction:column;box-shadow:0 4px 4px var(--shadow-panel-color);position:relative}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{border-radius:10px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;border-bottom:3px solid var(--color-surface-soft);padding:3px 3px 10px;margin-bottom:10px;font-weight:var(--font-weight-title)}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;margin:auto}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:0 5px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]{width:50px;height:50px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;cursor:pointer;align-content:center}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{width:50px;height:50px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .imgContainer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{transform:scale(1.2)}[_nghost-%COMP%]   .condition[_ngcontent-%COMP%]{text-align:center;color:var(--color-danger);font-weight:bolder;margin-bottom:5px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:space-around;cursor:pointer}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{margin-right:10px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;max-width:30%;flex-direction:column}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin:auto}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-top:4px;display:flex;justify-content:center;align-items:center;flex-direction:row;margin-left:10px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;min-width:30px;min-height:30px;vertical-align:middle}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:30px;height:30px;cursor:pointer;align-content:center;color:var(--color-surface-muted);line-height:10px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:60px;height:60px;min-width:60px;min-height:60px;margin:auto;object-fit:contain;border-radius:8px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .cliquable[_ngcontent-%COMP%]:hover{transform:scale(1.2)}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0;border-radius:20px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px;width:24px;height:24px;min-width:24px;min-height:24px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .appliqueEtat[_ngcontent-%COMP%]{font-weight:var(--font-weight-title);text-decoration:underline}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .effects[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;font-weight:var(--font-weight-text)}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .effects[_ngcontent-%COMP%]   .craftAndDrop[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-around}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .effects[_ngcontent-%COMP%]   .craftAndDrop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px;min-width:60px;min-height:60px;object-fit:contain;flex:0 0 calc(33% - 10px);max-width:calc(33% - 10px)}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .effects[_ngcontent-%COMP%]   .craftAndDrop[_ngcontent-%COMP%]   .craftable[_ngcontent-%COMP%]{filter:drop-shadow(0px 0px 5px gold)}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .effects[_ngcontent-%COMP%]   .craftAndDrop[_ngcontent-%COMP%]   .monster[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .effects[_ngcontent-%COMP%]   .craftAndDrop[_ngcontent-%COMP%]   .craftable[_ngcontent-%COMP%]:hover{transform:scale(1.2)}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .favoris[_ngcontent-%COMP%]{position:absolute;top:60px;right:10px}[_nghost-%COMP%]   .iconComparator[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:10px;color:var(--color-text-muted-on-dark);background-color:var(--color-surface-muted-alt);border-radius:50%;cursor:pointer;border:5px solid var(--color-surface-deepest)}@media screen and (min-width:2000px)and (max-width:2100px){[_nghost-%COMP%]{max-width:95%}}@media screen and (max-width:900px){[_nghost-%COMP%]{max-width:90%;margin:auto}[_nghost-%COMP%]   .fileCopy[_ngcontent-%COMP%]{display:none!important}[_nghost-%COMP%]   .craftAndDrop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px!important;height:40px!important;min-width:40px!important;min-height:40px!important}[_nghost-%COMP%]   .craftAndDrop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(n+4){display:none!important}}@media screen and (max-width:500px){[_nghost-%COMP%]{max-width:min(280px,90%);margin:auto}}"],changeDetection:1})};export{Dn as a,Fn as b,bo as c,Rn as d,no as e,ae as f,ao as g,Yn as h,ro as i,Cn as j,kn as k,Sn as l,wn as m,go as n,fo as o};
