import { login } from '../../api';

jest.spyOn(window, 'fetch');
const email = 'hasan@hasan.com';
const password = 'fjdak432fdnsn';

it('should return photos', async () => {
  (window.fetch as jest.Mock).mockResolvedValue({
    status: 200,
    json: () => ({ photos: [] }),
  });

  const returnedData = await login(email, password);

  expect(returnedData).toHaveProperty('status');
});
