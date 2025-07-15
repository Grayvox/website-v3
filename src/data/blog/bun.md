---
title: 'Joining the Bun hype train'
tag: '#webdev'
date: 'Jan 22 2025'
---

Two major grievances I've always had with the JavaScript ecosystem - Node.js can be painful, and your package list has to be miles long for, sometimes, dumb reasons. And [Bun](https://bun.sh) fixed both of these.

I know, I know, I'm one more guy that sounds like he's praising Bun - actually, scratch that, I full on *am* praising Bun. But it's for good reason. I have my friend [Perny](https://github.com/pernydev) to thank for getting me on the train of using Bun for the construction of our new platform, [stable.dev](https://stable.dev) (Which you should definitely check out btw). But it's not only the platform that got me into it, but also Bun 1.2 that hooked me after watching the intro video to it.

### I wanted pnpm :(

Genuinely I hoped I would without having to use something else, because I loved pnpm. It just worked. Then Perny told me he wanted to use Bun, and since he's the boss (and a friend), I easily rolled with it. But boy, was I wrong to even think I'd have to adapt.

Bun is just as it says it is, a drop in replacement for Node. There *is* no transition, you just get unmatched speeds and tons of built in features that would've required either a third party package or a less efficient Node module. Most developers would've told me to just read the docs and I could've learned this a while ago - but honestly, I just didn't see a reason to try something so new just yet. I planned to, but kept putting it off.

Now, I was in a situation where I needed to know it, and it became quickly apparent how much worth this technology could bring my development process. Heck, I literally discovered how to read a TOML file right in Bun versus getting a whole package just for that with Node. That kind of idea is one I can get behind - easy to use features that make your life easier, without bloating your project.

Of course, I still had issues - mainly the fact that the binary lock file they used was a pain to use on Git. But that changed quickly. Enter: Bun 1.2 and the text lock file.

### Deno's video was still better

Deno v2 still manages to have the best release video I've ever seen of any JavaScript framework, but Bun 1.2 just gave me severe amounts of joy to listen to. Jarred Sumner and his team had no shortage of great features such as:

- The usual update of getting close to full Node.js compatibility
- Built-in S3 support via `Bun.s3`
- Built-in Postgres client via `Bun.sql`

and, after all this time...

- A text based lockfile, `bun.lock`, to replace the binary lock file

Node.js compatibility updates are the usual, but S3 support and Postgres caught me - especially the fact that the Postgres client utilizes backticks, string escapes, and user prepared statements to prevent SQL injection. Oh, and MySQL support has an [open PR](https://github.com/oven-sh/bun/pull/15274).

And for examples, I'll borrow from the Bun blog real quick:

```javascript
import { sql } from "bun";

const seniorAge = 65;
const seniorUsers = await sql`
  SELECT name, age FROM users
  WHERE age >= ${seniorAge}
`;

console.log(seniorUsers); // [{ name: "Bob", age: 65 }]
```

It's kind of awesome, honestly.

Meanwhile, on the `bun.lock` side of things, we have a JSONC file (JSON but with comments and trailing commas) to replace the all too painful binary lock:

```jsonc
// bun.lock
{
  "lockfileVersion": 0,
  "packages": [
    ["express@4.21.2", /* ... */, "sha512-..."],
    ["body-parser@1.20.3", /* ... */],
    /* ... and more */
  ],
  "workspaces": { /* ... */ },
}
```

This, coupled with the fact I was already enjoying reading through all the things Bun includes that Node.js doesn't, made me entirely sold on using it going forward.

I haven't even covered even close to the entire list of updates and changes, so if you get curious, read their official blog post [here](https://bun.sh/blog/bun-v1.2).

### But wait, what about Deno?

Deno deserves lots of love too - not just for that amazing trailer for v2. I mean, [built in testing](https://docs.deno.com/runtime/fundamentals/testing/), [hightened security](https://docs.deno.com/runtime/fundamentals/security/), and [JSR](https://jsr.io/docs/introduction) are all incredible stuff. That's not even considering the fact that v2 makes Deno [backwards compatible with Node.js and npm projects](https://deno.com/blog/v2.0#backwards-compatible-forward-thinking). Oh, and TypeScript actually works (as it does with Bun too).

Will I end up using Deno for stuff? Probably, I mean those features aren't lies. Comparing the two though is outside the scope of this post, so I'll have to get back to you on that one.

### A toasty conclusion

Simply put, through all of this, Bun makes me happy to use JavaScript (or TypeScript). I doubt I'll be using a project without it, unless I opt for Deno to experiment (or even adopt for good... possibly). My old projects will likely remain on Node.js though for now.

Hopefully, I'll get around to migrating this website to Bun, but we're not quite there yet.
