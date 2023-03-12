export type Post = {
	url: string | URL | null | undefined;
	frontmatter: { tags: (string | undefined)[]; title: unknown };
};
