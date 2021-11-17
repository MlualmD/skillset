export const changeValue = (click) => {
  if (click.source_id && click.target_id) {
    const value = document.getElementById(click.source_id).value;
    var target = document.getElementById(click.target_id);
    target.innerHTML = value;
  }
};
