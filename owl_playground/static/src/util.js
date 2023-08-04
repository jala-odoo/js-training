/**@odoo-module */

import { useRef,onMounted } from "@odoo/owl";

export function useAutofocus(el){
    const ele = useRef(el);

    onMounted(()=> {ele.el.focus() })
}

