import type { FC } from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@heroicons/react/24/outline/CheckIcon';
import {
  Box,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  SvgIcon,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

const WizardStepConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.vertical}`]: {
    marginLeft: 16
  },
  [`& .${stepConnectorClasses.lineVertical}`]: {
    borderColor: theme.palette.mode === 'dark'
      ? theme.palette.neutral[800]
      : theme.palette.neutral[200],
    borderLeftWidth: 2
  },
  [`& .${stepConnectorClasses.lineHorizontal}`]: {
    borderColor: theme.palette.mode === 'dark'
      ? theme.palette.neutral[800]
      : theme.palette.neutral[200],
    borderTopWidth: 2
  }
}));

const WizardStepIcon: FC<{ active?: boolean; completed?: boolean; }> = (props) => {
  const { active, completed } = props;

  if (active) {
    return (
      <Box
        sx={{
          alignItems: 'center',
          borderColor: 'primary.main',
          borderRadius: '50%',
          borderStyle: 'solid',
          borderWidth: 2,
          color: 'primary.main',
          display: 'flex',
          height: 36,
          justifyContent: 'center',
          width: 36
        }}
      >
        <Box
          sx={{
            backgroundColor: 'primary.main',
            borderRadius: '50%',
            height: 12,
            width: 12
          }}
        />
      </Box>
    );
  }

  if (completed) {
    return (
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'primary.main',
          borderRadius: '50%',
          color: 'primary.contrastText',
          display: 'flex',
          height: 36,
          justifyContent: 'center',
          width: 36
        }}
      >
        <SvgIcon fontSize="small">
          <CheckIcon />
        </SvgIcon>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        borderColor: (theme) => theme.palette.mode === 'dark'
          ? 'neutral.700'
          : 'neutral.300',
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 2,
        height: 36,
        width: 36
      }}
    />
  );
};

type Orientation = 'horizontal' | 'vertical';

interface Step {
  description: string;
  title: string;
}

interface WizardStepsProps {
  activeStep?: number;
  orientation?: 'horizontal' | 'vertical';
  steps?: Step[];
}

export const WizardSteps: FC<WizardStepsProps> = (props) => {
  const { activeStep = 1, orientation = 'vertical', steps = [] } = props;

  return (
    <div>
      <Stepper
        orientation={orientation}
        activeStep={activeStep}
        connector={<WizardStepConnector />}
      >
        {steps.map((step) => (
          <Step key={step.title}>
            <StepLabel StepIconComponent={WizardStepIcon}>
              <Typography variant="subtitle2">
                {step.title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {step.description}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

WizardSteps.propTypes = {
  activeStep: PropTypes.number,
  orientation: PropTypes.oneOf<Orientation>(['vertical', 'horizontal']),
  steps: PropTypes.array
};
