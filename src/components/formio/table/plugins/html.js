import _ from 'lodash';
import FormioExportUtils from '../../../../utils';

export default (element, component) => {
  if (component && component.components) {
    let componentElement = FormioExportUtils.createElement('div', {
      class: `formio-component ${component.type}-component`,
      id: Math.random().toString(36).substring(7)
    });

    _.forEach(component.components, (c) => {
      if (c) {
        if (c.customClass && c.customClass === 'hide-report') {
          return;
        }
        c.toHtml(element);
      }
    });

    if (_.isElement(element)) {
      element.appendChild(componentElement);
    }
    return '';
  }
  return null;
};
