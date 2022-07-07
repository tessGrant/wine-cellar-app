import type { NextPage } from 'next'
import { useMutation, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { deleteWineMutation, getWineDetails, updateWineMutation } from 'src/service/api/fetchServices';
import Button from 'src/components/button';

const WineDetailsPage: NextPage = () => {
    const router = useRouter()
    const winId = router.query;
    const { data, isError, isLoading } = useQuery(["wine", winId.id], () => getWineDetails(winId.id));
    const deleteHandler = useMutation((id: any) => deleteWineMutation(id));
    const deleteWineFunc = (id: any) => {
        deleteHandler.mutate(id);
        router.push({pathname: "/"});
    }
    const updateWineHandler = useMutation((id: any) => updateWineMutation(id));
    return (
    <>
        {isLoading && <div>Details Loading ....</div>}
        {isError && <div>Sorry, try again later</div>}
       {data && 
       <div>
           <div>{data.name}</div>
           <Button onClick={() => deleteWineFunc(data.id)}>Delete wine</Button>
           <Button onClick={() => updateWineHandler.mutate(data.id)}>Edit name</Button>
       </div>
        }
    </>);
};

export default WineDetailsPage;