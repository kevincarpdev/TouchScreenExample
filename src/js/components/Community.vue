<template>
    <div class="c-community-map">
        <div class="c-community-map__map" id="o-community-map"></div>
        <div class="c-community-map__legend">
            <h2 class="title">Legend</h2>
            <ul id="legendList" class="list">
                <li @click="toggleGroup('shopping')" :class="{active: activeType.includes('shopping') }"><img src="/images/markers/shopping.png" alt="Shopping"> <span>Shopping</span></li>
                <li @click="toggleGroup('dining')" :class="{active: activeType.includes('dining') }"><img src="/images/markers/dining.png" alt="Dining"> <span>Dining</span></li>
                <li @click="toggleGroup('recreation')" :class="{active: activeType.includes('recreation') }"><img src="/images/markers/recreation.png" alt="Recreation"> <span>Recreation</span></li>
                <li @click="toggleGroup('entertainment')" :class="{active: activeType.includes('entertainment') }"><img src="/images/markers/entertainment.png" alt="Entertainment"> <span>Entertainment</span></li>
                <li @click="toggleGroup('education')" :class="{active: activeType.includes('education') }"><img src="/images/markers/education.png" alt="Education"> <span>Education</span></li>
                <li @click="toggleGroup('transportation')" :class="{active: activeType.includes('transportation') }"><img src="/images/markers/transportation.png" alt="Transportation"> <span>Transportation</span></li>
                <li @click="toggleGroup('culture')" :class="{active: activeType.includes('culture') }"><img src="/images/markers/culture.png" alt="Transportation"> <span>Culture</span></li>
                <li @click="toggleGroup('golf')" :class="{active: activeType.includes('golf') }"><img src="/images/markers/golf.png" alt="Golf"> <span>Golf</span></li>
                <li class="active clear" v-if="activeType.length" @click="clearGroup()"><span class="c-legend__circle community"></span> <span>Clear</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'o-community-map',
        props: ['name'],
        data: function () {
            return {
                active: false,
                activeType: [],
                mapName: 'o-community-map',
                places: [

                    {
                        title: 'Ovation at Riverwalk',
                        url: 'https://www.ovationatriverwalk.com',
                        image: '/images/places/valley-forge.jpg',
                        address: '1 Riverwalk, Plainsboro, NJ 08536',
                        latitude: 40.338902,
                        longitude: -74.628983,
                        type: 'main',
                        summary: 'not used: using logo for static pin (no pop up)'
                    }
                    ,
                    {
                        title: 'AMC MarketFair10',
                        url: 'https://www.amctheatres.com/movie-theatres/philadelphia/amc-marketfair-10',
                        image: '/images/places/valley-forge.jpg',
                        address: '3521 US-1 Princeton, NJ',
                        latitude: 40.313690,
                        longitude: -74.659880,
                        type: 'recreation',
                        summary: 'A ten-screen movie theater on US 1 in Princeton.'
                    }
                    ,
                    {
                        title: 'Kelsey Theater at Mercer County Community College',
                        url: 'http://kelsey.mccc.edu/',
                        image: '/images/places/valley-forge.jpg',
                        address: '1200 Old Trenton Road, West Windsor, NJ',
                        latitude: 40.256830,
                        longitude: -74.655280,
                        type: 'entertainment',
                        summary: 'An intimate theater on the campus of Mercer County Community College, Kelsey Theater is home to a modern dance ensemble, symphonic band & 12 resident & semi-professional theater companies.'
                    }
                    ,
                    {
                        title: 'Princeton Garden Theater',
                        url: 'https://princetongardentheatre.org/',
                        image: '/images/places/valley-forge.jpg',
                        address: '160 Nassau Street, Princeton, NJ',
                        latitude: 40.350670,
                        longitude: -74.657560,
                        type: 'entertainment',
                        summary: 'The Princeton Garden Theatre is a historic movie theater on Nassau Street in Princeton. Owned by Princeton University, it is operated by Renew Theaters, a non-profit which manages golden-age movie theaters.'
                    }
                    ,
                    {
                        title: 'The Meadows at Middlesex Golf Course',
                        url: 'https://www.middlesexcountygolf.com',
                        image: '/images/places/valley-forge.jpg',
                        address: '70 Hunters Glen Dr, Plainsboro Township, NJ 08536',
                        latitude: 40.332600,
                        longitude: -74.564758,
                        type: 'golf',
                        summary: 'An 18-hole, 6,290-yard, par-70 championship course, this beautifully-kept, bent grass golf course was designed by Joe Finger in 1972 and finished in 1980 by Tom Fazio.'
                    }
                    ,
                    {
                        title: 'Palmer Square',
                        url: 'https://www.palmersquare.com/',
                        image: '/images/places/valley-forge.jpg',
                        address: '3 Palmer Square, Princeton, NJ 08542',
                        latitude: 40.3494456,
                        longitude: -74.6613085,
                        type: 'shopping',
                        summary: 'Palmer Square is a public square and planned development in the heart of Princeton, across from Nassau Street and Princeton University. It is a collection of boutiques, restaurants, salons, studios, and offices.'
                    }
                    ,
                    {
                        title: 'TPC Jasna Polana',
                        url: 'https://tpc.com/jasnapolana/',
                        image: '/images/places/valley-forge.jpg',
                        address: '4519 Province Line Road, Princeton , NJ',
                        latitude: 40.334629,
                        longitude: -74.691467,
                        type: 'golf',
                        summary: 'Jasna Polana is the former 226-acre Princeton estate of John Seward Johnson, built in the early 1970s. In 1998, Jasna Polana became a private country club with a Gary Player-designed golf course.'
                    }
                    ,
                    {
                        title: 'Cherry Valley Country Club',
                        url: 'https://www.clubcorp.com/Clubs/Cherry-Valley-Country-Club',
                        image: '/images/places/valley-forge.jpg',
                        address: '125 Country Club Drive, Skillman',
                        latitude: 40.400641244398200,
                        longitude: -74.71285164356230,
                        type: 'golf',
                        summary: 'Cherry Valley Country Club, in the heart of Skillman, is the proud winner of the 2016 Club of the Year Award from the New Jersey Golf Foundation.'
                    }
                    ,
                    {
                        title: 'Princeton Junction Station at West Windsor',
                        url: 'https://www.amtrak.com/stations/pjc',
                        image: '/images/places/valley-forge.jpg',
                        address: '2 Wallace Circle, Princeton Junction, NJ',
                        latitude: 40.3158177,
                        longitude: -74.6240893,
                        type: 'transportation',
                        summary: 'Princeton Junction is a railroad station in West Windsor Township. It serves NJ Transit (NJT) and Amtrak on the Northeast Corridor (NEC), and NJ Transit on the Princeton Branch.'
                    }
                    ,
                    {
                        title: 'Princeton Train Station',
                        url: 'https://www.njtransit.com/rg/rg_servlet.srv?hdnPageAction=TrainStationLookupFrom&selStation=124',
                        image: '/images/places/valley-forge.jpg',
                        address: 'Princeton Railroad Station, Princeton, NJ 08540',
                        latitude: 40.369750,
                        longitude: -74.610770,
                        type: 'transportation',
                        summary: 'Princeton is the northern terminus of the Princeton Branch commuter rail service and is located on the Princeton University campus. At the branch\'s southern end at Princeton Junction, connections are available to NJT\'s Northeast Corridor Line and peak-hour Amtrak trains. The shuttle train between the two stations is known as the \"Dinky\", and has also been known as the \"PJ&B\", for \"Princeton Junction and Back\". It is the shortest scheduled commuter rail line in the United States.'
                    }
                    ,
                    {
                        title: 'Princeton University',
                        url: 'https://www.princeton.edu/',
                        image: '/images/places/valley-forge.jpg',
                        address: 'Princeton University, Princeton, NJ 08544',
                        latitude: 40.349170,
                        longitude: -74.658150,
                        type: 'education',
                        summary: 'Princeton University is a private, Ivy League research university. Founded in 1746 as the College of New Jersey, Princeton is the fourth-oldest institution of higher education in the United States and one of the nine colonial colleges chartered before the American Revolution.'
                    }
                    ,
                    {
                        title: 'Delaware & Raritan Canal State Park',
                        url: 'https://www.state.nj.us/dep/parksandforests/parks/drcanal.html',
                        image: '/images/places/valley-forge.jpg',
                        address: '145 Mapleton Rd., Princeton, NJ',
                        latitude: 40.368076,
                        longitude: -74.6160158,
                        type: 'recreation',
                        summary: 'The Delaware and Raritan Canal State Park is one of central New Jersey’s most popular recreational corridors for canoeing, jogging, hiking, bicycling, fishing and horseback riding. The 70-mile linear park is a valuable wildlife corridor connecting fields and forests.'
                    }
                    ,
                    {
                        title: 'Terhune Orchards & Wines ',
                        url: 'https://terhuneorchards.com/',
                        image: '/images/places/valley-forge.jpg',
                        address: '330 Cold Soil Road, Princeton, NJ',
                        latitude: 40.3309545,
                        longitude: -74.725244,
                        type: 'recreation',
                        summary: 'Terhune Orchards is a winery in Lawrence Township in Mercer County. A family produce farm since 1975, the vineyard was first planted in 2003, and opened to the public in 2010. Terhune has 5 acres of grapes under cultivation, and produces an estimated 1,100 cases of wine per year.'
                    }
                    ,
                    {
                        title: 'MarketFair Mall',
                        url: 'https://www.marketfairmall.com/',
                        image: '/images/places/valley-forge.jpg',
                        address: '3535 US-1, Princeton, NJ',
                        latitude: 40.3146987,
                        longitude: -74.6610968,
                        type: 'shopping',
                        summary: 'MarketFair Mall is a shopping mall in West Windsor with 47 stores and a focus on home furnishings.'
                    }
                    ,
                    {
                        title: 'Nassau Street',
                        url: 'https://www.wegmans.com/stores/princeton-nj.html?utm_source=G&utm_medium=local&utm_campaign=google-local',
                        image: '/images/places/valley-forge.jpg',
                        address: '40 Nassau St, Princeton, NJ 08542',
                        latitude: 40.349278,
                        longitude: -74.661817,
                        type: 'shopping',
                        summary: 'Nassau is Princeton\'s Main Street - you can find everything you want and need from dining, to shopping to services.'
                    }
                    ,
                    {
                        title: 'Quaker Bridge Mall',
                        url: 'https://www.simon.com/mall/quaker-bridge-mall',
                        image: '/images/places/valley-forge.jpg',
                        address: '3320 Brunswick Pike, Lawrenceville, NJ 08648',
                        latitude: 40.289832,
                        longitude: -74.682977,
                        type: 'shopping',
                        summary: 'A modern, two level indoor mall in Lawrenceville.'
                    }
                    ,
                    {
                        title: 'Wegman\'s',
                        url: 'https://www.wegmans.com/stores/princeton-nj.html?utm_source=G&utm_medium=local&utm_campaign=google-local',
                        image: '/images/places/valley-forge.jpg',
                        address: '240 Nassau Park Blvd, Princeton, NJ 08540',
                        latitude: 40.306441,
                        longitude: -74.676345,
                        type: 'shopping',
                        summary: 'Pharmacy, Fresh Produce, Meats, Seafood, Bakery, and a fantastic prepared foods department.'
                    }
                    ,
                    {
                        title: 'Mercer Mall',
                        url: 'https://www.mallscenters.com/malls/new-jersey/mercer-mall',
                        image: '/images/places/valley-forge.jpg',
                        address: '3345 US Highway 1 Lawrenceville, NJ',
                        latitude: 40.295400,
                        longitude: -74.682534,
                        type: 'shopping',
                        summary: 'A large shopping center with popular retailers.'
                    }
                    ,
                    {
                        title: 'McCarter Theatre Center',
                        url: 'https://www.mccarter.org/',
                        image: '/images/places/valley-forge.jpg',
                        address: '91 University Place, Princeton, NJ',
                        latitude: 40.345081,
                        longitude: -74.660660,
                        type: 'entertainment',
                        summary: 'On the Princeton University campus, McCarter is an independent, non-profit professional theater, founded in 1930. It produces more than 200 drama, dance & music productions a year.'
                    }
                    ,
                    {
                        title: 'Hopewell Theater',
                        url: 'https://hopewelltheater.com/',
                        image: '/images/places/valley-forge.jpg',
                        address: '5S Greenwood Ave., Hopewell, NJ',
                        latitude: 40.388561,
                        longitude: -74.761797,
                        type: 'entertainment',
                        summary: 'Hopewell Theater is a performing arts theater presenting movies, live music, talks & performances in one state-of-the-art dine-in theater.'
                    }
                    ,
                    {
                        title: 'Nassau Inn',
                        url: 'https://www.nassauinn.com/',
                        image: '/images/places/valley-forge.jpg',
                        address: '10 Palmer Square, Princeton, NJ',
                        latitude: 40.350434,
                        longitude: -74.661479,
                        type: 'dining',
                        summary: 'A block from Princeton University, this circa-1930s hotel is set in a historic Revolutionary War-era tavern. Its fieldstone-and-shingle exterior overlooks Palmer Square.'
                    }
                    ,
                    {
                        title: 'Salt Creek Grill',
                        url: 'https://www.saltcreekgrille.com/',
                        image: '/images/places/valley-forge.jpg',
                        address: '1 Rockingham Row, Princeton, NJ',
                        latitude: 40.354870,
                        longitude: -74.612893,
                        type: 'dining',
                        summary: 'Salt Creek Grille is an upscale yet casual American-themed grille where the culinary approach follows the time-honored tradition of grilling meats over hot, mesquite embers.'
                    }
                    ,
                    {
                        title: 'Princeton Dance and Theater',
                        url: 'https://princetondance.com/',
                        image: '/images/places/valley-forge.jpg',
                        address: '116 Rockingham Row, Princeton, NJ 08540',
                        latitude: 40.355159,
                        longitude: -74.613325,
                        type: 'entertainment',
                        summary: 'Princeton Dance and Theater Studio, Inc. was founded in 2003 by Susan Jaffe (former principal dancer at American Ballet Theater) and Risa Kaplowitz (former principal dancer with Dayton Ballet). Its mission is to provide students with the highest quality training available enabling them to grow as performing artists and dance enthusiasts.'
                    }
                    ,
                    {
                        title: 'Princeton Public Library',
                        url: 'https://princetonlibrary.org/',
                        image: '/images/places/valley-forge.jpg',
                        address: '65 Witherspoon St., Princeton, NJ',
                        latitude: 40.351722,
                        longitude: -74.660325,
                        type: 'education',
                        summary: 'Princeton Public Library is the most visited municipal public library in New Jersey with over 860,000 annual visitors who borrow 550,000 items, and ask more than 83,000 reference questions.'
                    }
                    ,
                    {
                        title: 'Morven Museum and Garden',
                        url: 'https://www.morven.org/',
                        image: '/images/places/valley-forge.jpg',
                        address: '55 Stockton Street, Princeton, NJ',
                        latitude: 40.347791,
                        longitude: -74.666923,
                        type: 'recreation',
                        summary: 'Morven is a historic 18th-century house at 55 Stockton Street in Princeton. It served as the governor\'s mansion for nearly four decades in the twentieth century, and has been designated a National Historic Landmark.'
                    }
                    ,
                    {
                        title: 'Plainsboro Library',
                        url: 'https://plainsborolibrary.org/',
                        image: '/images/places/valley-forge.jpg',
                        address: '9 Van Doren St, Plainsboro Township, NJ',
                        latitude: 40.334868,
                        longitude: -74.590879,
                        type: 'education',
                        summary: 'An active, full service community public library with an array of services, large collection, and a schedule of adult and children\'s programs.'
                    }
                    ,
                    {
                        title: 'Arts Council of Princeton',
                        url: 'http://artscouncilofprinceton.org/',
                        image: '/images/places/valley-forge.jpg',
                        address: '102 Witherspoon St., Princeton, NJ',
                        latitude: 40.352105,
                        longitude: -74.661046,
                        type: 'culture',
                        summary: 'The ACP presents a wide range of arts and arts education programs including studio-based classes and workshops in the visual, performing and media arts, exhibitions, performances, and free community cultural events. '
                    }
                    ,
                    {
                        title: 'Historic Wicoff House - Plainsboro Museum',
                        url: 'https://www.plainsboronj.com/792/Historic-Wicoff-House-Museum',
                        image: '/images/places/valley-forge.jpg',
                        address: '641 Plainsboro Road, Plainsboro, NJ',
                        latitude: 40.333241,
                        longitude: -74.585243,
                        type: 'culture',
                        summary: 'Built around 1880, it was the home of John and Catherine Wicoff. With the help of preservation grant funding and in conjunction with the 100th anniversary of the founding of Plainsboro, the Plainsboro Museum, housed once more inside the Wicoff House, was re-opened to the public in 2019.'
                    }
                    ,
                    {
                        title: 'Westminster Choir College',
                        url: 'https://www.rider.edu/academics/colleges-schools/westminster-college-of-the-arts/westminster-conservatory-music',
                        image: '/images/places/valley-forge.jpg',
                        address: '101 Walnut Lane, Princeton, NJ',
                        latitude: 40.357036,
                        longitude: -74.654442,
                        type: 'entertainment',
                        summary: 'On the campus of Rider University, Westminster Choir College is celebrating its centennial. The College offers frequent performances and classes.'
                    }
                    ,
                    {
                        title: 'Princeton Senior Resource Center',
                        url: 'https://www.princetonsenior.org/',
                        image: '/images/places/valley-forge.jpg',
                        address: '45 Stockton St., Princeton',
                        latitude: 40.346795,
                        longitude: -74.667108,
                        type: 'recreation',
                        summary: 'A large and active senior center, the PSRC offers classes, programs, and other resources for seniors.'
                    }
                    ,
                    {
                        title: 'Romeo\'s Ristorante Italiano',
                        url: 'https://www.romeosplainsboro.com/',
                        image: '/images/places/valley-forge.jpg',
                        address: '10 Schalks Crossing Road, Plainsbor Twp., NJ',
                        latitude: 40.336739,
                        longitude: -74.594526,
                        type: 'dining',
                        summary: 'A highly-rated, family owned pizzeria and italian eatery in Plainsboro Plaza.'
                    }
                    ,
                    {
                        title: 'Springdale Golf Club',
                        url: 'https://www.springdalegc.org/',
                        image: '/images/places/valley-forge.jpg',
                        address: '1895 Clubhouse Drive, Princeton, NJ',
                        latitude: 40.337549,
                        longitude: -74.661300,
                        type: 'golf',
                        summary: 'Nestled into the beautiful landscape and historic architecture of Princeton University, Springdale Golf Club was formed in 1895, establishing it as one of the first private clubs in New Jersey.'
                    }
                    ,
                    {
                        title: 'Princeton Country Club',
                        url: 'https://www.golfmercercounty.com/mountain-view/princeton/',
                        image: '/images/places/valley-forge.jpg',
                        address: '1 Wheeler Way, Princeton, NJ',
                        latitude: 40.309059,
                        longitude: -74.670865,
                        type: 'golf',
                        summary: 'Princeton CC is a challenging 18 hole championship golf facility which became part of the Mercer County Park Commission in 1965.'
                    }
                    ,
                    {
                        title: 'Mercer Oaks Golf Course',
                        url: 'https://www.golfmercercounty.com/mountain-view/mercer-oaks/',
                        image: '/images/places/valley-forge.jpg',
                        address: '725 Village Road, West Windsor Township, NJ',
                        latitude: 40.282380,
                        longitude: -74.649137,
                        type: 'golf',
                        summary: 'Mercer Oaks offers two championship courses at the West Windsor location both open year round (weather permitting). This site provides visitors with amenities second to none for a daily fee facility.'
                    }
                    ,
                    {
                        title: 'Bunker Hill Golf Course',
                        url: 'https://bunker.distinctgolf.com/',
                        image: '/images/places/valley-forge.jpg',
                        address: '20 Bunker Hill Road, Princeton, NJ',
                        latitude: 40.424849,
                        longitude: -74.571913,
                        type: 'golf',
                        summary: 'Bunker Hill Golf Club offers terrific views and challenging play for golfers at every skill level.'
                    }
                    ,
                    {
                        title: 'The Meadows at Middlesex Golf Course',
                        url: 'https://www.middlesexcountygolf.com/meadows-golf-course?utm_source=google&utm_medium=organic&utm_campaign=gmb',
                        image: '/images/places/valley-forge.jpg',
                        address: '70 Hunters Glen Dr., Princeton, NJ',
                        latitude: 40.428011,
                        longitude: -74.588988,
                        type: 'golf',
                        summary: 'The Meadows is an 18-hole, 6290-yard, par-70 championship course. Originally purchased by the MCIA in early 1999, ownership of the Meadows was transferred to Middlesex County in 2014.'
                    }
                    ,
                    {
                        title: 'Plainsboro Village Center',
                        url: '',
                        image: '/images/places/valley-forge.jpg',
                        address: '6 Market Street, Princeton, NJ',
                        latitude: 40.335522,
                        longitude: -74.592262,
                        type: 'shopping',
                        summary: 'An open air town center-style shopping center, Plainsboro Village Center consists of retail, medical and office space.'
                    }
                    ,
                    {
                        title: 'Grounds for Sculpture',
                        url: 'https://www.groundsforsculpture.org/',
                        image: '/images/places/valley-forge.jpg',
                        address: '80 SCULPTORS WAY, HAMILTON, NJ 08619',
                        latitude: 40.237014,
                        longitude: -74.719270,
                        type: 'culture',
                        summary: 'Grounds For Sculpture is a 42-acre sculpture park and museum located in Hamilton on the former site of the New Jersey State Fairgrounds.'
                    }
                    ,
                    {
                        title: 'Princeton Racquet Club',
                        url: 'http://www.princetonracquetclub.com/',
                        image: '/images/places/valley-forge.jpg',
                        address: '150 Raymond Road, Princeton, NJ',
                        latitude: 40.381713,
                        longitude: -74.585644,
                        type: 'recreation',
                        summary: 'Princeton Racquet Club consists of six cushion indoor deco turf hard courts and 10 outdoor courts; 6 Har Tru and 4 hard deco turf.'
                    }
                    ,
                    {
                        title: 'Nassau Tennis Club',
                        url: 'https://nassautennis.net/',
                        image: '/images/places/valley-forge.jpg',
                        address: '1800 US-206, Skillman, NJ',
                        latitude: 40.425551,
                        longitude: -74.658120,
                        type: 'recreation',
                        summary: 'Situated on 12 acres, the club has indoor and outdoor tennis courts.'
                    }
                    ,
                    {
                        title: 'Millstone River Park',
                        url: 'https://www.plainsboronj.com/Facilities/Facility/Details/Millstone-River-Park-26',
                        image: '/images/places/valley-forge.jpg',
                        address: '1 Plainsboro Rd, Plainsboro Township, NJ 08536',
                        latitude: 40.340251,
                        longitude: -74.623436,
                        type: 'recreation',
                        summary: 'The park offers a scenic walking trail along the Millstone River dotted with wildflowers.'
                    }
                    ,
                    {
                        title: 'Sayen House & Garden',
                        url: 'http://www.hamiltonnj.com/SAYENGARDENS',
                        image: '/images/places/valley-forge.jpg',
                        address: '155 Hughes Drive, Hamilton Square, NJ',
                        latitude: 40.235868,
                        longitude: -74.658418,
                        type: 'entertainment',
                        summary: 'Sayen Park Botanical Garden, also known as Sayen House and Gardens, is a municipal park and botanical garden located in Hamilton Township. The garden is open year-round from dawn to dusk, though park activity is at its peak in the spring.'
                    }
                ],
                types: {
                    'main': {
                        image: '/images/markers/ovation-marker.png'
                    },
                    'shopping': {
                        image: '/images/markers/shopping.png'
                    },
                    'dining': {
                        image: '/images/markers/dining.png'
                    },
                    'recreation': {
                        image: '/images/markers/recreation.png'
                    },
                    'education': {
                        image: '/images/markers/education.png'
                    },
                    'entertainment': {
                        image: '/images/markers/entertainment.png'
                    },
                    'transportation': {
                        image: '/images/markers/transportation.png'
                    },
                    'culture': {
                        image: '/images/markers/culture.png'
                    },
                    'golf': {
                        image: '/images/markers/golf.png'
                    }
                },
                map: null,
                bounds: null,
                markers: [],
            }
        },
        mounted: function () {
            this.bounds = new google.maps.LatLngBounds();
            const element = document.getElementById(this.mapName);
            const mapCentre = this.places[0];

            const options = {
                center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
            };

            this.map = new google.maps.Map(element, options);

            this.places.forEach((data) => {
                const position = new google.maps.LatLng(data.latitude, data.longitude);
                let image = {};
                if (data.type == 'main') {
                    image = {
                        url: this.types['main']['image'],
                        size: new google.maps.Size(70, 79),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(35, 79)
                    };
                } else {
                    image = {
                        url: this.types[data.type]['image'],
                        size: new google.maps.Size(50, 62),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(25, 62)
                    };
                }
                const marker = new google.maps.Marker({
                    title: data.title,
                    position,
                    type: data.type,
                    icon: image,
                    map: this.map
                });
                if (data.type != 'main') {
                    google.maps.event.addListener(marker, 'click', function () {
                        $.fancybox.open({
                            src: '#marker-modal',
                            opts: {
                                toolbar: false,
                                smallBtn: false,
                                beforeShow: function () {
                                    $('.js-marker-name').text(data.title);
                                    $('.js-marker-summary').text(data.summary);
                                    $('.js-marker-image').attr('src', data.image).hide();
                                },
                                afterShow: function () {
                                    $('.js-marker-image').fadeIn('fast');
                                }
                            },
                        });
                        $('.js-close').click(function () {
                            $.fancybox.close();
                        });
                    });
                }
                this.markers.push(marker);
                this.map.fitBounds(this.bounds.extend(position))
            });
        },
        methods: {
            clearGroup: function () {
                $('#legendList').removeClass("legendActive");
                this.activeType = [];
                for (var i = 0; i < this.markers.length; i++) {
                    var marker = this.markers[i];
                    marker.setVisible(true);
                }
                console.log(this.activeType);
            },
            toggleGroup: function (type) {
                if (this.activeType.includes(type)) {
                    this.activeType.splice(this.activeType.indexOf(type), 1);
                    for (var i = 0; i < this.markers.length; i++) {
                        var marker = this.markers[i];
                        if (this.activeType.includes(marker.type)) {
                            marker.setVisible(true);
                        } else {
                            marker.setVisible(false);
                        }
                    }
                    if (!this.activeType.length) {
                        this.clearGroup();
                    }
                    console.log(this.activeType);
                }
                else {
                    this.activeType.push(type);
                    console.log(this.activeType);
                    $('#legendList').addClass("legendActive");
                    for (var i = 0; i < this.markers.length; i++) {
                        var marker = this.markers[i];
                        if (this.activeType.includes(marker.type)) {
                            marker.setVisible(true);
                        } else {
                            marker.setVisible(false);
                        }
                    }
                }
            }
        }
    };
</script>
