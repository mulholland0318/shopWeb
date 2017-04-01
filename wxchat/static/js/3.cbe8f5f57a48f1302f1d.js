webpackJsonp([3],{680:function(e,t,i){i(823),i(824);var r=i(1)(i(746),i(886),"data-v-50bc9408",null);e.exports=r.exports},687:function(e,t,i){"use strict";function r(e){if("string"!=typeof e)throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},688:function(e,t,i){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];for(var i in t)void 0===e[i]&&(e[i]=t[i]);return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},689:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(198),n=i.n(r),a=i(140),o=i(200),l=i.n(o),s=i(93),u=i.n(s),c=i(698),d=i.n(c),p=i(700),h=i.n(p),f=i(690),m={email:{fn:d.a,msg:"邮箱格式"},"china-mobile":{fn:function(e){return h()(e,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(e){return e.length>=2&&e.length<=6},msg:"中文姓名"}};t.default={created:function(){var e=this;this.currentValue=this.value||"",this.title||this.placeholder||this.currentValue||console.warn("no title and no placeholder?"),this.required&&!this.currentValue&&(this.valid=!1),this.handleChangeEvent=!0,this.debounce&&(this._debounce=i.i(f.a)(function(){e.$emit("on-change",e.currentValue)},this.debounce))},mounted:function(){this.$slots&&this.$slots["restricted-label"]&&(this.hasRestrictedLabel=!0)},beforeDestroy:function(){this._debounce&&this._debounce.cancel()},mixins:[a.a],components:{Icon:l.a,InlineDesc:u.a},props:{required:{type:Boolean,default:!1},title:{type:String,default:""},type:{type:String,default:"text"},placeholder:String,value:[String,Number],name:String,readonly:Boolean,disabled:Boolean,keyboard:String,inlineDesc:String,isType:[String,Function],min:Number,max:Number,showClear:{type:Boolean,default:!0},equalWith:String,textAlign:String,autocomplete:{type:String,default:"off"},autocapitalize:{type:String,default:"off"},autocorrect:{type:String,default:"off"},spellcheck:{type:String,default:"false"},novalidate:{type:Boolean,default:!1},iconType:String,debounce:Number,placeholderAlign:String},computed:{labelStyles:function(){return{width:this.$parent.labelWidth||this.labelWidth+"em",textAlign:this.$parent.labelAlign,marginRight:this.$parent.labelMarginRight}},pattern:function(){if("number"===this.keyboard||"china-mobile"===this.isType)return"[0-9]*"},labelWidth:function(){return this.title.replace(/[^x00-xff]/g,"00").length/2+1},hasErrors:function(){return n()(this.errors).length>0},inputStyle:function(){if(this.textAlign)return{textAlign:this.textAlign}}},methods:{reset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.dirty=!1,this.currentValue=e,this.firstError="",this.valid=!0},clear:function(){this.currentValue="",this.$refs.input.focus()},focus:function(){this.$refs.input.focus()},focusHandler:function(){this.$emit("on-focus",this.currentValue)},blur:function(){this.setTouched(),this.validate(),this.$emit("on-blur",this.currentValue)},getError:function(){var e=n()(this.errors)[0];this.firstError=this.errors[e]},validate:function(){if(void 0!==this.equalWith)return void this.validateEqual();if(this.errors={},!this.currentValue&&!this.required)return void(this.valid=!0);if(!this.currentValue&&this.required)return this.valid=!1,this.errors.required="必填哦",void this.getError();if("string"==typeof this.isType){var e=m[this.isType];if(e){if(this.valid=e.fn(this.currentValue),!this.valid)return void(this.errors.format=e.msg+"格式不对哦~");delete this.errors.format}}if("function"==typeof this.isType){var t=this.isType(this.currentValue);if(this.valid=t.valid,!this.valid)return this.errors.format=t.msg,this.forceShowError=!0,void(this.firstError||this.getError());delete this.errors.format}if(this.min){if(this.currentValue.length<this.min)return this.errors.min="最少应该输入"+this.min+"个字符哦",this.valid=!1,void(this.firstError||this.getError());delete this.errors.min}if(this.max){if(this.currentValue.length>this.max)return this.errors.max="最多可以输入"+this.max+"个字符哦",this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){return!this.equalWith&&this.currentValue?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.dirty||this.currentValue.length>=this.equalWith.length)&&this.currentValue!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):void(!this.currentValue&&this.required?this.valid=!1:(this.valid=!0,delete this.errors.equal))}},data:function(){return{hasRestrictedLabel:!1,firstError:"",forceShowError:!1,hasLengthEqual:!1,valid:!0,currentValue:""}},watch:{valid:function(){this.getError()},value:function(e){this.currentValue=e},equalWith:function(e){e&&this.equalWith?(e.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()},currentValue:function(e){!this.equalWith&&e&&this.validateEqual(),e&&this.equalWith?(e.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate(),this.$emit("input",e),this._debounce?this._debounce():this.$emit("on-change",e)}}}},690:function(e,t,i){"use strict";var r=i(693),n=i.n(r);t.a=n.a},691:function(e,t,i){t=e.exports=i(659)(!1),t.push([e.i,'.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:15px}.weui-cells{margin-top:1.17647059em;background-color:#fff;line-height:1.41176471;font-size:17px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.weui-cell__bd{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.weui-label{display:block;width:105px;word-wrap:break-word;word-break:break-all}.weui-input{width:100%;border:0;outline:0;-webkit-appearance:none;background-color:transparent;font-size:inherit;color:inherit;height:1.41176471em;line-height:1.41176471}.weui-input::-webkit-inner-spin-button,.weui-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.weui-textarea{display:block;border:0;resize:none;width:100%;color:inherit;font-size:1em;line-height:inherit;outline:0}.weui-textarea-counter{color:#b2b2b2;text-align:right}.weui-cell_warn .weui-textarea-counter{color:#e64340}.weui-toptips{display:none;position:fixed;-webkit-transform:translateZ(0);transform:translateZ(0);top:0;left:0;right:0;padding:5px;font-size:14px;text-align:center;color:#fff;z-index:5000;word-wrap:break-word;word-break:break-all}.weui-toptips_warn{background-color:#e64340}.weui-cells_form .weui-cell__ft{font-size:0}.weui-cells_form .weui-icon-warn{display:none}.weui-cells_form input,.weui-cells_form label[for],.weui-cells_form textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-cell_warn{color:#e64340}.weui-cell_warn .weui-icon-warn{display:inline-block}.weui-cell_vcode{padding-top:0;padding-right:0;padding-bottom:0}.weui-vcode-btn,.weui-vcode-img{margin-left:5px;height:44px;vertical-align:middle}.weui-vcode-btn{display:inline-block;padding:0 .6em 0 .7em;border-left:1px solid #e5e5e5;line-height:44px;font-size:17px;color:#3cc51f}button.weui-vcode-btn{background-color:transparent;border-top:0;border-right:0;border-bottom:0;outline:0}.weui-vcode-btn:active{color:#52a341}.vux-x-input .vux-x-input-placeholder-right input::-webkit-input-placeholder{text-align:right}.vux-x-input .vux-x-input-placeholder-center input::-webkit-input-placeholder{text-align:center}.vux-input-icon.vux-input-icon,.vux-input-icon.weui-icon-success:before,.vux-input-icon.weui-icon-warn:before{font-size:21px}.vux-x-input .weui-icon{padding-left:5px}.vux-x-input.weui-cell_vcode{padding-top:0;padding-right:0;padding-bottom:0}',""])},692:function(e,t,i){var r=i(691);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(660)("88698392",r,!0)},693:function(e,t,i){(function(t){function i(e,t,i){function n(t){var i=m,r=v;return m=v=void 0,k=t,b=e.apply(r,i)}function a(e){return k=e,g=setTimeout(c,t),F?n(e):b}function s(e){var i=e-$,r=e-k,n=t-i;return C?y(n,x-r):n}function u(e){var i=e-$,r=e-k;return void 0===$||i>=t||i<0||C&&r>=x}function c(){var e=_();if(u(e))return d(e);g=setTimeout(c,s(e))}function d(e){return g=void 0,E&&m?n(e):(m=v=void 0,b)}function p(){void 0!==g&&clearTimeout(g),k=0,m=$=v=g=void 0}function h(){return void 0===g?b:d(_())}function f(){var e=_(),i=u(e);if(m=arguments,v=this,$=e,i){if(void 0===g)return a($);if(C)return g=setTimeout(c,t),n($)}return void 0===g&&(g=setTimeout(c,t)),b}var m,v,x,b,g,$,k=0,F=!1,C=!1,E=!0;if("function"!=typeof e)throw new TypeError(l);return t=o(t)||0,r(i)&&(F=!!i.leading,C="maxWait"in i,x=C?w(o(i.maxWait)||0,t):x,E="trailing"in i?!!i.trailing:E),f.cancel=p,f.flush=h,f}function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function n(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||n(e)&&g.call(e)==u}function o(e){if("number"==typeof e)return e;if(a(e))return s;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var i=p.test(e);return i||h.test(e)?f(e.slice(2),i?2:8):d.test(e)?s:+e}var l="Expected a function",s=NaN,u="[object Symbol]",c=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,h=/^0o[0-7]+$/i,f=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,x=m||v||Function("return this")(),b=Object.prototype,g=b.toString,w=Math.max,y=Math.min,_=function(){return x.Date.now()};e.exports=i}).call(t,i(62))},695:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-x-input weui-cell",class:{"weui-cell_warn":!e.valid}},[i("div",{staticClass:"weui-cell__hd"},[e.hasRestrictedLabel?i("div",{style:e.labelStyles},[e._t("restricted-label")],2):e._e(),e._v(" "),e._t("label",[e.title?i("label",{staticClass:"weui-label",style:{width:e.$parent.labelWidth||e.labelWidth+"em",textAlign:e.$parent.labelAlign,marginRight:e.$parent.labelMarginRight},domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),e.inlineDesc?i("inline-desc",[e._v(e._s(e.inlineDesc))]):e._e()])],2),e._v(" "),i("div",{staticClass:"weui-cell__bd weui-cell__primary",class:e.placeholderAlign?"vux-x-input-placeholder-"+e.placeholderAlign:""},[e.type&&"text"!==e.type?e._e():i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:e.inputStyle,attrs:{maxlength:e.max,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,spellcheck:e.spellcheck,type:"text",name:e.name,pattern:e.pattern,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:e.focusHandler,blur:e.blur,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}),e._v(" "),"number"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:e.inputStyle,attrs:{maxlength:e.max,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,spellcheck:e.spellcheck,type:"number",name:e.name,pattern:e.pattern,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:e.focusHandler,blur:[e.blur,function(t){e.$forceUpdate()}],input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"email"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:e.inputStyle,attrs:{maxlength:e.max,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,spellcheck:e.spellcheck,type:"email",name:e.name,pattern:e.pattern,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:e.focusHandler,blur:e.blur,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"password"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:e.inputStyle,attrs:{maxlength:e.max,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,spellcheck:e.spellcheck,type:"password",name:e.name,pattern:e.pattern,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:e.focusHandler,blur:e.blur,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"tel"===e.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:e.inputStyle,attrs:{maxlength:e.max,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,spellcheck:e.spellcheck,type:"tel",name:e.name,pattern:e.pattern,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:e.focusHandler,blur:e.blur,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e()]),e._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("icon",{directives:[{name:"show",rawName:"v-show",value:!e.equalWith&&e.showClear&&e.currentValue&&!e.readonly&&!e.disabled,expression:"!equalWith && showClear && currentValue && !readonly && !disabled"}],attrs:{type:"clear"},nativeOn:{click:function(t){e.clear(t)}}}),e._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:!e.novalidate&&!e.equalWith&&(e.touched&&!e.valid&&e.firstError||e.forceShowError&&!e.valid&&e.firstError),expression:"!novalidate && !equalWith && ((touched && !valid && firstError) || (forceShowError && !valid && firstError))"}],staticClass:"vux-input-icon",attrs:{type:"warn",title:e.valid?"":e.firstError}}),e._v(" "),!e.novalidate&&e.hasLengthEqual&&e.dirty&&e.equalWith&&!e.valid?i("icon",{staticClass:"vux-input-icon",attrs:{type:"warn"}}):e._e(),e._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:!e.novalidate&&e.equalWith&&e.equalWith===e.currentValue&&e.valid,expression:"!novalidate && equalWith && equalWith === currentValue && valid"}],attrs:{type:"success"}}),e._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:e.novalidate&&"success"===e.iconType,expression:"novalidate && iconType === 'success'"}],staticClass:"vux-input-icon",attrs:{type:"success"}}),e._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:e.novalidate&&"error"===e.iconType,expression:"novalidate && iconType === 'error'"}],staticClass:"vux-input-icon",attrs:{type:"warn"}}),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},696:function(e,t,i){i(692);var r=i(1)(i(689),i(695),null,null);e.exports=r.exports},697:function(e,t,i){"use strict";function r(e,t){(0,o.default)(e);var i=void 0,r=void 0;"object"===(void 0===t?"undefined":n(t))?(i=t.min||0,r=t.max):(i=arguments[1],r=arguments[2]);var a=encodeURI(e).split(/%..|./).length-1;return a>=i&&(void 0===r||a<=r)}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=r;var a=i(687),o=function(e){return e&&e.__esModule?e:{default:e}}(a);e.exports=t.default},698:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if((0,o.default)(e),t=(0,s.default)(t,h),t.require_display_name||t.allow_display_name){var i=e.match(f);if(i)e=i[1];else if(t.require_display_name)return!1}var r=e.split("@"),n=r.pop(),a=r.join("@"),l=n.toLowerCase();if("gmail.com"!==l&&"googlemail.com"!==l||(a=a.replace(/\./g,"").toLowerCase()),!(0,c.default)(a,{max:64})||!(0,c.default)(n,{max:256}))return!1;if(!(0,p.default)(n,{require_tld:t.require_tld}))return!1;if('"'===a[0])return a=a.slice(1,a.length-1),t.allow_utf8_local_part?b.test(a):v.test(a);for(var u=t.allow_utf8_local_part?x:m,d=a.split("."),g=0;g<d.length;g++)if(!u.test(d[g]))return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=i(687),o=r(a),l=i(688),s=r(l),u=i(697),c=r(u),d=i(699),p=r(d),h={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},f=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,m=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,v=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,x=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,b=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;e.exports=t.default},699:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){(0,o.default)(e),t=(0,s.default)(t,u),t.allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));var i=e.split(".");if(t.require_tld){var r=i.pop();if(!i.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(r))return!1}for(var n,a=0;a<i.length;a++){if(n=i[a],t.allow_underscores&&(n=n.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(n))return!1;if(/[\uff01-\uff5e]/.test(n))return!1;if("-"===n[0]||"-"===n[n.length-1])return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=i(687),o=r(a),l=i(688),s=r(l),u={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};e.exports=t.default},700:function(e,t,i){"use strict";function r(e,t){return(0,a.default)(e),t in o&&o[t].test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=i(687),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o={"ar-DZ":/^(\+?213|0)(5|6|7)\d{8}$/,"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"ar-SA":/^(!?(\+?966)|0)?5\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"da-DK":/^(\+?45)?(\d{8})$/,"el-GR":/^(\+?30)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[789]\d{9}$/,"en-NG":/^(\+?234|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"he-IL":/^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"it-IT":/^(\+?39)?\s?3\d{2} ?\d{6,7}$/,"ja-JP":/^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nl-BE":/^(\+?32|0)4?\d{8}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pl-PL":/^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ro-RO":/^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,"en-PK":/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"sr-RS":/^(\+3816|06)[- \d]{5,9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?1[345789]\d{9}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};o["en-CA"]=o["en-US"],o["fr-BE"]=o["nl-BE"],o["zh-HK"]=o["en-HK"],e.exports=t.default},746:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(696),n=i.n(r),a=i(92),o=i.n(a),l=i(197),s=i.n(l),u=i(139),c=i.n(u),d=i(211),p=i.n(d),h=i(71),f=i.n(h),m=i(199),v=i.n(m);t.default={name:"user-profile",components:{XInput:n.a,Group:o.a,XButton:s.a,Cell:c.a,Datetime:p.a,Scroller:f.a},data:function(){return{time:60,inCountdown:!1,sex:"m",birthday:"2000-01-01",phone:"",captcha:"",pwd:""}},mounted:function(){this.sex=this.user.sex||"m",this.birthday=this.user.birthday||"2000-01-01"},methods:{setPwdConfirm:function(){var e=this;this.$router.push(this.$route.fullPath+"#confirm"),window.StatusBar&&window.StatusBar.backgroundColorByHexString("#5c201a"),this.$vux.confirm.show({title:"请先设置密码",confirmText:"设置",cancelText:"取消",content:"设置密码后可修改手机号",onConfirm:function(){return e.$router.replace("/user/setpwd")},onCancel:function(){return e.$router.go(-1)}})},getIdentify:function(){var e=this;return v()(this.phone,"zh-CN")?this.phone===this.user.phone?void this.toast("请勿重复绑定"):(this.inCountdown=!0,this.countdown(),void this.$http.post("/webaction/findCaptcha.do").type("form").send({idphone:this.phone}).then(function(t){0===t.body.success?e.toast("验证码发送成功"):e.toast(t.body.msg)}).catch(this.handleError)):void this.toast("请输入正确的手机号")},countdown:function(){this.time>1&&this.inCountdown===!0?(this.time-=1,setTimeout(this.countdown,1e3)):(this.inCountdown=!1,this.time=60)},editUser:function(){var e=this;return this.phone&&!this.captcha?void this.toast("请输入短信验证码"):this.phone&&!this.pwd?void this.toast("请输入当前密码"):void this.$http.post("/wxaction/editUserInfo").type("form").send({sex:this.sex,birthday:this.birthday,userPhone:this.phone,captcha:this.captcha,userPassword:this.pwd}).then(function(t){if(0===t.body.success){e.toast("保存成功");var i=e.user;i.sex=e.sex,i.birthday=e.birthday,e.phone&&(i.phone=e.phone),e.$store.commit("USER",i),e.$router.go(-1)}else e.toast(t.body.msg||"出错了")}).catch(this.handleError)}}}},776:function(e,t,i){t=e.exports=i(659)(!1),t.push([e.i,".person-profile .vux-no-group-title{margin-top:0}.person-profile .weui-cell{padding:13px 15px}.person-profile .weui-input{text-align:right}",""])},777:function(e,t,i){t=e.exports=i(659)(!1),t.push([e.i,".content[data-v-50bc9408]{min-height:auto}.headimg[data-v-50bc9408]{width:66px;height:66px;border-radius:33px}.sex[data-v-50bc9408]{margin-left:4px;position:relative;top:-4px}.save[data-v-50bc9408]{width:90%!important;margin-top:20px}",""])},823:function(e,t,i){var r=i(776);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(660)("458f314b",r,!0)},824:function(e,t,i){var r=i(777);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(660)("a20d4b62",r,!0)},886:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mdc person-profile"},[r("scroller",{attrs:{"lock-x":"lock-x",height:e.isWeixin?"-0":"-46"}},[r("div",{staticClass:"content"},[r("group",[r("cell",{attrs:{title:"头像"},nativeOn:{click:function(t){e.toast("头像及昵称与微信同步")}}},[e.user.headImgUrl?r("img",{staticClass:"headimg",attrs:{src:e.user.headImgUrl}}):r("img",{staticClass:"headimg",attrs:{src:i(210)}})]),r("x-input",{attrs:{title:"昵称",placeholder:e.user.nickName,disabled:!0},nativeOn:{click:function(t){e.toast("头像及昵称与微信同步")}}}),r("cell",{attrs:{title:"性别"}},[r("span",{staticClass:"checkbox",class:{active:"m"===e.sex},on:{click:function(t){e.sex="m"}}},[r("span",{staticClass:"sex"},[e._v("男")])]),r("span",{staticClass:"checkbox",class:{active:"f"===e.sex},on:{click:function(t){e.sex="f"}}},[r("span",{staticClass:"sex"},[e._v("女")])])]),r("datetime",{attrs:{format:"YYYY-MM-DD","min-year":1900,"year-row":"{value}年","month-row":"{value}月","day-row":"{value}日",title:"生日","confirm-text":"确认","cancel-text":"取消"},model:{value:e.birthday,callback:function(t){e.birthday=t},expression:"birthday"}}),e.user.pas?r("x-input",{attrs:{title:"手机号",placeholder:e.user.phone},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}):r("x-input",{attrs:{title:"手机号",placeholder:e.user.phone,disabled:"disabled"},nativeOn:{click:function(t){e.setPwdConfirm(t)}}}),r("x-input",{directives:[{name:"show",rawName:"v-show",value:e.phone,expression:"phone"}],attrs:{title:"验证码"},model:{value:e.captcha,callback:function(t){e.captcha=t},expression:"captcha"}},[r("x-button",{attrs:{type:"primary",mini:"mini",disabled:e.inCountdown||11!==e.phone.length},nativeOn:{click:function(t){e.getIdentify(t)}},slot:"right"},[e._v(e._s(e.inCountdown?e.time+"秒后重试":"发送验证码"))])],1),r("x-input",{directives:[{name:"show",rawName:"v-show",value:e.phone,expression:"phone"}],attrs:{type:"password",title:"密码",placeholder:"请输入用户当前密码"},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}})],1),r("x-button",{staticClass:"save",attrs:{type:"primary"},nativeOn:{click:function(t){e.editUser(t)}}},[e._v("保存")])],1)])],1)},staticRenderFns:[]}}});