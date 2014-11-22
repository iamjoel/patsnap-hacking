$(document).ready(function() {
    function init() {
        $('.ui.dropdown').dropdown();
        var numRankData = [{
            name: '农业',
            num: 1000
        }, {
            name: '作业；运输',
            num: 900
        },
        {
            name: '化学；冶金',
            num: 800
        }, {
            name: '纺织 造纸',
            num: 500
        },
        {
            name: '固定建筑物',
            num: 400
        }, {
            name: '机械工程、照明、加热',
            num: 200
        },
        {
            name: '物理',
            num: 100
        }, {
            name: '电学',
            num: 90
        }];

        renderData($('.num.rank.box'), numRankData, 'num');

        var speedRankData = [{
            name: '农业',
            speed: 0.95
        }, {
            name: '作业；运输',
            speed: -0.9
        },
        {
            name: '化学；冶金',
            speed: 0.8
        }, {
            name: '纺织 造纸',
            speed: 0.5
        },
        {
            name: '固定建筑物',
            speed: 0.4
        }, {
            name: '机械工程、照明、加热',
            speed: 0.2
        },
        {
            name: '物理',
            speed: 0.1
        }, {
            name: '电学',
            speed: 0.9
        }];

        renderData($('.speed.rank.box'), speedRankData, 'speed');

    }

    function formatToChartData(data, valKey) {
        var xAxis = [];
        var vals = [];
        data.forEach(function(each) {
            xAxis.push(each.name);
            vals.push(each[valKey]);
        });
        return {
            xAxis: xAxis,
            vals: vals
        };
    }

    function renderData($el, data, valKey) {
        var chartData = formatToChartData(data, valKey);
        // srcipt标签式引入
        var myChart = echarts.init($el[0]);

        // myChart.showLoading({
        //     text: '正在努力的读取数据中...', //loading话术
        // });

        // ajax getting data...............

        // ajax callback
        // myChart.hideLoading();

        // 图表使用-------------------
        var option = {
            // legend: { // 图例配置
            //     padding: 5, // 图例内边距，单位px，默认上下左右内边距为5
            //     itemGap: 10, // Legend各个item之间的间隔，横向布局时为水平间隔，纵向布局时为纵向间隔
            //     data: ['ios', 'android']
            // },
            tooltip: { // 气泡提示配置
                trigger: 'item', // 触发类型，默认数据触发，可选为：'axis'
            },
            xAxis: [ // 直角坐标系中横轴数组
                {
                    type: 'category', // 坐标轴类型，横轴默认为类目轴，数值轴则参考yAxis说明
                    data: chartData.xAxis
                }
            ],
            yAxis: [ // 直角坐标系中纵轴数组
                {
                    type: 'value', // 坐标轴类型，纵轴默认为数值轴，类目轴则参考xAxis说明
                    // boundaryGap: [0.1, 0.1], // 坐标轴两端空白策略，数组内数值代表百分比
                    splitNumber: 4 // 数值轴用，分割段数，默认为5
                }
            ],
            series: [{
                name: '', // 系列名称
                type: 'bar', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
                data: chartData.vals
            }],
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            }
        };
        myChart.setOption(option);


        // 增加些数据------------------
        // option.legend.data.push('win');
        // option.series.push({
        //     name: 'win', // 系列名称
        //     type: 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
        //     data: [112, 23, 45, 56, 233, 343, 454, 89, 343, 123, 45, 123]
        // });
        myChart.setOption(option);


        // 图表清空-------------------
        // myChart.clear();

        // 图表释放-------------------
        // myChart.dispose();
    }


    init();


});