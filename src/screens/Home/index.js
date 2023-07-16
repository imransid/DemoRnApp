import * as React from 'react';
import {ScrollView} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import MainHeader from '../../components/Header';
import ScreenHeader from '../../components/Header/ScreenHeader';
import TopPlaceCarousel from '../../components/Carousel/TopPlacesCarousel';
const Home = () => {
  return (
    <>
      <MainHeader title={'Bookmark manager'} />
      <Grid>
        <Row>
          <ScrollView>
            <TopPlaceCarousel />
          </ScrollView>
        </Row>
      </Grid>
    </>
  );
};

export default Home;
