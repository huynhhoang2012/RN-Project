import Block from '@components/Block';
import CustomText from '@components/CustomText';
import Header from '@components/Header';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import CustomSearch from '@components/CustomSearch';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {Platform} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ItemProduct} from '../../types/product';
import Loading from '@components/Loading';
import CustomImage from '@components/CustomImage';

const HomeScreen = () => {
  const [input, setInput] = useState<string>();

  const [listProduct, setListProduct] = useState<ItemProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getListProduct();
  }, []);

  const getListProduct = async () => {
    setLoading(true);
    try {
      await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setListProduct(json.products));
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const _renderItemProduct = (item: ItemProduct) => {
    return (
      <Block style={styles.viewItemProduct}>
        <CustomImage
          source={{uri: item.thumbnail?.replace(/'/g, '')}}
          style={styles.imageItemProduct}
          checkEmpty={item.thumbnail}
        />
        <Block style={styles.viewRightItemProduct}>
          <CustomText size={16} bold weight="500">
            {item.title}
          </CustomText>
          <CustomText bold size={18}>
            ${item.price}
          </CustomText>
          <CustomText>{item.brand}</CustomText>
        </Block>
      </Block>
    );
  };

  return (
    <Block
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          paddingTop: useSafeAreaInsetsCustom().top,
        },
      ]}>
      {/* <Header title="Home" /> */}
      <CustomSearch
        value={input}
        onChange={(e: string) => setInput(e)}
        onSearchClear={() => setInput('')}
        placeholder="Search ..."
      />
      {loading ? (
        <Block center middle flex>
          <Loading />
        </Block>
      ) : (
        <Block flex pa={10}>
          <FlatList
            contentContainerStyle={{flexGrow: 1}}
            style={styles.list}
            data={listProduct}
            renderItem={({item}) => _renderItemProduct(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </Block>
      )}
    </Block>
  );
};

export default HomeScreen;
