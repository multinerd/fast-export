import BaseComponent from '../base';
import { toHtml } from './plugins';
import _ from 'lodash';

class TableComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
    if (this.rows) {
      let components = [];

      _.forEach(this.rows, (rows) => {
        if (rows) {
          _.forEach(rows, (row) => {
            if (row) {
              _.forEach(row, (comps) => {
                if (comps) {
                  _.forEach(comps, (comp) => {
                    components.push(this.createComponent(comp, data, options));
                  });
                }
              });
            }
          });
        }
      });
      this.components = components;
    }
  }

  toHtml (element) {
    return toHtml(element, this);
  }
}

export default TableComponent;
