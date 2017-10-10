define([
    'adapt-contrib-core/js/adapt',
    'adapt-contrib-core/js/models/adaptModel'
], function (Adapt, AdaptModel) {

    var ArticleModel = AdaptModel.extend({
        _parent:'contentObjects',
        _siblings:'articles',
        _children: 'blocks'
    });

    return ArticleModel;

});
