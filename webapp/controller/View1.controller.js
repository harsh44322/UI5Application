sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            },
            onNav: function(){
                var oRouter = this.getOwnerComponent().getRouter(this);
                oRouter.navTo("detail");
            }
        });
    });
