import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Save a new message
export const sendMessage = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("messages", {
      name: args.name,
      email: args.email,
      message: args.message,
      createdAt: Date.now(),
    });
  },
});

// Fetch all messages (for you only)
export const getMessages = query(async (ctx) => {
  return await ctx.db.query("messages").order("desc").collect();
});