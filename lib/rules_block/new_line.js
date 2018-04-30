// New Lines

'use strict';


module.exports = function new_line(state, startLine/*, endLine*/) {
  if (!state.isEmpty(startLine)) {
    return false;
  }

  state.push('newline_open', 'p', 1);
  state.push('hardbreak', 'br', 0);
  state.push('newline_close', '/p', -1);

  return true;
};
