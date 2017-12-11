import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import WidgetTooltip from 'pages/country/widget/components/widget-tooltip';
import WidgetPieChartTooltip from './widget-pie-chart-tooltip-component';

// import './widget-pie-chart-styles.scss';

class WidgetPieChart extends PureComponent {
  render() {
    const { data, width, height } = this.props;
    return (
      <PieChart width={width} height={height}>
        <Pie {...this.props}>
          {data.map(
            (item, index) =>
              (item.value ? (
                <Cell key={index.toString()} fill={item.color} />
              ) : null)
          )}
        </Pie>
        <Tooltip
          percentageAndArea
          content={
            <WidgetTooltip>
              <WidgetPieChartTooltip data={data} />
            </WidgetTooltip>
          }
        />
      </PieChart>
    );
  }
}

WidgetPieChart.propTypes = {
  data: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number
};

WidgetPieChart.defaultProps = {
  width: 120,
  height: 120
};

export default WidgetPieChart;
