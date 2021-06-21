//Created By Gorishankar Puniya

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  TextInput,
} from 'react-native';

let btnValue = '';
let result = '';
let lastWd = '';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnValue: '',
      result: [],
    };
  }

  calculateResult() {
    let show = this.state.btnValue;
    console.log(show, eval(show));
    this.setState({result: eval(show).toString()});
  }

  backspace() {
    var lastWd = this.state.btnValue;
    this.setState({btnValue: lastWd.slice(0, -1)});
  }

  multiBtn() {
    var lastWd = this.state.btnValue;
    const lastChar = this.state.btnValue.split('').pop();
    console.log(lastChar);
    // if (btnValue.indexOf(lastChar) > 0) {
    //   return this.calculateResult(this.state.result);
    // }
    if (
      lastChar == '-' ||
      lastChar == '+' ||
      lastChar == '/' ||
      lastChar == '*' ||
      lastChar == '%'
    ) {
      return this.setState({btnValue: lastWd.slice(0, -1)});
    }
    console.log(btnValue);

    this.setState({btnValue: this.state.btnValue + '*'});
  }

  sumBtn() {
    var lastWd = this.state.btnValue;
    const lastChar = this.state.btnValue.split('').pop();
    console.log(lastChar);
    if (
      lastChar == '-' ||
      lastChar == '+' ||
      lastChar == '/' ||
      lastChar == '*' ||
      lastChar == '%'
    ) {
      return this.setState({btnValue: lastWd.slice(0, -1)});
    }
    console.log(btnValue);

    this.setState({btnValue: this.state.btnValue + '+'});
  }

  subtrBtn() {
    var lastWd = this.state.btnValue;
    const lastChar = this.state.btnValue.split('').pop();
    console.log(lastChar);
    if (
      lastChar == '-' ||
      lastChar == '+' ||
      lastChar == '/' ||
      lastChar == '*' ||
      lastChar == '%'
    ) {
      return this.setState({btnValue: lastWd.slice(0, -1)});
    }
    console.log(btnValue);

    this.setState({btnValue: this.state.btnValue + '+'});
  }

  dividBtn() {
    var lastWd = this.state.btnValue;
    const lastChar = this.state.btnValue.split('').pop();
    console.log(lastChar);
    if (
      lastChar == '-' ||
      lastChar == '+' ||
      lastChar == '/' ||
      lastChar == '*' ||
      lastChar == '%'
    ) {
      return this.setState({btnValue: lastWd.slice(0, -1)});
    }
    console.log(btnValue);

    this.setState({btnValue: this.state.btnValue + '/'});
  }
  presentBtn() {
    var lastWd = this.state.btnValue;
    const lastChar = this.state.btnValue.split('').pop();
    console.log(lastChar);
    if (
      lastChar == '-' ||
      lastChar == '+' ||
      lastChar == '/' ||
      lastChar == '*' ||
      lastChar == '%'
    ) {
      return this.setState({btnValue: lastWd.slice(0, -1)});
    }
    console.log(btnValue);

    this.setState({btnValue: this.state.btnValue + '%'});
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#ff64a6',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                justifyContent: 'center',
                alignContent: 'center',
                color: 'white',
                margin: 5,
              }}>
              Calculator
            </Text>
          </View>
          <View
            style={{
              borderColor: 'white',
              borderWidth: 1,
              flex: 4,
              padding: 5,
              margin: 10,
              height: '100%',
            }}>
            <TextInput
              style={{
                marginTop: 5,
                fontSize: 50,
                width: '100%',
                height: 100,
                textAlign: 'right',
                flexShrink: 1,
              }}
              keyboardType="numeric"
              value={this.state.btnValue}></TextInput>

            <TextInput
              style={{
                margin: 5,
                fontSize: 50,
                textAlign: 'right',
                flexWrap: 'wrap',
              }}
              value={this.state.result}
              placeholder="0"></TextInput>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableHighlight
                onPress={() => this.setState({btnValue: '', result: ''})}
                style={styles.scibtn}>
                <Text
                  style={{color: '#c28f34', fontSize: 25, textAlign: 'center'}}>
                  C
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => this.backspace()}
                style={styles.scibtn}>
                <Text
                  style={{color: '#c28f34', fontSize: 25, textAlign: 'center'}}>
                  Del
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => this.presentBtn()}
                style={styles.scibtn}>
                <Text
                  style={{color: '#c28f34', fontSize: 25, textAlign: 'center'}}>
                  %
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => this.dividBtn()}
                style={styles.scibtn}>
                <Text
                  style={{color: '#c28f34', fontSize: 25, textAlign: 'center'}}>
                  /
                </Text>
              </TouchableHighlight>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + 7})
                }
                style={styles.numberBtn}>
                <Text style={styles.numFontClr}>7</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + 8})
                }
                style={styles.numberBtn}>
                <Text style={styles.numFontClr}>8</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + 9})
                }
                style={styles.numberBtn}>
                <Text style={styles.numFontClr}>9</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => this.multiBtn()}
                style={styles.scibtn}>
                <Text
                  style={{color: '#c28f34', fontSize: 25, textAlign: 'center'}}>
                  *
                </Text>
              </TouchableHighlight>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + 4})
                }
                style={styles.numberBtn}>
                <Text style={styles.numFontClr}>4</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + 5})
                }
                style={styles.numberBtn}>
                <Text style={styles.numFontClr}>5</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + 6})
                }
                style={styles.numberBtn}>
                <Text style={styles.numFontClr}>6</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.scibtn}
                onPress={() => this.sumBtn()}>
                <Text
                  style={{color: '#c28f34', fontSize: 25, textAlign: 'center'}}>
                  +
                </Text>
              </TouchableHighlight>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + 1})
                }
                style={styles.numberBtn}>
                <Text style={styles.numFontClr}>1</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + 2})
                }
                style={styles.numberBtn}>
                <Text style={styles.numFontClr}>2</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + 3})
                }
                style={styles.numberBtn}>
                <Text style={styles.numFontClr}>3</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + '-'})
                }
                style={styles.scibtn}>
                <Text
                  style={{color: '#c28f34', fontSize: 25, textAlign: 'center'}}>
                  -
                </Text>
              </TouchableHighlight>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + 0})
                }
                style={styles.numberBtn}>
                <Text style={styles.numFontClr}>0</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + '.'})
                }
                style={styles.numberBtn}>
                <Text style={styles.numFontClr}>.</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() =>
                  this.setState({btnValue: this.state.btnValue + '...'})
                }
                style={styles.numberBtn}>
                <Text style={styles.numFontClr}>...</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => this.calculateResult()}
                style={styles.scibtn}>
                <Text
                  style={{color: '#c28f34', fontSize: 25, textAlign: 'center'}}>
                  =
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

console.log(btnValue);

const styles = StyleSheet.create({
  scibtn: {
    height: 75,
    width: 75,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#feefbf',
  },

  numberBtn: {
    height: 75,
    width: 75,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#efefef',
  },
  numFontClr: {color: 'black', fontSize: 25, textAlign: 'center'},
});
