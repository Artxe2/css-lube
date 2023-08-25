export default {
	$common: {
		background_grid: `bgi=linear-gradient(#ddd_2px,transparent_2px),linear-gradient(90deg,#ddd_2px,transparent_2px),linear-gradient(#dddddd4d_1px,transparent_1px),linear-gradient(90deg,#dddddd4d_1px,transparent_1px)
		@dark@bgi=linear-gradient(#888_2px,transparent_2px),linear-gradient(90deg,#888_2px,transparent_2px),linear-gradient(#ffffff4d_1px,transparent_1px),linear-gradient(90deg,#ffffff4d_1px,transparent_1px)
		background-size=10em_10em,10em_10em,2em_2em,2em_2em
		background-position=-1em_-1em`,
		background_conic: `bg=conic-gradient(from_45deg_at_67%_67%,--primary-80,--primary-50-20)
		@dark@bg=conic-gradient(from_-45deg_at_33%_67%,--firefly,--gray-0-80)`,
		contents_div: `flex column br=1.5 o=hidden p=1.5
		bg=--gray-90 @dark@bg=--gray-20`,
		link: `c=--primary-50 p=.25 br=.5 relative
		:hover/c=--primary-60;bold;
		ts=0_0_.5_#fff @dark@ts=0_0_.5_#000
		:active/c=--primary-50!
		:hover:before/ct='#';absolute;l=-.5;c=--primary-40`
	},
	index: {
		hero_section: {
			button: `c=#fff
			bg=--primary-50 :hover/bg=--primary-40
			:hover/ts=0_0_.5
			:active/bg=--primary-50!`
		}
	},
	button: {
		text: "p=.5 br=.5 :hover/bg=#eee :active/bg=#ddd! @dark@:hover/bg=#333 @dark@:active/bg=#444!"
	},
	checkbox: {
		docs_input: `none
		:checked+label/bg=--primary-50
		:checked+label:after/ct='✔';absolute;tf=translate(0,-.3em)`,
		docs_label: `inline-block pointer us=none fs=1.5 bold va=-.3em bd=.2_solid_--primary-50 br=.3 w=1.2 h=1.2
		:after/c=--onahau @dark@:after/c=--firefly
		:after/c=#fff @dark@:after/c=--gray-10`
	},
	scrollbar: {
		primary: "::-webkit-scrollbar/w=.5 ::-webkit-scrollbar-track/bg=--primary-70 ::-webkit-scrollbar-thumb/bg=--primary-50;br=.25"
	},
	util: {
		typing_text: "_f:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=#fff @dark@_f:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=--cod-gray",
		typing_text_in_middle: "_f:not(:empty):before/inline-block;ct='\\00a0';bg=#fff @dark@_f:not(:empty):before/inline-block;ct='\\00a0';bg=--cod-gray"
	}
}