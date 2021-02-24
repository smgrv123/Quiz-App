import {observable} from 'mobx';

class Store {
  @observable num = '5';
  @observable dif = 'easy';
  @observable radio = '';
  @observable quiz = [];
  @observable check = '';
  @observable ans = 0;
  @observable scr = '';
  @observable genre = '10';
  @observable refresh='0'
  @observable email=''
}

export default new Store();
