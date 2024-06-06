import React from 'react';
import { useDrag } from 'react-dnd';
import { Paper, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const TaskCard = ({ task, index, column, moveTask, deleteTask }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { index, column },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [index, column]);

  return (
    <Paper
      ref={drag}
      sx={{
        padding: 2,
        marginTop: 2,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        boxShadow: 4
      }}
    >
      <Typography variant="body1" gutterBottom>
        {task.text}
      </Typography>
      <IconButton onClick={() => deleteTask(index, column)} size="small">
        <DeleteIcon sx={{ color: 'App.red' }} />
      </IconButton>
    </Paper>
  );
};