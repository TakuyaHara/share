import * as path from 'path';
import * as glob from 'glob';

it('runs test to verify coverage reports', () => {
  const testFiles = glob.sync(path.resolve(__dirname, "Test/**/*.tsx"));
  testFiles.map(testFile => {
    import(testFile).then(_export => {
      _export.default();
    });
  })
});
