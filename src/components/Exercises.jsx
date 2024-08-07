import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addExercise, removeExercise } from '../features/ExerciseSlice';
import { Container } from 'react-bootstrap';

const Exercises = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises.exerciseList);
  const totalExercises = useSelector((state) => state.exercises.totalExercises);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseId, setExerciseId] = useState('');

  const handleAddExercise = () => {
    if (exerciseName && exerciseId) {
      dispatch(addExercise({ id: exerciseId, name: exerciseName }));
      setExerciseName('');
      setExerciseId('');
    }
  };

  const handleRemoveExercise = (id) => {
    dispatch(removeExercise({ id }));
  };

  return (
    <Container className='exercises mt-5'>
      <h1>Exercises</h1>
      <p>Total Exercises: {totalExercises}</p>
      <input 
        type="text" 
        value={exerciseId} 
        onChange={(e) => setExerciseId(e.target.value)} 
        placeholder="Enter exercise ID" 
      />
      <input 
        type="text" 
        value={exerciseName} 
        onChange={(e) => setExerciseName(e.target.value)} 
        placeholder="Enter exercise name" variant="success"
      />
      <button onClick={handleAddExercise}>Add Exercise</button>
      <ul className='exercise-list'>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name}
            <button variant="danger" onClick={() => handleRemoveExercise(exercise.id)}>Remove Exercise</button>
          </li>
        ))}
      </ul>
    </Container>

  );
};

export default Exercises;