"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    schema: "./src/schema.graphql",
    generates: {
        "./src/types.ts": {
            plugins: ["typescript", "typescript-resolvers"],
        },
    },
};
exports.default = config;
//# sourceMappingURL=codegen.js.map