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
  const {
    modalVisible,
    close,
    state,
    states,
    setState,
    comment,
    setComment,
    submit,
    title,
    label,
  } = props;
  return (
    <div>
      <Dialog
        id={label}
        open={modalVisible}
        onClose={close}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent classes={{padding: 10}}>
          <FormControl style={{paddingLeft: 10, paddingRight: 10}}>
            <InputLabel id={'public-state-label'}>{label}</InputLabel>
            <Select
              autoFocus
              value={state}
              labelId={'public-state-label'}
              id="public-state"
              onChange={(e) => setState(e.target.value)}
              style={{width: 400}}>
              {states &&
                states.map((publicState) => (
                  <MenuItem key={publicState.key} value={publicState.key}>
                    {publicState.value}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <TextField
              multiline
              style={{margin: 10, width: 400, height: 130}}
              rows={4}
              variant="outlined"
              value={comment}
              onChange={(e) => {
                if (e.target.value.length > 150) {
                  e.preventDefault();
                  return;
                }
                setComment(e.target.value);
              }}
              placeholder={'Comentario interno. Máximo 150 caracteres'}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={submit} color="primary">
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
