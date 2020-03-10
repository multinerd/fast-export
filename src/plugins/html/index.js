import FormioExportUtils from '../../utils';
import { style } from './style';

export default (components) => {
  return new Promise((resolve, reject) => {
    try {
      let outerHTML = FormioExportUtils.createElement('div', { id: 'container', class: 'container' });
      let containers = FormioExportUtils.createElement('div', { id: 'formio__export', class: 'formio' });

      for (let i = 0; i < components.length; i++) {
        let container = FormioExportUtils.createElement('div', { id: `formio__export${i}`, class: 'formio__export' }
          , style);

        components[i].toHtml(container);
        containers.appendChild(container);
      }
      outerHTML.appendChild(containers);
      resolve(outerHTML);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
