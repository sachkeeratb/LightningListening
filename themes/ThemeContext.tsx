// Context for the user's theme
import * as React from 'react';

import { Appearance } from 'react-native';

const defaultMode = Appearance.getColorScheme();

const ThemeContext = React.createContext({
	theme: defaultMode
});

export default ThemeContext;
