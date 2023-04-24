/**
 *
 * =======================================================================
 *
 * Stick scrolling Stencil component, modified from from react-sticky-box
 *
 * https://github.com/codecks-io/react-sticky-box
 *
 * =======================================================================
 *
 * Original License & Credit:
 *
 * ISC License
 *
 * Copyright (c) 2022, Daniel Berndt (modified into Stencil by Zack Kollar)
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * =======================================================================
 */
export declare class StickyScroller {
  startOffset: number;
  endOffset: number;
  bottom: boolean;
  mode: 'relative' | 'stickyTop' | 'stickyBottom';
  el: HTMLElement;
  argsRef: {
    offsetTop: number;
    offsetBottom: number;
    bottom: boolean;
    mode: string;
  };
  componentWillLoad(): void;
  componentShouldUpdate(): void;
  render(): any;
}
