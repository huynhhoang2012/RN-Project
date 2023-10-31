import React, {useState} from 'react';
import {Image as ImageBase, ActivityIndicator} from 'react-native';
import Block from '../Block';
import {BLACK} from '@assets/colors';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import {avatar} from '@assets/images';

interface Props {
  source?: any;
  style?: any;
  checkEmpty?: any;
  pure?: boolean;
  emptyImage?: string;
}

const CustomImage: React.FC<Props> = props => {
  const {source, style, checkEmpty, pure, emptyImage} = props;
  const [loading, setLoading] = useState<boolean | string>('nothing');

  if (pure) {
    return <ImageBase {...props} source={source} />;
  }

  return (
    <Block row center middle style={style}>
      {checkEmpty && checkEmpty !== '' ? (
        <>
          <FastImage
            style={[{backgroundColor: '#f4f4f4'}, style]}
            source={source}
            onLoadEnd={() => setLoading(false)}
            onLoadStart={() => setLoading(true)}
            onError={() => setLoading(false)}
          />

          {loading && (
            <Block style={[style, styles.loading]} middle center>
              <ActivityIndicator size="small" color={BLACK} />
            </Block>
          )}
        </>
      ) : (
        <ImageBase
          style={{width: 30, height: 30}}
          source={emptyImage || avatar}
        />
      )}
    </Block>
  );
};

export default CustomImage;
