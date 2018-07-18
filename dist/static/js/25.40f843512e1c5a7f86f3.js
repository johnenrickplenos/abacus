webpackJsonp([25],{191:function(t,e,s){s(658);var a=s(26)(s(571),s(713),null,null);t.exports=a.exports},571:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(0),i=s.n(a);s(74);e.default={name:"cashiering",components:{"product-menu":s(699),"order-list":s(698),"check-out":s(697),return:s(700),void:s(701)},mounted:function(){var t=this;this.calculateHeight(),$(window).resize(function(){t.calculateHeight()})},data:function(){return{orderList:[],isOrderListShown:!0,productMenuHeight:0,orderListHeight:0,moreOptionClass:"col-sm-4 col-md-4 mb-1 px-1"}},methods:{addOrder:function(t,e,s,a,r){var o=this.searchOrderList(t);o?i.a.set(this.orderList[o],"quantity",this.orderList[o].quantity+=1*e):this.orderList.push({product_id:t,quantity:e,description:s,short_name:a,price:r}),this.$refs.productOrdered.orderListUpdated()},searchOrderList:function(t){for(var e in this.orderList)if(1*this.orderList[e].product_id==1*t)return e},resetOrder:function(){this.orderList.splice(0,this.orderList.length),this.orderList=[],this.$refs.productOrdered.orderListUpdated(),this.modal(this.$refs.moreOptionModal,"hide")},showProductMenu:function(){},calculateHeight:function(){var t=$(window).height(),e=$(window).width();this.productMenuHeight=t-58-15-34-(e<768?46:0);this.orderListHeight=t-58-15-72-(e<768?127:46)-12}}}},572:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=this;e.default={props:{alignment:String,order_list:Array},data:function(){return{totalPrice:0,cashTendered:null,isRequesting:!1,isSuccess:!1,errorMessage:null,requestOnlinePayment:!1}},watch:{requestOnlinePayment:function(t){t&&(a.cashTendered=0)}},methods:{finishTransaction:function(){var t=this;this.errorMessage=null,this.isRequesting=!0;var e={total_price:this.totalPrice,cash_tendered:this.requestOnlinePayment?0:this.cashTendered-this.paymentChange,value_added_tax:.12*this.totalPrice,order_products:[],status:this.requestOnlinePayment?2:1};for(var s in this.order_list)e.order_products.push({product_id:this.order_list[s].product_id,sale_price:this.order_list[s].price,quantity:this.order_list[s].quantity});this.APIRequest("order/create",e,function(e){if(e.error.length){t.errorMessage="";for(var s=0;s<e.error.length;s++)if(1*e.error[s].status==100)for(var a in e.error[s].message)t.errorMessage+=e.error[s].message[a]+"<br>"}else t.isSuccess=!0,t.cashTendered=null,t.requestOnlinePayment=!1,t.$emit("transaction_finished");t.isRequesting=!1},function(){t.isRequesting=!1})},openCheckOutModal:function(){this.calculateTotalPrice(),this.isSuccess=!1,$(this.$refs.checkOutModal).modal("show")},calculateTotalPrice:function(){this.totalPrice=0;for(var t in this.order_list)this.totalPrice+=this.order_list[t].quantity*this.order_list[t].price},closeCheckOut:function(){$(this.$refs.checkOutModal).modal("hide")}},computed:{paymentChange:function(){return this.cashTendered-this.totalPrice}}}},573:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{order_list:Array,order_height:Number},data:function(){return{totalPrice:0,selectedOrder:{},selectOrderIndex:null,orderDetailQuantity:0}},methods:{orderListUpdated:function(){this.totalPrice=0;for(var t in this.order_list)this.totalPrice+=this.order_list[t].quantity*this.order_list[t].price},openOrderDetail:function(t){this.selectedOrder=this.order_list[t],this.selectOrderIndex=t,this.orderDetailQuantity=this.selectedOrder.quantity,$(this.$refs.orderDetail).modal("show")},saveChanges:function(){this.order_list[this.selectOrderIndex].quantity=1*this.orderDetailQuantity,this.orderListUpdated(),$(this.$refs.orderDetail).modal("hide")},removeOrder:function(){this.order_list.splice(this.selectOrderIndex,1),this.$emit("order_removed",this.selectOrderIndex),$(this.$refs.orderDetail).modal("hide")}},watch:{}}},574:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",props:{menu_height:Number},data:function(){return{searchString:null,productList:[{},{},{},{},{}]}},mounted:function(){this.retrieveProductMenu()},methods:{retrieveProductMenu:function(){var t=this,e={condition:[],sort:{description:"asc"}};this.searchString&&e.condition.push({column:"description",clause:"like",value:"%"+this.searchString+"%"}),this.APIRequest("product/retrieve",e,function(e){e.error.length||(t.productList=e.data)})}}}},575:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{order_list:Array},data:function(){return{}},methods:{openReturnModal:function(){}}}},576:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"void",props:{order_list:Array},data:function(){return{}},methods:{openVoidModal:function(){}}}},609:function(t,e,s){e=t.exports=s(181)(),e.push([t.i,".productMenu[data-v-10ef7a78]{background-color:#fff}.productMenu[data-v-10ef7a78]:hover{background-color:#ffc107;color:#fff}.productMenu[data-v-10ef7a78]:active{background-color:#d39e00;color:#fff}","",{version:3,sources:["/var/www/html/pos_core/src/modules/cashier/ProductMenu.vue"],names:[],mappings:"AACA,8BACE,qBAAuB,CACxB,AACD,oCACE,yBAAyB,AACzB,UAAY,CACb,AACD,qCACE,yBAAyB,AACzB,UAAY,CACb",file:"ProductMenu.vue",sourcesContent:["\n.productMenu[data-v-10ef7a78]{\n  background-color: white\n}\n.productMenu[data-v-10ef7a78]:hover{\n  background-color:#ffc107;\n  color: white\n}\n.productMenu[data-v-10ef7a78]:active{\n  background-color:#d39e00;\n  color: white\n}\n"],sourceRoot:""}])},610:function(t,e,s){e=t.exports=s(181)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Return.vue",sourceRoot:""}])},613:function(t,e,s){e=t.exports=s(181)(),e.push([t.i,".background-pattern{background-color:#f5f5f5}","",{version:3,sources:["/var/www/html/pos_core/src/modules/cashier/Cashier.vue"],names:[],mappings:"AACA,oBAEE,wBAA4B,CAC7B",file:"Cashier.vue",sourcesContent:['\n.background-pattern{\n  /*background-image: url("../../assets/img/grey_wash_wall.png");*/\n  background-color: whitesmoke\n}\n'],sourceRoot:""}])},632:function(t,e,s){e=t.exports=s(181)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Void.vue",sourceRoot:""}])},640:function(t,e,s){e=t.exports=s(181)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"CheckOut.vue",sourceRoot:""}])},641:function(t,e,s){e=t.exports=s(181)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"OrderList.vue",sourceRoot:""}])},654:function(t,e,s){var a=s(609);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(182)("2fca8daf",a,!0)},655:function(t,e,s){var a=s(610);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(182)("5f1f21f8",a,!0)},658:function(t,e,s){var a=s(613);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(182)("057f5a12",a,!0)},677:function(t,e,s){var a=s(632);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(182)("7fabdc18",a,!0)},685:function(t,e,s){var a=s(640);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(182)("32115711",a,!0)},686:function(t,e,s){var a=s(641);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(182)("563278bb",a,!0)},697:function(t,e,s){s(685);var a=s(26)(s(572),s(740),null,null);t.exports=a.exports},698:function(t,e,s){s(686);var a=s(26)(s(573),s(741),null,null);t.exports=a.exports},699:function(t,e,s){s(654);var a=s(26)(s(574),s(709),"data-v-10ef7a78",null);t.exports=a.exports},700:function(t,e,s){s(655);var a=s(26)(s(575),s(710),null,null);t.exports=a.exports},701:function(t,e,s){s(677);var a=s(26)(s(576),s(732),null,null);t.exports=a.exports},709:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"input-group py-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],staticClass:"form-control border-primary",attrs:{type:"text",placeholder:"Enter description or short name","aria-label":"Recipient's username","aria-describedby":"basic-addon2"},domProps:{value:t.searchString},on:{input:function(e){e.target.composing||(t.searchString=e.target.value)}}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.retrieveProductMenu}},[s("i",{staticClass:"fas fa-search"})])])])])]),t._v(" "),s("div",{staticStyle:{"overflow-y":"scroll"},style:{height:t.menu_height+"px"}},t._l(t.productList,function(e,a){return s("div",{staticClass:"w-50 float-left pb-2 ",class:a%2==0?"pr-2":""},[s("div",{staticClass:"row no-gutters rounded-right h-100 shadow-sm"},[s("div",{staticClass:"col-10 p-2 productMenu",on:{click:function(s){t.$emit("addOrder",e.id,1,e.description,e.short_name,e.price)}}},[s("div",{staticStyle:{height:"42px",overflow:"hidden"}},[s("small",{staticClass:"font-weight-bold text-uppercase"},[t._v(t._s(e.description))]),s("br")]),t._v(" "),s("small",{staticClass:"align-bottom float-right font-italic"},[t._v("PhP "+t._s(t._f("displayNumber")(e.price)))])]),t._v(" "),t._m(1,!0)])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row px-3"},[s("div",{staticClass:"col-sm-12 bg-primary border border-primary text-white py-1 font-weight-bold"},[s("i",{staticClass:"fas fa-bars"}),t._v(" PRODUCT MENU\n    ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-2 text-center"},[s("button",{staticClass:"h-100 btn btn-sm btn-warning btn-block text-white"},[s("i",{staticClass:"fas fa-bars "})])])}]}},710:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"btn btn-warning btn-block text-white font-weight-bold btn-block btn-lg",on:{click:t.openReturnModal}},[t._v("Return "),s("small",{staticClass:"font-italic font-weight-bold"},[t._v("(Alt+R)")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"checkOutModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content "},[s("div",{staticClass:"modal-header"})])])])}]}},713:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-padding background-pattern"},[s("div",{staticClass:"row pb-3 d-none"},[t._m(0),t._v(" "),s("div",{staticClass:"col-md-4"}),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"btn-group float-right"},[s("button",{staticClass:"btn btn btn-primary btn-sm dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-user"}),t._v(" "+t._s(t.$auth.user().username)+"\n        ")]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.profileSetting}},[s("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),t._v(" Profile Settings\n          ")]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("a",{staticClass:"dropdown-item",on:{click:t.logOut}},[s("i",{staticClass:"fa fa-power-off",attrs:{"aria-hidden":"true"}}),t._v(" Log Out")])])])])]),t._v(" "),s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-6 d-md-none"}),t._v(" "),s("div",{staticClass:"col-6 d-md-none"},[t.isOrderListShown?t._e():s("button",{staticClass:"btn btn-primary mb-2 btn-block",on:{click:function(e){t.isOrderListShown=!t.isOrderListShown}}},[s("i",{staticClass:"fas fa-arrow-left"}),t._v(" ORDER LIST")]),t._v(" "),t.isOrderListShown?s("button",{staticClass:"btn btn-primary mb-2 btn-block",on:{click:function(e){t.isOrderListShown=!t.isOrderListShown}}},[t._v("PRODUCT MENU "),s("i",{staticClass:"fas fa-arrow-right"})]):t._e()]),t._v(" "),s("div",{staticClass:" col-md-6 d-md-block ",class:t.isOrderListShown?"":"d-none"},[s("order-list",{ref:"productOrdered",attrs:{order_list:t.orderList,order_height:t.orderListHeight},on:{order_removed:function(e){t.$refs.productOrdered.orderListUpdated()}}}),t._v(" "),s("div",{staticClass:"row pt-2 no-gutters"},[s("div",{staticClass:"col-12 mb-1 d-sm-none"},[s("check-out",{attrs:{order_list:t.orderList,alignment:"right"},on:{transaction_finished:t.resetOrder}})],1),t._v(" "),s("div",{staticClass:"col-12 col-sm-4 pr-sm-1"},[s("button",{staticClass:"btn btn-dark btn-block",attrs:{type:"button","data-toggle":"modal"},on:{click:function(e){t.modal(t.$refs.moreOptionModal,"show")}}},[s("i",{staticClass:"fas fa-cog"}),t._v(" Options")])]),t._v(" "),s("div",{staticClass:"col-sm-8 mt-2 mt-sm-0 d-none d-sm-block"},[s("check-out",{attrs:{order_list:t.orderList,alignment:"right"},on:{transaction_finished:t.resetOrder}})],1)])],1),t._v(" "),s("div",{staticClass:"col-md-6 pl-md-2 d-md-block",class:t.isOrderListShown?"d-none":""},[s("product-menu",{attrs:{menu_height:t.productMenuHeight},on:{addOrder:t.addOrder}})],1)]),t._v(" "),s("div",{ref:"moreOptionModal",staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body no-gutters"},[s("div",{staticClass:"row no-gutters"},[s("div",{class:t.moreOptionClass},[t._m(2)]),t._v(" "),s("div",{class:t.moreOptionClass},[t._m(3)]),t._v(" "),s("div",{class:t.moreOptionClass},[t._m(4)])]),t._v(" "),s("div",{staticClass:"row no-gutters"},[s("div",{class:t.moreOptionClass},[t._m(5)]),t._v(" "),s("div",{class:t.moreOptionClass},[t._m(6)]),t._v(" "),s("div",{class:t.moreOptionClass},[t._m(7)])]),t._v(" "),s("div",{staticClass:"row no-gutters"},[s("div",{class:t.moreOptionClass},[s("button",{staticClass:"btn btn-secondary btn-block btn-lg",on:{click:t.resetOrder}},[s("i",{staticClass:"fas fa-sync-alt"}),t._v(" Reset")])]),t._v(" "),s("div",{class:t.moreOptionClass},[s("return")],1),t._v(" "),s("div",{class:t.moreOptionClass},[s("void")],1)])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-4"},[s("h4",[t._v("ABACUS")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("More Options")]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-outline-info btn-block btn-lg"},[s("i",{staticClass:"fas fa-folder"}),t._v(" Park Txn")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-outline-info btn-block btn-lg"},[s("i",{staticClass:"fas fa-folder-open"}),t._v(" Open Parked")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-outline-danger btn-block btn-lg"},[s("i",{staticClass:"fas fa-percent"}),t._v(" Discount")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-primary btn-block btn-lg"},[s("i",{staticClass:"fas fa-money-bill-alt"}),t._v(" Cash on Hand")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-success btn-block btn-lg"},[s("i",{staticClass:"fas fa-book"}),t._v(" X-Reading")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-outline-warning btn-block btn-lg"},[s("i",{staticClass:"fas fa-print"}),t._v(" Reprint")])}]}},732:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"btn btn-danger btn-block font-weight-bold btn-block btn-lg",on:{click:t.openVoidModal}},[t._v("Void "),s("small",{staticClass:"font-italic font-weight-bold"},[t._v("(Alt+V)")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"checkOutModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content "},[s("div",{staticClass:"modal-header"})])])])}]}},740:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"btn btn-success btn-block font-weight-bold text-uppercase ",class:"right"===t.alignment?"float-right":"",attrs:{disabled:!t.order_list.length},on:{click:t.openCheckOutModal}},[t._v("Check Out "),s("i",{staticClass:"fas fa-arrow-right"})]),t._v(" "),s("div",{ref:"checkOutModal",staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),t.isSuccess?[t._m(2),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-outline-success",on:{click:t.closeCheckOut}},[t._v("Close")])])]:[s("div",{staticClass:"modal-body"},[t.errorMessage?s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"},domProps:{innerHTML:t._s(t.errorMessage)}})])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[t._m(1),t._v(" "),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("label",{staticClass:"col-4 col-form-label"},[t._v("Total Price: ")]),t._v(" "),s("div",{staticClass:"col-8"},[s("input",{staticClass:"form-control-plaintext text-uppercase text-right",attrs:{type:"text",readonly:""},domProps:{value:t._f("displayNumber")(t.totalPrice)}})])])]),t._v(" "),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("label",{staticClass:"col-4 col-form-label"},[t._v("VAT: ")]),t._v(" "),s("div",{staticClass:"col-8"},[s("input",{staticClass:"form-control-plaintext text-uppercase text-right",attrs:{type:"text",readonly:""},domProps:{value:t._f("displayNumber")(.12*t.totalPrice)}})])])]),t._v(" "),s("div",{staticClass:"col-md-12 text-right"},[s("div",{staticClass:"form-check"},[s("label",{staticClass:"form-check-label font-weight-bold"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.requestOnlinePayment,expression:"requestOnlinePayment"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.requestOnlinePayment)?t._i(t.requestOnlinePayment,null)>-1:t.requestOnlinePayment},on:{change:function(e){var s=t.requestOnlinePayment,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&(t.requestOnlinePayment=s.concat([null])):r>-1&&(t.requestOnlinePayment=s.slice(0,r).concat(s.slice(r+1)))}else t.requestOnlinePayment=i}}}),t._v(" Request an Online Payment")])])]),t._v(" "),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("label",{staticClass:"col-4 col-form-label"},[t._v("Cash Tendered: ")]),t._v(" "),s("div",{staticClass:"col-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.cashTendered,expression:"cashTendered"}],staticClass:"form-control text-right",attrs:{disabled:t.requestOnlinePayment,type:"text"},domProps:{value:t.cashTendered},on:{input:function(e){e.target.composing||(t.cashTendered=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row",class:t.paymentChange>0?"font-weight-bold":""},[s("label",{staticClass:"col-4 col-form-label"},[t._v("Change: ")]),t._v(" "),s("div",{staticClass:"col-8"},[s("input",{staticClass:"form-control-plaintext text-right",attrs:{type:"text",readonly:""},domProps:{value:t._f("displayNumber")(t.paymentChange)}})])])])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-success text-uppercase font-weight-bold",attrs:{disabled:!t.requestOnlinePayment&&(t.paymentChange<0||t.isRequesting<0),type:"button"},on:{click:t.finishTransaction}},[s("i",{staticClass:"fas fa-check"}),t._v(" "+t._s(t.isRequesting?"Please wait...":"Finish Transaction"))])])]],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Check Out")]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("label",{staticClass:"col-7 col-form-label font-weight-bold text-uppercase"},[t._v("Guest ")]),t._v(" "),s("div",{staticClass:"col-5"},[s("button",{staticClass:"btn btn-success float-right"},[s("i",{staticClass:"fas fa-user"}),t._v(" Customer")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-body"},[s("div",{staticClass:"alert alert-success text-center font-weight-bold"},[s("i",{staticClass:"fas fa-check"}),t._v(" Transaction has been sucessful! Transaction Code 123-2938-23 has been sent!\n            ")])])}]}},741:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shadow"},[s("div",{staticClass:"pb-2 bg-white "},[t._m(0),t._v(" "),s("div",{staticStyle:{"overflow-y":"scroll"},style:{height:t.order_height+"px"}},t._l(t.order_list,function(e,a){return s("div",{staticClass:"row border-bottom no-gutters ",on:{click:function(e){t.openOrderDetail(a)}}},[s("div",{staticClass:"col-6 pl-2"},[s("span",{},[t._v(t._s(e.description))]),s("br"),t._v(" "),s("small",{staticClass:"font-italic"},[t._v("(PhP "+t._s(t._f("displayNumber")(e.price))+")")])]),t._v(" "),s("div",{staticClass:"col-2 pr-2 text-right"},[t._v(t._s(e.quantity))]),t._v(" "),s("div",{staticClass:"col-4 pr-2 text-right"},[t._v(t._s(t._f("displayNumber")(e.quantity*e.price)))])])})),t._v(" "),s("div",{staticClass:"row no-gutters py-1 "},[s("div",{staticClass:"col-6 pl-2 font-weight-bold"}),t._v(" "),s("div",{staticClass:"col-2 pr-2 font-weight-bold"},[t._v("Total:")]),t._v(" "),s("div",{staticClass:"col-4 pr-2 text-right font-weight-bold"},[t._v(t._s(t._f("displayNumber")(t.totalPrice)))])])]),t._v(" "),s("div",{ref:"orderDetail",staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content "},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("label",{staticClass:"col-3 col-form-label"},[t._v("Description: ")]),t._v(" "),s("div",{staticClass:"col-9"},[s("input",{staticClass:"form-control-plaintext text-uppercase",attrs:{type:"text",readonly:""},domProps:{value:t.selectedOrder.description}})])])]),t._v(" "),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row"},[s("label",{staticClass:"col-3 col-form-label"},[t._v("Price: ")]),t._v(" "),s("div",{staticClass:"col-9"},[s("input",{staticClass:"form-control-plaintext text-uppercase text-right",attrs:{type:"text",readonly:""},domProps:{value:t._f("displayNumber")(t.selectedOrder.price)}})])])]),t._v(" "),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:" row"},[s("label",{staticClass:"col-3 col-form-label"},[t._v("Quantity: ")]),t._v(" "),s("div",{staticClass:"col-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.orderDetailQuantity,expression:"orderDetailQuantity"}],staticClass:"form-control text-right",attrs:{type:"number"},domProps:{value:t.orderDetailQuantity},on:{input:function(e){e.target.composing||(t.orderDetailQuantity=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-3 col-form-label"},[t._v("Quantity: ")]),t._v(" "),s("div",{staticClass:"col-9"},[s("input",{staticClass:"form-control-plaintext text-uppercase text-right",attrs:{type:"text",readonly:""},domProps:{value:t._f("displayNumber")(t.selectedOrder.price*t.orderDetailQuantity)}})])])])]),t._v(" "),s("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:t.removeOrder}},[s("i",{staticClass:"fas fa-trash"}),t._v(" Remove Order")])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.saveChanges}},[s("i",{staticClass:"fas fa-save"}),t._v(" Save Changes")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row bg-primary no-gutters py-1 text-white"},[s("div",{staticClass:"col-6 pl-2 text-center font-weight-bold"},[t._v("Description")]),t._v(" "),s("div",{staticClass:"col-2 pl-2 text-center font-weight-bold"},[t._v("QTY")]),t._v(" "),s("div",{staticClass:"col-4 pl-2 text-center font-weight-bold"},[t._v("Sub Total")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Order Details")]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}]}}});
//# sourceMappingURL=25.40f843512e1c5a7f86f3.js.map