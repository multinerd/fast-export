import _ from 'lodash';
import FormioExportUtils from '../../../../utils';

export default (element, component) => {
  if (component && component.html) {
    let componentElement = FormioExportUtils.createElement('div', {
      class: `formio-component ${component.type}-component`,
      id: Math.random().toString(36).substring(7)
    });

    let labelElement = FormioExportUtils.createElement('div', {
      class: 'col col-sm-3 component-label'
    }, component.label);
    let valueElement = FormioExportUtils.createElement('div', {
      class: 'col col-sm-9 component-value'
    });

    valueElement.innerHTML = component.html;
    componentElement.appendChild(labelElement);
    componentElement.appendChild(valueElement);

    if (_.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  }
  return null;
};