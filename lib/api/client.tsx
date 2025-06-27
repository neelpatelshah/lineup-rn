import { Configuration, DefaultApi } from "./autogen";

const config = new Configuration({
  basePath: "http://localhost:3000",
});

const api = new DefaultApi(config);

export default api;
