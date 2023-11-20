import React from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

export default function Graphs() {
    const dataSource = {
        chart: {
            caption: "Asset Allocation",
            // subcaption: "For a net-worth of $1M",
            showvalues: "1",
            showpercentintooltip: "0",
            // numberprefix: "$",
            enablemultislicing: "1",
            numbersuffix: "%",
            theme: "candy"
        },
        data: [
            {
                label: "Equity",
                value: "30"
            },
            {
                label: "Debt",
                value: "45"
            },
            {
                label: "Bullion",
                value: "10"
            },
            {
                label: "Real-estate",
                value: "15"
            }
        ]
    };
    return (
        <ReactFusioncharts
        type="pie3d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    )
}
