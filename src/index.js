import {updateWebpageOrder} from "./order"
import {updateWebpageMenu} from "./menu"
import {updateWebpageHome} from "./home"

//updateWebpageOrder();
//updateWebpageMenu();
updateWebpageHome();

document.getElementById("tabbedHome").addEventListener("click", () => {
    updateWebpageHome();
});

document.getElementById("tabbedMenu").addEventListener("click", () => {updateWebpageMenu();
});

document.getElementById("tabbedOrder").addEventListener("click", () =>{updateWebpageOrder();
});