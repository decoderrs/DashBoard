import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const RegionChart = ({ countries }) => {
  
  const regionCounts = {};
  countries.forEach(item => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });
  
  const chartData = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
        ],
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        cornerRadius: 5,
        displayColors: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'start',
        offset: -20,
        font: {
          size: 14,
          weight: 'bold',
        },
        formatter: (value) => value + '%',
        shadowBlur: 10,
        shadowColor: 'white',
      },
    }
}

  return (
    <Box style={{ margin: '50px', padding:"10px", fontFamily: 'Arial, sans-serif',  borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'wheat' }}>
      <Heading as="h2" mb={4}>
        Region Distribution
      </Heading>
      <Doughnut data={chartData} options={chartOptions}/>
    </Box>
  );
};

export default RegionChart;