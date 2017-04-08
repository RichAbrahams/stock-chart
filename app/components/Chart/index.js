/**
*
* Chart
*
*/

import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import ChartContainer from './ChartContainer';

// import styled from 'styled-components';

function Chart(props) {
  const { stocks } = props;
  const datasets = stocks.map(item => {return { label: item.code, data: item.prices.reverse(), borderColor: item.color, fill: false }; });
  const data = {
    labels: stocks[0].dates.reverse(),
    datasets,
  };
  // const dataSets = stocks.
  return (
    <ChartContainer className="chartContainer">
      <Line
        width={800}
        height={600}
        data={data}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </ChartContainer>
  );
}

Chart.propTypes = {};

export default Chart;
