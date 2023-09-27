/**
 * Method for LocalStorage
 * setData allways return Array object
 *
 * @function
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (name: string) => {
  console.log('📤 Getting data in storage', name);
  try {
    const value = await AsyncStorage.getItem(name)
    return value !== null ?
      JSON.parse(value) : null
  } catch (e) {
    console.log('📤 getData', e)
  }
  return null
}

const setData = async (name: string, data: any) => {
  try {
    const currentState = await getData(name);
    let temp: any[] = [];
    if (currentState) {
      temp = [...currentState, data]
    } else {
      temp = [data]
    }
    await AsyncStorage.setItem(name, JSON.stringify(temp));
    console.log('📦 Data saved in storage', name)
    return true;
  } catch (e) {
    console.log('📥 setData', e)
    return false
  }
}

const deleteData = async (name: string) => {
  await AsyncStorage.removeItem(name)
}

export { deleteData, getData, setData };

