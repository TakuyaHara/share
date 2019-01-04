import path from 'path';
import glob from 'glob';

it('renders without crashing', () => {
  const testFiles = glob.sync(path.resolve(__dirname, "Test/**/*.js"));
  testFiles.map(testFile => {
    import(testFile).then(_export => {
      _export.default();
    });
  })
});
