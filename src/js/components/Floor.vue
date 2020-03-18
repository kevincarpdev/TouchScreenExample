<template>
    <div>
        <div class="o-wrapper">
            <h1 class="c-heading">Floor {{ floor }}</h1>
        </div>
        <div class="c-building">
            <svg v-cloak v-if="floor == 1" class="c-building__floor" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Level_1" x="0px" y="0px" ref="floor-1" viewBox="0 0 2268 1404"  xml:space="preserve">
            <path class="building-outline" stroke="#000000" stroke-width="3" fill="#E9E9E9" fill-rule="nonzero" d="M578,182H200v10h-37v91h5v184h61v551h47.3v33.7H228v132.1c69.8,0,139.5,0,209.3,0h0c205.9,0,411.8,0,617.7,0 c0-14.3,0-28.5,0-42.8h87v41.2h959V334h-83v-26h84V182H863v20H577L578,182z"/>
                <g class="units">
                    <rect class="unit nohover" x="493" y="949" width="311.3" height="234.8"/>
                    <polygon class="unit nohover" points="804.3,949 820.3,949 820.3,925.7 876.3,925.7 876.3,919 981,919 981,1183.8 804.3,1183.8 "/>
                    <polygon class="unit nohover" points="981,1183.8 981,867 1120.3,867 1120.3,884.3 1169.7,884.3 1169.7,906.3 1205.7,906.3 1205.7,1002.3 1264.3,1002.3 1264.3,1182.2 1142,1182.2 1142,1141 1055,1141 1055,1183.8 "/>
                    <polygon class="unit nohover" points="609,202 609,446.5 737.5,446.5 737.5,504.5 951,504.5 951,433 1070.5,433 1070.5,381.5 1117,381.5 1117,182 863,182 863,202 "/>
                </g>
                <g class="unit-labels" fill="rgb(217, 217, 217)" fill-rule="nonzero" stroke="#000000">
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1052.0814 1061.9335)"><tspan x="0" y="0" class="st1 st2">Front Desk </tspan><tspan x="13.4" y="26.4" class="st1 st2">&amp; Lobby</tspan></text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 424.277 668.6973)" class="st1 st2">Parking Garage</text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1601.2771 668.6973)" class="st1 st2">Parking Garage</text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 814.6975 342.7499)" class="st1 st2">Receiving</text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 605.2523 1061.9335)"><tspan x="0" y="0" class="st1 st2">Resident </tspan><tspan x="4.9" y="26.4" class="st1 st2">Storage</tspan></text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 863.4369 1075.1337)" class="st1 st2">Offices</text>
                </g>
            </svg>

            <svg v-cloak v-if="floor == 2" class="c-building__floor" ref="floor-2" viewBox="0 0 2268 1404" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <polygon class="building-outline" stroke="#000000" stroke-width="3" fill="none" points="183.6,511.5 183.6,618.2 67.6,618.2 67.6,278 950.3,278 950.3,298 1185.3,298 1185.3,280 2204.2,280
	2204.2,1098.6 1413.3,1098.6 1413.3,1037.2 1342.7,1037.2 1342.7,1101.2 659.4,1101.2 659.4,685.6 604.3,685.6 604.3,624.2
	529,624.2 529,655.6 467.1,655.6 467.1,592.9 515.5,592.9 515.5,511.5 "/>
                <g class="common-spaces" fill="#D5D5D6" fill-rule="nonzero" stroke="#000000" stroke-width="2">
                    <rect x="1426.1" y="592.8" class="unit unit--commonspace" v-on:click="loadUnit('pool')" width="142.3" height="178.8"/>
                    <rect class="unit unit--commonspace"  v-on:click="loadUnit('fitness-studio')" x="1317" y="537.9" width="83.4" height="99.8"/>
                </g>
                <g class="unused-spaces" fill="#D5D5D6" fill-rule="nonzero" stroke="#000000" stroke-width="2">
                    <polygon class="unit unit--commonspace"  points="2204.2,491.1 1540.8,491.1 1505.8,525.7 1505.8,555.7 1525.3,555.7 1525.3,593.5 1568.4,593.5   1568.4,771.6 1525.3,771.6 1525.3,823.9 1503.5,823.9 1503.5,852.6 1538.9,887.7 1567.3,887.7 1567.3,904.4 2077.7,904.4   2077.7,861.7 2204.2,861.7 "/>
                    <polygon class="unit unit--commonspace" xmlns="http://www.w3.org/2000/svg" points="515.5,511.5 515.5,592.9 467.1,592.9 467.1,655.6 529,655.6 529,624.2 604.3,624.2 604.3,685.6   659.4,685.6 659.4,511.5 "/>
                    <rect x="1317" y="483.5" class="unit unit--commonspace" width="83.4" height="54.4"/>
                    <rect x="1317" y="637.7" class="unit unit--commonspace" width="83.4" height="126"/>
                    <rect x="1317" y="763.7" class="unit unit--commonspace" width="83.4" height="158.5"/>
                    <rect x="1413.3" y="992" class="unit unit--commonspace" width="121.4" height="106.9"/>
                    <rect x="1228.9" y="1038.2" class="unit unit--commonspace"  width="113.5" height="63.1"/>
                    <polygon class="unit unit--commonspace" points="1503.5,852.3 1426.1,852.3 1426.1,771.6 1525.3,771.6 1525.3,823.9 1503.5,823.9 "/>
                    <polygon class="unit unit--commonspace" points="1426.1,463.9 1480.2,409.9 1571.6,409.9 1571.6,491.1 1540.8,491.1 1511.5,520.2 1494.7,504.2 1426.1,504.2 "/>
                    <polygon class="unit unit--commonspace" points="1426.1,504.2 1426.1,592.8 1525.3,592.8 1525.3,555.7 1506.3,555.7 1506.3,525.7 1511.6,520.4 1495,504.2 "/>
                </g>
                <g class="units" fill="#FFFFFF" fill-rule="nonzero" stroke="#000000">
                    <rect class="unit" :class="setLayerClass(248)" v-on:click="loadUnit('248')" xmlns="http://www.w3.org/2000/svg" x="1302.1" y="280" width="71.4" height="102.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1319.5107 336.3657)" class="st2 st3">248</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(232)" v-on:click="loadUnit('232')" x="1373.4" y="280" width="112.6" height="102.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1410.1289 336.8662)" class="st2 st3">232</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(234)" v-on:click="loadUnit('234')" x="1485.7" y="280" width="83.5" height="102.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1511.1699 336.1987)" class="st2 st3">234</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(236)" v-on:click="loadUnit('236')" x="1604.2" y="280" width="112.9" height="102.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1643.1465 336.8662)" class="st2 st3">236</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(238)" v-on:click="loadUnit('238')" x="1716.7" y="280" width="73.7" height="102.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1736.4531 336.0322)" class="st2 st3">238</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(240)" v-on:click="loadUnit('240')" x="1790.3" y="280" width="72.3" height="102.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1809.0811 336.0322)" class="st2 st3">240</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(242)" v-on:click="loadUnit('242')" x="1862.6" y="280" width="112.3" height="102.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1901.3799 336.8662)" class="st2 st3">242</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(244)" v-on:click="loadUnit('244')" x="1974.4" y="280" width="113" height="102.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2013.3496 336.8662)" class="st2 st3">244</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(246)" v-on:click="loadUnit('246')" x="2087.4" y="280" width="116.8" height="102.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2129.3525 336.8662)" class="st2 st3">246</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(235)" v-on:click="loadUnit('235')" x="1604.2" y="408.6" width="112.9" height="100.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1644.1562 465.9551)" class="st2 st3">235</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(237)" v-on:click="loadUnit('237')" x="1716.7" y="408.5" width="73.7" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1736.4531 465.1216)" class="st2 st3">237</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(239)" v-on:click="loadUnit('239')" x="1790.3" y="408.5" width="72.5" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1810.0898 465.1216)" class="st2 st3">239</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(241)" v-on:click="loadUnit('241')" x="1862.9" y="408.5" width="72.4" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1882.7188 465.1216)" class="st2 st3">241</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(243)" v-on:click="loadUnit('243')" x="1935.6" y="408.5" width="72" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1954.3389 465.1216)" class="st2 st3">243</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(245)" v-on:click="loadUnit('245')" x="2007.2" y="408.5" width="72.7" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2025.958 465.1216)" class="st2 st3">245</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(247)" v-on:click="loadUnit('247')" x="2101.2" y="437.3" width="102.9" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2135.5732 477.4629)" class="st2 st3">247</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(203)" v-on:click="loadUnit('203')" x="2005.2" y="867.4" width="72.5" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2022.9316 924.1045)" class="st2 st3">203</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(205)" v-on:click="loadUnit('205')" x="1932.5" y="867.4" width="72.5" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1950.3037 924.1045)" class="st2 st3">205</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(207)" v-on:click="loadUnit('207')" x="1859.9" y="867.4" width="72.5" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1877.6748 924.1045)" class="st2 st3">207</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(209)" v-on:click="loadUnit('209')" x="1754.9" y="867.4" width="82.7" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1777.8105 924.1045)" class="st2 st3">209</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(211)" v-on:click="loadUnit('211')" x="1682.4" y="867.4" width="72.5" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1700.8125 924.1045)" class="st2 st3">211</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(213)" v-on:click="loadUnit('213')" x="1567.3" y="867.9" width="115.5" height="100.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1604.8135 925.2715)" class="st2 st3">213</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(212)" v-on:click="loadUnit('212')" x="1641.6" y="994.2" width="113.8" height="104.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1679.46 1051.3584)" class="st2 st3">212</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(214)" v-on:click="loadUnit('214')" x="1570" y="994.2" width="71.5" height="104.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1589.0098 1052.6934)" class="st2 st3">214</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(210)" v-on:click="loadUnit('210')" x="1755.6" y="994.2" width="71.5" height="104.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1774.6162 1052.6934)" class="st2 st3">210</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(208)" v-on:click="loadUnit('208')" x="1861.5" y="994.2" width="113.8" height="104.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1899.3623 1051.3584)" class="st2 st3">208</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(206)" v-on:click="loadUnit('206')" x="1975.5" y="994.2" width="113.8" height="104.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2013.3496 1051.3584)" class="st2 st3">206</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(204)" v-on:click="loadUnit('204')" x="2089.5" y="994.2" width="114.7" height="104.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2128.3447 1051.3584)" class="st2 st3">204</text>
                    </g>
                    <rect class="unit" :class="setLayerClass(202)" v-on:click="loadUnit('202')" x="2100.2" y="897.6" width="103.9" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2134.5645 937.7803)" class="st2 st3">202</text>
                    </g>
                    <path class="unit" :class="setLayerClass(201)" v-on:click="loadUnit('201')" d="M2204.2,762.7H2089v78.1h-11.3v20.9h126.5C2204.2,861.7,2204.7,762.7,2204.2,762.7z"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2131.875 818.3652)" class="st2 st3">201</text>
                    </g>
                </g>
                <g class="unit-labels">
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 915.0674 697.4863)" class="st2 st3">Parking Garage</text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 553.5288 563.3201)"><tspan x="0" y="0" class="st2 st3">Coffee </tspan><tspan x="6.7" y="22.4" class="st2 st3">Shop</tspan></text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1740.3584 687.6167)"><tspan x="0" y="0" class="st2 st3">South Courtyard Terrace</tspan><tspan x="38.5" y="22.4" class="st2 st3">Lawn &amp; Sundeck</tspan></text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1323.3662 585.2417)"><tspan x="0" y="0" class="st2 st14">Fitness </tspan><tspan x="4.3" y="22.5" class="st2 st14">Studio</tspan></text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1329.1152 518.8213)" class="st2 st14">Office</text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1343.8623 697.7236)"><tspan x="0" y="0" class="st2 st14">Art </tspan><tspan x="-17.2" y="22.5" class="st2 st14">Studio</tspan></text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1326.6543 837.6973)"><tspan x="0" y="0" class="st2 st14">Virtual </tspan><tspan x="-0.6" y="22.5" class="st2 st14">Sports</tspan></text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1476.1953 693.0151)" class="st2 st14">Pool</text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1453.8967 1053.8793)" class="st2 st14">Cafe</text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1440.2646 798.6611)"><tspan x="0" y="0" class="st2 st14">Living </tspan><tspan x="-0.6" y="22.5" class="st2 st14">Room</tspan></text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1495.3523 927.4891)"><tspan x="0" y="0" class="st2 st14">Salon/</tspan><tspan x="11.7" y="22.5" class="st2 st14">Spa</tspan></text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1470.6387 453.0728)"><tspan x="0" y="0" class="st2 st14">Fitness </tspan><tspan x="2.5" y="22.5" class="st2 st14">Center</tspan></text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1252.6074 1077.3838)" class="st2 st3">Library</text>
                    <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1434.5645 545.2959)"><tspan x="0" y="0" class="st2 st14">Locker </tspan><tspan x="-1.8" y="22.5" class="st2 st14">Rooms</tspan></text>
                </g>
            </svg>

            <svg v-cloak v-if="floor == 3" class="c-building__floor" viewBox="0 0 2268 1404" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="enable-background:new 0 0 2268 1404;">
                <polygon class="building-outline" stroke="#000000" stroke-width="3" fill="none" points="184,511 184,619 68,619 68,279 950.4,279 950.4,299 1185,299 1185,281 2204.2,281 2204.2,1099.6
	1413.3,1099.6 1413.3,1037.7 1342.7,1037.7 1342.7,1099.6 659.7,1099.6 659.7,686.3 604.5,686.3 604.5,625 529.2,625 529.2,656.3
	467.4,656.3 467.4,593.7 515.8,593.7 515.8,511 "/>
                <g class="unused-spaces">
                    <rect x="467.4" y="592.7" class="unit unit--commonspace" width="61.9" height="62.7"/>
                    <rect x="604.5" y="624" class="unit unit--commonspace" width="55.1" height="61.3"/>
                    <polygon class="st1" points="1342.7,964.7 1431,964.7 1431,998.3 1450.7,998.3 1450.7,1030.7 1413.3,1030.7 1413.3,1036.7
	1342.7,1036.7 "/>
                    <rect x="1532.3" y="1023" class="unit unit--commonspace" width="33.2" height="76.6"/>

                    <polygon class="unit unit--commonspace" points="1450.5,435.5 1441.3,444.7 1423.8,427.2 1423.8,407.7 1473.9,407.7 1474,412 "/>
                    <polygon class="unit unit--commonspace" points="1567.7,488.7 1538.7,488.7 1503.5,523.8 1503.5,555 1523.3,555 1523.3,822.3 1501.8,822.3
	1501.8,855.2 1537.7,891 1565.6,891 1565.6,867.4 2077.3,867.4 2077.3,840.9 2088.6,840.9 2088.6,762.9 2204.2,762.9 2204.2,509.6
	1567.8,509.6 "/>
                    <polygon class="unit unit--commonspace" points="950.4,298 950.4,341 971.3,341 971.3,405.7 1162.7,405.7 1162.7,341.2 1185,341.2 1185,298 "/>
                    <polygon class="unit unit--commonspace" points="515.8,511 515.8,592.7 528.7,592.7 528.7,624 659.3,624 659.3,555 659.3,520.7 683.5,520.7 683.5,487
	662.9,466.4 611.3,466.4 611.4,511 "/>
                    <polygon class="unit unit--commonspace" points="515.8,511 515.8,592.7 528.7,592.7 528.7,624 659.3,624 659.3,555 659.3,520.7 683.5,520.7 683.5,487
	662.9,466.4 611.3,466.4 611.4,511 "/>
                    <polygon class="unit unit--commonspace" points="184,511 184,618 68,618 68,278 950.4,278 950.4,298 1185,298 1185,280 2204.2,280 2204.2,1099.6
	1413.3,1099.6 1413.3,1036.7 1342.7,1036.7 1342.7,1099.6 659.7,1099.6 659.7,685.3 604.5,685.3 604.5,624 529.2,624 529.2,655.3
	467.4,655.3 467.4,592.7 515.8,592.7 515.8,511 "/>
                    <polygon class="unit unit--commonspace" points="1342.3,649 1342.3,634.3 1327.7,634.3 1327.7,649 1312.6,649 1312.6,753.6 1394.8,753.6 1394.8,649 "/>
                    <rect x="1413.3" y="1030.7" class="unit" width="119" height="68.9"/>
                    <polyline class="unit unit--commonspace" points="1435.7,822.5 1501.8,822.5 1501.8,855.2 1537.7,891 1565.6,891 1565.6,972.6 1481.4,972.9
	1435.7,927.3 1435.7,822.5 "/>
                    <rect x="1312.6" y="753.6" class="unit unit--commonspace" width="210.7" height="68.9"/>
                    <path class="unit unit--commonspace" d="M1324.5,419.2h70.3V654h-82.2V507h-45.3v-99.5h56.6C1323.9,407.5,1323.4,418.1,1324.5,419.2"/>
                </g>
                <g class="common-spaces" fill="#D5D5D6" fill-rule="nonzero" stroke="#000000" stroke-width="2">
<polygon v-on:click="loadUnit('center-courtyard')" class="unit unit--commonspace" points="858,575.3 858,553.5 875,553.5 875,522.8 910,487.8 939.2,487.8 939.2,534 1238.8,534 1238.8,493.3
	1267.3,493.3 1267.3,507 1312.6,507 1312.6,863 1258,863 1258,998.7 1225.3,998.7 1225.3,1099.6 977.9,1099.6 977.9,999 896,999
	896,575.3 "/>
                    <polygon class="unit unit--commonspace" v-on:click="loadUnit('dining')" points="1450.5,435.5 1423.5,462.8 1423.5,613.4 1523.3,613.4 1523.3,555 1504,555 1504,524.3 1521.5,506.8 "/>
                    <rect x="1423.5" y="613.4" class="unit unit--commonspace" v-on:click="loadUnit('the-garden')" width="99.8" height="140.2"/>
                    <rect x="1225.3" y="998.7" class="unit unit--commonspace" v-on:click="loadUnit('piano-lounge')" width="117.4" height="100.9"/>
                    <rect x="1258" y="863" class="unit unit--commonspace" v-on:click="loadUnit('bar')" width="54.6" height="135.7"/>
                    <g>
                        <text v-on:click="loadUnit('center-courtyard')" font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1062.3765 785.2047)"><tspan x="0" y="0" class="st4 st5">Center </tspan><tspan x="-15.3" y="22.4" class="st4 st5">Courtyard</tspan></text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 924.3101 785.2047)" class="st4 st5">Garden</text>
                    </g>

                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1255.9036 1048.6261)"><tspan x="0" y="0" class="st4 st5">Piano</tspan><tspan x="-8.6" y="22.4" class="st4 st5">Lounge</tspan></text>
                    </g>

                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1268.1934 935.5586)" class="st4 st5">Bar</text>
                    </g>

                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1446.8828 692.3298)" class="st4 st5"><tspan x="0" y="0" class="st4 st5">The</tspan><tspan x="-9.2" y="22.4" class="st4 st5">Garden</tspan></text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1434.8151 545.2073)" class="st4 st5">Dining</text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1060.5557 1061.2906)" class="st4 st5">Fire Pit</text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1192.7227 785.2047)"><tspan x="0" y="0" class="st4 st5">Outdoor</tspan><tspan x="8.6" y="22.4" class="st4 st5">Dining</tspan></text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1192.7227 646.3242)"><tspan x="0" y="0" class="st4 st5">Outdoor </tspan><tspan x="3.1" y="22.4" class="st4 st5">Kitchen</tspan></text>
                    </g>


                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1018.652 351.8335)"><tspan x="0" y="0" class="st4 st5">Pickle Ball </tspan><tspan x="23.8" y="22.4" class="st4 st5">Court</tspan></text>
                    </g>

                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 559.7195 558.9999)"><tspan x="0" y="0" class="st4 st5">North</tspan><tspan x="-11" y="22.4" class="st4 st5">Terrace</tspan></text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1391.7811 796.9992)" class="st4 st5">Grill</text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1327.212 699.3354)"><tspan x="0" y="0" class="st4 st5">Show</tspan><tspan x="-9.2" y="22.4" class="st4 st5">Kitchen</tspan></text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1290.8044 469.242)" class="st4 st5">Culinary</text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1437.2488 1075.7974)" class="st4 st5">Theater</text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1473.9899 911.9992)"><tspan x="0" y="0" class="st4 st5">Club</tspan><tspan x="-6.7" y="22.4" class="st4 st5">Room</tspan></text>
                    </g>
                </g>
                <g class="units" fill="#FFFFFF" fill-rule="nonzero" stroke="#000000">
                    <path :class="setLayerClass(353)" class="unit" v-on:click="loadUnit('353')" d="M1521,506.3l17.7-17.7h29.1v-81.3h-71.4v4.7H1474l-23.5,23.5C1450.5,435.5,1521,507.3,1521,506.3z"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1499.2932 454.2077)" class="st4 st5">333</text>
                    </g>
                    <rect x="1299" y="279.9" :class="setLayerClass(348)" class="unit" v-on:click="loadUnit('348')" width="71.9" height="103.4"/>
                    <rect x="1370.4" y="280.1" :class="setLayerClass(332)" class="unit" v-on:click="loadUnit('332')" width="113.3" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1406.3218 337.3921)" class="st4 st5">332</text>
                    </g>
                    <rect x="1483.2" y="279.9" :class="setLayerClass(334)" class="unit" v-on:click="loadUnit('334')" width="83.8" height="103.4"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1507.7124 336.7251)" class="st4 st5">334</text>
                    </g>
                    <rect x="1602.2" y="280.1" :class="setLayerClass(336)" class="unit" v-on:click="loadUnit('336')" width="113.3" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1638.1187 337.3921)" class="st4 st5">336</text>
                    </g>
                    <rect x="1715" y="279.9" :class="setLayerClass(338)" class="unit" v-on:click="loadUnit('338')" width="74" height="103.4"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1733.7729 336.5586)" class="st4 st5">338</text>
                    </g>
                    <rect x="1788.9" y="279.9" :class="setLayerClass(340)" class="unit" v-on:click="loadUnit('340')" width="72.8" height="103.4"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1806.6519 336.5586)" class="st4 st5">340</text>
                    </g>
                    <rect x="1861.3" y="280.1" :class="setLayerClass(342)" class="unit" v-on:click="loadUnit('342')" width="112.9" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1899.269 337.3921)" class="st4 st5">342</text>
                    </g>
                    <rect x="1973.6" y="280.1" :class="setLayerClass(344)" class="unit" v-on:click="loadUnit('344')" width="113.6" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2011.6245 337.3921)" class="st4 st5">344</text>
                    </g>
                    <rect x="2086.8" y="280.1" :class="setLayerClass(346)" class="unit" v-on:click="loadUnit('346')" width="117.4" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2128.0288 337.3921)" class="st4 st5">346</text>
                    </g>
                    <rect x="1602.2" y="409" :class="setLayerClass(335)" class="unit" v-on:click="loadUnit('335')" width="113.3" height="100.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1639.1194 466.3916)" class="st4 st5">335</text>
                    </g>
                    <rect x="1715" y="409" :class="setLayerClass(337)" class="unit" v-on:click="loadUnit('337')" width="74" height="100.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1734.7737 465.5586)" class="st4 st5">337</text>
                    </g>
                    <rect x="1788.9" y="409" :class="setLayerClass(339)" class="unit" v-on:click="loadUnit('339')" width="72.8" height="100.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1808.6643 465.5586)" class="st4 st5">339</text>
                    </g>
                    <rect x="1861.8" y="409" :class="setLayerClass(341)" class="unit" v-on:click="loadUnit('341')" width="72.6" height="100.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1881.5432 465.5586)" class="st4 st5">341</text>
                    </g>
                    <rect x="1934.7" y="409" :class="setLayerClass(342)" class="unit" v-on:click="loadUnit('342')" width="72.3" height="100.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1953.4104 465.5586)" class="st4 st5">343</text>
                    </g>
                    <rect x="2006.5" y="409" :class="setLayerClass(345)" class="unit" v-on:click="loadUnit('345')" width="73" height="100.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2025.2776 465.5586)" class="st4 st5">345</text>
                    </g>
                    <rect x="2100.9" y="437.7" :class="setLayerClass(347)" class="unit" v-on:click="loadUnit('347')" width="103.2" height="71.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2135.2717 477.8916)" class="st4 st5">347</text>
                    </g>
                    <rect x="2004.5" y="867.4" :class="setLayerClass(303)" class="unit" v-on:click="loadUnit('303')" width="72.8" height="101.2"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2024.2421 924.2256)" class="st4 st5">303</text>
                    </g>
                    <rect x="1931.6" y="867.4" :class="setLayerClass(305)" class="unit" v-on:click="loadUnit('305')" width="72.8" height="101.2"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1951.3632 924.2256)" class="st4 st5">305</text>
                    </g>
                    <rect x="1858.8" y="867.4" :class="setLayerClass(307)" class="unit" v-on:click="loadUnit('307')" width="72.8" height="101.2"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1878.4843 924.2256)" class="st4 st5">307</text>
                    </g>
                    <rect x="1753.4" y="867.4" :class="setLayerClass(309)" class="unit" v-on:click="loadUnit('309')" width="83" height="101.2"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1778.2753 924.2256)" class="st4 st5">309</text>
                    </g>
                    <rect x="1680.6" y="867.4" :class="setLayerClass(311)" class="unit" v-on:click="loadUnit('311')" width="72.8" height="101.2"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1701.0116 924.2256)" class="st4 st5">311</text>
                    </g>
                    <rect x="1565.6" y="867.4" :class="setLayerClass(313)" class="unit" v-on:click="loadUnit('313')" width="115.5" height="101.4"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1604.6815 925.3916)" class="st4 st5">313</text>
                    </g>
                    <rect x="1639.7" y="994.2" :class="setLayerClass(312)" class="unit" v-on:click="loadUnit('312')" width="114.2" height="105.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1679.5839 1051.3916)" class="st4 st5">312</text>
                    </g>
                    <rect x="1565.6" y="994.2" :class="setLayerClass(314)" class="unit" v-on:click="loadUnit('314')" width="74" height="105.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1588.8221 1052.7256)" class="st4 st5">314</text>
                    </g>
                    <rect x="1754.1" y="994.2" :class="setLayerClass(310)" class="unit" v-on:click="loadUnit('310')" width="71.7" height="105.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1775.0702 1052.7256)" class="st4 st5">310</text>
                    </g>
                    <rect x="1860.4" y="994.2" :class="setLayerClass(308)" class="unit" v-on:click="loadUnit('308')" width="114.2" height="105.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1900.246 1051.3916)" class="st4 st5">308</text>
                    </g>
                    <rect x="1974.7" y="994.2" :class="setLayerClass(306)" class="unit" v-on:click="loadUnit('306')" width="114.2" height="105.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2014.6268 1051.3916)" class="st4 st5">306</text>
                    </g>
                    <rect x="2089.1" y="994.2" :class="setLayerClass(304)" class="unit" v-on:click="loadUnit('304')" width="115.1" height="105.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2130.0195 1051.3916)" class="st4 st5">304</text>
                    </g>
                    <rect x="2099.9" y="897.7" :class="setLayerClass(302)" class="unit" v-on:click="loadUnit('302')" width="104.3" height="70.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2136.2598 937.8916)" class="st4 st5">302</text>
                    </g>
                    <path :class="setLayerClass(301)" class="unit" v-on:click="loadUnit('301')" d="M2204.2,762.9h-115.6v78h-12.5v26.5h128C2204.2,867.4,2204.7,762.9,2204.2,762.9z"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2133.5605 818.5586)" class="st4 st5">301</text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1316.7378 336.4111)" class="st4 st5">348</text>
                    </g>
                    <rect x="68.5" y="277.4" :class="setLayerClass(369)" class="unit" v-on:click="loadUnit('369')" width="112.8" height="103.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 106.2685 335.7259)" class="st4 st5">369</text>
                    </g>
                    <rect x="180.6" y="277.4" :class="setLayerClass(368)" class="unit" v-on:click="loadUnit('368')" width="113.6" height="103.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 218.624 335.7259)" class="st4 st5">368</text>
                    </g>
                    <rect x="293.8" y="277.4" :class="setLayerClass(366)" class="unit" v-on:click="loadUnit('366')" width="117.2" height="103.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 335.0283 335.7259)" class="st4 st5">366</text>
                    </g>
                    <rect x="410.9" y="277.9" :class="setLayerClass(364)" class="unit" v-on:click="loadUnit('364')" width="74.8" height="103.2"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 429.2812 335.5594)" class="st4 st5">364</text>
                    </g>
                    <rect x="485.3" y="278.1" :class="setLayerClass(362)" class="unit" v-on:click="loadUnit('362')" width="116" height="103.1"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 524.4365 336.3929)" class="st4 st5">362</text>
                    </g>
                    <rect x="640.3" y="278.1" :class="setLayerClass(360)" class="unit" v-on:click="loadUnit('360')" width="112.9" height="103.1"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 678.2686 336.3929)" class="st4 st5">360</text>
                    </g>
                    <rect x="752.6" y="278.1" :class="setLayerClass(358)" class="unit" v-on:click="loadUnit('358')" width="113.6" height="103.1"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 790.624 336.3929)" class="st4 st5">358</text>
                    </g>
                    <polygon :class="setLayerClass(356)" class="unit" v-on:click="loadUnit('356')" points="866.2,381.2 971.3,381.2 971.3,341 950.5,341 950.5,298 950.5,278 866.2,278 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 893.624 336.3929)" class="st4 st5">356</text>
                    </g>
                    <rect x="498.2" y="407.5" :class="setLayerClass(361)" class="unit" v-on:click="loadUnit('361')" width="113.3" height="103.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 534.1182 465.7254)" class="st4 st5">361</text>
                    </g>
                    <rect x="301.9" y="407.5" :class="setLayerClass(365)" class="unit" v-on:click="loadUnit('365')" width="113.3" height="103.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 337.8681 465.2254)" class="st4 st5">365</text>
                    </g>
                    <rect x="188.4" y="407.5" :class="setLayerClass(367)" class="unit" v-on:click="loadUnit('367')" width="113.3" height="103.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 224.3681 465.4754)" class="st4 st5">367</text>
                    </g>
                    <rect x="415" y="407.5" :class="setLayerClass(363)" class="unit" v-on:click="loadUnit('363')" width="83.2" height="103.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 438.3681 465.7254)" class="st4 st5">363</text>
                    </g>
                    <rect x="68.5" y="397.3" :class="setLayerClass(370)" class="unit" v-on:click="loadUnit('370')" width="99" height="81.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 98.5351 446.8094)" class="st4 st5">370</text>
                    </g>
                    <rect x="68.5" y="514.5" :class="setLayerClass(371)" class="unit" v-on:click="loadUnit('371')" width="115" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 107.1181 573.7254)" class="st4 st5">371</text>
                    </g>
                    <polygon :class="setLayerClass(359)" class="unit" v-on:click="loadUnit('359')" points="664.5,407.5 725,407.5 764.5,447.5 764.5,521 683.5,521 683.5,487 662.9,466.4 662.9,407.5 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 696.2812 469.5594)" class="st4 st5">359</text>
                    </g>
                    <rect x="659.5" y="555" :class="setLayerClass(373)" class="unit" v-on:click="loadUnit('373')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 696.5336 597.0586)" class="st4 st5">373</text>
                    </g>
                    <rect x="659.5" y="625.5" :class="setLayerClass(375)" class="unit" v-on:click="loadUnit('375')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 696.2836 667.5586)" class="st4 st5">375</text>
                    </g>
                    <rect x="659.5" y="696.3" :class="setLayerClass(377)" class="unit" v-on:click="loadUnit('377')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 696.3671 737.3916)" class="st4 st5">377</text>
                    </g>
                    <rect x="659.5" y="766.8" :class="setLayerClass(379)" class="unit" v-on:click="loadUnit('379')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 696.1171 807.8916)" class="st4 st5">379</text>
                    </g>
                    <rect x="794.7" y="575.3" :class="setLayerClass(374)" class="unit" v-on:click="loadUnit('374')" width="101.6" height="71.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 827.5336 617.3916)" class="st4 st5">374</text>
                    </g>
                    <rect x="794.7" y="647.2" :class="setLayerClass(376)" class="unit" v-on:click="loadUnit('376')" width="101.6" height="71.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 827.2836 687.8916)" class="st4 st5">376</text>
                    </g>
                    <rect x="794.7" y="719.5" :class="setLayerClass(378)" class="unit" v-on:click="loadUnit('378')" width="101.6" height="71.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 827.3671 763.7256)" class="st4 st5">378</text>
                    </g>
                    <rect x="794.7" y="791.4" :class="setLayerClass(380)" class="unit" v-on:click="loadUnit('380')" width="101.6" height="71.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 827.1171 834.2256)" class="st4 st5">380</text>
                    </g>
                    <rect x="659.5" y="894.5" :class="setLayerClass(383)" class="unit" v-on:click="loadUnit('383')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 695.7836 935.5586)" class="st4 st5">383</text>
                    </g>
                    <rect x="659.5" y="837.2" :class="setLayerClass(381)" class="unit" v-on:click="loadUnit('381')" width="105.8" height="57.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 695.7836 872.2256)" class="st4 st5">381</text>
                    </g>
                    <rect x="794.7" y="863.8" :class="setLayerClass(382)" class="unit" v-on:click="loadUnit('382')" width="101.6" height="112.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 827.1171 924.8916)" class="st4 st5">382</text>
                    </g>
                    <rect x="865" y="999" :class="setLayerClass(383)" class="unit" v-on:click="loadUnit('383')" width="112.9" height="100.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 902.3574 1058.2246)" class="st4 st5">383</text>
                    </g>
                    <rect x="659.7" y="999.7" :class="setLayerClass(384)" class="unit" v-on:click="loadUnit('384')" width="112.9" height="99.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 697.0244 1058.8926)" class="st4 st5">384</text>
                    </g>
                    <rect x="772.3" y="999.7" :class="setLayerClass(385)" class="unit" v-on:click="loadUnit('385')" width="57.3" height="99.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 782.6909 1058.8926)" class="st4 st5">385</text>
                    </g>
                    <rect x="939.7" y="433.3" :class="setLayerClass(355)" class="unit" v-on:click="loadUnit('355')" width="73.3" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 958.0962 488.9023)" class="st4 st5">355</text>
                    </g>
                    <rect x="1013.2" y="433.3" :class="setLayerClass(353)" class="unit" v-on:click="loadUnit('353')" width="112.8" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1050.0132 488.9023)" class="st4 st5">353</text>
                    </g>
                    <rect x="1125.9" y="433.3" :class="setLayerClass(351)" class="unit" v-on:click="loadUnit('351')" width="112.8" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1162.7632 488.9023)" class="st4 st5">351</text>
                    </g>
                    <polygon :class="setLayerClass(350)" class="unit" v-on:click="loadUnit('350')" points="1185,280 1265.2,280 1265.2,380.2 1163,380.2 1163,341.2 1185,341.2 1185,280 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1204.9878 336.4111)" class="st4 st5">350</text>
                    </g>
                    <path :class="setLayerClass(372)" class="unit" v-on:click="loadUnit('372')" d="M794.8,553.5H875v-30.8l16.9-16.9l-72.8-72.8l-24,24C795.1,457.1,794.1,552.9,794.8,553.5z"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 819.085 514.2101)" class="st4 st5">372</text>
                    </g>
                    <polygon :class="setLayerClass(357)" class="unit" v-on:click="loadUnit('357')" points="819.1,433.1 844.5,407.8 939.2,407.8 939.2,488 910.2,488 892.1,506.1 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 870.4805 451.6523)" class="st4 st5">357</text>
                    </g>
                </g>
            </svg>

            <svg v-cloak v-if="floor == 4" class="c-building__floor" viewBox="0 0 2268 1404" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <polygon class="building-outline" stroke="#000000" stroke-width="3" fill="none" points="1224.4,1098.8 1824.8,1098.8 1824.8,1083.1 1858,1083.1 1858,1098.8 2203.3,1098.8 2203.3,994.2
	2160.5,994.2 2160.5,970 2202.8,970 2202.8,763.9 2087.6,763.9 2087.6,841.9 2076,841.9 2076,868.6 1857.8,868.6 1857.8,904.5
	1835.5,904.5 1835.5,868.6 1564.1,868.6 1564.1,888.5 1533.7,888.5 1499.2,854.1 1499.2,824.3 1522.5,824.3 1522.5,553.6
	1503.7,553.6 1503.7,522.8 1538.7,487.8 1598.7,487.8 1598.7,507.8 2076.5,507.8 2076.5,484 2098.5,484 2098.5,506.6 2201.8,506.6
	2201.8,278.1 1182.4,278.1 1182.4,339.2 1160,339.2 1160,405 968.5,405 968.5,379.4 968.5,339 947.5,339 947.5,276 65.3,276
	65.3,378.8 101,378.8 101,395.5 65.7,395.5 65.7,615.8 180.5,615.8 180.5,508 185.4,508 608.4,508 608.4,465 627,465 659.9,465
	680.2,485.3 680.2,519 656.3,519 656.3,963 675.1,963 675.1,997.8 656.7,997.8 656.7,1099 974.9,1099 974.9,997 893.5,997
	893.5,974.7 893.5,573.3 854,573.3 854,551.5 872,551.5 872,520.8 907,485.8 936.2,485.8 936.2,532 1235.8,532 1235.8,507
	1293.2,507 1293.2,862.3 1258.3,862.3 1258.3,999 1224.4,999 "/>
                <polygon class="building-outline" stroke="#000000" stroke-width="3" fill="none" points="1224.4,1098.8 1824.8,1098.8 1824.8,1083.1 1858,1083.1 1858,1098.8 2203.3,1098.8 2203.3,994.2
	2160.5,994.2 2160.5,970 2202.8,970 2202.8,763.9 2087.6,763.9 2087.6,841.9 2076,841.9 2076,868.6 1857.8,868.6 1857.8,904.5
	1835.5,904.5 1835.5,868.6 1564.1,868.6 1564.1,888.5 1533.7,888.5 1499.2,854.1 1499.2,824.3 1522.5,824.3 1522.5,553.6
	1503.7,553.6 1503.7,522.8 1538.7,487.8 1598.7,487.8 1598.7,507.8 2076.5,507.8 2076.5,484 2098.5,484 2098.5,506.6 2201.8,506.6
	2201.8,278.1 1182.4,278.1 1182.4,339.2 1160,339.2 1160,405 968.5,405 968.5,379.4 968.5,339 947.5,339 947.5,276 65.3,276
	65.3,378.8 101,378.8 101,395.5 65.7,395.5 65.7,615.8 180.5,615.8 180.5,508 185.4,508 608.4,508 608.4,465 627,465 659.9,465
	680.2,485.3 680.2,519 656.3,519 656.3,963 675.1,963 675.1,997.8 656.7,997.8 656.7,1099 974.9,1099 974.9,997 893.5,997
	893.5,974.7 893.5,573.3 854,573.3 854,551.5 872,551.5 872,520.8 907,485.8 936.2,485.8 936.2,532 1235.8,532 1235.8,507
	1293.2,507 1293.2,862.3 1258.3,862.3 1258.3,999 1224.4,999 "/>

                <g class="units" fill="#FFFFFF" fill-rule="nonzero" stroke="#000000">
                    <rect x="1296" y="277.9" :class="setLayerClass(448)" class="unit" v-on:click="loadUnit('448')" width="71.9" height="103.3"/>
                    <rect x="1367.4" y="278.1" :class="setLayerClass(432)" class="unit" v-on:click="loadUnit('432')" width="113.3" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1404.5098 335.3921)" class="st3 st4">432</text>
                    </g>
                    <rect x="1480.2" y="277.9" :class="setLayerClass(434)" class="unit" v-on:click="loadUnit('434')" width="83.8" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1505.9004 334.7251)" class="st3 st4">434</text>
                    </g>
                    <rect x="1599.2" y="278.1" :class="setLayerClass(436)" class="unit" v-on:click="loadUnit('436')" width="113.3" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1636.3066 335.3921)" class="st3 st4">436</text>
                    </g>
                    <rect x="1712" y="277.9" :class="setLayerClass(438)" class="unit" v-on:click="loadUnit('4348')" width="74" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1731.9609 334.5586)" class="st3 st4">438</text>
                    </g>
                    <rect x="1785.9" y="277.9" :class="setLayerClass(440)" class="unit" v-on:click="loadUnit('440')" width="72.8" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1804.8398 334.5586)" class="st3 st4">440</text>
                    </g>
                    <rect x="1858.3" y="278.1" :class="setLayerClass(442)" class="unit" v-on:click="loadUnit('442')" width="112.9" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1897.457 335.3921)" class="st3 st4">442</text>
                    </g>
                    <rect x="1970.6" y="278.1" :class="setLayerClass(444)" class="unit" v-on:click="loadUnit('444')" width="113.6" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2009.8125 335.3921)" class="st3 st4">444</text>
                    </g>
                    <rect x="2083.8" y="278.1" :class="setLayerClass(446)" class="unit" v-on:click="loadUnit('446')" width="117.2" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2126.2168 335.3921)" class="st3 st4">446</text>
                    </g>
                    <rect x="1599.2" y="407.1" :class="setLayerClass(435)" class="unit" v-on:click="loadUnit('435')" width="113.3" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1636.3066 464.3916)" class="st3 st4">435</text>
                    </g>
                    <rect x="1712" y="406.9" :class="setLayerClass(437)" class="unit" v-on:click="loadUnit('437')" width="74" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1731.9609 463.5586)" class="st3 st4">437</text>
                    </g>
                    <rect x="1785.9" y="406.9" :class="setLayerClass(439)" class="unit" v-on:click="loadUnit('439')" width="72.8" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1805.8516 463.5586)" class="st3 st4">439</text>
                    </g>
                    <rect x="1858.8" y="406.9" :class="setLayerClass(441)" class="unit" v-on:click="loadUnit('441')" width="72.6" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1878.7305 463.5586)" class="st3 st4">441</text>
                    </g>
                    <rect x="1931.7" y="406.9" :class="setLayerClass(443)" class="unit" v-on:click="loadUnit('443')" width="72.3" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1950.5977 463.5586)" class="st3 st4">443</text>
                    </g>
                    <rect x="2003.5" y="406.9" :class="setLayerClass(445)" class="unit" v-on:click="loadUnit('445')" width="73" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2022.4648 463.5586)" class="st3 st4">445</text>
                    </g>
                    <rect x="2097.9" y="435.7" :class="setLayerClass(447)" class="unit" v-on:click="loadUnit('447')" width="103.9" height="70.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2132.459 475.8916)" class="st3 st4">447</text>
                    </g>
                    <rect x="2003.5" y="868.6" :class="setLayerClass(403)" class="unit" v-on:click="loadUnit('403')" width="72.8" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2021.4277 925.2256)" class="st3 st4">403</text>
                    </g>
                    <rect x="1930.6" y="868.6" :class="setLayerClass(405)" class="unit" v-on:click="loadUnit('405')" width="72.8" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1948.5488 925.2256)" class="st3 st4">405</text>
                    </g>
                    <rect x="1857.8" y="868.6" :class="setLayerClass(407)" class="unit" v-on:click="loadUnit('407')" width="72.8" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1875.6699 925.2256)" class="st3 st4">407</text>
                    </g>
                    <rect x="1752.4" y="868.6" :class="setLayerClass(409)" class="unit" v-on:click="loadUnit('409')" width="83" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1775.4609 925.2256)" class="st3 st4">409</text>
                    </g>
                    <rect x="1679.6" y="868.6" :class="setLayerClass(411)" class="unit" v-on:click="loadUnit('411')" width="72.8" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1697.5215 925.2256)" class="st3 st4">411</text>
                    </g>
                    <rect x="1564.1" y="869.1" :class="setLayerClass(413)" class="unit" v-on:click="loadUnit('413')" width="115.9" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1601.8672 926.3916)" class="st3 st4">413</text>
                    </g>
                    <rect x="1638.7" y="994.2" :class="setLayerClass(412)" class="unit" v-on:click="loadUnit('412')" width="114.2" height="104.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1676.7695 1051.3916)" class="st3 st4">412</text>
                    </g>
                    <rect x="1566.8" y="994.2" :class="setLayerClass(414)" class="unit" v-on:click="loadUnit('414')" width="71.7" height="104.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1586.0078 1052.7256)" class="st3 st4">414</text>
                    </g>
                    <rect x="1753.1" y="994.2" :class="setLayerClass(410)" class="unit" v-on:click="loadUnit('410')" width="71.7" height="104.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1772.2559 1052.7256)" class="st3 st4">410</text>
                    </g>
                    <rect x="1859.4" y="994.2" :class="setLayerClass(408)" class="unit" v-on:click="loadUnit('408')" width="114.2" height="104.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1897.4316 1051.3916)" class="st3 st4">408</text>
                    </g>
                    <rect x="1973.7" y="994.2" :class="setLayerClass(406)" class="unit" v-on:click="loadUnit('406')" width="114.2" height="104.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2011.8125 1051.3916)" class="st3 st4">406</text>
                    </g>
                    <rect x="2088.1" y="994.2" :class="setLayerClass(404)" class="unit" v-on:click="loadUnit('404')" width="115.2" height="104.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2127.2051 1051.3916)" class="st3 st4">404</text>
                    </g>
                    <rect x="2098.9" y="898.7" :class="setLayerClass(402)" class="unit" v-on:click="loadUnit('402')" width="103.9" height="70.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2133.4453 938.8916)" class="st3 st4">402</text>
                    </g>
                    <path :class="setLayerClass(401)" class="unit" v-on:click="loadUnit('401')" d="M2203.2,763.9h-115.6v78h-12.5v21.2h128C2203.2,863.1,2203.7,763.9,2203.2,763.9z"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2130.7461 819.5586)" class="st3 st4">401</text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1314.9258 334.4111)" class="st3 st4">448</text>
                    </g>
                    <rect x="65.3" y="275.4" :class="setLayerClass(469)" class="unit" v-on:click="loadUnit('469')" width="112.9" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 104.457 332.7254)" class="st3 st4">469</text>
                    </g>
                    <rect x="177.6" y="275.4" :class="setLayerClass(468)" class="unit" v-on:click="loadUnit('468')" width="113.6" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 216.8125 332.7254)" class="st3 st4">468</text>
                    </g>
                    <rect x="290.8" y="275.4" :class="setLayerClass(466)" class="unit" v-on:click="loadUnit('466')" width="117.2" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 333.2168 332.7254)" class="st3 st4">466</text>
                    </g>
                    <rect x="407.9" y="275.9" :class="setLayerClass(464)" class="unit" v-on:click="loadUnit('464')" width="74.8" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 427.8862 332.5586)" class="st3 st4">464</text>
                    </g>
                    <rect x="482.3" y="276.1" :class="setLayerClass(462)" class="unit" v-on:click="loadUnit('462')" width="116" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 523.0415 333.3921)" class="st3 st4">462</text>
                    </g>
                    <rect x="637.3" y="276.1" :class="setLayerClass(460)" class="unit" v-on:click="loadUnit('460')" width="112.9" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 676.457 333.3921)" class="st3 st4">460</text>
                    </g>
                    <rect x="749.6" y="276.1" :class="setLayerClass(458)" class="unit" v-on:click="loadUnit('458')" width="113.6" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 788.8125 333.3921)" class="st3 st4">458</text>
                    </g>
                    <polygon :class="setLayerClass(456)" class="unit" v-on:click="loadUnit('456')" points="863.2,379.4 968.3,379.4 968.3,339 947.5,339 947.5,296 947.5,276 863.2,276 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 891.8125 333.3921)" class="st3 st4">456</text>
                    </g>
                    <rect x="495.2" y="405.5" :class="setLayerClass(461)" class="unit" v-on:click="loadUnit('461')" width="113.3" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 532.3066 462.7249)" class="st3 st4">461</text>
                    </g>
                    <rect x="298.9" y="405" :class="setLayerClass(465)" class="unit" v-on:click="loadUnit('465')" width="113.3" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 336.0566 462.2249)" class="st3 st4">465</text>
                    </g>
                    <rect x="185.4" y="405.2" :class="setLayerClass(467)" class="unit" v-on:click="loadUnit('467')" width="113.3" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 222.5566 462.4749)" class="st3 st4">467</text>
                    </g>
                    <rect x="412" y="405.5" :class="setLayerClass(463)" class="unit" v-on:click="loadUnit('463')" width="83.2" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 436.5566 462.7249)" class="st3 st4">463</text>
                    </g>
                    <rect x="65.7" y="395.3" :class="setLayerClass(470)" class="unit" v-on:click="loadUnit('470')" width="98.8" height="81.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 96.7233 443.8083)" class="st3 st4">470</text>
                    </g>
                    <rect x="65.4" y="512.5" :class="setLayerClass(471)" class="unit" v-on:click="loadUnit('471')" width="115.1" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 105.3066 570.725)" class="st3 st4">471</text>
                    </g>
                    <polygon :class="setLayerClass(459)"  v-on:click="loadUnit('459')" points="661.5,406 722,406 761.5,445.5 761.5,519 680.5,519 680.5,485 659.9,464.4 659.9,405.8 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 694.8862 466.5586)" class="st3 st4">459</text>
                    </g>
                    <rect x="656.5" y="553" :class="setLayerClass(473)" class="unit" v-on:click="loadUnit('473')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 692.1362 595.0586)" class="st3 st4">473</text>
                    </g>
                    <rect x="656.5" y="623.5" :class="setLayerClass(475)" class="unit" v-on:click="loadUnit('475')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 691.8862 665.5586)" class="st3 st4">475</text>
                    </g>
                    <rect x="656.5" y="694.3" :class="setLayerClass(477)" class="unit" v-on:click="loadUnit('477')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 691.9696 735.392)" class="st3 st4">477</text>
                    </g>
                    <rect x="656.5" y="764.8" :class="setLayerClass(479)" class="unit" v-on:click="loadUnit('479')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 691.7196 805.892)" class="st3 st4">479</text>
                    </g>
                    <rect x="791.7" y="573.3" :class="setLayerClass(474)" class="unit" v-on:click="loadUnit('474')" width="101.6" height="71.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 823.1362 615.392)" class="st3 st4">474</text>
                    </g>
                    <rect x="791.7" y="645.2" :class="setLayerClass(476)" class="unit" v-on:click="loadUnit('476')" width="101.6" height="71.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 822.8862 685.892)" class="st3 st4">476</text>
                    </g>
                    <rect x="791.7" y="717.5" :class="setLayerClass(478)" class="unit" v-on:click="loadUnit('478')" width="101.6" height="71.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 822.9696 761.7253)" class="st3 st4">478</text>
                    </g>
                    <rect x="791.7" y="789.4" :class="setLayerClass(480)" class="unit" v-on:click="loadUnit('480')" width="101.6" height="71.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 822.7196 832.2253)" class="st3 st4">480</text>
                    </g>
                    <rect x="656.5" y="892.5" :class="setLayerClass(483)" class="unit" v-on:click="loadUnit('483')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 691.3862 933.5587)" class="st3 st4">483</text>
                    </g>
                    <rect x="656.5" y="835.2" :class="setLayerClass(481)" class="unit" v-on:click="loadUnit('481')" width="105.8" height="57.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 691.3862 870.2253)" class="st3 st4">481</text>
                    </g>
                    <rect x="791.7" y="861.8" :class="setLayerClass(482)" class="unit" v-on:click="loadUnit('482')"" width="101.6" height="112.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 822.7196 922.8919)" class="st3 st4">482</text>
                    </g>
                    <rect x="862" y="997" :class="setLayerClass(486)" class="unit" v-on:click="loadUnit('486')" width="112.9" height="101.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 900.0529 1056.2252)" class="st3 st4">486</text>
                    </g>
                    <rect x="656.7" y="997.7" :class="setLayerClass(484)" class="unit" v-on:click="loadUnit('484')" width="112.9" height="101.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 694.7196 1056.8918)" class="st3 st4">484</text>
                    </g>
                    <rect x="769.3" y="997.7" :class="setLayerClass(485)" class="unit" v-on:click="loadUnit('485')" width="57.3" height="101.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 780.3862 1056.8918)" class="st3 st4">485</text>
                    </g>
                    <rect x="936.7" y="431.3" :class="setLayerClass(455)" class="unit" v-on:click="loadUnit('455')" width="73.3" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 956.7012 486.9019)" class="st3 st4">455</text>
                    </g>
                    <rect x="1010.2" y="431.3" :class="setLayerClass(453)" class="unit" v-on:click="loadUnit('453')" width="112.8" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1048.6182 486.9019)" class="st3 st4">453</text>
                    </g>
                    <rect x="1122.9" y="431.3" :class="setLayerClass(451)" class="unit" v-on:click="loadUnit('451')" width="112.8" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1161.3682 486.9019)" class="st3 st4">451</text>
                    </g>
                    <polygon :class="setLayerClass(450)" class="unit" v-on:click="loadUnit('450')" points="1182.4,278 1262.2,278 1262.2,378.2 1160,378.2 1160,339.2 1181.5,339.2 1181.5,278 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1203.1758 334.4111)" class="st3 st4">450</text>
                    </g>
                    <path :class="setLayerClass(472)" class="unit" v-on:click="loadUnit('472')" d="M791.8,551.5H872v-30.8l16.9-16.9l-72.8-72.8l-24,24C792.1,455.1,791.1,550.9,791.8,551.5z"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 813.7012 507.9019)" class="st3 st4">472</text>
                    </g>
                    <polygon :class="setLayerClass(457)" class="unit" v-on:click="loadUnit('457')" points="816.1,431.1 841.5,405.8 936.2,405.8 936.2,486 907.2,486 889.1,504.1 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 869.9512 449.6519)" class="st3 st4">457</text>
                    </g>
                    <rect x="1235.7" y="406.3" :class="setLayerClass(449)" class="unit" v-on:click="loadUnit('449')" width="57.3" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1246.7195 461.8919)" class="st3 st4">449</text>
                    </g>
                    <rect x="1293.2" y="506.7" :class="setLayerClass(430)" class="unit" v-on:click="loadUnit('430')" width="100.2" height="84.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1325.803 556.7253)" class="st3 st4">430</text>
                    </g>
                    <rect x="1293.2" y="591.6" :class="setLayerClass(428)" class="unit" v-on:click="loadUnit('428')" width="100.2" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1325.553 634.2252)" class="st3 st4">428</text>
                    </g>
                    <rect x="1293.2" y="662.8" :class="setLayerClass(426)" class="unit" v-on:click="loadUnit('426')" width="100.2" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1325.6362 704.0586)" class="st3 st4">426</text>
                    </g>
                    <rect x="1293.2" y="733.7" :class="setLayerClass(424)" class="unit" v-on:click="loadUnit('424')" width="100.2" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1325.3862 774.5586)" class="st3 st4">424</text>
                    </g>
                    <rect x="1293.2" y="804.5" :class="setLayerClass(422)" class="unit" v-on:click="loadUnit('422')" width="100.2" height="57.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1325.053 838.892)" class="st3 st4">422</text>
                    </g>
                    <rect x="1258.3" y="862.1" :class="setLayerClass(420)" class="unit" v-on:click="loadUnit('420')" width="99" height="112.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1289.3862 923.2252)" class="st3 st4">420</text>
                    </g>
                    <rect x="1338.7" y="999.3" :class="setLayerClass(418)" class="unit" v-on:click="loadUnit('418')" width="114.2" height="99.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1376.7695 1055.3916)" class="st3 st4">418</text>
                    </g>
                    <rect x="1224.4" y="999.3" :class="setLayerClass(419)" class="unit" v-on:click="loadUnit('419')" width="114.2" height="99.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1262.4362 1055.3916)" class="st3 st4">419</text>
                    </g>
                    <path :class="setLayerClass(431)" class="unit" v-on:click="loadUnit('431')" d="M1423.4,553.5h80.2v-30.8l16.9-16.9l-72.8-72.8l-24,24C1423.8,457.1,1422.8,552.9,1423.4,553.5z"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1445.3679 509.9019)" class="st3 st4">431</text>
                    </g>
                    <polygon :class="setLayerClass(433)" class="unit" v-on:click="loadUnit('433')" points="1447.8,433.1 1473.2,407.8 1567.9,407.8 1567.9,488 1538.9,488 1520.8,506.1 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1501.6179 451.6519)" class="st3 st4">433</text>
                    </g>
                    <path :class="setLayerClass(415)" class="unit" v-on:click="loadUnit('415')" d="M1563.4,968.8v-80.2h-29.8l-16.3-16.9l-70.4,72.8l23.2,24C1470.1,968.4,1562.8,969.4,1563.4,968.8z"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1495.3679 936.2353)" class="st3 st4">415</text>
                    </g>
                    <polygon :class="setLayerClass(421)" class="unit" v-on:click="loadUnit('421')" points="1446.9,944.4 1422.3,919 1422.3,824.3 1500,824.3 1500,853.3 1517.6,871.4 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1442.2844 875.3187)" class="st3 st4">421</text>
                    </g>
                    <rect x="1452.9" y="998.1" :class="setLayerClass(416)" class="unit" v-on:click="loadUnit('416')" width="83" height="101"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1475.9609 1054.7256)" class="st3 st4">416</text>
                    </g>
                    <rect x="1422.3" y="553.6" :class="setLayerClass(429)" class="unit" v-on:click="loadUnit('429')" width="100.2" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1454.678 596.2252)" class="st3 st4">429</text>
                    </g>
                    <rect x="1422.3" y="624.8" :class="setLayerClass(427)" class="unit" v-on:click="loadUnit('427')" width="100.2" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1454.7612 666.0586)" class="st3 st4">427</text>
                    </g>
                    <rect x="1422.3" y="695.7" :class="setLayerClass(425)" class="unit" v-on:click="loadUnit('425')" width="100.2" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1454.5112 736.5586)" class="st3 st4">425</text>
                    </g>
                    <rect x="1422.3" y="766.5" :class="setLayerClass(423)" class="unit" v-on:click="loadUnit('423')" width="100.2" height="57.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1454.178 800.892)" class="st3 st4">423</text>
                    </g>
                </g>
                <g class="unused-spaces" fill="#D5D5D6" fill-rule="nonzero" stroke="#000000" stroke-width="2">
                    <rect x="1357.3" y="861.3" class="unit unit--commonspace" width="33.7" height="59.2"/>
                    <path class="unit unit--commonspace" d="M1293.2,506.7V406.3h27.5v10.9h73.3v89.4C1394,506.7,1293.4,506.4,1293.2,506.7z"/>
                    <path class="unit unit--commonspace" d="M792.1,455.1v-49.4h49.4C841.5,405.8,791.6,455.6,792.1,455.1z"/>
                    <rect x="656.3" y="519" class="unit unit--commonspace" width="86.7" height="34"/>
                    <path class="unit unit--commonspace" d="M1423.8,457.1v-49.4h49.4C1473.2,407.8,1423.3,457.6,1423.8,457.1z"/>
                    <path class="unit unit--commonspace" d="M1470.1,968.4h-47.8V919C1422.3,919,1470.6,968.9,1470.1,968.4z"/>
                    <rect x="1835.4" y="904" class="unit unit--commonspace" width="22.4" height="65.3"/>
                </g>
            </svg>

            <svg v-cloak v-if="floor == 5" class="c-building__floor" viewBox="0 0 2268 1404" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <polygon class="building-outline" stroke="#000000" stroke-width="3" fill="none"  points="1224.4,1098.8 1824.8,1098.8 1824.8,1083.1 1858,1083.1 1858,1098.8 2203.3,1098.8 2203.3,994.2
	2160.5,994.2 2160.5,970 2202.8,970 2202.8,763.9 2087.6,763.9 2087.6,841.9 2076,841.9 2076,868.6 1857.8,868.6 1857.8,904.5
	1835.5,904.5 1835.5,868.6 1564.1,868.6 1564.1,888.5 1533.7,888.5 1499.2,854.1 1499.2,824.3 1522.5,824.3 1522.5,553.6
	1503.7,553.6 1503.7,522.8 1538.7,487.8 1598.7,487.8 1598.7,507.8 2076.5,507.8 2076.5,484 2098.5,484 2098.5,506.6 2201.8,506.6
	2201.8,278.1 1182.4,278.1 1182.4,339.2 1160,339.2 1160,405 968.5,405 968.5,379.4 968.5,339 947.5,339 947.5,276 65.3,276
	65.3,378.8 101,378.8 101,395.5 65.7,395.5 65.7,615.8 180.5,615.8 180.5,508 185.4,508 608.4,508 608.4,465 627,465 659.9,465
	680.2,485.3 680.2,519 656.3,519 656.3,963 675.1,963 675.1,997.8 656.7,997.8 656.7,1099 974.9,1099 974.9,997 893.5,997
	893.5,974.7 893.5,573.3 854,573.3 854,551.5 872,551.5 872,520.8 907,485.8 936.2,485.8 936.2,532 1235.8,532 1235.8,507
	1293.2,507 1293.2,862.3 1258.3,862.3 1258.3,999 1224.4,999 "/>
                <polygon class="building-outline" stroke="#000000" stroke-width="3" fill="none"  points="2201.4,507.8 2201.4,278 1182.4,278 1182.4,339.2 1160,339.2 1160,405 968.5,405 968.5,379.4
	968.5,339 947.5,339 947.5,276 65.5,276 65.5,378.8 101,378.8 101,395.5 65.5,395.5 65.5,615.8 180.5,615.8 180.5,508.5
	185.4,508.5 608.4,508.5 608.4,465 627,465 659.9,464.7 680.4,485.1 680.2,519 656.3,519 656.3,963 675.1,963 675.1,997.8
	656.7,997.8 656.7,1099 974.9,1099 974.9,997 893.5,997 893.5,974.7 893.5,573.3 854,573.3 854,551.5 872,551.5 872,520.8
	907,485.8 936.2,485.8 936.2,532 1235.8,532 1235.8,507 1293.2,507 1293.2,862.3 1258.3,862.3 1258.3,999 1224.4,999 1224.4,1098.8
	1824.8,1098.8 1824.8,1083.1 1858.2,1083.1 1858.2,1098.8 2203.3,1098.8 2203.3,994.2 2160.5,994.2 2160.5,970 2202.8,970
	2202.8,763.9 2087.6,763.9 2087.6,841.9 2076,841.9 2076,868.7 1858.2,868.7 1858.2,904.5 1835.5,904.5 1835.5,868.7 1564.1,868.7
	1564.1,888.5 1533.7,888.5 1499.6,853.7 1499.6,824.3 1522.5,824.3 1522.5,553.6 1503.7,553.5 1503.7,522.8 1538.8,487.9
	1598.7,487.8 1598.7,507.8 "/>

                <g class="common-spaces" fill="#D5D5D6" fill-rule="nonzero" stroke="#000000" stroke-width="2">
                    <path class="unit unit--commonspace" v-on:click="loadUnit('east-sun-deck')" d="M2201.8,505.6v-68.8c0-0.6-0.5-1.1-1.1-1.1h-84.7c-0.6,0-1.1,0.5-1.1,1.1v31.1c0,0.6-0.5,1.1-1.1,1.1h-36.5
	c-0.6,0-1.1,0.5-1.1,1.1v36.6c0,0.6,0.5,1.1,1.1,1.1c11.6,0,112.2-0.4,123.4-1.1C2201.4,506.7,2201.8,506.2,2201.8,505.6z"/>
                </g>
                <g class="unused-spaces" fill="#D5D5D6" fill-rule="nonzero" stroke="#000000" stroke-width="2">
                    <rect x="1835.4" y="904" class="unit unit--commonspace" width="22.8" height="65.3"/>
                    <rect x="1357.3" y="861.8" class="unit unit--commonspace" width="33.7" height="58.8"/>
                    <path class="unit unit--commonspace" d="M1293.2,506.7V406.3h27.5v10.9h73.3v89.4C1394,506.7,1293.4,506.4,1293.2,506.7z"/>
                    <path class="unit unit--commonspace" d="M792.1,455.1v-49.4h49.4C841.5,405.8,791.6,455.6,792.1,455.1z"/>
                    <rect x="656.3" y="519" class="unit unit--commonspace" width="86.7" height="34"/>
                    <path class="unit unit--commonspace" d="M1423.8,457.1v-49.4h49.4C1473.2,407.8,1423.3,457.6,1423.8,457.1z"/>
                    <path class="unit unit--commonspace" d="M1470.1,968.4h-47.8V919C1422.3,919,1470.6,968.9,1470.1,968.4z"/>
                    <polygon class="unit unit--commonspace" points="2087.6,763.9 2202.8,763.9 2202.7,865.7 2140.7,865.7 2140.7,843.3 2087.6,843.3 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2122.2791 789.3046)"><tspan x="0" y="0" class="st3 st4">West</tspan><tspan x="-11.6" y="22.4" class="st3 st4">Lounge</tspan><tspan x="0" y="44.8" class="st3 st4">Deck</tspan></text>
                    </g>

                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2121.5447 472.7591)"><tspan x="0" y="0" class="st3 st4">East </tspan><tspan x="-25.7" y="20.4" class="st3 st4">Sun Deck</tspan></text>
                    </g>
                </g>
                <g class="units" fill="#FFFFFF" fill-rule="nonzero" stroke="#000000">
                    <rect x="1367.4" y="278" class="unit" :class="setLayerClass(532)" v-on:click="loadUnit('532')" width="113.3" height="103.4"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1404.5098 335.3921)" class="st3 st4">532</text>
                    </g>
                    <rect x="1480.2" y="278" class="unit" :class="setLayerClass(534)" v-on:click="loadUnit('534')" width="83.8" height="103.2"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1505.9004 334.7251)" class="st3 st4">534</text>
                    </g>
                    <rect x="1599.2" y="278" class="unit" :class="setLayerClass(536)" v-on:click="loadUnit('536')" width="113.3" height="103.4"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1636.3066 335.3921)" class="st3 st4">536</text>
                    </g>
                    <rect x="1712" y="278" class="unit" :class="setLayerClass(538)" v-on:click="loadUnit('538')" width="74" height="103.2"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1731.9609 334.5586)" class="st3 st4">538</text>
                    </g>
                    <rect x="1785.9" y="278" class="unit" :class="setLayerClass(540)" v-on:click="loadUnit('540')" width="72.8" height="103.2"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1804.8398 334.5586)" class="st3 st4">540</text>
                    </g>
                    <rect x="1858.3" y="278" class="unit" :class="setLayerClass(542)" v-on:click="loadUnit('542')" width="112.9" height="103.4"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1897.457 335.3921)" class="st3 st4">542</text>
                    </g>
                    <rect x="1970.6" y="278" class="unit" :class="setLayerClass(544)" v-on:click="loadUnit('544')" width="113.6" height="103.4"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2009.8125 335.3921)" class="st3 st4">544</text>
                    </g>
                    <rect x="2083.8" y="278" class="unit" :class="setLayerClass(546)" v-on:click="loadUnit('546')" width="117.7" height="103.4"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2126.2168 335.3921)" class="st3 st4">546</text>
                    </g>
                    <rect x="1599.2" y="407.1" class="unit" :class="setLayerClass(535)" v-on:click="loadUnit('535')" width="113.3" height="100.7"/>
                    <rect x="1296" y="278" class="unit" :class="setLayerClass(548)" v-on:click="loadUnit('548')" width="71.9" height="103.2"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1636.3066 464.3916)" class="st3 st4">535</text>
                    </g>
                    <rect x="1712" y="406.9" class="unit" :class="setLayerClass(537)" v-on:click="loadUnit('537')" width="74" height="100.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1731.9609 463.5586)" class="st3 st4">537</text>
                    </g>
                    <rect x="1785.9" y="406.9" class="unit" :class="setLayerClass(539)" v-on:click="loadUnit('539')" width="72.8" height="100.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1805.8516 463.5586)" class="st3 st4">539</text>
                    </g>
                    <rect x="1858.8" y="406.9" class="unit" :class="setLayerClass(541)" v-on:click="loadUnit('541')" width="72.6" height="100.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1878.7305 463.5586)" class="st3 st4">541</text>
                    </g>
                    <rect x="1931.7" y="406.9" class="unit" :class="setLayerClass(543)" v-on:click="loadUnit('543')" width="72.3" height="100.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1950.5977 463.5586)" class="st3 st4">543</text>
                    </g>
                    <rect x="2003.5" y="406.9" class="unit" :class="setLayerClass(545)" v-on:click="loadUnit('545')" width="73" height="100.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2022.4648 463.5586)" class="st3 st4">545</text>
                    </g>
                    <rect x="2003.5" y="868.7" class="unit" :class="setLayerClass(503)" v-on:click="loadUnit('503')" width="72.8" height="100.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2021.4277 925.2256)" class="st3 st4">503</text>
                    </g>
                    <rect x="1930.6" y="868.7" class="unit" :class="setLayerClass(505)" v-on:click="loadUnit('505')" width="72.8" height="100.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1948.5488 925.2256)" class="st3 st4">505</text>
                    </g>
                    <rect x="1858.2" y="868.7" class="unit" :class="setLayerClass(507)" v-on:click="loadUnit('507')" width="72.3" height="100.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1875.6699 925.2256)" class="st3 st4">507</text>
                    </g>
                    <rect x="1752.4" y="868.7" class="unit" :class="setLayerClass(509)" v-on:click="loadUnit('509')" width="83" height="100.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1775.4609 925.2256)" class="st3 st4">509</text>
                    </g>
                    <rect x="1679.6" y="868.7" class="unit" :class="setLayerClass(511)" v-on:click="loadUnit('511')" width="72.8" height="100.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1697.5215 925.2256)" class="st3 st4">511</text>
                    </g>
                    <rect x="1564.1" y="868.7" class="unit" :class="setLayerClass(513)" v-on:click="loadUnit('513')" width="115.9" height="101.1"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1601.8672 926.3916)" class="st3 st4">513</text>
                    </g>
                    <rect x="1638.7" y="994.2" class="unit" :class="setLayerClass(512)" v-on:click="loadUnit('512')" width="114.2" height="104.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1676.7695 1051.3916)" class="st3 st4">512</text>
                    </g>
                    <rect x="1566.8" y="994.2" class="unit" :class="setLayerClass(514)" v-on:click="loadUnit('514')" width="71.7" height="104.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1586.0078 1052.7256)" class="st3 st4">514</text>
                    </g>
                    <rect x="1753.1" y="994.2" class="unit" :class="setLayerClass(510)" v-on:click="loadUnit('510')" width="71.7" height="104.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1772.2559 1052.7256)" class="st3 st4">510</text>
                    </g>
                    <rect x="1858.2" y="994.2" class="unit" :class="setLayerClass(508)" v-on:click="loadUnit('508')" width="115.4" height="104.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1897.4316 1051.3916)" class="st3 st4">508</text>
                    </g>
                    <rect x="1973.7" y="994.2" class="unit" :class="setLayerClass(506)" v-on:click="loadUnit('506')" width="114.2" height="104.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2011.8125 1051.3916)" class="st3 st4">506</text>
                    </g>
                    <rect x="2088.1" y="994.2" class="unit" :class="setLayerClass(504)" v-on:click="loadUnit('504')" width="115.2" height="104.6"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2127.2051 1051.3916)" class="st3 st4">504</text>
                    </g>
                    <rect x="2098.9" y="898.7" class="unit" :class="setLayerClass(502)" v-on:click="loadUnit('502')" width="103.9" height="70.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 2133.4453 938.8916)" class="st3 st4">502</text>
                    </g>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1314.9258 334.4111)" class="st3 st4">548</text>
                    </g>
                    <rect x="65.5" y="275.4" class="unit" :class="setLayerClass(569)" v-on:click="loadUnit('569')" width="112.8" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 104.457 332.7254)" class="st3 st4">569</text>
                    </g>
                    <rect x="177.6" y="275.4" class="unit" :class="setLayerClass(568)" v-on:click="loadUnit('568')" width="113.6" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 216.8125 332.7254)" class="st3 st4">568</text>
                    </g>
                    <rect x="290.8" y="275.4" class="unit" :class="setLayerClass(566)" v-on:click="loadUnit('566')" width="117.2" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 333.2168 332.7254)" class="st3 st4">566</text>
                    </g>
                    <rect x="407.9" y="275.9" class="unit" :class="setLayerClass(564)" v-on:click="loadUnit('564')" width="74.8" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 427.8862 332.5586)" class="st3 st4">564</text>
                    </g>
                    <rect x="482.3" y="276.1" class="unit" :class="setLayerClass(562)" v-on:click="loadUnit('562')" width="116" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 523.0415 333.3921)" class="st3 st4">562</text>
                    </g>
                    <rect x="637.3" y="276.1" class="unit" :class="setLayerClass(560)" v-on:click="loadUnit('560')" width="112.9" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 676.457 333.3921)" class="st3 st4">560</text>
                    </g>
                    <rect x="749.6" y="276.1" class="unit" :class="setLayerClass(558)" v-on:click="loadUnit('558')" width="113.6" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 788.8125 333.3921)" class="st3 st4">558</text>
                    </g>
                    <polygon class="unit" :class="setLayerClass(556)" v-on:click="loadUnit('556')" points="863.2,379.4 968.3,379.4 968.3,339 947.5,339 947.5,296 947.5,276 863.2,276 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 891.8125 333.3921)" class="st3 st4">556</text>
                    </g>
                    <rect x="495.2" y="405.5" class="unit" :class="setLayerClass(561)" v-on:click="loadUnit('561')" width="113.3" height="103"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 532.3066 462.7249)" class="st3 st4">561</text>
                    </g>
                    <rect x="298.9" y="405" class="unit" :class="setLayerClass(565)" v-on:click="loadUnit('565')" width="113.3" height="103.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 336.0566 462.2249)" class="st3 st4">565</text>
                    </g>
                    <rect x="185.4" y="405.2" class="unit" :class="setLayerClass(567)" v-on:click="loadUnit('567')" width="113.3" height="103.2"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 222.5566 462.4749)" class="st3 st4">567</text>
                    </g>
                    <rect x="412" y="405.5" class="unit" :class="setLayerClass(563)" v-on:click="loadUnit('563')" width="83.2" height="103"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 436.5566 462.7249)" class="st3 st4">563</text>
                    </g>
                    <rect x="65.5" y="395.3" class="unit" :class="setLayerClass(570)" v-on:click="loadUnit('570')" width="99" height="81.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 96.7233 443.8083)" class="st3 st4">570</text>
                    </g>
                    <rect x="65.5" y="512.5" class="unit" :class="setLayerClass(571)" v-on:click="loadUnit('571')" width="115" height="103.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 105.3066 570.725)" class="st3 st4">571</text>
                    </g>
                    <polygon class="unit" :class="setLayerClass(559)" v-on:click="loadUnit('559')" points="661.5,406 722,406 761.5,445.5 761.5,519 680.5,519 680.4,485.1 659.9,464.7 659.9,405.8 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 694.8862 466.5586)" class="st3 st4">559</text>
                    </g>
                    <rect x="656.5" y="553" class="unit" :class="setLayerClass(573)" v-on:click="loadUnit('573')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 692.1362 595.0586)" class="st3 st4">573</text>
                    </g>
                    <rect x="656.5" y="623.5" class="unit" :class="setLayerClass(575)" v-on:click="loadUnit('575')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 691.8862 665.5586)" class="st3 st4">575</text>
                    </g>
                    <rect x="656.5" y="694.3" class="unit" :class="setLayerClass(577)" v-on:click="loadUnit('577')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 691.9696 735.392)" class="st3 st4">577</text>
                    </g>
                    <rect x="656.5" y="764.8" class="unit" :class="setLayerClass(579)" v-on:click="loadUnit('579')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 691.7196 805.892)" class="st3 st4">579</text>
                    </g>
                    <rect x="791.7" y="573.3" class="unit" :class="setLayerClass(574)" v-on:click="loadUnit('574')" width="101.6" height="71.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 823.1362 615.392)" class="st3 st4">574</text>
                    </g>
                    <rect x="791.7" y="645.2" class="unit" :class="setLayerClass(576)" v-on:click="loadUnit('576')"width="101.6" height="71.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 822.8862 685.892)" class="st3 st4">576</text>
                    </g>
                    <rect x="791.7" y="717.5" class="unit" :class="setLayerClass(578)" v-on:click="loadUnit('578')" width="101.6" height="71.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 822.9696 761.7253)" class="st3 st4">578</text>
                    </g>
                    <rect x="791.7" y="789.4" class="unit" :class="setLayerClass(580)" v-on:click="loadUnit('580')" width="101.6" height="71.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 822.7196 832.2253)" class="st3 st4">580</text>
                    </g>
                    <rect x="656.5" y="892.5" class="unit" :class="setLayerClass(583)" v-on:click="loadUnit('583')" width="105.8" height="70.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 691.3862 933.5587)" class="st3 st4">583</text>
                    </g>
                    <rect x="656.5" y="835.2" class="unit" :class="setLayerClass(581)" v-on:click="loadUnit('581')" width="105.8" height="57.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 691.3862 870.2253)" class="st3 st4">581</text>
                    </g>
                    <rect x="791.7" y="861.8" class="unit" :class="setLayerClass(582)" v-on:click="loadUnit('582')" width="101.6" height="112.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 822.7196 922.8919)" class="st3 st4">582</text>
                    </g>
                    <rect x="862" y="997" class="unit" :class="setLayerClass(586)" v-on:click="loadUnit('586')" width="112.9" height="101.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 900.0529 1056.2252)" class="st3 st4">586</text>
                    </g>
                    <rect x="656.7" y="997.7" class="unit" :class="setLayerClass(584)" v-on:click="loadUnit('584')" width="112.9" height="101.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 694.7196 1056.8918)" class="st3 st4">584</text>
                    </g>
                    <rect x="769.3" y="997.7" class="unit" :class="setLayerClass(585)" v-on:click="loadUnit('585')" width="57.3" height="101.3"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 780.3862 1056.8918)" class="st3 st4">585</text>
                    </g>
                    <rect x="936.7" y="431.3" class="unit" :class="setLayerClass(555)" v-on:click="loadUnit('555')" width="73.3" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 956.7012 486.9019)" class="st3 st4">555</text>
                    </g>
                    <rect x="1010.2" y="431.3" class="unit" :class="setLayerClass(553)" v-on:click="loadUnit('553')" width="112.8" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1048.6182 486.9019)" class="st3 st4">553</text>
                    </g>
                    <rect x="1122.9" y="431.3" class="unit" :class="setLayerClass(551)" v-on:click="loadUnit('551')" width="112.8" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1161.3682 486.9019)" class="st3 st4">551</text>
                    </g>
                    <polygon class="unit" :class="setLayerClass(550)" v-on:click="loadUnit('550')" points="1182.4,278 1262.2,278 1262.2,378.2 1160,378.2 1160,339.2 1181.5,339.2 1181.5,278 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1203.1758 334.4111)" class="st3 st4">550</text>
                    </g>
                    <path class="unit" :class="setLayerClass(572)" v-on:click="loadUnit('572')" d="M791.8,551.5H872v-30.8l17-16.8l-72.9-72.9l-24,24C792.1,455.1,791.1,550.9,791.8,551.5z"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 813.7012 507.9019)" class="st3 st4">572</text>
                    </g>
                    <polygon class="unit" :class="setLayerClass(557)" v-on:click="loadUnit('557')" points="816.1,431.1 841.5,405.8 936.2,405.8 936.2,486 907.2,486 889,504 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 869.9512 449.6519)" class="st3 st4">557</text>
                    </g>
                    <rect x="1235.7" y="406.3" class="unit" :class="setLayerClass(549)" v-on:click="loadUnit('549')" width="57.3" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1246.7195 461.8919)" class="st3 st4">549</text>
                    </g>
                    <rect x="1293.2" y="506.7" class="unit" :class="setLayerClass(530)" v-on:click="loadUnit('530')" width="100.2" height="84.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1325.803 556.7253)" class="st3 st4">530</text>
                    </g>
                    <rect x="1293.2" y="591.6" class="unit" :class="setLayerClass(528)" v-on:click="loadUnit('528')" width="100.2" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1325.553 634.2252)" class="st3 st4">528</text>
                    </g>
                    <rect x="1293.2" y="662.8" class="unit" :class="setLayerClass(526)" v-on:click="loadUnit('526')" width="100.2" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1325.6362 704.0586)" class="st3 st4">526</text>
                    </g>
                    <rect x="1293.2" y="733.7" class="unit" :class="setLayerClass(524)" v-on:click="loadUnit('524')" width="100.2" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1325.3862 774.5586)" class="st3 st4">524</text>
                    </g>
                    <rect x="1293.2" y="804.5" class="unit" :class="setLayerClass(522)" v-on:click="loadUnit('522')" width="100.2" height="57.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1325.053 838.892)" class="st3 st4">522</text>
                    </g>
                    <rect x="1258.3" y="862.1" class="unit" :class="setLayerClass(520)" v-on:click="loadUnit('520')" width="99" height="112.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1289.3862 923.2252)" class="st3 st4">520</text>
                    </g>
                    <rect x="1338.7" y="999.3" class="unit" :class="setLayerClass(518)" v-on:click="loadUnit('518')" width="114.2" height="99.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1376.7695 1055.3916)" class="st3 st4">518</text>
                    </g>
                    <rect x="1224.4" y="999.3" class="unit" :class="setLayerClass(519)" v-on:click="loadUnit('519')" width="114.2" height="99.5"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1262.4362 1055.3916)" class="st3 st4">519</text>
                    </g>
                    <path class="unit" :class="setLayerClass(531)" v-on:click="loadUnit('531')" d="M1423.4,553.5l80.2,0v-30.8l17-16.8l-72.9-72.9l-24,24C1423.8,457.1,1422.8,552.9,1423.4,553.5z"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1445.3679 509.9019)" class="st3 st4">531</text>
                    </g>
                    <polygon class="unit" :class="setLayerClass(533)" v-on:click="loadUnit('533')" points="1447.8,433.1 1473.2,407.8 1567.9,407.8 1567.9,487.9 1538.8,487.9 1520.7,506 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1501.6179 451.6519)" class="st3 st4">533</text>
                    </g>
                    <path class="unit" :class="setLayerClass(515)" v-on:click="loadUnit('515')" d="M1563.4,968.8v-80.2h-29.8l-16.2-17l-70.6,72.9l23.2,24C1470.1,968.4,1562.8,969.4,1563.4,968.8z"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1495.3679 936.2353)" class="st3 st4">515</text>
                    </g>
                    <polygon class="unit" :class="setLayerClass(521)" v-on:click="loadUnit('521')" points="1446.9,944.4 1422.3,919 1422.3,824.3 1499.6,824.3 1499.6,853.7 1517.5,871.5 "/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1442.2844 875.3187)" class="st3 st4">521</text>
                    </g>
                    <rect x="1452.9" y="998.1" class="unit" :class="setLayerClass(516)" v-on:click="loadUnit('516')" width="83" height="100.7"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1475.9609 1054.7256)" class="st3 st4">516</text>
                    </g>
                    <rect x="1422.3" y="553.6" class="unit" :class="setLayerClass(529)" v-on:click="loadUnit('529')" width="100.2" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1454.678 596.2252)" class="st3 st4">529</text>
                    </g>
                    <rect x="1422.3" y="624.8" class="unit" :class="setLayerClass(527)" v-on:click="loadUnit('527')" width="100.2" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1454.7612 666.0586)" class="st3 st4">527</text>
                    </g>
                    <rect x="1422.3" y="695.7" class="unit" :class="setLayerClass(525)" v-on:click="loadUnit('525')" width="100.2" height="70.9"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1454.5112 736.5586)" class="st3 st4">525</text>
                    </g>
                    <rect x="1422.3" y="766.5" class="unit" :class="setLayerClass(523)" v-on:click="loadUnit('523')" width="100.2" height="57.8"/>
                    <g>
                        <text font-family="Roboto-Regular, Roboto" font-size="22" font-weight="normal" line-spacing="13" fill="#000000" transform="matrix(1 0 0 1 1454.178 800.892)" class="st3 st4">523</text>
                    </g>
                </g>
            </svg>

        </div>

        <div class="c-compass-rose">
            <img class="u-responsive" src="images/compass-rose.png">
        </div>

        <div class="c-legend">
            <h3 class="c-legend__title">
                Legend
                <button class="btn btn-primary btn-sm u-pull-right" type="button" data-toggle="collapse" data-target="#js-legend-list" aria-expanded="false" aria-controls="collapseExample">
                    <i class="fa fa-menu"></i>
                </button>
            </h3>
            <ul class="c-legend__list collapse" id="js-legend-list">
                <li v-on:click="showLayer('studio', false)" :class="{ 'is-active': isActive('studio', false) }"><span class="c-legend__circle c-legend__circle--blue"></span> <span>Studio</span></li>
                <li v-on:click="showLayer('studio', true)" :class="{ 'is-active': isActive('studio', true) }"><span class="c-legend__circle c-legend__circle--dark-blue"></span> <span>Studio <i class="fa fa-accessible"></i></span></li>
                <li v-on:click="showLayer('1br', false)" :class="{ 'is-active': isActive('1br', false) }"><span class="c-legend__circle c-legend__circle--green"></span> <span>1 Bedroom</span></li>
                <li v-on:click="showLayer('1br', true)" :class="{ 'is-active': isActive('1br', true) }"><span class="c-legend__circle c-legend__circle--dark-green"></span> <span>1 Bedroom <i class="fa fa-accessible"></i></span></li>
                <li v-on:click="showLayer('1br-den', false)" :class="{ 'is-active': isActive('1br-den', false) }"><span class="c-legend__circle c-legend__circle--purple"></span> <span>1 Bedroom w/ Den</span></li>
<!--                <li v-on:click="showLayer('1br-den', true)" :class="{ 'is-active': isActive('1br-den', true) }"><span class="c-legend__circle c-legend__circle&#45;&#45;dark-purple"></span> <span>1 Bedroom w/ Den <i class="fa fa-accessible"></i></span></li>-->
                <li v-on:click="showLayer('2br', false)" :class="{ 'is-active': isActive('2br', false) }"><span class="c-legend__circle c-legend__circle--orange"></span> <span>2 Bedroom</span></li>
                <li v-on:click="showLayer('2br', true)" :class="{ 'is-active': isActive('2br', true) }"><span class="c-legend__circle c-legend__circle--dark-orange"></span> <span>2 Bedroom <i class="fa fa-accessible"></i></span></li>
                <li v-if="currentLayer" v-on:click="showLayer('')"><span class="c-legend__circle"></span> <span>Clear</span></li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {

        data() {
            return{
                layer: '',
                accessible: false
            }
        },

        computed: {
            floor() {
                return this.$route.params.floor
            },
            currentLayer() {
                return this.layer
            },
            isAccessible() {
                return this.accessible
            }
        },

        methods: {
            loadUnit(id) {
                this.$router.push({ name: 'unit', params: { id: id }})
            },
            showLayer(layerId, accessible) {
                this.layer = layerId;
                this.accessible = accessible;
            },
            isActive(layerId, accessible) {
                return (this.currentLayer == layerId && this.isAccessible == accessible)
            },
            setLayerClass(id) {
                let type = this.$store.state.units[id].type;
                let accessible = this.$store.state.units[id].handicap;

                if(type == this.currentLayer && accessible == true && this.isAccessible) {
                    return 'unit--' + this.currentLayer + '-a'
                }

                if(type == this.currentLayer && accessible == false && ! this.isAccessible) {
                    return 'unit--' + this.currentLayer
                }


            }
        }
    };
</script>
