import { logout } from '../../api';

jest.spyOn(window, 'fetch');

it('should return photos', async () => {
  (window.fetch as jest.Mock).mockResolvedValue({
    status: 200,
    json: () => ({ message: 'Logout Successful' }),
  });

  const returnedData = await logout();

  expect(await returnedData.json()).toHaveProperty('message');
});
