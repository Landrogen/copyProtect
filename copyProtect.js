'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    'use strict';

    var CopyProtect = function () {
        function CopyProtect() {
            _classCallCheck(this, CopyProtect);

            this.init();
        }

        _createClass(CopyProtect, [{
            key: 'init',
            value: function init() {
                var selectedRange = void 0;
                document.body.addEventListener('selectstart', function (event) {
                    selectedRange = null;

                    var sel = window.getSelection();
                    sel.removeAllRanges();

                    var target = event.target;
                    if (target.nodeName == '#text') {
                        target = target.parentNode;
                    }

                    if (target.closest('.mayCopy')) {
                        var copyZone = target.closest('.mayCopy');
                        copyZone.addEventListener('mouseleave', leaveCopySection);
                    } else {
                        cancelCopy(event);
                    }

                    function leaveCopySection(event) {
                        this.removeEventListener('mouseleave', leaveCopySection);
                        var sel = window.getSelection();
                        var range = document.createRange();

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

                document.body.addEventListener('mouseup', function () {
                    var sel = window.getSelection();
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
        }]);

        return CopyProtect;
    }();

    window.addEventListener('DOMContentLoaded', function () {
        var copy = new CopyProtect();
    });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcHlQcm90ZWN0LmpzIl0sIm5hbWVzIjpbIkNvcHlQcm90ZWN0IiwiaW5pdCIsInNlbGVjdGVkUmFuZ2UiLCJkb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzZWwiLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJ0YXJnZXQiLCJub2RlTmFtZSIsInBhcmVudE5vZGUiLCJjbG9zZXN0IiwiY29weVpvbmUiLCJsZWF2ZUNvcHlTZWN0aW9uIiwiY2FuY2VsQ29weSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwicmFuZ2VDb3VudCIsImZvY3VzTm9kZSIsImdldFJhbmdlQXQiLCJlbmRDb250YWluZXIiLCJzZXRTdGFydCIsImFuY2hvck5vZGUiLCJhbmNob3JPZmZzZXQiLCJzZXRFbmQiLCJmb2N1c09mZnNldCIsImFkZFJhbmdlIiwicHJldmVudERlZmF1bHQiLCJjb3B5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQyxhQUFZO0FBQ1Q7O0FBRFMsUUFHSEEsV0FIRztBQUlMLCtCQUFjO0FBQUE7O0FBQ1YsaUJBQUtDLElBQUw7QUFDSDs7QUFOSTtBQUFBO0FBQUEsbUNBUUU7QUFDSCxvQkFBSUMsc0JBQUo7QUFDQUMseUJBQVNDLElBQVQsQ0FBY0MsZ0JBQWQsQ0FBK0IsYUFBL0IsRUFBOEMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JESixvQ0FBZ0IsSUFBaEI7O0FBRUEsd0JBQUlLLE1BQU1DLE9BQU9DLFlBQVAsRUFBVjtBQUNBRix3QkFBSUcsZUFBSjs7QUFFQSx3QkFBSUMsU0FBU0wsTUFBTUssTUFBbkI7QUFDQSx3QkFBSUEsT0FBT0MsUUFBUCxJQUFtQixPQUF2QixFQUFnQztBQUM1QkQsaUNBQVNBLE9BQU9FLFVBQWhCO0FBQ0g7O0FBRUQsd0JBQUlGLE9BQU9HLE9BQVAsQ0FBZSxVQUFmLENBQUosRUFBZ0M7QUFDNUIsNEJBQUlDLFdBQVdKLE9BQU9HLE9BQVAsQ0FBZSxVQUFmLENBQWY7QUFDQUMsaUNBQVNWLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDVyxnQkFBeEM7QUFDSCxxQkFIRCxNQUdPO0FBQ0hDLG1DQUFXWCxLQUFYO0FBQ0g7O0FBRUQsNkJBQVNVLGdCQUFULENBQTBCVixLQUExQixFQUFpQztBQUM3Qiw2QkFBS1ksbUJBQUwsQ0FBeUIsWUFBekIsRUFBdUNGLGdCQUF2QztBQUNBLDRCQUFJVCxNQUFNQyxPQUFPQyxZQUFQLEVBQVY7QUFDQSw0QkFBSVUsUUFBUWhCLFNBQVNpQixXQUFULEVBQVo7O0FBRUE7QUFDQTtBQUNBLDRCQUFJYixJQUFJYyxVQUFSLEVBQW9CO0FBQ2hCLGdDQUFJZCxJQUFJZSxTQUFKLEtBQWtCZixJQUFJZ0IsVUFBSixDQUFlLENBQWYsRUFBa0JDLFlBQXhDLEVBQXNEO0FBQ2xEO0FBQ0FMLHNDQUFNTSxRQUFOLENBQWVsQixJQUFJbUIsVUFBbkIsRUFBK0JuQixJQUFJb0IsWUFBbkM7QUFDQVIsc0NBQU1TLE1BQU4sQ0FBYXJCLElBQUllLFNBQWpCLEVBQTRCZixJQUFJc0IsV0FBaEM7QUFDSCw2QkFKRCxNQUlPO0FBQ0g7QUFDQVYsc0NBQU1NLFFBQU4sQ0FBZWxCLElBQUllLFNBQW5CLEVBQThCZixJQUFJc0IsV0FBbEM7QUFDQVYsc0NBQU1TLE1BQU4sQ0FBYXJCLElBQUltQixVQUFqQixFQUE2Qm5CLElBQUlvQixZQUFqQztBQUNIO0FBQ0R6Qiw0Q0FBZ0JpQixLQUFoQjtBQUNIO0FBQ0RGLG1DQUFXWCxLQUFYO0FBQ0EsK0JBQU8sS0FBUDtBQUNIO0FBQ0osaUJBeENEOztBQTBDQUgseUJBQVNDLElBQVQsQ0FBY0MsZ0JBQWQsQ0FBK0IsU0FBL0IsRUFBMEMsWUFBTTtBQUM1Qyx3QkFBSUUsTUFBTUMsT0FBT0MsWUFBUCxFQUFWO0FBQ0Esd0JBQUlQLGFBQUosRUFBbUI7QUFDZkssNEJBQUlHLGVBQUo7QUFDQUgsNEJBQUl1QixRQUFKLENBQWE1QixhQUFiO0FBQ0FBLHdDQUFnQixJQUFoQjtBQUNIO0FBQ0osaUJBUEQ7O0FBU0EseUJBQVNlLFVBQVQsQ0FBb0JYLEtBQXBCLEVBQTJCO0FBQ3ZCQSwwQkFBTXlCLGNBQU47QUFDSDtBQUNKO0FBaEVJOztBQUFBO0FBQUE7O0FBb0VUdkIsV0FBT0gsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDOUMsWUFBSTJCLE9BQU8sSUFBSWhDLFdBQUosRUFBWDtBQUNILEtBRkQ7QUFHSCxDQXZFQSxHQUFEIiwiZmlsZSI6ImNvcHlQcm90ZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBjbGFzcyBDb3B5UHJvdGVjdCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdCgpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkUmFuZ2U7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0c3RhcnQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUmFuZ2UgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT0gJyN0ZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLm1heUNvcHknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3B5Wm9uZSA9IHRhcmdldC5jbG9zZXN0KCcubWF5Q29weScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcHlab25lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBsZWF2ZUNvcHlTZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb3B5KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsZWF2ZUNvcHlTZWN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbGVhdmVDb3B5U2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBmaXhlZCBjdXJyZW50IHRleHQgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGV0ZWN0IGRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsLmZvY3VzTm9kZSA9PT0gc2VsLmdldFJhbmdlQXQoMCkuZW5kQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3J3YXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5zZXRTdGFydChzZWwuYW5jaG9yTm9kZSwgc2VsLmFuY2hvck9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5zZXRFbmQoc2VsLmZvY3VzTm9kZSwgc2VsLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldmVyc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHNlbC5mb2N1c05vZGUsIHNlbC5mb2N1c09mZnNldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5zZXRFbmQoc2VsLmFuY2hvck5vZGUsIHNlbC5hbmNob3JPZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUmFuZ2UgPSByYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ29weShldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWwuYWRkUmFuZ2Uoc2VsZWN0ZWRSYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSYW5nZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2FuY2VsQ29weShldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvcHkgPSBuZXcgQ29weVByb3RlY3QoKTtcclxuICAgIH0pO1xyXG59KCkpO1xyXG4iXX0=
