import lume from "lume/mod.ts";
import blog from "https://denopkg.com/happystinson/vento-blog-theme@v0.0.1/mod.ts";

const site = lume();
site.use(blog());

export default site;