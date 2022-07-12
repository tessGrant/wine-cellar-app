import styled from "styled-components";
import {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import { SizedBox } from "src/components/sizedbox";
import { UpdateWine } from 'src/utils/types';
import { updateWineMutation } from 'src/utils/api/fetchServices';
import { useMutation, useQueryClient } from 'react-query';

interface IProps {
    data: any;
    id: any;
    propName: string;
}

export const ChangeDetailRow = (props:IProps) => {
    const queryClient = useQueryClient();
    const [open, setOpen] = useState(false);
    const updatePropHandler = useMutation((obj: UpdateWine) => updateWineMutation(obj), {
        onSuccess: () => {
        queryClient.invalidateQueries(["wine", props.id]);
        }
    });
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };
    const formik = useFormik({
        initialValues: {[`${props.propName}`]: props.data},
        onSubmit: (values) => {
            let obj = {
                id: props.id,
                ...values
            };
            setTimeout(() => {
                updatePropHandler.mutate(obj);
                handleClose();
            }, 500);
        },
      });

    return (
        <StyledProps>
            {props.propName}:  {props.data}
            {updatePropHandler.isLoading && <div>Information is updating...</div>}
            <Button color="primary" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change property here: </DialogTitle>
                <DialogContent>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <TextField
                                fullWidth
                                id={props.propName}
                                name={props.propName}
                                label={props.propName}
                                value={formik.values[`${props.propName}`]}
                                onChange={formik.handleChange}
                                type={props.propName === "year" ? "number" : "string"}
                            />
                        </div>
                        <SizedBox height={20} />
                        <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </StyledProps>
    );
};

const StyledProps = styled.div`
width: 350px;
display: flex;
justify-content: space-between;
`;
