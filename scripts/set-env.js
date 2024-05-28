const fs = require('fs');
const path = require('path');

const envFilePath = path.join(__dirname, '../src/environments/environment.prod.ts');
const templateFilePath = path.join(__dirname, '../src/environments/environment.prod.template.ts');

fs.readFile(templateFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading template file:', err);
    process.exit(1);
  }

  const result = data
    .replace('PROJECT_ID_PLACEHOLDER', process.env.PROJECTID)
    .replace('DATASET_PLACEHOLDER', process.env.DATASET)
    .replace('API_VERSION_PLACEHOLDER', process.env.APIVERSION);

  fs.writeFile(envFilePath, result, 'utf8', (err) => {
    if (err) {
      console.error('Error writing environment file:', err);
      process.exit(1);
    }
    console.log('Environment file created successfully.');
  });
});
