import * as React from 'react';
import {Searchbar} from 'react-native-paper';
import {Dimensions, Text, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader';
import {Grid, Row, Col} from 'react-native-easy-grid';
import CarouselBanner from '../../components/Carousel';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const {data, loading, error} = useFetch('https://fakestoreapi.com/products');

  const onChangeSearch = query => setSearchQuery(query);

  const width = Dimensions.get('window').width;

  return (
    <>
      <Grid>
        <Row>
          <CarouselBanner />
        </Row>
        {loading && <Loader />}
      </Grid>
    </>
  );
};

export default MyComponent;
