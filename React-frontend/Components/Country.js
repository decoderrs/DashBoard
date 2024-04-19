import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import {
    Box,
    Flex,
    Heading,
    Select,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react";
import { CategoryScale,LinearScale, Chart, BarElement } from "chart.js";

Chart.register(CategoryScale,LinearScale, BarElement);

const CountryChart = ({countries}) => {

    const colorMode = useColorMode();
    const [chartData, setChartData] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('United States of America');
 
    useEffect(() => {
        
        // console.log("countries",typeof(data1));
        const countryData = countries.filter(
            (index) => index.country === selectedCountry
        );
        // console.log('countrydata : ',countryData);
        
        const sectors = {};
        countryData.forEach(element => {
            if (!sectors[element.sector]) {
                sectors[element.sector] = [];
            }
            sectors[element.sector].push(element.intensity);
        });
        // console.log(sectors);
        
        const sectorLabels = Object.keys(sectors);
        sectorLabels[3] = 'others';
        const sectorIntensities = sectorLabels.map(
            (sector) => sectors[sector]
        );

        const chartBackgroundColor =
            colorMode === 'light' ? "rgba(79, 59, 169, 0.7" : "rgba(144, 104, 190 , 0.7)";
          
       
        // console.log('sectorlabels',sectorLabels);

        setChartData({
            labels: sectorLabels,
            datasets: [
                {
                    label: "Intensity",
                    data: sectorIntensities,
                    backgroundColor: chartBackgroundColor,
                },
            ],
        });

        }, [selectedCountry,countries, colorMode]);

        

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { stacked: true, },
                y: {
                    stacked: true,
                    grid: {
                        color: colorMode === "light" ? "gray.200" : "gray: 900",
                    },
                },
            },
        };

        const handleCountryChange = (event) => {
            setSelectedCountry(event.target.value);
        };
        
        // console.log(chartData,typeof(chartData));
        
        return (
            <Box p={6} shadow="md" bg={["wheat", "gray.200"]} m={50}>
                <Flex direction="column" margin={'auto'}>
                    <Heading as={"h2"} textAlign={"left"} mb={4} style={{ textAlign: "left" }}>
                        Country Chart
                    </Heading>
                    <Select
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        mb={4}
                        w="200px"
                        colorScheme='purple'>
                        <option value="United States of America">
                            United States of America
                        </option>
                        <option value="Mexico">Mexico</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Russia">Russia</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                    </Select>
                    <Box height="500px" width={"100%"}>
                        {chartData && <Bar data={chartData} options={chartOptions} />}
                    </Box>
                </Flex>
            </Box>
        );
    };

    export default CountryChart;





