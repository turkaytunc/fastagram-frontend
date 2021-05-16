import { signup } from '../../api';

jest.spyOn(window, 'fetch');
const username = 'Hasan';
const email = 'hasan@hasan.com';
const password = 'fjdak432fdnsn';

it('should return photos', async () => {
  (window.fetch as jest.Mock).mockResolvedValue({
    status: 200,
    json: () => ({ email: 'hasan@hasan.com', userId: '4327ffsd-fdsf7fds-fs7df7-sdkjf4' }),
  });

  const returnedData = await signup(username, email, password);

  expect(await returnedData.json()).toHaveProperty('userId');
});
