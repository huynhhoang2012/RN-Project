import {useWindowDimensionsCustom} from '@hooks/useWindowDimensionsCustom';
import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import styles from './styles';
import Button from '@components/Button';

type Props = {
  onChange: (e: string) => void;
  value: string;
  onSearchClear: () => void;
  placeholderTextColor: string;
  placeholder?: string;
};

const SearchIcon = () => {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7431 12.5741L9.91009 8.73956C10.5972 7.80246 10.9652 6.66953 10.9601 5.50756C10.947 2.47441 8.49372 0.0175744 5.46059 5.57178e-05C4.00907 -0.00651157 2.61522 0.567712 1.58953 1.59481C0.563845 2.6219 -0.00846493 4.01655 9.46502e-05 5.46806C0.0132044 8.50148 2.4667 10.9585 5.50009 10.9761C6.6668 10.9811 7.80387 10.6088 8.74159 9.91456L8.74559 9.91156L12.5751 13.7431C12.7821 13.9603 13.0907 14.0482 13.3811 13.9728C13.6716 13.8973 13.8983 13.6704 13.9735 13.3799C14.0487 13.0894 13.9605 12.7809 13.7431 12.5741ZM5.49609 9.87806C3.06951 9.8641 1.10675 7.89866 1.09609 5.47206C1.08955 4.311 1.54743 3.19551 2.36783 2.37389C3.18822 1.55228 4.30303 1.09273 5.46409 1.09756C7.89068 1.11151 9.85344 3.07695 9.86409 5.50356C9.87064 6.66461 9.41276 7.78011 8.59236 8.60172C7.77197 9.42334 6.65716 9.88288 5.49609 9.87806Z"
        fill={'#8E8E93'}
      />
    </Svg>
  );
};

const CloseIcon = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 16C12.4182 16 16 12.4182 16 8C16 3.58179 12.4182 0 8 0C3.58179 0 0 3.58179 0 8C0 12.4182 3.58179 16 8 16ZM4.71484 5.7522C4.42847 5.46582 4.42847 5.00122 4.71484 4.71484C4.81201 4.61768 4.92993 4.55347 5.0542 4.52222C5.15039 4.49805 5.25049 4.49365 5.34814 4.50903C5.49609 4.53223 5.63818 4.60083 5.7522 4.71484L8 6.96265L10.2478 4.71484C10.5342 4.42847 10.9988 4.42847 11.2852 4.71484C11.5715 5.00122 11.5715 5.46582 11.2852 5.7522L9.03735 8L11.2852 10.2478C11.4307 10.3933 11.5022 10.5847 11.4998 10.7754C11.4976 10.9602 11.426 11.1443 11.2852 11.2852C10.9988 11.5715 10.5342 11.5715 10.2478 11.2852L8 9.03735L5.7522 11.2852C5.46582 11.5715 5.00122 11.5715 4.71484 11.2852C4.55981 11.1301 4.48877 10.9226 4.50171 10.7197C4.51245 10.5479 4.5835 10.3792 4.71484 10.2478L6.96265 8L4.71484 5.7522Z"
        fill="#C7C7CC"
      />
    </Svg>
  );
};

const CustomSearch = (props: Props) => {
  const {onChange, value, onSearchClear, placeholderTextColor, placeholder} =
    props;

  const [searchInputFocussed, setSearchInputFocussed] = useState(false);

  const textInputWidth = useRef(new Animated.Value(0)).current;
  const cancelTextOpacity = useRef(new Animated.Value(0)).current;

  let searchTextInput = React.createRef<TextInput>();

  const width = useWindowDimensionsCustom().width;

  const memoizedTextInputOnFocusWidth = useMemo(
    () => width - (50 + 32 + 32),
    [width],
  );

  const memoizedTextInputOnBlurWidth = useMemo(() => width - 32, [width]);

  const focusTextInput = useCallback(() => setSearchInputFocussed(true), []);

  const blurTextInput = useCallback(() => setSearchInputFocussed(false), []);

  const handleChange = useCallback(
    (e: string) => {
      onChange(e);
    },
    [onChange],
  );

  const handleClearSearch = useCallback(() => {
    onSearchClear();
  }, [onSearchClear]);

  const handlePressCancel = useCallback(() => {
    searchTextInput?.current?.blur();
    onSearchClear();
  }, [onSearchClear, searchTextInput]);

  useEffect(() => {
    if (searchInputFocussed) {
      Animated.spring(textInputWidth, {
        toValue: memoizedTextInputOnFocusWidth,
        mass: 1,
        stiffness: 120,
        damping: 20,
        useNativeDriver: false,
      }).start();
      Animated.timing(cancelTextOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.spring(textInputWidth, {
        toValue: memoizedTextInputOnBlurWidth,
        mass: 1,
        stiffness: 120,
        damping: 20,
        useNativeDriver: false,
      }).start();
      Animated.timing(cancelTextOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
    }
  }, [
    cancelTextOpacity,
    memoizedTextInputOnBlurWidth,
    memoizedTextInputOnFocusWidth,
    searchInputFocussed,
    textInputWidth,
  ]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.searchInputWrapper, {width: textInputWidth}]}>
        <SearchIcon />
        <Animated.View style={{width: textInputWidth}}>
          <TextInput
            autoCorrect={false}
            autoComplete="off"
            value={value}
            onChangeText={e => handleChange(e)}
            ref={searchTextInput}
            onFocus={focusTextInput}
            onBlur={blurTextInput}
            style={[styles.searchInputStyle]}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
          />
        </Animated.View>
        {searchInputFocussed && props?.value?.length > 0 && (
          <TouchableOpacity
            style={styles.closeIconWrapper}
            onPress={handleClearSearch}>
            <CloseIcon />
          </TouchableOpacity>
        )}
      </Animated.View>
      <Button middle center onPress={handlePressCancel}>
        <Animated.Text
          style={[
            styles.textCancel,
            {
              opacity: cancelTextOpacity,
            },
          ]}>
          Cancel
        </Animated.Text>
      </Button>
    </View>
  );
};

CustomSearch.propTypes = {
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSearchClear: PropTypes.func,
};

CustomSearch.defaultProps = {
  placeholder: 'Search',
  placeholderTextColor: null,
  onChange: () => {},
  value: '',
  onSearchClear: () => {},
};

export default CustomSearch;
