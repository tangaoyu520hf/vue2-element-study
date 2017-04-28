/**
 * Created by tangaoyu on 2017/4/28.
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ch: {
    message: zhLocale
  }
}
//加载国际化
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ch', // set locale
  messages, // set locale messages
});
export default i18n
