(function($){
    var ActionsView = Backbone.View.extend({
        el: $('.actions'),
        events: {
            'click button#fight--monster': 'beginFight',
            'click button#heal' : 'heal',
            'click button#train' : 'train'
        },
        initialize: function () {
            _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

            this.template = $('#template--actions').html();
            this.render();
        },
        render: function () {
            $(this.el).append(this.template);
        },
        beginFight: function () {
            alert('begin fight');
        },
        heal: function () {
            alert('heal');
        },
        train: function () {
            alert('begin training');
        }
    });

    var actionsView = new ActionsView();
})(jQuery);


game = {};

game.setup = (function (Backbone) {

    function createPlayer () {
        var PlayerView = Backbone.View.extend({
            el: $('.player-info'),
            initialize : function () {
                _.bindAll(this, 'render');

                this.template = $('#template--player-info').html();
                this.render();
            },
            render: function () {
                $(this.el).append(this.template);
            }
        })

        var playerView = new PlayerView();
    }

    function init () {
        createPlayer();
    }

    return {
        init : init
    }

})(Backbone);

$(document).ready(function() {

    game.setup.init();

    (function($) {
        $.fn.slideFade = function(speed, distance) {
            var that = this,
                slideSpeed = speed || 400,
                slideDistance = distance || 80;

            setTimeout(function () {
                that.animate({
                    'right': '-' + distance + 'px',
                    'opacity' : 0
                }, slideSpeed, 'linear', function () {
                    this.remove();
                });
            }, 50);
            
     
            return this;
        };
    }(jQuery));

});
