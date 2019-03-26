import { add_lesson, edit_lesson } from './API';

function go_to_lesson(history) {
  return function(xh) {
    history.push("/lesson/" + JSON.parse(xh.responseText).id);
  }
}

function shit(xh) {
  alert("Shit!");
}

export function add_lesson_then_view(history) {
  return function(data) {
    add_lesson(
      data,
      go_to_lesson(history),
      shit,
    );
  }
}

export function edit_lesson_then_view(history) {
  return function(data) {
    edit_lesson(
      data,
      go_to_lesson(history),
      shit,
    );
  }
}
