import AntD from 'ant-design-vue';
import Zh from '../../src/components';
import 'ant-design-vue/dist/antd.css';
import lodash from 'lodash';

export default ({ Vue }) => {
  Vue.use(Zh);
  Vue.use(AntD);
  Vue.prototype._lodash = lodash
}
