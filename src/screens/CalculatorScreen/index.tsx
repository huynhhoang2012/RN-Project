import {WHITE} from '@assets/colors';
import Block from '@components/Block';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import React, {useMemo, useState} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import {formatNumber} from '@utils/func';

type ButtonCalculatorProps = {
  title: string;
  value: string;
  type: string;
};

type StateProps = {
  numberOne: string;
  numberTwo: string;
  operators: string;
};

const listButtonCalculator: ButtonCalculatorProps[] = [
  {title: 'C', value: 'clear', type: 'function_keys'},
  {title: '+/-', value: '', type: 'function_keys'},
  {title: '%', value: 'percent', type: 'function_keys'},
  {title: '÷', value: 'divide', type: 'calculation'},
  {title: '7', value: '7', type: ''},
  {title: '8', value: '8', type: ''},
  {title: '9', value: '9', type: ''},
  {title: 'x', value: 'times', type: 'calculation'},
  {title: '4', value: '4', type: ''},
  {title: '5', value: '5', type: ''},
  {title: '6', value: '6', type: ''},
  {title: '-', value: 'subtract', type: 'calculation'},
  {title: '1', value: '1', type: ''},
  {title: '2', value: '2', type: ''},
  {title: '3', value: '3', type: ''},
  {title: '+', value: 'plus', type: 'calculation'},
  {title: '0', value: '0', type: ''},
  {title: ',', value: '', type: ''},
  {title: '=', value: 'equals', type: 'equals'},
];

const coverOperators = (type: string) => {
  let res = '';
  switch (type) {
    case 'plus':
      res = '+';
      break;
    case 'subtract':
      res = '-';
      break;
    case 'times':
      res = 'x';
      break;
    case 'divide':
      res = '/';
      break;
  }
  return res;
};

const CalculatorScreen = () => {
  const [result, setResult] = useState<number>(0);

  const [state, setState] = useState<StateProps>({
    numberOne: '',
    numberTwo: '',
    operators: '',
  });

  const calculation = useMemo(() => {
    let res = 0;
    switch (state.operators) {
      case 'plus':
        res = parseInt(state.numberOne, 10) + parseInt(state.numberTwo, 10);
        break;
      case 'subtract':
        res = parseInt(state.numberOne, 10) - parseInt(state.numberTwo, 10);
        break;
      case 'times':
        res = parseInt(state.numberOne, 10) * parseInt(state.numberTwo, 10);
        break;
      case 'divide':
        res = parseInt(state.numberOne, 10) / parseInt(state.numberTwo, 10);
        break;
    }
    return res;
  }, [state]);

  const backgroundButton = (type: string) => {
    let color = '#2B2B2B';
    switch (type) {
      case 'function_keys':
        color = '#A7A5A5';
        break;
      case 'calculation':
        color = '#FF8800';
        break;
      default:
        color = '#2B2B2B';
        break;
    }
    return color;
  };

  const _renderButtonCalculator = ({
    item,
    index,
  }: {
    item: ButtonCalculatorProps;
    index: number;
  }) => {
    return (
      <Button
        key={index}
        style={[
          styles.buttonItem,
          {
            width: item.value === '0' ? 180 : 85,
            backgroundColor: backgroundButton(item.type),
          },
        ]}
        middle
        center
        onPress={() => {
          if (item.type === 'function_keys') {
            if (item.value === 'clear') {
              setState({numberOne: '', numberTwo: '', operators: ''});
              setResult(0);
            }
          } else if (item.type === 'calculation') {
            setState({...state, operators: item.value});
          } else {
            if (state.operators.length > 0) {
              if (item.type === 'equals') {
                setResult(calculation);
              } else {
                setState({...state, numberTwo: state.numberTwo + item.value});
              }
            } else {
              if (item.type === 'equals') {
              } else {
              }
              setState({...state, numberOne: state.numberOne + item.value});
            }
          }
        }}>
        <CustomText color={WHITE} size={24} semiBold>
          {item.title}
        </CustomText>
      </Button>
    );
  };

  console.log(state);
  return (
    <Block flex style={styles.container}>
      <Block flex={1} style={styles.viewResult}>
        {state.numberOne.length > 0 && (
          <CustomText size={32} color={WHITE} extraBold>
            {formatNumber(Number(state.numberOne))}
          </CustomText>
        )}
        {state.operators.length > 0 && (
          <CustomText size={32} color={WHITE} extraBold>
            {coverOperators(state.operators)}
          </CustomText>
        )}
        {state.numberTwo.length > 0 && (
          <CustomText size={32} color={WHITE} extraBold>
            {formatNumber(Number(state.numberTwo))}
          </CustomText>
        )}
        <CustomText size={42} color={WHITE} extraBold>
          {formatNumber(result)}
        </CustomText>
      </Block>
      <Block flex={2} pt={20}>
        <FlatList
          scrollEnabled={false}
          columnWrapperStyle={styles.styleColumnWrapper}
          contentContainerStyle={styles.contentFlatList}
          numColumns={4}
          data={listButtonCalculator}
          renderItem={_renderButtonCalculator}
          keyExtractor={(item: ButtonCalculatorProps) => item.title}
        />
      </Block>
    </Block>
  );
};

export default CalculatorScreen;
