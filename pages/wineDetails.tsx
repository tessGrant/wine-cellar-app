import type { NextPage } from 'next'
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { getWineDetails } from 'src/service/getResponces';

const WineDetailsPage: NextPage = () => {
    const router = useRouter()
    const winId = router.query;
    const { data, isError, isLoading } = useQuery(["wine", winId.id], () => getWineDetails(winId.id));
    return (
    <>
        {isLoading && <div>Details Loading ....</div>}
        {isError && <div>Sorry, try again later</div>}
        <div>{data && data.name}</div>
    </>);
};

export default WineDetailsPage;