import type { NextPage } from 'next'
import { useMutation, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { deleteWineMutation, getWineDetails } from 'src/utils/api/fetchServices';
import {Button} from 'src/components/button';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Image from 'next/image';
import bottleImg from 'src/assets/bottle.png';
import { Container } from 'src/components/container';
import styled from 'styled-components';
import { SizedBox } from 'src/components/sizedbox';
import { Card } from 'src/components/card';
import { Footer } from 'src/components/footer';
import { ChangeDetailRow } from 'src/sections/changeDetailRow';

const deleteIcon = <DeleteIcon fontSize="small" color="inherit" />;
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
            <ChangeDetailRow 
                propName='name'
                data={data.name} 
                id={data.id}  />
            <SizedBox height={40} />
            <ChangeDetailRow 
                propName='vineyard'
                id={data.id}
                data={data.vineyard} 
                  />
            <SizedBox height={40} />
            <ChangeDetailRow 
                propName='year'
                id={data.id}
                data={data.year} 
                 />
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

