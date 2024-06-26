import type { FC, ReactNode } from 'react';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  Typography
} from '@mui/material';
import ViewConfigIcon from '@mui/icons-material/ViewComfy';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import type { CalendarView } from '../../../types/calendar';

interface ViewOption {
  icon: ReactNode;
  label: string;
  value: CalendarView;
}

const viewOptions: ViewOption[] = [
  {
    icon: (
      <SvgIcon fontSize="small">
        <ViewConfigIcon />
      </SvgIcon>
    ),
    label: 'Month',
    value: 'dayGridMonth'
  },
  {
    icon: (
      <SvgIcon fontSize="small">
        <ViewWeekIcon />
      </SvgIcon>
    ),
    label: 'Week',
    value: 'timeGridWeek'
  },
  {
    icon: (
      <SvgIcon fontSize="small">
        <ViewDayIcon />
      </SvgIcon>
    ),
    label: 'Day',
    value: 'timeGridDay'
  },
  {
    icon: (
      <SvgIcon fontSize="small">
        <ViewAgendaIcon />
      </SvgIcon>
    ),
    label: 'Agenda',
    value: 'listWeek'
  }
];

interface CalendarToolbarProps {
  children?: ReactNode;
  date: Date;
  onAddClick?: () => void;
  onDateNext?: () => void;
  onDatePrev?: () => void;
  onDateToday?: () => void;
  onViewChange?: (view: CalendarView) => void;
  view: CalendarView;
}

export const CalendarToolbar: FC<CalendarToolbarProps> = (props) => {
  const {
    date,
    onDateNext,
    onDatePrev,
    onDateToday,
    onViewChange,
    view,
    ...other
  } = props;

  const handleViewChange = useCallback(
    (view: CalendarView): void => {
      onViewChange?.(view);
    },
    [onViewChange]
  );

  const today = format(date, 'MMMM y');

  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      spacing={3}
      {...other}
    >
      <ButtonGroup size="small">
        <Button onClick={onDatePrev}>
          Prev
        </Button>
        <Button onClick={onDateToday}>
          Today
        </Button>
        <Button onClick={onDateNext}>
          Next
        </Button>
      </ButtonGroup>
      <Typography variant="h3">
        {today}
      </Typography>
      <div>
        {viewOptions.map((option) => {
          const isCurrent = option.value === view;

          return (
            <Tooltip
              key={option.value}
              title={option.label}
            >
              <IconButton
                color={isCurrent ? 'primary' : 'inherit'}
                onClick={() => handleViewChange(option.value)}
              >
                {option.icon}
              </IconButton>
            </Tooltip>
          );
        })}
      </div>
    </Stack>
  );
};

CalendarToolbar.propTypes = {
  children: PropTypes.node,
  date: PropTypes.instanceOf(Date).isRequired,
  onAddClick: PropTypes.func,
  onDateNext: PropTypes.func,
  onDatePrev: PropTypes.func,
  onDateToday: PropTypes.func,
  onViewChange: PropTypes.func,
  view: PropTypes.oneOf<CalendarView>([
    'dayGridMonth',
    'timeGridWeek',
    'timeGridDay',
    'listWeek'
  ]).isRequired
};
