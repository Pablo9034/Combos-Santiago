import { c as createComponent, s as spreadAttributes, u as unescapeHTML, b as renderTemplate, d as createAstro, m as maybeRenderHead, r as renderComponent } from './astro/server_CbIqYjv0.mjs';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const Tag = createSvgComponent({"meta":{"src":"/_astro/tag.BtbFV65K.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","class":"icon icon-tabler icons-tabler-filled icon-tabler-tag"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M11.172 2a3 3 0 0 1 2.121 .879l7.71 7.71a3.41 3.41 0 0 1 0 4.822l-5.592 5.592a3.41 3.41 0 0 1 -4.822 0l-7.71 -7.71a3 3 0 0 1 -.879 -2.121v-5.172a4 4 0 0 1 4 -4zm-3.672 3.5a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2\" />"});

const $$Astro = createAstro();
const prerender = false;
const $$ComboPrice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ComboPrice;
  const { price } = Astro2.props;
  const country = await Astro2.request.headers.get("x-vercel-ip-country") ?? "US";
  const priceText = () => {
    let text = country === "BR" ? "R$" : "$";
    text += ` ${price[country === "BR" ? "BR" : "US"]}`;
    return text;
  };
  return renderTemplate`${maybeRenderHead()}<span class="absolute right-0 top-0 rotate-12 text-3xl text-yellow-300">${priceText()} ${renderComponent($$result, "Tag", Tag, { "class": "absolute -right-8" })}</span>`;
}, "C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/src/components/ComboPrice.astro", void 0);

const $$file = "C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/src/components/ComboPrice.astro";
const $$url = undefined;

export { $$ComboPrice as $, $$file as a, $$url as b, createSvgComponent as c, prerender as p };
