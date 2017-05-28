import { Router } from 'express';
import { version } from '../../package.json';
import facets from './facets';

export default ({ config, db }) => {
  const api = Router();

  // mount the facets resource
  api.use('/facets', facets({ config, db }));
  api.use('/murals/featured-murals', murals({ config, db }).featuredMurals());

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  // the map and the nearby mural can use the same route
  api.get('murals/near-by-murals', (req, res) => {
    res.json(mural.);
  });

  api.get('/recently_uploaded-murals', (req, res) => {
    res.json({ "Recently Murals" : "murals near" });
  });

  api.get('/mural/:muralId', (req, res) => {
    res.json({ "muralID" : "MuralName" });
  });


  // Submit mural
  api.post('/upload-mural', (req, res) => {
    res.json({ "upload-mural" : "posting mural" });
  });

  api.get('/upload-mural', (req, res) => {
    res.json({ "upload-mural" : "mural either upload sucessfully or not." });
  });



  // Admin Routes
  api.post('/admin/login', (req, res) => {
    res.json({ "login" : "data" });
  });

  api.get('/admin/login', (req, res) => {
    res.json({ "login" : "data" });
  });

  api.get('/admin/featured', (req, res) => {
    res.json({ "muralID" : "MuralName" });
  });

  api.post('/admin/featured', (req, res) => {
    res.json({ "login" : "data" });
  });

  api.get('/admin/approved', (req, res) => {
    res.json({ "murals" : "MuralName" });
  });

  api.post('/admin/approved', (req, res) => {
    res.json({ "murals" : "MuralName" });
  });

  api.get('/admin/unapproved', (req, res) => {
    res.json({ "murals" : "MuralName" });
  });

  api.post('/admin/unapproved', (req, res) => {
    res.json({ "murals" : "MuralName" });
  });
 

  return api;
};
