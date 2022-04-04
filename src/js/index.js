require("@babel/polyfill");
import axios from "axios";
import Search from "../../dist/js/modal/Search";


let search = new Search('pasta')
let r
search.doSearch().then(r = console.log('r >> ', r))

