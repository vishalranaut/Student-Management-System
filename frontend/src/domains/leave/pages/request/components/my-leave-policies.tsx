import { Grid } from '@mui/material';
import { LeaveDetail } from '@/domains/leave/components';
import { useLeaveRequest } from '../context/leave-request-provider';

export const MyLeavePolicies = () => {
  const { isLoading, isError, errorMessage, myLeavePolicies } = useLeaveRequest();

  if (isLoading) {
    return <>loading...</>;
  }
  if (isError) {
    return <>{errorMessage}</>;
  }
  if (myLeavePolicies.length <= 0 && !isLoading) {
    return <>You are not assigned to any leave policies.</>;
  }

  return (
    <Grid container columnSpacing={2} rowSpacing={2}>
      {myLeavePolicies.map((leave) => (
        <Grid size={{ xs: 12, md: 4 }} key={leave.id}>
          <LeaveDetail key={leave.id} {...leave} />
        </Grid>
      ))}
    </Grid>
  );
};
