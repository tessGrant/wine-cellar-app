import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
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
import { FilterWine, MemoizedFilterWine } from 'src/sections/filter';
import { useGetWines } from 'src/utils/hooks/useQueryHooks';
import { NoWineFoundComponent } from 'src/sections/no_wine_found';

const WineCollectionPage: NextPage = () => {
  const [filterKey, setFilterKey] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filters, setFilters] = useState({ filterKey: "", filterValue: ""});
  const [isFiltering, setIsFiltering] = useState(false);
  const {data, isError, isLoading}  = useGetWines(isFiltering, filters);

  const [filteredWines, setFilteredWines] = useState(data);

  const dataKeys = [
    {
      keyName: "name",
      label: "Wine name"
    },
    {
      keyName: "year",
      label: "Wine year"
    },
    {
      keyName: "vineyard",
      label: "Wine vineyard"
    }
  ]

  const handleKeyChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilterKey(event.target.value as string);
  };

  const handleValueChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilterValue(event.target.value as string);
  };

  const submitFilter = () => {
    setIsFiltering(true);
    const obj = {
      filterKey: filterKey,
      filterValue: filterValue
    };
    setFilters(obj);
  };

  useEffect(() => {
    setFilteredWines(data);
  }, [data]);
  
  
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
          <FilterWine
            filterKey={filterKey}
            filterValue={filterValue}
            dataKeys={dataKeys}
            handleKeyChange={(e: any)=>handleKeyChange(e)}
            handleValueChange={(e: any) => handleValueChange(e)}
            onSubmitfunc={submitFilter}
          />
        </StyledActionPanel>
        <Grid>
         {filteredWines && (filteredWines?.length > 0) ?
          filteredWines?.map((wine: Wine) => <WineComponent key={wine.id} wine={wine} />) :
          <NoWineFoundComponent />}
        </Grid>
        <AddApdatewWineForm />
      <Footer></Footer>
    </Container>
  );
}

export default WineCollectionPage;

const StyledActionPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  height: 110px;
  padding: 1rem 0;
  width: 550px;
`;

const StyledButton = styled(Button)`
  font-size: 16px;
  width: 150px;
  border: 1px solid;
`;