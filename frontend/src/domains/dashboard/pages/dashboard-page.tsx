import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import { getErrorMsg } from '@/utils/helpers/get-error-message';
import { useGetDashboardDataQuery } from '../api/dashboard-api';
import { Celebrations, GridCard, LeavePolicyDetail, Notices, WhoIsOut } from '../components';
import { getUserRole } from '@/domains/auth/slice';
import { DashboardProps } from '../types';

export const DashboardPage = () => {
  const currentUserRole = useSelector(getUserRole);
  const { data, isLoading, isError, error } = useGetDashboardDataQuery();

  if (isLoading) {
    return <>loading...</>;
  }
  if (isError) {
    return <>{getErrorMsg(error).message}</>;
  }
  if (!data) {
    return <>No data available</>;
  }

  const { students, teachers, parents, notices, leavePolicies, celebrations, oneMonthLeave } =
    data as DashboardProps;
  return (
    <Grid container spacing={4}>
      {currentUserRole === 'admin' && (
        <>
          <Grid size={{ xs: 12, md: 4 }}>
            <GridCard {...students} heading='Total Students' />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <GridCard {...teachers} heading='Total Teachers' />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <GridCard {...parents} heading='Total Parents' />
          </Grid>
        </>
      )}

      <Grid container size={{ xs: 12 }} spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <LeavePolicyDetail leavePolicies={leavePolicies} />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Notices notices={notices} />
        </Grid>
      </Grid>

      <Grid container size={{ xs: 12 }} spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Celebrations celebrations={celebrations} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <WhoIsOut whoIsOut={oneMonthLeave} />
        </Grid>
      </Grid>
    </Grid>
  );
};
