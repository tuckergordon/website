---
title: Using Markdown Files in Storybook
description: How to use markdown .md files (e.g. README.md) directly in Storybook
date: '2025-02-15'
published: true
---

Here's a scenario I ran into at work recently: we have an internal React component library that we
maintain that has a `README.md` file for each component. We also use
[Storybook](https://storybook.js.org/) to develop components and provide examples on how to use
them. We host a static Storybook site (here's an example of what such a thing looks like from
[Supabase](https://unruffled-hoover-de9320.netlify.app/?path=/story/introduction--page)) that we
distribute to our users.

We wanted to be able to render each component's `README` within its route in Storybook. E.g. within
the Storybook UI, we wanted something like this

```
Foo/
  Docs
  Story1
  Story2
```

where `Docs` would render the `README`.

## The Problem

The catch was that we wanted to keep the `README`s as markdown (`.md`) files so that they can be
correctly rendered on GitHub and anywhere else our repo's code may appear. Unfortunately, as of
version 7.0, Storybook
[no longer supports](https://github.com/storybookjs/storybook/issues/24444#issuecomment-1758520524)
using markdown files directly as docs. The options seemed to be:

1. Convert all of our `README.md` files to `README.mdx`, which would allow them to render in
   Storybook as intended. This is what we went with originally before running into issues with `mdx`
   rendering in GitHub and with Prettier not being able to properly format `mdx` (more info in this
   [SO post](https://stackoverflow.com/questions/79400101/prettier-ignore-inside-mdx-storybook-github)).
2. Add an additional `.mdx` file for each component that would simply import the `README.md` file
   and render it. While this would work, it's adds a lot of clutter.
3. Use [autodocs](https://storybook.js.org/docs/writing-docs/autodocs) and copy information from the
   `README.md` into the stories. This would mean duplicating and having to maintain docs across two
   places, which we wanted to avoid.

Unsatisfied with these options, I came up with a workaround that allows us to rely only on
`README.md` files but have them show up in the Storybook UI.

## The Solution

What I wanted was a way to get the content of the `README.md` files to render in the Storybook UI
while minimizing the amount of code added to each story. In order to do this, I figured out a way to
import and then export the `README.md` contents from the story and then render it using a
[custom docs template](https://storybook.js.org/docs/writing-docs/autodocs#write-a-custom-template).
Here's how that worked:

### 1. Enable autodocs

We'll need [autodocs](https://storybook.js.org/docs/writing-docs/autodocs) enabled in order to use a
custom template for each component's docs.

```tsx
// .storybook/preview.tsx
const preview = {
  // ...
  tags: ['autodocs'],
};
```

### 2. Export README markdown content within each story

Within each component's `.stories.tsx` file, we can add the following:

```tsx
import README from './README.md?raw';

export const Docs = { README };
```

This imports the contents of the `README.md` file and then exports them under a named export called
`Docs`. This will result in a new `Docs` story showing up in the Storybook UI. There's a little bit
of magic though because `Docs` is a keyword for Storybook and the story will show up with the
document icon as opposed to a normal story.

While this is a step in the right direction, the `Docs` story will still render with the autodocs
default, which shows all the stories (including a new empty `Docs` story). Since we've exported the
contents of the `README.md` though, we can make of use of it elsewhere...

### 3. Create a custom docs template

Bringing it all together, we can create a new custom docs template that autodocs will use for each
component:

```tsx
// .storybook/autodocsTemplate.tsx
// prettier-ignore
import { Title, Subtitle, Description, Primary, Controls, Stories, useOf, Markdown } from '@storybook/blocks';
import React from 'react';

const defaultTemplate = (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <Controls />
    <Stories />
  </>
);

export const autodocsTemplate = ({ of }) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta']);

  // If story has exported a `README` parameter, render it as a Markdown
  // instead of the default template
  if (resolvedOf.type === 'story' && resolvedOf.story.moduleExport?.README) {
    return <Markdown>{resolvedOf.story.moduleExport.README}</Markdown>;
  }
  return defaultTemplate;
};
```

This uses the [useOf](https://storybook.js.org/docs/api/doc-blocks/doc-block-useof) hook to access
metadata from the story. We can use `resolvedOf.story.moduleExport.README` to access the `README`
object that we exposed in step 2, and then render it inside a `<Markdown>` block. `defaultTemplate`
is just what autodocs normally shows, which we'll use for any stories that don't export a readme.

Then all we need to do is setup Storybook to use our template:

```tsx
// .storybook/preview.tsx
import { autoDocsTemplate } from './autodocsTemplate';

const preview = {
  parameters: {
    // ...
    docs: { page: autodocsTemplate },
  },
  tags: ['autodocs'],
};
```

...and we're golden! For any component that exposes the `Docs: { README }` object, Storybook will
now render the contents of its README as a `Docs` Story.

## Final thoughts

This is definitely a bit of a hack and I wish Storybook would allow for this natively. It also
relies on a few assumptions, such as Storybook giving `Docs` special treatment. But I love how
little code it requires to be added to each component and that it allows us to keep using `.md`
instead of converting everything to `.mdx`!
