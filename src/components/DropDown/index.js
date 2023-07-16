import * as React from 'react';
import {ScrollView, View, TextInput, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Index = props => {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState(props.list);

  return (
    <>
      <DropDownPicker
        open={open}
        value={props.value}
        items={items}
        setOpen={setOpen}
        setValue={props.setValue}
        setItems={setItems}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default Index;
