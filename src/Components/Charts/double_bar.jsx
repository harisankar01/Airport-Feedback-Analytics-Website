import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../context/contextprovider';


const ChartsHeader = ({ category, title }) => (
  <div className=" mb-10">
    <div>
      <p className="text-lg text-gray-400">Sentimentak Analysis</p>
      <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">{category}</p>
    </div>
    <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">{title}</p>
  </div>
);




 const TripleBar = ({barCustomSeries}) => {
    // console.log(item);
  const { currentMode } = useStateContext();
  
  const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};
const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
const pallet=["#f179f1","#60fce2","#5fbd7d"]
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-red-50 dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar"  title="Sentimental Analysise on different domains" />
      <div className=" w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          palettes={pallet}
          background={currentMode === 'Dark' ? '#d3f06c' : '#f1e5c6'}
          style={{borderRadius:20}}
          legendSettings={{ background: '#ff7f35' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective >
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default TripleBar;
