import { Router } from 'express';
import { version } from '../../package.json';
import murals, {
    featuredMurals,
    nearByMurals,
    recentlyUploadedMurals } from './murals';

/* eslint-disable no-unused-vars */
export default ({ config, db }) => {
/* eslint-enable no-unused-vars */

  const api = Router();

  // murals api
  api.use('/murals/featured-murals', featuredMurals);
  api.use('/murals/near-by-murals', nearByMurals);
  api.use('/murals/recently-uploaded-murals', recentlyUploadedMurals);
  api.use('/murals', murals());

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
};
