// Override default theme variables
// See Docs for available variables
import { Colors } from "sagan-ui";

export const theme = {
    /* 
    * Globals
    */
    // @String
    globalBorderRadius: null,
    /* 
    * Default Colors
    */
    // @String
    primaryColor: "green",
    secondaryColor: null,
    /* 
    *Button Options 
    */
    // @Number - (Pixels)
    buttonBorderSize: null,
    buttonFontColor: null,
    buttonSize: 12,
    buttonFontSize: 14,
    buttonFlatBackgroundWeight: null,
    buttonFlatColorWeight: null,
    /* 
    *Alert Options 
    */
    // @String
    alertColorWeight: null,
    /* 
    *Card Options 
    */
    // @String
    cardTitleColor: Colors.gray.is900,
    cardDateColor: Colors.gray.is400,
    cardContentColor: Colors.gray.is500,
    // @Boolean
    cardShadow: true,
    // @Number -  (Pixels)
    cardHeaderSize: 250
};
