(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e835253"],{1799:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center "},[a("li",{staticClass:"page-item px-2 ",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link ",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getProducts(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],s={props:["pagination"],methods:{getProducts:function(t){this.$emit("getPageProducts",t)}}},r=s,n=a("2877"),c=Object(n["a"])(r,o,i,!1,null,null,null);e["a"]=c.exports},e6dc:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right my-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.openModal(!0)}}},[t._v("建立新商品")])]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),a("td",[e.is_enabled?a("div",{staticClass:"text-success text-center"},[t._v("已啟用")]):a("div",{staticClass:"text-muted text-center"},[t._v("尚未啟用")])]),a("td",[a("div",{staticClass:"btn-group mr-2 ",attrs:{role:"group","aria-label":"First group"}},[a("button",{staticClass:"btn btn-sm btn-outline-info",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.openModal(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.removeProduct(e.id)}}},[t._v("刪除")])])])])}),0)]),a("Pagination",{attrs:{pagination:t.pagination},on:{getPageProducts:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.imageUrl,expression:"temProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.temProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片\n                            "),t.status.fileLoading?a("i",{staticClass:"fas fa-circle-notch fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.temProduct.imageUrl,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.title,expression:"temProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.temProduct.title},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.category,expression:"temProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.temProduct.category},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.unit,expression:"temProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.temProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.origin_price,expression:"temProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.temProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.price,expression:"temProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.temProduct.price},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.description,expression:"temProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.temProduct.description},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.content,expression:"temProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.temProduct.content},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.is_enabled,expression:"temProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.temProduct.is_enabled)?t._i(t.temProduct.is_enabled,null)>-1:t._q(t.temProduct.is_enabled,1)},on:{change:function(e){var a=t.temProduct.is_enabled,o=e.target,i=o.checked?1:0;if(Array.isArray(a)){var s=null,r=t._i(a,s);o.checked?r<0&&t.$set(t.temProduct,"is_enabled",a.concat([s])):r>-1&&t.$set(t.temProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.temProduct,"is_enabled",i)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                            是否啟用\n                            ")])])])])])]),a("div",{staticClass:"modal-footer bg-light"},[a("button",{staticClass:"btn btn-outline-dark ",attrs:{type:"button","data-dismiss":"modal"}},[t._v("關閉")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.updateproudct(e)}}},[t._v("確認")])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"100"}},[t._v("分類")]),a("th",[t._v("名稱")]),a("th",{attrs:{width:"100"}},[t._v("原價")]),a("th",{attrs:{width:"100"}},[t._v("售價")]),a("th",{attrs:{width:"120"}},[t._v("是否啟用")]),a("th",{attrs:{width:"150"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-light"},[a("h5",{staticClass:"modal-title text-secondary",attrs:{id:"productModalLabel"}},[t._v("新增商品")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],s=a("1157"),r=a.n(s),n=a("1799"),c={data:function(){return{products:[],temProduct:{},isNew:!1,isLoading:!1,pagination:{},status:{fileLoading:!1}}},components:{Pagination:n["a"]},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/admin/products?page=").concat(t);e.isLoading=!0,this.$http.get(a).then(function(t){e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination,console.log(e.products)})},openModal:function(t,e){t?(this.temProduct={},this.isNew=!0):(this.temProduct=Object.assign({},e),this.isNew=!1),r()("#productModal").modal("show")},updateproudct:function(){var t=this,e="post",a="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/admin/product");t.isNew||(a="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/admin/product/").concat(t.temProduct.id),e="put"),this.$http[e](a,{data:t.temProduct}).then(function(e){e.data.success?(r()("#productModal").modal("hide"),t.getProducts()):(r()("#productModal").modal("hide"),t.getProducts(),console.log("失敗"))})},removeProduct:function(t){var e=this,a="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/admin/product/").concat(t);e.isLoading=!0,this.$http.delete(a).then(function(t){e.isLoading=!1,e.getProducts()})},uploadFile:function(){var t=this,e=this.$refs.files.files[0],a=this,o=new FormData;o.append("file-to-upload",e);var i="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/admin/upload");a.status.fileLoading=!0,this.$http.post(i,o,{header:{"Content-Type":"multipart/form-data"}}).then(function(e){a.status.fileLoading=!1,e.data.success?a.$set(a.temProduct,"imageUrl",e.data.imageUrl):(console.log(e.data.message),t.$bus.$emit("messsage:push",e.data.message,"danger"))})}},created:function(){this.getProducts()}},l=c,d=a("2877"),u=Object(d["a"])(l,o,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7e835253.aabb1902.js.map