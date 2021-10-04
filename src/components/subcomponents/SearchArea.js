import React, { useState }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormControl, HStack, Icon, Input, Select } from 'native-base'
import { Ionicons } from '@expo/vector-icons'


const SearchArea = (props)=>{
    const [text, onChangeText] = useState("");
    const [select, onChangeSelect] = useState("");

    return (
        <View style={styles.searchAreaContainer}>
          <FormControl isRequired>
            <FormControl.Label fontSize='sm'>Search Movie/TV Show name</FormControl.Label>
            <HStack width='100%' space={2}>
              <Input
                placeholder='i.e. James Bond, CSI'
                variant='filled'
                bg='gray.100'
                px={3}
                fontSize={14}
                width='100%'
                InputLeftElement={
                  <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
                }
                onChangeText={value => {
                  onChangeText(value)
                }}
              />
            </HStack>
            <FormControl.Label fontSize='sm'>Choose search type</FormControl.Label>
            <HStack>
              <Select 
                flex={1}
                marginRight={3}
                fontSize={14}
                defaultValue='multi'
                onValueChange={value => onChangeSelect(value) }>
                    <Select.Item label='Movies' value='movie' />
                    <Select.Item label='TV Shows' value='tv' />
                    <Select.Item label='Multi' value='multi' />
              </Select>
              <Button onPress={()=> props.onSubmit(select, text) } fontSize={14} startIcon={<Icon as={Ionicons} name='ios-search' size={4} />}>
                  Search
              </Button>
            </HStack>
            <Text fontSize='sm'>Please select a search type</Text>
          </FormControl>
        </View>
    )
}
export default SearchArea;

const styles = StyleSheet.create({
    searchAreaContainer:{
      paddingVertical:10,
      width:'80%',
    },
  });
