import { observable } from "mobx";

export const store = observable({
   theme: false,

   changeTheme() {
       this.theme= !this.theme
   },

    
})