import React from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { globalStyles, customPickerStyles } from '../../style/Global';

const SelectInput = (props)=>{

    return (
        <View style={globalStyles.searchContainer}>
          <RNPickerSelect
            style={customPickerStyles}
            placeholder={{label: 'Choose an option', value: 'top_rated'}}
            onValueChange={props.onValueChange}
            items={props.items}
          />
        </View>
    )
}
export default SelectInput;
