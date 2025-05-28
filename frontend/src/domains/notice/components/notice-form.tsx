import React from 'react';
import { TextField,  Button,Grid, SelectChangeEvent } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import { NoticeFormProps } from '../types';
interface Props {
  methods: UseFormReturn<NoticeFormProps>;
  isSaving: boolean;
  onSubmit: () => void;
  handleRoleChange: (event: SelectChangeEvent<string | number>) => void;
  handleRecipientChange: (event: SelectChangeEvent<string | number>) => void;
  selectedRoleId: number;
}

export const NoticeForm: React.FC<Props> = ({
  methods,
  isSaving,
  onSubmit,
  handleRoleChange,
  handleRecipientChange,
  selectedRoleId
}) => {
  const {
    register,
    formState: { errors }
  } = methods;

  return (
   <form onSubmit={onSubmit} noValidate>
  <Grid container spacing={2}>
    <Grid size={12}>
      <TextField
        fullWidth
        label="Title"
        {...register('title')}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
    </Grid>
    <Grid size={12}>
      <TextField
        fullWidth
        label="Description"
        multiline
        minRows={3}
        {...register('description')}
        error={!!errors.description}
        helperText={errors.description?.message}
      />
    </Grid>
    <Grid size={12}>
      <TextField
        fullWidth
        label="Status"
        type="number"
        {...register('status')}
        error={!!errors.status}
        helperText={errors.status?.message}
      />
    </Grid>
    
    <Grid size={12}>
      <Button type="submit" variant="contained" color="primary" disabled={isSaving}>
        {isSaving ? 'Saving...' : 'Save'}
      </Button>
    </Grid>
  </Grid>
</form>
  );
};
