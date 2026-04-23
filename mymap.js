/*大屏*/
var geoCoordMap = {
    '西安': [108.9402, 34.3416],
    '横山区': [109.2900, 37.9650],
    '靖边县': [108.7930, 37.4970],
    '佳县': [110.4880, 38.0180],
    '绥德县': [110.2600, 37.5100],
    '宝塔区': [109.4900, 36.6500],
    '大荔县': [109.9430, 34.7970],
    '山阳县': [109.8800, 33.5400],
    '商州市': [109.9400, 33.8700],
    '宜君县': [109.1200, 35.4000],
    '呼图壁县': [86.9000, 44.2000],
    '博乐市': [82.1000, 44.9000],
    '阿克苏市': [80.3000, 41.2000]
};

var BJData = [
    [{
        name: '西安'
    }, {
        name: '横山区',
        value: 90
    }],
    [{
        name: '西安'
    }, {
        name: '靖边县',
        value: 85
    }],
    [{
        name: '西安'
    }, {
        name: '佳县',
        value: 80
    }],
    [{
        name: '西安'
    }, {
        name: '绥德县',
        value: 75
    }],
    [{
        name: '西安'
    }, {
        name: '宝塔区',
        value: 88
    }],
    [{
        name: '西安'
    }, {
        name: '大荔县',
        value: 82
    }],
    [{
        name: '西安'
    }, {
        name: '山阳县',
        value: 78
    }],
    [{
        name: '西安'
    }, {
        name: '商州市',
        value: 85
    }],
    [{
        name: '西安'
    }, {
        name: '宜君县',
        value: 80
    }],
    [{
        name: '西安'
    }, {
        name: '呼图壁县',
        value: 85
    }],
    [{
        name: '西安'
    }, {
        name: '博乐市',
        value: 80
    }],
    [{
        name: '西安'
    }, {
        name: '阿克苏市',
        value: 75
    }]
];

var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord
            }, {
                coord: toCoord
            }]);
        }
    }
    return res;
};

var color = ['#3ed4ff', '#ff4d4f'];
var series = [];
series.push({
    name: '陕西 Top10',
    type: 'lines',
    zlevel: 1,
    effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: '#fff',
        symbolSize: 3
    },
    lineStyle: {
        normal: {
            color: color[0],
            width: 0,
            curveness: 0.2
        }
    },
    data: convertData(BJData)
}, {
    name: '陕西 Top10',
    type: 'lines',
    zlevel: 2,
    effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 15
    },
    lineStyle: {
        normal: {
            color: color[0],
            width: 1,
            opacity: 0.4,
            curveness: 0.2
        }
    },
    data: convertData(BJData)
}, {
    name: '陕西 Top10',
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
        brushType: 'stroke'
    },
    label: {
        normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
        }
    },
    symbolSize: function (val) {
        return val[2] / 8;
    },
    itemStyle: {
        normal: {
            color: color[0]
        }
    },
    data: BJData.map(function (dataItem) {
        return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        };
    })
}, {
    name: '西安',
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 3,
    rippleEffect: {
        brushType: 'stroke',
        scale: 3
    },
    label: {
        normal: {
            show: true,
            position: 'right',
            formatter: '{b}',
            color: '#ff4d4f',
            fontSize: 14,
            fontWeight: 'bold'
        }
    },
    symbolSize: function (val) {
        return 20;
    },
    itemStyle: {
        normal: {
            color: '#ff4d4f'
        }
    },
    data: [{
        name: '西安',
        value: geoCoordMap['西安'].concat([100])
    }]
});

option = {
    backgroundColor: '#080a20',
    title: {
        left: 'left',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['陕西 Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    geo: {
        map: 'china',
        zoom: 1.2,
        center: [95, 38],
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#142957',
                borderColor: '#0692a4'
            },
            emphasis: {
                areaColor: '#0b1c2d'
            }
        },
        regions: [{
            name: '陕西',
            itemStyle: {
                normal: {
                    areaColor: '#1a4d8f',
                    borderColor: '#0692a4'
                },
                emphasis: {
                    areaColor: '#2a6ab5'
                }
            }
        }, {
            name: '新疆',
            itemStyle: {
                normal: {
                    areaColor: '#1a4d8f',
                    borderColor: '#0692a4'
                },
                emphasis: {
                    areaColor: '#2a6ab5'
                }
            }
        }]
    },
    series: series
};
var myecharts = echarts.init($('.map .geo')[0])
myecharts.setOption(option)