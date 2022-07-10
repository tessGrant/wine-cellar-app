import type { NextPage } from 'next'
import { useMutation, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { deleteWineMutation, getWineDetails, updateWineMutation } from 'src/utils/api/fetchServices';
import Button from 'src/components/button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Image from 'next/image';
import bottleImg from 'src/assets/bottle.png';
import { Container } from 'src/components/container';
import styled from 'styled-components';
import { SizedBox } from 'src/components/sizedbox';
import { UpdateWine } from 'src/utils/types';
import { Card } from 'src/components/card';
import { Footer } from 'src/components/footer';

const deleteIcon = <DeleteIcon fontSize="small" color="inherit" />;
const editIcon = <EditIcon fontSize="small" color="inherit" />;
const backIcon = <ArrowBackIosIcon fontSize='small' color="inherit" />

const WineDetailsPage: NextPage = () => {
    const router = useRouter()
    const winId = router.query;
    const { data, isError, isLoading } = useQuery(["wine", winId.id], () => getWineDetails(winId.id));
    const deleteHandler = useMutation((id: any) => deleteWineMutation(id));
    const deleteWineFunc = (id: any) => {
        deleteHandler.mutate(id);
        router.push({pathname: "/"});
    }
    const updatePropHandler = useMutation((obj: UpdateWine) => updateWineMutation(obj));
    const goBack = () => router.push({pathname: '/'})
    return (
    <>
        {isLoading && <div>Details Loading ....</div>}
        {isError && <div>Sorry, try again later</div>}
       {data && 
       <Container>
        <StyledHeader>
        <Button iconbtn={backIcon} onClick={() => goBack()}>Back</Button>
        <Button iconbtn={deleteIcon} onClick={() => deleteWineFunc(data.id)}>Delete</Button>
        </StyledHeader>
        <StyledItem medium>
        <Image src={bottleImg} width={150} height={250} />
        <div>
            <StyledProps>
                name:  {data.name}
                {updatePropHandler.isLoading && <div>Name is updating...</div>}
                <Button iconbtn={editIcon} onClick={() => updatePropHandler.mutate({id: data.id, name: 'The Ghost of Kyiv'})}>Edit</Button>
            </StyledProps>
            <SizedBox height={40} />
            <StyledProps>
                vineyard:  {data.vineyard}
                {updatePropHandler.isLoading && <div>Vineyard is updating...</div>}
                <Button iconbtn={editIcon} onClick={() => updatePropHandler.mutate({id: data.id, vineyard: "Slava Ukraine!" })}>Edit</Button>
            </StyledProps>
            <SizedBox height={40} />
            <StyledProps>
                year:  {data.year}
                {updatePropHandler.isLoading && <div>Year is updating...</div>}
                <Button iconbtn={editIcon} onClick={() => updatePropHandler.mutate({id: data.id, year: 2022 })}>Edit</Button>
            </StyledProps>
        </div>
        </StyledItem>
        <Footer></Footer>
       </Container>
        }
    </>);
};

export default WineDetailsPage;

const StyledHeader = styled.div`
    width: 550px;
    height: 60px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StyledItem = styled(Card)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    :hover,
    :focus,
    :active {
        color: inherit;
        border-color: #eaeaea;
    }
`;

const StyledProps = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;
`;
