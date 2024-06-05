import React, { useState } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import { Column } from './Columns';

export const ToDo = () => {
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState({
        todo: [],
        inProgress: [],
        done: [],
    });

    const handleAddTask = () => {
        if (taskText.trim() !== '') {
            setTasks((prevTasks) => ({
                ...prevTasks,
                todo: [...prevTasks.todo, { text: taskText }],
            }));
            setTaskText('');
        }
    };

    const moveTask = (taskIndex, fromColumn, toColumn) => {
        setTasks((prevTasks) => {
            const taskToMove = prevTasks[fromColumn][taskIndex];
            return {
                ...prevTasks,
                [fromColumn]: prevTasks[fromColumn].filter((_, index) => index !== taskIndex),
                [toColumn]: [...prevTasks[toColumn], taskToMove],
            };
        });
    };

    const deleteTask = (taskIndex, column) => {
        setTasks((prevTasks) => ({
            ...prevTasks,
            [column]: prevTasks[column].filter((_, index) => index !== taskIndex),
        }));
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} alignItems='center'>
                <Grid item xs={10}>
                    <TextField
                        fullWidth
                        label="New Task"
                        variant="outlined"
                        value={taskText}
                        onChange={(e) => setTaskText(e.target.value)}
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleAddTask}
                        sx={{ textTransform: 'capitalize' }}
                    >
                        Add
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Column
                        title="To-Do"
                        tasks={tasks.todo}
                        column="todo"
                        moveTask={moveTask}
                        deleteTask={deleteTask}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Column
                        title="In Progress"
                        tasks={tasks.inProgress}
                        column="inProgress"
                        moveTask={moveTask}
                        deleteTask={deleteTask}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Column
                        title="Done"
                        tasks={tasks.done}
                        column="done"
                        moveTask={moveTask}
                        deleteTask={deleteTask}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};