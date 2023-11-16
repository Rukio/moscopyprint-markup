(function(t){"use strict";var e=[],i=[],s={};Array.prototype.insert=function(t,e){this.splice(t,0,e)},s.passwordListener=function(i,s){var o=""==s.passwordField?".disabledAutoFillPassword":s.passwordField;i.find("[type=password]").length>0&&i.find("[type=password]").attr("type","text").addClass("disabledAutoFillPassword"),i.on("keyup",o,function(){for(var i=t(this).val(),o=i.length,n=this.selectionStart,a=0;a<o;a++)"*"!=i[a]&&(e[a]=i[a]);if(o<e.length){var l=e.length-o,r=event.keyCode||event.charCode;8==r||46==r?e.splice(n,l):(e.splice(n-1,l+1),e.insert(n-1,i[n-1]))}t(this).val(i.replace(/./g,"*")),s.debugMode&&(console.log("Current keyup position: "+n),console.log("Password length: "+o),console.log("Real password:"),console.log(e))})},s.formSubmitListener=function(e,i){var o=""==i.submitButton?".disableAutoFillSubmit":i.submitButton;e.on("click",o,function(n){s.restoreInput(e,i),i.callback.call()&&(i.debugMode?console.log(e.serialize()):i.html5FormValidate?(t(o).attr("type","submit").trigger("submit"),setTimeout(function(){t(o).attr("type","button")},1e3)):e.submit())})},s.randomizeInput=function(e,s){e.find("input").each(function(e){i[e]=t(this).attr("name"),t(this).attr("name",Math.random().toString(36).replace(/[^a-z]+/g,""))})},s.restoreInput=function(s,o){o.randomizeInputName&&s.find("input").each(function(e){t(this).attr("name",i[e])}),o.textToPassword&&s.find(o.passwordField).attr("type","password"),s.find(o.passwordField).val(e.join(""))},t.fn.disableAutoFill=function(e){var i=t.extend({},t.fn.disableAutoFill.defaults,e);this.attr("autocomplete","off"),this.find("[type=submit]").length>0&&this.find("[type=submit]").addClass("disableAutoFillSubmit").attr("type","button"),""!=i.submitButton&&this.find(i.submitButton).addClass("disableAutoFillSubmit").attr("type","button"),i.randomizeInputName&&s.randomizeInput(this,i),s.passwordListener(this,i),s.formSubmitListener(this,i)},t.fn.disableAutoFill.defaults={debugMode:!1,textToPassword:!0,randomizeInputName:!0,passwordField:"",html5FormValidate:!1,submitButton:"",callback:function(){return!0}}})(jQuery);
