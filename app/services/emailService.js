import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint
  });
  return {
    sendTestEmail: () => client.request({
      method: 'GET',
      url: '/testemail'
    })
  };
};

