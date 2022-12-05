import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
// components
import { BaseOptionChart } from '../Charts/basechart';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 392;

const LEGEND_HEIGHT = 72;

export const ChartWrapperStyle = styled('div')(() => ({
  height: 393,
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
  '& .apexcharts-legend': {
    height: 72,
    alignContent: 'center',
    position: 'relative !important',
    top: `320 !important`,
  },
}));

// ----------------------------------------------------------------------

AppCurrentSubject.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AppCurrentSubject({ title, subheader, chartData, chartColors, chartLabels, ...other }) {
  useEffect(() => {
    console.log(chartLabels);
  }, [chartData])
  
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: 2 },
    fill: { opacity: 0.48 },
    legend: { floating: true, horizontalAlign: 'center' },
    dropShadow: {
                  enabled: true,
                  blur: 1,
                  left: 1,
                  top: 1
                },
    xaxis: {
      categories: chartLabels,
      labels: {
        style: {
          colors: chartColors,
        },
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <ChartWrapperStyle dir="ltr">
        <ReactApexChart type="radar" series={chartData} options={chartOptions} height={340} />
      </ChartWrapperStyle>
    </Card>
  );
}
