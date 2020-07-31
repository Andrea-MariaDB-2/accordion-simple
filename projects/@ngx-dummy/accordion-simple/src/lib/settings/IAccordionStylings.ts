/**
 * @description
 *  Data type accordion-component accepts as an {@link AccordionComponent#accordionStyling} `Input`
 *  Comprises {@link AccordionComponent} styling, as well as {@link AccordionItemComponent} stylings
 *  Stylings type accordion-component accepts as an {@link AccordionComponent#accordionStyling} `Input`
 */
export interface IAccordionStyling {
	/** `max-width` css style for accordion element */
	maxWidth?: string | number | null;
	/** defines whether every accordion item element for particular accordion component element should be numbered (have numbers in header element) */
	numberdItems?: boolean;
	/** defines whether every accordion item element could be collaped on double-click inside (previously) opened items' body element */
	bodyDbclkcloseItems?: boolean;
	/** defines whether every accordion item element should be collaped upon opening another item of the same accordion component */
	isMultiShow?: boolean;
	/** defines margins between accordion elements */
	itemsGutts?: number | string | null;
	/** defines `margin` styles within accordion elements */
	margin?: string | number;
	/** @member {Object} itemStyling - styles and settings for every accordion item element in a particular Accordion */
	itemStyling?: IAccordionItemStyling | IAccordionItemStyling[];
}

/**
 * @description
 * combined stylings for `AccordionComponent` children `AccordionItemComponet`s elements;
 * comprises font-styles of every accordion-item element, as well as spacing styles, and margins, paddings, colors and other styles for both items' header and body elements
 */
export type IAccordionItemStyling = {
	font?: string | null;
	fontSize?: number | string;
	fontFamily?: string;
	fontStyle?: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';
}
	& IAccordionItemSpacingStyling
	& IAccordionItemBodyStyling
	& IAccordionItemHeadStyling;

export interface IAccordionItemSpacingStyling {
	padding?: string | number | null;
	marginBottom?: string | number | null;
	marginTop?: string | number | null;
	margin?: string | number | null;
}

export interface IAccordionItemHeadStyling {
	headFontSize?: string | null;
	headFont?: string | null;
	headColor?: string;
	headBgColor?: string;
	headHeight?: string | number | null;
}

export interface IAccordionItemBodyStyling {
	bodyFont?: string | null;
	bodyFontSize?: string | null;
	bodyColor?: string;
	bodyBgColor?: string;
	bodyPadding?: string | number | null;
	bodyMargin?: string | number | null;
	bodyTextAlign?: string;
}
