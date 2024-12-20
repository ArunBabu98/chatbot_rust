import * as wasm from "./chatbot_bg.wasm";
export * from "./chatbot_bg.js";
import { __wbg_set_wasm } from "./chatbot_bg.js";
__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
