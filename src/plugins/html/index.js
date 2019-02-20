import FormioExportUtils from '../../utils';
import { style } from './style';

export default (components) => {
  return new Promise((resolve, reject) => {
    try {
      let containers = FormioExportUtils.createElement('div');

      for (let i = 0; i < components.length; i++) {
        let container = FormioExportUtils.createElement('div', { id: `formio__export${i}`, class: 'formio__export' }
          , style);

        components[i].toHtml(container);
        containers.appendChild(container);
      }
      resolve(containers);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
