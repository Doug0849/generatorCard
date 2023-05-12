import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	fonts: {
		heading: `'AlaskaAir',AS Circular, 'Segoe UI`,
		body: `'AlaskaAir','AS Circular', 'Segoe UI`,
	},
	fontWeights: {
		light: 300,
		normal: 400,
		medium: 500,
		bold: 700,
		black: 900,
	},
});

export default theme;
