# I've read... The Pragmatic Programmer

Truly a classic. It's definitely a must-read book for programmers and even people managing programmers. Initially released in 1999, The Pragmatic Programmer is a book about becoming a Pragmatic Programmer - programmer that's a true professional in their craft. And, even though it was published twenty years ago, it's fascinating to see the struggles we still face day in and day out discussed even then.

When I first started reading this book, I've expected a lot of technical details and lessons, which is probably one of the reasons why I've been avoiding this book so far. I mean, it's **twenty** years old, and in today's pace of technology, technical details do not stay up to date very long. But instead, this book concerns the most challenging parts of the programmer's career: writing scalable and maintainable software and scaling themselves as professionals.

> _There are code snippets_, but the authors are aware of the code and techniques getting out of date in a matter of years, so the book is not focusing on them too much.

In general, there are not many surprises in what the book's authors are trying to deliver. Any programmer who cares about their craft, has no fear of change, and already has a few years of experience will already know many themes explored in this book. In my opinion, most programmers are aware of the guidelines this book is preaching, but they are also quick on finding excuses to ignore them.

_The Pragmatic Programmer_ centers on how to use software to solve problems effectively and how to grow as the developer pragmatically; not just how to be a good programmer, but also how to solve the complex issues that surround coding, such as:

-   Writing clean code through [DRY][1] (Don't repeat yourself) and [YAGNI][2] (You aren't gonna need it)
-   How to estimate the software delivery.
-   How to institute change when others are hesitant.
-   How to combat stagnancy as a developer.
-   How to make the software processes resilient and efficient through automation and testing.

The examples and explanations are not abstract or far-fetched but are somewhat real-world applications of things you could see in the industry (though some stuff is outdated).

Some of the significant points of the book that I'm going to cover are:

-   We should take **responsibility** for our code and decisions.
-   **Do not leave broken windows unrepaired.**
-   **Think critically**
-   **Know your tools**
-   **Program and refactor deliberately**
-   **Use Version Control**
-   **Test your code**
-   **Automate all the things**

Hunt and Thomas are stating that the last three things from the list above are the essence of the Pragmatic Starter Kit, and that should be the three legs that support every project.

## **Responsibility**

When you have responsibility for something, you should prepare yourself to be held accountable. If you make mistakes and cannot fulfill those responsibilities, you have to make up for them and find a solution. Don't give excuses and play the [finger-pointing game][3]. When you make a mistake (to err is human) or an error in judgment, admit it honestly and try to offer alternatives. Don't blame all the problems on a vendor, a programming language, management, or your coworkers. Any of these may play a role, but it is up to you to provide solutions, not excuses.

Don't approach anyone to tell them that something couldn't be done before you are entirely sure that that's correct. Additionally, don't just say you can't do it, like it's the end of the story. Instead, provide options and explain what _can_ be done to salvage the situation.

As the authors of the book say:

> Try to flush out the lame excuses before voicing them aloud. Does your excuse sound reasonable or stupid? How's it going to sound to your boss? (...) Try to flush out the lame excuses before voicing them aloud. If you must, tell your cat first.

## Broken windows

There is a story about research studying the effect of broken windows on urban areas in the book.

> One broken window, left unrepaired for any substantial length of time, instills in the inhabitants of the building a sense of abandonment—a sense that the powers that be don't care about the building. So another window gets broken. People start littering. Graffiti appears. Serious structural damage begins. In a relatively short span of time, the building becomes damaged beyond the owner's desire to fix it, and the sense of abandonment becomes a reality.

We, programmers, have probably seen this in some codebases. We see some broken code and think it's okay to leave it. We'll just come back when there is not enough work and fix it. But, unfortunately, this is just the first step to degradation of code quality and serious tech debt. After one broken window, the others will start appearing more frequently, and this is usually the time when developers start looking for a new job, leaving a dumpster fire behind.

So, (please), **don't leave "broken windows" (bad designs, wrong decisions, or poor code) unrepaired**. Fix each one as soon as it is discovered. If there is insufficient time to fix it properly, create a ticket, fix the most offending issue if possible, comment out the code, or leave a screaming comment. Ultimately, you should take action to prevent further damage and show that you're on top of the situation.

Do not fall to [the Bystander effect][4], hoping that other developers will fix the problems. Instead, take the initiative, and be a catalyst for change.

## Think critically

You should think critically about what you read and hear. You need to ensure that your knowledge and opinions are unswayed by either vendor or media hype. Beware of the salesman who insists that their solution provides the only answer; it may or may not apply to you and your project, or they might be just trying to sell you the snake oil.

Try to ask and think with the following questions when you want to get to the bottom of something:

-   **Ask the "Five Whys"** - Ask a question, and get an answer. Then, dig deeper by asking another "why?" Then, repeat the question as long as it's reasonable to do. You might be able to get closer to a root cause this way.
-   **Who does this benefit?** - It may sound cynical, but following the money can be a helpful path to analyze.
-   **What's the context?** - Everything occurs in its context, which is why "one size fits all" solutions often don't work. Good questions to consider are "best for who?" What are the prerequisites, what are the consequences, short and long term?
-   **When or Where would this work?** - Under what circumstances? Don't stop with first-order thinking (what will happen next), but use second-order thinking: what will happen after that?
-   **Why is this a problem?** - Is there an underlying model? How does the underlying model work? Do you even have the same problem?

## Know your tools

This could seem like simple advice, but we are surrounded by a wide range of tools in our daily jobs. I don't know the ins and outs for each one I'm using, for sure.

For example, a few days ago, I've learned about [_git add --patch_][11] functionality that allows us to stage only parts of the changed files.

While I'm not sure that it would be advisable to learn everything possible about tools we're using for development, learning about stuff that can make you productive is definitely something we should strive for. For example, pay attention to your daily flow and see what manual actions you are performing most often. Then look if those can be automated or improved somehow.

The book teaches us that it's essential to find the proper tools before starting the development. By essential tools, it's not just the IDE but also the programming language and services. The more you are versed with different technologies, the wider the picture you'll have.

[So before blindly jumping into coding, take a step back][10]. Understand why the problem or the feature at hand needs to be built in the first place. Next, find the right tools for the job and start coding.

Some of the authors' recommendations:

-   Use plain text for everything. Avoid using binary formats to keep knowledge (such as MS Word).
-   Learn some scripting language well to use it for text manipulation (Js, Ruby, Python).
-   Learn shell (awk, grep, etc.)
-   Have your dotfiles configured and backup them regularly

## Program and refactor deliberately

> _In the face of ambiguity, refuse the temptation to guess._

Be wary of premature optimization. It's always a good idea to make sure an algorithm is a bottleneck before investing your precious time trying to improve it. The less code is there, the fewer chances for bugs to happen.

**Always be aware of what you are doing** - if you don't understand the background of the feature you're implementing, you may fall victim to false assumptions. Don't blindly copy/paste code you don't understand, and don't do shotgun programming or programming by coincidence, as the book's authors call it. For example, suppose you don't know why or how your program works. In that case, you'll probably end up in a situation where you don't understand why the code is failing, which would usually result in spending a significant amount of time chasing the piece of code until you (if) know how it was working in the first place.

A litmus test for the above - can you explain your code to a more junior programmer? If not, perhaps you are relying on coincidences.

As mentioned in the previous section, don't jump to coding right away. Instead, **create a plan**, even if it's just a to-do list written as comments in your editor or on a napkin. After that, prioritize your efforts by spending time first on the complex parts of the problem.

**Don't be a slave to history,** meaning that you should not let existing code dictate future code. All code can be replaced if it is no longer appropriate. Even within one program, don't let what you've already done constrain what you do next, be ready to refactor, but keep in mind that this decision may impact the project schedule. The assumption here is that the impact of doing refactor will be less than the cost of not making the change.

Martin Fowler defines refactoring as a:

> Disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior.

The critical parts of this definition are that:

1. The activity is disciplined, not a free-for-all
2. External behavior does not change; this is not the time to add features

To guarantee that the external behavior hasn't changed, you need good (preferably) automated unit testing that validates the code's behavior.

## Use Version Control

This advice sounds a bit outdated, but it's worth a mention. Today's software development landscape is very different from twenty years ago, at least when version control is considered. `git` is deeply entrenched in the development flow, and I, myself, can't imagine working on a project without version control.

Additionally, the book suggests using version control for everything we deem important, notes and documentation as an example.

My take on this is that besides the version control, you should also strive to keep your git history clean and searchable (by using semantic commits, for example) and utilize the VCS for automation whenever possible.

## Test your code

Yet another common-sense advice. And still, one that's not utilized as much as it should be, in most cases. Testing was important twenty years ago, but today it's even more critical when we account for a growing number of programs that can [quickly][5] [kill][6] [people][7] in case of malfunction.

Book authors even suggest that the test code should be larger than the program source code and that we should treat the test code with the same care as any production code. Keep it decoupled, clean, and robust. Don't rely on unreliable things like the absolute position of pages in a GUI system, exact timestamps in a server log, or the exact wording of error messages. Testing for these sorts of things will result in fragile (flaky) tests.

The pragmatic programmer is ruthlessly testing their code. The time it takes to write test code is worth the effort, as it ends up being much cheaper in the long run, with a chance of producing a product with close to zero defects.

## Automate all the things

Automation is the core principle of being a pragmatic programmer. You should find whatever manual task you've or someone on your team has been doing and automate them. Automation leaves less space for human error and drastically improves the processes.

Automation also plays nicely with the other two "legs" of the pragmatic starter kit, version control, and tests. You should automate your processes to run tests on VSC changes and, if stable enough, even deploy the code to production on demand.

The more stuff you automate, the more time you'll have to dedicate to the real problems. But (!), don't fall into [the trap of automating something that's not really worth the effort][8].

![obligatory XKCD](https://imgs.xkcd.com/comics/is_it_worth_the_time.png)

## Pragmatic Teams

> "Great things in business are never done by one person. They're done by a team of people."
> <cite>-- Steve Jobs</cite>

Teams as a whole should not tolerate broken windows—those slight imperfections that no one fixes. Instead, the team must take responsibility for the quality of the product.

As a final note, the book says that we, as individuals, should take pride in our work and leave our mark on it. However, we still need to balance this out when working in teams to not become prejudiced in favor of our code and against our coworkers. You shouldn't jealously defend your code against intruders, and you should treat other people's code with respect. The Golden Rule ("Do unto others as you would have them do unto you") and a foundation of mutual respect among the developers are critical to make this work.

Anonymity can provide a breeding ground for sloppiness, mistakes, sloth, and bad code, especially on large projects. It becomes too easy to see yourself as just a cog in the wheel, producing lame excuses in endless status reports instead of good code.

While code must be owned, it doesn't have to be owned by an individual. In fact, Kent Beck's eXtreme Programming recommends [collective ownership of code][9] (but this also requires additional practices, such as pair programming, to guard against the dangers of anonymity).

In the end, what you want of your career as a pragmatic programmer is for other people to recognize your signature. They see the feature or program built by you and expect it to be solid, well-written, tested, and documented.

## Conclusion

I suggest this book to everyone; it's an easy and interesting read, even though senior developers are less likely to learn something new from it. Also, this is just a quick and short(_ish_) overview of the book's content, I haven't covered everything I've learned from it, and there is a lot of stuff that's also worth reading about, such as Orthogonality, Design by Contract, debugging, and Tracer Bullets technique, and more.

[1]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[2]: https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it
[3]: https://en.wikipedia.org/wiki/Cover_your_ass
[4]: https://en.wikipedia.org/wiki/Bystander_effect
[5]: https://en.wikipedia.org/wiki/Therac-25
[6]: https://en.wikipedia.org/wiki/Multidata_Systems_International#accident
[7]: https://en.wikipedia.org/wiki/Boeing_737_MAX_groundings
[8]: https://xkcd.com/1205/
[9]: http://www.extremeprogramming.org/rules/collective.html
[10]: https://marcel.is/quench/
[11]: https://johnkary.net/blog/git-add-p-the-most-powerful-git-feature-youre-not-using-yet/
