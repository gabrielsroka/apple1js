/* Copyright 2010-2023 Will Scullin <scullin@scullinsteel.com>
 *
 * Permission to use, copy, modify, distribute, and sell this software and its
 * documentation for any purpose is hereby granted without fee, provided that
 * the above copyright notice appear in all copies and that both that
 * copyright notice and this permission notice appear in supporting
 * documentation.  No representations are made about the suitability of this
 * software for any purpose.  It is provided "as is" without express or
 * implied warranty.
 */

export default class Prefs {
  havePrefs() {
    return typeof localStorage !== 'undefined';
  }
  readPref(name: string) {
    if (localStorage) return localStorage.getItem(name);
    return null;
  }
  writePref(name: string, value: string) {
    if (localStorage) localStorage.setItem(name, value);
  }
}
