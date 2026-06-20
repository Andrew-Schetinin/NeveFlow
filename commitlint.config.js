export default {
	extends: ["@commitlint/config-conventional"],
	plugins: [
		{
			rules: {
				"scope-issue-format": (parsed) => [
					/^#\d+$/.test(parsed.scope ?? ""),
					"scope must be a GitHub issue number (e.g. #42)",
				],
			},
		},
	],
	rules: {
		"scope-empty": [2, "never"],
		"scope-case": [0],
		"scope-issue-format": [2, "always"],
	},
};
