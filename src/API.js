let ServerAddress = "http://localhost:8080";

export function get_lessons_list(resultHandler) {
  var xmlhttp = new XMLHttpRequest();
  var url = ServerAddress + "/lessons/";
  xmlhttp.onreadystatechange = function() {
    var items = [];
    if (this.readyState === 4 && this.status === 200)
      items = JSON.parse(this.responseText);
    resultHandler(items);
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

export function get_lesson(id, resultHandler) {
  var xmlhttp = new XMLHttpRequest();
  var url = ServerAddress + "/lesson/?id=" + id;
  xmlhttp.onreadystatechange = function() {
    var lesson = {};
    if (this.readyState === 4 && this.status === 200) {
      lesson = JSON.parse(this.responseText);
    }
    else {
      lesson.title = '۴۰۴';
      lesson.text = '۴۰۴ بار گشتم نبود نگرد نیست.';
    }
    resultHandler(lesson);
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
