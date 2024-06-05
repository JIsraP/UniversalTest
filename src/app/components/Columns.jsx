import React from 'react';
import { useDrop } from 'react-dnd';
import { Divider, Paper, Typography } from '@mui/material';
import { TaskCard } from './TaskCard';

export const Column = ({ title, tasks, column, moveTask, deleteTask }) => {
    const [, drop] = useDrop(() => ({
        accept: 'TASK',
        drop: (item) => moveTask(item.index, item.column, column),
    }), [column, moveTask]);

    return (
        <Paper ref={drop} sx={{
            padding: 2,
            height: 450,
            boxShadow: 4,
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                width: '6px',
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: 'App.grey',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: "secondary.main",
                borderRadius: '10px',
            },
        }}>
            <Typography variant="h7" gutterBottom sx={{
                color: 'primary.main', fontWeight: 'bold'
            }}>
                {title}
            </Typography>
            <Divider sx={{ marginTop: '2vh', color: 'primary.main', border: '1px solid' }} />
            {tasks.map((task, index) => (
                <TaskCard
                    key={index}
                    index={index}
                    task={task}
                    column={column}
                    moveTask={moveTask}
                    deleteTask={deleteTask}
                />
            ))}
        </Paper>
    );
};