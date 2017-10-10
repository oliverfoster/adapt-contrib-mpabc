define([
    'adapt-contrib-core/js/adapt',
    'adapt-contrib-core/js/models/adaptModel'
], function (Adapt, AdaptModel) {

    var ComponentModel = AdaptModel.extend({
        _parent:'blocks',
    	_siblings:'components'
    });

    return ComponentModel;

});
