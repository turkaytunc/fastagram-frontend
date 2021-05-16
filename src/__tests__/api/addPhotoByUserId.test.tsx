import { addPhotoByUserId } from '../../api';

jest.spyOn(window, 'fetch');
const data = 'hello this fdkajfkda;fjdjaf';

it('should return photos', async () => {
  (window.fetch as jest.Mock).mockResolvedValue({
    status: 200,
    json: () => ({ photos: [] }),
  });

  const returnedData = await addPhotoByUserId(data);

  expect(returnedData).toHaveProperty('status');
});
