import { describe, it, expect } from 'vitest';
import usersReducer from './reducer';
import {
  registerUserActionCreator,
  getAllUserActionCreator,
} from './action';

/**
 * test scenario for usersReducer
 *
 * - usersReducer function
 *  - should return the initial state when given by unknown action
 *  - should return users when given by GET_ALL_USER action
 *  - should return users with the new user when given by REGISTER_USER action
 *
 */
describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Act
    const nextState = usersReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return users when given by GET_ALL_USER action', () => {
    // Arrange
    const initialState = [];
    const fakeUsers = [
      { id: 'user-1', name: 'Budi', email: 'budi@example.com' },
      { id: 'user-2', name: 'Ani', email: 'ani@example.com' },
    ];
    const action = getAllUserActionCreator(fakeUsers);

    // Act
    const nextState = usersReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(fakeUsers);
  });

  it('should return users with the new user when given by REGISTER_USER action', () => {
    // Arrange
    const initialState = [
      { id: 'user-2', name: 'Ani', email: 'ani@example.com' },
    ];
    const newUser = { id: 'user-1', name: 'Budi', email: 'budi@example.com' };
    const action = registerUserActionCreator(newUser);

    // Act
    const nextState = usersReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([newUser, ...initialState]);
  });
});
