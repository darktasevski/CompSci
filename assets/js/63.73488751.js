(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{485:function(e,t,s){"use strict";s.r(t);var o=s(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"how-are-you-writing-a-commit-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-are-you-writing-a-commit-message"}},[e._v("#")]),e._v(" How are you writing a commit message")]),e._v(" "),s("p",[e._v("I'll write a little bit about a topic that is not related to code, seemingly not that important, but it is quite practical in daily programming. "),s("strong",[e._v("How to write git commit message properly?")])]),e._v(" "),s("p",[e._v("No way of writing is right or wrong; however, if each person in a project has its own style of a commit message, then when we look at the commit history, does it look good? Not to mention when we need to search and review commits in the commit of the previous months through commit messages without any rules.")]),e._v(" "),s("p",[e._v("Commits that are non-consistent in a message format or don't follow any rules can be a problem because of many reasons:")]),e._v(" "),s("ul",[s("li",[e._v("Reading the commit message without knowing what the exact purpose of the commit was.")]),e._v(" "),s("li",[e._v("When we need to summarize changes in source code after a period of development (e.g. production release)")]),e._v(" "),s("li",[e._v("Choosing suitable new version, v1.0.0, v1.0.1, v1.1.0 or v2.0.0 etc.")]),e._v(" "),s("li",[e._v("Trying to search through commits via regex")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://imgs.xkcd.com/comics/git_commit.png",alt:"obligatory xkcd"}})]),e._v(" "),s("figcaption",[e._v("Obligatory xkcd")]),e._v(" "),s("p",[e._v("Some teams decide to implement a kind of "),s("em",[e._v("closed")]),e._v(" rules to solve some of the issues caused by fragmented code commit message styles. Why closed you ask? That is because those are local to your project. For example, in my team, we had a convention to prefix commit messages and git branches with the ticket number.")]),e._v(" "),s("p",[e._v("So are there any rules that are common to all of us and can be shared across many projects? "),s("strong",[e._v("Enter...")])]),e._v(" "),s("h2",{attrs:{id:"conventional-commits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conventional-commits"}},[e._v("#")]),e._v(" Conventional Commits")]),e._v(" "),s("p",[e._v("Conventional Commits are a set of commit message writing rules that create rules that are easy to read for both machines and humans. The machines can make use of these rules, for example, in tools for automatic versioning.")]),e._v(" "),s("p",[e._v("This set of rules corresponds to "),s("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("SemVer")]),s("OutboundLink")],1),e._v(" (Semantic Version) by the way it describes features, bug fixes, code refactors, or breaking changes made in commit messages. Currently, at the time of this writing, this set of rules Conventional Commits is in version "),s("a",{attrs:{href:"https://www.conventionalcommits.org/en/v1.0.0-beta.4/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.0.0-beta.4"),s("OutboundLink")],1),e._v(", and there may be future additions. You can refer to the implementation of conventional commits in some open projects on Github, some of the bigger ones are "),s("a",{attrs:{href:"https://github.com/electron/electron",target:"_blank",rel:"noopener noreferrer"}},[e._v("Electron"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://github.com/istanbuljs/istanbuljs",target:"_blank",rel:"noopener noreferrer"}},[e._v("IstanbulJs"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://github.com/yargs/yargs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yargs"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://github.com/karma-runner/karma",target:"_blank",rel:"noopener noreferrer"}},[e._v("Karma"),s("OutboundLink")],1),e._v(" which, if I've understood correctly, actually laid "),s("a",{attrs:{href:"https://karma-runner.github.io/0.10/dev/git-commit-msg.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("foundations"),s("OutboundLink")],1),e._v(" to semantic commits.")]),e._v(" "),s("p",[e._v("The commit message should be structured as follows:")]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("optional scope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("description"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("optional body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("optional footer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("Where:")]),e._v(" "),s("ul",[s("li",[e._v("The "),s("code",[e._v("type")]),e._v(" and "),s("code",[e._v("description")]),e._v(" are required by commit message, and all others are optional.")]),e._v(" "),s("li",[s("code",[e._v("type")]),e._v(": keyword to classify if the commit was a feature, bugfix, refactor... Followed by the "),s("code",[e._v(":")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("scope")]),e._v(": is used to categorize commits, but answers the question: what does this commit refactor | fix? It should be enclosed in parentheses immediately after "),s("code",[e._v("type")]),e._v(", e.g. "),s("code",[e._v("feat(authentication):")]),e._v(", "),s("code",[e._v("fix(parser):")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("description")]),e._v(": a short description of what was modified in the commit.")]),e._v(" "),s("li",[s("code",[e._v("body")]),e._v(": is a longer and more detailed description, necessary when the description cannot fit one line:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"feat: allow the provided config object to extend other configs\n\nBREAKING CHANGE: '),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("extends"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(' key in the config file is now used for extending other config files"')]),e._v("\n")])])]),s("ul",[s("li",[s("code",[e._v("footer")]),e._v(": some extra information such as the ID of the pull request, contributors, issue number(s)...")])]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("Some examples for a short commit message as follows:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ex1:")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"feat: implement AVOD content reels"')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ex2:")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -am "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"fix: routing issue on the main page"')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ex3 with scope:")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"fix(player): fix player initialization"')]),e._v("\n")])])]),s("h2",{attrs:{id:"semantic-versioning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#semantic-versioning"}},[e._v("#")]),e._v(" Semantic Versioning")]),e._v(" "),s("p",[e._v("Conventional Commit matches "),s("strong",[e._v("SemVer")]),e._v(" through "),s("code",[e._v("type")]),e._v(" in the commit message. Automated versioning tooling also relies on it to decide the new version for source code. With the following convention:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("fix")]),e._v(": a commit of the (bug)fix type is equal to PATCH in the SemVer.")]),e._v(" "),s("li",[s("code",[e._v("feat")]),e._v(": a commit of type feature is equal to MINOR in the SemVer.")]),e._v(" "),s("li",[e._v("Also, the keyword "),s("code",[e._v("BREAKING CHANGE")]),e._v(" in the "),s("code",[e._v("body")]),e._v(" section of the commit message will imply that this commit has a modification that makes the code no longer compatible with the previous version. Like changing the response structure of an API, the handle response part of the previous structure will of course no longer be accurate, and now we need to create an entirely new version by bumping MAJOR SemVer version.")])]),e._v(" "),s("p",[e._v("Some common "),s("code",[e._v("type")]),e._v(" uses include:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("feat")]),e._v(": a new feature for the user, not a new feature for a build script")]),e._v(" "),s("li",[s("code",[e._v("fix")]),e._v(": bug fix for the user, not a fix to a build scripts")]),e._v(" "),s("li",[s("code",[e._v("refactor")]),e._v(": refactoring production code")]),e._v(" "),s("li",[s("code",[e._v("chore")]),e._v(": updating gulp tasks etc.; no production code change")]),e._v(" "),s("li",[s("code",[e._v("docs")]),e._v(": changes to documentation")]),e._v(" "),s("li",[s("code",[e._v("style")]),e._v(": formatting, missing semicolons, etc.; no code change")]),e._v(" "),s("li",[s("code",[e._v("perf")]),e._v(": code improved in terms of processing performance")]),e._v(" "),s("li",[s("code",[e._v("vendor")]),e._v(": update version for dependencies, packages.")]),e._v(" "),s("li",[s("code",[e._v("test")]),e._v(": adding missing tests, refactoring tests; no production code change")])]),e._v(" "),s("p",[e._v("While these are the most common types that you're going to see in the wild, nothing is stopping you from creating your own types of commits.")]),e._v(" "),s("p",[e._v("Another bonus advantage from using semantic commits is that you can derive a sense of effort from git logs. For example, given below is a year worth of git commits in karma (master branch):")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /tmp/karma\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" log --pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("oneline --no-merges --since "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2017")]),e._v("/01/01 --until "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2017")]),e._v("/12/31 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cut")]),e._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('" "')]),e._v(" -f "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cut")]),e._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"("')]),e._v(" -f "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cut")]),e._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('":"')]),e._v(" -f "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sort")]),e._v(" -r "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("uniq")]),e._v(" -c "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sort")]),e._v(" -nr -k1\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("39")]),e._v(" chore\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" fix\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(" feat\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(" docs\n      "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" Try\n      "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" refactor\n")])])]),s("p",[e._v("Using the scope annotation we could further slice and dice this data into questions like which component has the most number of bug fixes?.")]),e._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),s("ul",[s("li",[e._v("Commit messages must have a prefix of a type (noun form) such as feat, fix and so on, Immediately followed by scoped (if any), a colon and space.")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -am "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test: add missing tests for promo reels"')]),e._v("\n")])])]),s("ul",[s("li",[s("code",[e._v("feat")]),e._v(" This type is required to use when adding a feature")]),e._v(" "),s("li",[s("code",[e._v("fix")]),e._v(" This type is required to use when fixing a bug")]),e._v(" "),s("li",[e._v("If there is scope, the scope must be a noun that describes the area of ​​the code change and must be placed immediately after type. Eg, feat(authentication). (Examples?)")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -am "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"refactor(auth): improve refresh token logic"')]),e._v("\n")])])]),s("ul",[s("li",[e._v("The description must be a short description of the changes in the commit and must be after the type with or without a scope.")]),e._v(" "),s("li",[e._v("A long commit can have the body right after the description, providing context for the changes. There must be a blank line between description and body.")]),e._v(" "),s("li",[e._v("The footer can be placed immediately after the body, but there must be an empty line between the body and the footer. Footers should include extended information about commits such as related pull requests, reviewers, breaking changes. Each information on one line.")]),e._v(" "),s("li",[e._v("Other types than "),s("code",[e._v("feat")]),e._v(" and "),s("code",[e._v("fix")]),e._v(" can be used in the commit messages.")]),e._v(" "),s("li",[e._v("Committing breaking changes must be specified at the beginning of the body or footer with the capitalized "),s("code",[e._v("BREAKING CHANGE")]),e._v(" keyword. Followed by a colon, space, and description. For example:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"feat(OAuth): add scopes for OAuth apps\n\nBREAKING CHANGE: environment variables now take precedence over config files."')]),e._v("\n")])])]),s("ul",[s("li",[e._v("An exclamation mark "),s("code",[e._v("!")]),e._v(" can be added before the "),s("code",[e._v("type/scope")]),e._v(" to get attention and emphasize that the commit contains breaking change.")])]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("So now, after the project is using Conventional Commits we have:")]),e._v(" "),s("ul",[s("li",[e._v("Human readable project history")]),e._v(" "),s("li",[e._v("measuring and classification of effort")]),e._v(" "),s("li",[e._v("way to use Semantic Release to automate versioning and automatically generate changelogs for the project with semantic-release plugins.")]),e._v(" "),s("li",[e._v("way to use Commit Lint to lint commit messages according to Conventional Commits.")]),e._v(" "),s("li",[e._v("and finding, filtering and analyzing the commit history is also more straightforward when you can use the regex or git tools to filter commits by "),s("code",[e._v("type")]),e._v(" or "),s("code",[e._v("scope")]),e._v(" (or both).")])]),e._v(" "),s("h3",{attrs:{id:"some-useful-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#some-useful-links"}},[e._v("#")]),e._v(" Some useful links")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.conventionalcommits.org/en/v1.0.0-beta.4/#specification",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.conventionalcommits.org/en/v1.0.0-beta.4/#specification"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://karma-runner.github.io/0.10/dev/git-commit-msg.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://karma-runner.github.io/0.10/dev/git-commit-msg.html"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://electronjs.org/docs/development/pull-requests#commit-message-guidelines",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://electronjs.org/docs/development/pull-requests#commit-message-guidelines"),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://chris.beams.io/posts/git-commit/#seven-rules",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://chris.beams.io/posts/git-commit/#seven-rules"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://codito.in/semantic-commits-for-git",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://codito.in/semantic-commits-for-git"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("Really nice "),s("a",{attrs:{href:"https://unsplash.com/photos/842ofHC6MaI",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cover Photo by Yancy Min"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Thanks for reading!")])])}),[],!1,null,null,null);t.default=a.exports}}]);