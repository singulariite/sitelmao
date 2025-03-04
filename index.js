const response = await fetch(
  'https://codegen.plasmic.app/api/v1/loader/html/preview/2XydcRhtZ4e2CJPuKYVouc/Homepage?hydrate=1&embedHydrate=1',
  {
    headers: {
      // Your project ID and public API token
      'x-plasmic-api-project-tokens': '2XydcRhtZ4e2CJPuKYVouc:GmdCYLaQwjsMuIEXLOKxABMv1KZp7LKxlRkPBwTSwGDIaqaNLFrRHD3krBvtQ5eAqHhXiiidVIbEiDtZVVtcA'
      // You can find your PROJECT token by visiting
      // https://studio.plasmic.app/projects/[2XydcRhtZ4e2CJPuKYVouc]/docs/loader#showToken=true
    }
  }
);
const result = await response.json();
document.body.innerHTML = result.html;

// If you want hydration to happen, load and call the hydrater
if (window.__plasmicHydrater) {
  window.__plasmicHydrater.hydrateAll();
} else {
  var script = document.createElement('script');
  script.src = 'https://codegen.plasmic.app/static/js/loader-hydrate.js';
  document.body.appendChild(script);
}
