declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"words-as-vectors.mdx": {
	id: "words-as-vectors.mdx";
  slug: "words-vectors-sparse-vectors-dense-vectors";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};
"events": {
"hello-foss.md": {
	id: "hello-foss.md";
  slug: "hello-foss-2023";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
"oss24_workshop1.md": {
	id: "oss24_workshop1.md";
  slug: "oss24-devops-101-workshop";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
"oss24_workshop2.md": {
	id: "oss24_workshop2.md";
  slug: "oss24_workshop2";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
"oss24_workshop3.md": {
	id: "oss24_workshop3.md";
  slug: "oss24_workshop3";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
"oss24_workshop4.md": {
	id: "oss24_workshop4.md";
  slug: "oss24_workshop4";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
"oss24_workshop5.md": {
	id: "oss24_workshop5.md";
  slug: "oss24_workshop5";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
"oss24_workshop6.md": {
	id: "oss24_workshop6.md";
  slug: "oss24_workshop6";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
"streamline_git_worksflows.md": {
	id: "streamline_git_worksflows.md";
  slug: "streamline_git_worksflows";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
"webdev101.md": {
	id: "webdev101.md";
  slug: "webdev101";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
};
"static": {
"code-of-conduct.md": {
	id: "code-of-conduct.md";
  slug: "code-of-conduct";
  body: string;
  collection: "static";
  data: InferEntrySchema<"static">
} & { render(): Render[".md"] };
"sponsorship.md": {
	id: "sponsorship.md";
  slug: "sponsorship";
  body: string;
  collection: "static";
  data: InferEntrySchema<"static">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
