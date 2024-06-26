import type { FC } from 'react';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { Button, Card, CardContent, Typography, Unstable_Grid2 as Grid } from '@mui/material';

export const Account2FA: FC = () => {
  const handleActivate = useCallback(
    (): void => {
      toast.success('Two-factor authentication activated');
    },
    []
  );

  return (
    <Card>
      <CardContent>
        <Grid
          container
          spacing={4}
        >
          <Grid
            xs={12}
            md={5}
          >
            <Typography variant="h6">
              Two-factor authentication (2FA)
            </Typography>
            <Typography
              color="text.secondary"
              variant="body2"
            >
              Enhanced security for your mention account
            </Typography>
          </Grid>
          <Grid
            xs={12}
            md={7}
          >
            <Button
              onClick={handleActivate}
              size="large"
              variant="contained"
            >
              Activate
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
