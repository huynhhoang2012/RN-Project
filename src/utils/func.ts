import {Platform} from 'react-native';

export function sum(a: number, b: number) {
  return a + b;
}

export function checkPlatform(platform: string) {
  return Platform.OS === platform;
}
