import { describe, it, expect } from 'vitest';
import leaderboardReducer from './reducer';
import { receiveLeaderboardActionCreator } from './action';

/**
* test scenario for leaderboardReducer
*
* - leaderboardReducer function
*  - should return the initial state when given by unknown action
*  - should return the leaderboard when given by RECEIVE_LEADERBOARD action
*
*/
describe('leaderboardReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Act
    const nextState = leaderboardReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboard when given by RECEIVE_LEADERBOARD action', () => {
    // Arrange
    const initialState = [];
    const fakeLeaderboard = [
      { user: { id: 'user-1', name: 'Budi' }, score: 100 },
      { user: { id: 'user-2', name: 'Ani' }, score: 80 },
    ];
    const action = receiveLeaderboardActionCreator(fakeLeaderboard);

    // Act
    const nextState = leaderboardReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(fakeLeaderboard);
  });
});
