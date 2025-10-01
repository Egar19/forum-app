import { describe, it, expect, vi, beforeEach } from 'vitest';
import api from '../../utils/api';
import {
  registerUserActionCreator,
  asyncRegisterUser,
} from './action';

/**
 * test scenario for asyncRegisterUser thunk
 *
 * - asyncRegisterUser thunk
 * - should dispatch REGISTER_USER action and return true when register success
 * - should not dispatch REGISTER_USER action and return false when register failed
 */
describe('asyncRegisterUser thunk (Vitest)', () => {
  beforeEach(() => {
    // reset mock API sebelum tiap test
    api.registerUser = vi.fn();
  });

  it('should dispatch REGISTER_USER action and return true when register success', async () => {
    // Arrange
    const fakeUser = {
      id: 'user-1',
      name: 'Budi',
      email: 'budi@example.com',
    };
    api.registerUser.mockResolvedValue(fakeUser);

    const fakeDispatch = vi.fn();

    // Act
    const result = await asyncRegisterUser({
      name: fakeUser.name,
      email: fakeUser.email,
      password: 'secret',
    })(fakeDispatch);

    // Assert
    expect(fakeDispatch).toHaveBeenCalledWith(registerUserActionCreator(fakeUser));
    expect(result).toBe(true);
    expect(api.registerUser).toHaveBeenCalledWith({
      name: fakeUser.name,
      email: fakeUser.email,
      password: 'secret',
    });
  });

  it('should not dispatch REGISTER_USER action and return false when register failed', async () => {
    // Arrange
    api.registerUser.mockRejectedValue(new Error('Network Error'));
    const fakeDispatch = vi.fn();

    // Act
    const result = await asyncRegisterUser({
      name: 'Ani',
      email: 'ani@example.com',
      password: 'secret',
    })(fakeDispatch);

    // Assert
    expect(fakeDispatch).not.toHaveBeenCalled();
    expect(result).toBe(false);
    expect(api.registerUser).toHaveBeenCalledTimes(1);
  });
});
