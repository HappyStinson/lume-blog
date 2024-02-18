import lume from "lume/mod.ts";
import blog from "https://denopkg.com/happystinson/vento-blog-theme@v0.0.2-pre/mod.ts";

const site = lume({
  src: "./src",
});

site.use(blog());

export default site;