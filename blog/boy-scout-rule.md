---
title: Leave it better than you found it
date: 2021-02-01
description:
author: Darkø Tasevski
---

> Applying The Boy Scout rule in coding

Robert Baden-Powell is attributed with the following quote:

> Try and leave this world a little better than you found it, and when your turn comes to die, you can die happy in feeling that at any rate, you have not wasted your time but have done your best.

Uncle Bob (Robert C. Martin) has further interpreted the quote as:

> Always leave the code you're editing a little better than you found it

and

> Indeed, the act of leaving a mess in the code should be as socially unacceptable as littering. It should be something that just isn't done.

As software is developed and evolves, technical debt is said to increase. Members of staff change, yet the code stays the same, and features are added to the code. Keeping code in good condition and clean makes sense, and code should represent your understanding of the code at any given time.

I've spent a lot of my time maintaining working code. I think that is more typical of software developers than working in greenfield development. Yes, there are jobs where you are writing more new code than maintaining, upgrading, bug fixing and improving old code (startups and consulting for example) but in general code is expensive and people want to run it for a long time.

Often you'll jump into code to fix a bug, investigate an issue or answer a question.

When you do so, improve it. This doesn't mean you rewrite it, upgrade all the libraries it depends on, or rename all the variables.

You don't need to transform it.

But it would help if you made it better. Just clean it up a bit. Doing so makes everyone's lives only a bit better, sustainably helps the codebase, and assists the business by making its supporting infrastructure more flexible.

What are some ways to improve the code when you are in it?

## Document

Whether that is a comment that explains something tricky, a larger piece of documentation external to the code which describes how to interact with it or fixing a typo, trustworthy documentation is key to interacting with code. This is an excellent way to start improving a codebase because it has minimal impact on the actual code. Therefore it is low risk. But if you've ever had a great comment explain a confusing bit of code, you'll appreciate the time this effort can save.

You can also help with documentation by removing old, crufty docs. If you see a comment that doesn't apply, remove it. If there's cut and paste documentation that doesn't apply, get rid of it. That cleans up the code for the next person to come along (who might be you).

## Write a test or improve a test

Tests help you write maintainable, extensible code that others can change fearlessly. If you run across code that isn't tested and have time and the supporting framework to write one.

Even if it tests simple functionality such as "_can I instantiate this object_" or "_how does this function react when I pass it two null values_", an additional test will help the robustness of the code.

## Refactor it

This is one of the most flexible improvements. Refactoring code can range from renaming a variable to be relevant to its nature to an entire module's overhaul. Start small and don't get wrapped up in perfection. Make the code clearer in intent.

A warning about refactoring:

-   Don't refactor what you don't understand.
-   Discuss your plan with someone more familiar with the code; git blame is your friend.

Especially if the code is not well tested, you want to make sure you don't do more harm than good.

## Writing good code

> Good code should represent your understanding of the working of the software at any given time.

We should write code in such a way that it is clean and easy to understand. If you are writing code that you don't understand, this is the first thing that needs to be fixed in your development of software. Even if you find code that is a mess that you didn't create, there is a moral impetus on you to create software that is easy to understand, clean and maintainable going forwards into the future.

## Why?

All of these actions help others because they improve the quality of the code. They also provide examples to other developers on how to do so. For example, it is far easier to write the second test in a suite than the first. You can cut and paste a lot of the setup code and tweak only what is different. The first bit of documentation will inspire more.

Code isn't everything, but it is a crucial work output. Whenever you touch it, you should strive to leave it in a better place than it was before you did so.

## References

1. mooreds, Always leave the code better than you found it, 2020, [letterstoanewdeveloper.com](https://letterstoanewdeveloper.com/2020/11/23/always-leave-the-code-better-than-you-found-it/).
