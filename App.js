import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { ECharts } from 'react-native-echarts-wrapper';

class App extends Component {

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  };

  render() {
    return (
      <View style={styles.container}>
        <ECharts option={this.option}></ECharts>
      </View>
    );
  }
}

export default App

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})
