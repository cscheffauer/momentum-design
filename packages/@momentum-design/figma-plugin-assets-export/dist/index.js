"use strict";(()=>{var T=(o,t,e)=>new Promise((s,i)=>{var r=g=>{try{p(e.next(g))}catch(E){i(E)}},a=g=>{try{p(e.throw(g))}catch(E){i(E)}},p=g=>g.done?s(g.value):Promise.resolve(g.value).then(r,a);p((e=e.apply(o,t)).next())});var A={GET_SETTINGS:"storage_get_settings",SET_SETTINGS:"storage_set_settings",EXPORT:"export",PR_CREATED:"pr_created",G_TAG:"tag_detector",G_TAG_LINK:"tag_link"};var F={VALID_CHILD_TYPES:["PAGE"]},v=["COMPONENT"],V={COMPONENT_NAME:"COMPONENT_NAME",PARENT_NAME:"PARENT_NAME",SET_OR_COMPONENT_NAME:"SET_OR_COMPONENT_NAME",SF_ALTERNATIVE:"SF_ALTERNATIVE",RTL:"RTL",WEIGHT:"WEIGHT",COLOR:"COLOR",STATE:"STATE",SIZE:"SIZE",THEME:"THEME",TYPE:"TYPE",ORIENTATION:"ORIENTATION",PRODUCT:"PRODUCT"},H={WEIGHT:"weight",COLOR:"color",RTL:"right to left",SF_ALTERNATIVE:"sf alternative",STATE:"state",SIZE:"size",THEME:"theme",TYPE:"type",ORIENTATION:"orientation",PRODUCT:"product"},n={DOCUMENT:F,SEARCH_CRITERIA:v,REPLACE_TERMS:V,FIGMA_VARIANTS:H};var S=o=>o?Object.keys(o).reduce((t,e)=>{let s=e.toLowerCase(),i=o[e].toLowerCase();return t[s]=i,t},{}):{};var l=class{constructor(t,e,s){this.node=t,this.destination=e,this.assetSetting=s,this.variants=S(this.node.variantProperties)}get replacementMap(){var a,p,g,E,N,h,R,C,I,_,P,y,O;let t=((a=this.node.parent)==null?void 0:a.type)==="COMPONENT_SET"?this.node.parent.name:this.node.name,e=((p=this.variants)==null?void 0:p[n.FIGMA_VARIANTS.RTL])==="true"?"rtl":void 0,s=((g=this.variants)==null?void 0:g[n.FIGMA_VARIANTS.SF_ALTERNATIVE])==="true"?"sf":void 0,i=((E=this.variants)==null?void 0:E[n.FIGMA_VARIANTS.SIZE])==="default"||(N=this.variants)==null?void 0:N[n.FIGMA_VARIANTS.SIZE];return{[n.REPLACE_TERMS.COMPONENT_NAME]:this.node.name,[n.REPLACE_TERMS.PARENT_NAME]:(h=this.node.parent)==null?void 0:h.name,[n.REPLACE_TERMS.SET_OR_COMPONENT_NAME]:t,[n.REPLACE_TERMS.WEIGHT]:(R=this.variants)==null?void 0:R[n.FIGMA_VARIANTS.WEIGHT],[n.REPLACE_TERMS.STATE]:(C=this==null?void 0:this.variants)==null?void 0:C[n.FIGMA_VARIANTS.STATE],[n.REPLACE_TERMS.COLOR]:(I=this.variants)==null?void 0:I[n.FIGMA_VARIANTS.COLOR],[n.REPLACE_TERMS.THEME]:(_=this.variants)==null?void 0:_[n.FIGMA_VARIANTS.THEME],[n.REPLACE_TERMS.TYPE]:(P=this.variants)==null?void 0:P[n.FIGMA_VARIANTS.TYPE],[n.REPLACE_TERMS.ORIENTATION]:(y=this.variants)==null?void 0:y[n.FIGMA_VARIANTS.ORIENTATION],[n.REPLACE_TERMS.PRODUCT]:(O=this.variants)==null?void 0:O[n.FIGMA_VARIANTS.PRODUCT],[n.REPLACE_TERMS.SIZE]:i,[n.REPLACE_TERMS.RTL]:e,[n.REPLACE_TERMS.SF_ALTERNATIVE]:s}}get assetName(){let t="",{fileName:e,exportSettings:s}=this.assetSetting.input.asset,i=e.parts.reduce((a,p)=>{let g=this.replacementMap[p];return g&&a.push(g),a},[]);return t+=i.join(e.separator),e.suffix.parts.forEach(a=>{var g;let p=(g=this.replacementMap)==null?void 0:g[a];p&&(t+=e.suffix.separator,t+=p)}),t.endsWith("-black")&&(t=t.replace("-black","")),e.replaceNumbers&&(t=t.replace(/[0-9]/g,a=>this.convertDigitToWord(a))),e.replaceDots&&(t=t.replace(/\./g,"")),t+=".",t+=s.format,t.toLowerCase()}get asset(){return new Promise((t,e)=>{this.node.exportAsync(this.assetSetting.input.asset.exportSettings).then(s=>{t({path:`${this.destination?`${this.destination}/`:""}${this.assetName}`,data:String.fromCharCode.apply(null,s)})}).catch(s=>{figma.notify(`Component: ${this.assetName} / Error: ${s}`,{error:!0}),e(s)})})}convertDigitToWord(t){return{0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"}[t]}},M=l;var u=class{constructor(t,e,s){this.node=t,this.destination=e,this.assetSetting=s}get assets(){return Promise.all(this.components.map(t=>t.asset))}isNodeContainingImage(t){return t.findAllWithCriteria({types:["RECTANGLE"]}).filter(s=>s.fills.filter(i=>i.type==="IMAGE").length>0).length>0}excludeComponents(t){let{exclude:e}=this.assetSetting.input;if(!e)return t;let s,i;try{s=t.filter(r=>{var a,p;return i=(a=r.parent)==null?void 0:a.name,this.isNodeContainingImage(r)?!1:((p=S(r.variantProperties))==null?void 0:p[e.byVariant])!=="true"})}catch(r){throw new Error(`Error while filtering components by variant property "${e.byVariant}". 
        Component: ${i}. 
        Error: ${r}`)}return s}get components(){figma.loadAllPagesAsync();let t=this.node.findAllWithCriteria({types:n.SEARCH_CRITERIA});return this.excludeComponents(t).map(s=>new M(s,this.destination,this.assetSetting))}},L=u;var w={CHUNK_SIZE:500};var f=class{constructor(t,e){this.node=t,this.assetSetting=e}getDestination(t,e){let s=e.find(i=>t.toLowerCase().includes(i.page.toLowerCase()));return s==null?void 0:s.folder}get pages(){let t=[];if("children"in this.node){for(let e of this.node.children)if(e.loadAsync(),n.DOCUMENT.VALID_CHILD_TYPES.includes(e.type)){let s=this.getDestination(e.name,this.assetSetting.input.mapPagesToFolder);(s||s==="")&&t.push(new L(e,s,this.assetSetting))}}return t}createChunks(t){let e=w.CHUNK_SIZE,s=[];for(let i=0;i<t.length;i+=e)s.push(t.slice(i,i+e));return s}getAssetChunksFromPages(){return T(this,null,function*(){if(!this.pages.length)return[[]];let t=[];return yield Promise.all(this.pages.map(e=>e.assets.then(s=>{t.push(...s)}))),this.createChunks(t)})}},m=f;var k={auth:{githubPersonalToken:"<YourClassicPersonalAccessTokenHere>"},assets:{typeOfAsset:{name:"<type of asset>",mode:"ADD",description:{name:"<Name of git repo>",url:"<URL of the git repo only for informational purpose>",urlText:"<url text>"},input:{mapPagesToFolder:[{page:"<substring of page>",folder:"<folder-name>"}],exclude:{byVariant:"<variant which should be excluded>"},asset:{fileName:{parts:["SET_OR_COMPONENT_NAME","SF_ALTERNATIVE","RTL"],separator:"-",suffix:{parts:["WEIGHT","STATE","SIZE"],separator:"_"},replaceNumbers:!0,replaceDots:!0},exportSettings:{format:"SVG",contentsOnly:!0,useAbsoluteBounds:!1}}},output:{git:{githubOwner:"<owner-name>",gitRepo:"<repo-name>",gitBranch:`automation-assets-${new Date().toISOString().replace(/\.|:/g,"-")}`,prTitle:`Automated Assets Export ${new Date().toISOString()}`,prCommitMsg:`feat(assets): Export ${new Date().toISOString()}`,prMessage:`feat(assets): Export ${new Date().toISOString()}`,gitRepoFilePath:"<path where assets should be exported to>"}}}}},G={INITIAL_SETTINGS:k};var x="settings",d=class{constructor(){this.initialSettings=G.INITIAL_SETTINGS;this.api=figma.clientStorage}setSettings(t){return T(this,null,function*(){return this.api.setAsync(x,t)})}getSettings(){return T(this,null,function*(){return this.api.getAsync(x)})}},D=d;var c=new D;figma.on("run",()=>T(void 0,null,function*(){(yield c.getSettings())||(yield c.setSettings(c.initialSettings))}));figma.skipInvisibleInstanceChildren=!0;figma.showUI(__html__,{themeColors:!0,height:550,width:450});figma.ui.onmessage=o=>T(void 0,null,function*(){var t,e,s;if(o.type===A.EXPORT){let r=yield new m(figma.root,o.assetSetting).getAssetChunksFromPages();figma.ui.postMessage({type:"assets",data:r},{origin:"*"}),figma.ui.postMessage({type:"export"},{origin:"*"})}if(o.type===A.G_TAG){let r=yield new m(figma.root,o.assetSetting).getAssetChunksFromPages();figma.ui.postMessage({type:"tagAssets",data:r},{origin:"*"})}if(o.type===A.G_TAG_LINK){let i=new m(figma.root,o.assetSetting);(t=i==null?void 0:i.pages)==null||t.forEach(a=>{a.destination===o.page&&figma.setCurrentPageAsync(a.node)}),yield figma.currentPage.loadAsync();let r=figma.currentPage.findAll(a=>a.name===o.nodeName);figma.viewport.zoom=2,figma.currentPage.selection=r,figma.viewport.scrollAndZoomIntoView([r[0]]),figma.closePlugin()}if(o.type===A.SET_SETTINGS&&(figma.ui.postMessage({type:"storage",data:"inprogress"},{origin:"*"}),yield c.setSettings(o.settings),figma.ui.postMessage({type:"storage",data:"complete"},{origin:"*"})),o.type===A.GET_SETTINGS){let i=yield c.getSettings();figma.ui.postMessage({type:"settings",data:i},{origin:"*"})}o.type===A.PR_CREATED&&figma.notify(`Pull Request: ${(s=(e=o.pullRequest)==null?void 0:e.data)==null?void 0:s.url}`)});})();
