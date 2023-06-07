export default {
    background: {
        grid: "bgi=linear-gradient(#fff_2px,transparent_2px),linear-gradient(90deg,#fff_2px,transparent_2px),linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px) bgs=10em_10em,10em_10em,2em_2em,2em_2em"
    },
    button: {
        appbarMenu: "p=.5 br=.5 bold :hover/ts=0_.1_.5 :active/ts=0_.1_1!",
        contained: "bg=--primary c=#fff p=.5 br=.5 bs=0_.2_0_--primary-22 :hover/bg=--primary-light :active/bg=--primary!",
        resources: "h=2 bg=--primary @dark@bg=--firefly br=.25 pl=.75 pr=.75 bd=2px_solid_--primary :hover/bg=--havelock-blue",
        link: "c=--primary p=.25 br=.5 :hover/c=--primary-light;bold :active/c=--primary!",
        text: "p=.5 br=.5 :hover/bg=#eee :active/bg=#ddd! @dark@:hover/bg=#333 @dark@:active/bg=#444!",
        themeSelector: "bg=--primary :hover/bg=--havelock-blue w=6.25 h=2.5 br=.25"
    },
    scrollbar: {
        primary: "::-webkit-scrollbar/w=.5 ::-webkit-scrollbar-track/bg=--primary-55 ::-webkit-scrollbar-thumb/bg=--primary;br=.25"
    },
    util: {
        typingText: "_f:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=#fff @dark@_f:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=--cod-gray",
        typingTextInMiddle: "_f:not(:empty):before/inline-block;ct='\\00a0';bg=#fff @dark@_f:not(:empty):before/inline-block;ct='\\00a0';bg=--cod-gray"
    }
}