import { fetchProfileById } from '../../api';

jest.spyOn(window, 'fetch');
const data = '2437fds-lfdsjfa-fldsa2fds-lk423jjf-';

it('should return profile', async () => {
  (window.fetch as jest.Mock).mockResolvedValue({
    status: 200,
    json: () => ({ photos: [] }),
  });

  const returnedData = await fetchProfileById(data);

  expect(returnedData).toHaveProperty('status');
});
