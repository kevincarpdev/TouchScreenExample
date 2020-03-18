<template>
    <slick class="c-main-menu-slideshow" ref="slick" :options="slickOptions">
        <div class="c-main-menu-slideshow__slide" style="background: url(/images/slides/center-courtyard.jpg)">
            <div class="c-main-menu-slideshow__caption">Center Courtyard</div>
        </div>
        <div class="c-main-menu-slideshow__slide" style="background: url(/images/slides/1.jpg?v=5)">
            <div class="c-main-menu-slideshow__caption">Bar & Piano Lounge</div>
        </div>
        <div class="c-main-menu-slideshow__slide" style="background: url(/images/slides/2.jpg?v=6)">
            <div class="c-main-menu-slideshow__caption">Floor 2 Fitness Studio</div>
        </div>
        <div class="c-main-menu-slideshow__slide" style="background: url(/images/slides/3.jpg?v=7)">
            <div class="c-main-menu-slideshow__caption">Floor 2 Pool</div>
        </div>
        <div class="c-main-menu-slideshow__slide" style="background: url(/images/slides/4.jpg?v=9)">
            <div class="c-main-menu-slideshow__caption">Floor 5 East Sun Deck</div>
        </div>
<!--        <div class="c-main-menu-slideshow__slide" style="background: url(/images/slides/5.jpg?v=2)">-->
<!--            <div class="c-main-menu-slideshow__caption">Dining room</div>-->
<!--        </div>-->
<!--        <div class="c-main-menu-slideshow__slide" style="background: url(/images/slides/6.jpg)">-->
<!--            <div class="c-main-menu-slideshow__caption">Club room</div>-->
<!--        </div>-->
<!--        <div class="c-main-menu-slideshow__slide" style="background: url(/images/slides/7.jpg?v=2)">-->
<!--            <div class="c-main-menu-slideshow__caption">1 bedroom master suite</div>-->
<!--        </div>-->
    </slick>
</template>

<script>

    import Slick from 'vue-slick';

    export default {

        components: { Slick },

        props: {},

        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    infinite: true,
                    fade: true,
                    arrows: false,
                    draggable: false
                },
            };
        },

        mounted() {
            //
        },

        methods: {}
    };
</script>
