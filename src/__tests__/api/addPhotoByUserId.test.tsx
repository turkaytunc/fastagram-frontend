import { addPhotoByUserId } from 'src/api';

jest.spyOn(window, 'fetch');
const fetchMock = window.fetch as jest.Mock;
const data = 'hello this fdkajfkda;fjdjaf';

it('should return photos', async () => {
  fetchMock.mockResolvedValue({
    status: 200,
    json: () => ({ photos: [] }),
  });

  const returnedData = await addPhotoByUserId(data);

  expect(returnedData).toHaveProperty('status');
  expect(returnedData.status).toBe(200);
});
