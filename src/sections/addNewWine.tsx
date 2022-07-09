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
import { useMutation } from 'react-query';
import { addNewWineMutation } from 'src/utils/api/fetchServices';


export default function AddNewWineForm() {
  const [open, setOpen] = useState(false);

  const randomId = Math.floor((Math.random() * 1000) + 1);

  const initialValues: Wine = {
    id: `vin${randomId}`,
    name: "",
    vineyard: "",
    year: 0,
    rating: 4.5,
    notes: ""
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addNewWineHandler = useMutation((newWine: Wine) => addNewWineMutation(newWine));

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Bottle
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let's update your cellar. Add new bottle!
          </DialogContentText>
          <Formik
                initialValues={initialValues}
                onSubmit={(
                    values: Wine,
                    { setSubmitting }: FormikHelpers<Wine>
                  ) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        addNewWineHandler.mutate(values);
                        setSubmitting(false);
                    }, 500);
                    handleClose();
                  }}
            >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field id="name" name="name" placeholder="Wine Name" />

                    <label htmlFor="vineyard">Wine yard</label>
                    <Field id="vineyard" name="vineyard" placeholder="Wine Yard" />

                    <label htmlFor="year">Year</label>
                    <Field
                        id="year"
                        name="year"
                        placeholder="Year"
                        type="number"
                    />
                    <label htmlFor="rating">Rating</label>
                    <Field
                        id="rating"
                        name="rating"
                        placeholder="Rating"
                        type="number"
                    />
                    <label htmlFor="notes">Notes</label>
                    <Field id="notes" name="notes" placeholder="Add notes" />
                    <button type="submit">Add New Bottel</button>
                </Form>
            </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
