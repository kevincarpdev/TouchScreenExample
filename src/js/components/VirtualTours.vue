<template>
    <div class="c-image-grid">
        <div class="container-fluid u-100">
            <div class="row">
                <div class="col-md-4">
                    <a class="c-image-grid__item" style="background-image: url('/images/virtual-tours/thumbnails/lobby.jpg')" v-on:click="openLobbyTour">
                        <h2 class="c-image-grid__item-title">Lobby/Living Room</h2>
                        <span class="c-image-grid__item-icon">
                        <i class="fa fa-virtual-tour"></i>
                    </span>
                    </a>
                </div>
                <div class="col-md-4">
                    <a class="c-image-grid__item" style="background-image: url('/images/virtual-tours/thumbnails/dining-room.jpg')" v-on:click="openDiningTour">
                        <h2 class="c-image-grid__item-title">Dining Room</h2>
                        <span class="c-image-grid__item-icon">
                        <i class="fa fa-virtual-tour"></i>
                    </span>
                    </a>
                </div>
                <div class="col-md-4">
                    <a class="c-image-grid__item" style="background-image: url('/images/virtual-tours/thumbnails/1br-den.jpg')" v-on:click="open1brTour">
                        <h2 class="c-image-grid__item-title">1BR Apartment</h2>
                        <span class="c-image-grid__item-icon">
                        <i class="fa fa-virtual-tour"></i>
                    </span>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <a class="c-image-grid__item" style="background-image: url('/images/virtual-tours/thumbnails/2br-living-kitchen.jpg')" v-on:click="open2brTour">
                        <h2 class="c-image-grid__item-title">2BR Apartment</h2>
                        <span class="c-image-grid__item-icon">
                        <i class="fa fa-virtual-tour"></i>
                    </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import fancybox from '@fancyapps/fancybox';

    export default {

        props: {},

        data:() => ({}),

        methods: {
            openLobbyTour() {
                $.fancybox.open({
                    src: 'tour-lobby.html?v=1',
                    type: 'iframe',
                    opts: {
                        margin : [0, 0],
                        gutter : 0,
                        keyboard : false,
                        arrows : false,
                        infobar : false,
                        toolbar : false,
                        iframe: {
                            preload : true,
                            css: {
                                width: '1000px',
                                height: '600px'
                            },
                            attr : {
                                scrolling : 'no'
                            }
                        },
                        afterShow : function(instance, current) {
                            console.info('Successfully loaded virtual tour!');
                        }
                    }
                });
            },

            openDiningTour() {
                $.fancybox.open({
                    src: 'tour-dining.html?v=1',
                    type: 'iframe',
                    opts: {
                        margin : [0, 0],
                        gutter : 0,
                        keyboard : false,
                        arrows : false,
                        infobar : false,
                        toolbar : false,
                        iframe: {
                            preload : true,
                            css: {
                                width: '1000px',
                                height: '600px'
                            },
                            attr : {
                                scrolling : 'no'
                            }
                        },
                        afterShow : function(instance, current) {
                            console.info('Successfully loaded virtual tour!');
                        }
                    }
                });
            },

            open1brTour() {
                $.fancybox.open({
                    src: 'tour-1br.html?v=2',
                    type: 'iframe',
                    opts: {
                        margin : [0, 0],
                        gutter : 0,
                        keyboard : false,
                        arrows : false,
                        infobar : false,
                        toolbar : false,
                        iframe: {
                            preload : true,
                            css: {
                                width: '1000px',
                                height: '600px'
                            },
                            attr : {
                                scrolling : 'no'
                            }
                        },
                        afterShow : function(instance, current) {
                            console.info('Successfully loaded virtual tour!');
                        }
                    }
                });
            },

            open2brTour() {
                $.fancybox.open({
                    src: 'tour-2br.html?v=1',
                    type: 'iframe',
                    opts: {
                        margin : [0, 0],
                        gutter : 0,
                        keyboard : false,
                        arrows : false,
                        infobar : false,
                        toolbar : false,
                        iframe: {
                            preload : true,
                            css: {
                                width: '1000px',
                                height: '600px'
                            },
                            attr : {
                                scrolling : 'no'
                            }
                        },
                        afterShow : function(instance, current) {
                            console.info('Successfully loaded virtual tour!');
                        }
                    }
                });
            }
        }
    };
</script>
