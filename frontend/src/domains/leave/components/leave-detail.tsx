import * as React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

type LeaveDetailType = {
  name: string;
  totalDaysUsed: number;
  icon?: string;
};

export const LeaveDetail: React.FC<LeaveDetailType> = ({ name, totalDaysUsed }) => {
  return (
    <Grid>
      <Card sx={{ textAlign: 'center' }}>
        <CardContent>
          <Typography variant='h6' component='div' gutterBottom>
            {name}
          </Typography>
          <Typography component='p' gutterBottom fontSize='14px'>
            {totalDaysUsed} Days taken
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
