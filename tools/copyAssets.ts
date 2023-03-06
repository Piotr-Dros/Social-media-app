import shell from 'shelljs';

shell.cp('-R', ['src/views', 'src/public'], 'dist/');
