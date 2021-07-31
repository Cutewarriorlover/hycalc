/**
 * This function applies a filter to an input element, which allows only a certain range of characters to be inputted.
 *
 * @param textbox - The input element to apply the filter on
 * @param inputFilter - The filter to apply
 */
export const setInputFilter = (
  textbox: Element,
  inputFilter: (value: string) => boolean
): void => {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(
      event,
      function (
        this: (HTMLInputElement | HTMLTextAreaElement) & {
          oldValue: string;
          oldSelectionStart: number | null;
          oldSelectionEnd: number | null;
        }
      ) {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (Object.prototype.hasOwnProperty.call(this, "oldValue")) {
          this.value = this.oldValue;
          if (
            this.oldSelectionStart !== null &&
            this.oldSelectionEnd !== null
          ) {
            this.setSelectionRange(
              this.oldSelectionStart,
              this.oldSelectionEnd
            );
          }
        } else {
          this.value = "";
        }
      }
    );
  });
};
