import type { NextPage } from 'next'
import styles from 'src/styles/Home.module.css'
import { useMutation, useQuery } from 'react-query';
import {addNewWineMutation, getAllWines} from 'src/utils/api/fetchServices'
import  WineComponent  from 'src/sections/wineItem';
import Button from 'src/components/button';
import Text from 'src/components/text';
import { Wine } from 'src/utils/types';
import { Container } from 'src/components/container';
import { Footer } from 'src/components/footer';
import { Grid } from 'src/components/grid';

const WineCollectionPage: NextPage = () => {
  const {data, isError, isLoading}  = useQuery(["wines"], getAllWines);
  
  const newWine: Wine = {
    id: "vin109",
    name: "Tvishi",
    vineyard: "AW",
    year: 2018,
    rating: 4.5,
    notes: "My note 9"
  }
  const addNewWineHandler = useMutation(() => addNewWineMutation(newWine))
    return(
        <Container>
          <Text logotitle>Wine Cellar App</Text>
          <Text logosubtitle>Your home cellar with wine</Text>
          {isLoading && <div>Loading ....</div>}
          {isError && <div>Sorry, try again later</div>}
          <Grid>
            {data && data.map((wine: Wine) => <WineComponent key={wine.id} wine={wine} />)}
          </Grid>
          <Button centered onClick={()=>addNewWineHandler.mutate()}>Add new wine</Button>
          
          <Footer>
              Powered by Tess
          </Footer>
        </Container>
  
    );
}

export default WineCollectionPage;