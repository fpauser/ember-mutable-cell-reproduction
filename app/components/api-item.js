import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
  param0: undefined,
  param1: undefined,

  didReceiveAttrs() {
    this._super(...arguments);

    Ember.Logger.debug('didReceiveAttrs()', {
      attrs: this.attrs,
      param0: this.get('param0'),
      param1: this.get('param1')
    });
  },

  actions: {
    updateParam0() {
      this.set('param0', 'new-param0-value');
    }
  }
});
