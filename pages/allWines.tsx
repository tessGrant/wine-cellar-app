import {useEffect, useState} from 'React';
import type { NextPage } from 'next'
import styles from 'src/styles/Home.module.css'
import { useQuery } from 'react-query';
import {getAllWines} from 'src/service/getResponces'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import  WineComponent  from 'src/components/wineItem';

export interface Wine {
  id: string;
  name: string;
  vineyard: string;
  year: number;
  rating: number;
  notes: string;
}

const WineCollectionPage: NextPage = () => {
  const {data, isError, isLoading}  = useQuery(["wines"], getAllWines);
  const router = useRouter();
  const goToWineDetails = (id: string) => {
    router.push({
      pathname: `/wineDetails`,
      query:  {id: id}
    })
  }
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
          {data && data.map((wine: Wine) => <WineComponent key={wine.id} wine={wine} onClick={() => goToWineDetails(wine.id)} />)}
        </main>
  
        <footer className={styles.footer}>
            Powered by Tess
        </footer>
      </div>
    );
}

export default WineCollectionPage;