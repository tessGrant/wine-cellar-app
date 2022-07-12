import { useEffect, useState } from 'react';
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
import { Button } from 'src/components/button';
import styled from 'styled-components';

const WineCollectionPage: NextPage = () => {
  const {data, isError, isLoading}  = useQuery(["wines"], getAllWines);

  const [filteredWines, setFilteredWines] = useState(data?.transactions);
  const [searchByName, setSearchByName] = useState("");
  const [searchByYear, setSearchByYear] = useState(0);

  const handleChangeByName = (event: any) => {
    setSearchByName(event.target.value);
  };

  const handleChangeByYear = (event: any) => {
    setSearchByYear(event.target.value);
  };

  useEffect(() => {
    if(
      isLoading === false && data 
      && searchByName.length <= 0 && searchByYear <= 0) {
        setFilteredWines(data);
    }
    if(searchByName.length > 0){
      const results = data?.filter((wine: Wine) => 
        wine.name.toLowerCase().includes(searchByName.toLowerCase()));
        setFilteredWines(results);
    }
    if(searchByYear > 0){
      const results = data.filter((wine: Wine) => 
      // @ts-ignore
      wine.year === searchByYear);
      console.log(results);
      setFilteredWines(results);
    }
  }, [isLoading, data, searchByName, searchByYear]);
  
  
  const sortByNameAsc = () => {
    const newFiltered = filteredWines?.slice().sort((a: any, b: any) => 
    a.name.localeCompare(b.name));
    setFilteredWines(newFiltered);
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <div>An error occured 😭</div>;
  }

  return(
    <Container>
      <Text logotitle>Wine Cellar App</Text>
      <SizedBox height={30} />
      <Text logosubtitle>Your home cellar with wine</Text>
      <SizedBox height={20} />
      <StyledActionPanel>
      <StyledButton primary onClick = {() => sortByNameAsc()}>Sort By Name</StyledButton>
      <div>
          <input
            type="text"
            placeholder="Search by Name"
            value={searchByName}
            onChange={handleChangeByName}
          />
          <input
            type="number"
            placeholder="Search by Year"
            value={searchByYear}
            onChange={handleChangeByYear}
          />
        </div>
      </StyledActionPanel>
      <Grid>
        {filteredWines && filteredWines.map((wine: Wine) => <WineComponent key={wine.id} wine={wine} />)}
      </Grid>
      <AddApdatewWineForm />
      <Footer></Footer>
    </Container>

  );
}

export default WineCollectionPage;

const StyledActionPanel = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  padding: 1rem 0;
  width: 550px;
`;

const StyledButton = styled(Button)`
  font-size: 16px;
  width: 150px;
  border: 1px solid;
`;