import type { FC } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import type { ListItemProps } from '@mui/material';
import { Avatar, ListItem, Stack, Typography } from '@mui/material';

interface CustomerLogProps extends ListItemProps {
  createdAt: number;
  id: string;
  message: string;
  subjectAvatar?: string;
  subjectId: string;
  subjectName?: string;
  type: string;
}

export const CustomerLog: FC<CustomerLogProps> = (props) => {
  const {
    createdAt,
    message,
    subjectAvatar,
    subjectId,
    subjectName,
    type,
    ...other
  } = props;

  const ago = formatDistanceToNowStrict(createdAt);

  return (
    <ListItem
      sx={{
        px: 3,
        py: 2.5
      }}
      {...other}
    >
      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
      >
        <Avatar src={subjectAvatar} />
        <div>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            <Typography
              component="span"
              variant="subtitle2"
            >
              {subjectName}
            </Typography>
            {' '}
            {message}
          </Typography>
          <Typography
            color="text.secondary"
            variant="caption"
            sx={{ fontWeight: 400 }}
          >
            {ago} ago
          </Typography>
        </div>
      </Stack>
    </ListItem>
  );
};

CustomerLog.propTypes = {
  createdAt: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  subjectAvatar: PropTypes.string,
  subjectId: PropTypes.string.isRequired,
  subjectName: PropTypes.string,
  type: PropTypes.string.isRequired
};
