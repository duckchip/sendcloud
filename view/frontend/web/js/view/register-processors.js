define([
    'uiComponent',
    'Magento_Checkout/js/model/shipping-save-processor',
    'SendCloud_SendCloud/js/model/shipping-save-processor/servicepoint'
    ],
    function (
        Component,
        shippingSaveProcessor,
        servicePointSaveProcessor
    ) {
        'use strict';

        /** Register save shipping address processor */
        shippingSaveProcessor.registerProcessor("new-customer-address", servicePointSaveProcessor);

        /** Add view logic here if needed */
        return Component.extend({});
}
);
