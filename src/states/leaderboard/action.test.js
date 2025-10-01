import { describe, it, expect, vi, beforeEach } from 'vitest';
import api from '../../utils/api';
import {
  receiveLeaderboardActionCreator,
  asyncPopulateLeaderboard,
} from './action';

/**test scenario for asyncPopulateLeaderboard thunk

  * - asyncPopulateLeaderboard thunk
  * - should dispatch RECEIVE_LEADERBOARD action when data fetching success
  * - should not dispatch RECEIVE_LEADERBOARD action when data fetching failed
*/

vi.mock('nprogress', () => ({
  default: {
    start: vi.fn(),
    done: vi.fn(),
  },
}));

describe('asyncPopulateLeaderboard thunk', () => {
  beforeEach(() => {
    api.getLeaderboards = vi.fn();
  });

  it('should dispatch RECEIVE_LEADERBOARD action when data fetching success', async () => {
    // Arrange
    const fakeLeaderboard = [
      { user: { id: 'user-1', name: 'Budi' }, score: 100 },
      { user: { id: 'user-2', name: 'Ani' }, score: 80 },
    ];
    api.getLeaderboards.mockResolvedValue(fakeLeaderboard);
    const fakeDispatch = vi.fn();

    // Act
    await asyncPopulateLeaderboard()(fakeDispatch);

    // Assert
    expect(fakeDispatch).toHaveBeenCalledWith(
      receiveLeaderboardActionCreator(fakeLeaderboard),
    );
  });

  it('should not dispatch RECEIVE_LEADERBOARD action when data fetching failed', async () => {
    // Arrange
    api.getLeaderboards.mockRejectedValue(new Error('Network Error'));
    const fakeDispatch = vi.fn();

    // Act
    await asyncPopulateLeaderboard()(fakeDispatch);

    // Assert
    expect(fakeDispatch).not.toHaveBeenCalled();
  });
});
