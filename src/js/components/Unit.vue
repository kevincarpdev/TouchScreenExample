<template>
    <div class="o-unit u-100">

        <header class="o-unit__header">
            <h1 class="o-unit__heading">{{ unitName }}</h1>
            <button class="o-unit__back-button c-button c-button--default" v-on:click="goBack">Back</button>
            <ul class="o-unit__info" v-if="isUnit">
                <li v-if="unitType == 'studio'">Studio</li>
                <li v-if="bedrooms > 1">{{ bedrooms }} Bedrooms</li>
                <li v-else-if="bedrooms == 0">{{ bedrooms }} Bedrooms</li>
                <li v-else>{{ bedrooms }} Bedroom</li>
                <li v-if="bathrooms > 1">{{ bathrooms }} Bathrooms</li>
                <li v-else>{{ bathrooms }} Bathroom</li>
                <li v-if="den">Den</li>
                <li v-if="balcony">Balcony</li>
                <li>{{ sqft }} Gross Sq. Ft.</li>
                <li>{{ insqft }} Interior Sq. Ft.</li>
                <li v-if="handicap"><i class="fa fa-accessible"></i></li>
            </ul>
        </header>

        <div class="o-unit__details">
            <div class="row">
                <div :class="columns">
                    <div v-if="isUnit" class="o-unit__image">
                        <img :src="imageUrl">
                    </div>
                    <div v-else class="o-unit__common-image">
                        <img v-if="unitType == '1br-den'" src="/images/gallery/1br/1BR-Kitchen.jpg">
                        <img v-if="unitType == '2br'" src="/images/gallery/2br/2BR-LivingRoomKitchen.jpg">
                        <img v-if="unitType == 'bar'" src="/images/gallery/lobby/bar-piano-lounge.jpg">
                        <img v-if="unitType == 'piano-lounge'" src="/images/gallery/lobby/bar-piano-lounge.jpg">
                        <img v-if="unitType == 'fitness-studio'" src="/images/gallery/fitness-studio/fitness-studio.jpg">
                        <img v-if="unitType == 'the-garden'" src="/images/gallery/lobby/The-Garden.jpg">
                        <img v-if="unitType == 'pool'" src="/images/gallery/lobby/pool.jpg">
                        <img v-if="unitType == 'east-sun-deck'" src="/images/gallery/exterior/east-sun-deck.jpg">
                        <img v-if="unitType == 'sim'" src="/images/amenities/sports-simulation-lounge.jpg">
                        <img v-if="unitType == 'south-lobby'" src="/images/gallery/lobby/South-Lobby.jpg">
                        <img v-if="unitType == 'center-courtyard'" src="/images/gallery/lobby/center-courtyard.jpg">
                        <img v-if="unitType == 'dining'" src="/images/gallery/lobby/dining.jpg">

                    </div>
                </div>
                <div class="col-md-3" v-if="hasSidebar">
                    <div class="o-unit__thumbnails c-image-grid c-image-grid--in-sidebar">
                        <div class="1br-den-gallery" v-if="unitType == '1br-den'">
                            <a class="c-image-grid__item" style="background-image: url('/images/virtual-tours/thumbnails/1br-den.jpg')" data-fancybox="1br-den-gallery" data-caption="1BR Apartment" data-loop="true" href="/images/gallery/1br/1BR-Kitchen.jpg">
                                <h2 class="c-image-grid__item-title">Gallery</h2>
                            </a>
                            <a data-fancybox="1br-den-gallery" data-caption="1BR - Living Room" data-loop="true" href="/images/gallery/1br/1BR-LivingRoom.jpg" style="display: none"></a>
                            <a data-fancybox="1br-den-gallery" data-caption="1BR - Den" data-loop="true" href="/images/gallery/1br/1BR-Den.jpg" style="display: none"></a>
                            <a data-fancybox="1br-den-gallery" data-caption="1BR - Bedroom" data-loop="true" href="/images/gallery/1br/1BR-BedRoom.jpg" style="display: none"></a>
                        </div>
                        <div class="2br-gallery" v-if="unitType == '2br'">
                            <a class="c-image-grid__item" style="background-image: url('/images/virtual-tours/thumbnails/2br-living-kitchen.jpg?v=1')" data-fancybox="2br-gallery" data-caption="2BR Apartment" data-loop="true" href="/images/gallery/2br/2BR-LivingRoomKitchen.jpg?v=1">
                                <h2 class="c-image-grid__item-title">Gallery</h2>
                            </a>
                            <a data-fancybox="2br-gallery" data-caption="2BR - Bedroom" data-loop="true" href="/images/gallery/2br/2BR-Bedroom1.jpg?v=1" style="display: none"></a>
                        </div>
                        <div class="bar-gallery" v-if="unitType == 'bar'">
                            <a class="c-image-grid__item" style="background-image: url('/images/virtual-tours/thumbnails/lobby.jpg?v=1')" data-fancybox="gallery" data-caption="Bar" data-loop="true" href="/images/gallery/lobby/Lobby-Bar-Area.jpg?v=1">
                                <h2 class="c-image-grid__item-title">Gallery</h2>
                            </a>
                        </div>
                        <div class="cafe-gallery" v-if="unitType == 'cafe'">
                            <a class="c-image-grid__item" style="background-image: url('/images/gallery/thumbnails/cafe.jpg?v=1')" data-fancybox="gallery" data-caption="Cafe" data-loop="true" href="/images/gallery/dining-room/Echo-Lake-Dining-Room2.jpg?v=1">
                                <h2 class="c-image-grid__item-title">Gallery</h2>
                            </a>
                        </div>
                        <div class="clubroom-gallery" v-if="unitType == 'clubroom'">
                            <a class="c-image-grid__item" style="background-image: url('/images/gallery/thumbnails/club-room.jpg?v=1')" data-fancybox="gallery" data-caption="Club Room" data-loop="true" href="/images/gallery/club-room/Echo-Lake-Club-Room.jpg?v=1">
                                <h2 class="c-image-grid__item-title">Gallery</h2>
                            </a>
                        </div>
                    </div>
                    <button class="c-button c-button--block c-button--primary" v-on:click="openVirtualTour(tourUrl)" v-if="tourUrl">Virtual Tour</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        props: {},

        computed: {
            id() {
                return this.$route.params.id; //gets the url parameter (id), example: 145, bar, 345, loung, etc.
            },
            unitNumber() {
                if(this.isUnit) {
                    return this.$store.state.units[this.id].number
                }
                return false;
            },
            unitName() {
                if(this.isUnit) {
                    return this.$store.state.units[this.id].name + ' ' + this.unitNumber
                } else {
                    return this.$store.state.units[this.id].name
                }
            },
            description() {
                return this.$store.state.units[this.id].description
            },
            unitType() {
                return this.$store.state.units[this.id].type
            },
            image() {
                return this.$store.state.units[this.id].image
            },
            imageUrl() {
                if(this.image) {
                    return '/images/units/' + this.image
                }
                return '/images/units/placeholder.png'
            },
            isUnit() {
                if(this.unitType !== '1br' && this.unitType !== '1br-den' && this.unitType !== '2br' && this.unitType !== 'studio') {
                    return false
                } else {
                    return true
                }
            },
            bedrooms() {
                if(this.isUnit) {
                    return this.$store.state.units[this.id].bedrooms
                }
                return false
            },
            bathrooms() {
                if(this.isUnit) {
                    return this.$store.state.units[this.id].bathrooms
                }
                return false
            },
            sqft() {
                if(this.isUnit) {
                    let num = this.$store.state.units[this.id].sqft;
                    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // regex inserts comma
                }
                return false
            },
            insqft() {
                if(this.isUnit) {
                    let num = this.$store.state.units[this.id].insqft;
                    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // regex inserts comma
                }
                return false
            },
            den() {
                if(this.isUnit) {
                    return this.$store.state.units[this.id].den
                }
                return false
            },
            balcony() {
                if(this.isUnit) {
                    return this.$store.state.units[this.id].balcony
                }
                return false
            },
            handicap() {
                if(this.isUnit) {
                    return this.$store.state.units[this.id].handicap
                }
                return false
            },
            gallery() {
                return this.$store.state.units[this.id].gallery
            },
            tour() {
                return this.$store.state.units[this.id].tour
            },
            tourUrl() {
                if(this.unitType == '1br-den') {
                    return 'tour-1br.html?v=1'
                } else if(this.unitType == '2br') {
                    return 'tour-2br.html?v=1'
                } else if(this.unitType == 'cafe') {
                    return 'tour-dining.html?v=1'
                }
                return false
            },
            hasSidebar() {
                if(! this.isUnit) {
                    return false;
                }
                if(this.gallery || this.tour) {
                    return true
                }
                return false
            },
            columns() {
                if(this.hasSidebar) {
                    return 'col-md-9'
                }
                return 'col-md-12'
            }
        },

        methods: {
            goBack: function() {
                this.$router.go(-1)
            },
            openVirtualTour: function(url) {
                $.fancybox.open({
                    src: url,
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
                        }
                    }
                });
            },
        },

        data: function () {
            return {

            }
        }
    };
</script>
