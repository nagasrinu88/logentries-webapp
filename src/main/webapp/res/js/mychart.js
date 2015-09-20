/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function (pubObj) {

    var DEFAULT_CHART_OPTIONS = {'title': 'Read Vs Write IOPS',
        'width': 650,
        'height': 350,
        //backgroundColor:'',
        chartArea: {width: '80%'},
        series: {
            0: {color: '#00c0ef'},
            1: {color: '#f39c12'},
            2: {color: '#dd4b39'},
            3: {color: '#6f9654'},
            4: {color: '#1c91c0'},
            5: {color: '#43459d'},
        },
        //explorer:{keepInBounds:true},
        lineWidth: 3,
        //curveType: 'function',
        legend: {position: 'bottom'},
        animation: {
            //startup:true,
            duration: 1000,
            easing: 'out',
        },
        hAxis: {
            //direction: -1,
            format: 'HH:mm'
                    //,gridlines: {count: 15}
        },
        vAxis: {
            //gridlines: {color: 'none'},
            //minValue: 0
        }
    };
    var DEFAULT_LINE_CHART_OPTIONS = {};
    /**
     * 
     * @returns {undefined}
     */
    function BaseChart() {
        this.model;
        this.view;
        this.controller;
        this.opts;
        this._columns;
    }
    BaseChart.prototype = {
        init: function (container, columns) {
            var ME = this;
            //ME.opts = $.extend(true, {}, options, opts);
            this.model = new google.visualization.DataTable();
            this.view = new google.visualization.LineChart(container);
            this._columns = columns;
            for (var i = 0; i < ME._columns.length; i++) {
                var clm = ME._columns[i];
                ME.model.addColumn(clm.type, clm.label);
            }
            //this.controller = new ChartController();
            return this;
        },
        setOptions: function (opts) {
            var ME = this;
            ME.opts = $.extend(true, {}, DEFAULT_CHART_OPTIONS, opts);
        },
        /**
         * This method will render the current modal to the view
         * @returns {undefined}
         */
        render: function (reRender) {
            var ME = this;
            reRender = reRender || false;
            ME.view.draw(ME.model, ME.opts);
            //ME.view.render(ME.model);
        }, setData: function (rows) {
            var ME = this;
            ME.model.addRows(rows);
            ME.render();
        }
    };
    pubObj.BaseChart = BaseChart;
})(window.ChartCreator = window.ChartCreator || {});
