import lume from "lume/mod.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog/mod.ts";

const site = lume();
site.use(blog());

export default site;