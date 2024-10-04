import React, {useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const DropdownPicker = props => {
  const {
    options,
    placeholder,
    selectedOption,
    pickerCss,
    textStylecss,
    onChange,
  } = props;
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  return (
    <Menu
      visible={visible}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      anchor={
        <TouchableOpacity
          accessibilityLabel="showDropDown"
          onPress={showMenu}
          style={[pickerCss]}>
          <Text
            numberOfLines={1}
            style={[{textTransform: 'capitalize'}, textStylecss]}>
            {selectedOption || placeholder}
          </Text>
          <MaterialCommunityIcon
            style={{marginLeft: 'auto'}}
            accessibilityLabel="arrowDownOnQuantity"
            name="menu-down"
            size={24}
            color={'#3c3c3c'}
          />
        </TouchableOpacity>
      }
      onRequestClose={hideMenu}>
      <ScrollView
        style={{maxHeight: Dimensions.get('window').height * 0.5}}
        showsVerticalScrollIndicator={true}>
        {options.map((item, itemIndex) => (
          <MenuItem
            key={itemIndex}
            onPress={() => {
              onChange(item.value);
              hideMenu();
            }}>
            {item.label?.[0]?.toUpperCase() + item?.label?.slice(1)}
          </MenuItem>
        ))}
      </ScrollView>
    </Menu>
  );
};

export default DropdownPicker;
