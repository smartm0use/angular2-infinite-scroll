import {Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';

/**
 * The infinite scroll directive.
 *
 * Providing a number on input offsets the distance from the bottom by that amount.
 *
 * Example:
 * <section [infiniteScroll] (onScroll)='loadMoreResults()/>
 * or
 * <section [infiniteScroll]=400 (onScroll)='loadMoreResults()/>
 */
@Directive({
  selector: '[infiniteScroll]',
  host: {
    '(scroll)': 'scroll($event)'
  }
})
export class InfiniteScroll {
  @Output() onScroll = new EventEmitter<any>();
  @Input('infiniteScroll') offset: number;
  public element: HTMLElement;

  constructor(private _element: ElementRef) {
    this.element = this._element.nativeElement;
  }

  scroll() {
    let breakpoint = this.element.scrollTop + this.element.clientHeight + this.offset;
    if (breakpoint >= this.element.scrollHeight) { this.onScroll.emit(null); }
  }
}
