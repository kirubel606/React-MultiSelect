# Multiselect Component

The `Multiselect` component is a React component that uses the Select2 library to create a customizable multiselect dropdown with additional styling.

## Features

- Integration with Bootstrap for styling and layout.
- Utilizes Select2 library for enhanced dropdown functionality.
- Supports multiple selection with tags.

## Installation

1. Install the required dependencies:

   ```bash
   npm install bootstrap select2 jquery @popperjs/core
   
   
2. Import the necessary styles and scripts in your project:
```
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'select2/dist/css/select2.min.css';
import 'select2';
import $ from 'jquery';
```
Use the Multiselect component in your React application.

```
import React from 'react';
import Multiselect from './path-to-multiselect/Multiselect';

const App = () => {
  return (
    <div>
      <Multiselect />
    </div>
  );
};

export default App;
```
## Customization

### Adding Custom Styles to Selected Options
To add custom styling to the selected options, modify the formatSelection and formatResult functions in the useEffect block of the Multiselect component. These functions define the appearance of selected and available options.

```
function formatSelection(icon, badge) {
  if (!icon.id) {
    return icon.text;
  }
  return $('<span><i class="fa ' + $(icon.element).data('icon') + '"></i> ' + icon.text + '</span>');
}

function formatResult(icon, badge) {
  if (!icon.id) {
    return icon.text;
  }
  return $('<span><i class="fa ' + $(icon.element).data('icon') + '"></i> ' + icon.text + '</span>');
}
```
Customize the class names and styles according to your requirements.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
