---
layout: ../../layouts/BlogPost.astro
title: Getting Started With Deno!
published_at: 2022-03-01
name: Ian Bull
description: Deno. A Secure JavaScript Runtime.
twitter: "@irbull"
twitter_link: https://twitter.com/irbull
heroImage: /blog/lauren-mancke-aOC7TSLb1o8-unsplash.jpg
---

At [Mediform](https://mediform.io) we've been moving our server side stack to
[Deno](https://deno.land). **Deno** is a **modern** runtime for **JavaScript**
and **TypeScript** with a focus on security. Deno supports TypeScript out-of-the
box, ships as a single executable and it has a number of built-in utilities like
a _compiler_ _formatter_ and a _linter_.

In this post I will introduce you to Deno through a tutorial. By the end of this
tutorial you will have setup a Deno development environment in
[Visual Studio Code](https://code.visualstudio.com/) and created a standalone
Hello, World application served over HTTP.

## 🦖 Setup

Deno comes as a single executable that can be used for building, testing,
linting and formatting. The Deno executable can run as an interpreter for
TypeScript or JavaScript. It can be used as a Run-Eval-Print-Loop (REPL)
interactive shell and it can compile TypeScript or JavaScript to a self
contained executable.

The Deno executable contains a V8 JavaScript engine that is used for all
JavaScript execution. It also contains a TypeScript compiler and a number of
built in library functions including File access, Fetch and an HTTP Server.

Since Deno ships as a single executable installation is easy. There is an
installer project and Deno is available through many different package managers,
but if you're just getting started, you can just download the single executable.
Unlike Python, Node or Java, installing multiple versions of Deno is simple --
just download multiple versions of Deno. There are no paths that must be
configured, no registries to edit and no shared libraries to manage.

To get started with Deno, either follow the instructions on the
[Installation Page](https://deno.land/#installation), or download the pre-built
binary for your system from the
[Latest Release](https://github.com/denoland/deno/releases).

To use the REPL interactive shell, type `deno`.
![Hello-Deno](/blog/deno-shell.gif)

## 🔧 Tool Support

Deno provides an official
[VSCode Extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
powered by the Deno Language Server. The language server is part of the Deno
executable, so no other dependencies are needed. Once the extension is
installed, your workspace can be configured as a Deno project by using the
_Deno: Initialize Workspace Configuration_ from the command pallette.
![Deno-VSCode](/blog/deno-cmd.gif)

Since Deno can execute TypeScript directly, there is no need for a build or
transpile step. All Dependency management is done through `import` statements,
removing the need for an `install` step.

For example, to create a program that generates random names using a Random Name
Generator, you can simply reference the library from your TypeScript file and
execute it directly in VSCode.

<img src="/blog/deno-first-program.gif" alt="drawing" width="1100"/>

## 🔗 Standard Library

Deno includes a powerful [standard library](https://deno.land/std) with no
external dependencies. The Deno standard library was heavily influenced by the
GoLang standard library. There are utilities for managing collections, encoding
and decoding text, cryptography APIs, filesystem operations, a powerful
webserver and more.

In addition to the standard library, Deno.land hosts a large collection of
[Third Party Modules](https://deno.land/x). Third party modules include
everything from a Lodash port, to Middleware modules, to powerful argument
processors.

In future posts we will look at many of the library functions available and dive
into how to use them.

## 🎉 Hello, World

Finally, we will use the basic HTTP Serer that ships with the standard library
to create and serve a Hello, World! application.

```typescript
// main.ts
import { serve } from "https://deno.land/std@0.127.0/http/server.ts";

const port = 8080;

const handler = (): Response => {
  return new Response("Hello, Deno World! 🦖", { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
```

To run this application, use `deno run --allow-net main.ts`. The `--allow-net`
flag enables the application to access the network interface to start the
webserver. We will look at other permissions in a subsequent article.
