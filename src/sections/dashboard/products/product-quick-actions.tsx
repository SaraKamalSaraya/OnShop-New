import type { FC } from 'react';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon';
import EyeIcon from '@heroicons/react/24/outline/EyeIcon';
import type { SelectChangeEvent } from '@mui/material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  MenuItem,
  Select,
  Stack,
  SvgIcon
} from '@mui/material';
import { ActionList } from '../../../components/action-list';
import { ActionListItem } from '../../../components/action-list-item';
import { ConfirmationDialog } from '../../../components/confirmation-dialog';
import { useDialog } from '../../../hooks/use-dialog';
import type { Product } from '../../../types/product';

interface StatusOption {
  color: string;
  label: string;
  value: string;
}

const statusOptions: StatusOption[] = [
  {
    color: 'info.main',
    label: 'Draft',
    value: 'draft'
  },
  {
    color: 'success.main',
    label: 'Published',
    value: 'published'
  }
];

interface ProductQuickActionsProps {
  product: Product;
}

export const ProductQuickActions: FC<ProductQuickActionsProps> = (props) => {
  const { product, ...other } = props;
  const duplicateDialog = useDialog();
  const [status, setStatus] = useState<string>(product.status);

  const handleStatusChange = useCallback(
    (event: SelectChangeEvent): void => {
      setStatus(event.target.value);
    },
    []
  );

  const handleSave = useCallback(
    (): void => {
      toast.success('Changes saved');
    },
    []
  );

  const handlePreview = useCallback(
    (): void => {
      toast.error('This action is not available on demo');
    },
    []
  );

  const handleDuplicate = useCallback(
    (): void => {
      duplicateDialog.handleClose();
      toast.error('This action is not available on demo');
    },
    [duplicateDialog]
  );

  return (
    <>
      <Card {...other}>
        <CardHeader title="Quick Actions" />
        <Divider />
        <CardContent>
          <Stack spacing={2}>
            <Select
              fullWidth
              inputProps={{
                sx: {
                  alignItems: 'center',
                  display: 'flex'
                }
              }}
              onChange={handleStatusChange}
              value={status}
            >
              {statusOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                  value={option.value}
                >
                  <Box
                    sx={{
                      backgroundColor: option.color,
                      borderRadius: '50%',
                      height: 8,
                      width: 8,
                      mr: 1
                    }}
                  />
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <div>
              <Button
                onClick={handleSave}
                variant="contained"
              >
                Save Changes
              </Button>
            </div>
          </Stack>
        </CardContent>
        <Divider />
        <ActionList>
          <ActionListItem
            icon={(
              <SvgIcon fontSize="small">
                <EyeIcon />
              </SvgIcon>
            )}
            label="Preview"
            onClick={handlePreview}
          />
          <ActionListItem
            icon={(
              <SvgIcon fontSize="small">
                <DocumentDuplicateIcon />
              </SvgIcon>
            )}
            label="Duplicate"
            onClick={duplicateDialog.handleOpen}
          />
        </ActionList>
      </Card>
      <ConfirmationDialog
        message="Are you sure you want to duplicate this product? This can't be undone."
        onCancel={duplicateDialog.handleClose}
        onConfirm={handleDuplicate}
        open={duplicateDialog.open}
        title="Duplicate Product"
        variant="warning"
      />
    </>
  );
};

ProductQuickActions.propTypes = {
  // @ts-ignore
  product: PropTypes.object
};
