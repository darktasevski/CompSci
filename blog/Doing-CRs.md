---
title: How to do great code reviews
date: 2021-02-01
description:
author: Darkø Tasevski
---

There is a consensus that code reviews are an essential aspect of highly effective teams. However, it's all too common to see code reviews that barely scratch the surface or offer feedback that is unclear or hard to act upon. This robs the team of the opportunity to speed up learning, share knowledge and context, and raise the quality bar on the resulting code.

Let's talk about how we can make it much better.

## Keep Your Pull Requests Small

As simple as this sounds, this is easily the most impactful technique you can follow to level up your code review workflow. There are two fundamental reasons why this works:

-   It's mentally more comfortable to start and complete a review for a small piece. Larger PRs will naturally make reviewers delay and procrastinate examining the work, and they are more likely to be interrupted mid-review.
-   As a reviewer, it's exponentially harder to dive deep if the PR is long. The more code there is to examine, the bigger the mental map we need to build to understand the whole piece. Breaking up your work in smaller chunks increases your chances of getting faster and more in-depth reviews.

The guideline would be around 200-300 lines of code affected. If we go above this threshold, we should almost always break up the work into smaller blocks. Of course, we need to be careful about breaking up PRs into chunks that are too small since this means reviewers may need to inspect several PRs to understand the overall picture.

## Use Draft PRs

It's common practice to use Work In Progress (WIP) PRs to elicit early feedback whose goal is validating direction (choice of algorithm, design, API, etc.). Early changes mean less wasted effort on details, polish, documentation, etc. As an author, this means you need to be open to changing the direction of your work.

## One PR Per Concern

In addition to line count, another dimension to consider is how many matters your unit of work is trying to address. A matter may be a feature, a bugfix, a dependency upgrade, an API change, etc. Are you introducing a new feature while refactoring at the same time? Fixing two bugs in one shot or introducing a library upgrade and a new service?

Breaking down PRs into individual concerns has the following effects:

-   **More independent review units** and therefore better review quality
-   **Fewer affected people**, therefore fewer domains of expertise to gather
-   **Atomicity of rollbacks**, the ability to roll back a small commit or PR. This is valuable because if something goes wrong, it will be easier to identify where errors were introduced and what to roll back.
-   **Separating easy stuff from hard stuff**. Imagine a new feature that requires refactoring a frequently used API. You change the API, update a dozen call-sites, and then implement your feature. 80% of your changes are apparent and skimmable with no functional changes. In comparison, 20% are new code that needs careful attention to test coverage, intended behavior, error handling, etc., and will likely go through multiple revisions. With each revision, the reviewer will need to skim through all the changes to find the relevant bits. By splitting this into two PRs, it becomes easy to quickly land most of the work and optimize the review effort applied to the more challenging work.

## Focus on the Code, Not the Person

I know that almost all of us sometimes in our careers had a situation where you go into CR with low expectations and then realize that the situation is much worse and that the new code is a pile of garbage. When this happens, we should give our criticism in a non-biased way, focusing on the code and not on the person who wrote that code.

Focus on the code, not the person practice refers to communication styles and relationships between people. Fundamentally, it's about trying to make the product better and avoid the author perceiving a review as a personal criticism.

Here are some tips you can follow:

-   As a reviewer, think, _This is our code, how can we improve on it?_
-   Offer positive remarks! If you see something done well, comment on it. This reinforces good work and helps the author balance suggestions for improvement.
-   As an author, assume the best intention and don't take comments personally.

Ultimately, a code review is a learning and teaching opportunity and should be celebrated as such.

## Give Your Reviewers introduction to changes

Last but not least, the description of your PR is crucial. Depending on who you picked for review, different people will have a different context. The onus is on the author to help reviewers by providing essential information or links to more context to produce meaningful feedback.

Some questions you can include in your PR templates:

-   Why is this PR necessary?
-   Who benefits from this?
-   What could go wrong?
-   What other approaches did you consider? Why did you decide on this approach?
-   What other systems does this affect?

Good code is not only bug-free; it is also useful! As an author, ensure that your PR description ties your code back to your team's objectives, ideally with a link to a feature or bug description in your backlog. As a reviewer, start with the PR description; if it's incomplete, send it back before attempting to judge the code's suitability against undefined objectives. And remember, sometimes the best outcome of a code review is to realize that the code isn't needed at all!

---

## Profit?

By adopting some of the techniques above, you can substantially impact your software building process's speed and quality. But beyond that, there's the potential for a cultural effect:

-   Teams will build a common understanding. The group understands your work better, and you're not the only person capable of evolving any one area of the codebase.
-   Teams will adopt a sense of shared responsibility. If something breaks, it's not one person's code that needs fixing. It's the team's work that needs fixing.
-   Anyone person in a team should be able to take a holiday and disconnect from work for a number of days without risking the business or stressing about checking email to make sure the world didn't end.

## References

1. Shane McIntosh, Yasutaka Kamei, Bram Adams, Ahmed E. Hassan, An Empirical Study of the Impact of Modern Code Review Practices on Software Quality, [sail.cs.queensu.ca](https://sail.cs.queensu.ca/Downloads/EMSE_AnEmpiricalStudyOfTheImpactOfModernCodeReviewPracticesOnSoftwareQuality.pdf)
2. Alejandro Lujan Toro, Great Code Reviews - The Superpower Your Team Needs, 2020, [shopify.engineering](https://shopify.engineering/great-code-reviews)
