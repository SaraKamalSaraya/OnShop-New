import type { FC } from 'react';
import { Box } from '@mui/material';
import { ResourceUnavailable } from '../../../../components/resource-unavailable';

export const DataState2: FC = () => (
  <Box sx={{ p: 3 }}>
    <ResourceUnavailable
      message="There are not objects here yet."
      onCreate={() => {}}
    />
  </Box>
);
