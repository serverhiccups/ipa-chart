declare module "bundle-text:*" {
	const value: string;
	export default value;
}

// declare module '*.module.scss' {
//     const value: Record<string, string>;
//     export default value;
// }

declare module "*.module.scss" {
	const classes: { [key: string]: string };
	export default classes;
}
