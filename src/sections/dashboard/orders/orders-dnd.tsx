import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import type { DraggableLocation, DropResult } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { Box } from '@mui/material';
import { ResourceError } from '../../../components/resource-error';
import { ResourceLoading } from '../../../components/resource-loading';
import { ResourceUnavailable } from '../../../components/resource-unavailable';
import type { Order, OrderStatus } from '../../../types/order';
import { OrdersDndDroppable } from './orders-dnd-droppable';

const statusMap: Record<OrderStatus, { color: string; label: string; }> = {
  complete: {
    color: 'success.main',
    label: 'Complete'
  },
  created: {
    color: 'neutral.500',
    label: 'Created'
  },
  delivered: {
    color: 'warning.main',
    label: 'Delivered'
  },
  placed: {
    color: 'info.main',
    label: 'Placed'
  },
  processed: {
    color: 'error.main',
    label: 'Processed'
  }
};

interface Column {
  id: string;
  color: string;
  items: Order[];
  label: string;
}

const createColumns = (orders: Order[]): Column[] => {
  const columns: Column[] = [];

  // Here we order and limit the columns to a specific list.
  // You can add/remove to match your any available status.

  const statuses: OrderStatus[] = ['placed', 'processed', 'delivered', 'complete'];

  statuses.forEach((status) => {
    columns.push({
      id: status,
      color: statusMap[status].color,
      items: orders.filter((order) => order.status === status),
      label: statusMap[status].label
    });
  });

  return columns;
};

const reorder = (
  columns: Column[],
  srcLocation: DraggableLocation,
  destLocation: DraggableLocation,
  draggableId: string
): Column[] => {
  return columns.map((column) => {
    if (column.id === srcLocation.droppableId) {
      // The draggable ID does not correspond
      if (column.items[srcLocation.index]?.id !== draggableId) {
        return column;
      }

      // Clone the items
      const updatedItems: Order[] = [...column.items];

      // Remove the item
      const [removedItem] = updatedItems.splice(srcLocation.index, 1);

      // Add the item to the new position
      updatedItems.splice(destLocation.index, 0, removedItem);

      return {
        ...column,
        items: updatedItems
      };
    }

    return column;
  });
};

const move = (
  columns: Column[],
  srcLocation: DraggableLocation,
  destLocation: DraggableLocation,
  draggableId: string
): Column[] => {
  const srcColumnIdx = columns.findIndex((column) => column.id === srcLocation.droppableId);
  const destColumnIdx = columns.findIndex((column) => column.id === destLocation.droppableId);

  // Unable to find the source or destination columns
  if (srcColumnIdx < 0 || destColumnIdx < 0) {
    return columns;
  }

  const srcColumn = columns[srcColumnIdx];
  const destColumn = columns[destColumnIdx];

  // The draggable ID does not correspond
  if (srcColumn.items[srcLocation.index]?.id !== draggableId) {
    return columns;
  }

  // Clone the items of source and destination columns

  const updatedSrcItems = [...srcColumn.items];
  const updatedDestItems = [...destColumn.items];

  // Remove the item
  const [removedItem] = updatedSrcItems.splice(srcLocation.index, 1);

  // Add the item to the new position
  updatedDestItems.splice(destLocation.index, 0, removedItem);

  // Clone the columns and update their items

  const updatedColumns: Column[] = [...columns];

  updatedColumns[srcColumnIdx] = {
    ...srcColumn,
    items: updatedSrcItems
  };

  updatedColumns[destColumnIdx] = {
    ...destColumn,
    items: updatedDestItems
  };

  return updatedColumns;
};

type ResourcesState = 'loading' | 'error' | 'unavailable' | 'available';

const getResourcesState = (params: { isLoading: boolean; error?: string; items: Order[] }): ResourcesState => {
  if (params.isLoading) {
    return 'loading';
  }

  if (params.error) {
    return 'error';
  }

  return params.items.length > 0 ? 'available' : 'unavailable';
};

interface OrdersDndProps {
  error?: string;
  isLoading?: boolean;
  items?: Order[];
}

export const OrdersDnd: FC<OrdersDndProps> = (props) => {
  const { error, isLoading = false, items = [] } = props;
  const [columns, setColumns] = useState<Column[]>([]);

  const handleDragEnd = useCallback(
    async ({ source, destination, draggableId }: DropResult): Promise<void> => {

      // Dropped outside the column
      if (!destination) {
        return;
      }

      // Nothing has not been moved
      if (source.droppableId === destination.droppableId && source.index === destination.index) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        // Moved to the same column on different position
        setColumns((prevState) => {
          return reorder(
            prevState,
            source,
            destination,
            draggableId
          );
        });
      } else {
        setColumns((prevState) => {
          return move(
            prevState,
            source,
            destination,
            draggableId
          );
        });
      }
    },
    []
  );

  useEffect(
    () => {
      setColumns(createColumns(items));
    },
    [items]
  );

  const resourcesState = getResourcesState({
    isLoading,
    error,
    items
  });

  switch (resourcesState) {
    case 'loading':
      return (
        <ResourceLoading
          message="Loading resources"
          sx={{
            mb: 2,
            mx: 2
          }}
        />
      );

    case 'error':
      return (
        <ResourceError
          message="Something went wrong"
          sx={{
            mb: 2,
            mx: 2
          }}
        />
      );

    case 'unavailable':
      return (
        <ResourceUnavailable
          message="Resources are not available"
          sx={{
            mb: 2,
            mx: 2
          }}
        />
      );

    case 'available':
      return (
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.mode === 'dark'
              ? 'neutral.900'
              : 'neutral.50',
            display: 'flex',
            flexGrow: 1,
            mb: 2,
            mx: 2,
            overflow: 'auto'
          }}
        >
          <DragDropContext onDragEnd={handleDragEnd}>
            {columns.map((column) => (
              <OrdersDndDroppable
                color={column.color}
                id={column.id}
                key={column.id}
                orders={column.items}
                title={column.label}
              />
            ))}
          </DragDropContext>
        </Box>
      );

    default:
      return null;
  }
};

OrdersDnd.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  items: PropTypes.array
};
