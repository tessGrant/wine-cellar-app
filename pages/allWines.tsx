import type { NextPage } from 'next'
import styles from 'src/styles/Home.module.css'
import { useMutation, useQuery } from 'react-query';
import {addNewWineMutation, getAllWines} from 'src/service/api/fetchServices'
import  WineComponent  from 'src/sections/wineItem';
import Button from 'src/components/button';
import { Wine } from 'src/service/types';

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
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Wine Cellar App
          </h1>
          <p className={styles.description}>
           Your home cellar with wine
          </p>
        {isLoading && <div>Loading ....</div>}
        {isError && <div>Sorry, try again later</div>}
        {data && data.map((wine: Wine) => <WineComponent key={wine.id} wine={wine} />)}
        <Button onClick={()=>addNewWineHandler.mutate()}>Add new wine</Button>
        </main>
  
        <footer className={styles.footer}>
            Powered by Tess
        </footer>
      </div>
    );
}

export default WineCollectionPage;