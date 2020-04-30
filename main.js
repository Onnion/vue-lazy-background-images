import VueLazyBackgroundImage from './VueLazyBackgroundImage.vue'

const LazyBackgroundImage = {
    install(Vue, options) {
      Vue.component("lazy-background", VueLazyBackgroundImage);
    }
  };

export default LazyBackgroundImage
