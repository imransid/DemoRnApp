import * as React from 'react';
import {ScrollView, View, TextInput, StyleSheet} from 'react-native';
import {Modal, Portal, Text, Button, PaperProvider} from 'react-native-paper';
import {Grid, Row, Col} from 'react-native-easy-grid';
import MainHeader from '../../components/Header';
import TopPlaceCarousel from '../../components/Carousel/TopPlacesCarousel';
import {useSelector, useDispatch} from 'react-redux';
import DropDown from '../../components/DropDown';
import {Alert} from 'react-native';
import {addBookMark} from '../../redux-store/actions/BookMark';

const Home = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const [title, onChangeTitle] = React.useState('');
  const [url, onChangeUrl] = React.useState('');
  const [value, setValue] = React.useState(null);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const categoryList = useSelector(e => e.bookmark.categoryList);
  const bookMarkList = useSelector(e => e.bookmark.bookmarkList);

  // Function to check valid URL format
  const isValidUrl = url => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  const clearAllData = () => {
    onChangeTitle('');
    onChangeUrl('');
    setValue(null);
  };

  // Function to check category already exists
  const isCategoryExists = categoryName => {
    console.log('categoryName', categoryName, 'bookMarkList', bookMarkList);

    return bookMarkList.some(
      category =>
        category.categoryName.toLowerCase() === categoryName.toLowerCase(),
    );
  };

  const onSubmit = React.useCallback(() => {
    // check blank or null
    if (title === '' || url === '' || value === null) {
      Alert.alert('Error', 'Please fill in all required fields.', [
        {text: 'OK', onPress: () => {}},
      ]);
      return; // Stop further processing
    }

    // Check valid URL format
    if (!isValidUrl(url)) {
      Alert.alert('Error', 'Please enter a valid URL.', [
        {text: 'OK', onPress: () => {}},
      ]);
      return; // Stop further processing
    }

    // Check if the category already exists
    if (isCategoryExists(value)) {
      Alert.alert('Error', 'Category already exists.', [
        {text: 'OK', onPress: () => {}},
      ]);
      return; // Stop further processing
    }

    if (title.length > 30) {
      // Check 30 characters
      Alert.alert('Error', 'MAX 30 Characters. Allow!', [
        {text: 'OK', onPress: () => {}},
      ]);
      return; // Stop further processing
    }

    let data = {
      title: title,
      categoryName: value,
      urlLink: url,
    };
    dispatch(addBookMark(data));
    hideModal();
    clearAllData();
  }, [title, url, value, dispatch]);

  return (
    <>
      <PaperProvider>
        <MainHeader title={'Bookmark manager'} />
        <View style={{marginBottom: 20}}></View>
        <Grid>
          {bookMarkList.length > 0 ? (
            <Row>
              <ScrollView>
                <TopPlaceCarousel />
              </ScrollView>
            </Row>
          ) : (
            <View style={styles.noDataFound}>
              <Text variant="titleLarge">{'No Bookmarks Found'}</Text>
            </View>
          )}

          <Row>
            <View style={{height: 50, width: '100%'}}>
              <Button icon="plus" mode="contained" onPress={() => showModal()}>
                Add Bookmark
              </Button>
            </View>
          </Row>
        </Grid>

        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text style={{color: '#000'}} variant="bodyLarge">
              Add Bookmark
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeTitle}
              value={title}
              required
              placeholder="Enter Title"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeUrl}
              value={url}
              placeholder="Enter Url"
              required
            />
            <DropDown list={categoryList} value={value} setValue={setValue} />

            <View style={styles.buttonRow}>
              <View style={{width: '50%', paddingHorizontal: 10, height: 60}}>
                <Button mode="contained" onPress={hideModal}>
                  Cancel
                </Button>
              </View>
              <View
                style={{
                  width: '50%',
                  paddingHorizontal: 10,
                }}>
                <Button mode="contained" onPress={onSubmit}>
                  Save
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>
      </PaperProvider>
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
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    marginTop: 20,
  },
  noDataFound: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
});

export default Home;
