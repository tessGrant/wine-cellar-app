import type { NextPage } from 'next'
import { useQuery } from 'react-query';
import {getAllWines} from 'src/utils/api/fetchServices'
import  WineComponent  from 'src/sections/wineItem';
import Text from 'src/components/text';
import { Wine } from 'src/utils/types';
import { Container } from 'src/components/container';
import { Footer } from 'src/components/footer';
import { Grid } from 'src/components/grid';
import { SizedBox } from 'src/components/sizedbox';
import AddApdatewWineForm from 'src/sections/addUpdateWine';

const WineCollectionPage: NextPage = () => {
  const {data, isError, isLoading}  = useQuery(["wines"], getAllWines);
  
    return(
        <Container>
          <Text logotitle>Wine Cellar App</Text>
          <SizedBox height={30} />
          <Text logosubtitle>Your home cellar with wine</Text>
          <SizedBox height={20} />
          {isLoading && <div>Loading ....</div>}
          {isError && <div>Sorry, try again later</div>}
          <Grid>
            {data && data.map((wine: Wine) => <WineComponent key={wine.id} wine={wine} />)}
          </Grid>
          <AddApdatewWineForm />
          <Footer></Footer>
        </Container>
  
    );
}

export default WineCollectionPage;