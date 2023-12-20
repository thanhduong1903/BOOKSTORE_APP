import {SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import AppBarWrapper from '../constants/AppBarWrapper'
import { styles } from './category.styles'
import CategoryItem from '../components/category/CategoryItem'
import CategoryRaw from '../components/category/CategoryRaw'
import { ScrollView } from 'react-native-virtualized-view'
import { useFocusEffect } from '@react-navigation/native';
const Category = ({route}) => {
  const [selectedCategoryID, setSelectedCategoryID] = useState('0');

  useFocusEffect(
    React.useCallback(() => {
      const { categoryId } = route.params;
      setSelectedCategoryID(categoryId);
    }, [route.params])
  );

  const handleCategorySelect = (id) => {
    setSelectedCategoryID(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWrapper title="CATEGORY"></AppBarWrapper>
      <CategoryItem Id = {selectedCategoryID} onCategorySelect={handleCategorySelect}/>
      <ScrollView style={{height:'70%'}} >  
      {selectedCategoryID && <CategoryRaw categoryID={selectedCategoryID} />}
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default Category