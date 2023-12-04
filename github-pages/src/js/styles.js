export default {
	$common: {
		background_grid: `bgi=linear-gradient(#ddd_2px,transparent_2px),linear-gradient(90deg,#ddd_2px,transparent_2px),linear-gradient(#dddddd4d_1px,transparent_1px),linear-gradient(90deg,#dddddd4d_1px,transparent_1px)
		@dark@bgi=linear-gradient(#888_2px,transparent_2px),linear-gradient(90deg,#888_2px,transparent_2px),linear-gradient(#ffffff4d_1px,transparent_1px),linear-gradient(90deg,#ffffff4d_1px,transparent_1px)
		background-size=80px_80px,80px_80px,16px_16px,16px_16px
		background-position=-8px_-8px`,
		background_conic: `bg=conic-gradient(from_45deg_at_67%_67%,--primary-80,--primary-50-20)
		@dark@bg=conic-gradient(from_-45deg_at_33%_67%,--firefly,--gray-0-80)`,
		contents_div: `flex column br=12 o=hidden p=24
		bg=--gray-90 @dark@bg=--gray-20`,
		link: `c=--primary-50 p=4 br=4 relative
		:hover/c=--primary-60;bold;
		ts=0_0_4_#fff @dark@ts=0_0_4_#000
		:active/c=--primary-50!
		:hover:before/ct='#';absolute;l=-.75em;c=--primary-40`
	},
	index: {
		hero_section: {
			button: `c=#fff
			bg=--primary-50 :hover/bg=--primary-40
			:hover/ts=0_0_4
			:active/bg=--primary-50!`
		}
	},
	button: {
		text: "p=4 br=4 :hover/bg=#eee :active/bg=#ddd! @dark@:hover/bg=#333 @dark@:active/bg=#444!"
	},
	checkbox: {
		docs_input: `none cp=text
		:checked+label/bg=--primary-50
		:checked+label:after/ct='✔'`,
		docs_label: `inline-block pointer us=none fs=24 bold bd=3px_solid_--primary-50 br=4 w=24 h=24
		:after/absolute;tf=translate(0,-.3em)
		:after/c=--gray-90 @dark@:after/c=--gray-20`
	},
	scrollbar: {
		primary: "::-webkit-scrollbar/w=8 ::-webkit-scrollbar-track/bg=--primary-70 ::-webkit-scrollbar-thumb/bg=--primary-50;br=4"
	},
	util: {
		typing_text: "_f:not(:empty):nth-child(n+2):before/inline-block;ct='_';bg=#fff @dark@_f:not(:empty):nth-child(n+2):before/inline-block;ct='_';bg=--cod-gray",
		typing_text_in_middle: "_f:not(:empty):before/inline-block;ct='_';bg=#fff @dark@_f:not(:empty):before/inline-block;ct='_';bg=--cod-gray"
	}
}