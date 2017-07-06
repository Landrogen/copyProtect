(function () {
    'use strict';

    class CopyProtect {
        constructor() {
            this.init();
        }

        init() {
            let selectedRange;
            document.body.addEventListener('selectstart', (event) => {
                selectedRange = null;

                let sel = window.getSelection();
                sel.removeAllRanges();

                let target = event.target;
                if (target.nodeName == '#text') {
                    target = target.parentNode;
                }

                if (target.closest('.mayCopy')) {
                    let copyZone = target.closest('.mayCopy');
                    copyZone.addEventListener('mouseleave', leaveCopySection)
                } else {
                    cancelCopy(event);
                }

                function leaveCopySection(event) {
                    this.removeEventListener('mouseleave', leaveCopySection);
                    let sel = window.getSelection();
                    let range = document.createRange();

                    // fixed current text selection
                    // detect direction
                    if (sel.rangeCount) {
                        if (sel.focusNode === sel.getRangeAt(0).endContainer) {
                            // forward
                            range.setStart(sel.anchorNode, sel.anchorOffset);
                            range.setEnd(sel.focusNode, sel.focusOffset);
                        } else {
                            // reverse
                            range.setStart(sel.focusNode, sel.focusOffset);
                            range.setEnd(sel.anchorNode, sel.anchorOffset);
                        }
                        selectedRange = range;
                    }
                    cancelCopy(event);
                    return false;
                }
            });

            document.body.addEventListener('mouseup', () => {
                let sel = window.getSelection();
                if (selectedRange) {
                    sel.removeAllRanges();
                    sel.addRange(selectedRange);
                    selectedRange = null;
                }
            });

            function cancelCopy(event) {
                event.preventDefault();
            }
        }
    }


    window.addEventListener('DOMContentLoaded', () => {
        let copy = new CopyProtect();
    });
}());
