module.exports = {
  name: 'new',
  alias: ['n'],
  description: 'Generate a new project.',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { success, error, warning, info },
      installPackages,
      filesystem
    } = toolbox;

    const project = parameters.first;
    const props = { project };

    if (filesystem.exists(`${project}`) === 'dir') {
      error('The directory already exists.');
      warning('Please, choose another project name.');
      return;
    }

    const files = [
      '.env.ejs',
      '.env.example.ejs',
      '.gitignore.ejs',
      'package.json.ejs',
      'src/index.js.ejs',
      'src/app/controllers/adminController.js.ejs',
      'src/app/controllers/authController.js.ejs',
      'src/app/controllers/index.js.ejs',
      'src/app/middlewares/auth.js.ejs',
      'src/app/models/user.js.ejs',
      'src/database/index.js.ejs'
    ];

    const filesCopy = files.reduce((acc, file) => {
      const template = `/${file}`;
      const target = `${props.project}/${file.replace('.ejs', '')}`;
      const gen = generate({ template, target, props });

      return acc.concat([gen]);
    }, []);

    await Promise.all(filesCopy);

    await installPackages(props);

    success(`Project ${project} created successful!`);

    info('***************************************************');
    info('*  Edit .env file with your MongoDB credentials.  *');
    info('***************************************************');
  }
}
