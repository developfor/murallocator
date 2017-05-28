import { Router } from 'express';
import { version } from '../../package.json';
import facets from './facets';
import murals from './murals';

export default ({ config, db }) => {
  const api = Router();

  // mount the facets resource
  api.use('/facets', facets({ config, db }));
  api.use('/murals', murals({ config, db }));

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
};
