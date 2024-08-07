import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exerciseList: [],
  totalExercises: 0,
};

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    addExercise: (state, action) => {
      const fitness = action.payload;
      const foundItem = state.exerciseList.find(exercise => exercise.id === fitness.id);
      if (!foundItem) {
        state.exerciseList.push(fitness);
        state.totalExercises += 1;
      } else {
        alert('Exercise Already Added');
      }
    },
    removeExercise: (state, action) => {
      const fitness = action.payload;
      const foundItem = state.exerciseList.find(exercise => exercise.id === fitness.id);
      if (foundItem) {
        state.exerciseList = state.exerciseList.filter(exercise => exercise.id !== fitness.id);
        state.totalExercises -= 1;
      } else {
        alert('Exercise Not Found');
      }
    },
  },
});

export const { addExercise, removeExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
