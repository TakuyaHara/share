import path from 'path';
import glob from 'glob';

it('runs test to verify coverage reports', () => {
  const testFiles = glob.sync(path.resolve(__dirname, "Test/**/*.js"));
  testFiles.map(testFile => {
    import(testFile).then(_export => {
      _export.default();
    });
  })
});
