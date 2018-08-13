/* eslint-disable  */
import React from "react";

export const AngleDoubleRight = props => {
	const { width, height, styles, size, ...rest } = props;
	return (
		<svg viewBox="0 0 1792 1792" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || "currentColor"}
				stroke={props.stroke || "currentColor"}
				{...rest}
				d="M979 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"
			/>
		</svg>
	);
};

export const AngleDoubleLeft = props => {
	const { width, height, styles, size, ...rest } = props;
	return (
		<svg viewBox="0 0 1792 1792" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || "currentColor"}
				stroke={props.stroke || "currentColor"}
				{...rest}
				d="M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10L439 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L608 960l393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10L823 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L992 960l393 393q10 10 10 23z"
			/>
		</svg>
	);
};

export const Cogs = props => {
	const { width, height, styles, size, ...rest } = props;
	return (
		<svg viewBox="0 0 2048 1792" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || "currentColor"}
				stroke={props.stroke || "currentColor"}
				{...rest}
				d="M960 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5T1600 512t90.5-37.5T1728 384zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5T1063 1423q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24H611q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5T64 987V802q0-10 7-19.5T87 772l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31V314q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z"
			/>
		</svg>
	);
};

export const Filter = props => {
	const { width, height, styles, size, ...rest } = props;
	return (
		<svg viewBox="0 0 1792 1792" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1595 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45V858L211 365q-31-29-14-70 17-39 59-39h1280q42 0 59 39z"
			/>
		</svg>
	);
};

export const ClockO = props => {
	const { width, height, styles, size, ...rest } = props;
	return (
		<svg viewBox="0 0 1792 1792" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1024 544v448q0 14-9 23t-23 9H672q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224V544q0-14 9-23t23-9h64q14 0 23 9t9 23zm416 352q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5T1281.5 1561 896 1664t-385.5-103T231 1281.5 128 896t103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"
			/>
		</svg>
	);
};

export const ArrowRowExpandDownIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 477.2 477.2" width={size || width} height={size || height} className={styles}>
			<path
				d="M402.95 186.65c0-4.1-1.7-8.2-4.6-11.1l-44.6-44.6c-2.9-2.9-7-4.6-11.1-4.6s-8.2 1.7-11.1 4.6l-92.9 92.9-92.9-92.9c-3-3-7.2-4.7-11.4-4.6-4 .1-8 1.8-10.9 4.6l-44.6 44.6c-2.9 2.9-4.6 7-4.6 11.1s1.7 8.2 4.6 11.1l148.6 148.6c2.9 2.9 7 4.6 11.1 4.6s8.2-1.7 11.1-4.6l148.6-148.6c3-2.9 4.7-7 4.7-11.1z"
				fill={props.fill || "#595959"}
				stroke={props.stroke || "currentColor"}
				className={" "}
				{...rest}
			/>
		</svg>
	);
};

export const ArrowRowExpandRightIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 477.2 477.2" width={size || width} height={size || height} className={styles}>
			<path
				d="M185.6 70.85c-4.2 0-8.4 1.8-11.4 4.7l-45.5 45.5c-3 3-4.7 7.1-4.7 11.4 0 4.3 1.7 8.4 4.7 11.4l94.8 94.8-94.8 94.8c-3 3-4.8 7.3-4.7 11.6.1 4.1 1.8 8.2 4.7 11.1l45.5 45.5c3 3 7.2 4.7 11.4 4.7s8.4-1.7 11.4-4.7l151.6-151.6c3-3 4.7-7.2 4.7-11.4s-1.7-8.4-4.7-11.4L196.9 75.65c-2.9-3-7.1-4.8-11.3-4.8z"
				fill={props.fill || "#595959"}
				stroke={props.stroke || "currentColor"}
				className={" "}
				{...rest}
			/>
		</svg>
	);
};

export const ArrowSortDownIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 493.3 493.3" width={size || width} height={size || height} className={styles}>
			<path
				d="M157.2 183.8h178.9c7.2 0 13.9-4 17.3-10.4 3.4-6.4 2.9-14.1-1.2-20.1L261.6 21c-3.2-4.7-8.6-7.6-14.4-7.6-5.7 0-11.1 2.8-14.4 7.5l-91.7 132.3c-4.1 6-4.6 13.7-1.2 20.2 3.4 6.4 10 10.4 17.3 10.4z"
				fill={props.fill || "#8a8a8a"}
				stroke={props.stroke || "currentColor"}
				className={" "}
				{...rest}
			/>
			<path
				d="M336.1 313.4H157.2c-7.3 0-13.9 4-17.3 10.5-3.4 6.4-2.9 14.2 1.2 20.2l91.7 132.3c3.3 4.7 8.7 7.5 14.4 7.5 5.7 0 11.1-2.9 14.4-7.6L352.2 344c4.1-6 4.5-13.7 1.2-20.1-3.4-6.5-10.1-10.5-17.3-10.5z"
				fill={props.fill || "#fff"}
			/>
		</svg>
	);
};

export const ArrowSortIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 493.3 493.3" width={size || width} height={size || height} className={styles}>
			<g fill={props.fill || "#8a8a8a"} {...rest}>
				<path
					d="M157.2 183.8h178.9c7.2 0 13.9-4 17.3-10.4 3.4-6.4 2.9-14.1-1.2-20.1L261.6 21c-3.2-4.7-8.6-7.6-14.4-7.6-5.7 0-11.1 2.8-14.4 7.5l-91.7 132.3c-4.1 6-4.6 13.7-1.2 20.2 3.4 6.4 10 10.4 17.3 10.4zM336.1 313.4H157.2c-7.3 0-13.9 4-17.3 10.5-3.4 6.4-2.9 14.2 1.2 20.2l91.7 132.3c3.3 4.7 8.7 7.5 14.4 7.5 5.7 0 11.1-2.9 14.4-7.6L352.2 344c4.1-6 4.5-13.7 1.2-20.1-3.4-6.5-10.1-10.5-17.3-10.5z"/>
			</g>
		</svg>
	);
};

export const ArrowSortUpIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 493.3 493.3" width={size || width} height={size || height} className={styles}>
			<path
				d="M157.2 183.8h178.9c7.2 0 13.9-4 17.3-10.4 3.4-6.4 2.9-14.1-1.2-20.1L261.6 21c-3.2-4.7-8.6-7.6-14.4-7.6-5.7 0-11.1 2.8-14.4 7.5l-91.7 132.3c-4.1 6-4.6 13.7-1.2 20.2 3.4 6.4 10 10.4 17.3 10.4z"
				fill="#fff"
				{...rest}
			/>
			<path
				d="M336.1 313.4H157.2c-7.3 0-13.9 4-17.3 10.5-3.4 6.4-2.9 14.2 1.2 20.2l91.7 132.3c3.3 4.7 8.7 7.5 14.4 7.5 5.7 0 11.1-2.9 14.4-7.6L352.2 344c4.1-6 4.5-13.7 1.2-20.1-3.4-6.5-10.1-10.5-17.3-10.5z"
				fill="#8a8a8a"
				{...rest}
			/>
		</svg>
	);
};

export const ArrowLeft = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1664 896v128q0 53-32.5 90.5T1547 1152H843l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91L843 768h704q52 0 84.5 37.5T1664 896z"
			/>
		</svg>
	);
};

export const CheckMarkSignIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="10 145 17 17" width={size || width} height={size || height} className={styles}>
			<path
				d="M25 149.663l-.872-.873-7.683 7.683-3.573-3.573-.872.873 4.317 4.319.123.118.13-.118 8.43-8.429z"
				fill={props.fill || "currentColor"}
				{...rest}
			/>
		</svg>
	);
};

export const CloseIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 512 512" width={size || width} height={size || height} className={styles}>
			<g fill={props.fill || "currentColor"} {...rest}>
				<path d="M399.963 436.058l32.022-31.974-326.517-328.69-31.236 34.455 325.731 326.209z"/>
				<path d="M77.104 404.584l31.975 32.022 328.689-326.518-34.455-31.235-326.21 325.731z"/>
			</g>
		</svg>
	);
};

export const CloseIcoBold = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
			/>
		</svg>
	);
};

export const CopyIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 24 24" width={size || width} height={size || height} className={styles}>
			<g fill={props.fill || "#fff"} {...rest}>
				<path d="M19.5 5.5H24l-5-5V5c0 .275.225.5.5.5zM9 10c0 .275.225.5.5.5H14l-5-5V10z"/>
				<path
					d="M7.6 11V5.5H.5c-.275 0-.5.225-.5.5v17c0 .275.225.5.5.5h13c.274 0 .5-.225.5-.5V11.9H8.5c-.586 0-.9-.523-.9-.9z"/>
				<path
					d="M17.6 6.003V.5h-7.1c-.275 0-.5.225-.5.5v3.02l5.4 5.4v9.08h8.1c.274 0 .5-.225.5-.5V6.9h-5.502c-.586 0-.898-.52-.898-.897z"/>
			</g>
		</svg>
	);
};

export const CopyIco1 = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg
			width={size || width}
			height={size || height}
			className={styles}
			style={{
				msTransform: "rotate(360deg)",
				WebkitTransform: "rotate(360deg)",
				transform: "rotate(360deg)",
			}}
			viewBox="0 0 1792 1792"
		>
			<path
				d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28H736q-40 0-68-28t-28-68v-288H96q-40 0-68-28t-28-68V640q0-40 20-88t48-76L476 68q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213L853 896h299V597zM512 213L213 512h299V213zm196 647l316-316V128H640v416q0 40-28 68t-68 28H128v640h512v-256q0-40 20-88t48-76zm956 804V512h-384v416q0 40-28 68t-68 28H768v640h896z"
				fill={props.fill || "#bcbcbc"}
				{...rest}
			/>
		</svg>
	);
};

export const FlagIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 20 20" width={size || width} height={size || height} className={styles}>
			<path
				d="M15.26 6.938l2.962-4.737a.306.306 0 0 0-.26-.47H4.18v-.612a.305.305 0 1 0-.611 0V18.882c0 .168.138.306.305.306a.307.307 0 0 0 .306-.306v-6.737h13.782a.306.306 0 0 0 .268-.159.304.304 0 0 0-.008-.311L15.26 6.938z"
				fill={props.fill || "currentColor"}
				{...rest}
			/>
		</svg>
	);
};

export const MailIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 485.211 485.211" width={size || width} height={size || height} className={styles}>
			<path
				d="M485.211 363.906c0 10.637-2.992 20.498-7.785 29.174L324.225 221.67l151.54-132.584c5.895 9.355 9.446 20.344 9.446 32.219v242.601zM242.606 252.793l210.863-184.5c-8.653-4.737-18.397-7.642-28.908-7.642H60.651c-10.524 0-20.271 2.905-28.889 7.642l210.844 184.5zm58.787-11.162l-48.809 42.734a15.145 15.145 0 0 1-9.978 3.729c-3.57 0-7.125-1.242-9.98-3.729l-48.82-42.736L28.667 415.23c9.299 5.834 20.197 9.329 31.983 9.329h363.911c11.784 0 22.687-3.495 31.983-9.329L301.393 241.631zM9.448 89.085C3.554 98.44 0 109.429 0 121.305v242.602c0 10.637 2.978 20.498 7.789 29.174l153.183-171.44L9.448 89.085z"
				fill={props.fill || "#fff"}
				{...rest}
			/>
		</svg>
	);
};

export const MinusIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 401.991 401.991" width={size || width} height={size || height} className={styles}>
			<path
				d="M394 154.174c-5.331-5.33-11.806-7.995-19.417-7.995H27.406c-7.611 0-14.084 2.665-19.414 7.995C2.662 159.503 0 165.972 0 173.587v54.82c0 7.617 2.662 14.086 7.992 19.41 5.33 5.332 11.803 7.994 19.414 7.994h347.176c7.611 0 14.086-2.662 19.417-7.994 5.325-5.324 7.991-11.793 7.991-19.41v-54.82c.001-7.615-2.658-14.087-7.99-19.413z"
				fill={props.fill || "currentColor"}
				{...rest}
			/>
		</svg>
	);
};

export const PlusIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 401.994 401.994" width={size || width} height={size || height} className={styles}>
			<path
				d="M394 154.175c-5.331-5.33-11.806-7.994-19.417-7.994H255.811V27.406c0-7.611-2.666-14.084-7.994-19.414C242.488 2.666 236.02 0 228.398 0h-54.812c-7.612 0-14.084 2.663-19.414 7.993-5.33 5.33-7.994 11.803-7.994 19.414v118.775H27.407c-7.611 0-14.084 2.664-19.414 7.994S0 165.973 0 173.589v54.819c0 7.618 2.662 14.086 7.992 19.411 5.33 5.332 11.803 7.994 19.414 7.994h118.771V374.59c0 7.611 2.664 14.089 7.994 19.417 5.33 5.325 11.802 7.987 19.414 7.987h54.816c7.617 0 14.086-2.662 19.417-7.987 5.332-5.331 7.994-11.806 7.994-19.417V255.813h118.77c7.618 0 14.089-2.662 19.417-7.994 5.329-5.325 7.994-11.793 7.994-19.411v-54.819c-.002-7.616-2.661-14.087-7.993-19.414z"
				fill={props.fill || "currentColor"}
				{...rest}
			/>
		</svg>
	);
};

export const PrinterIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 16 16" width={size || width} height={size || height} className={styles}>
			<g fill={props.fill || "#fff"} {...rest}>
				<path d="M4 12.5v3h8v-5H4v2zm1-1h6v1H5v-1zm0 2h6v1H5v-1zM12 3.5v-3H4v5h8z"/>
				<path d="M14 3.5h-1v3H3v-3H2c-1 0-2 1-2 2v5c0 1 1 2 2 2h1v-3h10v3h1c1 0 2-1 2-2v-5c0-1-1-2-2-2z"/>
			</g>
		</svg>
	);
};

export const Search = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 48 48" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || "#595959"}
				{...rest}
				className={" "}
				fillRule="evenodd"
				d="M29.385 21.846c0-2.075-.738-3.85-2.213-5.326-1.475-1.475-3.25-2.212-5.326-2.212-2.075 0-3.85.737-5.326 2.212-1.475 1.476-2.212 3.25-2.212 5.326 0 2.075.737 3.85 2.212 5.326 1.476 1.475 3.25 2.213 5.326 2.213 2.075 0 3.85-.738 5.326-2.213 1.475-1.475 2.213-3.25 2.213-5.326zm8.615 14a2.07 2.07 0 0 1-.64 1.515 2.07 2.07 0 0 1-1.514.639c-.606 0-1.11-.213-1.514-.64l-5.772-5.754c-2.008 1.39-4.246 2.086-6.714 2.086a11.64 11.64 0 0 1-4.602-.934c-1.464-.622-2.726-1.464-3.786-2.524s-1.902-2.322-2.524-3.786A11.64 11.64 0 0 1 10 21.846c0-1.604.311-3.138.934-4.602.622-1.464 1.464-2.726 2.524-3.786s2.322-1.902 3.786-2.524A11.64 11.64 0 0 1 21.846 10c1.604 0 3.138.311 4.602.934 1.464.622 2.726 1.464 3.786 2.524s1.902 2.322 2.524 3.786a11.64 11.64 0 0 1 .934 4.602c0 2.468-.695 4.706-2.086 6.714l5.771 5.772c.415.415.623.92.623 1.514z"
			/>
		</svg>
	);
};

export const UserIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 448 448" width={size || width} height={size || height} className={styles}>
			<path
				d="M279.412 311.368c-11.055-1.759-11.307-32.157-11.307-32.157s32.484-32.158 39.564-75.401c19.045 0 30.809-45.973 11.76-62.148C320.227 124.635 343.91 8 224 8c-119.911 0-96.225 116.635-95.432 133.662-19.047 16.175-7.285 62.148 11.761 62.148 7.079 43.243 39.564 75.401 39.564 75.401s-.252 30.398-11.307 32.157C132.976 317.034 0 375.686 0 440h448c0-64.314-132.977-122.966-168.588-128.632z"
				fill={props.fill || "#fff"}
				{...rest}
			/>
		</svg>
	);
};

export const CopyDocument = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 511.627 511.627" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || "#000"}
				{...rest}
				d="M503.633 117.628c-5.332-5.327-11.8-7.993-19.41-7.993H365.446c-11.417 0-23.603 3.806-36.542 11.42V27.412c0-7.616-2.662-14.092-7.994-19.417C315.578 2.666 309.11 0 301.492 0H182.725c-7.614 0-15.99 1.903-25.125 5.708-9.136 3.806-16.368 8.376-21.7 13.706L19.414 135.901c-5.33 5.329-9.9 12.563-13.706 21.698C1.903 166.738 0 175.108 0 182.725v191.858c0 7.618 2.663 14.093 7.992 19.417 5.33 5.332 11.803 7.994 19.414 7.994h155.318v82.229c0 7.61 2.662 14.085 7.992 19.41 5.327 5.332 11.8 7.994 19.414 7.994h274.091c7.61 0 14.085-2.662 19.41-7.994 5.332-5.325 7.994-11.8 7.994-19.41V137.046c.002-7.614-2.66-14.088-7.992-19.418zm-174.729 52.821v85.364h-85.366l85.366-85.364zM146.178 60.813v85.364H60.814l85.364-85.364zm55.961 184.722c-5.33 5.33-9.9 12.564-13.706 21.701-3.805 9.141-5.708 17.508-5.708 25.126v73.083H36.547v-182.72h118.766c7.616 0 14.087-2.664 19.417-7.994 5.327-5.33 7.994-11.801 7.994-19.412V36.547h109.637v118.771l-90.222 90.217zm272.939 229.55H219.263v-182.73h118.775c7.614 0 14.082-2.662 19.41-7.994 5.328-5.325 7.994-11.797 7.994-19.41V146.178h109.629v328.907h.007z"
			/>
		</svg>
	);
};

export const Delete = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 774.266 774.266" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || "#000"}
				{...rest}
				d="M640.35 91.169H536.971V23.991C536.971 10.469 526.064 0 512.543 0c-1.312 0-2.187.438-2.614.875-.438-.437-1.313-.875-1.75-.875H261.722c-13.521 0-23.99 10.469-23.99 23.991V91.17H133.916c-29.667 0-52.783 23.116-52.783 52.783v86.368h45.803v491.6c0 29.668 22.679 52.346 52.346 52.346h415.703c29.667 0 52.782-22.678 52.782-52.346v-491.6h45.366v-86.368c0-29.667-23.125-52.784-52.783-52.784zM285.713 47.981h202.84v43.188h-202.84V47.981zm313.636 673.941c0 3.061-1.312 4.363-4.364 4.363H179.282c-3.052 0-4.364-1.303-4.364-4.363V230.32h424.431v491.602zm45.366-539.583H129.551v-38.387c0-3.053 1.312-4.802 4.364-4.802H640.35c3.053 0 4.365 1.749 4.365 4.802v38.387z"
			/>
			<path
				fill={props.fill || "#000"}
				{...rest}
				d="M475.031 286.593h48.418v396.942h-48.418zM363.361 286.593h48.418v396.942h-48.418zM251.69 286.593h48.418v396.942H251.69z"
			/>
		</svg>
	);
};

export const Trash = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M704 1376V672q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0V672q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0V672q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zM672 384h448l-48-117q-7-9-17-11H738q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5H480q-66 0-113-58.5T320 1464V512h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"
			/>
		</svg>
	);
};

export const Download = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1344 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28H160q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h465l135 136q58 56 136 56t136-56l136-136h464q40 0 68 28t28 68zm-325-569q17 41-14 70l-448 448q-18 19-45 19t-45-19L403 621q-31-29-14-70 17-39 59-39h256V64q0-26 19-45t45-19h256q26 0 45 19t19 45v448h256q42 0 59 39z"
			/>
		</svg>
	);
};

export const Edit = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 60.017 60.017" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || "#000"}
				{...rest}
				d="M59.144 3.731L56.294.88a2.991 2.991 0 0 0-4.221.001l-3.126 3.126H0v56h56v-48.91l.305-.305 2.839-2.839a2.989 2.989 0 0 0 0-4.222zM20.047 36.759l3.22 3.22-4.428 1.208 1.208-4.428zm32.015-24.553L47.82 7.964l1.414-1.414 4.243 4.242-1.415 1.414zm-1.414 1.414L25.192 39.076l-4.242-4.242L46.406 9.378l4.242 4.242zM54 13.097v44.91H2v-52h44.947l-28.118 28.12-.188.188-2.121 7.779-1.226 1.226a.999.999 0 1 0 1.414 1.414l1.226-1.226 7.779-2.123 26.351-26.35.447-.447L54 13.097zm3.73-6.558l-2.839 2.839-4.243-4.243 2.839-2.839a.987.987 0 0 1 1.393 0l2.85 2.85a.986.986 0 0 1 0 1.393z"
			/>
		</svg>
	);
};

export const Edit2 = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 26 26" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || "#000"}
				{...rest}
				d="M20.094.25a2.247 2.247 0 0 0-1.625.656l-1 1.031 6.593 6.625 1-1.03a2.32 2.32 0 0 0 0-3.282L21.75.937A2.364 2.364 0 0 0 20.094.25zm-3.75 2.594l-1.563 1.5 6.875 6.875L23.25 9.75zM13.78 5.438L2.97 16.155a.979.979 0 0 0-.5.625L.156 24.625a.98.98 0 0 0 .242.977.98.98 0 0 0 .977.242l7.844-2.313a.979.979 0 0 0 .781-.656l10.656-10.563-1.468-1.468L8.25 21.813l-4.406 1.28-.938-.937 1.344-4.593L15.094 6.75zm2.375 2.406l-10.968 11 1.593.343.219 1.47 11-10.97z"
			/>
		</svg>
	);
};

export const PencilSquareO = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M888 1184l116-116-152-152-116 116v56h96v96h56zm440-720q-16-16-33 1L945 815q-17 17-1 33t33-1l350-350q17-17 1-33zm80 594v190q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zm-96-738l288 288-672 672H640V992zm444 132l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"
			/>
		</svg>
	);
};

export const ShareSquare = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1133 1101l352-352q19-19 19-45t-19-45l-352-352q-30-31-69-14-40 17-40 59v160q-119 0-216 19.5t-162.5 51-114 79T455 757t-44.5 109T389 977.5t-5 110.5q0 181 167 404 11 12 25 12 7 0 13-3 22-9 19-33-44-354 62-473 46-52 130-75.5t224-23.5v160q0 42 40 59 12 5 24 5 26 0 45-19zm531-685v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"
			/>
		</svg>
	);
};

export const ShareSquareO = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1472 989v259q0 119-84.5 203.5T1184 1536H352q-119 0-203.5-84.5T64 1248V416q0-119 84.5-203.5T352 128h255q13 0 22.5 9.5T639 160q0 27-26 32-77 26-133 60-10 4-16 4H352q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-214q0-19 18-29 28-13 54-37 16-16 35-8 21 9 21 29zm237-496l-384 384q-18 19-45 19-12 0-25-5-39-17-39-59V640h-160q-323 0-438 131-119 137-74 473 3 23-20 34-8 2-12 2-16 0-26-13-10-14-21-31t-39.5-68.5T376 1068t-38.5-114T320 832q0-49 3.5-91t14-90 28-88 47-81.5 68.5-74 94.5-61.5T700 297.5 859.5 267t196.5-11h160V64q0-42 39-59 13-5 25-5 26 0 45 19l384 384q19 19 19 45t-19 45z"
			/>
		</svg>
	);
};

export const ThreeDotsIco = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 990.9 990.9" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || "#000"}
				{...rest}
				d="M144.2 639.6c79.6 0 144.1-64.5 144.1-144.1 0-79.601-64.5-144.1-144.1-144.1C64.5 351.3 0 415.8 0 495.4s64.5 144.2 144.2 144.2zm0-213.7c38.3 0 69.5 31.2 69.5 69.5 0 38.301-31.2 69.5-69.5 69.5s-69.5-31.199-69.5-69.5c0-38.3 31.1-69.5 69.5-69.5zM351.4 495.4c0 79.6 64.5 144.1 144.1 144.1S639.6 575 639.6 495.4s-64.5-144.1-144.1-144.1-144.1 64.5-144.1 144.1zm213.6 0c0 38.301-31.2 69.5-69.5 69.5S426 533.701 426 495.4c0-38.3 31.2-69.5 69.5-69.5s69.5 31.2 69.5 69.5zM846.8 351.3c-79.6 0-144.1 64.5-144.1 144.1s64.5 144.1 144.1 144.1S990.9 575 990.9 495.4c.1-79.6-64.4-144.1-144.1-144.1zm0 213.6c-38.3 0-69.5-31.199-69.5-69.5 0-38.3 31.2-69.5 69.5-69.5s69.5 31.2 69.5 69.5c0 38.301-31.1 69.5-69.5 69.5z"
			/>
		</svg>
	);
};

export const EllipsisV = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1088 1248v192q0 40-28 68t-68 28H800q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28H800q-40 0-68-28t-28-68V736q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28H800q-40 0-68-28t-28-68V224q0-40 28-68t68-28h192q40 0 68 28t28 68z"
			/>
		</svg>
	);
};

export const CloseIcon = props => {
	const { width, height, styles, size, ...rest } = props;
	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
			/>
		</svg>
	);
};

export const Circle = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664t-385.5-103T231 1281.5 128 896t103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"
			/>
		</svg>
	);
};

export const FilesO = props => {
	const { width, height, styles, size, ...rest } = props;
	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28H736q-40 0-68-28t-28-68v-288H96q-40 0-68-28t-28-68V640q0-40 20-88t48-76L476 68q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213L853 896h299V597zM512 213L213 512h299V213zm196 647l316-316V128H640v416q0 40-28 68t-68 28H128v640h512v-256q0-40 20-88t48-76zm956 804V512h-384v416q0 40-28 68t-68 28H768v640h896z"
			/>
		</svg>
	);
};

export const FileExcel = props => {
	const { width, height, styles, size, ...rest } = props;
	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28H224q-40 0-68-28t-28-68V96q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528V640h-416q-40 0-68-28t-28-68V128H256v1536h1280zm-979-234v106h281v-106h-75l103-161q5-7 10-16.5t7.5-13.5 3.5-4h2q1 4 5 10 2 4 4.5 7.5t6 8 6.5 8.5l107 161h-76v106h291v-106h-68l-192-273 195-282h67V768H956v107h74l-103 159q-4 7-10 16.5t-9 13.5l-2 3h-2q-1-4-5-10-6-11-17-23L776 875h76V768H562v107h68l189 272-194 283h-68z"
			/>
		</svg>
	);
};

export const FileImage = props => {
	const { width, height, styles, size, ...rest } = props;
	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28H224q-40 0-68-28t-28-68V96q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528V640h-416q-40 0-68-28t-28-68V128H256v1536h1280zm-128-448v320H384v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z"
			/>
		</svg>
	);
};

export const FilePdf = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "#000"}
				{...rest}
				d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28H224q-40 0-68-28t-28-68V96q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528V640h-416q-40 0-68-28t-28-68V128H256v1536h1280zm-514-593q33 26 84 56 59-7 117-7 147 0 177 49 16 22 2 52 0 1-1 2l-2 2v1q-6 38-71 38-48 0-115-20t-130-53q-221 24-392 83-153 262-242 262-15 0-28-7l-24-12q-1-1-6-5-10-10-6-36 9-40 56-91.5t132-96.5q14-9 23 6 2 2 2 4 52-85 107-197 68-136 104-262-24-82-30.5-159.5T785 552q11-40 42-40h22q23 0 35 15 18 21 9 68-2 6-4 8 1 3 1 8v30q-2 123-14 192 55 164 146 238zm-576 411q52-24 137-158-51 40-87.5 84t-49.5 74zm398-920q-15 42-2 132 1-7 7-44 0-3 7-43 1-4 4-8-1-1-1-2-1-2-1-3-1-22-13-36 0 1-1 2v2zm-124 661q135-54 284-81-2-1-13-9.5t-16-13.5q-76-67-127-176-27 86-83 197-30 56-45 83zm646-16q-24-24-140-24 76 28 124 28 14 0 18-1 0-1-2-3z"
			/>
		</svg>
	);
};

export const FileText = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "#000"}
				{...rest}
				d="M1596 476q14 14 28 36h-472V40q22 14 36 28zm-476 164h544v1056q0 40-28 68t-68 28H224q-40 0-68-28t-28-68V96q0-40 28-68t68-28h800v544q0 40 28 68t68 28zm160 736v-64q0-14-9-23t-23-9H544q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9H544q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9H544q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23z"
			/>
		</svg>
	);
};

export const FileTextO = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "#000"}
				{...rest}
				d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28H224q-40 0-68-28t-28-68V96q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528V640h-416q-40 0-68-28t-28-68V128H256v1536h1280zM512 800q0-14 9-23t23-9h704q14 0 23 9t9 23v64q0 14-9 23t-23 9H544q-14 0-23-9t-9-23v-64zm736 224q14 0 23 9t9 23v64q0 14-9 23t-23 9H544q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704zm0 256q14 0 23 9t9 23v64q0 14-9 23t-23 9H544q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704z"
			/>
		</svg>
	);
};

export const File = props => {
	const { width, height, styles, size, ...rest } = props;
	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1152 512V40q22 14 36 28l408 408q14 14 28 36h-472zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28H224q-40 0-68-28t-28-68V96q0-40 28-68t68-28h800v544z"
			/>
		</svg>
	);
};

export const FileO = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28H224q-40 0-68-28t-28-68V96q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528V640h-416q-40 0-68-28t-28-68V128H256v1536h1280z"
			/>
		</svg>
	);
};

export const FileAdd = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 26 28" width={size || width} height={size || height} className={styles}>
			<g fill={props.fill || "currentColor"} {...rest} fillRule="nonzero">
				<path
					d="M20.116 5.789c.248.247.46.583.636 1.007.177.424.265.812.265 1.166v15.263c0 .354-.123.654-.37.901a1.227 1.227 0 0 1-.902.371H1.938c-.354 0-.654-.123-.901-.37a1.227 1.227 0 0 1-.371-.902V2.026c0-.353.123-.654.37-.901.248-.247.548-.371.902-.371h11.871c.354 0 .742.088 1.166.265.424.177.76.389 1.007.636l4.134 4.134zm-5.883-3.233v4.982h4.982c-.088-.256-.185-.437-.291-.543l-4.147-4.148c-.106-.106-.287-.203-.544-.291zM19.321 22.8V9.234H13.81c-.353 0-.653-.124-.9-.371a1.227 1.227 0 0 1-.372-.901V2.45H2.362V22.8h16.96z"/>
				<path
					d="M26 21.182v1.636c0 .227-.08.42-.239.58a.789.789 0 0 1-.58.238h-3.545v3.546c0 .227-.08.42-.238.58a.789.789 0 0 1-.58.238h-1.636a.789.789 0 0 1-.58-.239.789.789 0 0 1-.238-.58v-3.545h-3.546a.789.789 0 0 1-.58-.238.789.789 0 0 1-.238-.58v-1.636c0-.227.08-.42.239-.58a.789.789 0 0 1 .58-.238h3.545v-3.546c0-.227.08-.42.238-.58a.789.789 0 0 1 .58-.238h1.636c.227 0 .42.08.58.239.159.159.238.352.238.58v3.545h3.546c.227 0 .42.08.58.238.158.16.238.353.238.58z"/>
			</g>
		</svg>
	);
};

export const FolderAdd = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 32 28" width={size || width} height={size || height} className={styles}>
			<g fill={props.fill || "currentColor"} {...rest} fillRule="nonzero">
				<path
					d="M24.888 19.909V8.63c0-.427-.15-.79-.45-1.09a1.483 1.483 0 0 0-1.088-.448H12.07c-.427 0-.79-.15-1.089-.449a1.483 1.483 0 0 1-.448-1.09V4.53c0-.428-.15-.79-.449-1.09a1.483 1.483 0 0 0-1.09-.448H3.87c-.427 0-.79.15-1.09.448a1.483 1.483 0 0 0-.448 1.09v15.379c0 .427.15.79.449 1.09.299.298.662.448 1.09.448h19.48c.427 0 .79-.15 1.089-.449.299-.299.449-.662.449-1.09zm2.05-11.278v11.278c0 .982-.352 1.826-1.057 2.531-.705.705-1.549 1.057-2.531 1.057H3.87c-.983 0-1.827-.352-2.532-1.057-.705-.705-1.057-1.549-1.057-2.531V4.529c0-.982.352-1.826 1.057-2.53C2.043 1.293 2.887.94 3.87.94h5.127c.982 0 1.826.353 2.53 1.057.706.705 1.058 1.55 1.058 2.532v.512H23.35c.982 0 1.826.353 2.53 1.058.706.704 1.058 1.548 1.058 2.53z"/>
				<path
					d="M32 21.182v1.636c0 .227-.08.42-.239.58a.789.789 0 0 1-.58.238h-3.545v3.546c0 .227-.08.42-.238.58a.789.789 0 0 1-.58.238h-1.636a.789.789 0 0 1-.58-.239.789.789 0 0 1-.238-.58v-3.545h-3.546a.789.789 0 0 1-.58-.238.789.789 0 0 1-.238-.58v-1.636c0-.227.08-.42.239-.58a.789.789 0 0 1 .58-.238h3.545v-3.546c0-.227.08-.42.238-.58a.789.789 0 0 1 .58-.238h1.636c.227 0 .42.08.58.239.159.159.238.352.238.58v3.545h3.546c.227 0 .42.08.58.238.158.16.238.353.238.58z"/>
			</g>
		</svg>
	);
};

export const FolderOpenO = props => {
	const { width, height, styles, size, ...rest } = props;
	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 2048 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1845 931q0-35-53-35H704q-40 0-85.5 21.5T547 970l-294 363q-18 24-18 40 0 35 53 35h1088q40 0 86-22t71-53l294-363q18-22 18-39zM704 768h768V608q0-40-28-68t-68-28H800q-40 0-68-28t-28-68v-64q0-40-28-68t-68-28H288q-40 0-68 28t-28 68v853l256-315q44-53 116-87.5T704 768zm1269 163q0 62-46 120l-295 363q-43 53-116 87.5t-140 34.5H288q-92 0-158-66t-66-158V352q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158v160h192q54 0 99 24.5t67 70.5q15 32 15 68z"
			/>
		</svg>
	);
};

export const FolderOpen = props => {
	const { width, height, styles, size, ...rest } = props;
	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 2048 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1943 952q0 31-31 66l-336 396q-43 51-120.5 86.5T1312 1536H224q-34 0-60.5-13t-26.5-43q0-31 31-66l336-396q43-51 120.5-86.5T768 896h1088q34 0 60.5 13t26.5 43zm-343-344v160H768q-94 0-197 47.5T407 935L70 1331l-5 6q0-4-.5-12.5T64 1312V352q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158z"
			/>
		</svg>
	);
};

export const FolderO = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1600 1312V608q0-40-28-68t-68-28H800q-40 0-68-28t-28-68v-64q0-40-28-68t-68-28H288q-40 0-68 28t-28 68v960q0 40 28 68t68 28h1216q40 0 68-28t28-68zm128-704v704q0 92-66 158t-158 66H288q-92 0-158-66t-66-158V352q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"
			/>
		</svg>
	);
};

export const Link = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zM817 511q0-40-28-68L583 236q-28-28-68-28-39 0-68 27L300 381q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5T607.5 680t-15-19-13-25.5T576 608q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84L164 652q-84-84-84-204t85-203L312 99q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"
			/>
		</svg>
	);
};

export const Spinner = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M526 1394q0 53-37.5 90.5T398 1522q-52 0-90-38t-38-90q0-53 37.5-90.5T398 1266t90.5 37.5T526 1394zm498 206q0 53-37.5 90.5T896 1728t-90.5-37.5T768 1600t37.5-90.5T896 1472t90.5 37.5 37.5 90.5zM320 896q0 53-37.5 90.5T192 1024t-90.5-37.5T64 896t37.5-90.5T192 768t90.5 37.5T320 896zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5T1266 1394t37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM558 398q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5T1600 1024t-90.5-37.5T1472 896t37.5-90.5T1600 768t90.5 37.5T1728 896zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136T896 0t136 56 56 136zm530 206q0 93-66 158.5T1394 622q-93 0-158.5-65.5T1170 398q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"
			/>
		</svg>
	);
};

export const Spinner2 = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 100 100">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M67.092 65.39c8.498-9.438 7.736-23.984-1.702-32.482s-23.984-7.736-32.482 1.702m2.898 2.61c7.026-7.803 19.097-8.507 26.974-1.414s8.44 19.171 1.414 26.974"
			/>
		</svg>
	);
};

export const InfoCircle = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1152 1376v-160q0-14-9-23t-23-9h-96V672q0-14-9-23t-23-9H672q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896V320q0-14-9-23t-23-9H800q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5T1281.5 1561 896 1664t-385.5-103T231 1281.5 128 896t103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"
			/>
		</svg>
	);
};

export const ExclamationTriangle = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1024 1375v-190q0-14-9.5-23.5T992 1152H800q-13 0-22.5 9.5T768 1185v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11H786q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17H128q-34 0-63.5-17T18 1601q-37-63-2-126L784 67q17-31 47-49t65-18 65 18 47 49z"
			/>
		</svg>
	);
};

export const SignOut = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M704 1440q0 4 1 20t.5 26.5-3 23.5-10 19.5-20.5 6.5H352q-119 0-203.5-84.5T64 1248V544q0-119 84.5-203.5T352 256h320q13 0 22.5 9.5T704 288q0 4 1 20t.5 26.5-3 23.5-10 19.5T672 384H352q-66 0-113 47t-47 113v704q0 66 47 113t113 47h312l11.5 1 11.5 3 8 5.5 7 9 2 13.5zm928-544q0 26-19 45l-544 544q-19 19-45 19t-45-19-19-45v-288H512q-26 0-45-19t-19-45V704q0-26 19-45t45-19h448V352q0-26 19-45t45-19 45 19l544 544q19 19 19 45z"
			/>
		</svg>
	);
};

export const UnlockAlt = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V448q0-185 131.5-316.5T896 0t316.5 131.5T1344 448q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"
			/>
		</svg>
	);
};

export const Sliders = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M480 1408v128H128v-128h352zm352-128q26 0 45 19t19 45v256q0 26-19 45t-45 19H576q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h256zm160-384v128H128V896h864zM352 384v128H128V384h224zm1312 1024v128H928v-128h736zM704 256q26 0 45 19t19 45v256q0 26-19 45t-45 19H448q-26 0-45-19t-19-45V320q0-26 19-45t45-19h256zm640 512q26 0 45 19t19 45v256q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45V832q0-26 19-45t45-19h256zm320 128v128h-224V896h224zm0-512v128H800V384h864z"
			/>
		</svg>
	);
};

export const CaretDown = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19L403 749q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"
			/>
		</svg>
	);
};

export const EllipsisHDouble = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M 576 526 L 576 718 C 576 744.667 566.667 767.333 548 786 C 529.333 804.667 506.667 814 480 814 L 288 814 C 261.333 814 238.667 804.667 220 786 C 201.333 767.333 192 744.667 192 718 L 192 526 C 192 499.333 201.333 476.667 220 458 C 238.667 439.333 261.333 430 288 430 L 480 430 C 506.667 430 529.333 439.333 548 458 C 566.667 476.667 576 499.333 576 526 Z M 1088 526 L 1088 718 C 1088 744.667 1078.667 767.333 1060 786 C 1041.333 804.667 1018.667 814 992 814 L 800 814 C 773.333 814 750.667 804.667 732 786 C 713.333 767.333 704 744.667 704 718 L 704 526 C 704 499.333 713.333 476.667 732 458 C 750.667 439.333 773.333 430 800 430 L 992 430 C 1018.667 430 1041.333 439.333 1060 458 C 1078.667 476.667 1088 499.333 1088 526 Z M 1600 526 L 1600 718 C 1600 744.667 1590.667 767.333 1572 786 C 1553.333 804.667 1530.667 814 1504 814 L 1312 814 C 1285.333 814 1262.667 804.667 1244 786 C 1225.333 767.333 1216 744.667 1216 718 L 1216 526 C 1216 499.333 1225.333 476.667 1244 458 C 1262.667 439.333 1285.333 430 1312 430 L 1504 430 C 1530.667 430 1553.333 439.333 1572 458 C 1590.667 476.667 1600 499.333 1600 526 Z"
			/>
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M 578.763 982.26 L 578.763 1174.26 C 578.763 1200.926 569.43 1223.593 550.763 1242.26 C 532.097 1260.926 509.43 1270.26 482.763 1270.26 L 290.763 1270.26 C 264.097 1270.26 241.43 1260.926 222.763 1242.26 C 204.097 1223.593 194.763 1200.926 194.763 1174.26 L 194.763 982.26 C 194.763 955.593 204.097 932.926 222.763 914.26 C 241.43 895.593 264.097 886.26 290.763 886.26 L 482.763 886.26 C 509.43 886.26 532.097 895.593 550.763 914.26 C 569.43 932.926 578.763 955.593 578.763 982.26 Z M 1090.763 982.26 L 1090.763 1174.26 C 1090.763 1200.926 1081.43 1223.593 1062.763 1242.26 C 1044.097 1260.926 1021.43 1270.26 994.763 1270.26 L 802.763 1270.26 C 776.097 1270.26 753.43 1260.926 734.763 1242.26 C 716.097 1223.593 706.763 1200.926 706.763 1174.26 L 706.763 982.26 C 706.763 955.593 716.097 932.926 734.763 914.26 C 753.43 895.593 776.097 886.26 802.763 886.26 L 994.763 886.26 C 1021.43 886.26 1044.097 895.593 1062.763 914.26 C 1081.43 932.926 1090.763 955.593 1090.763 982.26 Z M 1602.763 982.26 L 1602.763 1174.26 C 1602.763 1200.926 1593.43 1223.593 1574.763 1242.26 C 1556.097 1260.926 1533.43 1270.26 1506.763 1270.26 L 1314.763 1270.26 C 1288.097 1270.26 1265.43 1260.926 1246.763 1242.26 C 1228.097 1223.593 1218.763 1200.926 1218.763 1174.26 L 1218.763 982.26 C 1218.763 955.593 1228.097 932.926 1246.763 914.26 C 1265.43 895.593 1288.097 886.26 1314.763 886.26 L 1506.763 886.26 C 1533.43 886.26 1556.097 895.593 1574.763 914.26 C 1593.43 932.926 1602.763 955.593 1602.763 982.26 Z"
			/>
		</svg>
	);
};

export const ChevronUp = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1683 1331l-166 165q-19 19-45 19t-45-19L896 965l-531 531q-19 19-45 19t-45-19l-166-165q-19-19-19-45.5t19-45.5l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5z"
			/>
		</svg>
	);
};

export const ChevronDown = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1683 808l-742 741q-19 19-45 19t-45-19L109 808q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"
			/>
		</svg>
	);
};

export const ChevronLeft = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M 1363 877 L 621 1619 C 608.333 1631.667 593.333 1638 576 1638 C 558.667 1638 543.667 1631.667 531 1619 L 365 1453 C 352.333 1440.333 346 1425.333 346 1408 C 346 1390.667 352.333 1375.667 365 1363 L 896 832 L 365 301 C 352.333 288.333 346 273.333 346 256 C 346 238.667 352.333 223.667 365 211 L 531 45 C 543.667 32.333 558.667 26 576 26 C 593.333 26 608.333 32.333 621 45 L 1363 787 C 1375.667 799.667 1382 814.667 1382 832 C 1382 849.333 1375.667 864.333 1363 877 Z"
				transform="matrix(-1, 0, 0, -1, 1728, 1664)"
			/>
		</svg>
	);
};

export const ChevronRight = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45L531 45q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
			/>
		</svg>
	);
};

export const Calendar = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 18 17">
			<defs>
				<path id="a" d="M18 8.5V0H0v17h18z"/>
			</defs>

			<g fill="none" fillRule="evenodd">
				<mask id="b" fill="#fff">
					<use xlinkHref="#a"/>
				</mask>
				<path
					fill={props.fill || "currentColor"}
					{...rest}
					d="M16.875 15.583a.365.365 0 0 1-.375.354h-15c-.207 0-.375-.159-.375-.354V3.01c0-.195.168-.354.375-.354h2.438V3.72c0 .293.251.53.562.53.31 0 .563-.237.563-.53V2.656h3.375V3.72c0 .293.252.53.562.53.31 0 .563-.237.563-.53V2.656h3.374V3.72c0 .293.252.53.563.53.311 0 .563-.237.563-.53V2.656H16.5c.207 0 .375.159.375.354v12.573zM16.5 1.593h-2.438V.532c0-.294-.25-.531-.562-.531-.311 0-.563.237-.563.531v1.063H9.563V.53C9.563.237 9.31 0 9 0c-.31 0-.563.237-.563.531v1.063H5.063V.53C5.063.237 4.81 0 4.5 0c-.31 0-.563.237-.563.531v1.063H1.5c-.828 0-1.5.633-1.5 1.416v12.573C0 16.366.672 17 1.5 17h15c.829 0 1.5-.634 1.5-1.417V3.01c0-.783-.671-1.416-1.5-1.416z"
					mask="url(#b)"
				/>
				<path
					fill={props.fill || "currentColor"}
					{...rest}
					d="M4 8h2V6H4zm0 3h2V9H4zm0 3h2v-2H4zm4 0h2v-2H8zm0-3h2V9H8zm0-3h2V6H8zm4 6h2v-2h-2zm0-3h2V9h-2zm0-3h2V6h-2z"
				/>
			</g>
		</svg>
	);
};

export const Bars = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 1792 1792">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M1664 1344v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V832q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V320q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
			/>
		</svg>
	);
};

export const checkBoxIcon = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="10 145 17 17">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M 25 149.663 L 24.128 148.79 L 16.445 156.473 L 12.872 152.9 L 12 153.773 L 16.317 158.092 L 16.44 158.21 L 16.57 158.092 L 25 149.663 L 25 149.663 Z"
			/>
		</svg>
	);
};

export const wrench = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg width={size || width} height={size || height} className={styles} viewBox="0 0 20 20">
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M18,3.13v2.893c-0.375,1.213-1.181,2.236-2.231,2.874c-0.758,0.466-1.643,0.733-2.592,0.733 s-1.838-0.268-2.595-0.733c-0.486-0.294-0.921-0.672-1.283-1.11c-0.744-0.9-1.192-2.062-1.192-3.336 c0-1.271,0.449-2.431,1.192-3.332C9.661,0.672,10.096,0.297,10.582,0h5.179c0.004,0,0.012,0.004,0.019,0.012L13.24,2.596 l-0.731,0.748c-0.163,0.29-0.258,0.618-0.258,0.98c0,1.103,0.878,1.988,1.949,1.988c0.323,0,0.63-0.076,0.901-0.218l0.829-0.854 L18,3.13z"
			/>
			<path
				fill={props.fill || "currentColor"}
				{...rest}
				d="M7.555,7.106l-6.396,6.522l-0.862,0.884C0.106,14.855,0,15.239,0,15.657C0,16.95,1.025,18,2.291,18 c0.381,0,0.739-0.091,1.058-0.264l0.975-0.998l6.333-6.457L7.555,7.106z M3.926,15.176c-0.079,0.154-0.202,0.28-0.348,0.361 c-0.112,0.057-0.24,0.092-0.375,0.092c-0.453,0-0.817-0.372-0.817-0.834c0-0.152,0.034-0.289,0.101-0.41 c0.072-0.13,0.185-0.246,0.314-0.312c0.117-0.076,0.251-0.116,0.402-0.116c0.448,0,0.817,0.376,0.817,0.838 C4.02,14.937,3.987,15.062,3.926,15.176z"
			/>
		</svg>
	);
};
