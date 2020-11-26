import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

export const ChangeStateModal = (props) => {
  const {modalVisible, close} = props;
  return (
    <div>
      <Dialog
        open={modalVisible}
        onClose={close}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Cambiar Estado</DialogTitle>
        <DialogContent classes={{padding: 10}}>
          <FormControl style={{paddingLeft: 10, paddingRight: 10}}>
            <InputLabel id={'private-state-label'}>Estado privado</InputLabel>
            <Select
              autoFocus
              value={'xs'}
              labelId={'private-state-label'}
              id="private-state">
              <MenuItem value="xs">Inspección</MenuItem>
              <MenuItem value="sm">sm</MenuItem>
              <MenuItem value="md">md</MenuItem>
              <MenuItem value="lg">lg</MenuItem>
              <MenuItem value="xl">xl</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{paddingLeft: 10, paddingRight: 10}}>
            <InputLabel id={'public-state-label'}>Estado público</InputLabel>
            <Select
              autoFocus
              value={'xs'}
              labelId={'public-state-label'}
              id="public-state">
              <MenuItem value="xs">Ingresado</MenuItem>
              <MenuItem value="sm">sm</MenuItem>
              <MenuItem value="md">md</MenuItem>
              <MenuItem value="lg">lg</MenuItem>
              <MenuItem value="xl">xl</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <TextField
              multiline
              style={{margin: 10, width: 500, height: 150}}
              rows={4}
              variant="outlined"
              placeholder={'Comentario interno'}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Confirmar
          </Button>
          <Button onClick={close} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
