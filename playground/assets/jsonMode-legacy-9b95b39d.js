System.register(["./index-legacy-f14b2b37.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.m}],execute:function(){e({fromPosition:lt,fromRange:ht,setupMode:function(e){const t=[],n=[],r=new oe(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);function o(){const{languageId:t,modeConfiguration:r}=e;var o;Gt(n),r.documentFormattingEdits&&n.push(u.languages.registerDocumentFormattingEditProvider(t,new Et(i))),r.documentRangeFormattingEdits&&n.push(u.languages.registerDocumentRangeFormattingEditProvider(t,new At(i))),r.completionItems&&n.push(u.languages.registerCompletionItemProvider(t,new gt(i,[" ",":",'"']))),r.hovers&&n.push(u.languages.registerHoverProvider(t,new vt(i))),r.documentSymbols&&n.push(u.languages.registerDocumentSymbolProvider(t,new Ct(i))),r.tokens&&n.push(u.languages.setTokensProvider(t,(o=!0,{getInitialState:()=>new Bt(null,null,!1,null),tokenize:(e,t)=>function(e,t,n,r=0){let i=0,o=!1;switch(n.scanError){case 2:t='"'+t,i=1;break;case 1:t="/*"+t,i=2}const a=Mt(t);let s=n.lastWasColon,c=n.parents;const u={tokens:[],endState:n.clone()};for(;;){let d=r+a.getPosition(),g="";const l=a.scan();if(17===l)break;if(d===r+a.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(a.getPosition(),3));switch(o&&(d-=i),o=i>0,l){case 1:c=Xt.push(c,0),g=Lt,s=!1;break;case 2:c=Xt.pop(c),g=Lt,s=!1;break;case 3:c=Xt.push(c,1),g=Ft,s=!1;break;case 4:c=Xt.pop(c),g=Ft,s=!1;break;case 6:g=Ot,s=!0;break;case 5:g=Nt,s=!1;break;case 8:case 9:g=Wt,s=!1;break;case 7:g=Ut,s=!1;break;case 10:const e=1===(c?c.type:0);g=s||e?Vt:Kt,s=!1;break;case 11:g=Ht,s=!1}if(e)switch(l){case 12:g=qt;break;case 13:g=zt}u.endState=new Bt(n.getStateData(),a.getTokenError(),s,c),u.tokens.push({startIndex:d,scopes:g})}return u}(o,e,t)}))),r.colors&&n.push(u.languages.registerColorProvider(t,new St(i))),r.foldingRanges&&n.push(u.languages.registerFoldingRangeProvider(t,new Tt(i))),r.diagnostics&&n.push(new $t(t,i,e)),r.selectionRanges&&n.push(u.languages.registerSelectionRangeProvider(t,new Rt(i)))}o(),t.push(u.languages.setLanguageConfiguration(e.languageId,Jt));let a=e.modeConfiguration;return e.onDidChange((e=>{e.modeConfiguration!==a&&(a=e.modeConfiguration,o())})),t.push(Qt(n)),Qt(t)},toRange:ft,toTextEdit:mt});
/*!-----------------------------------------------------------------------------
       * Copyright (c) Microsoft Corporation. All rights reserved.
       * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
       * Released under the MIT license
       * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
       *-----------------------------------------------------------------------------*/
var t,r,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,c=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let c of a(t))s.call(e,c)||c===n||i(e,c,{get:()=>t[c],enumerable:!(r=o(t,c))||r.enumerable});return e},u={};c(u,t=n,"default"),r&&c(r,t,"default");var d,g,l,h,f,p,m,v,_,b,k,w,C,y,E,A,x,I,S,T,R,D,P,j,M,L,F,O,N,W,U,V,H,K,z,q,X,B,$,Q,G,J,Y,Z,ee,te,ne,re,ie,oe=e("WorkerManager",class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=u.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}});(g=d||(d={})).MIN_VALUE=-2147483648,g.MAX_VALUE=2147483647,(h=l||(l={})).MIN_VALUE=0,h.MAX_VALUE=2147483647,(p=f||(f={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=l.MAX_VALUE),t===Number.MAX_VALUE&&(t=l.MAX_VALUE),{line:e,character:t}},p.is=function(e){var t=e;return ot.objectLiteral(t)&&ot.uinteger(t.line)&&ot.uinteger(t.character)},(v=m||(m={})).create=function(e,t,n,r){if(ot.uinteger(e)&&ot.uinteger(t)&&ot.uinteger(n)&&ot.uinteger(r))return{start:f.create(e,t),end:f.create(n,r)};if(f.is(e)&&f.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},v.is=function(e){var t=e;return ot.objectLiteral(t)&&f.is(t.start)&&f.is(t.end)},(b=_||(_={})).create=function(e,t){return{uri:e,range:t}},b.is=function(e){var t=e;return ot.defined(t)&&m.is(t.range)&&(ot.string(t.uri)||ot.undefined(t.uri))},(w=k||(k={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},w.is=function(e){var t=e;return ot.defined(t)&&m.is(t.targetRange)&&ot.string(t.targetUri)&&(m.is(t.targetSelectionRange)||ot.undefined(t.targetSelectionRange))&&(m.is(t.originSelectionRange)||ot.undefined(t.originSelectionRange))},(y=C||(C={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},y.is=function(e){var t=e;return ot.numberRange(t.red,0,1)&&ot.numberRange(t.green,0,1)&&ot.numberRange(t.blue,0,1)&&ot.numberRange(t.alpha,0,1)},(A=E||(E={})).create=function(e,t){return{range:e,color:t}},A.is=function(e){var t=e;return m.is(t.range)&&C.is(t.color)},(I=x||(x={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},I.is=function(e){var t=e;return ot.string(t.label)&&(ot.undefined(t.textEdit)||K.is(t))&&(ot.undefined(t.additionalTextEdits)||ot.typedArray(t.additionalTextEdits,K.is))},(T=S||(S={})).Comment="comment",T.Imports="imports",T.Region="region",(D=R||(R={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return ot.defined(n)&&(o.startCharacter=n),ot.defined(r)&&(o.endCharacter=r),ot.defined(i)&&(o.kind=i),o},D.is=function(e){var t=e;return ot.uinteger(t.startLine)&&ot.uinteger(t.startLine)&&(ot.undefined(t.startCharacter)||ot.uinteger(t.startCharacter))&&(ot.undefined(t.endCharacter)||ot.uinteger(t.endCharacter))&&(ot.undefined(t.kind)||ot.string(t.kind))},(j=P||(P={})).create=function(e,t){return{location:e,message:t}},j.is=function(e){var t=e;return ot.defined(t)&&_.is(t.location)&&ot.string(t.message)},(L=M||(M={})).Error=1,L.Warning=2,L.Information=3,L.Hint=4,(O=F||(F={})).Unnecessary=1,O.Deprecated=2,(N||(N={})).is=function(e){var t=e;return null!=t&&ot.string(t.href)},(U=W||(W={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return ot.defined(n)&&(a.severity=n),ot.defined(r)&&(a.code=r),ot.defined(i)&&(a.source=i),ot.defined(o)&&(a.relatedInformation=o),a},U.is=function(e){var t,n=e;return ot.defined(n)&&m.is(n.range)&&ot.string(n.message)&&(ot.number(n.severity)||ot.undefined(n.severity))&&(ot.integer(n.code)||ot.string(n.code)||ot.undefined(n.code))&&(ot.undefined(n.codeDescription)||ot.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(ot.string(n.source)||ot.undefined(n.source))&&(ot.undefined(n.relatedInformation)||ot.typedArray(n.relatedInformation,P.is))},(H=V||(V={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return ot.defined(n)&&n.length>0&&(i.arguments=n),i},H.is=function(e){var t=e;return ot.defined(t)&&ot.string(t.title)&&ot.string(t.command)},(z=K||(K={})).replace=function(e,t){return{range:e,newText:t}},z.insert=function(e,t){return{range:{start:e,end:e},newText:t}},z.del=function(e){return{range:e,newText:""}},z.is=function(e){var t=e;return ot.objectLiteral(t)&&ot.string(t.newText)&&m.is(t.range)},(X=q||(q={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},X.is=function(e){var t=e;return void 0!==t&&ot.objectLiteral(t)&&ot.string(t.label)&&(ot.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(ot.string(t.description)||void 0===t.description)},(B||(B={})).is=function(e){return"string"==typeof e},(Q=$||($={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},Q.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},Q.del=function(e,t){return{range:e,newText:"",annotationId:t}},Q.is=function(e){var t=e;return K.is(t)&&(q.is(t.annotationId)||B.is(t.annotationId))},(J=G||(G={})).create=function(e,t){return{textDocument:e,edits:t}},J.is=function(e){var t=e;return ot.defined(t)&&de.is(t.textDocument)&&Array.isArray(t.edits)},(Z=Y||(Y={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},Z.is=function(e){var t=e;return t&&"create"===t.kind&&ot.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||ot.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||ot.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||B.is(t.annotationId))},(te=ee||(ee={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},te.is=function(e){var t=e;return t&&"rename"===t.kind&&ot.string(t.oldUri)&&ot.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||ot.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||ot.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||B.is(t.annotationId))},(re=ne||(ne={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},re.is=function(e){var t=e;return t&&"delete"===t.kind&&ot.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||ot.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||ot.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||B.is(t.annotationId))},(ie||(ie={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return ot.string(e.kind)?Y.is(e)||ee.is(e)||ne.is(e):G.is(e)})))};var ae,se,ce,ue,de,ge,le,he,fe,pe,me,ve,_e,be,ke,we,Ce,ye,Ee,Ae,xe,Ie,Se,Te,Re,De,Pe,je,Me,Le,Fe,Oe,Ne,We,Ue,Ve,He,Ke,ze,qe,Xe,Be,$e,Qe,Ge,Je,Ye,Ze,et,tt,nt,rt=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=K.insert(e,t):B.is(n)?(i=n,r=$.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=$.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=K.replace(e,t):B.is(n)?(i=n,r=$.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=$.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=K.del(e):B.is(t)?(r=t,n=$.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=$.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),it=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(B.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new it(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(G.is(e)){var n=new rt(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new rt(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(de.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new rt(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new rt(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new it,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(q.is(t)||B.is(t)?r=t:n=t,void 0===r?i=Y.create(e,n):(o=B.is(r)?r:this._changeAnnotations.manage(r),i=Y.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(q.is(n)||B.is(n)?i=n:r=n,void 0===i?o=ee.create(e,t,r):(a=B.is(i)?i:this._changeAnnotations.manage(i),o=ee.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(q.is(t)||B.is(t)?r=t:n=t,void 0===r?i=ne.create(e,n):(o=B.is(r)?r:this._changeAnnotations.manage(r),i=ne.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(se=ae||(ae={})).create=function(e){return{uri:e}},se.is=function(e){var t=e;return ot.defined(t)&&ot.string(t.uri)},(ue=ce||(ce={})).create=function(e,t){return{uri:e,version:t}},ue.is=function(e){var t=e;return ot.defined(t)&&ot.string(t.uri)&&ot.integer(t.version)},(ge=de||(de={})).create=function(e,t){return{uri:e,version:t}},ge.is=function(e){var t=e;return ot.defined(t)&&ot.string(t.uri)&&(null===t.version||ot.integer(t.version))},(he=le||(le={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},he.is=function(e){var t=e;return ot.defined(t)&&ot.string(t.uri)&&ot.string(t.languageId)&&ot.integer(t.version)&&ot.string(t.text)},(pe=fe||(fe={})).PlainText="plaintext",pe.Markdown="markdown",function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(fe||(fe={})),(me||(me={})).is=function(e){var t=e;return ot.objectLiteral(e)&&fe.is(t.kind)&&ot.string(t.value)},(_e=ve||(ve={})).Text=1,_e.Method=2,_e.Function=3,_e.Constructor=4,_e.Field=5,_e.Variable=6,_e.Class=7,_e.Interface=8,_e.Module=9,_e.Property=10,_e.Unit=11,_e.Value=12,_e.Enum=13,_e.Keyword=14,_e.Snippet=15,_e.Color=16,_e.File=17,_e.Reference=18,_e.Folder=19,_e.EnumMember=20,_e.Constant=21,_e.Struct=22,_e.Event=23,_e.Operator=24,_e.TypeParameter=25,(ke=be||(be={})).PlainText=1,ke.Snippet=2,(we||(we={})).Deprecated=1,(ye=Ce||(Ce={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},ye.is=function(e){var t=e;return t&&ot.string(t.newText)&&m.is(t.insert)&&m.is(t.replace)},(Ae=Ee||(Ee={})).asIs=1,Ae.adjustIndentation=2,(xe||(xe={})).create=function(e){return{label:e}},(Ie||(Ie={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(Te=Se||(Se={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Te.is=function(e){var t=e;return ot.string(t)||ot.objectLiteral(t)&&ot.string(t.language)&&ot.string(t.value)},(Re||(Re={})).is=function(e){var t=e;return!!t&&ot.objectLiteral(t)&&(me.is(t.contents)||Se.is(t.contents)||ot.typedArray(t.contents,Se.is))&&(void 0===e.range||m.is(e.range))},(De||(De={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(Pe||(Pe={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return ot.defined(t)&&(i.documentation=t),ot.defined(n)?i.parameters=n:i.parameters=[],i},(Me=je||(je={})).Text=1,Me.Read=2,Me.Write=3,(Le||(Le={})).create=function(e,t){var n={range:e};return ot.number(t)&&(n.kind=t),n},(Oe=Fe||(Fe={})).File=1,Oe.Module=2,Oe.Namespace=3,Oe.Package=4,Oe.Class=5,Oe.Method=6,Oe.Property=7,Oe.Field=8,Oe.Constructor=9,Oe.Enum=10,Oe.Interface=11,Oe.Function=12,Oe.Variable=13,Oe.Constant=14,Oe.String=15,Oe.Number=16,Oe.Boolean=17,Oe.Array=18,Oe.Object=19,Oe.Key=20,Oe.Null=21,Oe.EnumMember=22,Oe.Struct=23,Oe.Event=24,Oe.Operator=25,Oe.TypeParameter=26,(Ne||(Ne={})).Deprecated=1,(We||(We={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(Ve=Ue||(Ue={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},Ve.is=function(e){var t=e;return t&&ot.string(t.name)&&ot.number(t.kind)&&m.is(t.range)&&m.is(t.selectionRange)&&(void 0===t.detail||ot.string(t.detail))&&(void 0===t.deprecated||ot.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},(Ke=He||(He={})).Empty="",Ke.QuickFix="quickfix",Ke.Refactor="refactor",Ke.RefactorExtract="refactor.extract",Ke.RefactorInline="refactor.inline",Ke.RefactorRewrite="refactor.rewrite",Ke.Source="source",Ke.SourceOrganizeImports="source.organizeImports",Ke.SourceFixAll="source.fixAll",(qe=ze||(ze={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},qe.is=function(e){var t=e;return ot.defined(t)&&ot.typedArray(t.diagnostics,W.is)&&(void 0===t.only||ot.typedArray(t.only,ot.string))},(Be=Xe||(Xe={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):V.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},Be.is=function(e){var t=e;return t&&ot.string(t.title)&&(void 0===t.diagnostics||ot.typedArray(t.diagnostics,W.is))&&(void 0===t.kind||ot.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||V.is(t.command))&&(void 0===t.isPreferred||ot.boolean(t.isPreferred))&&(void 0===t.edit||ie.is(t.edit))},(Qe=$e||($e={})).create=function(e,t){var n={range:e};return ot.defined(t)&&(n.data=t),n},Qe.is=function(e){var t=e;return ot.defined(t)&&m.is(t.range)&&(ot.undefined(t.command)||V.is(t.command))},(Je=Ge||(Ge={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},Je.is=function(e){var t=e;return ot.defined(t)&&ot.uinteger(t.tabSize)&&ot.boolean(t.insertSpaces)},(Ze=Ye||(Ye={})).create=function(e,t,n){return{range:e,target:t,data:n}},Ze.is=function(e){var t=e;return ot.defined(t)&&m.is(t.range)&&(ot.undefined(t.target)||ot.string(t.target))},(tt=et||(et={})).create=function(e,t){return{range:e,parent:t}},tt.is=function(e){var t=e;return void 0!==t&&m.is(t.range)&&(void 0===t.parent||tt.is(t.parent))},function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,c=0;a<i.length&&s<o.length;){var u=n(i[a],o[s]);e[c++]=u<=0?i[a++]:o[s++]}for(;a<i.length;)e[c++]=i[a++];for(;s<o.length;)e[c++]=o[s++];return e}e.create=function(e,t,n,r){return new ct(e,t,n,r)},e.is=function(e){var t=e;return!!(ot.defined(t)&&ot.string(t.uri)&&(ot.undefined(t.languageId)||ot.string(t.languageId))&&ot.uinteger(t.lineCount)&&ot.func(t.getText)&&ot.func(t.positionAt)&&ot.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],c=e.offsetAt(s.range.start),u=e.offsetAt(s.range.end);if(!(u<=o))throw new Error("Overlapping edit");r=r.substring(0,c)+s.newText+r.substring(u,r.length),o=c}return r}}(nt||(nt={}));var ot,at,st,ct=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return f.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return f.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();at=ot||(ot={}),st=Object.prototype.toString,at.defined=function(e){return void 0!==e},at.undefined=function(e){return void 0===e},at.boolean=function(e){return!0===e||!1===e},at.string=function(e){return"[object String]"===st.call(e)},at.number=function(e){return"[object Number]"===st.call(e)},at.numberRange=function(e,t,n){return"[object Number]"===st.call(e)&&t<=e&&e<=n},at.integer=function(e){return"[object Number]"===st.call(e)&&-2147483648<=e&&e<=2147483647},at.uinteger=function(e){return"[object Number]"===st.call(e)&&0<=e&&e<=2147483647},at.func=function(e){return"[object Function]"===st.call(e)},at.objectLiteral=function(e){return null!==e&&"object"==typeof e},at.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};var ut=e("DiagnosticsAdapter",class{constructor(e,t,n){this._languageId=e,this._worker=t;const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{u.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(u.editor.onDidCreateModel(r)),this._disposables.push(u.editor.onWillDisposeModel(i)),this._disposables.push(u.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{u.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{u.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),u.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:dt(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)));let i=u.editor.getModel(e);i&&i.getLanguageId()===t&&u.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}});function dt(e){switch(e){case M.Error:return u.MarkerSeverity.Error;case M.Warning:return u.MarkerSeverity.Warning;case M.Information:return u.MarkerSeverity.Info;case M.Hint:return u.MarkerSeverity.Hint;default:return u.MarkerSeverity.Info}}var gt=e("CompletionAdapter",class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),lt(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new u.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:pt(e.kind)};var n,r;return e.textEdit&&(void 0!==(r=e.textEdit).insert&&void 0!==r.replace?t.range={insert:ft(e.textEdit.insert),replace:ft(e.textEdit.replace)}:t.range=ft(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(mt)),e.insertTextFormat===be.Snippet&&(t.insertTextRules=u.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}});function lt(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function ht(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function ft(e){if(e)return new u.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function pt(e){const t=u.languages.CompletionItemKind;switch(e){case ve.Text:return t.Text;case ve.Method:return t.Method;case ve.Function:return t.Function;case ve.Constructor:return t.Constructor;case ve.Field:return t.Field;case ve.Variable:return t.Variable;case ve.Class:return t.Class;case ve.Interface:return t.Interface;case ve.Module:return t.Module;case ve.Property:return t.Property;case ve.Unit:return t.Unit;case ve.Value:return t.Value;case ve.Enum:return t.Enum;case ve.Keyword:return t.Keyword;case ve.Snippet:return t.Snippet;case ve.Color:return t.Color;case ve.File:return t.File;case ve.Reference:return t.Reference}return t.Property}function mt(e){if(e)return{range:ft(e.range),text:e.newText}}var vt=e("HoverAdapter",class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),lt(t)))).then((e=>{if(e)return{range:ft(e.range),contents:bt(e.contents)}}))}});function _t(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function bt(e){if(e)return Array.isArray(e)?e.map(_t):[_t(e)]}function kt(e){switch(e){case je.Read:return u.languages.DocumentHighlightKind.Read;case je.Write:return u.languages.DocumentHighlightKind.Write;case je.Text:return u.languages.DocumentHighlightKind.Text}return u.languages.DocumentHighlightKind.Text}function wt(e){return{uri:u.Uri.parse(e.uri),range:ft(e.range)}}e("DocumentHighlightAdapter",class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),lt(t)))).then((e=>{if(e)return e.map((e=>({range:ft(e.range),kind:kt(e.kind)})))}))}}),e("DefinitionAdapter",class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),lt(t)))).then((e=>{if(e)return[wt(e)]}))}}),e("ReferenceAdapter",class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),lt(t)))).then((e=>{if(e)return e.map(wt)}))}}),e("RenameAdapter",class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),lt(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=u.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:ft(i.range),text:i.newText}})}return{edits:t}}(e)))}});var Ct=e("DocumentSymbolAdapter",class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:yt(e.kind),range:ft(e.location.range),selectionRange:ft(e.location.range),tags:[]})))}))}});function yt(e){let t=u.languages.SymbolKind;switch(e){case Fe.File:return t.Array;case Fe.Module:return t.Module;case Fe.Namespace:return t.Namespace;case Fe.Package:return t.Package;case Fe.Class:return t.Class;case Fe.Method:return t.Method;case Fe.Property:return t.Property;case Fe.Field:return t.Field;case Fe.Constructor:return t.Constructor;case Fe.Enum:return t.Enum;case Fe.Interface:return t.Interface;case Fe.Function:return t.Function;case Fe.Variable:return t.Variable;case Fe.Constant:return t.Constant;case Fe.String:return t.String;case Fe.Number:return t.Number;case Fe.Boolean:return t.Boolean;case Fe.Array:return t.Array}return t.Function}e("DocumentLinkAdapter",class{constructor(e){this._worker=e}provideLinks(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:ft(e.range),url:e.target})))}}))}});var Et=e("DocumentFormattingEditProvider",class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,xt(t)).then((e=>{if(e&&0!==e.length)return e.map(mt)}))))}}),At=e("DocumentRangeFormattingEditProvider",class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),ht(t),xt(n)).then((e=>{if(e&&0!==e.length)return e.map(mt)}))))}});function xt(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var It,St=e("DocumentColorAdapter",class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:ft(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,ht(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=mt(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(mt)),t}))}))}}),Tt=e("FoldingRangeAdapter",class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case S.Comment:return u.languages.FoldingRangeKind.Comment;case S.Imports:return u.languages.FoldingRangeKind.Imports;case S.Region:return u.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}}),Rt=e("SelectionRangeAdapter",class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(lt)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:ft(e.range)}),e=e.parent;return t}))}))}});function Dt(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function Pt(e){return 10===e||13===e||8232===e||8233===e}function jt(e){return e>=48&&e<=57}(It||(It={})).DEFAULT={allowTrailingComma:!1};var Mt=function(e,t){void 0===t&&(t=!1);var n=e.length,r=0,i="",o=0,a=16,s=0,c=0,u=0,d=0,g=0;function l(t,n){for(var i=0,o=0;i<t||!n;){var a=e.charCodeAt(r);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}r++,i++}return i<t&&(o=-1),o}function h(){if(i="",g=0,o=r,c=s,d=u,r>=n)return o=n,a=17;var t=e.charCodeAt(r);if(Dt(t)){do{r++,i+=String.fromCharCode(t),t=e.charCodeAt(r)}while(Dt(t));return a=15}if(Pt(t))return r++,i+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,i+="\n"),s++,u=r,a=14;switch(t){case 123:return r++,a=1;case 125:return r++,a=2;case 91:return r++,a=3;case 93:return r++,a=4;case 58:return r++,a=6;case 44:return r++,a=5;case 34:return r++,i=function(){for(var t="",i=r;;){if(r>=n){t+=e.substring(i,r),g=2;break}var o=e.charCodeAt(r);if(34===o){t+=e.substring(i,r),r++;break}if(92!==o){if(o>=0&&o<=31){if(Pt(o)){t+=e.substring(i,r),g=2;break}g=6}r++}else{if(t+=e.substring(i,r),++r>=n){g=2;break}switch(e.charCodeAt(r++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var a=l(4,!0);a>=0?t+=String.fromCharCode(a):g=4;break;default:g=5}i=r}}return t}(),a=10;case 47:var h=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<n&&!Pt(e.charCodeAt(r));)r++;return i=e.substring(h,r),a=12}if(42===e.charCodeAt(r+1)){r+=2;for(var p=n-1,m=!1;r<p;){var v=e.charCodeAt(r);if(42===v&&47===e.charCodeAt(r+1)){r+=2,m=!0;break}r++,Pt(v)&&(13===v&&10===e.charCodeAt(r)&&r++,s++,u=r)}return m||(r++,g=1),i=e.substring(h,r),a=13}return i+=String.fromCharCode(t),r++,a=16;case 45:if(i+=String.fromCharCode(t),++r===n||!jt(e.charCodeAt(r)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var t=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&jt(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&jt(e.charCodeAt(r))))return g=3,e.substring(t,r);for(r++;r<e.length&&jt(e.charCodeAt(r));)r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&jt(e.charCodeAt(r))){for(r++;r<e.length&&jt(e.charCodeAt(r));)r++;n=r}else g=3;return e.substring(t,n)}(),a=11;default:for(;r<n&&f(t);)r++,t=e.charCodeAt(r);if(o!==r){switch(i=e.substring(o,r)){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(t),r++,a=16}}function f(e){if(Dt(e)||Pt(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){r=e,i="",o=0,a=16,g=0},getPosition:function(){return r},scan:t?function(){var e;do{e=h()}while(e>=12&&e<=15);return e}:h,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return r-o},getTokenStartLine:function(){return c},getTokenStartCharacter:function(){return o-d},getTokenError:function(){return g}}},Lt="delimiter.bracket.json",Ft="delimiter.array.json",Ot="delimiter.colon.json",Nt="delimiter.comma.json",Wt="keyword.json",Ut="keyword.json",Vt="string.value.json",Ht="number.json",Kt="string.key.json",zt="comment.block.json",qt="comment.line.json",Xt=class{constructor(e,t){this.parent=e,this.type=t}static pop(e){return e?e.parent:null}static push(e,t){return new Xt(e,t)}static equals(e,t){if(!e&&!t)return!0;if(!e||!t)return!1;for(;e&&t;){if(e===t)return!0;if(e.type!==t.type)return!1;e=e.parent,t=t.parent}return!0}},Bt=class{_state;scanError;lastWasColon;parents;constructor(e,t,n,r){this._state=e,this.scanError=t,this.lastWasColon=n,this.parents=r}clone(){return new Bt(this._state,this.scanError,this.lastWasColon,this.parents)}equals(e){return e===this||!!(e&&e instanceof Bt)&&this.scanError===e.scanError&&this.lastWasColon===e.lastWasColon&&Xt.equals(this.parents,e.parents)}getStateData(){return this._state}setStateData(e){this._state=e}},$t=class extends ut{constructor(e,t,n){super(e,t,n.onDidChange),this._disposables.push(u.editor.onWillDisposeModel((e=>{this._resetSchema(e.uri)}))),this._disposables.push(u.editor.onDidChangeModelLanguage((e=>{this._resetSchema(e.model.uri)})))}_resetSchema(e){this._worker().then((t=>{t.resetSchema(e.toString())}))}};function Qt(e){return{dispose:()=>Gt(e)}}function Gt(e){for(;e.length;)e.pop().dispose()}var Jt={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}}));
//# sourceMappingURL=jsonMode-legacy-9b95b39d.js.map
