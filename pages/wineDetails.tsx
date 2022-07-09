import type { NextPage } from 'next'
import styles from 'src/styles/Home.module.css'
import { useMutation, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { deleteWineMutation, getWineDetails, updateWineMutation } from 'src/utils/api/fetchServices';
import Button from 'src/components/button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Image from 'next/image';
import bottleImg from 'src/assets/bottle.png';
import { Container } from 'src/components/container';

const deleteIcon = <DeleteIcon fontSize="large" color="action" />;
const editIcon = <EditIcon fontSize="large" color="action" />;

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
       <Container>
        <Image src={bottleImg} width={150} height={250} />
           <div>{data.name}</div>
           <Button iconbtn={deleteIcon} onClick={() => deleteWineFunc(data.id)} />
           <Button iconbtn={editIcon} onClick={() => updateWineHandler.mutate(data.id)} />
       </Container>
        }
    </>);
};

export default WineDetailsPage;