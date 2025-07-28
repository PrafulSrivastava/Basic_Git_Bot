export default (app) => {
  app.log.info("Yay, the app was loaded!");

  app.on("issue_comment.created", async (context) => {
    const comment = context.payload.comment;
    // ─── Ignore Bot‑authored comments ─────────────────────────────────────
    if (comment.user.type === "Bot") {
      app.log.info(`Skipping bot comment by ${comment.user.login}`);
      return;
    }
    // ──────────────────────────────────────────────────────────────────────

    const issue = context.payload.issue;
    app.log.info(`💬 New comment on issue #${issue.number}: "${comment.body}" by ${comment.user.login}`);

    await context.octokit.issues.createComment(
      context.issue({ body: `Thanks for your comment, @${comment.user.login}!` })
    );
  });
};
