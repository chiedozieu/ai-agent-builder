import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// @snippet start schema
export default defineSchema({
  UserTable: defineTable({
    name: v.string(),
    email: v.string(),
    subscription: v.optional(v.string()),
    // imageUrl: v.optional(v.string()),
    token: v.number(),
  }),
});