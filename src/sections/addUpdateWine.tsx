import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    Formik,
    Form,
    Field, FormikHelpers
  } from 'formik';
import { Wine } from 'src/utils/types';
import { useMutation, useQueryClient } from 'react-query';
import { addNewWineMutation, updateWineMutation } from 'src/utils/api/fetchServices';
import { useFormik } from 'formik';

import TextField from '@material-ui/core/TextField';
import { SizedBox } from 'src/components/sizedbox';

export default function AddApdatewWineForm() {
  const [open, setOpen] = useState(false);
  const randomId = Math.floor((Math.random() * 1000) + 1);
  const addNewWineObj: Wine = {
    id: `vin${randomId}`,
    name: "",
    vineyard: "",
    year: 0,
    rating: 0,
    notes: ""
  };

  const initialValues: Wine = addNewWineObj;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const addNewWineHandler = useMutation((newWine: Wine) => addNewWineMutation(newWine), {
    onSuccess: () => {
      queryClient.invalidateQueries(["wines"]);
    }
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values: Wine) => {
      setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
          addNewWineHandler.mutate(values);
      }, 500);
      handleClose();
    },
  });

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Bottle
      </Button>
      <Dialog maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new Wine here:</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <SizedBox height={20} />
              <TextField
                fullWidth
                id="year"
                name="year"
                label="Year"
                type="number"
                value={formik.values.year}
                onChange={formik.handleChange}
              />
              <SizedBox height={20} />
              <TextField
                fullWidth
                id="vineyard"
                name="vineyard"
                label="Vineyard"
                type="text"
                value={formik.values.vineyard}
                onChange={formik.handleChange}
              />
              <SizedBox height={20} />
              <TextField
                fullWidth
                id="notes"
                name="notes"
                label="Notes"
                type="text"
                value={formik.values.notes}
                onChange={formik.handleChange}
              />
              <SizedBox height={20} />
              <Button color="primary" variant="contained" type="submit">Add new Bottle</Button>
              <SizedBox height={20} />
            </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
